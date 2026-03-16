import React, { useState } from 'react';
import { Scroll, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Pataki } from '../types';

interface PatakiCardProps {
    pataki: Pataki;
    accentColor?: 'amber' | 'blue';
}

export const PatakiCard: React.FC<PatakiCardProps> = ({ pataki, accentColor = 'amber' }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const colorMap = {
        amber: {
            border: 'border-amber-700/40',
            borderHover: 'hover:border-amber-500/60',
            bg: 'bg-amber-950/30',
            titleText: 'text-amber-300',
            moralBorder: 'border-l-amber-500',
            moralBg: 'bg-amber-900/30',
            moralText: 'text-amber-100',
            badge: 'bg-amber-800/60 text-amber-200 border-amber-600/40',
            chevron: 'text-amber-400',
            icon: 'text-amber-500',
        },
        blue: {
            border: 'border-blue-700/40',
            borderHover: 'hover:border-blue-500/60',
            bg: 'bg-blue-950/30',
            titleText: 'text-blue-300',
            moralBorder: 'border-l-blue-400',
            moralBg: 'bg-blue-900/30',
            moralText: 'text-blue-100',
            badge: 'bg-blue-800/60 text-blue-200 border-blue-600/40',
            chevron: 'text-blue-400',
            icon: 'text-blue-400',
        },
    };

    const c = colorMap[accentColor];

    return (
        <div className={`w-full rounded-2xl border ${c.border} ${c.borderHover} ${c.bg} backdrop-blur-sm transition-all duration-500 overflow-hidden`}>
            {/* Header — always visible */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full p-5 flex items-center justify-between text-left group"
            >
                <div className="flex items-center gap-3">
                    <Scroll className={`w-5 h-5 ${c.icon} shrink-0`} />
                    <div>
                        <h4 className={`${c.titleText} serif font-bold text-lg leading-snug`}>
                            {pataki.title}
                        </h4>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                            {pataki.orishasInvolved.map((orisha, idx) => (
                                <span key={idx} className={`text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase tracking-wider ${c.badge}`}>
                                    {orisha}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`${c.chevron} transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                </div>
            </button>

            {/* Expandable body */}
            <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-5 pb-6 space-y-5">
                    {/* Story */}
                    <p className="text-indigo-100/80 leading-relaxed text-sm font-light italic">
                        {pataki.story}
                    </p>

                    {/* Moral */}
                    <div className={`border-l-4 ${c.moralBorder} ${c.moralBg} rounded-r-lg p-4`}>
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles className={`w-4 h-4 ${c.icon}`} />
                            <span className={`text-xs font-bold uppercase tracking-widest ${c.titleText}`}>
                                The Moral
                            </span>
                        </div>
                        <p className={`${c.moralText} text-sm leading-relaxed font-medium`}>
                            {pataki.moral}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};