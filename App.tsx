
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { BookOpen, Brain, Sparkles, ChevronLeft, Star, Info, RefreshCw, Dices, ArrowRight, CheckCircle, XCircle, Scroll, Scale, Briefcase, Heart, ShieldAlert, Plane, Activity } from 'lucide-react';
import { ODUNS, SCENARIOS, OBI_ORIGIN_PATAKI } from './constants';
import { PatakiCard } from './components/PatakiCard.tsx';
import { Odun, ShellState, ViewState, QuizState, Scenario } from './types.ts';
import { CoconutPiece } from './components/CoconutPiece.tsx';
import { StarBackground } from './components/StarBackground.tsx';
import { SystemSelector } from './components/SystemSelector.tsx';
import MerindilogunViews from './components/MerindilogunViews.tsx';
import OshaHistory from './components/OshaHistory.tsx';
import OrishaEncyclopedia from './components/OrishaEncyclopedia.tsx';
import DiloggunStudyGuide from './components/DiloggunStudyGuide.tsx';
import OrishaCalendar from './components/OrishaCalendar.tsx';
import { getOdunWisdom, getCompositeWisdom, getScenarioComparativeAnalysis } from './services/geminiService';

// --- Internal Components & Styles ---

const OracleStyles = () => (
  <style>{`
    @keyframes tumble {
      0% { transform: translateY(0) rotateX(0) rotateZ(0) scale(1); }
      25% { transform: translateY(-60px) rotateX(180deg) rotateZ(45deg) scale(1.1); }
      50% { transform: translateY(20px) rotateX(360deg) rotateZ(90deg) scale(0.9); }
      75% { transform: translateY(-30px) rotateX(540deg) rotateZ(135deg) scale(1.05); }
      100% { transform: translateY(0) rotateX(720deg) rotateZ(180deg) scale(1); }
    }
    .animate-tumble {
      animation: tumble 0.8s ease-in-out infinite;
    }
    @keyframes shockwave {
      0% { transform: scale(1); opacity: 0.6; box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.7); }
      100% { transform: scale(1.05); opacity: 0; box-shadow: 0 0 60px 60px rgba(245, 158, 11, 0); }
    }
    .animate-shockwave {
      animation: shockwave 0.6s ease-out forwards;
    }
    @keyframes particle-out {
      0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
      100% { transform: translate(var(--tx), var(--ty)) scale(1); opacity: 0; }
    }
    .particle {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #fcd34d;
      pointer-events: none;
      animation: particle-out 0.8s ease-out forwards;
    }
  `}</style>
);

