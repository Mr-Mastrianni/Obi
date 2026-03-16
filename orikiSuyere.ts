
/**
 * ORIKI & SUYERE DATA
 * Integrated into Orisha Encyclopedia
 * 
 * ⚠️ LINEAGE WARNING:
 * Lukumi is an oral, lineage-based tradition with variation across iles (houses).
 * These represent common public forms — your godparent's version may differ.
 */

export type ContentType = 'oriki' | 'suyere' | 'moyuba' | 'opening';
export type ConfidenceLevel = 'high' | 'medium' | 'house_specific';

export interface LineageNote {
    note: string;
    severity: 'info' | 'warning' | 'critical';
}

export interface OrikiEntry {
    id: string;
    title: string;
    lucumiText: string;
    phoneticGuide?: string;
    translation?: string;
    context: string;
    whenToUse: string[];
    confidence: ConfidenceLevel;
    lineageNotes?: LineageNote[];
    source?: string;
}

export interface SuyereEntry {
    id: string;
    title: string;
    lucumiText: string;
    phoneticGuide?: string;
    translation?: string;
    rhythmContext?: string;
    confidence: ConfidenceLevel;
    lineageNotes?: LineageNote[];
}

export interface RitualEntry {
    id: string;
    title: string;
    offering: string;
    offeringIcon?: string;
    openingPrayer: {
        lucumi: string;
        phoneticGuide?: string;
        translation: string;
    };
    chant: {
        lucumi: string;
        phoneticGuide?: string;
        translation: string;
    };
    context: string;
    whenToUse: string[];
    confidence: ConfidenceLevel;
    lineageNotes?: LineageNote[];
}

// ============================================================================
// OPENING FORMULAS (Universal)
// ============================================================================

export const OPENING_FORMULAS: OrikiEntry[] = [
    {
        id: 'omi-tuto-basic',
        title: 'Omi Tuto (Basic Opening)',
        lucumiText: 'Omi tuto, ona tuto, ile tuto, tutu Laroye.',
        phoneticGuide: 'OH-mee too-TOH, oh-NAH too-TOH, EE-leh too-TOH, too-TOO lah-ROH-yeh',
        translation: 'Cool water, cool path, cool house, cool Laroye (Elegua).',
        context: 'Standard opening libation formula used before most rituals. Associated with cooling, refreshing, and respectful opening.',
        whenToUse: [
            'Before casting obi',
            'Before praying to Elegua',
            'As opening to any ritual work',
            'When refreshing the warriors'
        ],
        confidence: 'high',
        lineageNotes: [
            {
                note: 'Exact wording varies by house. Some lineages use longer versions with additional phrases.',
                severity: 'info'
            }
        ],
        source: 'Common across many Lukumi houses'
    },
    {
        id: 'omi-tuto-extended',
        title: 'Omi Tuto (Extended)',
        lucumiText: 'Omi tuto, ona tuto, ile tuto, afefe tuto, enu tuto, ara tuto, tutu Laroye.',
        phoneticGuide: 'OH-mee too-TOH, oh-NAH too-TOH, EE-leh too-TOH, ah-feh-FEH too-TOH, eh-NOO too-TOH, AH-rah too-TOH, too-TOO lah-ROH-yeh',
        translation: 'Cool water, cool path, cool house, cool air/wind, cool mouth/speech, cool body, cool Laroye.',
        context: 'Extended version of the cooling formula, invoking coolness in multiple domains.',
        whenToUse: [
            'Major ceremonies',
            'When seeking to calm heated situations',
            'Before important divination'
        ],
        confidence: 'medium',
        lineageNotes: [
            {
                note: 'Length and specific elements vary significantly by house tradition.',
                severity: 'warning'
            }
        ]
    }
];

export const MOYUBA_PRAYERS: OrikiEntry[] = [
    {
        id: 'moyuba-ancestors',
        title: 'Moyuba (Ancestors)',
        lucumiText: 'Moyuba ile, moyuba orisha, moyuba eggun.',
        phoneticGuide: 'moh-YOO-bah EE-leh, moh-YOO-bah oh-REE-shah, moh-YOO-bah eh-GOON',
        translation: 'I pay homage to the house/earth, I pay homage to the Orisha, I pay homage to the ancestors.',
        context: 'Standard salutation formula acknowledging the three domains: earthly community, divine forces, and ancestral lineage.',
        whenToUse: [
            'Opening of any ritual',
            'Before prayer',
            'Before meals in ritual context',
            'When approaching the shrine'
        ],
        confidence: 'high',
        source: 'Common Lukumi practice'
    }
];

// ============================================================================
// ORIKI BY ORISHA
// ============================================================================

