import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, Upload, BookOpen, Search, Tag, Clock, User, ArrowLeft, Sparkles, AlertTriangle, CheckCircle, HelpCircle, FileText, Loader2, Trash2, ChevronDown, ChevronUp, Eye, EyeOff, Filter, X, Download } from 'lucide-react';
import { ViewState } from '../types';
import { SourceRecord, TopicEntry, TranscriptUploadForm, ProcessingStatus, ClaimNote } from '../transcriptTypes';
import { processRawTranscript } from '../services/geminiService';
import { saveProcessingResult, getSourceRecords, getAllTopics, getTopicsBySource, searchTopics, deleteSourceRecord, getLibraryStats, downloadTranscriptJSON } from '../services/transcriptStore';

interface TranscriptProcessorProps {
  setView: (v: ViewState) => void;
  goHome: () => void;
}

// ============================================================
// CLAIM TYPE COLORS & LABELS
// ============================================================
const claimTypeConfig: Record<string, { label: string; color: string; bg: string; border: string }> = {
  claim: { label: 'Claim', color: 'text-blue-300', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  interpretation: { label: 'Interpretation', color: 'text-purple-300', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
  practice_instruction: { label: 'Practice', color: 'text-emerald-300', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
  warning: { label: 'Warning', color: 'text-amber-300', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
  historical_assertion: { label: 'Historical', color: 'text-cyan-300', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30' },
  anecdote: { label: 'Anecdote', color: 'text-rose-300', bg: 'bg-rose-500/10', border: 'border-rose-500/30' },
  mythic_explanation: { label: 'Mythic', color: 'text-violet-300', bg: 'bg-violet-500/10', border: 'border-violet-500/30' },
  contested_statement: { label: 'Contested', color: 'text-orange-300', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
  needs_verification: { label: 'Unverified', color: 'text-yellow-300', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' },
};

const verificationConfig: Record<string, { icon: React.ReactNode; color: string }> = {
  verified: { icon: <CheckCircle className="w-3.5 h-3.5" />, color: 'text-emerald-400' },
  interpretive: { icon: <Eye className="w-3.5 h-3.5" />, color: 'text-purple-400' },
  'tradition-specific': { icon: <BookOpen className="w-3.5 h-3.5" />, color: 'text-blue-400' },
  'needs verification': { icon: <HelpCircle className="w-3.5 h-3.5" />, color: 'text-yellow-400' },
  contested: { icon: <AlertTriangle className="w-3.5 h-3.5" />, color: 'text-orange-400' },
  'personal opinion': { icon: <User className="w-3.5 h-3.5" />, color: 'text-rose-400' },
};

// ============================================================
// MAIN COMPONENT
// ============================================================
const TranscriptProcessor: React.FC<TranscriptProcessorProps> = ({ goHome }) => {
  const [subView, setSubView] = useState<'library' | 'upload' | 'source' | 'topic'>('library');
  const [sources, setSources] = useState<SourceRecord[]>([]);
  const [topics, setTopics] = useState<TopicEntry[]>([]);
  const [selectedSourceId, setSelectedSourceId] = useState<string | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTeacher, setFilterTeacher] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showRawClaims, setShowRawClaims] = useState(true);

  // Upload state
  const [form, setForm] = useState<TranscriptUploadForm>({
    rawTranscript: '',
    teacher: '',
    title: '',
    date: '',
    traditionLens: '',
    sourceType: 'Live talk / oral teaching / commentary',
  });
  const [processingStatus, setProcessingStatus] = useState<ProcessingStatus>('idle');
  const [processingError, setProcessingError] = useState('');

  // Load data
  const refreshData = () => {
    setSources(getSourceRecords());
    setTopics(getAllTopics());
  };

  useEffect(() => {
    refreshData();
  }, []);

  // Computed
  const stats = useMemo(() => getLibraryStats(), [sources, topics]);

  const filteredTopics = useMemo(() => {
    let result = searchQuery ? searchTopics(searchQuery) : topics;
    if (filterTeacher) {
      result = result.filter(t => t.teacher === filterTeacher);
    }
    return result;
  }, [searchQuery, filterTeacher, topics]);

  const selectedSource = useMemo(() =>
    sources.find(s => s.id === selectedSourceId) || null
    , [selectedSourceId, sources]);

  const selectedTopic = useMemo(() =>
    topics.find(t => t.id === selectedTopicId) || null
    , [selectedTopicId, topics]);

  const sourceTopics = useMemo(() =>
    selectedSourceId ? getTopicsBySource(selectedSourceId) : []
    , [selectedSourceId, topics]);

  // Handlers
  const handleProcess = async () => {
    if (!form.rawTranscript.trim() || !form.teacher.trim() || !form.title.trim()) return;
    setProcessingStatus('processing');
    setProcessingError('');
    try {
      const result = await processRawTranscript(form);
      saveProcessingResult(result.source, result.topics);
      refreshData();
      setProcessingStatus('success');
      setForm({ rawTranscript: '', teacher: '', title: '', date: '', traditionLens: '', sourceType: 'Live talk / oral teaching / commentary' });
      // Auto-navigate to the new source after a brief delay
      setTimeout(() => {
        setSelectedSourceId(result.source.id);
        setSubView('source');
        setProcessingStatus('idle');
      }, 2000);
    } catch (err: any) {
      setProcessingError(err.message || 'Processing failed');
      setProcessingStatus('error');
    }
  };

  const handleDelete = (id: string) => {
    deleteSourceRecord(id);
    refreshData();
    if (selectedSourceId === id) {
      setSelectedSourceId(null);
      setSubView('library');
    }
  };

  const navigateToSource = (id: string) => {
    setSelectedSourceId(id);
    setSubView('source');
  };

  const navigateToTopic = (id: string) => {
    setSelectedTopicId(id);
    setSubView('topic');
  };

  const goBackFromTopic = () => {
    if (selectedTopic && selectedTopic.sourceId === selectedSourceId) {
      setSubView('source');
    } else {
      setSubView('library');
    }
    setSelectedTopicId(null);
  };

  // ============================================================
  // UPLOAD VIEW
  // ============================================================
  const renderUpload = () => (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <button onClick={() => setSubView('library')} className="text-indigo-300 hover:text-white flex items-center gap-1 transition-colors group text-sm">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
        </button>
        <h2 className="text-2xl font-bold text-teal-300 serif">Upload New Transcript</h2>
      </div>

      <div className="bg-indigo-950/40 border border-indigo-800/50 rounded-2xl p-6 space-y-5 backdrop-blur-sm">
        {/* Teacher & Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-indigo-400 uppercase tracking-widest mb-1.5 font-bold">Teacher / Speaker *</label>
            <input
              type="text"
              value={form.teacher}
              onChange={e => setForm(f => ({ ...f, teacher: e.target.value }))}
              placeholder="e.g. Brotha Oba"
              className="w-full bg-indigo-900/40 border border-indigo-700/50 rounded-xl px-4 py-3 text-white placeholder-indigo-500 focus:border-teal-500/50 focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs text-indigo-400 uppercase tracking-widest mb-1.5 font-bold">Source Title *</label>
            <input
              type="text"
              value={form.title}
              onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
              placeholder="e.g. Brotha Oba Live — January 5, 2026"
              className="w-full bg-indigo-900/40 border border-indigo-700/50 rounded-xl px-4 py-3 text-white placeholder-indigo-500 focus:border-teal-500/50 focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-all"
            />
          </div>
        </div>

        {/* Date & Tradition Lens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs text-indigo-400 uppercase tracking-widest mb-1.5 font-bold">Date</label>
            <input
              type="date"
              value={form.date}
              onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
              className="w-full bg-indigo-900/40 border border-indigo-700/50 rounded-xl px-4 py-3 text-white focus:border-teal-500/50 focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs text-indigo-400 uppercase tracking-widest mb-1.5 font-bold">Tradition Lens</label>
            <input
              type="text"
              value={form.traditionLens}
              onChange={e => setForm(f => ({ ...f, traditionLens: e.target.value }))}
              placeholder="e.g. Regla de Ocha / Lucumí"
              className="w-full bg-indigo-900/40 border border-indigo-700/50 rounded-xl px-4 py-3 text-white placeholder-indigo-500 focus:border-teal-500/50 focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs text-indigo-400 uppercase tracking-widest mb-1.5 font-bold">Source Type</label>
            <select
              value={form.sourceType}
              onChange={e => setForm(f => ({ ...f, sourceType: e.target.value }))}
              className="w-full bg-indigo-900/40 border border-indigo-700/50 rounded-xl px-4 py-3 text-white focus:border-teal-500/50 focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-all"
            >
              <option value="Live talk / oral teaching / commentary">Live Talk / Oral Teaching</option>
              <option value="Lecture / structured lesson">Lecture / Structured Lesson</option>
              <option value="Interview / conversation">Interview / Conversation</option>
              <option value="Podcast / audio recording">Podcast / Audio Recording</option>
              <option value="Q&A / community discussion">Q&A / Community Discussion</option>
            </select>
          </div>
        </div>

        {/* Transcript Text Area */}
        <div>
          <label className="block text-xs text-indigo-400 uppercase tracking-widest mb-1.5 font-bold">Raw YouTube Transcript *</label>
          <textarea
            value={form.rawTranscript}
            onChange={e => setForm(f => ({ ...f, rawTranscript: e.target.value }))}
            placeholder="Paste the full YouTube transcript here. The AI agent will clean filler words, timestamps, and transcription noise, then structure the content into a layered knowledge system..."
            rows={14}
            className="w-full bg-indigo-900/40 border border-indigo-700/50 rounded-xl px-4 py-3 text-white placeholder-indigo-500 focus:border-teal-500/50 focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-all resize-y font-mono text-sm leading-relaxed"
          />
          <p className="text-xs text-indigo-500 mt-1">{form.rawTranscript.length.toLocaleString()} characters</p>
        </div>

        {/* Process Button */}
        <div className="flex flex-col items-center gap-4 pt-2">
          <button
            onClick={handleProcess}
            disabled={processingStatus === 'processing' || !form.rawTranscript.trim() || !form.teacher.trim() || !form.title.trim()}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all ${
              processingStatus === 'processing'
                ? 'bg-teal-900/50 text-teal-400 cursor-wait'
                : !form.rawTranscript.trim() || !form.teacher.trim() || !form.title.trim()
                  ? 'bg-indigo-900/30 text-indigo-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-teal-600 to-emerald-700 text-white hover:scale-105 hover:shadow-[0_0_40px_rgba(20,184,166,0.3)]'
            }`}
          >
            {processingStatus === 'processing' ? (
              <><Loader2 className="w-6 h-6 animate-spin" /> AI Agent Processing...</>
            ) : (
              <><Sparkles className="w-6 h-6" /> Process with AI Agent</>
            )}
          </button>

          {processingStatus === 'processing' && (
            <div className="text-center space-y-2 animate-pulse">
              <p className="text-teal-400 text-sm">Cleaning transcript • Identifying topics • Labeling claims • Structuring knowledge...</p>
              <p className="text-indigo-500 text-xs">This may take 15–30 seconds depending on transcript length</p>
            </div>
          )}

          {processingStatus === 'success' && (
            <div className="flex items-center gap-2 text-emerald-400 font-bold animate-in fade-in">
              <CheckCircle className="w-5 h-5" /> Transcript processed successfully! Redirecting...
            </div>
          )}

          {processingStatus === 'error' && (
            <div className="flex items-center gap-2 text-red-400 text-sm">
              <AlertTriangle className="w-4 h-4" /> {processingError}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // ============================================================
  // LIBRARY VIEW
  // ============================================================
  const renderLibrary = () => (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header + Stats */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-emerald-300 to-teal-400 serif tracking-wider">
            Transcript Library
          </h2>
          <p className="text-indigo-300/70 text-sm mt-1">
            {stats.totalSources} source{stats.totalSources !== 1 ? 's' : ''} • {stats.totalTopics} topic{stats.totalTopics !== 1 ? 's' : ''} • {stats.teachers.length} teacher{stats.teachers.length !== 1 ? 's' : ''}
          </p>
        </div>
        <button
          onClick={() => setSubView('upload')}
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-600 to-emerald-700 text-white rounded-xl font-bold transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(20,184,166,0.3)] text-sm"
        >
          <Upload className="w-4 h-4" /> Upload New Transcript
        </button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search topics, tags, teachers..."
            className="w-full bg-indigo-900/30 border border-indigo-700/50 rounded-xl pl-10 pr-4 py-2.5 text-white placeholder-indigo-500 focus:border-teal-500/50 focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-all text-sm"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-500 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        {stats.teachers.length > 1 && (
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all border ${
              showFilters || filterTeacher
                ? 'bg-teal-900/30 border-teal-500/50 text-teal-300'
                : 'bg-indigo-900/30 border-indigo-700/50 text-indigo-400 hover:border-indigo-600'
            }`}
          >
            <Filter className="w-4 h-4" /> Filter
            {filterTeacher && <span className="px-1.5 py-0.5 bg-teal-500/20 rounded text-xs">{filterTeacher}</span>}
          </button>
        )}
      </div>

      {showFilters && stats.teachers.length > 1 && (
        <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-2">
          <button
            onClick={() => setFilterTeacher(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              !filterTeacher ? 'bg-teal-500 text-white' : 'bg-indigo-900/40 text-indigo-400 border border-indigo-700/50 hover:border-indigo-600'
            }`}
          >All Teachers</button>
          {stats.teachers.map(t => (
            <button
              key={t}
              onClick={() => setFilterTeacher(t)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                filterTeacher === t ? 'bg-teal-500 text-white' : 'bg-indigo-900/40 text-indigo-400 border border-indigo-700/50 hover:border-indigo-600'
              }`}
            >{t}</button>
          ))}
        </div>
      )}

      {/* Empty State */}
      {sources.length === 0 && (
        <div className="text-center py-20 space-y-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-teal-900/20 border border-teal-500/20 flex items-center justify-center">
            <FileText className="w-10 h-10 text-teal-500/40" />
          </div>
          <h3 className="text-xl text-indigo-300 font-bold">No transcripts yet</h3>
          <p className="text-indigo-500 text-sm max-w-md mx-auto">
            Upload a YouTube transcript and the AI agent will clean it, split it into topics,
            label each claim, and structure it into your knowledge system.
          </p>
          <button
            onClick={() => setSubView('upload')}
            className="mt-4 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-700 text-white rounded-xl font-bold transition-all hover:scale-105 mx-auto"
          >
            <Upload className="w-5 h-5" /> Upload Your First Transcript
          </button>
        </div>
      )}

      {/* Source Cards */}
      {sources.length > 0 && !searchQuery && (
        <div className="space-y-4">
          <h3 className="text-xs text-indigo-400 uppercase tracking-widest font-bold">Sources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sources
              .filter(s => !filterTeacher || s.teacher === filterTeacher)
              .map(source => (
              <button
                key={source.id}
                onClick={() => navigateToSource(source.id)}
                className="group relative overflow-hidden rounded-xl bg-indigo-900/30 border border-indigo-700/50 hover:border-teal-500/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(20,184,166,0.15)] p-5 text-left backdrop-blur-sm"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl group-hover:bg-teal-500/10 transition-all pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-teal-400" />
                      <span className="text-teal-300 text-sm font-bold">{source.teacher}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-indigo-500 text-xs">
                      <Clock className="w-3 h-3" />
                      {source.date || new Date(source.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-lg text-white font-bold mb-2 group-hover:text-teal-200 transition-colors leading-tight">{source.title}</h3>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {source.toneTags.slice(0, 4).map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-indigo-800/40 rounded-full text-indigo-300 text-[10px] font-bold uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-indigo-400">{source.topicIds.length} topic{source.topicIds.length !== 1 ? 's' : ''}</span>
                    <span className="text-teal-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">View Topics →</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Results (topics) */}
      {searchQuery && (
        <div className="space-y-4">
          <h3 className="text-xs text-indigo-400 uppercase tracking-widest font-bold">
            {filteredTopics.length} result{filteredTopics.length !== 1 ? 's' : ''} for "{searchQuery}"
          </h3>
          {filteredTopics.length === 0 ? (
            <p className="text-indigo-500 text-sm py-8 text-center">No matching topics found.</p>
          ) : (
            <div className="space-y-2">
              {filteredTopics.map(topic => (
                <button
                  key={topic.id}
                  onClick={() => navigateToTopic(topic.id)}
                  className="w-full text-left p-4 bg-indigo-900/20 border border-indigo-700/30 rounded-xl hover:border-teal-500/30 transition-all group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-white font-bold group-hover:text-teal-200 transition-colors">{topic.title}</h4>
                      <p className="text-indigo-300/70 text-sm mt-1 line-clamp-2">{topic.summary}</p>
                    </div>
                    <div className="shrink-0 flex flex-col items-end gap-1">
                      <span className="text-teal-400 text-xs font-bold">{topic.teacher}</span>
                      <span className="text-indigo-500 text-[10px] uppercase">{topic.knowledgeType}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* All Topics (when no search but sources exist) */}
      {!searchQuery && sources.length > 0 && (
        <div className="space-y-4 mt-8">
          <h3 className="text-xs text-indigo-400 uppercase tracking-widest font-bold">All Topics ({topics.length})</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {(filterTeacher ? filteredTopics : topics).slice(0, 12).map(topic => {
              const verifConfig = verificationConfig[topic.verificationStatus] || verificationConfig['needs verification'];
              return (
                <button
                  key={topic.id}
                  onClick={() => navigateToTopic(topic.id)}
                  className="text-left p-4 bg-indigo-900/20 border border-indigo-700/30 rounded-xl hover:border-teal-500/30 transition-all group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`flex items-center gap-1 text-[10px] font-bold uppercase ${verifConfig?.color || 'text-indigo-400'}`}>
                      {verifConfig?.icon} {topic.verificationStatus}
                    </span>
                  </div>
                  <h4 className="text-white font-bold text-sm group-hover:text-teal-200 transition-colors mb-1">{topic.title}</h4>
                  <p className="text-indigo-400/70 text-xs line-clamp-2">{topic.summary}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {topic.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-1.5 py-0.5 bg-indigo-800/30 rounded text-indigo-400 text-[9px] uppercase">{tag}</span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
          {(filterTeacher ? filteredTopics : topics).length > 12 && (
            <p className="text-center text-indigo-500 text-xs">Showing 12 of {(filterTeacher ? filteredTopics : topics).length} topics. Use search to find specific content.</p>
          )}
        </div>
      )}
    </div>
  );

  // ============================================================
  // SOURCE DETAIL VIEW
  // ============================================================
  const renderSourceDetail = () => {
    if (!selectedSource) return null;
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <button onClick={() => { setSubView('library'); setSelectedSourceId(null); }} className="text-indigo-300 hover:text-white flex items-center gap-1 transition-colors group text-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Library
          </button>
        </div>

        {/* Source Header */}
        <div className="bg-indigo-950/40 border border-indigo-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-700/50 to-teal-900/50 border border-teal-500/30 flex items-center justify-center">
                <User className="w-6 h-6 text-teal-300" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white serif">{selectedSource.title}</h2>
                <p className="text-teal-400 text-sm font-bold">{selectedSource.teacher}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => downloadTranscriptJSON(selectedSource, sourceTopics)}
                className="text-teal-500 hover:text-teal-300 transition-colors p-2 flex items-center gap-1.5 text-xs font-bold"
                title="Download as JSON to bake into the project"
              >
                <Download className="w-4 h-4" /> Save JSON
              </button>
              <button
                onClick={() => { if (confirm('Delete this source and all its topics?')) handleDelete(selectedSource.id); }}
                className="text-indigo-600 hover:text-red-400 transition-colors p-2"
                title="Delete source"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs mb-4">
            <div className="bg-indigo-900/30 rounded-lg p-2.5">
              <span className="text-indigo-500 uppercase tracking-wider font-bold">Date</span>
              <p className="text-indigo-200 mt-0.5">{selectedSource.date || 'Not specified'}</p>
            </div>
            <div className="bg-indigo-900/30 rounded-lg p-2.5">
              <span className="text-indigo-500 uppercase tracking-wider font-bold">Type</span>
              <p className="text-indigo-200 mt-0.5">{selectedSource.sourceType}</p>
            </div>
            <div className="bg-indigo-900/30 rounded-lg p-2.5">
              <span className="text-indigo-500 uppercase tracking-wider font-bold">Tradition</span>
              <p className="text-indigo-200 mt-0.5">{selectedSource.traditionLens}</p>
            </div>
            <div className="bg-indigo-900/30 rounded-lg p-2.5">
              <span className="text-indigo-500 uppercase tracking-wider font-bold">Topics</span>
              <p className="text-indigo-200 mt-0.5">{sourceTopics.length} entries</p>
            </div>
          </div>

          {/* Tone Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {selectedSource.toneTags.map(tag => (
              <span key={tag} className="px-2.5 py-1 bg-teal-900/20 border border-teal-500/20 rounded-full text-teal-300 text-[10px] font-bold uppercase tracking-wider">{tag}</span>
            ))}
          </div>

          {/* Editorial Note */}
          {selectedSource.editorialNote && (
            <div className="p-4 bg-indigo-900/20 border-l-3 border-l-teal-500/50 rounded-r-lg">
              <p className="text-indigo-300/80 text-sm italic leading-relaxed">{selectedSource.editorialNote}</p>
            </div>
          )}
        </div>

        {/* Topic Cards */}
        <div className="space-y-3">
          <h3 className="text-xs text-indigo-400 uppercase tracking-widest font-bold">Topic Entries ({sourceTopics.length})</h3>
          {sourceTopics.map(topic => {
            const verifConfig = verificationConfig[topic.verificationStatus] || verificationConfig['needs verification'];
            return (
              <button
                key={topic.id}
                onClick={() => navigateToTopic(topic.id)}
                className="w-full text-left p-5 bg-indigo-900/20 border border-indigo-700/30 rounded-xl hover:border-teal-500/30 transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`flex items-center gap-1 text-[10px] font-bold uppercase ${verifConfig?.color || 'text-indigo-400'}`}>
                        {verifConfig?.icon} {topic.verificationStatus}
                      </span>
                      <span className="text-indigo-600">•</span>
                      <span className="text-indigo-400 text-[10px] uppercase font-bold">{topic.knowledgeType}</span>
                    </div>
                    <h4 className="text-lg text-white font-bold group-hover:text-teal-200 transition-colors">{topic.title}</h4>
                    <p className="text-indigo-300/70 text-sm mt-1">{topic.summary}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {topic.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-indigo-800/30 rounded-full text-indigo-400 text-[10px] uppercase">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-bold">
                    Read →
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  // ============================================================
  // TOPIC DETAIL VIEW
  // ============================================================
  const renderTopicDetail = () => {
    if (!selectedTopic) return null;
    const verifConfig = verificationConfig[selectedTopic.verificationStatus] || verificationConfig['needs verification'];

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <button onClick={goBackFromTopic} className="text-indigo-300 hover:text-white flex items-center gap-1 transition-colors group text-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
          </button>
        </div>

        {/* Topic Header */}
        <div className="bg-indigo-950/40 border border-indigo-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${verifConfig?.color || 'text-indigo-400'} bg-indigo-900/40 border border-indigo-700/30`}>
              {verifConfig?.icon} {selectedTopic.verificationStatus}
            </span>
            <span className="px-2.5 py-1 bg-teal-900/20 border border-teal-500/20 rounded-full text-teal-300 text-xs font-bold">{selectedTopic.knowledgeType}</span>
          </div>

          <h2 className="text-3xl font-bold text-white serif mb-2">{selectedTopic.title}</h2>
          <div className="flex items-center gap-3 text-sm text-indigo-400">
            <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {selectedTopic.teacher}</span>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-indigo-950/30 border border-indigo-800/30 rounded-xl p-5">
          <h3 className="text-xs text-teal-400 uppercase tracking-widest font-bold mb-2">Summary</h3>
          <p className="text-indigo-100 leading-relaxed">{selectedTopic.summary}</p>
        </div>

        {/* Detailed Notes */}
        <div className="bg-indigo-950/30 border border-indigo-800/30 rounded-xl p-5">
          <h3 className="text-xs text-teal-400 uppercase tracking-widest font-bold mb-2">Detailed Notes</h3>
          <p className="text-indigo-200/80 leading-relaxed">{selectedTopic.detailedNotes}</p>
        </div>

        {/* Optional Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selectedTopic.practiceImplications && (
            <div className="bg-emerald-950/20 border border-emerald-700/20 rounded-xl p-4">
              <h4 className="text-xs text-emerald-400 uppercase tracking-widest font-bold mb-1.5 flex items-center gap-1.5">
                <CheckCircle className="w-3 h-3" /> Practice Implications
              </h4>
              <p className="text-emerald-200/70 text-sm leading-relaxed">{selectedTopic.practiceImplications}</p>
            </div>
          )}
          {selectedTopic.warnings && (
            <div className="bg-amber-950/20 border border-amber-700/20 rounded-xl p-4">
              <h4 className="text-xs text-amber-400 uppercase tracking-widest font-bold mb-1.5 flex items-center gap-1.5">
                <AlertTriangle className="w-3 h-3" /> Warnings / Cautions
              </h4>
              <p className="text-amber-200/70 text-sm leading-relaxed">{selectedTopic.warnings}</p>
            </div>
          )}
          {selectedTopic.historicalClaims && (
            <div className="bg-cyan-950/20 border border-cyan-700/20 rounded-xl p-4">
              <h4 className="text-xs text-cyan-400 uppercase tracking-widest font-bold mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3 h-3" /> Historical Claims
              </h4>
              <p className="text-cyan-200/70 text-sm leading-relaxed">{selectedTopic.historicalClaims}</p>
            </div>
          )}
          {selectedTopic.mythicReferences && (
            <div className="bg-violet-950/20 border border-violet-700/20 rounded-xl p-4">
              <h4 className="text-xs text-violet-400 uppercase tracking-widest font-bold mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" /> Mythic / Narrative References
              </h4>
              <p className="text-violet-200/70 text-sm leading-relaxed">{selectedTopic.mythicReferences}</p>
            </div>
          )}
          {selectedTopic.lineageSensitivity && (
            <div className="bg-rose-950/20 border border-rose-700/20 rounded-xl p-4">
              <h4 className="text-xs text-rose-400 uppercase tracking-widest font-bold mb-1.5 flex items-center gap-1.5">
                <AlertTriangle className="w-3 h-3" /> Lineage Sensitivity
              </h4>
              <p className="text-rose-200/70 text-sm leading-relaxed">{selectedTopic.lineageSensitivity}</p>
            </div>
          )}
        </div>

        {/* Claims */}
        {selectedTopic.claims.length > 0 && (
          <div className="bg-indigo-950/30 border border-indigo-800/30 rounded-xl p-5">
            <button
              onClick={() => setShowRawClaims(!showRawClaims)}
              className="flex items-center justify-between w-full mb-3"
            >
              <h3 className="text-xs text-teal-400 uppercase tracking-widest font-bold">
                Claim-Level Notes ({selectedTopic.claims.length})
              </h3>
              {showRawClaims ? <ChevronUp className="w-4 h-4 text-indigo-500" /> : <ChevronDown className="w-4 h-4 text-indigo-500" />}
            </button>
            {showRawClaims && (
              <div className="space-y-2 animate-in fade-in">
                {selectedTopic.claims.map((claim) => {
                  const config = claimTypeConfig[claim.type] || claimTypeConfig.claim;
                  return (
                    <div key={claim.id} className={`flex items-start gap-3 p-3 rounded-lg ${config.bg} border ${config.border}`}>
                      <span className={`shrink-0 px-2 py-0.5 rounded text-[10px] font-bold uppercase ${config.color} bg-indigo-900/30`}>
                        {config.label}
                      </span>
                      <p className="text-indigo-200/80 text-sm leading-relaxed">{claim.content}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {selectedTopic.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-indigo-800/30 border border-indigo-700/30 rounded-full text-indigo-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
              <Tag className="w-3 h-3" /> {tag}
            </span>
          ))}
        </div>
      </div>
    );
  };

  // ============================================================
  // MAIN RENDER
  // ============================================================
  return (
    <div className="min-h-screen pb-12">
      <header className="relative pt-12 pb-6 px-6">
        <button onClick={goHome} className="absolute top-12 left-6 text-indigo-300 hover:text-white flex items-center gap-2 transition-colors group">
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Home
        </button>
      </header>

      <div className="px-6">
        {subView === 'library' && renderLibrary()}
        {subView === 'upload' && renderUpload()}
        {subView === 'source' && renderSourceDetail()}
        {subView === 'topic' && renderTopicDetail()}
      </div>
    </div>
  );
};

export default TranscriptProcessor;
