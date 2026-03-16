// History data based on "The Osha: Secrets of the Yoruba-Lucumi-Santeria Religion" by Julio Garcia Cortez

export interface HistorySection {
  id: string;
  title: string;
  subtitle?: string;
  content: HistoryContent[];
}

export interface HistoryContent {
  heading: string;
  icon?: string;
  paragraphs?: string[];
  list?: { title: string; description: string }[];
  quote?: string;
  timeline?: { year: string; event: string }[];
  sources?: string[];
}

export const historySections: HistorySection[] = [
  {
    id: 'origins',
    title: 'Origins in Africa',
    subtitle: 'La Regla de Ocha • La Religión Lucumí',
    content: [
      {
        heading: 'The Yoruba Homeland',
        paragraphs: [
          'The Osha tradition originates from the Yoruba people of West Africa, specifically from what is now southwestern Nigeria, Benin, and Togo. The Yoruba developed a sophisticated religious system centered on the worship of Olorun (also called Olodumare) — the Supreme Creator — and a pantheon of divine intermediaries known as the Orishas.',
          'In Yorubaland, religious practice was organized around specific priesthoods, with each priest serving their individual Orisha. People would seek the help and advice of these priests, who acted as intermediaries between the divine and human realms. The sacred city of Ife (Ile-Ife) was considered the spiritual center of Yoruba civilization — the place where creation began.'
        ]
      },
      {
        heading: 'Secret Societies and Religious Structure',
        paragraphs: [
          'Yoruba religious life was structured around several important societies:',
          'These societies preserved religious knowledge, maintained ethical standards, and ensured the continuity of spiritual traditions across generations. They would later provide the organizational framework for Osha communities in the Americas.'
        ],
        list: [
          { title: 'The Gelede Society', description: 'Honored the power of elderly women and female ancestors' },
          { title: 'The Ogboni Society', description: 'A council of elders who maintained social order and spiritual balance' },
          { title: 'The Egungun Society', description: 'Facilitated communication with ancestors through masked rituals' },
          { title: 'The Oshe Society', description: 'Connected to Shango worship and royal authority' }
        ]
      },
      {
        heading: 'Cosmology and Beliefs',
        paragraphs: [
          'Central to Yoruba cosmology is the concept of Ashé (or Aché) — the sacred life force that permeates all things, both living and non-living. This divine energy flows from Olodumare through the Orishas to humanity. The Orishas are not merely deities but forces of nature with distinct personalities, preferences, colors, numbers, and domains of influence.',
          'The creation myth tells how Olodumare created the world and humanity, delegating specific responsibilities to each Orisha. Obatala, the eldest Orisha, was tasked with creating human bodies, while Eshu-Eleggua serves as the divine messenger who opens and closes all paths.'
        ]
      }
    ]
  },
  {
    id: 'cuba',
    title: 'In Cuba',
    subtitle: 'Survival and Adaptation',
    content: [
      {
        heading: 'The Middle Passage and Enslavement',
        paragraphs: [
          'Yoruba religious traditions survived the brutal transatlantic slave trade through the determination of enslaved Africans who carried their spiritual knowledge in their hearts. In Cuba, they found themselves in a Catholic colony where their religion was officially suppressed but could be practiced in secret.',
          'The colonial Cuban system of slavery was particularly harsh, with enslaved people working on sugar plantations under brutal conditions. Despite this, they maintained their spiritual practices, often disguising Orishas as Catholic saints — a process that would become known as syncretism.'
        ]
      },
      {
        heading: 'Cabildos and Religious Preservation',
        paragraphs: [
          'Enslaved Africans in Cuba organized themselves into Cabildos — mutual aid societies based on ethnic origin. These Cabildos became crucial for preserving Yoruba religion, language, and culture. The Cabildo Shangó Tato, for example, was founded in Havana in the early 19th century and became a center for Shango worship.',
          'The Cabildo Yemayá was co-founded in Regla in 1866 by Adeshina, Anabi, and Atanda — all important figures in preserving the religion. These organizations provided a legal framework for gathering and allowed religious traditions to be passed down through generations.'
        ]
      },
      {
        heading: 'Syncretism with Catholicism',
        paragraphs: [
          'To survive in a Catholic colony, the Orishas were disguised as Catholic saints. This was not merely deception but a spiritual strategy — the Orishas were seen as expressing themselves through the Catholic figures.',
          'Shangó, the thunder deity, became identified with Santa Bárbara (Saint Barbara), who is also associated with lightning and is depicted with a crown and sword. Yemayá, the ocean mother, was syncretized with the Virgen de Regla (Our Lady of Regla), depicted with a blue cloak.',
          'This syncretism allowed practitioners to honor their Orishas openly while appearing to worship Catholic saints. Over time, this created a unique religious synthesis that characterizes Cuban Osha to this day.'
        ]
      }
    ]
  },
  {
    id: 'pillars',
    title: 'Pillars & Founders',
    subtitle: 'The Three Matriarchs of Cuban Ocha',
    content: [
      {
        heading: 'Historical Timeline',
        quote: '"Efunché laid the foundation, and Latuán built the house." These three women — Ma Monserrate, Efunché, and Latuán — are the pillars upon which Cuban Ocha was built.',
        timeline: [
          { year: 'c. 1804', event: 'Efunché Warikondó born in Yorubaland (likely Oyo)' },
          { year: 'c. 1805', event: 'Ma Monserrate González born in Egbado, Yorubaland' },
          { year: 'c. 1844', event: 'Timotea "Latuán" Albear born in Africa (likely Oyo region)' },
          { year: '1863', event: 'Latuán arrives in Cuba (July 12); ship intercepted by British. Placed with Albear household' },
          { year: 'c. 1864', event: 'First documented full kariocha in Cuba — linked to Josefa "Pepa" Herrera (Eshubí), in Ma Monserrate\'s world' },
          { year: '1866', event: 'Cabildo Yemayá co-founded in Regla by Adeshina, Anabi, and Atanda' },
          { year: '1873', event: 'Ma Monserrate moves from Havana to Matanzas (drumming permit dated Dec 6, 1873 — Changó\'s day)' },
          { year: '1873–1915', event: 'Latuán\'s period of major ritual activity as Efunché\'s principal oriaté in Havana' },
          { year: '1886', event: 'Slavery officially abolished in Cuba' },
          { year: 'c. 1903', event: 'Efunché Warikondó dies. Havana becomes "Latuán\'s city"' },
          { year: 'c. 1907', event: 'Ma Monserrate dies in Matanzas, reportedly over 100 years old' },
          { year: '1935', event: 'Latuán dies on February 5; death certificate records age 90. Buried in Colón cemetery' }
        ]
      },
      {
        heading: 'Cross-References Between Sources',
        paragraphs: [
          'All three accounts reference the same foundational network of people and events. Key points that appear across multiple independent sources:'
        ],
        list: [
          { title: 'The Havana vs. Matanzas divergence', description: 'is confirmed in all three transcripts and validated by scholarly research (Willie Ramos, David H. Brown)' },
          { title: 'Efunché and Latuán\'s partnership', description: 'is consistently described across all sources — "Efunché laid the foundation, Latuán built the house"' },
          { title: 'The 1873 date', description: 'for Ma Monserrate\'s Matanzas move appears in two transcripts and is supported by Willie Ramos\'s documentation of a drumming permit' },
          { title: 'No photographs of Efunché or Latuán', description: 'are known to exist — a sharp contrast with Ma Monserrate, Adeshina, and Fermina Gómez, whose images have survived' },
          { title: 'The Albear surname', description: 'is traced to Colonel Francisco Albear y Lara\'s household — confirmed by UNESCO heritage records and multiple research sources' }
        ]
      },
      {
        heading: 'Sources & Bibliography',
        sources: [
          'Ramos, Miguel "Willie". Orí Eledá Mí Ó… If My Head Does Not Sell Me (2011)',
          'Brown, David H. "Santería Enthroned: Art, Ritual, and Innovation in an Afro-Cuban Religion"',
          'Eyiogbe, Frank Baba. "Babalawo: The Secrets of Afro-Cuban Ifa"',
          'Cabrera, Lydia. El Monte and related works on Afro-Cuban religion',
          'YouTube channel: Santo El (Lucumí history video series)',
          'EcuRed, OrishaNet, and santeriachurch.org historical databases'
        ]
      }
    ]
  },
  {
    id: 'americas',
    title: 'In the Americas',
    subtitle: 'Expansion Beyond Cuba',
    content: [
      {
        heading: 'Migration to the United States',
        paragraphs: [
          'Osha came to the United States primarily through Cuban immigration, beginning in the late 1950s and accelerating after the Cuban Revolution in 1959. The first wave consisted mainly of professional classes fleeing the Castro regime. In 1980, the Mariel boatlift brought approximately 125,000 Cubans, including substantial numbers of Osha practitioners — and, according to the faithful, the Orishas who followed their priests.',
          'Miami became the primary center of Osha in the United States. As author Julio Garcia Cortez notes: "It is said that in Miami alone, someone is vested almost every day of the week." The religion also took root in New York City, particularly among Cuban, Puerto Rican, and Dominican communities.'
        ]
      },
      {
        heading: 'From Secret Practice to Legal Recognition',
        paragraphs: [
          'For much of its history in the United States, Osha operated in secrecy due to discrimination and misunderstanding. Practitioners faced prejudice and legal challenges, particularly regarding animal sacrifice — a core ritual component where offerings (usually chickens) are made to nourish the Orishas.',
          'A landmark moment came with the Church of the Lukumi Babalu Aye v. City of Hialeah Supreme Court case (1993), which established that animal sacrifice in religious ceremonies is protected under the First Amendment\'s Free Exercise Clause. This legal recognition marked a turning point, allowing Osha to practice more openly.'
        ]
      },
      {
        heading: 'Shangóization and Religious Development',
        paragraphs: [
          'In Cuba, Osha underwent a process scholar David Brown calls "Shangóization" — the reorganization of various Orisha initiation rites along the model of Shangó\'s royal installation. As Calixta Morales, a senior elder, told folklorist Lydia Cabrera: "To make an orisha is to make a king."',
          'Devotees of Obatalá, Yemayá, Oshún, Oya, and others are all initiated according to rites modeled on Shangó\'s tradition. The initiate is seated on Shangó\'s mortar throne and called "iyawó" (bride) of the Orisha. This concept of initiation as royal installation reflects the power of Shangó traditions to shape the broader religious practice in the diaspora.'
        ]
      }
    ]
  },
  {
    id: 'women',
    title: 'Women Oriates',
    subtitle: 'The Invisible Chapter',
    content: [
      {
        heading: 'The Invisible Chapter',
        quote: '"Before the title of Oriate was monopolized by men, they — the Iya — were the ones who threw the snail, those who consecrated, and those who commanded the keys." — Eng Randy',
        paragraphs: [
          'In the history of Cuban Santería, there is one chapter that has been systematically invisible: that of women who exercised as maximum ritual authorities. Before the title of Oriate was monopolized by men, they — the Iya — were the ones who threw the snail, those who consecrated, and those who commanded the keys.',
          'These women were Obasas (or better said, Ayagba) in their communities. They were mothers, they were priests, they were Africa\'s living memory in Cuba. They had the ability to see in the snail what others couldn\'t.',
          'Note on Sources: These names come from oral tradition, lineage histories, and academic research. Some names have been verified in scholarly sources (such as works by María Margarita Castro Flores and others), while others exist primarily in oral tradition.'
        ]
      },
      {
        heading: 'The Great Consultants and Oriates',
        paragraphs: [
          'Women like these were the first to hold the board:'
        ],
        list: [
          { title: 'Delia Malecón', description: 'Omi Toke' },
          { title: 'Susana Cantero', description: 'Omí Toké — Created "La Rama del Coral" branch' },
          { title: 'Rosa Menendez', description: 'Omi Toke — Great Awo who carried the word of the saints' },
          { title: 'Fermina Gómez Pastrana', description: 'Osha Bi (1844-1950) — First to receive Olokun in Cuba' },
          { title: 'Guillermina Castel', description: 'Oshun Kayodé' },
          { title: 'María Cira Cabello', description: 'Ogun Sale — "Consulted with a snail and made ebo"' },
          { title: 'Pascuala Cuesta', description: 'Odu Bi' },
          { title: 'Carmen Miro', description: 'Ewin Leti — appears twice in historical records' },
          { title: 'Rosa la Africana', description: 'Oggún Fumito — Verified in academic sources' },
          { title: 'Calixta Morales', description: 'Odedei — Verified in academic sources' }
        ]
      },
      {
        heading: 'The Women of Shangó and Obatalá',
        paragraphs: [
          'Timotea Albear (Latuan) deserves a separate paragraph. She didn\'t just "have" Shangó: she was supreme authority and teacher of the first male Oriates. Her legacy lives on in every ceremony well done.',
          'Women who held direct connection with the owner of the head:'
        ],
        list: [
          { title: 'Abita', description: 'Olo Obatala' },
          { title: 'Asha Ade', description: 'Olo Odua' },
          { title: 'Ashiyu Lila', description: 'Olo Obatala' },
          { title: 'Ambiro Teran', description: 'Olo Obatala' },
          { title: 'Etma Teran Sanchez', description: 'Oshun Yemi — Mother and daughter tradition' }
        ]
      },
      {
        heading: 'Daughters of Oshun: Sweetness That Rules',
        paragraphs: [
          'Oshun isn\'t just a flirt shop. It\'s the river that rules everything. This is why these women were so important — all with river names, all with belt power and snail.'
        ],
        list: [
          { title: 'Camila Oviedo', description: 'Oshun Funke' },
          { title: 'Josefina Aguirre', description: 'Oshun Nike' },
          { title: 'Josefina Beltran', description: 'Oshun Guere' },
          { title: 'La Chinita Estevez', description: 'Oshun Miwa' },
          { title: 'Juana Valdéz', description: 'Ochun Funke' },
          { title: 'Pastor Vigo', description: 'Olo Oshun — Owner of Oshun' },
          { title: 'Joan Maria Montes de Oca', description: 'Oshainle — "The Girl" of deep wisdom' }
        ]
      },
      {
        heading: 'Those Who Consolidated Religion',
        list: [
          { title: 'Ña Rosalía Abreu', description: 'Efunshe Warikondo (Victoria) — Reformer who innovated ceremonies' },
          { title: 'Ma Monserrat González', description: 'Obatero — "If as oriate" — she worked as such' },
          { title: 'Calixta Morales', description: 'Odedei — "Great awpon" (exceptional singer)' }
        ]
      },
      {
        heading: 'Those We Must Never Forget',
        paragraphs: [
          'Each name is a link in the chain:'
        ],
        list: [
          { title: 'Guadalupe Estable', description: '' },
          { title: 'Francisca Estenza', description: '' },
          { title: 'Ña Francisca Olomide', description: '' },
          { title: 'Mercedes Castillo', description: 'Oye Yei' },
          { title: 'Tomasa García', description: 'Ala Agayu' },
          { title: 'Matilde Puntilla', description: 'Omi Yale' },
          { title: 'Damiana Acosta', description: 'Oñikefun' },
          { title: 'Rosario Diego Allestaran', description: 'Towa' },
          { title: 'Isabel Rodríguez', description: 'Ogun Deyi' }
        ]
      },
      {
        heading: 'Why Is It Important to Name Them',
        paragraphs: [
          'Because for decades, history was written by others. Because when it\'s said that "women can\'t do anything" in religion, we\'re lying to these 31 (and so many more). They were Obasas or better said Ayagba in their communities. They were mothers, they were priests, they were Africa\'s living memory in Cuba.',
          'May their names not be just letters on a list. Let them be summoned. Let them be respected. 🔥🌊🐚',
          'Author: Eng Randy'
        ]
      }
    ]
  },
  {
    id: 'today',
    title: 'Today',
    subtitle: 'Global Practice',
    content: [
      {
        heading: 'Global Practice',
        paragraphs: [
          'Today, Osha (also known as Santería, La Regla de Ocha, or La Religión Lucumí) is practiced throughout the Americas and beyond. Estimates of practitioners in the United States range from 1 million core members to as many as 5 million including those who consult the religion. Major centers include Miami, New York, Los Angeles, and Chicago.',
          'The religion has spread beyond Cuban communities to include Puerto Ricans, Dominicans, African Americans, and white Americans. It maintains a strong presence not only in the United States but also in Venezuela, Puerto Rico, the Dominican Republic, and has even returned to influence religious practice in Nigeria.'
        ]
      },
      {
        heading: 'Continuing Traditions',
        paragraphs: [
          'Contemporary Osha practice preserves core traditions:'
        ],
        list: [
          { title: 'Divination', description: 'Using the Diloggun (cowrie shells), Obi (coconut), and Ifá (oracle)' },
          { title: 'Initiation', description: 'The "making of the saint" (kariocha) where devotees are crowned with their guardian Orisha' },
          { title: 'Ebbó and Offerings', description: 'Sacrifices, cleansings, and ritual prescriptions to maintain spiritual balance' },
          { title: 'Bata Drumming', description: 'Sacred rhythms that call the Orishas to possess their devotees' },
          { title: 'Ancestor Veneration', description: 'Honoring the Egun (ancestors) who guide and protect' },
          { title: 'Herbal Medicine', description: 'Using sacred plants (ewe) for healing and ritual purposes' }
        ]
      },
      {
        heading: 'Names and Identity',
        paragraphs: [
          'The religion is known by several names, reflecting its complex history:',
          'As scholar Miguel "Willie" Ramos explains, "Lucumí" may have originated as a Yoruba greeting "oluku mi" (my friend), used by enslaved persons to identify each other in Cuba. The term came to represent not just a language but an entire cultural and religious identity.',
          'Whether called Osha, Lucumí, or Santería, the tradition continues to provide spiritual guidance, healing, and community for millions across the Americas — a testament to the resilience and power of African religious heritage in the New World.'
        ],
        list: [
          { title: 'La Regla de Ocha', description: '"The Rule of the Orishas" (preferred by many practitioners)' },
          { title: 'La Religión Lucumí', description: '"The Lucumí Religion" (referencing the Yoruba heritage)' },
          { title: 'Osha', description: 'Shortened form of Ocha' },
          { title: 'Santería', description: 'Originally a derogatory Spanish term meaning "worship of the saints," now accepted by some but rejected by others' }
        ]
      }
    ]
  }
];

