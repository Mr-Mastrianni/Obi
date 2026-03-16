import React, { useState } from 'react';
import { ChevronLeft, BookOpen, MapPin, Users, Scale, Church, Anchor, Globe, Feather, Heart, Crown, Star, Sparkles, Landmark, Clock, ChevronDown, ChevronUp, Quote } from 'lucide-react';
import { ViewState } from '../types';

interface OshaHistoryProps {
    setView: (v: ViewState) => void;
    goHome: () => void;
}

const Section: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
            {icon}
            {title}
        </h3>
        <div className="text-indigo-200/80 leading-relaxed space-y-3">
            {children}
        </div>
    </div>
);

const OshaHistory: React.FC<OshaHistoryProps> = ({ goHome }) => {
    const [activeTab, setActiveTab] = useState<'origins' | 'cuba' | 'pillars' | 'americas' | 'women' | 'today'>('origins');
    const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

    const togglePillar = (id: string) => {
        setExpandedPillar(prev => prev === id ? null : id);
    };

    return (
        <div className="min-h-screen pb-12">
            {/* Header */}
            <header className="relative pt-12 pb-8 px-6">
                <button onClick={goHome} className="absolute top-12 left-6 text-indigo-300 hover:text-white flex items-center gap-2 transition-colors group">
                    <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Home
                </button>

                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-amber-200 to-blue-400 serif tracking-wider mb-4">
                        The Osha Tradition
                    </h1>
                    <p className="text-indigo-300/80 text-lg font-light">
                        La Regla de Ocha • La Religión Lucumí
                    </p>
                    <p className="text-indigo-400/60 text-sm mt-2">
                        Based on "The Osha: Secrets of the Yoruba-Lucumi-Santeria Religion" by Julio Garcia Cortez
                    </p>
                </div>
            </header>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-2 px-4 mb-8">
                {[
                    { id: 'origins', label: 'Origins in Africa', icon: Globe },
                    { id: 'cuba', label: 'In Cuba', icon: Anchor },
                    { id: 'pillars', label: 'Pillars & Founders', icon: Landmark },
                    { id: 'americas', label: 'In the Americas', icon: MapPin },
                    { id: 'women', label: 'Women Oriates', icon: Crown },
                    { id: 'today', label: 'Today', icon: Heart },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all
              ${activeTab === tab.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50'
                                : 'bg-indigo-900/50 text-indigo-300 hover:bg-indigo-800/50 border border-indigo-700/50'}`}
                    >
                        <tab.icon className="w-4 h-4" />
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-indigo-950/40 border border-indigo-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">

                    {/* ORIGINS IN AFRICA */}
                    {activeTab === 'origins' && (
                        <>
                            <Section title="The Yoruba Homeland" icon={<Globe className="w-5 h-5 text-amber-400" />}>
                                <p>
                                    The Osha tradition originates from the Yoruba people of West Africa, specifically from what is now
                                    southwestern Nigeria, Benin, and Togo. The Yoruba developed a sophisticated religious system centered
                                    on the worship of <strong>Olorun</strong> (also called Olodumare) — the Supreme Creator — and a pantheon
                                    of divine intermediaries known as the <strong>Orishas</strong>.
                                </p>
                                <p>
                                    In Yorubaland, religious practice was organized around specific priesthoods, with each priest serving
                                    their individual Orisha. People would seek the help and advice of these priests, who acted as intermediaries
                                    between the divine and human realms. The sacred city of <strong>Ife</strong> (Ile-Ife) was considered the
                                    spiritual center of Yoruba civilization — the place where creation began.
                                </p>
                            </Section>

                            <Section title="Secret Societies and Religious Structure" icon={<Users className="w-5 h-5 text-amber-400" />}>
                                <p>
                                    Yoruba religious life was structured around several important societies:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong>The Gelede Society</strong> — Honored the power of elderly women and female ancestors</li>
                                    <li><strong>The Ogboni Society</strong> — A council of elders who maintained social order and spiritual balance</li>
                                    <li><strong>The Egungun Society</strong> — Facilitated communication with ancestors through masked rituals</li>
                                    <li><strong>The Oshe Society</strong> — Connected to Shango worship and royal authority</li>
                                </ul>
                                <p>
                                    These societies preserved religious knowledge, maintained ethical standards, and ensured the continuity
                                    of spiritual traditions across generations. They would later provide the organizational framework for
                                    Osha communities in the Americas.
                                </p>
                            </Section>

                            <Section title="Cosmology and Beliefs" icon={<BookOpen className="w-5 h-5 text-amber-400" />}>
                                <p>
                                    Central to Yoruba cosmology is the concept of <strong>Ashé</strong> (or Aché) — the sacred life force
                                    that permeates all things, both living and non-living. This divine energy flows from Olodumare through
                                    the Orishas to humanity. The Orishas are not merely deities but forces of nature with distinct personalities,
                                    preferences, colors, numbers, and domains of influence.
                                </p>
                                <p>
                                    The creation myth tells how Olodumare created the world and humanity, delegating specific responsibilities
                                    to each Orisha. <strong>Obatala</strong>, the eldest Orisha, was tasked with creating human bodies, while
                                    <strong> Eshu-Eleggua</strong> serves as the divine messenger who opens and closes all paths.
                                </p>
                            </Section>
                        </>
                    )}

                    {/* IN CUBA */}
                    {activeTab === 'cuba' && (
                        <>
                            <Section title="The Middle Passage" icon={<Anchor className="w-5 h-5 text-red-400" />}>
                                <p>
                                    During the transatlantic slave trade, millions of Yoruba and other West African peoples were forcibly
                                    transported to the Caribbean. Cuba became a primary destination, particularly as the sugar plantation
                                    economy expanded in the 18th and 19th centuries. The port town of <strong>Regla</strong>, across the bay
                                    from Havana, became known as "Africa's heart in Cuba" — the cradle of Regla de Ocha.
                                </p>
                                <p>
                                    Enslaved Africans brought with them their religious cosmology, including knowledge of the Orishas,
                                    divination systems (Ifá and Diloggun), and ritual practices. Despite the trauma of enslavement and
                                    the systematic suppression of African cultural expressions, the enslaved managed to preserve their
                                    spiritual traditions through secrecy, adaptation, and resilience.
                                </p>
                            </Section>

                            <Section title="Syncretism and Survival" icon={<Scale className="w-5 h-5 text-red-400" />}>
                                <p>
                                    Spanish colonial masters forced enslaved people to adopt Catholicism. In response, the Lucumí people
                                    developed a sophisticated system of religious syncretism — disguising their Orishas behind Catholic
                                    saints who shared similar attributes:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong>Shangó</strong> (thunder, fire, lightning) ↔ <strong>Saint Barbara</strong></li>
                                    <li><strong>Yemayá</strong> (ocean, motherhood) ↔ <strong>Our Lady of Regla</strong></li>
                                    <li><strong>Oshún</strong> (rivers, love, sweetness) ↔ <strong>Our Lady of Charity</strong></li>
                                    <li><strong>Obatalá</strong> (purity, creation) ↔ <strong>Our Lady of Mercy</strong></li>
                                    <li><strong>Babalú-Ayé</strong> (healing, illness) ↔ <strong>Saint Lazarus</strong></li>
                                </ul>
                                <p>
                                    This was not simply confusion or unconscious blending — it was a deliberate strategy of cultural
                                    preservation. While appearing to worship Catholic saints before their masters, the enslaved were
                                    actually continuing their devotion to the Orishas.
                                </p>
                            </Section>

                            <Section title="Cabildos: Preserving African Identity" icon={<Church className="w-5 h-5 text-red-400" />}>
                                <p>
                                    The Spanish colonial government permitted the formation of <strong>cabildos</strong> — mutual aid
                                    societies organized by African nationality. These cabildos became crucial institutions for preserving
                                    Yoruba culture and religion in Cuba. The <strong>Cabildo Africano Lucumí</strong>, reorganized in 1839
                                    under the patronage of Saint Barbara (Shangó), played a particularly important role.
                                </p>
                                <p>
                                    Cabildos provided:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Space for ritual ceremonies and drumming</li>
                                    <li>Financial support for members' funerals and festivals</li>
                                    <li>A repository for African-born elders' ritual knowledge</li>
                                    <li>Protection for traditional Lucumí drum rhythms and dances</li>
                                    <li>Networks for maintaining connections to African heritage</li>
                                </ul>
                                <p>
                                    In 1866, the <strong>Cabildo Yemayá</strong> was co-founded in Regla by formerly enslaved Africans
                                    <strong> Adeshina</strong> (Remigio Herrera), <strong>Anabi</strong> (Juan), and <strong>Atanda</strong>
                                    (Filomeno Garcia). These men, who had been friends in Yorubaland decades earlier, constructed the first
                                    three sets of consecrated bata drums in Cuba.
                                </p>
                            </Section>

                            <Section title="The Transformation to a Brotherhood" icon={<Users className="w-5 h-5 text-red-400" />}>
                                <p>
                                    Over time, the strict separation between priesthood and lay membership that existed in Africa began
                                    to blur in Cuba. Each <strong>iyawó</strong> (novice) was taught all the rituals, secrets, chants,
                                    prayers, tales, history, healing, divination methods, and the power of herbs. What was once the
                                    exclusive domain of specialized priests became knowledge shared within a broader brotherhood.
                                </p>
                                <p>
                                    This democratization of religious knowledge was both fascinating and practical — it attracted not only
                                    Black Cubans who had remained distant from the tradition but eventually white Cubans as well. The
                                    society grew beyond its priestly confines to become truly a <strong>brotherhood</strong> (and sisterhood)
                                    of practitioners.
                                </p>
                            </Section>
                        </>
                    )}

                    {/* PILLARS & FOUNDERS */}
                    {activeTab === 'pillars' && (
                        <>
                            {/* Introduction */}
                            <div className="mb-8 p-5 bg-gradient-to-r from-amber-950/30 to-indigo-950/30 border border-amber-700/30 rounded-xl">
                                <p className="text-amber-200/80 text-sm italic leading-relaxed">
                                    "Efunché laid the foundation, and Latuán built the house." These three women — Ma Monserrate, Efunché,
                                    and Latuán — are the pillars upon which Cuban Ocha was built. Their stories interweave across decades,
                                    cities, and ritual traditions, forming the living roots of the religion as practiced today.
                                </p>
                            </div>

                            {/* Timeline Visualization */}
                            <Section title="Historical Timeline" icon={<Clock className="w-5 h-5 text-amber-400" />}>
                                <div className="relative">
                                    {/* Timeline axis */}
                                    <div className="absolute left-[72px] top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/60 via-indigo-500/60 to-amber-500/60" />

                                    {/* Timeline entries */}
                                    <div className="space-y-3">
                                        {[
                                            { year: 'c. 1804', event: 'Efunché Warikondó born in Yorubaland (likely Oyo)', color: 'text-blue-300' },
                                            { year: 'c. 1805', event: 'Ma Monserrate González born in Egbado, Yorubaland', color: 'text-green-300' },
                                            { year: 'c. 1844', event: 'Timotea "Latuán" Albear born in Africa (likely Oyo region)', color: 'text-rose-300' },
                                            { year: '1863', event: 'Latuán arrives in Cuba (July 12); ship intercepted by British. Placed with Albear household', color: 'text-rose-300' },
                                            { year: 'c. 1864', event: 'First documented full kariocha in Cuba — linked to Josefa "Pepa" Herrera (Eshubí), in Ma Monserrate\'s world', color: 'text-green-300' },
                                            { year: '1866', event: 'Cabildo Yemayá co-founded in Regla by Adeshina, Anabi, and Atanda', color: 'text-amber-300' },
                                            { year: '1873', event: 'Ma Monserrate moves from Havana to Matanzas (drumming permit dated Dec 6, 1873 — Changó\'s day)', color: 'text-green-300' },
                                            { year: '1873–1915', event: 'Latuán\'s period of major ritual activity as Efunché\'s principal oriaté in Havana', color: 'text-rose-300' },
                                            { year: '1886', event: 'Slavery officially abolished in Cuba', color: 'text-amber-300' },
                                            { year: 'c. 1903', event: 'Efunché Warikondó dies. Havana becomes "Latuán\'s city"', color: 'text-blue-300' },
                                            { year: 'c. 1907', event: 'Ma Monserrate dies in Matanzas, reportedly over 100 years old', color: 'text-green-300' },
                                            { year: '1935', event: 'Latuán dies on February 5; death certificate records age 90. Buried in Colón cemetery', color: 'text-rose-300' },
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-4 group">
                                                <span className="text-xs font-mono text-indigo-400/80 w-[60px] text-right shrink-0 pt-0.5">{item.year}</span>
                                                <div className="relative">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-900 border-2 border-amber-500/70 group-hover:border-amber-400 group-hover:shadow-[0_0_8px_rgba(245,158,11,0.5)] transition-all shrink-0 mt-1" />
                                                </div>
                                                <p className={`text-sm leading-snug ${item.color}`}>{item.event}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Legend */}
                                    <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-indigo-800/30">
                                        <span className="flex items-center gap-1.5 text-xs"><span className="w-2 h-2 rounded-full bg-green-400/70" /> Ma Monserrate</span>
                                        <span className="flex items-center gap-1.5 text-xs"><span className="w-2 h-2 rounded-full bg-blue-400/70" /> Efunché</span>
                                        <span className="flex items-center gap-1.5 text-xs"><span className="w-2 h-2 rounded-full bg-rose-400/70" /> Latuán</span>
                                        <span className="flex items-center gap-1.5 text-xs"><span className="w-2 h-2 rounded-full bg-amber-400/70" /> General</span>
                                    </div>
                                </div>
                            </Section>

                            {/* === MA MONSERRATE === */}
                            <div className="mb-6">
                                <button
                                    onClick={() => togglePillar('monserrate')}
                                    className="w-full flex items-center justify-between p-5 bg-indigo-900/30 hover:bg-indigo-900/50 border border-indigo-700/50 hover:border-green-500/40 rounded-xl transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-700/50 to-green-900/50 border border-green-500/30 flex items-center justify-center text-green-300 font-serif text-lg font-bold shrink-0">M</div>
                                        <div className="text-left">
                                            <h3 className="text-lg font-bold text-green-300 group-hover:text-green-200 transition-colors">Ma Monserrate González</h3>
                                            <p className="text-xs text-indigo-400">Obá Teró • Apóto • c. 1805–1907 • Egbado → Havana → Matanzas</p>
                                        </div>
                                    </div>
                                    {expandedPillar === 'monserrate' ? <ChevronUp className="w-5 h-5 text-indigo-400" /> : <ChevronDown className="w-5 h-5 text-indigo-400" />}
                                </button>

                                {expandedPillar === 'monserrate' && (
                                    <div className="mt-2 p-6 bg-indigo-950/40 border border-indigo-800/30 rounded-xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                        <div className="flex items-start gap-3 p-3 bg-green-950/30 border border-green-800/30 rounded-lg">
                                            <Quote className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                                            <p className="text-green-200/80 text-sm italic">"What Efunché is to Havana, Ma Monserrate is to Matanzas."</p>
                                        </div>

                                        <h4 className="text-amber-400 font-bold text-sm uppercase tracking-widest">Origins & Enslavement</h4>
                                        <p className="text-indigo-200/80 leading-relaxed">
                                            Ma Monserrate was born around <strong>1805</strong> in <strong>Egbado</strong>, a Yoruba region within
                                            the broader orbit of the Oyo Empire. She was taken to Cuba as an enslaved woman, arriving in
                                            <strong>Regla</strong> — the major Black port community across the bay from Havana that became
                                            a cradle of Afro-Cuban religious life. She reportedly spoke very little about her time in slavery;
                                            that silence itself has fascinated historians.
                                        </p>

                                        <h4 className="text-amber-400 font-bold text-sm uppercase tracking-widest">The Havana–Matanzas Rupture</h4>
                                        <p className="text-indigo-200/80 leading-relaxed">
                                            Ma Monserrate represented an <strong>Egbado-centric</strong> current of Ocha, while Havana under Efunché
                                            and Latuán was becoming deeply <strong>Oyo- and Changó-centered</strong>. When they pressed her to conform
                                            her style of initiation to theirs, she refused. With the support of <strong>Adeshina</strong> (Remigio
                                            Herrera), she moved from Havana to <strong>Matanzas</strong> no later than <strong>1873</strong> — documented
                                            by a permit requested for public drumming on <strong>December 6, 1873</strong>, Changó's feast day.
                                        </p>
                                        <p className="text-indigo-200/80 leading-relaxed">
                                            The sources disagree on whether there was genuine hostility between the camps. Some oral traditions
                                            speak of ritual conflict; one descendant, <strong>Alfredo Calvo</strong>, said on camera that his
                                            great-grandmother remained on good terms with the Havana elders and that they even attended one
                                            another's ceremonies. The transcripts note this contradiction without resolving it.
                                        </p>

                                        <h4 className="text-amber-400 font-bold text-sm uppercase tracking-widest">Contributions</h4>
                                        <ul className="space-y-2 text-indigo-200/80">
                                            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" /> Helped shape the world where the <strong>first documented full kariocha in Cuba</strong> took place (~1864), linked to <strong>Josefa "Pepa" Herrera (Eshubí)</strong>, daughter of Adeshina</li>
                                            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" /> Introduced <strong>Egbado-style initiation</strong> practices to Matanzas, creating a distinct lineage</li>
                                            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" /> <strong>Exchanged knowledge with Arará (Fon) traditions</strong> — shell-divination methods, ceremony secrets, and deity traditions. This cross-pollination helped bring beings like <strong>Babalú Ayé / Asojano</strong> into Lucumí practice</li>
                                            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" /> Carried forward knowledge of <strong>Olokún, Oduduwá, Yewá</strong>, and related ritual complexes that became especially identified with Matanzas</li>
                                            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" /> Connected to <strong>Fermina Gómez (Ocha Bi)</strong>, who preserved the Lucumí tradition of Olokún worship through her lineage until ~1950</li>
                                        </ul>

                                        <div className="p-3 bg-indigo-900/30 border border-indigo-700/30 rounded-lg mt-4">
                                            <p className="text-indigo-300/80 text-xs">
                                                <strong>Notable:</strong> Although Efunché and Latuán may have "won" the fight for Havana, the surviving
                                                photographs most often circulated are of <strong>Ma Monserrate</strong>, <strong>Adeshina</strong>,
                                                and <strong>Fermina Gómez</strong> — not of Efunché or Latuán. No verified photographs of the Havana
                                                founders survive.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* === EFUNCHÉ === */}
                            <div className="mb-6">
                                <button
                                    onClick={() => togglePillar('efunche')}
                                    className="w-full flex items-center justify-between p-5 bg-indigo-900/30 hover:bg-indigo-900/50 border border-indigo-700/50 hover:border-blue-500/40 rounded-xl transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-700/50 to-blue-900/50 border border-blue-500/30 flex items-center justify-center text-blue-300 font-serif text-lg font-bold shrink-0">E</div>
                                        <div className="text-left">
                                            <h3 className="text-lg font-bold text-blue-300 group-hover:text-blue-200 transition-colors">Efunché Warikondó</h3>
                                            <p className="text-xs text-indigo-400">Ña Rosalía • c. 1804–1903 • Yoruba-born (likely Oyo) → Havana</p>
                                        </div>
                                    </div>
                                    {expandedPillar === 'efunche' ? <ChevronUp className="w-5 h-5 text-indigo-400" /> : <ChevronDown className="w-5 h-5 text-indigo-400" />}
                                </button>

                                {expandedPillar === 'efunche' && (
                                    <div className="mt-2 p-6 bg-indigo-950/40 border border-indigo-800/30 rounded-xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                        <div className="flex items-start gap-3 p-3 bg-blue-950/30 border border-blue-800/30 rounded-lg">
                                            <Quote className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                                            <p className="text-blue-200/80 text-sm italic">"Efunché is the single most influential pillar and founder of Havana Ocha as we know it today."</p>
                                        </div>

                                        <h4 className="text-amber-400 font-bold text-sm uppercase tracking-widest">Identity</h4>
                                        <p className="text-indigo-200/80 leading-relaxed">
                                            Born around <strong>1804</strong>, Efunché was <strong>Yoruba-born, not Cuban-born</strong>. The prefix
                                            <strong>Ña</strong> in her name indicates an elder African-born person rather than a Cuban creole.
                                            She is most commonly identified as a priestess of <strong>Ochosi</strong>, though some lineages connect
                                            her to <strong>Obatalá</strong> or even <strong>Yewá</strong>. The debate remains unsettled — Ochosi
                                            was comparatively rare in Cuba and Yewá even rarer, especially in Havana.
                                        </p>
                                        <p className="text-indigo-200/80 leading-relaxed">
                                            She was connected to <strong>Cabildo San José 80</strong> (San José Ochenta), described not just as a
                                            cabildo name but as a large colonial-style home where members lived, held ceremonies, and carried out
                                            full initiations. If you had walked into that house in the late nineteenth century, you might have
                                            heard <strong>Spanish in the street</strong> and <strong>Yoruba inside the cabildo</strong>.
                                        </p>

                                        <h4 className="text-amber-400 font-bold text-sm uppercase tracking-widest">Contributions to Havana Ocha</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-700/20">
                                                <p className="text-blue-300 font-bold text-sm mb-1">📜 Initiation Standards</p>
                                                <p className="text-indigo-200/80 text-sm">Laid the basic ground rules requiring a core set of principal orishas to be present as witnesses for any valid initiation</p>
                                            </div>
                                            <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-700/20">
                                                <p className="text-blue-300 font-bold text-sm mb-1">👑 Iyawó Throne Period</p>
                                                <p className="text-indigo-200/80 text-sm">Established the original expectation that the iyawó remain on the throne for <strong>16 days</strong> (some say 21); the later reduction to 7 was a practical adaptation</p>
                                            </div>
                                            <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-700/20">
                                                <p className="text-blue-300 font-bold text-sm mb-1">🎶 Yoko Ocha Ceremony</p>
                                                <p className="text-indigo-200/80 text-sm">Organized the full order of ceremony — river rituals, sacrifices, consecrations, songs, chants — into a cohesive whole rather than scattered rites</p>
                                            </div>
                                            <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-700/20">
                                                <p className="text-blue-300 font-bold text-sm mb-1">🤝 The Unifier</p>
                                                <p className="text-indigo-200/80 text-sm">Decided that priests from different ritual branches could collaborate in the same initiation — a godparent from one line, an oyugbona from another, and a ritual director from yet another</p>
                                            </div>
                                        </div>
                                        <p className="text-indigo-200/80 leading-relaxed mt-2">
                                            The unification principle may have been her greatest legacy. If each African-derived branch had stayed
                                            isolated, the religion might have fractured and died. Instead, under a common Havana umbrella shaped
                                            by Efunché, they built something durable together.
                                        </p>

                                        <div className="p-3 bg-indigo-900/30 border border-indigo-700/30 rounded-lg">
                                            <p className="text-indigo-300/80 text-xs">
                                                <strong>On lineage variation:</strong> Many priests today justify differences by saying "in my house
                                                we do it this way." Small variations exist — and some arose from necessity (e.g., during persecution,
                                                some houses kept the initiate home in a tub while others went to the river). But the transcripts argue
                                                that differences among Havana ramas should be understood as <strong>variations within a common
                                                    structure</strong>, not excuses for anything and everything.
                                            </p>
                                        </div>

                                        <div className="flex items-start gap-3 p-3 bg-blue-950/20 border border-blue-800/20 rounded-lg mt-2">
                                            <Quote className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                                            <p className="text-blue-200/70 text-sm italic">
                                                "Even if there is no surviving photograph, and even if her grave is obscure or lost, Efunché's
                                                presence is still felt every time a new iyawó is born in Havana style. That is her living monument."
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* === LATUÁN === */}
                            <div className="mb-6">
                                <button
                                    onClick={() => togglePillar('latuan')}
                                    className="w-full flex items-center justify-between p-5 bg-indigo-900/30 hover:bg-indigo-900/50 border border-indigo-700/50 hover:border-rose-500/40 rounded-xl transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-700/50 to-rose-900/50 border border-rose-500/30 flex items-center justify-center text-rose-300 font-serif text-lg font-bold shrink-0">L</div>
                                        <div className="text-left">
                                            <h3 className="text-lg font-bold text-rose-300 group-hover:text-rose-200 transition-colors">Timotea "Latuán" Albear</h3>
                                            <p className="text-xs text-indigo-400">Ayaí Leú • c. 1844–1935 • Oyo, Nigeria → Havana</p>
                                        </div>
                                    </div>
                                    {expandedPillar === 'latuan' ? <ChevronUp className="w-5 h-5 text-indigo-400" /> : <ChevronDown className="w-5 h-5 text-indigo-400" />}
                                </button>

                                {expandedPillar === 'latuan' && (
                                    <div className="mt-2 p-6 bg-indigo-950/40 border border-indigo-800/30 rounded-xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                        <div className="flex items-start gap-3 p-3 bg-rose-950/30 border border-rose-800/30 rounded-lg">
                                            <Quote className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                                            <p className="text-rose-200/80 text-sm italic">"After Efunché's death, Havana became Latuán's city."</p>
                                        </div>

                                        <h4 className="text-amber-400 font-bold text-sm uppercase tracking-widest">Arrival & Emancipation</h4>
                                        <p className="text-indigo-200/80 leading-relaxed">
                                            Latuán was born circa <strong>1844</strong> in Africa, most likely from the <strong>Oyo region</strong>
                                            of Yorubaland. She arrived in Cuba on <strong>July 12, 1863</strong>, aboard a ship that was intercepted
                                            by the <strong>British Royal Navy</strong> — Britain having already abolished slavery. Historical context:
                                            Haiti abolished slavery in 1804, Cuba did not officially stop participating in the trade until 1867,
                                            and full abolition in Cuba came in 1886.
                                        </p>
                                        <p className="text-indigo-200/80 leading-relaxed">
                                            The intercepted captives were placed with wealthy Cuban households to be educated. Latuán was taken in
                                            by a household associated with the surname <strong>Albear</strong>, linked to <strong>Colonel Francisco
                                                Albear y Lara</strong>, the military engineer famous for constructing Havana's great aqueduct. She was
                                            an <strong>emancipated would-be slave</strong> — intended for slavery but never living the plantation
                                            experience, though the Middle Passage itself would still have been harrowing. She remained under a
                                            limited form of constrained freedom for about <strong>ten years</strong> before receiving full freedom.
                                        </p>

                                        <h4 className="text-amber-400 font-bold text-sm uppercase tracking-widest">Ritual Role & Knowledge</h4>
                                        <p className="text-indigo-200/80 leading-relaxed">
                                            Latuán may have been initiated to <strong>Changó at age thirteen</strong> in Africa before her
                                            capture. She served as <strong>Efunché's exclusive principal oriaté</strong> — the ritual woman
                                            behind most or all of Efunché's ordinations. Her period of major activity in Havana spanned roughly
                                            <strong>1873 to 1915</strong>.
                                        </p>
                                        <p className="text-indigo-200/80 leading-relaxed">
                                            After <strong>Efunché's death in 1903</strong>, Latuán enforced the orthodox Havana form of Ocha for
                                            another thirty years. In this account, <strong>no initiation in Havana happened without Latuán's
                                                knowledge or approval</strong>, and she stands as proof that a woman could function in the highest
                                            ritual roles.
                                        </p>

                                        <h4 className="text-amber-400 font-bold text-sm uppercase tracking-widest">The Language Question</h4>
                                        <p className="text-indigo-200/80 leading-relaxed">
                                            The transcripts raise an important argument: a teenager from Yorubaland in the nineteenth century
                                            would have spoken <strong>fluent Yoruba</strong>, not broken Cuban Lucumí. When scholars say she
                                            had to "learn Lucumí," the speaker argues this means learning the <strong>Cuban ritual dialect
                                                and Cubanized vocabulary</strong> — not starting from zero. Similarly, a child from that world
                                            could have already seen ceremonies, spoken the language, and absorbed ritual culture before ever
                                            arriving in Cuba.
                                        </p>

                                        <h4 className="text-amber-400 font-bold text-sm uppercase tracking-widest">Personal Life & Legacy</h4>
                                        <p className="text-indigo-200/80 leading-relaxed">
                                            Latuán was described by elders as a <strong>very pretty, voluptuous woman</strong> (the word
                                            <em>mulata</em> was used); <strong>no verified photographs</strong> survive. She was an
                                            <strong>avid reader</strong> who started her day with the newspaper. A family memory captures
                                            her spirit: <em>"I may be a Black Lucumí woman, but I know the rules of literacy — I can read
                                                and write."</em>
                                        </p>
                                        <p className="text-indigo-200/80 leading-relaxed">
                                            She had children, grandchildren, and descendants. Sources conflict about her husband: one version
                                            says <strong>Miguel [surname unclear]</strong>; David H. Brown's research connects her to
                                            <strong>Evaristo Albear</strong>. She died on <strong>February 5, 1935</strong>, and her death
                                            certificate gives her age as <strong>90</strong>. She was buried in a cemetery in
                                            <strong>Colón, Cuba</strong>.
                                        </p>

                                        <div className="flex items-start gap-3 p-3 bg-rose-950/20 border border-rose-800/20 rounded-lg">
                                            <Quote className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                                            <p className="text-rose-200/70 text-sm italic">
                                                "Latuán and Efunché are the reason Havana-lineage people still have santo made the way they do today."
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Cross-Reference & Sources */}
                            <Section title="Cross-References Between Sources" icon={<BookOpen className="w-5 h-5 text-amber-400" />}>
                                <p className="mb-3">
                                    All three accounts reference the same foundational network of people and events. Key points that
                                    appear across multiple independent sources:
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2 text-sm"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" /> The <strong>Havana vs. Matanzas divergence</strong> is confirmed in all three transcripts and validated by scholarly research (Willie Ramos, David H. Brown)</li>
                                    <li className="flex items-start gap-2 text-sm"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" /> Efunché and Latuán's partnership is <strong>consistently described</strong> across all accounts — "Efunché laid the foundation, Latuán built the house"</li>
                                    <li className="flex items-start gap-2 text-sm"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" /> The <strong>1873 date</strong> for Ma Monserrate's Matanzas move appears in two transcripts and is supported by Willie Ramos's documentation of a drumming permit</li>
                                    <li className="flex items-start gap-2 text-sm"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" /> All three transcripts affirm that <strong>no photographs of Efunché or Latuán</strong> are known to exist — a sharp contrast with Ma Monserrate, Adeshina, and Fermina Gómez, whose images have survived</li>
                                    <li className="flex items-start gap-2 text-sm"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" /> The <strong>Albear surname</strong> is traced to Colonel Francisco Albear y Lara's household — confirmed by UNESCO heritage records and multiple research sources</li>
                                </ul>

                                <div className="mt-6 p-4 bg-indigo-900/20 border border-indigo-700/30 rounded-lg">
                                    <h5 className="text-amber-300 font-bold text-xs uppercase tracking-widest mb-3">Sources & Bibliography</h5>
                                    <ul className="space-y-1 text-indigo-300/70 text-xs">
                                        <li>• Ramos, Miguel "Willie". <em>Orí Eledá Mí Ó… If My Head Does Not Sell Me</em> (2011)</li>
                                        <li>• Brown, David H. <em>Santería Enthroned: Art, Ritual, and Innovation in an Afro-Cuban Religion</em></li>
                                        <li>• Eyiogbe, Frank Baba. <em>Babalawo: The Secrets of Afro-Cuban Ifa</em></li>
                                        <li>• Cabrera, Lydia. <em>El Monte</em> and related works on Afro-Cuban religion</li>
                                        <li>• YouTube channel: Santo El (Lucumí history video series)</li>
                                        <li>• EcuRed, OrishaNet, and santeriachurch.org historical databases</li>
                                    </ul>
                                </div>
                            </Section>
                        </>
                    )}

                    {/* IN THE AMERICAS */}
                    {activeTab === 'americas' && (
                        <>
                            <Section title="Migration to the United States" icon={<MapPin className="w-5 h-5 text-green-400" />}>
                                <p>
                                    Osha came to the United States primarily through Cuban immigration, beginning in the late 1950s
                                    and accelerating after the Cuban Revolution in 1959. The first wave consisted mainly of professional
                                    classes fleeing the Castro regime. In 1980, the Mariel boatlift brought approximately 125,000 Cubans,
                                    including substantial numbers of Osha practitioners — and, according to the faithful, the Orishas
                                    who followed their priests.
                                </p>
                                <p>
                                    <strong>Miami</strong> became the primary center of Osha in the United States. As author Julio
                                    Garcia Cortez notes: "It is said that in Miami alone, someone is vested almost every day of the week."
                                    The religion also took root in <strong>New York City</strong>, particularly among Cuban, Puerto Rican,
                                    and Dominican communities.
                                </p>
                            </Section>

                            <Section title="From Secret Practice to Legal Recognition" icon={<Scale className="w-5 h-5 text-green-400" />}>
                                <p>
                                    For much of its history in the United States, Osha operated in secrecy due to discrimination and
                                    misunderstanding. Practitioners faced prejudice and legal challenges, particularly regarding animal
                                    sacrifice — a core ritual component where offerings (usually chickens) are made to nourish the Orishas.
                                </p>
                                <p>
                                    A landmark moment came with the <strong>Church of the Lukumi Babalu Aye v. City of Hialeah</strong>
                                    Supreme Court case (1993), which established that animal sacrifice in religious ceremonies is protected
                                    under the First Amendment's Free Exercise Clause. This legal recognition marked a turning point,
                                    allowing Osha to practice more openly.
                                </p>
                            </Section>

                            <Section title="Shangóization and Religious Development" icon={<Feather className="w-5 h-5 text-green-400" />}>
                                <p>
                                    In Cuba, Osha underwent a process scholar David Brown calls "<strong>Shangóization</strong>" —
                                    the reorganization of various Orisha initiation rites along the model of Shangó's royal installation.
                                    As Calixta Morales, a senior elder, told folklorist Lydia Cabrera: "<em>To make an orisha is to make a king.</em>"
                                </p>
                                <p>
                                    Devotees of Obatalá, Yemayá, Oshún, Oya, and others are all initiated according to rites modeled on
                                    Shangó's tradition. The initiate is seated on Shangó's mortar throne and called "<strong>iyawó</strong>"
                                    (bride) of the Orisha. This concept of initiation as royal installation reflects the power of Shangó
                                    traditions to shape the broader religious practice in the diaspora.
                                </p>
                            </Section>
                        </>
                    )}

                    {/* WOMEN ORIATES */}
                    {activeTab === 'women' && (
                        <>
                            <div className="mb-6 p-4 bg-amber-950/30 border border-amber-700/50 rounded-xl">
                                <p className="text-amber-200/80 text-sm italic">
                                    "Before the title of Oriate was monopolized by men, they — the Iya — were the ones who threw the snail,
                                    those who consecrated, and those who commanded the keys."
                                </p>
                                <p className="text-amber-400/60 text-xs mt-2 text-right">— Eng Randy</p>
                            </div>

                            <Section title="The Invisible Chapter" icon={<Crown className="w-5 h-5 text-amber-400" />}>
                                <p>
                                    In the history of Cuban Santería, there is one chapter that has been systematically invisible:
                                    that of <strong>women who exercised as maximum ritual authorities</strong>. Before the title of
                                    Oriate was monopolized by men, they — the <em>Iya</em> — were the ones who threw the snail,
                                    those who consecrated, and those who commanded the keys.
                                </p>
                                <p>
                                    These women were <strong>Obasas</strong> (or better said, <strong>Ayagba</strong>) in their communities.
                                    They were mothers, they were priests, they were Africa's living memory in Cuba. They had the ability
                                    to see in the snail what others couldn't.
                                </p>
                                <div className="mt-4 p-3 bg-indigo-900/30 border border-indigo-700/30 rounded-lg">
                                    <p className="text-indigo-300/80 text-xs">
                                        <strong>Note on Sources:</strong> These names come from oral tradition, lineage histories, and
                                        academic research. Some names have been verified in scholarly sources (such as works by María
                                        Margarita Castro Flores and others), while others exist primarily in oral tradition. Spelling
                                        variations and title differences may exist across lineages.
                                    </p>
                                </div>
                            </Section>

                            <Section title="The Great Consultants and Oriates" icon={<Star className="w-5 h-5 text-amber-400" />}>
                                <p className="text-sm text-indigo-300/70 mb-3">Women like these were the first to hold the board:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Delia Malecón</p>
                                        <p className="text-indigo-300/70 text-sm">Omi Toke</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Susana Cantero</p>
                                        <p className="text-indigo-300/70 text-sm">Omí Toké — Created "La Rama del Coral" branch</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Rosa Menendez</p>
                                        <p className="text-indigo-300/70 text-sm">Omi Toke — Great Awo who carried the word of the saints</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Fermina Gómez Pastrana</p>
                                        <p className="text-indigo-300/70 text-sm">Osha Bi (1844-1950) — First to receive Olokun in Cuba</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Guillermina Castel</p>
                                        <p className="text-indigo-300/70 text-sm">Oshun Kayodé</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">María Cira Cabello</p>
                                        <p className="text-indigo-300/70 text-sm">Ogun Sale — "Consulted with a snail and made ebo"</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Pascuala Cuesta</p>
                                        <p className="text-indigo-300/70 text-sm">Odu Bi</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Carmen Miro</p>
                                        <p className="text-indigo-300/70 text-sm">Ewin Leti — appears twice in historical records</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Rosa la Africana</p>
                                        <p className="text-indigo-300/70 text-sm">Oggún Fumito — Verified in academic sources</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Calixta Morales</p>
                                        <p className="text-indigo-300/70 text-sm">Odedei — Verified in academic sources</p>
                                    </div>
                                </div>
                            </Section>

                            <Section title="The Women of Shangó and Obatalá" icon={<Sparkles className="w-5 h-5 text-amber-400" />}>
                                <p className="mb-4">
                                    <strong>Timotea Albear (Latuan)</strong> deserves a separate paragraph.
                                    She didn't just "have" Shangó: she was <strong>supreme authority</strong> and teacher
                                    of the first male Oriates. Her legacy lives on in every ceremony well done.
                                </p>
                                <p className="text-sm text-indigo-300/70 mb-3">Women who held direct connection with the owner of the head:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Abbita</p>
                                        <p className="text-indigo-300/70 text-sm">Olo Obatala</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Asha Ade</p>
                                        <p className="text-indigo-300/70 text-sm">Olo Odua</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Ashiyu Lila</p>
                                        <p className="text-indigo-300/70 text-sm">Olo Obatala</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Ambiro Teran</p>
                                        <p className="text-indigo-300/70 text-sm">Olo Obatala</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Etma Teran Sanchez</p>
                                        <p className="text-indigo-300/70 text-sm">Oshun Yemi — Mother and daughter tradition</p>
                                    </div>
                                </div>
                            </Section>

                            <Section title="Daughters of Oshun: Sweetness That Rules" icon={<Heart className="w-5 h-5 text-amber-400" />}>
                                <p className="mb-4">
                                    Oshun isn't just a flirt shop. It's the river that rules everything. This is why these women
                                    were so important — all with river names, all with belt power and snail.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Camila Oviedo</p>
                                        <p className="text-indigo-300/70 text-sm">Oshun Funke</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Josefina Aguirre</p>
                                        <p className="text-indigo-300/70 text-sm">Oshun Nike</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Josefina Beltran</p>
                                        <p className="text-indigo-300/70 text-sm">Oshun Guere</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">La Chinita Estevez</p>
                                        <p className="text-indigo-300/70 text-sm">Oshun Miwa</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Juana Valdéz</p>
                                        <p className="text-indigo-300/70 text-sm">Ochun Funke</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Pastor Vigo</p>
                                        <p className="text-indigo-300/70 text-sm">Olo Oshun — Owner of Oshun</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Joan Maria Montes de Oca</p>
                                        <p className="text-indigo-300/70 text-sm">Oshainle — "The Girl" of deep wisdom</p>
                                    </div>
                                </div>
                            </Section>

                            <Section title="Those Who Consolidated Religion" icon={<BookOpen className="w-5 h-5 text-amber-400" />}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Ña Rosalía Abreu</p>
                                        <p className="text-indigo-300/70 text-sm">Efunshe Warikondo (Victoria) — Reformer who innovated ceremonies</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Ma Monserrat González</p>
                                        <p className="text-indigo-300/70 text-sm">Obatero — "If as oriate" — she worked as such</p>
                                    </div>
                                    <div className="bg-indigo-900/30 p-3 rounded-lg">
                                        <p className="text-amber-300 font-bold">Calixta Morales</p>
                                        <p className="text-indigo-300/70 text-sm">Odedei — "Great awpon" (exceptional singer)</p>
                                    </div>
                                </div>
                            </Section>

                            <Section title="Those We Must Never Forget" icon={<Feather className="w-5 h-5 text-amber-400" />}>
                                <p className="text-sm text-indigo-300/70 mb-3">Each name is a link in the chain:</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Guadalupe Estable', 'Francisca Estenza', 'Ña Francisca Olomide', 'Mercedes Castillo (Oye Yei)',
                                        'Tomasa García (Ala Agayu)', 'Matilde Puntilla (Omi Yale)', 'Damiana Acosta (Oñikefun)',
                                        'Rosario Diego Allestaran (Towa)', 'Isabel Rodríguez (Ogun Deyi)'].map((name) => (
                                            <span key={name} className="px-3 py-1 bg-indigo-900/50 rounded-full text-indigo-200 text-sm border border-indigo-700/30">
                                                {name}
                                            </span>
                                        ))}
                                </div>
                            </Section>

                            <div className="mt-8 p-6 bg-gradient-to-r from-amber-950/40 to-indigo-950/40 border border-amber-700/30 rounded-xl">
                                <h4 className="text-lg font-bold text-amber-300 mb-3 flex items-center gap-2">
                                    <Heart className="w-5 h-5" />
                                    Why Is It Important to Name Them
                                </h4>
                                <p className="text-indigo-200/80 text-sm leading-relaxed">
                                    Because for decades, history was written by others. Because when it's said that
                                    "women can't do anything" in religion, we're lying to these 31 (and so many more).
                                    They were <strong>Obasas</strong> or better said <strong>Ayagba</strong> in their communities.
                                    They were mothers, they were priests, they were Africa's living memory in Cuba.
                                </p>
                                <p className="text-amber-400/80 text-sm mt-4 italic text-center">
                                    May their names not be just letters on a list. Let them be summoned. Let them be respected. 🔥🌊🐚
                                </p>
                                <p className="text-indigo-400/60 text-xs mt-3 text-right">Author: Eng Randy</p>
                            </div>
                        </>
                    )}

                    {/* TODAY */}
                    {activeTab === 'today' && (
                        <>
                            <Section title="Global Practice" icon={<Globe className="w-5 h-5 text-purple-400" />}>
                                <p>
                                    Today, Osha (also known as Santería, La Regla de Ocha, or La Religión Lucumí) is practiced throughout
                                    the Americas and beyond. Estimates of practitioners in the United States range from 1 million core
                                    members to as many as 5 million including those who consult the religion. Major centers include Miami,
                                    New York, Los Angeles, and Chicago.
                                </p>
                                <p>
                                    The religion has spread beyond Cuban communities to include Puerto Ricans, Dominicans, African Americans,
                                    and white Americans. It maintains a strong presence not only in the United States but also in Venezuela,
                                    Puerto Rico, the Dominican Republic, and has even returned to influence religious practice in Nigeria.
                                </p>
                            </Section>

                            <Section title="Continuing Traditions" icon={<BookOpen className="w-5 h-5 text-purple-400" />}>
                                <p>
                                    Contemporary Osha practice preserves core traditions:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong>Divination</strong> — Using the Diloggun (cowrie shells), Obi (coconut), and Ifá (oracle)</li>
                                    <li><strong>Initiation</strong> — The "making of the saint" (kariocha) where devotees are crowned with their guardian Orisha</li>
                                    <li><strong>Ebbó and Offerings</strong> — Sacrifices, cleansings, and ritual prescriptions to maintain spiritual balance</li>
                                    <li><strong>Bata Drumming</strong> — Sacred rhythms that call the Orishas to possess their devotees</li>
                                    <li><strong>Ancestor Veneration</strong> — Honoring the Egun (ancestors) who guide and protect</li>
                                    <li><strong>Herbal Medicine</strong> — Using sacred plants (ewe) for healing and ritual purposes</li>
                                </ul>
                            </Section>

                            <Section title="Names and Identity" icon={<Heart className="w-5 h-5 text-purple-400" />}>
                                <p>
                                    The religion is known by several names, reflecting its complex history:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong>La Regla de Ocha</strong> — "The Rule of the Orishas" (preferred by many practitioners)</li>
                                    <li><strong>La Religión Lucumí</strong> — "The Lucumí Religion" (referencing the Yoruba heritage)</li>
                                    <li><strong>Osha</strong> — Shortened form of Ocha</li>
                                    <li><strong>Santería</strong> — Originally a derogatory Spanish term meaning "worship of the saints,"
                                        now accepted by some but rejected by others</li>
                                </ul>
                                <p>
                                    As scholar Miguel "Willie" Ramos explains, "Lucumí" may have originated as a Yoruba greeting
                                    "<em>oluku mi</em>" (my friend), used by enslaved persons to identify each other in Cuba. The term
                                    came to represent not just a language but an entire cultural and religious identity.
                                </p>
                                <p>
                                    Whether called Osha, Lucumí, or Santería, the tradition continues to provide spiritual guidance,
                                    healing, and community for millions across the Americas — a testament to the resilience and power
                                    of African religious heritage in the New World.
                                </p>
                            </Section>
                        </>
                    )}
                </div>

                {/* Source Footer */}
                <div className="mt-8 text-center">
                    <p className="text-indigo-400/50 text-xs">
                        Primary Source: Cortez, Julio Garcia. <em>The Osha: Secrets of the Yoruba-Lucumi-Santeria Religion
                            in the United States and the Americas</em> (2000)
                    </p>
                    <p className="text-indigo-400/40 text-xs mt-1">
                        Additional sources: Miguel "Willie" Ramos (<em>Orí Eledá Mí Ó</em>), David H. Brown (<em>Santería Enthroned</em>),
                        Frank Baba Eyiogbe (<em>Babalawo</em>), Lydia Cabrera, Santo El (video series), and scholarly works on Afro-Cuban religions
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OshaHistory;