const ParticleBurst: React.FC = () => {
  // Generate random trajectories for particles
  const particles = [...Array(12)].map((_, i) => {
    const angle = (i / 12) * 360;
    const distance = 60 + Math.random() * 40;
    const tx = Math.cos(angle * (Math.PI / 180)) * distance;
    const ty = Math.sin(angle * (Math.PI / 180)) * distance;
    return { id: i, style: { '--tx': `${tx}px`, '--ty': `${ty}px` } as React.CSSProperties };
  });

  return (
    <div className="absolute inset-0 z-0 overflow-visible pointer-events-none">
      {particles.map((p) => (
        <div key={p.id} className="particle" style={p.style} />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('landing');
  const [selectedOdun, setSelectedOdun] = useState<Odun | null>(null);
  const [wisdom, setWisdom] = useState<string>('');
  const [isLoadingWisdom, setIsLoadingWisdom] = useState(false);

  // Audio Context Ref for Sound Effects
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Quiz State
  const [quizState, setQuizState] = useState<QuizState>({
    currentOdunId: null,
    userPattern: [ShellState.Closed, ShellState.Closed, ShellState.Closed, ShellState.Closed],
    isCorrect: null,
    streak: 0
  });
  const [hint, setHint] = useState<string>('');

  // Oracle/Toss State
  const [isTossing, setIsTossing] = useState(false);
  const [showParticles, setShowParticles] = useState(false); // Controls landing effect
  const [oracleState, setOracleState] = useState<{
    first: Odun | null;
    second: Odun | null;
    step: 0 | 1 | 2; // 0: Ready for 1st, 1: Ready for 2nd, 2: Complete
  }>({ first: null, second: null, step: 0 });

  // Scenarios State
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);

  // --- Sound Effects ---
  const playLandSound = useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const t = ctx.currentTime;

      // Synthesize a wooden "clack" using multiple oscillators
      [400, 550, 700].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, t);
        osc.frequency.exponentialRampToValueAtTime(100, t + 0.12); // Quick pitch drop

        gain.gain.setValueAtTime(0.15, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1); // Fast decay

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t + i * 0.005); // Very slight stagger
        osc.stop(t + 0.15);
      });
    } catch (e) {
      console.error("Audio play failed", e);
    }
  }, []);

  const playSuccessSound = useCallback(() => {
    try {
      if (!audioCtxRef.current) return;
      const ctx = audioCtxRef.current;
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(500, t);
      osc.frequency.exponentialRampToValueAtTime(1000, t + 0.5);
      gain.gain.setValueAtTime(0.1, t);
      gain.gain.linearRampToValueAtTime(0, t + 0.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.5);
    } catch (e) { }
  }, []);

  // --- Navigation Handlers ---
  const goHome = () => {
    setView('landing');
    setSelectedOdun(null);
    setWisdom('');
    setOracleState({ first: null, second: null, step: 0 });
    setShowParticles(false);
    setSelectedScenario(null);
  };

  const goToObiDashboard = () => {
    setView('dashboard');
    setSelectedOdun(null);
    setWisdom('');
    setOracleState({ first: null, second: null, step: 0 });
    setShowParticles(false);
    setSelectedScenario(null);
  };

  const startStudy = (odun: Odun) => {
    setSelectedOdun(odun);
    setView('study');
    setWisdom('');
  };

  const fetchWisdom = async () => {
    if (!selectedOdun) return;
    setIsLoadingWisdom(true);
    const text = await getOdunWisdom(selectedOdun);
    setWisdom(text);
    setIsLoadingWisdom(false);
  };

  const fetchCompositeWisdom = async () => {
    if (!oracleState.first || !oracleState.second) return;
    setIsLoadingWisdom(true);
    const text = await getCompositeWisdom(oracleState.first, oracleState.second);
    setWisdom(text);
    setIsLoadingWisdom(false);
  };

  const fetchScenarioAnalysis = async () => {
    if (!selectedScenario) return;
    setIsLoadingWisdom(true);

    const findOdun = (id: string) => ODUNS.find(o => o.id === id)!;
    const pathA = { senior: findOdun(selectedScenario.pathA[0]), junior: findOdun(selectedScenario.pathA[1]) };
    const pathB = { senior: findOdun(selectedScenario.pathB[0]), junior: findOdun(selectedScenario.pathB[1]) };

    const analysis = await getScenarioComparativeAnalysis(selectedScenario.question, pathA, pathB);
    setWisdom(analysis);
    setIsLoadingWisdom(false);
  };

  // --- Quiz Logic ---
  const startQuiz = useCallback(() => {
    const randomOdun = ODUNS[Math.floor(Math.random() * ODUNS.length)];
    setQuizState({
      currentOdunId: randomOdun.id,
      userPattern: [ShellState.Closed, ShellState.Closed, ShellState.Closed, ShellState.Closed],
      isCorrect: null,
      streak: quizState.streak
    });
    setHint('');
    setView('quiz');
  }, [quizState.streak]);

  const toggleQuizShell = (index: number) => {
    if (quizState.isCorrect !== null) return;

    const newPattern = [...quizState.userPattern] as [ShellState, ShellState, ShellState, ShellState];
    newPattern[index] = newPattern[index] === ShellState.Open ? ShellState.Closed : ShellState.Open;

    setQuizState(prev => ({ ...prev, userPattern: newPattern }));
  };

  const checkAnswer = () => {
    const targetOdun = ODUNS.find(o => o.id === quizState.currentOdunId);
    if (!targetOdun) return;

    const isMatch = targetOdun.pattern.every((val, idx) => val === quizState.userPattern[idx]);

    setQuizState(prev => ({
      ...prev,
      isCorrect: isMatch,
      streak: isMatch ? prev.streak + 1 : 0
    }));
  };

  const fetchHint = () => {
    const targetOdun = ODUNS.find(o => o.id === quizState.currentOdunId);
    if (targetOdun && targetOdun.details.length > 0) {
      const randomDetail = targetOdun.details[Math.floor(Math.random() * targetOdun.details.length)];
      setHint(randomDetail);
    }
  };

  // --- Oracle Logic ---
  const performToss = () => {
    if (isTossing) return;
    setIsTossing(true);
    setWisdom('');
    setShowParticles(false);
    if (!audioCtxRef.current) audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    setTimeout(() => {
      const randomOdun = ODUNS[Math.floor(Math.random() * ODUNS.length)];
      setOracleState(prev => {
        if (!prev.first) return { ...prev, first: randomOdun, step: 1 };
        else return { ...prev, second: randomOdun, step: 2 };
      });
      playLandSound();
      setIsTossing(false);
      setShowParticles(true);
      setTimeout(() => setShowParticles(false), 1000);
    }, 2000);
  };

  const resetOracle = () => {
    setOracleState({ first: null, second: null, step: 0 });
    setWisdom('');
    setShowParticles(false);
  };

  // --- Components per view ---
  const renderDashboard = () => (
    <div className="space-y-8 max-w-6xl mx-auto w-full px-6 pb-12">
      <header className="text-center space-y-2 pt-12">
        <button onClick={goHome} className="absolute top-12 left-6 text-indigo-300 hover:text-white flex items-center gap-2 transition-colors group">
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Home
        </button>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 serif tracking-widest drop-shadow-lg uppercase">
          Oshun's Golden Harvest Obi Oracle
        </h1>
        <p className="text-indigo-200 font-light tracking-wide">Master the language of the Sacred Coconut</p>
      </header>

      <div className="flex flex-wrap justify-center gap-4 pt-4">
        <button
          onClick={() => { setView('oracle'); resetOracle(); }}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-800/50 hover:bg-indigo-700 border border-indigo-600 rounded-full text-indigo-100 font-bold transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
        >
          <Dices className="w-5 h-5" />
          Consult Oracle
        </button>
        <button
          onClick={() => { setView('scenarios'); setWisdom(''); setSelectedScenario(null); }}
          className="flex items-center gap-2 px-6 py-3 bg-amber-900/50 hover:bg-amber-800 border border-amber-600 rounded-full text-amber-100 font-bold transition-all hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]"
        >
          <Scroll className="w-5 h-5" />
          Sacred Case Studies
        </button>
        <button
          onClick={() => { setQuizState(prev => ({ ...prev, streak: 0 })); startQuiz(); }}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-900/50 hover:bg-indigo-800 border border-indigo-600 rounded-full text-indigo-100 font-bold transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
        >
          <Brain className="w-5 h-5" />
          Test Knowledge
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {ODUNS.map((odun) => (
          <button
            key={odun.id}
            onClick={() => startStudy(odun)}
            className="group relative overflow-hidden rounded-xl bg-indigo-900/40 border border-indigo-700 hover:border-amber-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] p-6 flex items-start justify-between text-left backdrop-blur-sm min-h-[220px]"
          >
            <div className="flex-1 pr-3 z-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-800/50 border border-indigo-600/50 text-amber-500 font-serif font-bold text-lg group-hover:bg-amber-500 group-hover:text-indigo-900 transition-colors">
                  {odun.number}
                </span>
                <h3 className="text-2xl text-amber-100 serif font-bold group-hover:text-amber-400 transition-colors">
                  {odun.name}
                </h3>
              </div>
              <ul className="space-y-2">
                {odun.details.map((detail, idx) => (
                  <li key={idx} className="text-indigo-200/80 text-xs font-light flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500/70 shrink-0" />
                    <span className="leading-snug">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2 pt-1 opacity-50 group-hover:opacity-100 transition-opacity z-10">
              {odun.pattern.map((s, i) => (
                <div key={i} className={`transition-transform group-hover:scale-110`}>
                  <CoconutPiece state={s} size="sm" variant={i} />
                </div>
              ))}
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl group-hover:bg-amber-600/10 transition-colors duration-500 pointer-events-none" />
          </button>
        ))}
      </div>
    </div>
  );

  const renderScenarios = () => {
    if (selectedScenario) {
      const findOdun = (id: string) => ODUNS.find(o => o.id === id)!;
      const pathA = [findOdun(selectedScenario.pathA[0]), findOdun(selectedScenario.pathA[1])];
      const pathB = [findOdun(selectedScenario.pathB[0]), findOdun(selectedScenario.pathB[1])];

      return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 w-full pb-12 max-w-5xl mx-auto">
          <OracleStyles />
          <div className="w-full flex justify-between items-center mb-8 mt-8 max-w-4xl">
            <button onClick={() => setSelectedScenario(null)} className="text-indigo-300 hover:text-white flex items-center gap-2 transition-colors group">
              <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Library
            </button>
            <div className="flex items-center gap-2 text-amber-500 uppercase tracking-widest text-xs font-bold">
              <Scale size={16} /> Comparative Analysis
            </div>
          </div>

          <div className="w-full bg-indigo-950/60 border border-indigo-800 p-8 rounded-3xl shadow-2xl backdrop-blur-md">
            <h2 className="text-3xl text-amber-400 serif font-bold text-center mb-12">"{selectedScenario.question}"</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
              {/* Vertical Divider for Desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-700 to-transparent -translate-x-1/2" />

              {/* Path A */}
              <div className="space-y-6 flex flex-col items-center">
                <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm">Path A</span>
                <div className="flex gap-8">
                  {pathA.map((odun, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2">
                      <span className="text-[10px] text-indigo-500 font-bold uppercase">{idx === 0 ? 'Senior' : 'Junior'}</span>
                      <div className="flex flex-col gap-2">
                        {odun.pattern.map((s, i) => <CoconutPiece key={i} state={s} size="sm" variant={i} />)}
                      </div>
                      <span className="text-amber-200 font-serif font-bold">{odun.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Path B */}
              <div className="space-y-6 flex flex-col items-center">
                <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm">Path B</span>
                <div className="flex gap-8">
                  {pathB.map((odun, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2">
                      <span className="text-[10px] text-indigo-500 font-bold uppercase">{idx === 0 ? 'Senior' : 'Junior'}</span>
                      <div className="flex flex-col gap-2">
                        {odun.pattern.map((s, i) => <CoconutPiece key={i} state={s} size="sm" variant={i} />)}
                      </div>
                      <span className="text-amber-200 font-serif font-bold">{odun.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-col items-center">
              {!wisdom && (
                <button
                  onClick={fetchScenarioAnalysis}
                  disabled={isLoadingWisdom}
                  className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-amber-900/40 transition-all hover:scale-105"
                >
                  <Sparkles className={`w-5 h-5 ${isLoadingWisdom ? 'animate-spin' : ''}`} />
                  {isLoadingWisdom ? 'Analyzing Dualities...' : 'Divine Comparative Analysis'}
                </button>
              )}

              {wisdom && (
                <div className="mt-8 p-8 bg-indigo-900/40 border border-amber-500/20 rounded-2xl w-full animate-in zoom-in-95 duration-500">
                  <h3 className="text-amber-400 font-serif text-xl mb-4 font-bold flex items-center gap-2">
                    <Scroll size={20} /> The Elders' Perspective
                  </h3>
                  <p className="text-indigo-100 leading-relaxed italic">{wisdom}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-6xl mx-auto w-full px-6 pb-12">
        <header className="text-center space-y-2 pt-12 mb-12">
          <button onClick={goHome} className="absolute top-12 left-6 text-indigo-300 hover:text-white flex items-center gap-2 transition-colors group">
            <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back
          </button>
          <h2 className="text-4xl text-amber-400 serif font-bold tracking-widest uppercase">Sacred Case Studies</h2>
          <p className="text-indigo-200">Study the interplay of Oduns across common life questions</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCENARIOS.map(s => {
            const Icon = s.category === 'Material' ? Briefcase : s.category === 'Travel' ? Plane : s.category === 'Safety' ? ShieldAlert : s.category === 'Career' ? Briefcase : s.category === 'Spiritual' ? Sparkles : s.category === 'Health' ? Activity : Heart;

            return (
              <button
                key={s.id}
                onClick={() => { setSelectedScenario(s); setWisdom(''); }}
                className="group p-6 bg-indigo-900/30 border border-indigo-700 hover:border-amber-500/50 rounded-2xl text-left transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-800/50 text-amber-400 group-hover:bg-amber-400 group-hover:text-indigo-900 transition-colors">
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-tighter">{s.category}</span>
                </div>
                <h3 className="text-lg text-white font-serif leading-tight">{s.question}</h3>
                <div className="mt-4 flex items-center justify-between text-indigo-400 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore Paths <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    );
  };

  const renderOracle = () => {
    const isFirstToss = isTossing && oracleState.step === 0;
    const isSecondToss = isTossing && oracleState.step === 1;
    const renderPieceSet = (isActiveToss: boolean, odun: Odun | null, hasParticles: boolean) => {
      const displayPattern = odun ? odun.pattern : [ShellState.Closed, ShellState.Closed, ShellState.Closed, ShellState.Closed];
      return (
        <div className={`relative transition-all duration-500 flex flex-col items-center ${isActiveToss ? 'scale-110' : (odun ? 'scale-100' : 'scale-90 opacity-40')}`}>
          {hasParticles && <ParticleBurst />}
          <div className={`flex flex-col items-center gap-3 ${hasParticles ? 'animate-shockwave' : ''}`}>
            {displayPattern.map((state, index) => (
              <div key={index} className="transition-all duration-700 ease-out" style={{ transform: isActiveToss ? 'none' : `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})` }}>
                <CoconutPiece state={isActiveToss ? (index % 2 === 0 ? ShellState.Open : ShellState.Closed) : state} size="md" variant={index} className={`${isActiveToss ? `animate-tumble delay-${index * 75}` : 'shadow-xl'}`} />
              </div>
            ))}
          </div>
          {odun && !isActiveToss && (
            <div className="mt-4 text-center animate-in fade-in slide-in-from-bottom-2">
              <h3 className="text-xl text-amber-400 font-bold serif tracking-wider mb-1">{odun.number}. {odun.name}</h3>
              <p className="text-indigo-200 text-sm max-w-[200px]">{odun.meaning}</p>
            </div>
          )}
        </div>
      );
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 w-full pb-12">
        <OracleStyles />
        <div className="w-full flex justify-between items-center mb-8 mt-8 max-w-4xl">
          <button onClick={goHome} className="text-indigo-300 hover:text-white flex items-center gap-2 transition-colors group">
            <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Exit Oracle
          </button>
          <button onClick={resetOracle} className="text-amber-400 hover:text-amber-300 flex items-center gap-2 transition-colors"><RefreshCw className="w-4 h-4" /> Reset</button>
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full max-w-4xl">
          <div className={`transition-all duration-500 ${oracleState.step >= 1 ? 'opacity-100' : 'opacity-50'}`}>
            <p className="text-center text-indigo-400 mb-6 uppercase tracking-widest text-sm">First Cast (Senior)</p>
            {renderPieceSet(isFirstToss, oracleState.first, (oracleState.step === 1 && showParticles))}
          </div>
          {oracleState.step >= 1 && (
            <div className={`transition-all duration-500 ${oracleState.step === 2 ? 'opacity-100' : 'opacity-50'}`}>
              <p className="text-center text-indigo-400 mb-6 uppercase tracking-widest text-sm">Second Cast (Junior)</p>
              {renderPieceSet(isSecondToss, oracleState.second, oracleState.step === 2 && showParticles)}
            </div>
          )}
        </div>
        <div className="mt-12 flex flex-col items-center gap-4">
          {oracleState.step < 2 && (
            <button onClick={performToss} disabled={isTossing} className={`group relative px-10 py-5 rounded-full text-xl font-bold tracking-wider transition-all ${isTossing ? 'bg-indigo-800 text-indigo-400 cursor-wait' : 'bg-gradient-to-r from-amber-600 to-amber-800 text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]'}`}>
              <span className="relative z-10 flex items-center gap-3">
                {isTossing ? 'Casting...' : (oracleState.step === 0 ? 'Cast First Obi' : 'Cast Second Obi')}
                {!isTossing && <Dices className="w-6 h-6 group-hover:rotate-180 transition-transform duration-700" />}
              </span>
            </button>
          )}
          {oracleState.step === 2 && !wisdom && (
            <button onClick={fetchCompositeWisdom} disabled={isLoadingWisdom} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/50"><Sparkles className={`w-5 h-5 ${isLoadingWisdom ? 'animate-spin' : ''}`} />{isLoadingWisdom ? 'Consulting the Oracle...' : 'Interpret Combination'}</button>
          )}
          {wisdom && (
            <div className="mt-8 p-8 bg-indigo-950/80 border border-amber-500/30 rounded-2xl max-w-2xl text-center shadow-2xl animate-in zoom-in-95 duration-500">
              <h3 className="text-amber-400 serif text-2xl mb-4 font-bold">The Ancestors Speak</h3>
              <p className="text-lg text-indigo-100 leading-relaxed font-light">{wisdom}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderStudy = () => {
    if (!selectedOdun) return null;
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 max-w-2xl mx-auto w-full pb-12">
        <div className="w-full flex justify-between items-center mb-8 mt-8">
          <button onClick={goHome} className="text-indigo-300 hover:text-white flex items-center gap-2 transition-colors group"><ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back</button>
          <span className="text-indigo-400 uppercase tracking-widest text-xs">Odun Study Mode</span>
        </div>
        <div className="relative bg-indigo-950/60 border border-indigo-800 p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-md w-full flex flex-col items-center space-y-8">
          <h2 className="text-5xl text-amber-400 serif font-bold tracking-wider">{selectedOdun.number}. {selectedOdun.name}</h2>
          <div className="flex flex-col gap-4 bg-indigo-900/30 p-6 rounded-2xl border border-indigo-800/50 shadow-inner">
            {selectedOdun.pattern.map((state, index) => (<CoconutPiece key={index} state={state} size="lg" variant={index} />))}
          </div>
          <div className="text-center w-full">
            <ul className="text-left space-y-3 text-indigo-100 font-light inline-block bg-indigo-900/30 p-6 rounded-xl border border-indigo-700/30 w-full">
              {selectedOdun.details.map((detail, idx) => (<li key={idx} className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 shadow-[0_0_5px_rgba(251,191,36,0.8)]" /><span className="text-lg leading-relaxed">{detail}</span></li>))}
            </ul>
          </div>

          {/* Pataki Section */}
          {selectedOdun.pataki && selectedOdun.pataki.length > 0 && (
            <div className="w-full space-y-4 mt-4">
              <h3 className="text-amber-400/80 text-xs font-bold uppercase tracking-[0.2em] text-center">Sacred Pataki</h3>
              {selectedOdun.pataki.map((p, idx) => (
                <PatakiCard key={idx} pataki={p} accentColor="amber" />
              ))}
            </div>
          )}

          {!wisdom && (<button onClick={fetchWisdom} disabled={isLoadingWisdom} className="mt-6 flex items-center gap-2 text-amber-300 border border-amber-500/30 px-6 py-2 rounded-full hover:bg-amber-500/10 transition-colors"><Sparkles className={`w-4 h-4 ${isLoadingWisdom ? 'animate-spin' : ''}`} />{isLoadingWisdom ? 'Consulting the Oracle...' : 'Reveal Celestial Meaning'}</button>)}
          {wisdom && (<div className="mt-6 p-6 bg-indigo-900/80 border-l-4 border-amber-500 rounded-r-lg animate-in fade-in duration-700 w-full"><p className="text-amber-100 italic font-serif leading-relaxed">"{wisdom}"</p></div>)}
        </div>
      </div>
    );
  };

  const renderQuiz = () => {
    const currentOdun = ODUNS.find(o => o.id === quizState.currentOdunId);
    if (!currentOdun) return null;
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 max-w-md mx-auto w-full pb-12">
        <div className="w-full flex justify-between items-center mb-8 mt-8">
          <button onClick={goHome} className="text-indigo-300 hover:text-white flex items-center gap-2 transition-colors group"><ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Exit</button>
          <div className="flex items-center gap-2 text-amber-400"><Star className="w-4 h-4 fill-current" /><span className="font-bold">Streak: {quizState.streak}</span></div>
        </div>
        <div className="w-full bg-indigo-950/60 border border-indigo-800 p-8 rounded-3xl shadow-2xl backdrop-blur-md flex flex-col items-center space-y-8">
          <div className="text-center"><p className="text-indigo-400 text-sm uppercase tracking-widest mb-2">Construct the Pattern for</p><h2 className="text-4xl text-white serif font-bold">{currentOdun.number}. {currentOdun.name}</h2></div>
          <div className="flex flex-col gap-4">
            {quizState.userPattern.map((state, index) => (<CoconutPiece key={index} state={state} size="lg" variant={index} interactive={quizState.isCorrect === null} onClick={() => toggleQuizShell(index)} />))}
          </div>
          {quizState.isCorrect === true && <div className="text-green-400 font-bold text-xl animate-bounce">Correct! The ancestors smile upon you.</div>}
          {quizState.isCorrect === false && <div className="text-red-400 font-bold text-xl">Incorrect. Try again next time.</div>}
          {quizState.isCorrect === null && !hint && (<button onClick={fetchHint} className="text-indigo-400 text-sm flex items-center gap-1 hover:text-amber-300 transition-colors"><Info className="w-4 h-4" /> Need a hint?</button>)}
          {hint && <div className="w-full bg-indigo-900/40 border border-amber-500/20 rounded-lg p-3 text-center animate-in fade-in"><p className="text-amber-200/90 text-sm italic">"{hint}"</p></div>}
          <div className="w-full pt-4">
            {quizState.isCorrect === null ? (<button onClick={checkAnswer} className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-colors shadow-lg shadow-indigo-900/50">Cast Pattern</button>) : (<button onClick={startQuiz} className="w-full py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2"><RefreshCw className="w-5 h-5" /> Next Odun</button>)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-amber-500/30 font-sans">
      <StarBackground />
      <main className="relative z-10 flex flex-col min-h-screen">
        {view === 'landing' && <SystemSelector onSelectObi={goToObiDashboard} onSelectMerindilogun={() => setView('mDashboard')} onSelectHistory={() => setView('history')} onSelectOrishas={() => setView('orishas')} onSelectCalendar={() => setView('calendar')} />}
        {view === 'history' && <OshaHistory setView={setView} goHome={goHome} />}
        {view === 'orishas' && <OrishaEncyclopedia setView={setView} goHome={goHome} />}
        {view === 'calendar' && <OrishaCalendar setView={setView} goHome={goHome} />}
        {view === 'mStudyGuide' && <DiloggunStudyGuide setView={setView} goHome={goHome} />}


        {view === 'dashboard' && renderDashboard()}
        {view === 'study' && renderStudy()}
        {view === 'quiz' && renderQuiz()}
        {view === 'oracle' && renderOracle()}
        {view === 'scenarios' && renderScenarios()}
        {(view === 'mDashboard' || view === 'mStudy' || view === 'mQuiz' || view === 'mOracle') && (
          <MerindilogunViews view={view} setView={setView} goHome={goHome} />
        )}
      </main>
    </div>
  );
};

export default App;