export const founders = [
  {
    initial: 'M',
    name: 'Ma Monserrate González',
    title: 'Obá Teró • Apóto',
    dates: 'c. 1805–1907',
    origin: 'Egbado → Havana → Matanzas',
    description: 'Known as "Obá Teró" and "Apóto," Ma Monserrate was born in Egbado around 1805. She moved from Havana to Matanzas in 1873 (on Changó\'s day), establishing the Matanzas lineage that would differ significantly from the Havana tradition. She lived over 100 years and her photographic image has survived, unlike Efunché or Latuán.'
  },
  {
    initial: 'E',
    name: 'Efunché Warikondó',
    title: 'Ña Rosalía',
    dates: 'c. 1804–1903',
    origin: 'Yoruba-born (likely Oyo) → Havana',
    description: 'Born around 1804 in Yorubaland (likely the Oyo region), Efunché Warikondó was known as "Ña Rosalía." She laid the foundational groundwork for Cuban Ocha in Havana. No known photographs exist of her, but her influence through her principal oriaté Latuán shaped the Havana tradition for decades.'
  },
  {
    initial: 'L',
    name: 'Timotea "Latuán" Albear',
    title: 'Ayaí Leú',
    dates: 'c. 1844–1935',
    origin: 'Oyo, Nigeria → Havana',
    description: 'Born around 1844 in Africa (likely Oyo, Nigeria), Latuán arrived in Cuba on July 12, 1863 when her slave ship was intercepted by the British. Placed with the Albear household (taking their surname), she became Efunché\'s principal oriaté and the supreme teacher of the first male Oriates. "Efunché laid the foundation, Latuán built the house." She died February 5, 1935 at age 90.'
  }
];
