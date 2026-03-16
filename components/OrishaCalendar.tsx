import React, { useState, useMemo } from 'react';
import {
    ChevronLeft,
    Calendar as CalendarIcon,
    Clock,
    Sparkles,
    Info,
    Sun,
    ChevronRight,
    Star,
    Droplets,
    Flame,
    Wind,
    Mountain,
    Skull,
    Crown,
    Scroll,
    Leaf,
    Moon,
    Heart,
    Cross,
    Sword
} from 'lucide-react';
import { ViewState } from '../types';
import {
    ORISHA_FEAST_DAYS,
    OJO_OSE,
    MONTH_NAMES,
    DAY_NAMES,
    DAY_NAMES_SHORT,
    getFeastDaysByMonth,
    getNextFeastDay,
    getDaysUntilFeast,
    getCurrentOjoOse,
    formatFeastDate,
    FeastDay
} from '../orishaCalendarConstants';
import { getOrikiForOrisha } from '../orikiSuyere';

interface OrishaCalendarProps {
    setView: (v: ViewState) => void;
    goHome: () => void;
}

// Map Orisha IDs to icons
const ORISHA_ICONS: Record<string, React.ReactNode> = {
    eleggua: <Sparkles className="w-5 h-5" />,
    obatala: <Crown className="w-5 h-5" />,
    oshun: <Droplets className="w-5 h-5" />,
    yemaya: <Moon className="w-5 h-5" />,
    shango: <Flame className="w-5 h-5" />,
    ogun: <Sword className="w-5 h-5" />,
    oya: <Wind className="w-5 h-5" />,
    oshosi: <Cross className="w-5 h-5" />,
    argayu: <Mountain className="w-5 h-5" />,
    babaluaye: <Skull className="w-5 h-5" />,
    osain: <Leaf className="w-5 h-5" />,
    orunmila: <Scroll className="w-5 h-5" />,
    inle: <Heart className="w-5 h-5" />,
    nanaburuku: <Star className="w-5 h-5" />,
    yewa: <Sun className="w-5 h-5" />,
    ibeyi: <Heart className="w-5 h-5" />,
    dada: <Crown className="w-5 h-5" />,
    ochagrian: <Sword className="w-5 h-5" />,
    aquema: <Star className="w-5 h-5" />,
    orichaoko: <Leaf className="w-5 h-5" />
};

// Get color class based on Orisha
const getOrishaColorClass = (orishaId: string): string => {
    const colorMap: Record<string, string> = {
        eleggua: 'text-red-400 border-red-500/50 bg-red-950/30',
        obatala: 'text-white border-white/50 bg-white/10',
        oshun: 'text-yellow-400 border-yellow-500/50 bg-yellow-950/30',
        yemaya: 'text-blue-400 border-blue-500/50 bg-blue-950/30',
        shango: 'text-red-500 border-red-600/50 bg-red-950/40',
        ogun: 'text-green-400 border-green-500/50 bg-green-950/30',
        oya: 'text-purple-400 border-purple-500/50 bg-purple-950/30',
        oshosi: 'text-indigo-400 border-indigo-500/50 bg-indigo-950/30',
        argayu: 'text-orange-400 border-orange-500/50 bg-orange-950/30',
        babaluaye: 'text-amber-700 border-amber-800/50 bg-amber-950/40',
        osain: 'text-green-500 border-green-600/50 bg-green-950/40',
        orunmila: 'text-emerald-400 border-emerald-500/50 bg-emerald-950/30',
        inle: 'text-cyan-400 border-cyan-500/50 bg-cyan-950/30',
        nanaburuku: 'text-violet-400 border-violet-500/50 bg-violet-950/30',
        yewa: 'text-pink-400 border-pink-500/50 bg-pink-950/30',
        ibeyi: 'text-yellow-300 border-yellow-400/50 bg-yellow-900/30',
        dada: 'text-lime-400 border-lime-500/50 bg-lime-950/30'
    };
    return colorMap[orishaId] || 'text-indigo-400 border-indigo-500/50 bg-indigo-950/30';
};

