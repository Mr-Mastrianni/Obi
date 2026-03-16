import React, { useState, useCallback } from 'react';
import { ChevronLeft, Brain, Sparkles, Dices, RefreshCw, Star, Info, ShieldAlert, ArrowUp, ArrowDown, Hand, Scroll, HelpCircle, BookOpen } from 'lucide-react';
import { DILOGGUN_ODUS, MAJOR_ODUS, MINOR_ODUS, IRE_TYPES, OSOBO_TYPES, IboObject, IBO_OBJECTS } from '../merindilogunConstants';
import { DiloggunOdu, CowrieState, MerindilogunQuizState, ViewState, IboReading, IreType, OsoboType } from '../types';
import { CowrieShell } from './CowrieShell.tsx';
import { PatakiCard } from './PatakiCard.tsx';
import { getDiloggunOduWisdom, getDiloggunWisdomWithIbo } from '../services/geminiService';

interface MerindilogunViewsProps {
    view: ViewState;
    setView: (v: ViewState) => void;
    goHome: () => void;
}

// Generate a shell array for a given mouthsUp count
const generateShellArray = (mouthsUp: number): CowrieState[] => {
    const arr: CowrieState[] = [];
    for (let i = 0; i < 16; i++) {
        arr.push(i < mouthsUp ? CowrieState.MouthUp : CowrieState.MouthDown);
    }
    return arr;
};

// Check if an Odu is Major or Minor
const getOduClassification = (mouthsUp: number): { type: 'major' | 'minor'; hand: 'left' | 'right' } => {
    if (MAJOR_ODUS.includes(mouthsUp)) {
        return { type: 'major', hand: 'left' };
    }
    return { type: 'minor', hand: 'right' };
};

