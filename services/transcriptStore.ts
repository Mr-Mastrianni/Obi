
import { SourceRecord, TopicEntry } from '../transcriptTypes';
import { staticSources, staticTopics } from '../data/transcripts/index';

const SOURCES_KEY = 'obi_sources';
const TOPICS_KEY = 'obi_topics';

// ============================================================
// LOCAL STORAGE (for in-progress / uncommitted transcripts)
// ============================================================

const getLocalSources = (): SourceRecord[] => {
  try {
    const data = localStorage.getItem(SOURCES_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const getLocalTopics = (): TopicEntry[] => {
  try {
    const data = localStorage.getItem(TOPICS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

// ============================================================
// MERGED GETTERS (static JSON + localStorage)
// ============================================================

export const getSourceRecords = (): SourceRecord[] => {
  const local = getLocalSources();
  const staticIds = new Set(staticSources.map(s => s.id));
  // Local sources that don't duplicate static ones
  const uniqueLocal = local.filter(s => !staticIds.has(s.id));
  return [...staticSources, ...uniqueLocal];
};

export const getAllTopics = (): TopicEntry[] => {
  const local = getLocalTopics();
  const staticIds = new Set(staticTopics.map(t => t.id));
  const uniqueLocal = local.filter(t => !staticIds.has(t.id));
  return [...staticTopics, ...uniqueLocal];
};

export const saveSourceRecord = (source: SourceRecord): void => {
  const sources = getLocalSources();
  const existingIdx = sources.findIndex(s => s.id === source.id);
  if (existingIdx >= 0) {
    sources[existingIdx] = source;
  } else {
    sources.push(source);
  }
  localStorage.setItem(SOURCES_KEY, JSON.stringify(sources));
};

export const deleteSourceRecord = (id: string): void => {
  // Can only delete from localStorage, not static
  const sources = getLocalSources().filter(s => s.id !== id);
  localStorage.setItem(SOURCES_KEY, JSON.stringify(sources));
  const topics = getLocalTopics().filter(t => t.sourceId !== id);
  localStorage.setItem(TOPICS_KEY, JSON.stringify(topics));
};

export const getSourceById = (id: string): SourceRecord | undefined => {
  return getSourceRecords().find(s => s.id === id);
};

// ============================================================
// TOPIC OPERATIONS
// ============================================================

export const saveTopics = (topics: TopicEntry[]): void => {
  const existing = getLocalTopics();
  const existingIds = new Set(existing.map(t => t.id));
  const newTopics = topics.filter(t => !existingIds.has(t.id));
  const merged = [...existing, ...newTopics];
  localStorage.setItem(TOPICS_KEY, JSON.stringify(merged));
};

export const getTopicsBySource = (sourceId: string): TopicEntry[] => {
  return getAllTopics().filter(t => t.sourceId === sourceId);
};

export const getTopicById = (id: string): TopicEntry | undefined => {
  return getAllTopics().find(t => t.id === id);
};

export const searchTopics = (query: string): TopicEntry[] => {
  const q = query.toLowerCase();
  return getAllTopics().filter(t =>
    t.title.toLowerCase().includes(q) ||
    t.summary.toLowerCase().includes(q) ||
    t.teacher.toLowerCase().includes(q) ||
    t.tags.some(tag => tag.toLowerCase().includes(q)) ||
    t.knowledgeType.toLowerCase().includes(q)
  );
};

// ============================================================
// BULK SAVE (used after AI processing)
// ============================================================

export const saveProcessingResult = (source: SourceRecord, topics: TopicEntry[]): void => {
  saveSourceRecord(source);
  saveTopics(topics);
};

// ============================================================
// DOWNLOAD AS JSON (for baking into the codebase)
// ============================================================

export const downloadTranscriptJSON = (source: SourceRecord, topics: TopicEntry[]): void => {
  const data = {
    source: { ...source, rawTranscript: source.rawTranscript }, // keep raw for reference
    topics,
    _meta: {
      exportedAt: new Date().toISOString(),
      version: 1,
    },
  };

  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  // Generate a clean filename from the title
  const filename = source.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    + '.json';

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// ============================================================
// STATS
// ============================================================

export const getLibraryStats = () => {
  const sources = getSourceRecords();
  const topics = getAllTopics();
  const teachers = [...new Set(sources.map(s => s.teacher))];
  const allTags = [...new Set(topics.flatMap(t => t.tags))];
  return {
    totalSources: sources.length,
    totalTopics: topics.length,
    teachers,
    allTags,
  };
};