export const OrishaCalendar: React.FC<OrishaCalendarProps> = ({ goHome }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [selectedFeast, setSelectedFeast] = useState<FeastDay | null>(null);
    const [viewMode, setViewMode] = useState<'month' | 'ojoose'>('month');

    const today = new Date();

    // Get next feast day
    const nextFeast = useMemo(() => getNextFeastDay(), []);
    const daysUntilNext = nextFeast ? getDaysUntilFeast(nextFeast) : 0;

    // Get current Ojo Ose
    const currentOjoOse = useMemo(() => getCurrentOjoOse(), []);

    // Generate calendar days
    const calendarDays = useMemo(() => {
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startDayOfWeek = firstDay.getDay();

        const days: { day: number; feasts: FeastDay[]; isToday: boolean }[] = [];

        // Empty cells for days before the first of the month
        for (let i = 0; i < startDayOfWeek; i++) {
            days.push({ day: 0, feasts: [], isToday: false });
        }

        // Days of the month
        const monthFeasts = getFeastDaysByMonth(currentMonth);
        for (let day = 1; day <= daysInMonth; day++) {
            const dayFeasts = monthFeasts.filter(f => f.day === day);
            const isToday =
                today.getDate() === day &&
                today.getMonth() === currentMonth &&
                today.getFullYear() === currentYear;
            days.push({ day, feasts: dayFeasts, isToday });
        }

        return days;
    }, [currentMonth, currentYear]);

    const navigateMonth = (direction: number) => {
        let newMonth = currentMonth + direction;
        let newYear = currentYear;

        if (newMonth > 11) {
            newMonth = 0;
            newYear++;
        } else if (newMonth < 0) {
            newMonth = 11;
            newYear--;
        }

        setCurrentMonth(newMonth);
        setCurrentYear(newYear);
    };

    const goToToday = () => {
        setCurrentMonth(today.getMonth());
        setCurrentYear(today.getFullYear());
    };

    return (
        <div className="min-h-screen pb-12">
            {/* Header */}
            <header className="relative pt-12 pb-8 px-6">
                <button
                    onClick={goHome}
                    className="absolute top-12 left-6 text-indigo-300 hover:text-white flex items-center gap-2 transition-colors group"
                >
                    <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Home
                </button>

                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 serif tracking-wider mb-4">
                        Sacred Calendar
                    </h1>
                    <p className="text-indigo-300/80 text-lg font-light">
                        Orisha Feast Days & Liturgical Year
                    </p>
                </div>
            </header>

            {/* View Toggle */}
            <div className="flex justify-center gap-2 px-4 mb-6">
                <button
                    onClick={() => setViewMode('month')}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2
            ${viewMode === 'month'
                            ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/50'
                            : 'bg-indigo-900/50 text-indigo-300 hover:bg-indigo-800/50 border border-indigo-700/50'}`}
                >
                    <CalendarIcon className="w-4 h-4" />
                    Feast Days
                </button>
                <button
                    onClick={() => setViewMode('ojoose')}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2
            ${viewMode === 'ojoose'
                            ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/50'
                            : 'bg-indigo-900/50 text-indigo-300 hover:bg-indigo-800/50 border border-indigo-700/50'}`}
                >
                    <Sun className="w-4 h-4" />
                    Ojo Ose (Week)
                </button>
            </div>

            {viewMode === 'month' ? (
                <>
                    {/* Next Feast Countdown */}
                    {nextFeast && (
                        <div className="max-w-4xl mx-auto px-6 mb-8">
                            <div className="bg-gradient-to-r from-amber-950/40 to-indigo-950/40 border border-amber-700/30 rounded-2xl p-6">
                                <div className="flex flex-col md:flex-row items-center gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-4 rounded-full border ${getOrishaColorClass(nextFeast.orishaId)}`}>
                                            {ORISHA_ICONS[nextFeast.orishaId] || <Star className="w-8 h-8" />}
                                        </div>
                                        <div>
                                            <p className="text-amber-400 text-sm uppercase tracking-widest font-bold">
                                                Next Feast Day
                                            </p>
                                            <h2 className="text-2xl text-white font-bold serif">
                                                {nextFeast.orishaName}
                                            </h2>
                                            <p className="text-indigo-300 text-sm">
                                                {formatFeastDate(nextFeast.month, nextFeast.day)} • {nextFeast.saintName}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex-1 flex justify-center md:justify-end">
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-amber-400">{daysUntilNext}</div>
                                            <div className="text-indigo-300 text-sm uppercase tracking-wider">days away</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Calendar Navigation */}
                    <div className="max-w-4xl mx-auto px-6 mb-6">
                        <div className="flex items-center justify-between bg-indigo-900/30 border border-indigo-700/50 rounded-xl p-4">
                            <button
                                onClick={() => navigateMonth(-1)}
                                className="p-2 hover:bg-indigo-800/50 rounded-full transition-colors text-indigo-300"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-white serif">
                                    {MONTH_NAMES[currentMonth]} {currentYear}
                                </h2>
                                {currentMonth === today.getMonth() && currentYear === today.getFullYear() && (
                                    <span className="text-amber-400 text-xs uppercase tracking-widest">Current Month</span>
                                )}
                            </div>

                            <button
                                onClick={() => navigateMonth(1)}
                                className="p-2 hover:bg-indigo-800/50 rounded-full transition-colors text-indigo-300"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        {(currentMonth !== today.getMonth() || currentYear !== today.getFullYear()) && (
                            <button
                                onClick={goToToday}
                                className="mt-2 mx-auto block text-amber-400 text-sm hover:text-amber-300 transition-colors"
                            >
                                Go to Today
                            </button>
                        )}
                    </div>

                    {/* Calendar Grid */}
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="bg-indigo-950/40 border border-indigo-800/50 rounded-2xl overflow-hidden">
                            {/* Day Headers */}
                            <div className="grid grid-cols-7 bg-indigo-900/50 border-b border-indigo-800/50">
                                {DAY_NAMES_SHORT.map(day => (
                                    <div key={day} className="py-3 text-center text-indigo-400 text-xs font-bold uppercase tracking-wider">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            {/* Calendar Days */}
                            <div className="grid grid-cols-7">
                                {calendarDays.map((dayInfo, index) => (
                                    <div
                                        key={index}
                                        className={`min-h-[100px] border-b border-r border-indigo-800/30 p-2
                      ${dayInfo.isToday ? 'bg-amber-900/20' : ''}
                      ${!dayInfo.day ? 'bg-indigo-950/30' : ''}`}
                                    >
                                        {dayInfo.day > 0 && (
                                            <>
                                                <div className={`text-sm font-bold mb-1 ${dayInfo.isToday ? 'text-amber-400' : 'text-indigo-300'}`}>
                                                    {dayInfo.day}
                                                    {dayInfo.isToday && <span className="ml-2 text-xs uppercase">Today</span>}
                                                </div>
                                                <div className="space-y-1">
                                                    {dayInfo.feasts.map((feast, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => setSelectedFeast(feast)}
                                                            className={`w-full text-left px-2 py-1 rounded text-xs font-bold truncate transition-all
                                ${feast.significance === 'major'
                                                                    ? 'bg-amber-600/40 text-amber-200 border border-amber-500/50 hover:bg-amber-600/60'
                                                                    : 'bg-indigo-800/40 text-indigo-200 border border-indigo-700/50 hover:bg-indigo-700/60'}`}
                                                        >
                                                            {feast.orishaName}
                                                        </button>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Feast Day Legend */}
                    <div className="max-w-4xl mx-auto px-6 mt-6">
                        <div className="flex flex-wrap gap-4 justify-center text-xs">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded bg-amber-600/40 border border-amber-500/50"></div>
                                <span className="text-indigo-300">Major Feast</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded bg-indigo-800/40 border border-indigo-700/50"></div>
                                <span className="text-indigo-300">Minor Feast</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded bg-amber-900/20 border border-amber-700/30"></div>
                                <span className="text-indigo-300">Today</span>
                            </div>
                        </div>
                    </div>

                    {/* Selected Feast Detail Modal */}
                    {selectedFeast && (
                        <div
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                            onClick={() => setSelectedFeast(null)}
                        >
                            <div
                                className="bg-indigo-950 border border-indigo-700 rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto"
                                onClick={e => e.stopPropagation()}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-3 rounded-full border ${getOrishaColorClass(selectedFeast.orishaId)}`}>
                                        {ORISHA_ICONS[selectedFeast.orishaId] || <Star className="w-6 h-6" />}
                                    </div>
                                    <button
                                        onClick={() => setSelectedFeast(null)}
                                        className="text-indigo-400 hover:text-white"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <h3 className="text-2xl font-bold text-white serif mb-1">
                                    {selectedFeast.orishaName}
                                </h3>
                                <p className="text-amber-400 text-sm mb-4">
                                    {formatFeastDate(selectedFeast.month, selectedFeast.day)}
                                    {selectedFeast.significance === 'major' && (
                                        <span className="ml-2 px-2 py-0.5 rounded-full bg-amber-600/40 text-amber-200 text-xs uppercase">
                                            Major Feast
                                        </span>
                                    )}
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-indigo-400 text-xs uppercase tracking-widest font-bold mb-1">
                                            Catholic Syncretism
                                        </h4>
                                        <p className="text-white">{selectedFeast.saintName}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-indigo-400 text-xs uppercase tracking-widest font-bold mb-1">
                                            Description
                                        </h4>
                                        <p className="text-indigo-200 text-sm leading-relaxed">{selectedFeast.description}</p>
                                    </div>

                                    {selectedFeast.traditionalObservance && (
                                        <div>
                                            <h4 className="text-indigo-400 text-xs uppercase tracking-widest font-bold mb-1">
                                                Traditional Observance
                                            </h4>
                                            <p className="text-indigo-200 text-sm leading-relaxed">{selectedFeast.traditionalObservance}</p>
                                        </div>
                                    )}

                                    {selectedFeast.alternateDates && (
                                        <div>
                                            <h4 className="text-indigo-400 text-xs uppercase tracking-widest font-bold mb-1">
                                                Alternative Dates
                                            </h4>
                                            {selectedFeast.alternateDates.map((alt, idx) => (
                                                <p key={idx} className="text-indigo-300 text-sm">
                                                    {formatFeastDate(alt.month, alt.day)} — {alt.tradition}
                                                </p>
                                            ))}
                                        </div>
                                    )}

                                    {/* Show Oriki if available */}
                                    {getOrikiForOrisha(selectedFeast.orishaId).length > 0 && (
                                        <div className="pt-4 border-t border-indigo-800">
                                            <h4 className="text-amber-400 text-xs uppercase tracking-widest font-bold mb-2">
                                                Associated Oriki
                                            </h4>
                                            <p className="text-indigo-300 text-sm italic">
                                                "{getOrikiForOrisha(selectedFeast.orishaId)[0]?.lucumiText.substring(0, 100)}..."
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                /* Ojo Ose View */
                <div className="max-w-4xl mx-auto px-6">
                    {/* Today's Ojo Ose */}
                    <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-700/50 rounded-2xl p-6 mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <Clock className="w-5 h-5 text-amber-400" />
                            <h2 className="text-xl font-bold text-white">Today is {DAY_NAMES[today.getDay()]}</h2>
                        </div>
                        <div className="flex flex-wrap gap-3 mb-4">
                            {currentOjoOse.orishaIds.map(orishaId => (
                                <div
                                    key={orishaId}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full border ${getOrishaColorClass(orishaId)}`}
                                >
                                    {ORISHA_ICONS[orishaId] || <Star className="w-5 h-5" />}
                                    <span className="font-bold capitalize">{orishaId}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-indigo-200 text-sm">{currentOjoOse.description}</p>
                    </div>

                    {/* Full Week View */}
                    <div className="grid gap-4">
                        {OJO_OSE.map((ojo, index) => {
                            const isToday = today.getDay() === ojo.dayOfWeek;
                            return (
                                <div
                                    key={ojo.dayOfWeek}
                                    className={`p-5 rounded-xl border transition-all
                    ${isToday
                                            ? 'bg-amber-900/20 border-amber-700/50'
                                            : 'bg-indigo-950/40 border-indigo-800/50 hover:border-indigo-700/50'}`}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                                        <div className={`text-lg font-bold serif min-w-[120px] ${isToday ? 'text-amber-400' : 'text-white'}`}>
                                            {DAY_NAMES[ojo.dayOfWeek]}
                                            {isToday && <span className="ml-2 text-xs uppercase">Today</span>}
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {ojo.orishaIds.map(orishaId => (
                                                <div
                                                    key={orishaId}
                                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm ${getOrishaColorClass(orishaId)}`}
                                                >
                                                    {ORISHA_ICONS[orishaId] || <Star className="w-4 h-4" />}
                                                    <span className="font-bold capitalize">{orishaId}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <p className="mt-3 text-indigo-300 text-sm pl-0 md:pl-[136px]">
                                        {ojo.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Ojo Ose Info */}
                    <div className="mt-8 p-6 bg-indigo-900/20 border border-indigo-800/50 rounded-xl">
                        <div className="flex items-start gap-3">
                            <Info className="w-5 h-5 text-amber-400 mt-0.5" />
                            <div>
                                <h3 className="text-amber-400 font-bold mb-2">About Ojo Ose (Days of the Week)</h3>
                                <p className="text-indigo-200 text-sm leading-relaxed">
                                    In Lukumí tradition, each day of the week is associated with specific Orishas.
                                    These associations guide devotional practices, with practitioners often giving
                                    special attention to the Orishas of that day. While these associations are widely
                                    recognized, variations exist between lineages (ramas) and geographic regions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer Note */}
            <div className="max-w-4xl mx-auto px-6 mt-12 text-center">
                <p className="text-indigo-400/50 text-xs">
                    <Info className="w-3 h-3 inline mr-1" />
                    Feast days correspond to Catholic saint days due to historical syncretism.
                    Some dates may vary by lineage and region.
                </p>
            </div>
        </div>
    );
};

export default OrishaCalendar;
