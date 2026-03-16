// Merindilogun (Diloggun) - 16 Cowrie Shells Oracle Data
// The traditional cowrie shell divination system of Santería

export interface MerindilogunOdu {
  id: string;
  number: number;
  name: string;
  alternateNames?: string;
  rulingOrisha: string;
  numMouthsUp: number;
  meaning: string;
  description: string;
  ire?: string; // Blessing aspect
  osobo?: string; // Obstruction aspect
  proverbs?: string[];
  ebbo?: string[]; // Ritual remedies
}

export const merindilogunOdu: MerindilogunOdu[] = [
  {
    id: 'opira',
    number: 0,
    name: 'Opira',
    alternateNames: 'None — The Dead',
    rulingOrisha: 'The Dead / Ancestors',
    numMouthsUp: 0,
    meaning: 'Absolute silence — no Orisha speaks.',
    description: 'A sign of spiritual death or extreme danger. All 16 shells fall mouth-down. This is the most ominous sign, indicating that no Orisha is willing to speak for the querent. May indicate severe spiritual blockages, curses, or that the person is spiritually "dead."',
    ire: 'None — no blessing in this Odu',
    osobo: 'Death, spiritual emptiness, complete blockage',
    proverbs: [
      'The dead do not speak',
      'Silence is its own answer'
    ],
    ebbo: [
      'Immediate spiritual cleansing required',
      'Offerings to the ancestors (Egun)',
      'Consultation with an elder Babalawo'
    ]
  },
  {
    id: 'okana',
    number: 1,
    name: 'Okana Sode',
    alternateNames: 'Okana',
    rulingOrisha: 'Elegua',
    numMouthsUp: 1,
    meaning: 'Discord, arguments, and obstacles.',
    description: 'The beginning of all things. Okana speaks of discord, arguments, and obstacles in the path. It is the first Odu to manifest, representing the primordial struggle. Elegua speaks strongly here, often indicating that offerings to him are needed to open blocked paths.',
    ire: 'Small blessings through struggle',
    osobo: 'Arguments, fights, accidents at the door',
    proverbs: [
      'One head cannot go into two houses at once',
      'Where one is, two cannot be'
    ],
    ebbo: [
      'Offerings to Elegua at the door',
      'Coconut to Eshu',
      'Red and black cloth'
    ]
  },
  {
    id: 'ejionile',
    number: 2,
    name: 'Ejionile',
    alternateNames: 'Eji Oko',
    rulingOrisha: 'Yemaya & the Ibeji (Divine Twins)',
    numMouthsUp: 2,
    meaning: 'Duality, partnerships, and conflicts between two forces.',
    description: 'Represents the duality inherent in all things: male/female, light/dark, positive/negative. The Ibeji (divine twins) speak here, as does Yemaya. This Odu concerns relationships, partnerships, and the balance between opposing forces.',
    ire: 'Blessings through partnership and children',
    osobo: 'Conflict between two people, twin-related issues',
    proverbs: [
      'Two heads are better than one',
      'Where two fight, the third wins'
    ],
    ebbo: [
      'Offerings to the Ibeji',
      'Sweet items for the children',
      'Blue and white for Yemaya'
    ]
  },
  {
    id: 'ogunda',
    number: 3,
    name: 'Ogunda',
    alternateNames: 'Ogunda',
    rulingOrisha: 'Ogun',
    numMouthsUp: 3,
    meaning: 'War, conflict, surgery: the knife that cuts both ways.',
    description: 'Ogun speaks strongly in this Odu. It represents war, conflict, and the cutting edge of the machete. Can indicate surgery, accidents with metal, or the need to "cut away" negative influences. The knife cuts both ways — healing or harming.',
    ire: 'Victory in battle, successful surgery',
    osobo: 'Accidents, wounds, surgery complications',
    proverbs: [
      'The knife does not know who owns it',
      'War brings no good to anyone'
    ],
    ebbo: [
      'Offerings to Ogun',
      'Green and black items',
      'Iron tools',
      'Palm oil'
    ]
  },
  {
    id: 'irosun',
    number: 4,
    name: 'Irosun',
    alternateNames: 'Irosun',
    rulingOrisha: 'Yemaya',
    numMouthsUp: 4,
    meaning: 'Blood lineage, family matters, and ancestral connections.',
    description: 'Irosun speaks of blood — both literal and figurative family bloodlines. It concerns ancestors, inheritance, and family matters. Yemaya as the mother speaks here about maternal lineage and the transmission of traits and conditions through blood.',
    ire: 'Strong ancestral blessings, family support',
    osobo: 'Blood diseases, family curses, inheritance issues',
    proverbs: [
      'Blood is thicker than water',
      'What is in the blood cannot be denied'
    ],
    ebbo: [
      'Offerings to Yemaya',
      'Ancestral veneration',
      'Blue and white items'
    ]
  },
  {
    id: 'oche',
    number: 5,
    name: 'Oche',
    alternateNames: 'Ose',
    rulingOrisha: 'Oshun',
    numMouthsUp: 5,
    meaning: 'Love, sweetness, fertility, and blessings of abundance.',
    description: 'Oshun speaks beautifully in this Odu. It represents love, fertility, money, and all sweet things in life. This is one of the most blessed signs, indicating that Oshun is smiling upon the querent. Matters of the heart and wallet are favored.',
    ire: 'Love, money, fertility, success',
    osobo: 'Scandal, sexual issues, overindulgence',
    proverbs: [
      'Honey attracts more flies than vinegar',
      'Sweetness conquers all'
    ],
    ebbo: [
      'Honey to Oshun',
      'Yellow and gold items',
      'Pumpkins and oranges',
      'Five sunflowers'
    ]
  },
  {
    id: 'obara',
    number: 6,
    name: 'Obara',
    alternateNames: 'Obara Meji',
    rulingOrisha: 'Shango',
    numMouthsUp: 6,
    meaning: 'Deception, lies, and the king who lost his crown.',
    description: 'Shango speaks of his downfall in this Odu. It represents deception, lies, and things that are not what they appear to be. "The king who lost his crown" refers to Shango\'s suicide after being deceived. This Odu warns of false friends and hidden enemies.',
    ire: 'Royal success, drumming blessings',
    osobo: 'Lies, deception, false friends, madness',
    proverbs: [
      'Not all that glitters is gold',
      'The king\'s crown is heavy'
    ],
    ebbo: [
      'Offerings to Shango',
      'Red and white items',
      'Amalá (okra food)',
      'Bata drums'
    ]
  },
  {
    id: 'odi',
    number: 7,
    name: 'Odi',
    alternateNames: 'Odi',
    rulingOrisha: 'Yemaya',
    numMouthsUp: 7,
    meaning: 'The grave, endings, and the cycle of death and rebirth.',
    description: 'Odi represents the grave and the womb — endings and beginnings. It is the cycle of death and rebirth. Yemaya as the cosmic mother speaks here about the container of life (womb) and the container of death (tomb). This Odu concerns fertility and mortality.',
    ire: 'Safe childbirth, safe passage',
    osobo: 'Death, infertility, blockages',
    proverbs: [
      'From the womb to the tomb',
      'Every ending is a beginning'
    ],
    ebbo: [
      'Offerings to Yemaya',
      'Blue and white items',
      'Items for fertility'
    ]
  },
  {
    id: 'ejionigbe',
    number: 8,
    name: 'Eji Ogbe',
    alternateNames: 'Ejife, Ogbe',
    rulingOrisha: 'Obatala',
    numMouthsUp: 8,
    meaning: 'The head, leadership, and ultimate blessings — the crown of Olofi.',
    description: 'The most blessed of all Odu. All 8 shells open represents perfect balance and the full opening of destiny. Obatala as the owner of the head speaks here. This Odu indicates that all things are possible, that the head is aligned with destiny.',
    ire: 'Ultimate blessings, total success, long life',
    osobo: 'Arrogance, head-related problems',
    proverbs: [
      'The head that is blessed cannot be cursed',
      'Eight is the number of perfection'
    ],
    ebbo: [
      'White cloth to Obatala',
      'White foods',
      'Silver items',
      'Thanks to Olodumare'
    ]
  },
  {
    id: 'osa',
    number: 9,
    name: 'Osa',
    alternateNames: 'Osa',
    rulingOrisha: 'Oya',
    numMouthsUp: 9,
    meaning: 'The ancestors speak — wind, spirits, and unseen forces.',
    description: 'Oya and the ancestors speak strongly in this Odu. Nine mouths open represents the winds of change and the presence of the dead. This Odu indicates that spirits are active around the querent and that Oya is bringing necessary transformation.',
    ire: 'Ancestral blessings, spiritual power',
    osobo: 'Witchcraft, sudden death, accidents',
    proverbs: [
      'The wind does not blow in vain',
      'Where the wind passes, change follows'
    ],
    ebbo: [
      'Offerings to Oya',
      'Brown and burgundy items',
      'Ancestral offerings (Egun)',
      'Wind chimes'
    ]
  },
  {
    id: 'ofun',
    number: 10,
    name: 'Ofun',
    alternateNames: 'Ofun',
    rulingOrisha: 'Obatala & Oshun',
    numMouthsUp: 10,
    meaning: 'Curses, ill intentions, and the need for deep spiritual cleansing.',
    description: 'Ofun speaks of curses and witchcraft (ogú). Both Obatala and Oshun are concerned here — the purity of Obatala and the sweetness of Oshun both threatened by negative forces. This Odu indicates spiritual contamination that requires deep cleansing.',
    ire: 'Beauty, artistry, divine sweetness',
    osobo: 'Curses, witchcraft, bad intentions',
    proverbs: [
      'Beauty covers a multitude of sins',
      'Sweetness hides the poison'
    ],
    ebbo: [
      'Deep spiritual cleansing',
      'White cloth and honey',
      'Offerings to Obatala and Oshun',
      'Herbal baths'
    ]
  },
  {
    id: 'owani',
    number: 11,
    name: 'Owani',
    alternateNames: 'Owani',
    rulingOrisha: 'Shango',
    numMouthsUp: 11,
    meaning: 'Loss, betrayal, and the corruption of once-good things.',
    description: 'Shango speaks of loss and betrayal. This Odu represents things that were once good but have been corrupted. It can indicate that something valuable is being lost or that a betrayal is imminent. The "sweet turns bitter" in this sign.',
    ire: 'Recovery from loss, new beginnings',
    osobo: 'Loss, theft, betrayal, corruption',
    proverbs: [
      'What goes up must come down',
      'The sweet eventually sours'
    ],
    ebbo: [
      'Offerings to Shango',
      'Red and white items',
      'Amalá',
      'Protection rituals'
    ]
  },
  {
    id: 'ejilashebora',
    number: 12,
    name: 'Ejila Shebora',
    alternateNames: 'Ejila',
    rulingOrisha: 'Shango',
    numMouthsUp: 12,
    meaning: 'Victory, triumph, and the warrior spirit. The last Odu of the Olorisha.',
    description: 'The final Odu that a fully initiated priest (Olorisha) receives. Shango speaks of victory and triumph. This Odu indicates that the warrior spirit will prevail and that success comes through courage and righteous action.',
    ire: 'Victory, triumph, legal success',
    osobo: 'War, legal problems, conflict',
    proverbs: [
      'Victory belongs to the brave',
      'The warrior eats first'
    ],
    ebbo: [
      'Offerings to Shango',
      'Red and white items',
      'Warrior items',
      'Thanks to Ogun'
    ]
  },
  {
    id: 'ikanran',
    number: 13,
    name: 'Ika',
    alternateNames: 'Metanla',
    rulingOrisha: 'Babalú-Ayé',
    numMouthsUp: 13,
    meaning: 'Illness origins, unexpected conditions, spiritual matters requiring deep experience.',
    description: 'Babalú-Ayé speaks of disease and its origins. This Odu concerns health issues that arise unexpectedly or from unknown causes. It indicates that deep spiritual experience is needed to resolve the matter — not a simple fix.',
    ire: 'Healing, recovery from illness',
    osobo: 'Disease, infection, skin conditions',
    proverbs: [
      'Disease enters silently',
      'The sick person knows the bed'
    ],
    ebbo: [
      'Offerings to Babalú-Ayé',
      'Brown and purple items',
      'Grains and seeds',
      'Dogs receive offerings'
    ]
  },
  {
    id: 'merinla',
    number: 14,
    name: 'Merinla',
    alternateNames: 'Otura, Oturupon',
    rulingOrisha: 'Oyá & Inle',
    numMouthsUp: 14,
    meaning: 'Transition, spiritual calling, and matters of initiation.',
    description: 'Both Oyá and Inle speak in this Odu of transitions. It concerns spiritual callings, initiations, and the process of becoming. This Odu often appears when someone is being called to the religion or to a higher level of initiation.',
    ire: 'Initiation blessings, spiritual growth',
    osobo: 'Failed initiations, transition problems',
    proverbs: [
      'The threshold is the most important part of the house',
      'Transition is transformation'
    ],
    ebbo: [
      'Offerings to Oyá and Inle',
      'Brown and blue items',
      'Initiation preparations'
    ]
  },
  {
    id: 'marunla',
    number: 15,
    name: 'Marunla',
    alternateNames: 'Marunla',
    rulingOrisha: 'Babalú-Ayé & Oyá',
    numMouthsUp: 15,
    meaning: 'Collective matters, community issues, widespread conditions.',
    description: 'Both Babalú-Ayé and Oyá speak of community-wide issues. This Odu concerns epidemics, widespread problems, or matters that affect entire groups rather than individuals. It indicates that the solution must be collective.',
    ire: 'Community healing, collective blessings',
    osobo: 'Epidemics, widespread illness, community strife',
    proverbs: [
      'When many are sick, the town is sick',
      'What affects one affects all'
    ],
    ebbo: [
      'Community offerings',
      'Offerings to Babalú-Ayé and Oyá',
      'Public cleansing ceremonies'
    ]
  },
  {
    id: 'merindilogun',
    number: 16,
    name: 'Merindilogun',
    alternateNames: 'Alafia',
    rulingOrisha: 'Olodumare (through Orunmila)',
    numMouthsUp: 16,
    meaning: 'All mouths speak — the totality of creation. Ultimate divine blessing.',
    description: 'All sixteen shells open represents the totality of creation and the ultimate blessing of Olodumare. Through Orunmila, all wisdom is accessible. This is the most complete sign, indicating that the querent has the full support of heaven.',
    ire: 'Total blessing, complete success, divine favor',
    osobo: 'None — this sign is pure blessing',
    proverbs: [
      'All mouths speak blessings',
      'When the Creator speaks, all listen'
    ],
    ebbo: [
      'Deep gratitude to Olodumare',
      'Offerings to Orunmila',
      'Green and yellow items',
      'Divination thanks'
    ]
  }
];

