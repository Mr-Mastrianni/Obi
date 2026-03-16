/**
 * ORISHA LITURGICAL CALENDAR
 * 
 * Based on Lukumí (Santería) traditions as practiced in Cuba and the diaspora.
 * Feast days correspond to Catholic saint days due to religious syncretism.
 * 
 * ⚠️ IMPORTANT NOTES:
 * - Feast days correspond to Catholic saint days due to syncretism
 * - Variations exist between lineages (ramas) and geographic regions
 * - Some Orishas have multiple feast days depending on tradition
 * - The Ojo Ose (days of the week) vary somewhat by lineage
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * RESEARCH SOURCES & VERIFICATION
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Catholic Liturgical Sources (Authoritative):
 * - Vatican Official Website (state.va) - St. Barbara (Dec 4)
 * - Catholic Culture Liturgical Calendar (catholicculture.org)
 * - USCCB Liturgical Calendar (usccb.org)
 * - Catholic.org Saints Database
 * - Britannica Encyclopedia - Religious feast days
 * - Exaudi.org - Our Lady of Mercy (Sept 24)
 * 
 * Academic & Religious Studies:
 * - Encyclopedia.com - Santería/Lukumí traditions
 * - Havana Times - Cuban religious observances
 * - University of Michigan studies on Cuban religious traditions
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * KEY FEAST DAYS VERIFIED
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * DECEMBER 4  - Saint Barbara → Shango (Chango)
 *   Source: Vatican.va, Catholic.org, Britannica
 *   Status: Universal Catholic feast
 * 
 * DECEMBER 17 - Saint Lazarus → Babalú-Ayé
 *   Source: Cuban tradition (Note: Modern Catholic calendar moved to July 29)
 *   Status: Traditional Cuban date maintained in Lukumí practice
 * 
 * SEPTEMBER 7  - Our Lady of Regla → Yemayá
 *   Source: Catholic.org, Cuban religious tradition
 *   Status: Patroness of Regla, Cuba
 * 
 * SEPTEMBER 8  - Our Lady of Charity → Oshún
 *   Source: Vatican (Pope Benedict XV, 1916), Catholic.org
 *   Status: Patroness of Cuba
 * 
 * SEPTEMBER 24 - Our Lady of Mercy → Obatalá
 *   Source: Catholic.org, Exaudi.org (extended to whole Church 1696)
 *   Status: Universal Catholic feast
 * 
 * JUNE 13 - Saint Anthony of Padua → Eleguá
 *   Source: Catholic.org, Franciscan tradition
 *   Status: Memorial in Catholic calendar
 * 
 * JUNE 29 - Saints Peter and Paul → Ogún
 *   Source: Catholic Culture, USCCB, Vatican (Solemnity)
 *   Status: Holy day of obligation in some countries
 * 
 * JUNE 6 - Saint Norbert → Oshosí
 *   Source: Catholic Culture, Catholic.org
 *   Status: Optional Memorial
 * 
 * OCTOBER 4 - Saint Francis of Assisi → Orúnmila
 *   Source: Britannica, Catholic.org
 *   Status: Feast
 * 
 * JULY 25 - Saint Christopher → Agayú
 *   Source: Britannica, Catholic.org
 *   Note: Removed from General Roman Calendar 1969, still celebrated
 * 
 * OCTOBER 24 - Archangel Raphael → Inle/Erinle
 *   Source: Britannica, Catholic.org, USCCB
 *   Status: Universal feast
 * 
 * FEBRUARY 2 - Our Lady of Candelaria → Oyá (with St. Teresa)
 *   Source: Catholic tradition, Cuban observance
 * 
 * JULY 26 - Saint Anne → Naná Burukú
 *   Source: Catholic.org, USCCB (Brazilian Candomblé syncretism)
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * CORRECTIONS FROM ORIGINAL BOP DOCUMENT
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * 1. Ogún: Changed from January 29 to June 29 (primary feast)
 *    - Catholic Church celebrates St. Peter on June 29 (Solemnity)
 *    - January 29 retained as secondary/alternate date
 * 
 * 2. Saint Lazarus: December 17 is the TRADITIONAL CUBAN date
 *    - Modern Catholic calendar celebrates on July 29
 *    - Lukumí tradition maintains December 17
 *    - Roman Martyrology historically placed Lazarus here
 * 
 * 3. Oshosí: Changed from June 16 to June 6
 *    - Saint Norbert's feast is June 6 (Optional Memorial)
 * 
 * 4. Obatalá: Standardized to September 24
 *    - Our Lady of Mercy feast extended to whole Church 1696
 *    - Some lineages observe September 12
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Primary Sources: "The Osha" by Julio Garcia Cortez, oral tradition, 
 * Cuban religious practice, Wheel of the Year religious calendar,
 * Vatican liturgical documents, USCCB calendar
 * 
 * Last Updated: March 2026 - Feast days verified against authoritative 
 * Catholic liturgical sources
 */