export const ORIKI_BY_ORISHA: Record<string, OrikiEntry[]> = {
    eleggua: [
        {
            id: 'elegua-short',
            title: 'Elegua Oriki (Short Form)',
            lucumiText: 'Laroye oko ilé, abukú eni dá. Alágbèdé ojú mẹ́ta, ẹni tí ó ń gbé àjàkálẹ̀.',
            phoneticGuide: 'lah-ROH-yeh oh-KOH ee-LEH, ah-boo-KOO eh-nee DAH. ah-lahg-BEH-deh oh-JOO meh-TAH, eh-nee tee ohng beh ah-jah-kah-LEH',
            translation: 'Laroye, husband of the house, one who turns death away. Blacksmith of three eyes, who carries the storm.',
            context: 'Common short oriki for Elegua/Laroye. Used in daily practice and minor rituals.',
            whenToUse: [
                'Before casting obi to Elegua',
                'When saluting the warriors',
                'Monday rituals (day of Elegua)',
                'When leaving the house'
            ],
            confidence: 'high',
            lineageNotes: [
                {
                    note: 'Some houses begin with "Elegua, Elegua, Elegua, alágbèdé ojú mẹ́ta" as a longer opening.',
                    severity: 'info'
                }
            ],
            source: 'Common across Lukumi houses; variations in Obi Agbon'
        },
        {
            id: 'elegua-elegba',
            title: 'Elegua/Elegba Salutation',
            lucumiText: 'Elegua Elegba, ara oke. Elegua alágbèdé ojú mẹ́ta. Ẹni tí ó ń gbé àjàkálẹ̀, ọmọ omi.',
            phoneticGuide: 'eh-leh-GWAH eh-lehg-BAH, AH-rah oh-KEH. eh-leh-GWAH ah-lahg-BEH-deh oh-JOO meh-TAH. eh-nee tee ohng beh ah-jah-kah-LEH, OH-moh OH-mee',
            translation: 'Elegua Elegba, dweller of the hill. Elegua blacksmith of three eyes. He who carries the storm, child of the waters.',
            context: 'Invokes Elegua as messenger, opener of roads, and guardian of thresholds.',
            whenToUse: [
                'Opening any ceremony',
                'When Elegua is being fed',
                'Before travel',
                'When asking for roads to open'
            ],
            confidence: 'medium',
            source: 'Documented in various Lukumi sources'
        }
    ],

    obatala: [
        {
            id: 'obatala-owner-of-head',
            title: 'Obatala: Owner of the Head',
            lucumiText: 'Obatalá olóri, olóòró, alágbèdé onílẹ̀. Ẹni tí ó ń mú ìmọ́lẹ̀ wá.',
            phoneticGuide: 'oh-bah-tah-LAH oh-LOH-ree, oh-LOH-roh, ah-lahg-BEH-deh oh-NEE-leh. eh-nee tee ohng moo ee-MOH-leh wah',
            translation: 'Obatala owner of the head, owner of whiteness/purity, smith of the earth. One who brings light/clarity.',
            context: 'Obatala is the owner of Ori (the head) and all head rogations. This oriki is central to ebori/kobori eleda ceremonies.',
            whenToUse: [
                'All head rogations (ebori/kobori eleda)',
                'When working with white cloth or purity',
                'When seeking clarity or coolness',
                'Thursday rituals (day of Obatala)'
            ],
            confidence: 'high',
            source: 'Universal across Lukumi practice'
        }
    ],

    oba: [
        {
            id: 'oba-patient',
            title: 'Oba: The Patient One',
            lucumiText: 'Oba onírẹ̀, tí ó ń jẹ ewúré ní kùtùkùtù. Ẹni tí ó ń rìn pẹ̀lú àjẹ́ ní àárín òru.',
            phoneticGuide: 'OH-bah oh-nee-REH, tee ohng jeh eh-WOO-reh nee koo-too-KOO-too. eh-nee tee ohng reen peh-LOO ah-JEH nee ah-ah-REEN oh-ROO',
            translation: 'Oba the patient one, who eats she-goat early in the morning. She who walks with witches in the middle of the night.',
            context: 'This oriki reveals key aspects of Oba\'s character: patience, early rising, and association with witchcraft/secret knowledge.',
            whenToUse: [
                'When working with Oba',
                'Head rogations when Oba is relevant',
                'When seeking patience or strength in adversity'
            ],
            confidence: 'medium',
            lineageNotes: [
                {
                    note: 'The mention of "she-goat" as offering is lineage-specific. Some houses may use different animals.',
                    severity: 'info'
                },
                {
                    note: 'Interpretation of Oba\'s relationship with witchcraft varies by house.',
                    severity: 'warning'
                }
            ],
            source: 'Referenced in research transcript; oral transmission'
        }
    ],

    ori: [
        {
            id: 'ori-praise',
            title: 'Ori Praise (Ebori)',
            lucumiText: 'Ori mi, ọ̀rẹ́ ọmọ. Ori mi, aláàbò ọmọ. Ori mi, ọ̀rẹ́ àìníbí.',
            phoneticGuide: 'OH-ree mee, oh-REH oh-MOH. OH-ree mee, ah-lah-AH-boh oh-MOH. OH-ree mee, oh-REH ah-ee-nee-BEE',
            translation: 'My Ori, friend of the child. My Ori, protector of the child. My Ori, friend without equal.',
            context: 'Direct praise to one\'s own Ori (inner head/destiny) during head rogation ceremonies.',
            whenToUse: [
                'During ebori (head rogation)',
                'When praying for personal destiny',
                'When facing important life decisions'
            ],
            confidence: 'medium',
            lineageNotes: [
                {
                    note: 'The full sequence of oriki for head rogation varies by house.',
                    severity: 'warning'
                }
            ]
        }
    ],

    oshun: [
        {
            id: 'oshun-sweetness',
            title: 'Oshun: Queen of Sweetness',
            lucumiText: 'Yeye kari, yeye kari, yeye kari o. Yeye kari, yeye kari, yeye kari o.',
            phoneticGuide: 'yeh-yeh kah-REE, yeh-yeh kah-REE, yeh-yeh kah-REE oh',
            translation: 'Mother who covers (protects), mother who covers, mother who covers oh.',
            context: 'Common praise call for Oshun, acknowledging her as the protective mother who covers her children.',
            whenToUse: [
                'When saluting Oshun',
                'Before casting obi to Oshun',
                'When seeking her blessing for love or money',
                'Saturday rituals (day of Oshun)'
            ],
            confidence: 'high',
            source: 'Common Lukumi practice'
        }
    ],

    yemaya: [
        {
            id: 'yemaya-mother',
            title: 'Yemaya: Mother of All',
            lucumiText: 'Yemaya asesu, Yemaya olodo, omi nitosi.',
            phoneticGuide: 'yeh-mah-YAH ah-seh-SOO, yeh-mah-YAH oh-loh-DOH, OH-mee nee-toh-SEE',
            translation: 'Yemaya who satisfies, Yemaya owner of the river, water that draws near.',
            context: 'Acknowledges Yemaya as the nurturing mother who provides for all her children.',
            whenToUse: [
                'When saluting Yemaya',
                'Before ocean ceremonies',
                'When seeking maternal protection',
                'Saturday rituals (day of Yemaya)'
            ],
            confidence: 'high',
            source: 'Common Lukumi practice'
        }
    ],

    shango: [
        {
            id: 'shango-king',
            title: 'Shango: King of Thunder',
            lucumiText: 'Obá ko so, Obá ko so, Obá ko so.',
            phoneticGuide: 'oh-BAH koh SOH, oh-BAH koh SOH, oh-BAH koh SOH',
            translation: 'The King did not hang (himself).',
            context: 'The central chant of Shango\'s mystery — affirming that he did not die by hanging but became thunder.',
            whenToUse: [
                'During Shango ceremonies',
                'When calling Shango\'s power',
                'Friday rituals (day of Shango)',
                'When seeking justice or victory'
            ],
            confidence: 'high',
            source: 'Universal Shango praise'
        }
    ],

    oya: [
        {
            id: 'oya-wind',
            title: 'Oya: Queen of the Winds',
            lucumiText: 'Iya mesa lo kunle, Oya mesa lo kunle.',
            phoneticGuide: 'ee-yah meh-SAH loh koon-LEH, oh-YAH meh-SAH loh koon-LEH',
            translation: 'The mother of nine kneels down, Oya of nine kneels down.',
            context: 'References Oya\'s association with the number nine and her role as mother. The winds kneel before her power.',
            whenToUse: [
                'When saluting Oya',
                'At the cemetery gate',
                'When calling for transformation',
                'Wednesday rituals (day of Oya)'
            ],
            confidence: 'medium',
            source: 'Common Lukumi practice'
        }
    ],

    ogun: [
        {
            id: 'ogun-warrior',
            title: 'Ogun: Warrior of Iron',
            lucumiText: 'Ogun onire, alagbede orisha. Ogun alara.',
            phoneticGuide: 'oh-GOON oh-nee-REH, ah-lahg-BEH-deh oh-REE-shah. oh-GOON ah-LAH-rah',
            translation: 'Ogun owner of the crown, blacksmith of the Orishas. Ogun who clears the path.',
            context: 'Acknowledges Ogun as the warrior who clears obstacles and the blacksmith who makes all tools.',
            whenToUse: [
                'When working with Ogun',
                'Before beginning new work or projects',
                'Tuesday rituals (day of Ogun)',
                'When removing obstacles'
            ],
            confidence: 'high',
            source: 'Common Lukumi practice'
        }
    ],

    babaluaye: [
        {
            id: 'babaluaye-healer',
            title: 'Babalu-Aye: The Healer',
            lucumiText: 'Babalu-Aye, ara ode, olubata. Arikú babá wa.',
            phoneticGuide: 'bah-bah-loo ah-YEH, ah-rah oh-DEH, oh-loo-BAH-tah. ah-ree-KOO bah-BAH wah',
            translation: 'Babalu-Aye, friend of the outside/forest, drummer. Longevity our father.',
            context: 'Honors Babalu-Aye as the healer who walks with crutches, accompanied by dogs, bringing health and long life.',
            whenToUse: [
                'When praying for healing',
                'When working with illness',
                'Babalu-Aye\'s feast day (December 17)',
                'When seeking protection from disease'
            ],
            confidence: 'high',
            source: 'Common Lukumi practice'
        }
    ],

    orunmila: [
        {
            id: 'orunmila-wisdom',
            title: 'Orunmila: Witness to Creation',
            lucumiText: 'Orunmila, eleri ipin, ariku babá gbogbo aye.',
            phoneticGuide: 'oh-roon-mee-LAH, eh-leh-ree ee-PEEN, ah-ree-KOO bah-BAH boh-GOH-boh ah-YEH',
            translation: 'Orunmila, witness to destiny/creation, longevity father of all the world.',
            context: 'Acknowledges Orunmila as the only one who witnessed creation and knows all destinies.',
            whenToUse: [
                'Before consulting Ifa or Merindilogun',
                'When seeking wisdom',
                'During initiation ceremonies',
                'When making important life decisions'
            ],
            confidence: 'high',
            source: 'Universal Ifa practice'
        }
    ],

    olokun: [
        {
            id: 'olokun-depths',
            title: 'Olokun: Owner of the Depths',
            lucumiText: 'Olokun ni won o, olokun ni won o, ma fo ju ra mi o.',
            phoneticGuide: 'oh-loh-KOON nee wohn oh, oh-loh-KOON nee wohn oh, mah foh joo rah mee oh',
            translation: 'It is Olokun, it is Olokun, do not reveal my secrets.',
            context: 'Acknowledges Olokun as the keeper of deep secrets and unfathomable wealth at the bottom of the ocean.',
            whenToUse: [
                'When seeking wealth from the depths',
                'When working with dreams',
                'Ocean ceremonies focusing on depth work',
                'When seeking hidden knowledge'
            ],
            confidence: 'medium',
            source: 'Common Lukumi practice'
        }
    ],

    inle: [
        {
            id: 'inle-healer',
            title: 'Inle: Divine Healer',
            lucumiText: 'Inle odo, Inle odo, oluwaiye.',
            phoneticGuide: 'een-LEH oh-DOH, een-LEH oh-DOH, oh-loo-wah-EE-yeh',
            translation: 'Inle of the river, Inle of the river, owner of the world/earth.',
            context: 'Calls upon Inle as the divine fisherman who knows the healing secrets of all waters.',
            whenToUse: [
                'When seeking healing',
                'When working with herbs and medicines',
                'Fishing or hunting rituals',
                'When calling for abundance'
            ],
            confidence: 'medium',
            source: 'Common Lukumi practice'
        }
    ],

    yewa: [
        {
            id: 'yewa-cemetery',
            title: 'Yewa: Queen of the Cemetery',
            lucumiText: 'Yewa kowo, Yewa kowa. Yeye mi o.',
            phoneticGuide: 'yeh-WAH koh-WOH, yeh-WAH koh-WAH. yeh-yeh mee oh',
            translation: 'Yewa here, Yewa there. My mother.',
            context: 'Simple call to Yewa who dwells in the cemetery, acknowledging her presence everywhere in the realm of death.',
            whenToUse: [
                'When entering the cemetery',
                'When working with the dead',
                'Transformation rituals',
                'When seeking purity through separation'
            ],
            confidence: 'medium',
            source: 'Common Lukumi practice'
        }
    ],

    nanaburuku: [
        {
            id: 'nana-ancient',
            title: 'Nana Buruku: Ancient Mother',
            lucumiText: 'Nana Buruku, iya ti tiwa, iya ti tiwa lati igba iponju.',
            phoneticGuide: 'NAH-nah boo-roo-KOO, ee-yah tee tee-WAH, ee-yah tee tee-WAH lah-tee eeg-bah ee-pohn-joo',
            translation: 'Nana Buruku, mother that is ours, mother that is ours from the time of creation.',
            context: 'Honors Nana Buruku as the ancient earth mother who predates the other Orishas.',
            whenToUse: [
                'When calling on ancient ancestral power',
                'Swamp or earth ceremonies',
                'When seeking deep transformation',
                'When working with the oldest mysteries'
            ],
            confidence: 'medium',
            source: 'Common Lukumi practice'
        }
    ],

    osain: [
        {
            id: 'osain-leaves',
            title: 'Osain: Master of Leaves',
            lucumiText: 'Kosi ewe, kosi orisha. Osain baba ewe.',
            phoneticGuide: 'koh-SEE eh-weh, koh-SEE oh-REE-shah. oh-SAH-een bah-BAH eh-weh',
            translation: 'Without leaves, there is no Orisha. Osain father of leaves.',
            context: 'The fundamental truth of Osain — no ceremony can be performed without his herbs.',
            whenToUse: [
                'When gathering herbs',
                'Before any ceremony (to honor Osain)',
                'Healing work with plants',
                'When making omiero (sacred herbal water)'
            ],
            confidence: 'high',
            source: 'Universal Lukumi practice'
        }
    ],

    argayu: [
        {
            id: 'argayu-volcano',
            title: 'Argayu: Force of the Earth',
            lucumiText: 'Agayu sola, olodumare ni o. Baba Shango.',
            phoneticGuide: 'ah-gah-YOO soh-LAH, oh-loh-doo-mah-REH nee oh. bah-BAH SHAHN-goh',
            translation: 'Agayu sola, he is of Olodumare. Father of Shango.',
            context: 'Acknowledges Argayu as the primal volcanic force and father of Shango.',
            whenToUse: [
                'When seeking grounding',
                'Before travel',
                'When calling on earth forces',
                'When working with Shango (to honor his father)'
            ],
            confidence: 'medium',
            source: 'Common Lukumi practice'
        }
    ],

    oshosi: [
        {
            id: 'oshosi-hunter',
            title: 'Oshosi: Divine Hunter',
            lucumiText: 'Oshosi odde, ode tire lona nlo.',
            phoneticGuide: 'oh-SHOH-see oh-deh, oh-deh tee-REH loh-nah n-loh',
            translation: 'Oshosi hunter, your hunting is on the way.',
            context: 'Calls upon Oshosi the hunter to find what is sought — whether game, justice, or truth.',
            whenToUse: [
                'When seeking justice',
                'Legal matters',
                'When looking for lost things',
                'Before hunting or fishing'
            ],
            confidence: 'medium',
            source: 'Common Lukumi practice'
        }
    ]
};