const MerindilogunViews: React.FC<MerindilogunViewsProps> = ({ view, setView, goHome }) => {
    const [selectedOdu, setSelectedOdu] = useState<DiloggunOdu | null>(null);
    const [wisdom, setWisdom] = useState('');
    const [isLoadingWisdom, setIsLoadingWisdom] = useState(false);

    // Oracle state
    const [isCasting, setIsCasting] = useState(false);
    const [castResult, setCastResult] = useState<DiloggunOdu | null>(null);
    const [castShells, setCastShells] = useState<CowrieState[]>([]);

    // Ibo questioning state
    const [iboPhase, setIboPhase] = useState<'none' | 'determining' | 'identifying' | 'complete'>('none');
    const [iboReading, setIboReading] = useState<IboReading | null>(null);
    const [selectedIreOsoboType, setSelectedIreOsoboType] = useState<string | null>(null);

    // Quiz state
    const [quizState, setQuizState] = useState<MerindilogunQuizState>({
        currentOduId: null,
        userMouthsUp: 0,
        isCorrect: null,
        streak: 0
    });

    const goToDashboard = () => {
        setView('mDashboard');
        setSelectedOdu(null);
        setWisdom('');
        resetOracle();
    };

    const resetOracle = () => {
        setCastResult(null);
        setCastShells([]);
        setIboPhase('none');
        setIboReading(null);
        setSelectedIreOsoboType(null);
        setWisdom('');
    };

    const startStudy = (odu: DiloggunOdu) => {
        setSelectedOdu(odu);
        setWisdom('');
        setView('mStudy');
    };

    const fetchWisdom = async () => {
        if (!selectedOdu) return;
        setIsLoadingWisdom(true);
        const text = await getDiloggunOduWisdom(selectedOdu);
        setWisdom(text);
        setIsLoadingWisdom(false);
    };

    // Oracle: cast shells
    const performCast = () => {
        if (isCasting) return;
        setIsCasting(true);
        setWisdom('');
        setCastResult(null);
        setIboPhase('none');
        setIboReading(null);

        setTimeout(() => {
            // Random: each of the 16 shells is independently mouth-up or mouth-down
            const shells: CowrieState[] = [];
            for (let i = 0; i < 16; i++) {
                shells.push(Math.random() > 0.5 ? CowrieState.MouthUp : CowrieState.MouthDown);
            }
            const mouthsUp = shells.filter(s => s === CowrieState.MouthUp).length;
            const resultOdu = DILOGGUN_ODUS.find(o => o.mouthsUp === mouthsUp)!;

            setCastShells(shells);
            setCastResult(resultOdu);
            setIsCasting(false);
            // Automatically start Ibo phase after cast
            setIboPhase('determining');
        }, 2500);
    };

    // Ibo: Determine Ire or Osobo
    const performIboDetermination = () => {
        if (!castResult) return;

        const classification = getOduClassification(castResult.mouthsUp);

        // Simulate the Ibo process - randomly determine Ire or Osobo
        // In a real reading, this would involve the client holding Ibo objects
        const isIre = Math.random() > 0.4; // Slight bias toward positive

        const reading: IboReading = {
            ireOsogbo: isIre ? 'ire' : 'osogbo',
            hand: classification.hand,
            item: isIre ? 'efun' : 'ota'
        };

        setIboReading(reading);
        setIboPhase('identifying');
    };

    // Ibo: Identify specific type of Ire or Osobo
    const identifySpecificType = (typeId: string) => {
        setSelectedIreOsoboType(typeId);
        if (iboReading) {
            setIboReading({
                ...iboReading,
                specificType: typeId as IreType | OsoboType
            });
        }
        setIboPhase('complete');
    };

    const fetchOracleWisdom = async () => {
        if (!castResult) return;
        setIsLoadingWisdom(true);

        // Use the Ibo-aware wisdom function if we have an Ibo reading
        const text = iboReading && iboReading.ireOsogbo
            ? await getDiloggunWisdomWithIbo(castResult, iboReading)
            : await getDiloggunOduWisdom(castResult);

        setWisdom(text);
        setIsLoadingWisdom(false);
    };

    // Quiz
    const startQuiz = useCallback(() => {
        // Quiz on all Odu including 13-16 (practice varies by lineage)
        const quizzable = DILOGGUN_ODUS;
        const random = quizzable[Math.floor(Math.random() * quizzable.length)];
        setQuizState(prev => ({
            currentOduId: random.id,
            userMouthsUp: 0,
            isCorrect: null,
            streak: prev.streak
        }));
        setView('mQuiz');
    }, []);

    const checkQuizAnswer = () => {
        const target = DILOGGUN_ODUS.find(o => o.id === quizState.currentOduId);
        if (!target) return;
        const isMatch = target.mouthsUp === quizState.userMouthsUp;
        setQuizState(prev => ({
            ...prev,
            isCorrect: isMatch,
            streak: isMatch ? prev.streak + 1 : 0
        }));
    };

    // ===== DASHBOARD =====
    if (view === 'mDashboard') {
        return (
            <div className="space-y-8 max-w-6xl mx-auto w-full px-6 pb-12">
                <header className="text-center space-y-2 pt-12">
                    <button onClick={goHome} className="absolute top-12 left-6 text-indigo-300 hover:text-white flex items-center gap-2 transition-colors group">
                        <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Home
                    </button>
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-500 serif tracking-widest drop-shadow-lg uppercase">
                        Merindilogun
                    </h1>
                    <p className="text-indigo-200 font-light tracking-wide">The Sacred Cowrie Shell Oracle — 16 Shells, 17 Odu</p>
                </header>

                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <button onClick={() => { setView('mOracle'); resetOracle(); }}
                        className="flex items-center gap-2 px-6 py-3 bg-blue-800/50 hover:bg-blue-700 border border-blue-600 rounded-full text-blue-100 font-bold transition-all hover:shadow-[0_0_15px_rgba(99,130,241,0.4)]">
                        <Dices className="w-5 h-5" /> Cast Shells
                    </button>
                    <button onClick={() => { setQuizState(prev => ({ ...prev, streak: 0 })); startQuiz(); }}
                        className="flex items-center gap-2 px-6 py-3 bg-indigo-900/50 hover:bg-indigo-800 border border-indigo-600 rounded-full text-indigo-100 font-bold transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                        <Brain className="w-5 h-5" /> Test Knowledge
                    </button>
                    <button onClick={() => setView('mStudyGuide')}
                        className="flex items-center gap-2 px-6 py-3 bg-amber-900/50 hover:bg-amber-800 border border-amber-600 rounded-full text-amber-100 font-bold transition-all hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                        <BookOpen className="w-5 h-5" /> Study Guide
                    </button>
                </div>

                {/* Authenticity Notice */}
                <div className="max-w-3xl mx-auto bg-amber-900/20 border border-amber-700/30 rounded-xl p-4 text-center">
                    <p className="text-amber-200/80 text-sm">
                        <Info className="w-4 h-4 inline mr-1" />
                        <strong>Authentic Practice:</strong> In traditional Merindilogun, Odus are not inherently "good" or "bad."
                        The Ire (blessing) or Osobo (obstruction) is determined through a separate questioning process using
                        <strong> Ibo</strong> — sacred objects held by the querent.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {DILOGGUN_ODUS.map(odu => (
                        <button key={odu.id} onClick={() => startStudy(odu)}
                            className={`group relative overflow-hidden rounded-xl border transition-all duration-300 p-6 flex items-start justify-between text-left backdrop-blur-sm min-h-[180px]
                bg-indigo-900/40 border-indigo-700 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(99,130,241,0.2)]`}>
                            <div className="flex-1 pr-3 z-10">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full border text-sm font-bold transition-colors bg-blue-900/50 border-blue-600/50 text-blue-400 group-hover:bg-blue-500 group-hover:text-white">
                                        {odu.number}
                                    </span>
                                    <h3 className="text-xl serif font-bold transition-colors text-blue-100 group-hover:text-blue-300">
                                        {odu.name}
                                    </h3>
                                </div>
                                <p className="text-indigo-300/60 text-xs mb-2 font-bold uppercase tracking-wider">{odu.rulingOrisha}</p>
                                <p className="text-indigo-200/70 text-sm leading-relaxed">{odu.meaning}</p>
                                <div className="mt-3">
                                    <span className="text-indigo-400/50 text-[10px]">{odu.mouthsUp} mouths up</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-1 w-20 justify-center pt-2 opacity-50 group-hover:opacity-100 transition-opacity z-10">
                                {generateShellArray(odu.mouthsUp).slice(0, 8).map((s, i) => (
                                    <CowrieShell key={i} state={s} size="sm" variant={i} />
                                ))}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    // ===== STUDY =====
    if (view === 'mStudy' && selectedOdu) {
        const shells = generateShellArray(selectedOdu.mouthsUp);
        const classification = getOduClassification(selectedOdu.mouthsUp);
        return (
            <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 max-w-2xl mx-auto w-full pb-12">
                <div className="w-full flex justify-between items-center mb-8 mt-8">
                    <button onClick={goToDashboard} className="text-indigo-300 hover:text-white flex items-center gap-2 transition-colors group"><ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back</button>
                    <span className="text-blue-400 uppercase tracking-widest text-xs">Odu Study Mode</span>
                </div>
                <div className="relative bg-indigo-950/60 border border-indigo-800 p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-md w-full flex flex-col items-center space-y-8">
                    <div className="text-center">
                        <h2 className="text-4xl text-blue-300 serif font-bold tracking-wider">{selectedOdu.number}. {selectedOdu.name}</h2>
                        <p className="text-indigo-300/60 text-sm mt-2 font-bold uppercase tracking-wider">{selectedOdu.rulingOrisha}</p>
                        <div className="mt-2 flex items-center justify-center gap-3 flex-wrap">
                            <span className="text-indigo-400/60 text-sm">{selectedOdu.mouthsUp} of 16 mouths up</span>
                            <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase border
                ${classification.type === 'major'
                                    ? 'bg-purple-900/50 text-purple-400 border-purple-700/50'
                                    : 'bg-blue-900/50 text-blue-400 border-blue-700/50'}`}>
                                {classification.type === 'major' ? 'Major Odu' : 'Minor Odu'}
                            </span>

                        </div>

                        {/* Ibo Information */}
                        <div className="mt-4 p-3 bg-amber-900/20 border border-amber-700/30 rounded-lg">
                            <p className="text-amber-200/80 text-xs">
                                <Hand className="w-3 h-3 inline mr-1" />
                                In a real reading, this {classification.type} Odu would ask for the <strong>{classification.hand} hand</strong> with Ibo
                                to determine Ire or Osobo.
                            </p>
                        </div>
                    </div>

                    {/* Shell visualization */}
                    <div className="flex flex-wrap gap-2 justify-center bg-indigo-900/30 p-6 rounded-2xl border border-indigo-800/50 shadow-inner max-w-sm">
                        {shells.map((s, i) => (
                            <CowrieShell key={i} state={s} size="md" variant={i} />
                        ))}
                    </div>

                    {/* Details */}
                    <div className="text-center w-full">
                        <ul className="text-left space-y-3 text-indigo-100 font-light inline-block bg-indigo-900/30 p-6 rounded-xl border border-indigo-700/30 w-full">
                            {selectedOdu.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 shadow-[0_0_5px_rgba(96,165,250,0.8)]" />
                                    <span className="text-lg leading-relaxed">{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pataki Section */}
                    {selectedOdu.pataki && selectedOdu.pataki.length > 0 && (
                        <div className="w-full space-y-4 mt-4">
                            <h3 className="text-blue-400/80 text-xs font-bold uppercase tracking-[0.2em] text-center">Sacred Pataki</h3>
                            {selectedOdu.pataki.map((p, idx) => (
                                <PatakiCard key={idx} pataki={p} accentColor="blue" />
                            ))}
                        </div>
                    )}

                    {!wisdom && (
                        <button onClick={fetchWisdom} disabled={isLoadingWisdom} className="mt-6 flex items-center gap-2 text-blue-300 border border-blue-500/30 px-6 py-2 rounded-full hover:bg-blue-500/10 transition-colors">
                            <Sparkles className={`w-4 h-4 ${isLoadingWisdom ? 'animate-spin' : ''}`} />
                            {isLoadingWisdom ? 'Consulting the Shells...' : 'Channel the Orisha'}
                        </button>
                    )}
                    {wisdom && (
                        <div className="mt-6 p-6 bg-indigo-900/80 border-l-4 border-blue-400 rounded-r-lg w-full">
                            <p className="text-blue-100 italic font-serif leading-relaxed">"{wisdom}"</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // ===== ORACLE =====
    if (view === 'mOracle') {
        const classification = castResult ? getOduClassification(castResult.mouthsUp) : null;

        return (
            <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 w-full pb-12">
                <div className="w-full flex justify-between items-center mb-8 mt-8 max-w-4xl">
                    <button onClick={goToDashboard} className="text-indigo-300 hover:text-white flex items-center gap-2 transition-colors group">
                        <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back
                    </button>
                    <button onClick={resetOracle} className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors">
                        <RefreshCw className="w-4 h-4" /> Reset
                    </button>
                </div>

                <h2 className="text-3xl text-blue-300 serif font-bold tracking-wider mb-8">Cast the Cowrie Shells</h2>

                {/* Shell display area */}
                <div className="relative bg-indigo-950/40 border border-indigo-800/50 rounded-3xl p-8 w-full max-w-lg min-h-[280px] flex items-center justify-center backdrop-blur-sm">
                    {isCasting ? (
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex flex-wrap gap-2 justify-center animate-pulse">
                                {Array.from({ length: 16 }).map((_, i) => (
                                    <div key={i} className="w-6 h-8 bg-indigo-700/50 rounded-full animate-bounce" style={{ animationDelay: `${i * 50}ms` }} />
                                ))}
                            </div>
                            <p className="text-indigo-400 text-sm animate-pulse mt-4">The shells are falling...</p>
                        </div>
                    ) : castShells.length > 0 ? (
                        <div className="flex flex-col items-center gap-6">
                            <div className="flex flex-wrap gap-2 justify-center max-w-xs">
                                {castShells.map((s, i) => (
                                    <CowrieShell key={i} state={s} size="md" variant={i} />
                                ))}
                            </div>
                            {castResult && (
                                <div className="text-center space-y-2 mt-4">
                                    <p className="text-indigo-400 text-sm">{castResult.mouthsUp} mouths up</p>
                                    <h3 className="text-3xl text-blue-300 font-bold serif">{castResult.number}. {castResult.name}</h3>
                                    <p className="text-indigo-300/60 text-sm font-bold uppercase tracking-wider">{castResult.rulingOrisha} speaks</p>
                                    {classification && (
                                        <span className={`inline-block text-xs px-3 py-1 rounded-full font-bold uppercase border
                      ${classification.type === 'major'
                                                ? 'bg-purple-900/50 text-purple-400 border-purple-700/50'
                                                : 'bg-blue-900/50 text-blue-400 border-blue-700/50'}`}>
                                            {classification.type === 'major' ? 'Major Odu — Ask Left Hand' : 'Minor Odu — Ask Right Hand'}
                                        </span>
                                    )}

                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-center text-indigo-500">
                            <p className="text-lg serif">16 cowrie shells await your cast</p>
                            <p className="text-sm mt-2">Press the button below to throw the shells</p>
                        </div>
                    )}
                </div>

                {/* Ibo Questioning Phase */}
                {iboPhase !== 'none' && castResult && (
                    <div className="mt-8 w-full max-w-2xl">
                        <div className="bg-amber-950/30 border border-amber-700/50 rounded-2xl p-6">
                            <h3 className="text-amber-300 serif text-xl font-bold mb-4 flex items-center gap-2">
                                <Scroll className="w-5 h-5" />
                                The Ibo Questioning
                            </h3>

                            {iboPhase === 'determining' && (
                                <div className="space-y-4">
                                    <p className="text-amber-200/80 text-sm leading-relaxed">
                                        The Odu has been cast. Now, in authentic Merindilogun practice, the diviner uses
                                        <strong> Ibo</strong> — sacred objects placed in the querent&apos;s hands — to determine
                                        whether this Odu comes with <strong>Ire</strong> (blessing) or <strong>Osobo</strong> (obstruction).
                                    </p>
                                    <div className="bg-indigo-950/50 p-4 rounded-xl">
                                        <p className="text-indigo-300 text-sm">
                                            <Hand className="w-4 h-4 inline mr-2" />
                                            Since <strong>{castResult.name}</strong> is a {classification?.type} Odu,
                                            the diviner would ask for the <strong>{classification?.hand} hand</strong>.
                                        </p>
                                    </div>
                                    <button
                                        onClick={performIboDetermination}
                                        className="w-full py-3 bg-amber-700/50 hover:bg-amber-600/50 border border-amber-600 rounded-xl text-amber-100 font-bold transition-all"
                                    >
                                        Reveal the Ibo
                                    </button>
                                </div>
                            )}

                            {iboPhase === 'identifying' && iboReading && (
                                <div className="space-y-4">
                                    <div className={`p-4 rounded-xl border ${iboReading.ireOsogbo === 'ire'
                                        ? 'bg-green-950/50 border-green-700/50'
                                        : 'bg-red-950/50 border-red-700/50'}`}>
                                        <h4 className={`text-lg font-bold mb-2 ${iboReading.ireOsogbo === 'ire' ? 'text-green-400' : 'text-red-400'}`}>
                                            {iboReading.ireOsogbo === 'ire' ? 'Ire — Blessing' : 'Osobo — Obstruction'}
                                        </h4>
                                        <p className="text-sm text-indigo-200">
                                            The {iboReading.item === 'efun' ? 'cascarilla (efun)' : 'black stone (ota)'} was revealed
                                            in the {iboReading.hand} hand.
                                        </p>
                                    </div>

                                    <p className="text-amber-200/80 text-sm">
                                        Now the diviner asks: <strong>What type of {iboReading.ireOsogbo === 'ire' ? 'blessing' : 'obstruction'} is this?</strong>
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {(iboReading.ireOsogbo === 'ire' ? IRE_TYPES : OSOBO_TYPES).map((type) => (
                                            <button
                                                key={type.id}
                                                onClick={() => identifySpecificType(type.id)}
                                                className={`p-3 text-left rounded-lg border transition-all text-sm
                          ${iboReading.ireOsogbo === 'ire'
                                                        ? 'bg-green-900/30 border-green-700/30 hover:bg-green-800/40 hover:border-green-600/50'
                                                        : 'bg-red-900/30 border-red-700/30 hover:bg-red-800/40 hover:border-red-600/50'}`}
                                            >
                                                <span className={`font-bold block ${iboReading.ireOsogbo === 'ire' ? 'text-green-400' : 'text-red-400'}`}>
                                                    {type.name}
                                                </span>
                                                <span className="text-indigo-300/70 text-xs">{type.description}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {iboPhase === 'complete' && iboReading && selectedIreOsoboType && (
                                <div className="space-y-4">
                                    <div className={`p-4 rounded-xl border ${iboReading.ireOsogbo === 'ire'
                                        ? 'bg-green-950/50 border-green-700/50'
                                        : 'bg-red-950/50 border-red-700/50'}`}>
                                        <h4 className={`text-lg font-bold mb-2 ${iboReading.ireOsogbo === 'ire' ? 'text-green-400' : 'text-red-400'}`}>
                                            Reading Complete
                                        </h4>
                                        <p className="text-sm text-indigo-200">
                                            <strong>Odu:</strong> {castResult.name} ({castResult.number} mouths up)<br />
                                            <strong>Tendency:</strong> {iboReading.ireOsogbo === 'ire' ? 'Ire (Blessing)' : 'Osobo (Obstruction)'}<br />
                                            <strong>Type:</strong> {(IRE_TYPES.find(t => t.id === selectedIreOsoboType) || OSOBO_TYPES.find(t => t.id === selectedIreOsoboType))?.name}
                                        </p>
                                    </div>

                                    {!wisdom && (
                                        <button
                                            onClick={fetchOracleWisdom}
                                            disabled={isLoadingWisdom}
                                            className="w-full py-3 bg-blue-700 hover:bg-blue-600 rounded-xl text-white font-bold transition-all flex items-center justify-center gap-2"
                                        >
                                            <Sparkles className={`w-4 h-4 ${isLoadingWisdom ? 'animate-spin' : ''}`} />
                                            {isLoadingWisdom ? 'Consulting the Orisha...' : 'Receive the Full Reading'}
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                <div className="mt-8 flex flex-col items-center gap-4">
                    {!castResult && (
                        <button onClick={performCast} disabled={isCasting}
                            className={`group relative px-10 py-5 rounded-full text-xl font-bold tracking-wider transition-all
                ${isCasting ? 'bg-indigo-800 text-indigo-400 cursor-wait' : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(99,130,241,0.5)]'}`}>
                            <span className="relative z-10 flex items-center gap-3">
                                {isCasting ? 'Casting...' : 'Cast the Shells'}
                                {!isCasting && <Dices className="w-6 h-6 group-hover:rotate-180 transition-transform duration-700" />}
                            </span>
                        </button>
                    )}

                    {wisdom && (
                        <div className="mt-4 p-8 bg-indigo-950/80 border border-blue-500/30 rounded-2xl max-w-2xl text-center shadow-2xl">
                            <h3 className="text-blue-300 serif text-2xl mb-4 font-bold">The Orisha Speaks</h3>
                            <p className="text-lg text-indigo-100 leading-relaxed font-light">{wisdom}</p>
                        </div>
                    )}
                </div>

                {/* Educational Note */}
                <div className="mt-8 max-w-2xl text-center">
                    <p className="text-indigo-400/60 text-xs">
                        <HelpCircle className="w-3 h-3 inline mr-1" />
                        The Ibo system uses sacred objects (typically 8 items including cascarilla/efun and black stone/ota)
                        to determine whether an Odu comes with blessings (Ire) or obstructions (Osobo). This is a separate
                        questioning phase after the Odu is cast.
                    </p>
                </div>
            </div>
        );
    }

    // ===== QUIZ =====
    if (view === 'mQuiz') {
        const currentOdu = DILOGGUN_ODUS.find(o => o.id === quizState.currentOduId);
        if (!currentOdu) return null;
        return (
            <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 max-w-md mx-auto w-full pb-12">
                <div className="w-full flex justify-between items-center mb-8 mt-8">
                    <button onClick={goToDashboard} className="text-indigo-300 hover:text-white flex items-center gap-2 transition-colors group"><ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Exit</button>
                    <div className="flex items-center gap-2 text-blue-400"><Star className="w-4 h-4 fill-current" /><span className="font-bold">Streak: {quizState.streak}</span></div>
                </div>
                <div className="w-full bg-indigo-950/60 border border-indigo-800 p-8 rounded-3xl shadow-2xl backdrop-blur-md flex flex-col items-center space-y-8">
                    <div className="text-center">
                        <p className="text-indigo-400 text-sm uppercase tracking-widest mb-2">How many mouths up for</p>
                        <h2 className="text-4xl text-white serif font-bold">{currentOdu.name}</h2>
                        <p className="text-indigo-400/60 text-xs mt-1">{currentOdu.rulingOrisha}</p>
                    </div>

                    {/* Number selector */}
                    <div className="flex flex-col items-center gap-4">
                        <button onClick={() => setQuizState(prev => ({ ...prev, userMouthsUp: Math.min(16, prev.userMouthsUp + 1) }))}
                            disabled={quizState.isCorrect !== null}
                            className="w-12 h-12 rounded-full bg-blue-800/50 hover:bg-blue-700 border border-blue-600 flex items-center justify-center transition-all text-blue-200">
                            <ArrowUp className="w-5 h-5" />
                        </button>
                        <div className="w-24 h-24 rounded-2xl bg-indigo-900/60 border border-indigo-700 flex items-center justify-center">
                            <span className="text-5xl font-bold text-white">{quizState.userMouthsUp}</span>
                        </div>
                        <button onClick={() => setQuizState(prev => ({ ...prev, userMouthsUp: Math.max(0, prev.userMouthsUp - 1) }))}
                            disabled={quizState.isCorrect !== null}
                            className="w-12 h-12 rounded-full bg-blue-800/50 hover:bg-blue-700 border border-blue-600 flex items-center justify-center transition-all text-blue-200">
                            <ArrowDown className="w-5 h-5" />
                        </button>
                    </div>

                    {quizState.isCorrect === true && <div className="text-green-400 font-bold text-xl animate-bounce">Correct! The Orisha smiles upon you.</div>}
                    {quizState.isCorrect === false && <div className="text-red-400 font-bold text-xl">Incorrect. The answer was {currentOdu.mouthsUp}.</div>}

                    <div className="w-full pt-4">
                        {quizState.isCorrect === null ? (
                            <button onClick={checkQuizAnswer} className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-colors shadow-lg shadow-blue-900/50">Submit Answer</button>
                        ) : (
                            <button onClick={startQuiz} className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2"><RefreshCw className="w-5 h-5" /> Next Odu</button>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

export default MerindilogunViews;