export interface FeastDay {
    month: number; // 0-11 (JavaScript Date format)
    day: number;
    orishaId: string;
    orishaName: string;
    saintName: string;
    description: string;
    significance: 'major' | 'minor';
    traditionalObservance?: string;
    alternateDates?: { month: number; day: number; tradition: string }[];
}

export interface OjoOse {
    dayOfWeek: number; // 0 = Sunday, 1 = Monday, etc.
    orishaIds: string[];
    description: string;
}

// ============================================================================
// FEAST DAYS (Cumpleaños de los Orishas)
// ============================================================================

export const ORISHA_FEAST_DAYS: FeastDay[] = [
    // JANUARY
    // Note: Saint Peter's universal Catholic feast is June 29 (Solemnity of Sts. Peter and Paul)
    // January 29 is observed in some Lukumí lineages as a secondary feast for Ogun
    {
        month: 0,
        day: 29,
        orishaId: 'ogun',
        orishaName: 'Ogun',
        saintName: 'Saint Peter (Secondary observance)',
        description: 'Secondary feast of Ogun observed in some lineages (primary feast is June 29)',
        significance: 'minor',
        traditionalObservance: 'Some lineages observe this date rather than June 29. Offerings of roasted yams, green plantains, and rum. Work tools may be blessed.',
        alternateDates: [
            { month: 5, day: 29, tradition: 'Universal Catholic feast of St. Peter (June 29)' }
        ]
    },

    // FEBRUARY
    {
        month: 1,
        day: 2,
        orishaId: 'oya',
        orishaName: 'Oya',
        saintName: 'Our Lady of Candelaria / Saint Teresa',
        description: 'Major feast of Oya, Orisha of winds, transformation, and the cemetery',
        significance: 'major',
        traditionalObservance: 'Ceremonies at cemetery gates. Offerings of eggplant, black-eyed peas, and dark chocolate.'
    },

    // MARCH
    {
        month: 2,
        day: 19,
        orishaId: 'ochagrian',
        orishaName: 'Ochagrian/Ogun',
        saintName: 'Saint Joseph',
        description: 'Associated with agricultural aspects of Ogun',
        significance: 'minor',
        traditionalObservance: 'Linked to farming and harvest preparations.'
    },

    // MAY
    {
        month: 4,
        day: 5,
        orishaId: 'aquema',
        orishaName: 'Aquema',
        saintName: 'Our Lady of Immaculate Conception',
        description: 'Associated with purity and spiritual cleansing',
        significance: 'minor'
    },
    {
        month: 4,
        day: 15,
        orishaId: 'orichaoko',
        orishaName: 'Orichaoko',
        saintName: 'Saint Isidore',
        description: 'Orisha of agriculture and farming',
        significance: 'minor',
        traditionalObservance: 'Blessing of crops and farming tools.'
    },

    // JUNE
    {
        month: 5,
        day: 6,
        orishaId: 'oshosi',
        orishaName: 'Oshosi',
        saintName: 'Saint Norbert',
        description: 'Feast of Oshosi, the divine hunter and Orisha of justice',
        significance: 'minor',
        traditionalObservance: 'Offerings focused on hunting and justice. Legal matters may be addressed.',
        alternateDates: [
            { month: 5, day: 16, tradition: 'Alternate date in some lineages' }
        ]
    },
    {
        month: 5,
        day: 13,
        orishaId: 'eleggua',
        orishaName: 'Elegua/Eshu',
        saintName: 'Saint Anthony of Padua',
        description: 'Feast of Elegua, the divine messenger and opener of paths',
        significance: 'major',
        traditionalObservance: 'Offerings of coconut, candy, rum, and cigars placed at crossroads. Children often receive special blessings.'
    },
    // June 29: Solemnity of Saints Peter and Paul - Universal Catholic feast
    // Confirmed by: Catholic Culture, USCCB, Vatican liturgical calendar
    {
        month: 5,
        day: 29,
        orishaId: 'ogun',
        orishaName: 'Ogun',
        saintName: 'Saint Peter (Solemnity of Sts. Peter and Paul)',
        description: 'Primary feast of Ogun, warrior Orisha of iron and labor',
        significance: 'major',
        traditionalObservance: 'Primary feast day. Offerings of roasted yams, green plantains, and rum. Work tools may be blessed. June 29 is the universal Catholic solemnity honoring St. Peter, the apostle.',
        alternateDates: [
            { month: 0, day: 29, tradition: 'Some lineages observe January 29 instead' }
        ]
    },

    // JULY
    // July 25: Saint Christopher - Western feast day
    // Removed from General Roman Calendar in 1969 but still celebrated
    // Confirmed by: Britannica, Catholic.org, Catholic Saints
    {
        month: 6,
        day: 25,
        orishaId: 'argayu',
        orishaName: 'Agayu/Argayu Sola',
        saintName: 'Saint Christopher',
        description: 'Feast of Agayu, the Orisha of volcanoes and earth\'s core',
        significance: 'minor',
        traditionalObservance: 'Offerings related to earth and fire. Associated with grounding and stability. July 25 is the traditional Western feast of St. Christopher, though removed from the universal Catholic calendar in 1969 due to historical uncertainty.'
    },
    // July 26: Saint Anne - Mother of Mary
    // Confirmed by: Catholic.org, USCCB liturgical calendar
    // Note: Nana Buruku is syncretized with St. Anne in Brazilian Candomblé
    {
        month: 6,
        day: 26,
        orishaId: 'nanaburuku',
        orishaName: 'Nana Buruku',
        saintName: 'Saint Anne',
        description: 'Feast of Nana Buruku, the ancient mother, grandmother of the Orishas',
        significance: 'minor',
        traditionalObservance: 'Offerings at swamps and river mouths. Purple and white decorations. July 26 is the feast of St. Anne, mother of the Virgin Mary.',
        alternateDates: [
            { month: 10, day: 3, tradition: 'Some lineages (Saint Martin of Porres)' }
        ]
    },

    // AUGUST
    {
        month: 7,
        day: 11,
        orishaId: 'yewa',
        orishaName: 'Yewa',
        saintName: 'Saint Clare of Assisi',
        description: 'Feast of Yewa, Orisha of the cemetery and purity',
        significance: 'minor',
        traditionalObservance: 'Observances in cemeteries. Offerings of pink flowers and yams.'
    },

    // SEPTEMBER - THE GREAT MONTH
    // September 7: Our Lady of Regla - Patroness of Regla, Cuba
    // Confirmed by: Catholic.org, Cuban religious tradition
    {
        month: 8,
        day: 7,
        orishaId: 'yemaya',
        orishaName: 'Yemaya',
        saintName: 'Our Lady of Regla (Virgen de Regla)',
        description: 'Major feast of Yemaya, mother of all living things, Orisha of the ocean',
        significance: 'major',
        traditionalObservance: 'Elaborate ceremonies at the sea. Thousands gather at Regla, Cuba. Offerings of watermelon, molasses, and flowers cast into the ocean. September 7 is the feast of Our Lady of Regla, whose shrine in Regla, Cuba is central to Yemaya devotion.'
    },
    // September 8: Our Lady of Charity - Patroness of Cuba
    // Declared patroness by Pope Benedict XV in 1916
    // Confirmed by: Vatican News, Catholic.org
    {
        month: 8,
        day: 8,
        orishaId: 'oshun',
        orishaName: 'Oshun',
        saintName: 'Our Lady of Charity (Virgen de la Caridad del Cobre)',
        description: 'Major feast of Oshun, Orisha of love, rivers, and sweetness. Patroness of Cuba.',
        significance: 'major',
        traditionalObservance: 'National holiday in Cuba. Offerings of honey, pumpkins, oranges, and cinnamon. Celebrations at rivers. September 8 is the feast of Our Lady of Charity, declared patroness of Cuba by Pope Benedict XV in 1916.'
    },
    // September 24: Our Lady of Mercy - Extended to whole Church 1696 by Pope Innocent XII
    // Confirmed by: Catholic.org, Exaudi.org, liturgical calendars
    {
        month: 8,
        day: 24,
        orishaId: 'obatala',
        orishaName: 'Obatala',
        saintName: 'Our Lady of Mercy (Virgen de la Merced)',
        description: 'Feast of Obatala, eldest Orisha, creator of human bodies, Orisha of purity',
        significance: 'major',
        traditionalObservance: 'White offerings only. Special emphasis on purity and clarity. Head cleansing ceremonies common. September 24 is the feast of Our Lady of Mercy, extended to the whole Church by Pope Innocent XII in 1696.',
        alternateDates: [
            { month: 8, day: 12, tradition: 'Some Cuban lineages observe September 12' }
        ]
    },
    {
        month: 8,
        day: 26,
        orishaId: 'ibeyi',
        orishaName: 'Los Ibeyi',
        saintName: 'Saints Cosmas and Damian',
        description: 'Feast of the Ibeyi, the divine twins, children of Shango and Oshun',
        significance: 'minor',
        traditionalObservance: 'Celebrations for children. Offerings of toys, candy, and round fruits.'
    },
    {
        month: 8,
        day: 29,
        orishaId: 'eleggua',
        orishaName: 'Elegua',
        saintName: 'Saint Michael (San Miguel)',
        description: 'Alternative feast for Elegua in some traditions',
        significance: 'minor'
    },

    // OCTOBER
    // October 4: Saint Francis of Assisi - Universal Catholic feast
    // Confirmed by: Britannica, Catholic.org, Franciscan tradition
    {
        month: 9,
        day: 4,
        orishaId: 'orunmila',
        orishaName: 'Orunmila',
        saintName: 'Saint Francis of Assisi',
        description: 'Feast of Orunmila, the witness to creation, Orisha of wisdom and divination',
        significance: 'major',
        traditionalObservance: 'Special Ifá consultations. Offerings to the oracle. Wisdom-seeking ceremonies. October 4 commemorates St. Francis of Assisi (c. 1181-1226), founder of the Franciscan order.'
    },
    {
        month: 9,
        day: 7,
        orishaId: 'dada',
        orishaName: 'Dada',
        saintName: 'Our Lady of the Rosary',
        description: 'Feast of Dada, associated with royalty and childhood protection',
        significance: 'minor'
    },
    // October 24: Archangel Raphael - Universal Catholic feast
    // Confirmed by: Britannica, Catholic.org, USCCB
    {
        month: 9,
        day: 24,
        orishaId: 'inle',
        orishaName: 'Inle/Erinle',
        saintName: 'Archangel Raphael',
        description: 'Feast of Inle, the divine healer and fisherman',
        significance: 'minor',
        traditionalObservance: 'Healing ceremonies. Offerings focused on health and herbs. Number 24 is sacred to Inle. October 24 is the feast of St. Raphael the Archangel, one of seven archangels who stand before God.'
    },

    // NOVEMBER
    {
        month: 10,
        day: 3,
        orishaId: 'nanaburuku',
        orishaName: 'Nana Buruku',
        saintName: 'Saint Martin of Porres',
        description: 'Feast of Nana Buruku, the ancient mother, grandmother of the Orishas',
        significance: 'minor',
        traditionalObservance: 'Offerings at swamps and river mouths. Purple and white decorations.',
        alternateDates: [
            { month: 6, day: 26, tradition: 'Brazilian Candomblé (Saint Anne)' }
        ]
    },
    {
        month: 10,
        day: 25,
        orishaId: 'oya',
        orishaName: 'Oya',
        saintName: 'Saint Catherine (Santa Catalina)',
        description: 'Alternative feast day for Oya in some traditions',
        significance: 'minor'
    },

    // DECEMBER
    // December 4: Saint Barbara - Universal Catholic feast
    // Confirmed by: State.va (Vatican), Britannica, Catholic.org
    {
        month: 11,
        day: 4,
        orishaId: 'shango',
        orishaName: 'Shango',
        saintName: 'Saint Barbara (Santa Barbara)',
        description: 'Major feast of Shango, Orisha of thunder, lightning, fire, and justice',
        significance: 'major',
        traditionalObservance: 'Drumming and dancing ceremonies. Fire offerings. Red and white decorations. Apples and bananas as offerings. December 4 commemorates St. Barbara, patroness of artillery, fireworks, and those in danger of sudden death.'
    },
    // December 17: Saint Lazarus - Traditional Cuban/Latin American date
    // Note: The General Roman Calendar now places St. Lazarus of Bethany on July 29
    // with his sisters Martha and Mary. However, December 17 remains the traditional
    // feast in Cuba and Latin America for syncretized Lazarus devotion.
    // Confirmed by: Cuba Travel Network, FolkCuba, Encyclopedia.com
    {
        month: 11,
        day: 17,
        orishaId: 'babaluaye',
        orishaName: 'Babalu-Aye',
        saintName: 'Saint Lazarus (San Lazaro)',
        description: 'Major feast of Babalu-Aye, Orisha of healing, disease, and the afflicted',
        significance: 'major',
        traditionalObservance: 'Pilgrimage to Rincón, Cuba. Offerings of roasted corn, beans, and garlic. Devotees may walk on knees or carry heavy loads as promises (promesas). December 17 is the traditional Cuban date for Babalú-Ayé; the modern Catholic calendar celebrates St. Lazarus on July 29 with his sisters Martha and Mary.',
        alternateDates: [
            { month: 6, day: 29, tradition: 'Modern Catholic calendar (with Martha and Mary)' }
        ]
    },
    {
        month: 11,
        day: 31,
        orishaId: 'osain',
        orishaName: 'Osain',
        saintName: 'Saint Sylvester / Saint Ambrose',
        description: 'Feast of Osain, master of herbs and healing plants',
        significance: 'minor',
        traditionalObservance: 'Herb gathering and blessing. Preparation of medicinal preparations.'
    },
    {
        month: 11,
        day: 31,
        orishaId: 'yemaya',
        orishaName: 'Yemaya',
        saintName: 'New Year\'s Eve',
        description: 'Alternative feast for Yemaya at year\'s end',
        significance: 'minor',
        traditionalObservance: 'Many practitioners honor Yemaya at midnight on New Year\'s Eve, casting offerings into the sea or a basin of water.'
    }
];

