import React from 'react';
import { Dices, BookOpen, Scroll, Calendar, FileText } from 'lucide-react';

interface SystemSelectorProps {
    onSelectObi: () => void;
    onSelectMerindilogun: () => void;
    onSelectHistory: () => void;
    onSelectOrishas: () => void;
    onSelectCalendar?: () => void;
    onSelectTranscripts?: () => void;
}

export const SystemSelector: React.FC<SystemSelectorProps> = ({
    onSelectObi,
    onSelectMerindilogun,
    onSelectHistory,
    onSelectOrishas,
    onSelectCalendar,
    onSelectTranscripts
}) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
            <header className="text-center space-y-4 mb-16">
                <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 serif tracking-widest uppercase drop-shadow-lg">
                    Sacred Oracles
                </h1>
                <p className="text-indigo-200/80 font-light tracking-wide text-lg max-w-xl mx-auto">
                    Choose your path of divination — consult the ancient wisdom of the Orishas through the Sacred Coconut or the Cowrie Shells
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mb-8">
                {/* Obi Abata Card */}
                <button
                    onClick={onSelectObi}
                    className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-950/60 to-amber-900/30 border border-amber-700/50 hover:border-amber-400/80 p-10 text-left transition-all duration-500 hover:shadow-[0_0_60px_rgba(245,158,11,0.25)] hover:scale-[1.02] backdrop-blur-sm"
                >
                    {/* Glow backdrop */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-700 pointer-events-none" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-600/5 rounded-full blur-2xl pointer-events-none" />

                    <div className="relative z-10 space-y-6">
                        {/* Icon */}
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-amber-800/50 border border-amber-600/50 flex items-center justify-center group-hover:bg-amber-600 group-hover:border-amber-400 transition-all duration-500">
                                <span className="text-3xl">🥥</span>
                            </div>
                            <div>
                                <h2 className="text-3xl text-amber-100 serif font-bold group-hover:text-amber-300 transition-colors">
                                    Obi Abata
                                </h2>
                                <p className="text-amber-400/60 text-sm uppercase tracking-widest font-bold">
                                    Coconut Oracle
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-indigo-200/70 leading-relaxed text-sm">
                            The sacred coconut divination — cast 4 coconut pieces to receive answers from the Orishas. Study the 16 Odun patterns, test your knowledge, and explore life scenarios.
                        </p>

                        {/* Stats */}
                        <div className="flex gap-6 text-xs uppercase tracking-wider text-amber-500/70">
                            <span className="flex items-center gap-1.5">
                                <Dices className="w-3.5 h-3.5" /> 4 Pieces
                            </span>
                            <span className="flex items-center gap-1.5">
                                <BookOpen className="w-3.5 h-3.5" /> 16 Odun
                            </span>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                            Enter the Coconut Oracle →
                        </div>
                    </div>
                </button>

                {/* Merindilogun Card */}
                <button
                    onClick={onSelectMerindilogun}
                    className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950/60 to-indigo-900/30 border border-blue-700/50 hover:border-blue-400/80 p-10 text-left transition-all duration-500 hover:shadow-[0_0_60px_rgba(99,130,241,0.25)] hover:scale-[1.02] backdrop-blur-sm"
                >
                    {/* Glow backdrop */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700 pointer-events-none" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/5 rounded-full blur-2xl pointer-events-none" />

                    <div className="relative z-10 space-y-6">
                        {/* Icon */}
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-blue-800/50 border border-blue-600/50 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-400 transition-all duration-500">
                                <span className="text-3xl">🐚</span>
                            </div>
                            <div>
                                <h2 className="text-3xl text-blue-100 serif font-bold group-hover:text-blue-300 transition-colors">
                                    Merindilogun
                                </h2>
                                <p className="text-blue-400/60 text-sm uppercase tracking-widest font-bold">
                                    Cowrie Shell Oracle
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-indigo-200/70 leading-relaxed text-sm">
                            The 16 cowrie shells of the Diloggun — cast them to discover which Orisha speaks. Study all 17 sacred Odu, learn each ruling Orisha, and understand Ire and Osogbo.
                        </p>

                        {/* Stats */}
                        <div className="flex gap-6 text-xs uppercase tracking-wider text-blue-400/70">
                            <span className="flex items-center gap-1.5">
                                <Dices className="w-3.5 h-3.5" /> 16 Shells
                            </span>
                            <span className="flex items-center gap-1.5">
                                <BookOpen className="w-3.5 h-3.5" /> 17 Odu
                            </span>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                            Enter the Cowrie Oracle →
                        </div>
                    </div>
                </button>
            </div>

            {/* Secondary Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
                <button
                    onClick={onSelectHistory}
                    className="group flex items-center gap-3 px-6 py-3 bg-indigo-900/30 border border-indigo-700/50 hover:border-indigo-500/80 rounded-full transition-all duration-500 hover:bg-indigo-900/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
                >
                    <Scroll className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300" />
                    <span className="text-indigo-300 font-bold text-sm uppercase tracking-widest group-hover:text-white transition-colors">
                        History
                    </span>
                </button>

                <button
                    onClick={onSelectOrishas}
                    className="group flex items-center gap-3 px-6 py-3 bg-amber-900/30 border border-amber-700/50 hover:border-amber-500/80 rounded-full transition-all duration-500 hover:bg-amber-900/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
                >
                    <span className="text-amber-400 text-lg">👑</span>
                    <span className="text-amber-300 font-bold text-sm uppercase tracking-widest group-hover:text-white transition-colors">
                        The Orishas
                    </span>
                </button>

                <button
                    onClick={onSelectCalendar}
                    className="group flex items-center gap-3 px-6 py-3 bg-purple-900/30 border border-purple-700/50 hover:border-purple-500/80 rounded-full transition-all duration-500 hover:bg-purple-900/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                >
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <span className="text-purple-300 font-bold text-sm uppercase tracking-widest group-hover:text-white transition-colors">
                        Sacred Calendar
                    </span>
                </button>

                <button
                    onClick={onSelectTranscripts}
                    className="group flex items-center gap-3 px-6 py-3 bg-teal-900/30 border border-teal-700/50 hover:border-teal-500/80 rounded-full transition-all duration-500 hover:bg-teal-900/50 hover:shadow-[0_0_30px_rgba(20,184,166,0.2)]"
                >
                    <FileText className="w-5 h-5 text-teal-400" />
                    <span className="text-teal-300 font-bold text-sm uppercase tracking-widest group-hover:text-white transition-colors">
                        Transcript Library
                    </span>
                </button>

            </div>

            {/* Footer */}
            <p className="mt-12 text-indigo-400/40 text-xs tracking-widest uppercase text-center">
                Maferefún Orishas • Iboru Iboya Ibosheshe
            </p>
        </div>
    );
};
