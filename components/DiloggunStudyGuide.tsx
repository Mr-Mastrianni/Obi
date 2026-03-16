import React, { useState } from 'react';
import { ChevronLeft, BookOpen, Scroll, AlertTriangle, Star, HelpCircle, Feather, Scale, Sparkles, Music } from 'lucide-react';
import { ViewState } from '../types';

interface DiloggunStudyGuideProps {
    setView: (v: ViewState) => void;
    goHome: () => void;
}

interface OduDetail {
    number: number;
    name: string;
    yorubaName: string;
    meaning: string;
    proverb: string;
    interpretation: string;
    ireOsogboNote: string;
    rulingOrisha: string;
    ebbo: string[];
    warnings: string[];
}

const ODUS_CHAPTER_11: OduDetail[] = [
    {
        number: 1,
        name: 'Okana',
        yorubaName: 'Okana Sode',
        meaning: 'One mouth open — The beginning of all things, solitude, and the number one.',
        proverb: 'Okana sorde: The world began with one. There are no bad ones.',
        interpretation: `Okana speaks of beginnings and solitude. It is the first Odu and represents the start of any enterprise. When Okana appears, it indicates that the person is at the beginning of a journey. The Odu warns of enemies working in darkness and the need for caution. Eshu-Elegua speaks strongly in this sign — offerings must be made to open the paths. Okana indicates that the person may feel alone or isolated, but this solitude is necessary for growth. The reading emphasizes the importance of paying attention to the crossroads and making proper offerings to Elegua.`,
        ireOsogboNote: 'When Ire: New beginnings will be successful. When Osogbo: Delays and obstacles due to hidden enemies.',
        rulingOrisha: 'Elegua / Eshu',
        ebbo: ['Coconut to Elegua', 'Roasted corn', 'A small goat for major issues'],
        warnings: ['Watch for betrayal by someone close', 'Do not pick up objects from the ground', 'Avoid walking alone at night']
    },
    {
        number: 2,
        name: 'Eji Oko',
        yorubaName: 'Eji Oko / Eyioso',
        meaning: 'Two mouths open — Duality, twins, partnership, and division.',
        proverb: 'Ofa Abure: Arrows among brothers. Today your brother is your enemy.',
        interpretation: `Eji Oko is the sign of duality and partnership. It speaks of both cooperation and conflict. When Eji Oko appears, it may indicate issues with siblings or business partners. The person should be careful with contractual agreements and ensure all terms are clear. This Odu can also indicate twin births or spiritual connections to the Ibeji (sacred twins). Offerings to the Ibeji may be required. Eji Oko warns that partnerships may fail if not carefully managed. The person should avoid gossip and not share their plans with those who are not directly involved.`,
        ireOsogboNote: 'When Ire: Partnerships will succeed, twins bring blessings. When Osogbo: Conflict with siblings or partners, division.',
        rulingOrisha: 'Ibeji (Sacred Twins)',
        ebbo: ['Offerings to the Ibeji', 'Two of any item', 'Sweets for children'],
        warnings: ['Avoid disputes with siblings', 'Be cautious in business partnerships', 'Do not eat from broken dishes']
    },
    {
        number: 3,
        name: 'Ogunda',
        yorubaName: 'Ogunda',
        meaning: 'Three mouths open — War, strength, iron, and Ogún\'s power.',
        proverb: 'Ogunda ko: War is coming. Blood will be spilled.',
        interpretation: `Ogunda is the Odu of war, iron, and hard work. Ogún speaks strongly in this sign — the warrior Orisha who clears paths through obstacles. When Ogunda appears, it indicates that the person is facing struggles that require determination and sacrifice. This may be a time of conflict, either external or internal. Ogunda warns against laziness and encourages the person to work hard toward their goals. The reading may indicate the need for surgical intervention or working with iron tools. Ogún requires offerings to clear the path. This is a powerful sign that brings strength but also danger if not properly managed.`,
        ireOsogboNote: 'When Ire: Victory through effort, successful surgery. When Osogbo: Accidents with iron or weapons, violent conflict.',
        rulingOrisha: 'Ogún',
        ebbo: ['Palm oil and honey to Ogún', 'Iron tools', 'Roosters'],
        warnings: ['Avoid alcohol', 'Be careful with sharp objects', 'Do not travel at certain times']
    },
    {
        number: 4,
        name: 'Irosun',
        yorubaName: 'Irosun / Iroso',
        meaning: 'Four mouths open — The ancestors, communication, and spiritual messages.',
        proverb: 'Irosun bogbe: The ancestors are speaking. Listen to the elders.',
        interpretation: `Irosun is the Odu of communication with the spirit world and the ancestors. When Irosun appears, it indicates that the ancestors have messages for the person. This sign speaks of life after death and the continuing connection between the living and the dead. The person may be called to serve as a medium or to develop spiritual gifts. Irosun warns against neglecting ancestral veneration — the ancestors must be honored properly. This sign can indicate prophetic dreams, spiritual callings, and the need for initiation. The person should be careful not to ignore signs and messages from the spirit world.`,
        ireOsogboNote: 'When Ire: Ancestral blessings, spiritual gifts awaken. When Osogbo: Neglect of ancestors causes problems, witchcraft attacks.',
        rulingOrisha: 'Oyá (guardian of cemeteries) / Oya',
        ebbo: ['Offerings to the ancestors', 'Palm nuts', 'Black cloth'],
        warnings: ['Pay attention to dreams', 'Do not ignore ancestral shrines', 'Avoid graveyards at certain times']
    },
    {
        number: 5,
        name: 'Oché',
        yorubaName: 'Oché / Ose',
        meaning: 'Five mouths open — Love, sweetness, Oshún, and emotional matters.',
        proverb: 'Oché yokó: The river flows sweet. Love conquers all.',
        interpretation: `Oché is the sign of Oshún, the Orisha of love, rivers, and sweetness. When Oché appears, it indicates matters of the heart, relationships, and emotional healing. This sign speaks of the need for sweetness in life — the person may be experiencing bitterness that needs to be transformed. Oché brings blessings of children, fertility, and abundance when well-aspected. However, it can also indicate gossip, sexual issues, or problems with women. The river is home to powerful spirits, and offerings to Oshún will help the person navigate emotional waters. This sign emphasizes the power of feminine energy and the importance of maintaining harmony in relationships.`,
        ireOsogboNote: 'When Ire: Love, fertility, abundance, happy relationships. When Osogbo: Heartbreak, sexual disease, gossip, trouble with women.',
        rulingOrisha: 'Oshún',
        ebbo: ['Honey to Oshún', 'Pumpkins', 'Yellow cloth', 'Five copper coins'],
        warnings: ['Avoid arguments with women', 'Do not swim in rivers', 'Be faithful in relationships']
    },
    {
        number: 6,
        name: 'Obara',
        yorubaName: 'Obara',
        meaning: 'Six mouths open — Restlessness, transformation, fire, and spiritual upheaval.',
        proverb: 'Obara meyi: Restlessness brings wisdom through suffering.',
        interpretation: `Obara is a complex sign of restlessness and transformation. It speaks of the fire that refines — the person may be going through difficult changes that will ultimately lead to growth. Obara can indicate volatility in temperament and the need to control anger. This sign often appears when there is unfinished business with the ancestors or when a person is resisting their spiritual calling. Obara warns against arrogance and pride — humility is required to pass through the fire safely. The sign can indicate unexpected financial gains but also sudden losses. The person must learn to work with the transformative energy rather than against it.`,
        ireOsogboNote: 'When Ire: Financial windfalls, successful transformation. When Osogbo: Volatility, arguments, unexpected losses.',
        rulingOrisha: 'Oshumare (rainbow serpent) / Shangó',
        ebbo: ['Salt water', 'Black and red cloth', 'Ritual cleansing'],
        warnings: ['Control your temper', 'Do not be arrogant', 'Complete what you start']
    },
    {
        number: 7,
        name: 'Odí',
        yorubaName: 'Odí / Odi',
        meaning: 'Seven mouths open — Home, security, the womb, and inner secrets.',
        proverb: 'Odí soró: The womb holds secrets. Home is sanctuary.',
        interpretation: `Odí is the Odu of the home, security, and the womb. It speaks of feminine mysteries, pregnancy, and the sanctity of the inner life. When Odí appears, it indicates issues related to home and family security. The person may need to strengthen their home spiritually or address issues with their mother. This sign is deeply connected to Yemayá, the mother of all Orishas and the ocean itself. Odí indicates the importance of protecting one\'s private life and not revealing secrets to those who would misuse them. The womb represents both physical fertility and creative potential. This sign can indicate successful pregnancy when well-aspected, or reproductive issues when problematic.`,
        ireOsogboNote: 'When Ire: Strong home, successful pregnancy, security. When Osogbo: Problems with mother, insecurity, miscarriage.',
        rulingOrisha: 'Yemayá',
        ebbo: ['Molasses to Yemayá', 'Watermelon', 'Blue and white cloth'],
        warnings: ['Protect your home', 'Do not reveal secrets', 'Honor your mother']
    },
    {
        number: 8,
        name: 'Eji Ogbe',
        yorubaName: 'Eji Ogbe / Ogbe',
        meaning: 'Eight mouths open — Light, clarity, victory, and spiritual perfection.',
        proverb: 'Ogbe toná: The light is clear. Victory comes to the patient.',
        interpretation: `Eji Ogbe is considered the most fortunate of the Odus — the sign of light, clarity, and victory. When Ogbe appears, it indicates that the person is aligned with their highest spiritual path. This sign speaks of success that comes through righteousness and patience. Obatalá, the owner of white cloth and peace, speaks strongly here. Ogbe indicates that the person's prayers will be answered and their good character will be rewarded. However, this sign also warns against laziness — even with good fortune, effort is required. Ogbe is associated with elder status, wisdom, and spiritual authority. The person may be called to leadership or spiritual service.`,
        ireOsogboNote: 'When Ire: Great success, clarity, spiritual elevation. When Osogbo: Missed opportunities due to pride or laziness.',
        rulingOrisha: 'Obatalá',
        ebbo: ['White cloth to Obatalá', 'Coconut', 'Shea butter'],
        warnings: ['Maintain good character', 'Do not drink alcohol', 'Respect elders']
    },
    {
        number: 9,
        name: 'Osá',
        yorubaName: 'Osá',
        meaning: 'Nine mouths open — The left hand, witchcraft, and feminine power.',
        proverb: 'Osá leshó: Witchcraft walks. Women hold power in this sign.',
        interpretation: `Osá is the sign of witchcraft and feminine power. It speaks of the Aje (the mothers, witches) and their influence in the world. When Osá appears, it indicates that feminine spiritual power is active in the person's life. This can be protective or destructive depending on the person\'s behavior toward women. Osá emphasizes the power of the left hand — the receiving hand, the witchcraft hand. The person may have natural psychic abilities that need to be developed or controlled. This sign warns against offending women, particularly mothers, as their curses are powerful in Osá. Offerings to the Aje may be required for protection and blessing.`,
        ireOsogboNote: 'When Ire: Strong intuition, protection from the mothers. When Osogbo: Witchcraft attacks, problems with women.',
        rulingOrisha: 'Oyá / Aje (the mothers)',
        ebbo: ['Offerings to the Aje', 'Palm oil', 'Purple cloth'],
        warnings: ['Respect all women', 'Do not eat from the ground', 'Control your tongue']
    },
    {
        number: 10,
        name: 'Ofun',
        yorubaName: 'Ofun / Ojuani',
        meaning: 'Ten mouths open — The mouth, speech, and the power of the word.',
        proverb: 'Ofun lenla: The mouth is powerful. Words create reality.',
        interpretation: `Ofun is the sign of the mouth and the power of speech. It speaks of how words create reality — blessings and curses both manifest through the mouth. When Ofun appears, it indicates that the person must be extremely careful with their speech. Gossip, lies, and negative speech will bring problems, while prayers and good words will manifest blessings. This sign can indicate that someone is speaking against the person or that the person is being harmed by their own words. Ofun emphasizes the need for eloquence and truth. Orunmila, the master of speech and divination, speaks strongly here. The person may have a calling to become a priest or to work with Ifá.`,
        ireOsogboNote: 'When Ire: Eloquence, successful prayers, good reputation. When Osogbo: Slander, gossip, problems caused by speech.',
        rulingOrisha: 'Orunmila',
        ebbo: ['Honey for the mouth', 'White kola nut', 'Cleansing of the mouth'],
        warnings: ['Speak truth', 'Avoid gossip', 'Do not eat certain foods']
    },
    {
        number: 11,
        name: 'Oworin',
        yorubaName: 'Oworin / Ojuani',
        meaning: 'Eleven mouths open — Death, resurrection, and transformation.',
        proverb: 'Oworin soró: Death speaks. Transformation is inevitable.',
        interpretation: `Oworin is the sign of death and transformation. It speaks of Ikú (death) and the transitions that must occur for new life to emerge. When Oworin appears, it indicates major endings that will lead to new beginnings. This is not always physical death — often it represents the death of old patterns, relationships, or situations. The person may need to "die" to an old way of being in order to be reborn. Oworin emphasizes the inevitability of change and the importance of preparing for transitions. Offerings to the ancestors and to Ikú may be necessary. This sign can indicate actual death when severely afflicted, but more commonly it points to spiritual transformation.`,
        ireOsogboNote: 'When Ire: Successful transformation, long life after change. When Osogbo: Actual death, severe illness, major losses.',
        rulingOrisha: 'Oyá (guardian of the cemetery)',
        ebbo: ['Offerings to the ancestors', 'White cloth', 'Ritual cleansing'],
        warnings: ['Respect death', 'Do not tempt fate', 'Take care of your health']
    },
    {
        number: 12,
        name: 'Ejila Shebora',
        yorubaName: 'Ejila Shebora',
        meaning: 'Twelve mouths open — Excess, great expansion, and the need for moderation.',
        proverb: 'Ejila fbora: Twelve is complete. Too much becomes dangerous.',
        interpretation: `Ejila Shebora is the sign of excess and completion. It speaks of the dangers of too much — too much food, too much drink, too much of anything. When Ejila appears, it indicates that the person is living beyond their means or overextending themselves in some way. This sign also represents completeness and the culmination of cycles. Ejila warns against gluttony, greed, and excess while encouraging the person to find balance. The sign is associated with powerful expansion in business and spiritual growth, but only if moderation is practiced. The person may have opportunities for great abundance but must learn to manage resources wisely.`,
        ireOsogboNote: 'When Ire: Abundance, successful completion of projects. When Osogbo: Excess leads to loss, health problems.',
        rulingOrisha: 'Obatalá / Olokun',
        ebbo: ['White cloth', 'Cool water', 'Moderation in all things'],
        warnings: ['Do not overeat or drink excessively', 'Avoid waste', 'Practice moderation']
    },
    {
        number: 13,
        name: 'Metanla',
        yorubaName: 'Metanla',
        meaning: 'Thirteen mouths open — High spiritual knowledge and powerful revelations.',
        proverb: 'Metanla: The elders have spoken. Deep wisdom is revealed.',
        interpretation: `Metanla (also known as Irete in some traditions) is a sign of deep spiritual knowledge and the revelations that come from the highest levels of understanding. When Metanla appears, it indicates that the person is receiving powerful spiritual messages and may be called to advanced spiritual work. This Odu carries profound weight and speaks of karmic debts that must be addressed. The person may need to undergo significant spiritual cleansing or initiation. Metanla connects to the most ancient wisdom and warns that knowledge without proper application brings consequences. This sign often appears when major life changes are necessary for spiritual growth.`,
        ireOsogboNote: 'When Ire: Spiritual elevation, profound wisdom, successful resolution of karmic debts. When Osogbo: Severe spiritual consequences, mandatory ebbo required.',
        rulingOrisha: 'Orunmila / Obatalá',
        ebbo: ['Major initiation work', 'Significant offerings', 'Deep spiritual cleansing'],
        warnings: ['Do not ignore spiritual calls', 'Take spiritual work seriously', 'Respect the elders']
    },
    {
        number: 14,
        name: 'Merinla',
        yorubaName: 'Merinla',
        meaning: 'Fourteen mouths open — The marketplace, commerce, and community exchange.',
        proverb: 'Merinla: The market is open. Exchange brings prosperity.',
        interpretation: `Merinla (also known by other names in different lineages such as Iká or Oturupon) represents the marketplace, commerce, and the dynamic exchange of energy in community. When Merinla appears, it speaks of business ventures, trade, and the flow of resources between people. This Odu emphasizes that prosperity comes through right relationship and fair exchange. The person may need to evaluate their business dealings or their contributions to community. Merinla can indicate that enemies are operating through commerce or that unfair transactions are causing spiritual imbalance. Proper conduct in the marketplace and generosity to those in need are emphasized.`,
        ireOsogboNote: 'When Ire: Business success, profitable trade, strong community connections. When Osogbo: Loss through commerce, betrayal by business associates.',
        rulingOrisha: 'Oshún / Elegua',
        ebbo: ['Marketplace offerings', 'Gifts to the needy', 'Business cleansing'],
        warnings: ['Be honest in trade', 'Pay your debts', 'Do not cheat others']
    },
    {
        number: 15,
        name: 'Marunla',
        yorubaName: 'Marunla',
        meaning: 'Fifteen mouths open — Bitter medicine, healing through difficulty, and transformation.',
        proverb: 'Marunla: Bitter medicine heals. What hurts may save you.',
        interpretation: `Marunla (also known as Ofun Kanran in some traditions) is the sign of bitter medicine and healing through difficulty. When Marunla appears, it indicates that the person must endure hardships that ultimately lead to transformation and healing. This Odu speaks of Oshá medicine — the bitter herbs that cure disease. The person may be resisting necessary treatments or avoiding difficult truths that would ultimately set them free. Marunla emphasizes that sometimes what seems harsh is actually loving, and what appears destructive may be saving your life. This sign often appears during health crises or when major life changes requiring sacrifice are necessary.`,
        ireOsogboNote: 'When Ire: Healing, successful medical treatment, transformation through difficulty. When Osogbo: Illness, resistance to healing, unnecessary suffering.',
        rulingOrisha: 'Ogún / Babalúayé',
        ebbo: ['Medicinal baths', 'Offerings for health', 'Acceptance of necessary hardship'],
        warnings: ['Take medicine as prescribed', 'Do not avoid necessary treatment', 'Accept what you cannot change']
    },
    {
        number: 16,
        name: 'Merindilogun',
        yorubaName: 'Merindilogun',
        meaning: 'Sixteen mouths open — The complete cycle, Alafia (peace), and total alignment.',
        proverb: 'Merindilogun: All mouths speak as one. Peace and total alignment.',
        interpretation: `Merindilogun (also called Alafia in some traditions) represents the complete cycle, total alignment, and peace. When this Odu appears, it indicates that the person has reached a point of completion and harmony with the Orishas. This is a sign of Alafia — peace, well-being, and total alignment with destiny. Merindilogun speaks of the full council of Orishas speaking together, indicating that all spiritual forces are aligned in the person's favor. This Odu can indicate successful completion of initiations, the fulfillment of long-term goals, and the achievement of spiritual and material stability. However, even in this fortunate sign, proper ebbo must be made to maintain the alignment.`,
        ireOsogboNote: 'When Ire: Complete peace, successful completion, total alignment with destiny. When Osogbo: Imbalance despite opportunities, failure to complete necessary work.',
        rulingOrisha: 'All Orishas / Obatalá',
        ebbo: ['Complete ceremony', 'Offerings to all principal Orishas', 'Thanksgiving rituals'],
        warnings: ['Maintain proper practice', 'Do not become complacent', 'Complete all promised work']
    }
];