// ============================================================================
// SUYERE BY ORISHA
// ============================================================================

export const SUYERE_BY_ORISHA: Record<string, SuyereEntry[]> = {
    eleggua: [
        {
            id: 'suyere-elegua-1',
            title: 'Barasuayo (Ejife)',
            lucumiText: 'Barasuayo, Barasuayo, agó, agó, agó ile.',
            phoneticGuide: 'bah-rah-swah-YOH, bah-rah-swah-YOH, ah-GOH, ah-GOH, ah-GOH EE-leh',
            translation: 'Barasuayo (Elegua\'s praise name), Barasuayo, permission, permission, permission of the house.',
            rhythmContext: 'Played at the opening of tambores to call Elegua and ask permission to proceed.',
            confidence: 'high',
            lineageNotes: [
                {
                    note: 'Barasuayo is a praise name specific to certain lineages.',
                    severity: 'info'
                }
            ]
        },
        {
            id: 'suyere-elegua-2',
            title: 'Alaleyo',
            lucumiText: 'Alaleyo, alaleyo, modupue alaleyo.',
            phoneticGuide: 'ah-lah-leh-YOH, ah-lah-leh-YOH, moh-doo-PEH-ah-lah-leh-YOH',
            translation: 'Owner of the house/door, owner of the house, thank you owner of the house.',
            rhythmContext: 'Call and response song for Elegua at tambores.',
            confidence: 'medium'
        }
    ],

    shango: [
        {
            id: 'suyere-shango-1',
            title: 'Kawo Kabiyesi',
            lucumiText: 'Kawo kabiyesi ile, kawo kabiyesi.',
            phoneticGuide: 'kah-WOH kah-bee-yeh-SEE EE-leh, kah-WOH kah-bee-yeh-SEE',
            translation: 'Hail the king of the house, hail the king.',
            rhythmContext: 'Royal salute to Shango, acknowledging him as king.',
            confidence: 'high'
        }
    ],

    yemaya: [
        {
            id: 'suyere-yemaya-1',
            title: 'Omi Yalo',
            lucumiText: 'Omi yalo, Yemaya, omi yalo.',
            phoneticGuide: 'OH-mee yah-LOH, yeh-mah-YAH, OH-mee yah-LOH',
            translation: 'Water flows, Yemaya, water flows.',
            rhythmContext: 'Gentle song for Yemaya, often sung at the shore.',
            confidence: 'high'
        }
    ],

    oshun: [
        {
            id: 'suyere-oshun-1',
            title: 'Yeye Kari',
            lucumiText: 'Yeye kari, yeye kari, yeye kari o.',
            phoneticGuide: 'yeh-yeh kah-REE, yeh-yeh kah-REE, yeh-yeh kah-REE oh',
            translation: 'Mother who covers/protects, mother who covers, mother who covers oh.',
            rhythmContext: 'Joyful song for Oshun, often sung during river ceremonies.',
            confidence: 'high'
        }
    ],

    obatala: [
        {
            id: 'suyere-obatala-1',
            title: 'Orishanla',
            lucumiText: 'Orishanla, orishanla, olorun ni o.',
            phoneticGuide: 'oh-ree-shahn-LAH, oh-ree-shahn-LAH, oh-loh-ROON nee oh',
            translation: 'Great Orisha, great Orisha, belongs to Olodumare.',
            rhythmContext: 'Slow, respectful song for Obatala emphasizing his seniority.',
            confidence: 'high'
        }
    ],

    oya: [
        {
            id: 'suyere-oya-1',
            title: 'Oya Ni Mi',
            lucumiText: 'Oya ni mi, Oya ni mi, Oya ni mi o.',
            phoneticGuide: 'oh-YAH nee mee, oh-YAH nee mee, oh-YAH nee mee oh',
            translation: 'I am Oya, I am Oya, I am Oya oh.',
            rhythmContext: 'Possession song for Oya, calling her to mount her devotee.',
            confidence: 'medium'
        }
    ],

    ogun: [
        {
            id: 'suyere-ogun-1',
            title: 'Ogun Onire',
            lucumiText: 'Ogun onire, Ogun alagbede orisha.',
            phoneticGuide: 'oh-GOON oh-nee-REH, oh-GOON ah-lahg-BEH-deh oh-REE-shah',
            translation: 'Ogun owner of the crown, Ogun blacksmith of the Orishas.',
            rhythmContext: 'Strong marching rhythm for Ogun, played on bata drums.',
            confidence: 'high'
        }
    ]
};