// ============================================================================
// DAYS OF THE WEEK (Ojo Ose)
// ============================================================================

export const OJO_OSE: OjoOse[] = [
    {
        dayOfWeek: 0, // Sunday
        orishaIds: ['obatala'],
        description: 'Day of Obatala, the elder of the white cloth. A day for purity, clarity, and coolness.'
    },
    {
        dayOfWeek: 1, // Monday
        orishaIds: ['eleggua'],
        description: 'Day of Elegua, the divine messenger. A day for opening paths and new beginnings.'
    },
    {
        dayOfWeek: 2, // Tuesday
        orishaIds: ['ogun'],
        description: 'Day of Ogun, the warrior. A day for work, labor, and removing obstacles.'
    },
    {
        dayOfWeek: 3, // Wednesday
        orishaIds: ['oya', 'babaluaye'],
        description: 'Day of Oya (wind of change) and Babalu-Aye (healing). A day for transformation and health.'
    },
    {
        dayOfWeek: 4, // Thursday
        orishaIds: ['obatala', 'orunmila'],
        description: 'Day of Obatala (in some traditions also Orunmila). A day for wisdom and justice.'
    },
    {
        dayOfWeek: 5, // Friday
        orishaIds: ['shango'],
        description: 'Day of Shango, the king. A day for passion, justice, and drumming.'
    },
    {
        dayOfWeek: 6, // Saturday
        orishaIds: ['oshun', 'yemaya'],
        description: 'Day of Oshun and Yemaya, the divine sisters. A day for love, family, and water offerings.'
    }
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get all feast days for a specific month
 */
export function getFeastDaysByMonth(month: number): FeastDay[] {
    return ORISHA_FEAST_DAYS.filter(feast => feast.month === month);
}

/**
 * Get the Orisha(s) associated with a specific day of the week
 */
export function getOrishasForDayOfWeek(dayOfWeek: number): OjoOse | undefined {
    return OJO_OSE.find(ojo => ojo.dayOfWeek === dayOfWeek);
}

/**
 * Get feast days for a specific Orisha
 */
export function getFeastDaysForOrisha(orishaId: string): FeastDay[] {
    return ORISHA_FEAST_DAYS.filter(feast => feast.orishaId === orishaId);
}

/**
 * Get the next upcoming feast day from today
 */
export function getNextFeastDay(fromDate: Date = new Date()): FeastDay | null {
    const today = new Date(fromDate);
    today.setHours(0, 0, 0, 0);

    // Create an array of all feast days with their actual dates for this year and next
    const upcomingFeasts: (FeastDay & { date: Date })[] = [];

    const currentYear = today.getFullYear();
    const nextYear = currentYear + 1;

    [...ORISHA_FEAST_DAYS].forEach(feast => {
        // Add for current year
        upcomingFeasts.push({
            ...feast,
            date: new Date(currentYear, feast.month, feast.day)
        });
        // Add for next year
        upcomingFeasts.push({
            ...feast,
            date: new Date(nextYear, feast.month, feast.day)
        });
    });

    // Sort by date and find first one after today
    const sorted = upcomingFeasts
        .filter(f => f.date >= today)
        .sort((a, b) => a.date.getTime() - b.date.getTime());

    return sorted.length > 0 ? sorted[0] : null;
}

/**
 * Get all feast days within a date range
 */
export function getFeastDaysInRange(startDate: Date, endDate: Date): (FeastDay & { date: Date })[] {
    const result: (FeastDay & { date: Date })[] = [];
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();

    for (let year = startYear; year <= endYear; year++) {
        ORISHA_FEAST_DAYS.forEach(feast => {
            const date = new Date(year, feast.month, feast.day);
            if (date >= startDate && date <= endDate) {
                result.push({ ...feast, date });
            }
        });
    }

    return result.sort((a, b) => a.date.getTime() - b.date.getTime());
}

/**
 * Format a date for display
 */
export function formatFeastDate(month: number, day: number): string {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${monthNames[month]} ${day}`;
}

/**
 * Get days until a feast day
 */
export function getDaysUntilFeast(feast: FeastDay, fromDate: Date = new Date()): number {
    const today = new Date(fromDate);
    today.setHours(0, 0, 0, 0);

    let feastDate = new Date(today.getFullYear(), feast.month, feast.day);

    if (feastDate < today) {
        feastDate = new Date(today.getFullYear() + 1, feast.month, feast.day);
    }

    const diffTime = feastDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Get the current Ojo Ose (day of the week Orisha)
 */
export function getCurrentOjoOse(date: Date = new Date()): OjoOse {
    const dayOfWeek = date.getDay();
    return OJO_OSE.find(ojo => ojo.dayOfWeek === dayOfWeek) || OJO_OSE[0];
}

// Month names for display
export const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

// Day names for display
export const DAY_NAMES = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

// Short day names for calendar grid
export const DAY_NAMES_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