export const iboExplanation = {
  title: 'The Ibo System',
  description: 'In traditional Merindilogun, Odus are not inherently "good" or "bad." The Ire (blessing) or Osobo (obstruction) is determined through a separate questioning process using Ibo — sacred objects held by the querent.',
  items: [
    { name: 'Efun (Cascarilla)', meaning: 'Purity, white, positive' },
    { name: 'Ota (Black Stone)', meaning: 'Darkness, negative, obstacles' },
    { name: 'Oro (Seed)', meaning: 'Growth, potential' },
    { name: 'Aye (Cloth)', meaning: 'Covering, hidden matters' },
    { name: 'Esun (Bone)', meaning: 'Ancestral influence' },
    { name: 'Akuara (Snail)', meaning: 'Slow progress, patience' },
    { name: 'Ate (Piece of Earth)', meaning: 'Stability, foundation' },
    { name: 'Owo (Money)', meaning: 'Material concerns' }
  ]
};

export const ireTypes = [
  { id: 'aiku', name: 'Ire Aiku', meaning: 'Blessing of long life and health (The greatest blessing)' },
  { id: 'owo', name: 'Ire Owo', meaning: 'Blessing of money and material wealth' },
  { id: 'oma', name: 'Ire Oma', meaning: 'Blessing of intelligence, good logic, and children' },
  { id: 'buyoko', name: 'Ire Buyoko', meaning: 'Blessing of stability and settling down' },
  { id: 'ashegun_ota', name: 'Ire Ashegun Ota', meaning: 'Blessing of victory over enemies' },
  { id: 'elese_osha', name: 'Ire Elese Osha', meaning: 'Blessing through the Orishas' },
  { id: 'elese_egun', name: 'Ire Elese Egun', meaning: 'Blessing through the ancestors' },
  { id: 'dedewantolokun', name: 'Ire Dedewantolokun', meaning: 'Blessing from the sea or across the sea' }
];