// ============================================================================
// RITUALS BY ORISHA (Feeding Liturgies, Sacrifice Prayers)
// ============================================================================

export const RITUALS_BY_ORISHA: Record<string, RitualEntry[]> = {
    eleggua: [
        {
            id: 'elegua-honey',
            title: 'Feeding Honey to Elegua',
            offering: 'Honey (Oyin)',
            offeringIcon: '🍯',
            openingPrayer: {
                lucumi: 'Elegba mo fun o ni oyin. Da Ile ati aiye mi idunnu.',
                phoneticGuide: 'eh-LEHG-bah moh foon oh nee oh-YEEN. Dah EE-leh ah-tee ah-EE-yeh mee ee-doon-NOO.',
                translation: 'Elegua I give you honey. Make my house and world enjoyable/sweet.'
            },
            chant: {
                lucumi: 'Bara ila Wi Oyin O. Bara Ila Wi Oyin. O Dun Mama, Ila Wi Oyin O. Baara Ila Wi Oyin.',
                phoneticGuide: 'bah-rah EE-lah wee oh-YEEN oh. bah-rah EE-lah wee oh-YEEN. oh doon mah-MAH, EE-lah wee oh-YEEN oh. bah-rah EE-lah wee oh-YEEN.',
                translation: 'Bara speaks honey. Bara speaks honey. It is sweet mother, speaks honey. Bara speaks honey.'
            },
            context: 'Honey represents sweetness and social connection. Elegua receives honey to open paths with joy and pleasantness.',
            whenToUse: [
                'When feeding Elegua at the crossroads',
                'To sweeten a situation or open blocked paths',
                'Before asking for favors or road-opening',
                'During Monday rituals (day of Elegua)'
            ],
            confidence: 'high'
        },
        {
            id: 'elegua-rum',
            title: 'Feeding Rum to Elegua',
            offering: 'Rum/Aguardiente (Oti)',
            offeringIcon: '🥃',
            openingPrayer: {
                lucumi: 'Elegba Mo fun o ni Oti. Da Oti Aiye Mi Irora.',
                phoneticGuide: 'eh-LEHG-bah moh foon oh nee OH-tee. Dah OH-tee ah-EE-yeh mee ee-roh-RAH.',
                translation: 'Elegua I give you rum. Make my house and world comfortable/free from hardship.'
            },
            chant: {
                lucumi: 'Oti Ma L Ero, Oti Ma L Ero. A Yaya Oti Ma L Ero.',
                phoneticGuide: 'OH-tee mah leh EH-roh, OH-tee mah leh EH-roh. ah yah-YAH OH-tee mah leh EH-roh.',
                translation: 'Rum without difficulty, rum without difficulty. Joyful mother, rum without difficulty.'
            },
            context: 'Rum (Oti) represents fire and transformation. It clears obstacles and brings comfort to the home.',
            whenToUse: [
                'When giving Elegua his regular rum offering',
                'To clear difficulties and bring comfort',
                'Before traveling or opening new paths',
                'When feeling stuck or blocked'
            ],
            confidence: 'high'
        },
        {
            id: 'elegua-palm-oil',
            title: 'Feeding Palm Oil to Elegua',
            offering: 'Palm Oil (Epo)',
            offeringIcon: '🍷',
            openingPrayer: {
                lucumi: 'Elegba Mo Fun O Ni Epo. Fun Mi Olaopo.',
                phoneticGuide: 'eh-LEHG-bah moh foon oh nee EH-poh. Foon mee oh-lah-OH-poh.',
                translation: 'Elegua I give you palm oil. Give me abundant wealth.'
            },
            chant: {
                lucumi: 'Epo Ma L Ero, Epo Ma L Ero. A Yaya Epo Ma L Ero.',
                phoneticGuide: 'EH-poh mah leh EH-roh, EH-poh mah leh EH-roh. ah yah-YAH EH-poh mah leh EH-roh.',
                translation: 'Palm oil without difficulty, palm oil without difficulty. Joyful mother, palm oil without difficulty.'
            },
            context: 'Palm oil represents wealth and smoothness. It lubricates the paths for prosperity to flow.',
            whenToUse: [
                'When seeking financial prosperity',
                'To smooth out difficult situations',
                'Before business dealings',
                'When asking for abundance'
            ],
            confidence: 'high'
        },
        {
            id: 'elegua-cigar',
            title: 'Feeding Cigar to Elegua',
            offering: 'Cigar (Asa)',
            offeringIcon: '🚬',
            openingPrayer: {
                lucumi: 'Elegba Mo Fun O Ni Asa. Da Aiye Mi Itelorun.',
                phoneticGuide: 'eh-LEHG-bah moh foon oh nee AH-sah. Dah ah-EE-yeh mee ee-teh-loh-ROON.',
                translation: 'Elegua I give you cigar. Make my world satisfying/content.'
            },
            chant: {
                lucumi: 'Asa Ma L Ero, Asa Ma L Ero. A Yaya, Asa Ma L Ero.',
                phoneticGuide: 'AH-sah mah leh EH-roh, AH-sah mah leh EH-roh. ah yah-YAH, AH-sah mah leh EH-roh.',
                translation: 'Cigar without difficulty, cigar without difficulty. Joyful mother, cigar without difficulty.'
            },
            context: 'Cigar smoke carries prayers to the Orishas. It brings satisfaction and contentment to life\'s endeavors.',
            whenToUse: [
                'When blowing smoke offerings to Elegua',
                'To bring satisfaction to a situation',
                'Before important decisions',
                'When seeking contentment'
            ],
            confidence: 'high'
        },
        {
            id: 'elegua-candle',
            title: 'Lighting Candle for Elegua',
            offering: 'Candle (Itanna)',
            offeringIcon: '🕯️',
            openingPrayer: {
                lucumi: 'Elegba Mo Fun O Ni Itanna. Fun Mi Imole ati Imo.',
                phoneticGuide: 'eh-LEHG-bah moh foon oh nee ee-tahn-NAH. Foon mee ee-moh-LEH ah-tee ee-MOH.',
                translation: 'Elegba I give you a candle. Give me light and knowledge.'
            },
            chant: {
                lucumi: 'Itanna Ma L Ero, Itanna Ma L Ero. A Yaya, Itanna Ma L Ero.',
                phoneticGuide: 'ee-tahn-NAH mah leh EH-roh, ee-tahn-NAH mah leh EH-roh. ah yah-YAH, ee-tahn-NAH mah leh EH-roh.',
                translation: 'Candle without difficulty, candle without difficulty. Joyful mother, candle without difficulty.'
            },
            context: 'Candlelight represents illumination, knowledge, and guidance. It lights the path forward.',
            whenToUse: [
                'When lighting candles for Elegua',
                'When seeking clarity and knowledge',
                'To illuminate dark situations',
                'For spiritual guidance and protection'
            ],
            confidence: 'high'
        }
    ],
    ogun: [
        {
            id: 'ogun-blood-sacrifice',
            title: 'Ogun Blood Sacrifice Ritual',
            offering: 'Animal Sacrifice (Ebo Eran)',
            offeringIcon: '⚔️',
            openingPrayer: {
                lucumi: 'Ya ki Nya, Ya ki Nya Lo Roo. Ba Ra Ya Ki Nya, Ya Ki Nya Lo Roo. Ba Ra Ya Ki Nya. Ya we Se, Ya We Se Lo Ori. Ba Ra Ya We Se, Ya We Se Lo Oro.',
                phoneticGuide: 'yah kee NYAH, yah kee NYAH loh roh. bah rah yah kee NYAH, yah kee NYAH loh roh. bah rah yah kee NYAH. yah weh seh, yah weh seh loh oh-REE. bah rah yah weh seh, yah weh seh loh oh-ROH.',
                translation: 'The one who tears/twists, tears/twists and descends. Bara tears/twists, tears/twists and descends. Bara tears/twists. The one who entwines, entwines upon the head. Bara entwines, entwines upon the body/spirit.'
            },
            chant: {
                lucumi: 'Ogun soro soro. Eje Ba De Karo Eje Ba Ile Kara Ro.',
                phoneticGuide: 'oh-GOON soh-roh soh-roh. eh-jeh bah deh kah-ROH eh-jeh bah EE-leh kah-rah roh.',
                translation: 'Ogun made it pour. Blood hits the mark and covers it with a circle of drops. Blood drops to the ground, the body calms.'
            },
            context: 'The blood sacrifice transforms the animal into Ogun\'s symbolic form — the leopard (ekun). The blood blocks weeping (sorrow) and prevents misfortune.',
            whenToUse: [
                'During major Ogun ceremonies requiring blood sacrifice',
                'When removing severe obstacles or enemies',
                'For protection and transformation',
                'When Ogun demands ebo through divination'
            ],
            confidence: 'medium',
            lineageNotes: [
                {
                    note: 'The actions described (tear, press down, separate) are performed on the sacrificial animal. This ritual should only be performed by trained priests.',
                    severity: 'critical'
                },
                {
                    note: 'After blood is shed, the Orisha being fed is addressed by name — e.g., "(Elegba) D\'Ekun" meaning "becomes a leopard".',
                    severity: 'info'
                }
            ]
        },
        {
            id: 'ogun-leopard-transformation',
            title: 'Ogun Leopard Transformation Formula',
            offering: 'Blood and Meat (Eje ati Eran)',
            offeringIcon: '🐆',
            openingPrayer: {
                lucumi: '(Orisha name) D\'Ekun. Eran D\'Ekun Je, Eran D\'Ekun Ye. Eje D\'Ekun, Eje D\'Ekun Ye.',
                phoneticGuide: '(oh-REE-shah) deh eh-KOON. eh-RAHN deh eh-KOON jeh, eh-RAHN deh eh-KOON yeh. eh-JEH deh eh-KOON, eh-JEH deh eh-KOON yeh.',
                translation: '(Orisha) becomes a leopard. Meat is for the leopard to eat, meat sets a trap to stop it. Blood blocks weeping, blood prevents and stops it.'
            },
            chant: {
                lucumi: 'Tear, press down, separate x2 to free from pain. Actually entwine, tear, press down, separate x2 to free from pain.',
                phoneticGuide: '(Actions performed on the animal)',
                translation: 'The ritual actions transform the sacrifice, releasing the devotee from pain and suffering.'
            },
            context: 'The leopard (ekun) is sacred to Ogun. This formula transforms the offering into Ogun\'s power form, blocking sorrow and preventing misfortune.',
            whenToUse: [
                'During blood sacrifice when Ogun is being fed',
                'After the animal has been dispatched',
                'When transforming the offering into spiritual power',
                'To block weeping and prevent misfortune'
            ],
            confidence: 'medium',
            lineageNotes: [
                {
                    note: 'Change name to the Orisha being fed — e.g., "Elegba D\'Ekun", "Shango D\'Ekun", etc.',
                    severity: 'critical'
                },
                {
                    note: 'The phrase "sets a trap to stop it" refers to stopping negative forces or sorcery.',
                    severity: 'info'
                }
            ]
        }
    ]
};

// Helper functions
export function getOrikiForOrisha(orishaId: string): OrikiEntry[] {
    return ORIKI_BY_ORISHA[orishaId.toLowerCase()] || [];
}

export function getSuyereForOrisha(orishaId: string): SuyereEntry[] {
    return SUYERE_BY_ORISHA[orishaId.toLowerCase()] || [];
}

export function getRitualsForOrisha(orishaId: string): RitualEntry[] {
    return RITUALS_BY_ORISHA[orishaId.toLowerCase()] || [];
}

export function hasOriki(orishaId: string): boolean {
    return !!ORIKI_BY_ORISHA[orishaId.toLowerCase()]?.length;
}

export function hasSuyere(orishaId: string): boolean {
    return !!SUYERE_BY_ORISHA[orishaId.toLowerCase()]?.length;
}

export function hasRituals(orishaId: string): boolean {
    return !!RITUALS_BY_ORISHA[orishaId.toLowerCase()]?.length;
}