const DiloggunStudyGuide: React.FC<DiloggunStudyGuideProps> = ({ setView, goHome }) => {
    const [selectedTab, setSelectedTab] = useState<'overview' | 'odus' | 'ire-osogbo' | 'procedure' | 'ebbo' | 'suyere'>('overview');
    const [selectedOdu, setSelectedOdu] = useState<OduDetail | null>(null);

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-950 via-amber-950/20 to-slate-950 p-4 md:p-6'>
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
                    <div className='flex items-center gap-3'>
                        <button
                            onClick={goHome}
                            className='p-2 rounded-full bg-amber-900/30 hover:bg-amber-800/40 transition-colors'
                        >
                            <ChevronLeft className='w-6 h-6 text-amber-400' />
                        </button>
                        <h1 className='text-3xl font-bold text-amber-100 font-cinzel'>Diloggun Study Guide</h1>
                    </div>
                    <div className='flex gap-2'>
                        <button
                            onClick={() => setView('diloggun')}
                            className='px-4 py-2 rounded-lg bg-amber-700/30 hover:bg-amber-600/40 text-amber-200 transition-colors text-sm'
                        >
                            Back to Oracle
                        </button>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className='flex flex-wrap gap-2 mb-6'>
                    {[
                        { id: 'overview', label: 'Overview', icon: BookOpen },
                        { id: 'odus', label: 'The 16 Odus', icon: Scroll },
                        { id: 'ire-osogbo', label: 'Ire & Osogbo', icon: Scale },
                        { id: 'procedure', label: 'Procedure', icon: Sparkles },
                        { id: 'ebbo', label: 'Ebbo', icon: Feather },
                        { id: 'suyere', label: 'Suyere', icon: Music },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setSelectedTab(tab.id as any)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${selectedTab === tab.id
                                    ? 'bg-amber-600 text-white'
                                    : 'bg-amber-900/20 text-amber-300 hover:bg-amber-800/30'
                                }`}
                        >
                            <tab.icon className='w-4 h-4' />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className='bg-slate-900/50 rounded-2xl p-6 border border-amber-700/20'>
                    {/* OVERVIEW SECTION */}
                    {selectedTab === 'overview' && (
                        <div className='space-y-6'>
                            <h2 className='text-2xl font-bold text-amber-200 flex items-center gap-2'>
                                <BookOpen className='w-6 h-6' />
                                Understanding Diloggun
                            </h2>

                            <div className='prose prose-invert max-w-none'>
                                <p className='text-amber-100/90 leading-relaxed'>
                                    The Diloggun is the sacred divination system of the Lukumí (Yoruba) people, brought from West Africa
                                    and preserved in Cuba and throughout the Americas. It uses 16 consecrated cowrie shells to communicate
                                    directly with the Orishas, allowing initiates to receive guidance, warnings, and prescriptions for spiritual work.
                                </p>

                                <div className='grid md:grid-cols-2 gap-6 my-8'>
                                    <div className='bg-amber-950/30 p-6 rounded-xl border border-amber-700/20'>
                                        <h3 className='text-xl font-semibold text-amber-200 mb-3'>The 16 Odus</h3>
                                        <p className='text-amber-100/80'>
                                            There are 16 primary Odus (signs) in Diloggun, each representing different energies,
                                            life situations, and Orisha influences. These range from Okana (one mouth open) to
                                            Merindilogun (16 mouths open).
                                        </p>
                                    </div>
                                    <div className='bg-amber-950/30 p-6 rounded-xl border border-amber-700/20'>
                                        <h3 className='text-xl font-semibold text-amber-200 mb-3'>Consultation Purpose</h3>
                                        <p className='text-amber-100/80'>
                                            Diloggun readings help determine the spiritual state of the individual, identify
                                            obstacles (osogbo), reveal blessings (ire), and prescribe specific offerings (ebbo)
                                            to maintain spiritual balance.
                                        </p>
                                    </div>
                                </div>

                                <h3 className='text-xl font-semibold text-amber-200 mt-8 mb-4'>Who Can Consult</h3>
                                <p className='text-amber-100/90 leading-relaxed'>
                                    Only initiated priests and priestesses (Santeros/as) who have received the shells (cauris)
                                    through proper initiation may consult the Diloggun. The shells are consecrated through
                                    elaborate ceremonies and carry Aše (spiritual power). Each initiate receives shells for
                                    specific Orishas based on their initiatory path.
                                </p>

                                <div className='bg-amber-900/20 border-l-4 border-amber-500 p-4 my-6'>
                                    <p className='text-amber-200/80 italic'>
                                        "The Diloggun is not fortune-telling — it is a conversation with the divine,
                                        a spiritual technology for navigating life's challenges with the guidance of the Orishas."
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ODUS SECTION */}
                    {selectedTab === 'odus' && (
                        <div className='space-y-6'>
                            <h2 className='text-2xl font-bold text-amber-200 flex items-center gap-2'>
                                <Scroll className='w-6 h-6' />
                                The 16 Sacred Odus
                            </h2>

                            {!selectedOdu ? (
                                <>
                                    <p className='text-amber-100/80 mb-6'>
                                        Select an Odu below to study its meaning, interpretation, associated Orisha, and ebbo.
                                        These are the 16 primary signs used in Diloggun divination.
                                    </p>
                                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                        {ODUS_CHAPTER_11.map((odu) => (
                                            <button
                                                key={odu.number}
                                                onClick={() => setSelectedOdu(odu)}
                                                className='text-left p-4 rounded-xl bg-amber-950/30 hover:bg-amber-900/40 border border-amber-700/20 transition-all group'
                                            >
                                                <div className='flex items-center justify-between mb-2'>
                                                    <span className='text-2xl font-bold text-amber-400'>#{odu.number}</span>
                                                    <span className='text-xs text-amber-300/60 px-2 py-1 bg-amber-950/50 rounded'>
                                                        {odu.number} up
                                                    </span>
                                                </div>
                                                <h3 className='text-lg font-semibold text-amber-200 group-hover:text-amber-100'>
                                                    {odu.name}
                                                </h3>
                                                <p className='text-sm text-amber-300/70'>{odu.yorubaName}</p>
                                                <p className='text-xs text-amber-100/50 mt-2'>Ruled by: {odu.rulingOrisha}</p>
                                            </button>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className='space-y-6'>
                                    <button
                                        onClick={() => setSelectedOdu(null)}
                                        className='flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors'
                                    >
                                        <ChevronLeft className='w-4 h-4' /> Back to all Odus
                                    </button>

                                    <div className='bg-gradient-to-br from-amber-950/40 to-slate-900/40 p-6 rounded-xl border border-amber-600/30'>
                                        <div className='flex items-start justify-between mb-4'>
                                            <div>
                                                <div className='text-4xl font-bold text-amber-400 mb-1'>#{selectedOdu.number}</div>
                                                <h3 className='text-2xl font-bold text-amber-100'>{selectedOdu.name}</h3>
                                                <p className='text-amber-300/70'>{selectedOdu.yorubaName}</p>
                                            </div>
                                            <div className='text-right'>
                                                <span className='text-sm text-amber-200/60'>Ruling Orisha</span>
                                                <p className='text-lg font-semibold text-amber-300'>{selectedOdu.rulingOrisha}</p>
                                            </div>
                                        </div>

                                        <div className='space-y-4'>
                                            <div>
                                                <h4 className='text-lg font-semibold text-amber-200 mb-2'>Meaning</h4>
                                                <p className='text-amber-100/80'>{selectedOdu.meaning}</p>
                                            </div>

                                            <div className='bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500'>
                                                <p className='text-amber-200/90 italic'>"{selectedOdu.proverb}"</p>
                                            </div>

                                            <div>
                                                <h4 className='text-lg font-semibold text-amber-200 mb-2'>Interpretation</h4>
                                                <p className='text-amber-100/80 leading-relaxed'>{selectedOdu.interpretation}</p>
                                            </div>

                                            <div className='bg-emerald-950/30 p-4 rounded-lg'>
                                                <h4 className='text-lg font-semibold text-emerald-300 mb-2'>Ire & Osogbo</h4>
                                                <p className='text-emerald-100/80'>{selectedOdu.ireOsogboNote}</p>
                                            </div>

                                            <div>
                                                <h4 className='text-lg font-semibold text-amber-200 mb-2'>Ebbo (Offerings)</h4>
                                                <ul className='list-disc list-inside text-amber-100/80 space-y-1'>
                                                    {selectedOdu.ebbo.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className='bg-red-950/20 p-4 rounded-lg border border-red-700/30'>
                                                <h4 className='text-lg font-semibold text-red-300 mb-2 flex items-center gap-2'>
                                                    <AlertTriangle className='w-5 h-5' />
                                                    Warnings
                                                </h4>
                                                <ul className='list-disc list-inside text-red-100/70 space-y-1'>
                                                    {selectedOdu.warnings.map((warning, i) => (
                                                        <li key={i}>{warning}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* IRE & OSOGBO SECTION */}
                    {selectedTab === 'ire-osogbo' && (
                        <div className='space-y-6'>
                            <h2 className='text-2xl font-bold text-amber-200 flex items-center gap-2'>
                                <Scale className='w-6 h-6' />
                                Understanding Ire & Osogbo
                            </h2>

                            <div className='grid md:grid-cols-2 gap-6'>
                                <div className='bg-emerald-950/30 p-6 rounded-xl border border-emerald-700/20'>
                                    <h3 className='text-xl font-semibold text-emerald-300 mb-4 flex items-center gap-2'>
                                        <Star className='w-5 h-5' />
                                        Ire (Blessings)
                                    </h3>
                                    <p className='text-emerald-100/80 mb-4'>
                                        Ire represents all forms of blessings, good fortune, and positive outcomes. When Ire
                                        is indicated in a reading, it means the Orishas are bringing favorable conditions
                                        and support.
                                    </p>
                                    <h4 className='font-semibold text-emerald-200 mb-2'>Types of Ire:</h4>
                                    <ul className='space-y-2 text-emerald-100/70'>
                                        <li>• <strong>Ire Arikú Bara Bara</strong> — Ire with long life and peace</li>
                                        <li>• <strong>Ire Omo</strong> — Blessings of children/fertility</li>
                                        <li>• <strong>Ire Ayo</strong> — Blessings of happiness/joy</li>
                                        <li>• <strong>Ire Owo</strong> — Blessings of money/wealth</li>
                                        <li>• <strong>Ire Aso</strong> — Blessings of long life</li>
                                        <li>• <strong>Ire Olóta</strong> — Victory over enemies</li>
                                        <li>• <strong>Ire Aláfia</strong> — Blessings of peace and well-being</li>
                                    </ul>
                                </div>

                                <div className='bg-red-950/30 p-6 rounded-xl border border-red-700/20'>
                                    <h3 className='text-xl font-semibold text-red-300 mb-4 flex items-center gap-2'>
                                        <AlertTriangle className='w-5 h-5' />
                                        Osogbo (Obstacles)
                                    </h3>
                                    <p className='text-red-100/80 mb-4'>
                                        Osogbo represents obstacles, difficulties, and negative influences that must be addressed.
                                        When Osogbo appears, ebbo (offerings) are typically required to remove the difficulty.
                                    </p>
                                    <h4 className='font-semibold text-red-200 mb-2'>Types of Osogbo:</h4>
                                    <ul className='space-y-2 text-red-100/70'>
                                        <li>• <strong>Ikú</strong> — Death (most serious)</li>
                                        <li>• <strong>Arun</strong> — Disease/illness</li>
                                        <li>• <strong>Ofo</strong> — Loss</li>
                                        <li>• <strong>Arayé</strong> — Gossip/enemies</li>
                                        <li>• <strong>Eyo</strong> — Calamity/tragedy</li>
                                        <li>• <strong>Ona</strong> — Accidents</li>
                                        <li>• <strong>Fito</strong> — Legal problems</li>
                                        <li>• <strong>Okana Bi</strong> — Self-inflicted problems</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='bg-amber-900/20 p-6 rounded-xl'>
                                <h3 className='text-xl font-semibold text-amber-200 mb-4'>Determining Ire vs Osogbo</h3>
                                <p className='text-amber-100/80 mb-4'>
                                    During a Diloggun consultation, the reading determines whether the person comes with
                                    Ire (blessings) or Osogbo (obstacles). This is determined through:
                                </p>
                                <ul className='space-y-2 text-amber-100/70'>
                                    <li>• <strong>The Odu</strong> that falls — some Odus are inherently more challenging</li>
                                    <li>• <strong>The Ibo</strong> (hand) that the shells indicate</li>
                                    <li>• <strong>Additional throws</strong> to confirm the nature of the reading</li>
                                    <li>• <strong>The accompanying signs</strong> and their orientations</li>
                                </ul>
                                <p className='text-amber-100/80 mt-4'>
                                    Even when Osogbo is indicated, proper ebbo (offerings) can transform the situation
                                    and bring about positive outcomes. The Diloggun always provides a path forward.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* PROCEDURE SECTION */}
                    {selectedTab === 'procedure' && (
                        <div className='space-y-6'>
                            <h2 className='text-2xl font-bold text-amber-200 flex items-center gap-2'>
                                <Sparkles className='w-6 h-6' />
                                Consultation Procedure
                            </h2>

                            <div className='space-y-6'>
                                <div className='bg-amber-950/30 p-6 rounded-xl border border-amber-700/20'>
                                    <h3 className='text-xl font-semibold text-amber-200 mb-3'>1. Opening the Reading</h3>
                                    <p className='text-amber-100/80'>
                                        The consultation begins with prayers to Elegua to open the way, followed by prayers
                                        to the ancestors and the Orisha whose shells are being consulted. The client gives
                                        their name and states their question or concern.
                                    </p>
                                </div>

                                <div className='bg-amber-950/30 p-6 rounded-xl border border-amber-700/20'>
                                    <h3 className='text-xl font-semibold text-amber-200 mb-3'>2. The First Throw</h3>
                                    <p className='text-amber-100/80'>
                                        The diviner (Italero) holds the 16 shells and drops them. The number of shells that
                                        fall "mouth up" (cara) determines the primary Odu. Each Odu corresponds to a specific
                                        combination: one mouth up = Okana, two = Eji Oko, and so on up to all 16 = Merindilogun.
                                    </p>
                                </div>

                                <div className='bg-amber-950/30 p-6 rounded-xl border border-amber-700/20'>
                                    <h3 className='text-xl font-semibold text-amber-200 mb-3'>3. Determining the Ibo (Hand)</h3>
                                    <p className='text-amber-100/80'>
                                        After the primary Odu is determined, the diviner must find the "hand" or orientation
                                        — whether the reading comes with Ire (blessings) or Osogbo (difficulties). This is
                                        done through additional throws and specific procedures that vary by house (casa) tradition.
                                    </p>
                                </div>

                                <div className='bg-amber-950/30 p-6 rounded-xl border border-amber-700/20'>
                                    <h3 className='text-xl font-semibold text-amber-200 mb-3'>4. The Oracle Speaks</h3>
                                    <p className='text-amber-100/80'>
                                        The diviner recites the traditional opening for the Odu that fell, then interprets
                                        the message based on the specific question, the orientation (Ire/Osogbo), and any
                                        accompanying signs (acompáñame). Patakís (sacred stories) associated with the Odu
                                        are often shared as teaching tools.
                                    </p>
                                </div>

                                <div className='bg-amber-950/30 p-6 rounded-xl border border-amber-700/20'>
                                    <h3 className='text-xl font-semibold text-amber-200 mb-3'>5. Ebbo Prescription</h3>
                                    <p className='text-amber-100/80'>
                                        If Osogbo is indicated, or to maintain Ire, the diviner prescribes ebbo — specific
                                        offerings or spiritual work that must be done. The client is given clear instructions
                                        on what to offer, to which Orisha, and any other required actions.
                                    </p>
                                </div>

                                <div className='bg-amber-900/20 p-4 rounded-xl border border-amber-700/30'>
                                    <p className='text-amber-200/80 text-sm'>
                                        <strong>Note:</strong> This is a simplified overview for study purposes. Actual Diloggun
                                        consultation requires years of training under a qualified elder. The specific procedures,
                                        prayers, and interpretations vary between lineages (ramilletes).
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* EBBO SECTION */}
                    {selectedTab === 'ebbo' && (
                        <div className='space-y-6'>
                            <h2 className='text-2xl font-bold text-amber-200 flex items-center gap-2'>
                                <Feather className='w-6 h-6' />
                                Understanding Ebbo
                            </h2>

                            <p className='text-amber-100/80'>
                                Ebbo refers to offerings, sacrifices, or spiritual prescriptions given during a Diloggun
                                reading to resolve Osogbo (difficulties) or to maintain and strengthen Ire (blessings).
                                Ebbo is the way humans restore balance and reciprocate with the Orishas and the spirits.
                            </p>

                            <div className='grid md:grid-cols-2 gap-6'>
                                <div className='bg-amber-950/30 p-6 rounded-xl border border-amber-700/20'>
                                    <h3 className='text-xl font-semibold text-amber-200 mb-4'>Types of Ebbo</h3>
                                    <ul className='space-y-3 text-amber-100/80'>
                                        <li>
                                            <strong className='text-amber-300'>Adimú</strong> — Food offerings (fruits, sweets, cooked foods)
                                        </li>
                                        <li>
                                            <strong className='text-amber-300'>Ebbo Eyo</strong> — Cleansing or purifying offerings
                                        </li>
                                        <li>
                                            <strong className='text-amber-300'>Ebbo Sóloro</strong> — Offerings requiring animal sacrifice (performed by qualified priests)
                                        </li>
                                        <li>
                                            <strong className='text-amber-300'>Ebbo Kere</strong> — Simple, smaller offerings
                                        </li>
                                        <li>
                                            <strong className='text-amber-300'>Addimú</strong> — Propitiatory offerings to maintain goodwill
                                        </li>
                                        <li>
                                            <strong className='text-amber-300'>Paraldó</strong> — Cleansing ceremonies for negative energy
                                        </li>
                                    </ul>
                                </div>

                                <div className='bg-amber-950/30 p-6 rounded-xl border border-amber-700/20'>
                                    <h3 className='text-xl font-semibold text-amber-200 mb-4'>Common Ebbo Items</h3>
                                    <ul className='space-y-3 text-amber-100/80'>
                                        <li>• <strong>Coconuts (Obi)</strong> — For Elegua, general offerings</li>
                                        <li>• <strong>Palm Oil (Epo)</strong> — For Ogún, Oya, removing obstacles</li>
                                        <li>• <strong>Honey (Oyin)</strong> — For Oshún, attracting sweetness</li>
                                        <li>• <strong>Water</strong> — For Yemayá, Oshún, cooling heated situations</li>
                                        <li>• <strong>Cool Water (Omi Tutu)</strong> — For Obatalá, peace and clarity</li>
                                        <li>• <strong>White Cloth</strong> — For Obatalá, purity and elevation</li>
                                        <li>• <strong>Specific foods</strong> — According to each Orisha's preferences</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='bg-amber-900/20 p-6 rounded-xl border border-amber-600/30'>
                                <h3 className='text-xl font-semibold text-amber-200 mb-4 flex items-center gap-2'>
                                    <HelpCircle className='w-5 h-5' />
                                    Important Notes on Ebbo
                                </h3>
                                <ul className='space-y-2 text-amber-100/80'>
                                    <li>• Ebbo must be performed as prescribed — modifications can render it ineffective</li>
                                    <li>• Animal sacrifice (Ebbo Sóloro) is only performed by fully qualified priests (Oluwos, Babalawos)</li>
                                    <li>• The purpose of sacrifice is not "appeasement" but reciprocity and energy exchange</li>
                                    <li>• Failure to complete prescribed ebbo can worsen the original Osogbo</li>
                                    <li>• Some ebbo is done immediately; other times it must be taken to specific locations (river, crossroads, etc.)</li>
                                    <li>• Ebbo is medicine for the soul — it restores Aše (spiritual power) and balance</li>
                                </ul>
                            </div>

                            <div className='bg-emerald-950/20 p-6 rounded-xl border border-emerald-700/30'>
                                <h3 className='text-xl font-semibold text-emerald-300 mb-3'>Ebbo as Medicine</h3>
                                <p className='text-emerald-100/80'>
                                    In the Lukumí tradition, ebbo is understood as spiritual medicine. Just as physical
                                    medicine addresses physical illness, ebbo addresses spiritual disharmony. The Orishas,
                                    through the Diloggun, diagnose the spiritual condition and prescribe the appropriate
                                    remedy. The effectiveness of ebbo comes from the Aše (sacred power) invested in the
                                    offering and the faith and compliance of the person receiving the reading.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* SUYERE SECTION */}
                    {selectedTab === 'suyere' && (
                        <div className='space-y-6'>
                            <h2 className='text-2xl font-bold text-amber-200 flex items-center gap-2'>
                                <Music className='w-6 h-6' />
                                Suyere — Ceremonial Chants
                            </h2>

                            <div className='prose prose-invert max-w-none'>
                                <p className='text-amber-100/90 leading-relaxed'>
                                    Suyeres are ceremonial chants and songs used in Diloggun divination and ritual.
                                    They are not merely artistic expressions but functional spiritual technology — specific
                                    vibrations that call the Orishas, open the channels of communication, and accompany
                                    offerings. Each Odu has associated suyeres, and skilled diviners know which songs
                                    to sing based on the sign that falls.
                                </p>

                                <div className='grid md:grid-cols-2 gap-6 my-8'>
                                    <div className='bg-amber-950/30 p-6 rounded-xl border border-amber-700/20'>
                                        <h3 className='text-xl font-semibold text-amber-200 mb-3'>Function of Suyeres</h3>
                                        <ul className='text-amber-100/80 space-y-2'>
                                            <li>• Invoke and welcome the Orishas</li>
                                            <li>• Open and close divination sessions</li>
                                            <li>• Accompany ebbo (offerings)</li>
                                            <li>• Mark ritual transitions</li>
                                            <li>• Honor specific Odus and ancestors</li>
                                            <li>• Create sacred space through sound</li>
                                        </ul>
                                    </div>

                                    <div className='bg-amber-950/30 p-6 rounded-xl border border-amber-700/20'>
                                        <h3 className='text-xl font-semibold text-amber-200 mb-3'>Types of Ceremonial Songs</h3>
                                        <ul className='text-amber-100/80 space-y-2'>
                                            <li>• <strong>Suyeres</strong> — Chants for Orishas and Odus</li>
                                            <li>• <strong>Oriki</strong> — Praise poems and oration</li>
                                            <li>• <strong>Iyesá</strong> — Rhythm-specific songs</li>
                                            <li>• <strong>Iyawó songs</strong> — For initiates</li>
                                            <li>• <strong>Matanza songs</strong> — During sacrifice</li>
                                            <li>• <strong>Ituto songs</strong> — Funerary chants</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className='text-xl font-semibold text-amber-200 mt-8 mb-4'>Suyeres in Divination</h3>
                                <p className='text-amber-100/90 leading-relaxed'>
                                    When a Diloggun consultation begins, the diviner typically opens with specific suyeres
                                    to call Elegua and the Orisha whose shells are being read. As the reading progresses,
                                    certain Odus may call for specific songs — for example, when Oché falls, songs for Oshún
                                    may be sung; when Ogunda appears, Ogún's chants may be appropriate.
                                </p>

                                <div className='bg-amber-900/20 border-l-4 border-amber-500 p-4 my-6'>
                                    <p className='text-amber-200/80 italic'>
                                        "Suyeres are the voice of the Orishas made audible. Through these sacred songs,
                                        the invisible becomes present, the distant draws near, and the divine speaks."
                                    </p>
                                </div>

                                <h3 className='text-xl font-semibold text-amber-200 mb-4'>Oral Tradition</h3>
                                <p className='text-amber-100/90 leading-relaxed'>
                                    Suyeres are transmitted orally within spiritual lineages. The specific melodies,
                                    rhythms, and even lyrics can vary between houses (casa/tradition), though the
                                    essential structure and spiritual function remain constant. Learning suyeres is
                                    part of the training of every diviner, and knowledge of the appropriate songs
                                    for each Odu and situation is considered essential expertise.
                                </p>

                                <div className='bg-purple-950/20 p-6 rounded-xl border border-purple-700/30 mt-6'>
                                    <h3 className='text-xl font-semibold text-purple-300 mb-3 flex items-center gap-2'>
                                        <BookOpen className='w-5 h-5' />
                                        Suyere vs Oriki
                                    </h3>
                                    <p className='text-purple-100/80 mb-3'>
                                        While often used together, there is a distinction between suyeres and oriki:
                                    </p>
                                    <ul className='space-y-2 text-purple-100/70'>
                                        <li>
                                            <strong className='text-purple-300'>Suyeres</strong> are typically shorter, more melodic chants
                                            used during specific ritual actions. They often involve call-and-response patterns and are
                                            deeply rhythmic.
                                        </li>
                                        <li>
                                            <strong className='text-purple-300'>Oriki</strong> are longer praise poems that recount the
                                            attributes, deeds, and qualities of the Orishas. They are more narrative and can be recited
                                            as well as sung.
                                        </li>
                                    </ul>
                                    <p className='text-purple-100/80 mt-3'>
                                        Both serve to invoke and honor the Orishas, but suyeres are more commonly associated
                                        with the procedural aspects of Diloggun divination.
                                    </p>
                                </div>

                                <h3 className='text-xl font-semibold text-amber-200 mt-8 mb-4'>Learning Suyeres</h3>
                                <p className='text-amber-100/90 leading-relaxed'>
                                    For those studying Diloggun, learning suyeres is an ongoing process that happens through:
                                </p>
                                <ul className='text-amber-100/80 space-y-2 mb-6'>
                                    <li>• Direct transmission from one's godparent (padrino/madrina)</li>
                                    <li>• Participation in ceremonies and toques de santo</li>
                                    <li>• Study recordings made by elders for teaching purposes</li>
                                    <li>• Attending drumming ceremonies where songs are sung repeatedly</li>
                                    <li>• Working with the bataá drummers who know the traditional sequences</li>
                                </ul>

                                <p className='text-amber-100/90 leading-relaxed'>
                                    It is important to note that suyeres are considered sacred and are not typically
                                    written down in traditional practice. The oral transmission itself is part of the
                                    spiritual technology — the relationship between teacher and student, the context of
                                    the ceremony, and the lived experience of the tradition all contribute to the power
                                    and proper use of these sacred songs.
                                </p>
                            </div>

                            <div className='mt-8 p-4 bg-amber-950/20 border border-amber-700/30 rounded-xl'>
                                <p className='text-amber-200/80 text-sm'>
                                    <strong>Note:</strong> Suyeres are traditionally learned through oral transmission within
                                    one's lineage. The specific words and melodies may vary between houses.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DiloggunStudyGuide;