export const osoboTypes = [
  { id: 'iku', name: 'Osobo Iku', meaning: 'Obstruction of death or endings' },
  { id: 'arun', name: 'Osobo Arun', meaning: 'Obstruction of illness or disease' },
  { id: 'ofo', name: 'Osobo Ofo', meaning: 'Obstruction of loss (material or emotional)' },
  { id: 'ejo', name: 'Osobo Ejo', meaning: 'Obstruction of tragedy, gossip, or legal trouble' },
  { id: 'iya', name: 'Osobo Iya', meaning: 'Obstruction of arguments, fights, or suffering' },
  { id: 'araye', name: 'Osobo Araye', meaning: 'Obstruction of problems with other people / enemies' },
  { id: 'elese_osha', name: 'Osobo Elese Osha', meaning: 'Obstruction brought by the Orishas (usually due to disobedience)' },
  { id: 'elese_egun', name: 'Osobo Elese Egun', meaning: 'Obstruction brought by ancestors' }
];

export const diloggunStudyGuide = [
  {
    title: 'The Merindilogun System',
    content: [
      'The Merindilogun (Diloggun) is the sacred 16-cowrie shell oracle of the Yoruba-Lucumí tradition. It is the primary divination tool used by Olorishas (crowned priests/priestesses) to communicate with the Orishas.',
      'Only those who have been fully initiated (made Ocha) and received their "ita" (life reading) are permitted to cast the Diloggun for others, though anyone can learn the philosophical principles behind the 16 Odus.'
    ]
  },
  {
    title: 'The 16 Odus',
    content: [
      'An Odu is a sacred sign or "letter" that falls when the shells are cast. Each Odu represents an entire universe of meaning: stories (patakis), proverbs, specific Orishas who speak, warnings, and blessings.',
      'The Olorisha reads the Odu by counting the number of shells that fall mouth-up (open). There are 16 possible primary Odus, from 1 mouth up (Okana) to 16 mouths up (Merindilogun).'
    ],
    subsections: [
      {
        subtitle: 'Major vs. Minor Odus',
        content: [
          'Major Odus (Meyis): 1, 2, 3, 4, 8, 10, 12, 13, 14, 15, 16. These signs are read once. They are powerful and require immediate attention.',
          'Minor Odus: 5, 6, 7, 9, 11. When a minor Odu falls, the oracle is cast a second time to create a composite sign (e.g., 5-7, Oche Odi). The first sign is the situation; the second is the modification.'
        ]
      }
    ]
  },
  {
    title: 'Ire and Osobo',
    content: [
      'No Odu is inherently purely "good" or purely "bad". The same sign can bring blessings or warnings depending on its orientation during the specific reading.',
      'Ire (Blessing): Means the querent is in alignment with their destiny and the positive aspects of the Odu are active. Usually comes with a prescription to maintain the blessing.',
      'Osobo (Obstruction/Warning): Means the querent is out of alignment. The negative aspects of the Odu are active. Ebo (sacrifice/cleansing) is required to remove the obstruction.'
    ]
  },
  {
    title: 'The Ibo Questioning',
    content: [
      'To determine whether the Odu brings Ire or Osobo, the Olorisha uses the Ibo (sacred objects). The querent holds an object in each hand, shaking them slightly. The Olorisha casts the shells again and asks questions.',
      'A "Yes" answer means the Olorisha asks for the left hand. A "No" answer means asking for the right hand. This binary system eliminates the diviner\'s bias.',
      '1. First cast: Determines the Odu.',
      '2. Second cast(s): Determines if it comes with Ire or Osobo.',
      '3. Third cast(s): Determines the specific type of Ire (e.g., wealth, long life) or Osobo (e.g., sickness, loss).',
      '4. Fourth cast(s): Determines where it comes from (e.g., from the Orishas, from a person, from one\'s own head).'
    ]
  },
  {
    title: 'Ebbó (Remedies)',
    content: [
      'Divination without Ebbó is useless. The purpose of the oracle isn\'t fortune-telling; it is diagnosis. Ebbó is the cure.',
      'Ebbó can be as simple as an herbal bath, offering fruit to an Orisha, changing a behavior, or as complex as an animal sacrifice.',
      'The Odu itself dictates what Ebbó is required to secure the Ire or remove the Osobo.'
    ]
  }
];

export const majorOdu = [1, 2, 3, 4, 8, 10, 12, 13, 14, 15, 16];
export const minorOdu = [5, 6, 7, 9, 11];
