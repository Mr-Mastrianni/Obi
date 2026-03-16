// Orishas data based on "The Osha" by Julio Garcia Cortez — Chapter 4: The Orishas & Chapter 7: Vestment
import { Orisha } from '../types';

export const orishas: Orisha[] = [
  {
    id: 'olorun',
    number: 'Infinite',
    name: 'Olorun / Olodumare',
    domain: 'The Supreme God, Creator of the Universe',
    description: 'Olorun (also called Olodumare) is the Supreme Creator, the source of all Ashé (divine energy). Not worshipped directly through possessions or offerings like other Orishas, but acknowledged as the ultimate power above all.',
    colors: ['White', 'Gold'],
    numberSymbol: 'Infinite',
    numPaths: 0,
    symbol: 'The Sky',
    attributes: [
      'Supreme deity above all Orishas',
      'Source of all Ashé (sacred life force)',
      'Too vast to be contained in material objects',
      'Not directly consulted in divination',
      'The ultimate destination of all prayers'
    ],
    sacredObjects: [
      'No material representations',
      'The sky itself',
      'White cloth as symbolic offering'
    ],
    legend: {
      title: 'The Source of All Ashé',
      content: 'Before creation, there was only Olodumare — infinite, eternal, and self-existing. Olodumare possessed all Ashé (divine power) and decided to create the universe. Rather than creating directly, Olodumare sent the Orishas to finish the work of creation, giving each a portion of Ashé. To this day, all power flows from Olodumare, and all prayers must ultimately reach the Supreme Source.'
    },
    legendMoral: 'All power comes from a single divine source; we are all connected to the infinite.',
    source: 'Garcia Cortez, J. (2020). The Osha: Secrets of the Yoruba-Lucumí-Santería. Chapter 4.'
  },
  {
    id: 'eshu',
    number: '3',
    name: 'Eshu-Eleggua',
    alternateNames: 'Elegua, Elegba',
    domain: 'Crossroads, Messenger, Trickster, Opener of Paths',
    description: 'Eshu-Eleggua is the divine messenger, the trickster, and the owner of all crossroads. He opens and closes all paths — without his permission, no Orisha can come to Earth. He is the first and last Orisha to be honored in all ceremonies.',
    colors: ['Red', 'Black'],
    beads: 'Red and Black',
    numberSymbol: '3',
    numPaths: 5,
    syncretizedWith: 'Holy Child of Atocha, St. Anthony of Padua',
    symbol: 'Cayente',
    attributes: [
      'Owner of all crossroads and paths',
      'Divine messenger between humans and Orishas',
      'Trickster who teaches through trials',
      'First honored in all ceremonies',
      'Protector of the home entrance'
    ],
    sacredObjects: [
      'Cayente (tool with three small balls)',
      'Garabato (hooked staff)',
      'Red and black beads',
      'Coconut used in divination',
      'Small cement head (otá)'
    ],
    legend: {
      title: 'The Owner of the Crossroads',
      content: 'When Olodumare created the world, all the Orishas descended to Earth except Eshu, who remained at the crossroads between heaven and Earth. Olodumare told the Orishas: "Without Eshu, nothing can be accomplished." The Orishas ignored this and tried to work without him, but nothing succeeded. They finally acknowledged Eshu, made him the first to receive offerings, and from that day, no ceremony could begin without first honoring Eshu-Eleggua.'
    },
    legendMoral: 'Never neglect the messenger or the crossroads — beginnings and communication are sacred.',
    paths: [
      { name: 'Eshu Batieyo', description: 'The one who walks the streets' },
      { name: 'Eshu Lele', description: 'The playful trickster' },
      { name: 'Eshu Bara-Lye', description: 'The owner of the sacred rock' },
      { name: 'Eshu Aba-Nuke', description: 'The one who touches the crown' },
      { name: 'Eshu Male', description: 'The farmer of the earth' }
    ],
    pataki: {
      title: 'The Divine Trickster and the Two Friends',
      content: [
        'Two men, sworn to be friends forever, lived on adjacent farms. They vowed never to let anything come between them, yet neither had thought to honor Eshu-Eleggua before making this vow.',
        'Determined to prove that no human promise is absolute without divine sanction, Eshu painted one side of his body white and the other side black. He put on a hat that was pointed on both ends and walked along the exact border dividing the two farms.',
        'Later that evening, the two friends met. One said, "Did you see that strange old man who walked by today in the white suit?"',
        '"A strange man did pass," replied the second friend, "but his suit was black, not white."',
        '"Nonsense! I saw him clearly against the sunlight. He was dressed entirely in white!" the first man insisted.',
        '"Are you calling me a liar? The man was in black!" the second yelled.',
        'The argument escalated into a physical fight, effectively ending their lifelong friendship. As they lay bruised on the ground, Eshu appeared before them. "You were both right," he laughed, turning around to show his bifurcated colors. "But because you forgot to honor the master of crossroads and perspectives, you allowed your rigid views to destroy your bond."'
      ]
    },
    additionalPatakis: [
      {
        title: 'How Eleggua Gained the Keys to the World',
        content: [
          'When Olodumare was severely ill, none of the older, more respected Orishas could find a cure. Orunmila consulted the oracle, Obatala prepared cool remedies, and Osain searched the deep forest, but nothing worked.',
          'Young Eleggua, considered just a mischievous boy by the others, gathered a specific mixture of herbs and approached Olodumare. The elders tried to block him, but he slipped past their guard and administered the medicine.',
          'Olodumare was instantly cured. Overjoyed, the Supreme Creator granted Eleggua a profound reward: the keys to all doors in the universe. "From this day forward," Olodumare decreed, "no door shall open without your permission, and no Orisha shall receive an offering before you."'
        ]
      }
    ],
    throne: {
      description: 'Eleggua\'s throne (igbodu) is typically placed near the entrance of the house, often behind the front door. It is designed to look like a crossroads, a forest path, or a playful child\'s domain depending on his specific path.',
      items: [
        'A red and black mat or cloth',
        'His otá (sacred stone or cement head with cowrie shell eyes and mouth)',
        'A garabato (hooked guava stick)',
        'A clay dish (cazuela)',
        'Toys, marbles, and a top (trompo) for his child paths',
        'Coins and candies',
        'A cigar and a small bottle of rum (aguardiente)'
      ],
      setup: [
        'Eleggua must be seated on the floor or on a low shelf near the floor, never to be elevated above other Orishas.',
        'His space must be kept clean but slightly chaotic, reflecting his nature.',
        'Offerings should be placed directly in his clay dish or scattered around his mat.'
      ]
    },
    feedingRituals: [
      {
        name: 'The Weekly Greeting (Feeding the Path)',
        offerings: ['Cool water (omi tutu)', 'Aguardiente (rum)', 'Cigar smoke', 'Candies', 'Toasted corn (eku)', 'Smoked fish (eja)', 'Smoked jutía (awado)'],
        openingPrayer: 'Omi tutu, ana tutu, tutu laroye, tutu ile, tutu ariku babawa.',
        chant: 'Eshu, Eshu, Eshu Alawana. Eshu, Eshu, Eshu Laroye.',
        context: 'This is the basic, required weekly attention given to Eleggua, typically performed every Monday morning before the spiritual worker begins their week.',
        whenToUse: 'Every Monday morning, or before beginning any magical work or divination.'
      }
    ],
    sacrificeRituals: [
      {
        name: 'Opening the Heavy Door (Blood Offering)',
        offerings: ['One rooster (akuko) or one male goat (ounko)', 'Red palm oil (epo)', 'Honey (oñi)', 'Aguardiente'],
        openingPrayer: 'Eleggua, mo pe o. I call upon you. Accept this life to bring life, accept this blood to clear my path.',
        chant: 'Eleggua, baralayiki, ago.',
        context: 'A formal sacrifice performed only when a major obstacle is completely blocking the querent\'s path, or during initiation ceremonies. This requires a priest (babalawó or santero).',
        whenToUse: 'When divination explicitly calls for an animal sacrifice to remove a severe Osobo (obstruction).'
      }
    ],
    oriki: [
      {
        lucumi: 'Eshú, baralaiki. Omo ni kúrú, omo ni kúrú. Eleguá, Alayiki, ago, ago.',
        phonetic: 'Eh-shoo, bah-rah-lai-yee-kee. Oh-moh nee koo-roo... Eh-leh-gwah, Ah-lai-yee-kee, ah-go, ah-go.',
        translation: 'Eshu, the one who brings things to light. Child of the short one, child of the short one. Elegua, the great one, make way, make way.',
        context: 'Recited when approaching his shrine or when beginning a consultation.'
      }
    ],
    suyere: [
      {
        lucumi: 'Eleguá, ago. Eleguá, ago. Ibarakou, moyuba, Eleguá, ago.',
        phonetic: 'Eh-leh-gwah, ah-go. Eh-leh-gwah, ah-go. Ee-bah-rah-koh-oo, moh-yoo-bah, Eh-leh-gwah, ah-go.',
        translation: 'Elegua, make way. Elegua, make way. Powerful one, I pay homage, Elegua, make way.',
        context: 'The primary song used to open a drumming ceremony (bembé) or when bringing his offerings.'
      }
    ],
    makuto: {
      description: 'The "carga" or sacred load hidden within the cement head of Eleggua. This is what truly gives the object its Ashé and brings the Orisha\'s energy into the vessel.',
      ingredients: [
        'A specific otá (stone) asked to Eshu',
        '21 cowrie shells',
        '3 types of pepper (ataare, iwerejeje)',
        'Dirt from 7 crossroads',
        'Dirt from a bank, a police station, and a church',
        'Gold and silver scrap',
        'Various woods (palos) designated for his path'
      ],
      procedure: [
        'The babalawo determines the path of Eleggua through divination.',
        'The specific ingredients are gathered based on that path.',
        'The otá is washed in omiero (sacred herbal water).',
        'The ingredients are sealed within cement, shaping it into a head.',
        'The cowries are pressed in to form the eyes, ears, and mouth.',
        'The finished vessel must be "birthed" through sacrifice.'
      ]
    },
    bushCeremony: {
      description: 'The consecration of Eleggua in the wilderness before bringing him to his throne.',
      steps: [
        'Take the newly constructed vessel to a crossroads in the woods or bush (nigua).',
        'Dig a small hole and place the vessel inside.',
        'Offer a small chick or pigeon, letting the blood touch the vessel and the earth.',
        'Leave it overnight with three pennies.',
        'Retrieve it at dawn before the sun fully rises, wrapping it in red and black cloth.'
      ],
      notes: [
        'This connects the vessel to the actual, wild energy of the crossroads.',
        'Never look back when leaving the vessel overnight.'
      ]
    },
    source: 'Garcia Cortez, J. (2020). The Osha: Secrets of the Yoruba-Lucumí-Santería. Chapter 4.'
  },
  {
    id: 'obatala',
    number: '8',
    name: 'Obatala',
    alternateNames: 'Obatalá, Orishanla',
    domain: 'Creation, Purity, Wisdom, Elder of the Orishas',
    description: 'Obatala is the eldest of the Orishas, the deity of creation, purity, and wisdom. He was tasked by Olodumare to create human bodies, and he represents clarity, patience, and righteousness. He is the father figure of the pantheon.',
    colors: ['White'],
    beads: 'White',
    numberSymbol: '8',
    numPaths: 13,
    syncretizedWith: 'Our Lady of Mercy, Jesus Christ',
    symbol: 'White cloth',
    attributes: [
      'Eldest of the Orishas',
      'Creator of human bodies',
      'Represents purity and moral uprightness',
      'Patience and cool-headedness',
      'Father figure to all Orishas'
    ],
    sacredObjects: [
      'White beads only',
      'White cloth (manto)',
      'Irukere (white horse tail switch)',
      'Silver items',
      'Cocoa butter (ori)'
    ],
    pataki: {
      title: 'The Snail Shell and the Chain',
      content: [
        'At the dawn of time, there was only water and sky. Olodumare, the Supreme Being, called upon Obatala to descend and create solid ground.',
        'Obatala prepared a long silver chain, a snail shell filled with sacred sand, a five-toed hen, and a black cat. He descended from the heavens on the chain, but it was not long enough to reach the waters.',
        'Obatala reached down and poured the sand from the snail shell onto the water. He then released the hen, which began to scratch and scatter the sand in all directions, creating the first continents and islands of the Earth.',
        'He settled on the new land with his cat for company. He began to mold the clay into the shapes of humans, but the work was slow and the sun was hot. Overcome by thirst, he discovered a palm tree and drank its wine until he fell into a deep sleep.',
        'While he slept, his brother Oduduwa finished the task of creation. When Obatala awoke and saw the humans his brother had made, he vowed never to drink palm wine again and took on the responsibility of molding the heads of all future children, ensuring each was a unique creation of the divine.'
      ]
    },
    additionalPatakis: [
      {
        title: 'Obatala and the Disfigured Children',
        content: [
          'In his state of intoxication from the palm wine, Obatala\'s hands began to shake while he molded the clay. He unwittingly created people with various physical and mental challenges.',
          'When he regained his senses and saw the suffering his errors had caused, he was filled with profound sorrow. He declared himself the protector of all those with physical or mental disabilities, calling them his "especiales" (special ones).',
          'To this day, followers of Obatala are strictly forbidden from drinking palm wine or any alcohol, and they are charged with the sacred duty of showing the utmost kindness and protection to those whom the world might consider imperfect, for they are the children of Obatala\'s own sorrow and redemption.'
        ]
      }
    ],
    throne: {
      description: 'Obatala\'s shrine is a pure white ceramic or porcelain tureen (sopera), always kept in a high, elevated position, reflecting his status as the elder and king of the head.',
      items: [
        'A pure white porcelain sopera',
        'His otá (a smooth white stone from the river or mountain)',
        '16 sacred cowrie shells (Diloggun)',
        'A silver bell (Agogo Obatala) used to wake him',
        'An Irukere (white horse tail switch) representing authority',
        'Pieces of ivory, bone, or white marble',
        'A scepter made of silver or white metal'
      ],
      setup: [
        'Obatala must be placed on the highest shelf of the carrier (canastillero).',
        'His space must be draped in pure white lace or silk.',
        'The sopera is often filled with cotton (algodón) to keep his stones "cool" and protected.',
        'No salt, palm oil, or alcohol should ever come near his throne.'
      ]
    },
    feedingRituals: [
      {
        name: 'The Cooling of the Head (Rogación de Cabeza)',
        offerings: ['Cocoa butter (ori)', 'Husk powder (efun)', 'Fresh coconut water', 'White cotton', 'White flowers'],
        openingPrayer: 'Obatala, bami o. Cool my head, cool my path, bring peace to my heart.',
        chant: 'Baba Fururu, ere reo. Okañeñe, eleribo, eleri afon, gba ni gba.',
        context: 'A ritual performed to align the person\'s Ori (destiny) and calm the mind when it is clouded by anger or confusion.',
        whenToUse: 'When a person is experiencing mental distress, high blood pressure, or a spiritual "heat" that causes bad decision making.'
      }
    ],
    sacrificeRituals: [
      {
        name: 'The White Offering',
        offerings: ['White hen (adié funfun)', 'White pigeon (eyelé)', 'Cocoa butter', 'Husk powder', 'Rice without salt'],
        openingPrayer: 'Baba, accept this white life to preserve white peace. Let your coolness reign.',
        chant: 'Eyelé ife, Obatala eyelé ife.',
        context: 'A sacrifice to remove a grave illness or a violent curse (ikú). These offerings must be entirely "white" and devoid of blood on the outside of the vessel if possible, often handled with extreme delicacy.',
        whenToUse: 'When divination indicates a need for Obatala\'s direct intervention to settle a war or heal a terminal condition.'
      }
    ],
    oriki: [
      {
        lucumi: 'Obatalá, kà bièsí. Baba gbogbo lú. Orisànlá, alámorere, a-shaka-shiki, a-shaka-shiki.',
        phonetic: 'Oh-bah-tah-lah, kah bee-eh-see. Bah-bah gboh-gboh loo. Oh-ree-shahn-lah...',
        translation: 'Obatala, the king who is questioned by no one. Father of all the world. Great Orisha, owner of the best clay, the one who creates with great care.',
        context: 'Used as the primary greeting when opening his sopera or entering his presence.'
      }
    ],
    suyere: [
      {
        lucumi: 'Baba Fururu, erere-o. Okanñeñe, eleribo, eleri afon, gba ni gba.',
        phonetic: 'Bah-bah Foo-roo-roo, eh-reh-reh-oh. Oh-kahn-nyeh-nyeh...',
        translation: 'Father who flies like a white bird. Compassionate one, king of the head, accept our greeting.',
        context: 'The most sacred song for Obatala, used to bring down his peaceful energy during a ceremony.'
      }
    ],
    source: 'Garcia Cortez, J. (2020). The Osha: Secrets of the Yoruba-Lucumí-Santería. Chapter 4 & 7.'
  },
  {
    id: 'oshun',
    number: '5',
    name: 'Oshun',
    alternateNames: 'Oshún, Osun',
    domain: 'Rivers, Love, Fertility, Money, Beauty, Sweetness',
    description: 'Oshun is the Orisha of rivers, love, fertility, and sweetness. She represents the joy of life, sensuality, and feminine power. Oshun is the youngest daughter of Obatala and is often considered his favorite. She governs the fresh waters of the world — rivers, streams, and lakes.',
    colors: ['Yellow', 'Gold', 'Amber'],
    beads: 'Yellow and Gold',
    numberSymbol: '5',
    numPaths: 7,
    syncretizedWith: 'Virgen de la Caridad del Cobre',
    symbol: 'Fan',
    attributes: [
      'Orisha of rivers and fresh waters',
      'Governs love, fertility, and feminine power',
      'Associated with money, luxury, and beauty',
      'Sweetest of the Orishas',
      'Without her, no Orisha can bring abundance',
      'Sister to Yemaya and wife of Shango'
    ],
    sacredObjects: [
      'Yellow and gold beads',
      'Fan (abebe)',
      'Mirror',
      'Sunflowers',
      'Yellow ceramic bowl',
      'Honey, pumpkins, oranges, cinnamon as offerings',
      'Brass and gold objects'
    ],
    pataki: {
      title: 'Oshun and the Peacock\'s Feathers',
      content: [
        'In a time of great drought, the earth was parched and the Orishas were starving. The sun was so fierce that no one could reach the heavens to plead with Olorun for rain. One by one, the Orishas tried and failed, their wings or courage failing them.',
        'Oshun, the youngest and most delicate, transformed herself into a peacock and began the long flight. As she flew higher, the sun scorched her beautiful feathers, turning them from vibrant colors to dull black and white. Still, she flew on.',
        'Exhausted and nearly blind, she reached the palace of Olorun. The Supreme Being was so moved by her sacrifice and determination that he granted her the gift of rain. As the first drops fell, Oshun\'s feathers were restored, but they remained a shimmering gold and green as a reminder of her journey.',
        'She returned to earth as the savior of humanity, and Olorun declared that from that day forward, no Orisha could bring abundance or joy to the world without Oshun\'s permission. She is the sweetness that makes life possible.'
      ]
    },
    additionalPatakis: [
      {
        title: 'The Honey Dance with Oggun',
        content: [
          'When Oggun retreated to the forest and civilization stopped, the Orishas were desperate. They sent many to bring him back, but Oggun was violent and unyielding. Finally, Oshun went to the woods with nothing but her beauty and a pot of honey.',
          'She found Oggun in a clearing, his machete covered in rust and his eyes filled with rage. She began to dance at the edge of his camp, her bells jingling with every step. Oggun watched, mesmerized by her grace.',
          'As she danced closer, she smeared honey on his lips. Oggun, who had tasted nothing but bitter roots for years, was overwhelmed by the sweetness. He followed her out of the forest, lured by the honey and the promise of joy, and returned to his forge. Civilization was saved, and Oshun proved that sweetness is often more powerful than iron.'
        ]
      }
    ],
    throne: {
      description: 'Oshun\'s shrine is a beautiful yellow, gold, or amber ceramic tureen (sopera), often decorated with porcelain flowers or intricate carvings, reflecting her love for beauty and luxury.',
      items: [
        'A yellow or gold porcelain sopera',
        'Her otá (a smooth, yellow river stone)',
        '5 sacred cowrie shells (Diloggun)',
        'An Abebe (fan) made of brass or peacock feathers',
        'A gold or brass mirror',
        'Brass or gold jewelry (bracelets, necklaces)',
        'A bell (Agogó Oshun) made of brass',
        '5 small brass oars or fans'
      ],
      setup: [
        'Oshun\'s sopera is usually placed on a low shelf or a beautiful table draped in yellow silk.',
        'Sunflowers and yellow roses should always be nearby if possible.',
        'The area should be kept fragrant with perfume and sweet oils.',
        'Her vessels are often kept near fresh water or a small indoor fountain.'
      ]
    },
    feedingRituals: [
      {
        name: 'The Sweet Offering (Feeding the Honey)',
        offerings: ['Pure honey (Oñi)', 'Pumpkins (calabaza)', 'Oranges', 'Cinnamon', 'Yellow cakes'],
        openingPrayer: 'Oshun yeye kari, mase lode. Sweet mother, bring the gold of the river to my hands.',
        chant: 'Yeye, yeye, yeyeo. Oshun yeyeo, arogbo yeyeo.',
        context: 'Oshun is the owner of honey. **IMPORTANT:** One must always taste the honey before offering it to Oshun to prove it is not poisoned, as she was once tricked by a rival.',
        whenToUse: 'When seeking love, fertility, or financial abundance. It is also used to "sweeten" a person\'s mood or situation.'
      }
    ],
    sacrificeRituals: [
      {
        name: 'The Golden Sacrifice',
        offerings: ['Yellow hen (adié yèyé)', 'Pigeon (eyelé)', 'Quail (akuaro)', 'Castrated goat (chivo capón)'],
        openingPrayer: 'Oshun, owner of the river, accept this gold to bring joy to my life.',
        chant: 'Adiá adiá moforibale Oshun, adiá adiá moforibale.',
        context: 'Oshun\'s sacrifices are elegant and often involving yellow or gold-colored animals. The quail is particularly sacred to her as the messenger who warned her of the drought.',
        whenToUse: 'During her initiation (Kariosha), or when a major blessing of fertility or wealth is required.'
      }
    ],
    oriki: [
      {
        lucumi: 'Oshún yèyé karí. Mi má sè lódé. Orí yèyé o! Afidérèri kùí.',
        phonetic: 'Oh-shoon yeh-yeh kah-ree... Oh-ree yeh-yeh oh! Ah-fee-deh-reh-ree koo-ee.',
        translation: 'Oshun, the mother who stays in the town. My mother who is on the road. Praise to the mother! The one with the golden carvings.',
        context: 'Recited when praying for love or family harmony.'
      }
    ],
    suyere: [
      {
        lucumi: 'Yèyé yèyé o, Oshún yèyé o. Arógbó yèyé o, Oshún yèyé o.',
        phonetic: 'Yeh-yeh yeh-yeh oh, Oh-shoon yeh-yeh oh...',
        translation: 'Mother, mother, Oshun mother. Ancient mother, Oshun mother.',
        context: 'The main chant used to invite Oshun to dance during a drumming ceremony.'
      }
    ],
    source: 'Garcia Cortez, J. (2020). The Osha: Secrets of the Yoruba-Lucumí-Santería. Chapter 4 & 7.'
  },
  {
    id: 'yemaya',
    number: '7',
    name: 'Yemaya',
    alternateNames: 'Yemayá, Yemonja',
    domain: 'Ocean, Motherhood, Family, Protection, Maternity',
    description: 'Yemaya is the Orisha of the ocean and the mother of all. She represents maternity, protection, and the nurturing force of nature. As the ocean, she is the source of all life and the destination of all rivers. She is the sister of Oshun and the mother of Shango in some traditions.',
    colors: ['Blue', 'White'],
    beads: 'Blue and White',
    numberSymbol: '7',
    numPaths: 7,
    syncretizedWith: 'Virgen de Regla',
    symbol: 'Anchor / Seven Silver Bracelets',
    attributes: [
      'Orisha of the ocean and salt water',
      'Universal mother and protector',
      'Governs fertility and childbirth',
      'Provider of abundance and prosperity',
      'Fierce protector of her children'
    ],
    sacredObjects: [
      'Blue and white beads',
      'Silver items',
      'Blue and white plates',
      'Seven silver bracelets',
      'Fan made of palm or feathers',
      'Objects from the sea (shells, coral)'
    ],
    pataki: {
      title: 'The Mother of the Orishas',
      content: [
        'Yemaya was the first to give birth to the Orishas. Her womb was so vast and fertile that it contained the essence of all the deities. As she walked upon the earth, her movement was like the rhythm of the waves.',
        'When the time came for her children to be born, they emerged as a great flood of energy. Shango came out as lightning, Ogun as iron, and Obatala as white light. The force of their birth was so great that it shattered the land, and Yemaya\'s body dissolved into the salt waters that filled the new oceans.',
        'She became the ocean itself, the source from which all life emerged and to which it eventually returns. She is the mother who never forgets her children, her tides reaching out to every shore to touch them.',
        'Because she is the mother of the Orishas, she carries the authority over all their heads. When the other Orishas cannot solve a problem, Yemaya steps in with the patience and depth of the sea to bring resolution and peace.'
      ]
    },
    additionalPatakis: [
      {
        title: 'Yemaya and the Seven Silver Bracelets',
        content: [
          'In ancient times, Yemaya was a queen who ruled over a prosperous kingdom by the sea. She was known for her wisdom and her deep blue robes. She wore seven silver bracelets on her left arm, each representing a hidden secret of the ocean.',
          'A rival king, jealous of her wealth, sent his fleet to conquer her. Yemaya did not call for an army; she simply stepped into the surf and began to dance. With each rotation, one of her silver bracelets would chime.',
          'By the time the seventh bracelet chimed, a massive whirlpool had formed, swallowing the enemy fleet whole. Yemaya emerged from the water, her robes dry and her silver bracelets shining with the reflected light of the sun. She proved that the mother\'s protection is as powerful as it is profound.'
        ]
      }
    ],
    throne: {
      description: 'Yemaya\'s shrine is a large, deep blue and white porcelain or ceramic tureen (sopera), often decorated with seashells, anchors, or waves, reflecting her dominance over the salt waters.',
      items: [
        'A large blue and white porcelain sopera',
        'Her otá (a smooth, dark stone from the seafloor or beach)',
        '7 sacred cowrie shells (Diloggun)',
        'An Abebe (fan) made of blue silk or peacock feathers',
        'A miniature silver anchor',
        'A miniature silver steering wheel',
        '7 silver bracelets (ildé Yemaya)',
        'Various seashells, coral, and stones from the ocean'
      ],
      setup: [
        'Yemaya\'s sopera is often placed on a low stool (banquito) or directly on a mat (estera), closer to the earth and waters than Obatala.',
        'The space should be decorated with blue and white fabrics, layered like waves.',
        'Offerings should include molasses, watermelons, and corn cakes.',
        'A vessel of salt water should be kept nearby to represent her domain.'
      ]
    },
    feedingRituals: [
      {
        name: 'The Cooling of the Tides (Feeding the Molasses)',
        offerings: ['Molasses (melaza)', 'Watermelon (sandía)', 'Corn cakes (olelé)', 'Coconut', 'Fried plantains'],
        openingPrayer: 'Yemaya Okun, Yemaya Atara Magua. Mother of all, bring the abundance of the sea to my life.',
        chant: 'Yemaya asesu, asesu Yemaya. Olodo aba, asesu Yemaya.',
        context: 'Yemaya loves the sweetness of molasses, which represents the deep, thick wealth of the ocean depths. Watermelon is her favorite fruit and is offered to "cool" her anger.',
        whenToUse: 'When seeking protection for the family, fertility, or a safe journey across the waters. It is also used to resolve mother-child conflicts.'
      }
    ],
    sacrificeRituals: [
      {
        name: 'The Mother\'s Life',
        offerings: ['Duck (pato)', 'She-goat (chiva)', 'Rooster (akuko)', 'Guinea hen (etú)'],
        openingPrayer: 'Yemaya, mother of all Orishas, accept this life to preserve the life of your children.',
        chant: 'Yemaya, Yemaya, Yemaya Okun. Olodo aba, Yemaya Okun.',
        context: 'Yemaya\'s sacrifices are often performed near the water or in a space draped in blue. The duck is particularly sacred to her as a creature that moves between the water and the land.',
        whenToUse: 'During her initiation (Kariosha), or when a major blessing of health or family unity is required.'
      }
    ],
    oriki: [
      {
        lucumi: 'Yemayá atará maguá, Yemayá okún. Miyé yé o! Afidérèri kùí.',
        phonetic: 'Yeh-mah-yah ah-tah-rah mah-gwah... Mee-yeh yeh oh! Ah-fee-deh-reh-ree koo-ee.',
        translation: 'Yemaya the great mother, Yemaya of the ocean. My mother who is on the road. The one with the silver carvings.',
        context: 'Used when seeking maternal comfort or protection.'
      }
    ],
    suyere: [
      {
        lucumi: 'Yemayá asèsú, asèsú Yemayá. Olodò abà, asèsú Yemayá.',
        phonetic: 'Yeh-mah-yah ah-seh-soo... Oh-loh-doh ah-bah, ah-seh-soo Yeh-mah-yah.',
        translation: 'Yemaya who lives in the depths, her currents are strong. Owner of the river, her currents are strong.',
        context: 'The primary chant used to celebrate Yemaya\'s maternal power.'
      }
    ],
    source: 'Garcia Cortez, J. (2020). The Osha: Secrets of the Yoruba-Lucumí-Santería. Chapter 4 & 7.'
  },
  {
    id: 'shango',
    number: '6',
    name: 'Shango',
    alternateNames: 'Shangó, Changó',
    domain: 'Thunder, Lightning, Fire, War, Justice, Dance, Drums',
    description: 'Shango is the Orisha of thunder, lightning, fire, and war. He is a warrior-king who represents justice, dance, and the sacred Bata drums. Once a mortal king of Oyo, he became deified after his death. He is the patron of leaders and those who fight for justice.',
    colors: ['Red', 'White'],
    beads: 'Red and White',
    numberSymbol: '6',
    numPaths: 7,
    syncretizedWith: 'Santa Bárbara',
    symbol: 'Double-Headed Axe (Oshe)',
    attributes: [
      'King of the religion in Cuba (Shangóization)',
      'Master of the sacred Bata drums',
      'Represents fire, thunder, and lightning',
      'Warrior for justice and righteousness',
      'Loves dance, music, and celebration'
    ],
    sacredObjects: [
      'Red and white beads',
      'Maraca (shekere)',
      'Double-headed axe (oshe)',
      'Edun Ara (thunder stones)',
      'Bata drums',
      'Crown and royal items'
    ],
    pataki: {
      title: 'The Origin of the Bata Drums',
      content: [
        'Shango was the first to own the sacred Bata drums. He was a master of rhythm and could speak through the skin of the drum. However, he was also a king who spent much of his time in battle and governance.',
        'One day, while Shango was away at war, the Orishas held a great celebration. Shango returned and found he had no one to play for him. He became so enraged that he began to strike the drums with his lightning bolts.',
        'Oshun, seeing the destruction, approached Shango with five silk scarves and a pot of honey. She danced before him, her movements mimicking the flow of the river, and gradually Shango\'s anger turned to admiration.',
        'He realized that the drums were not a weapon, but a way to unite the community. He gifted the Bata drums to the hands of the Aña (the drum spirit) and declared that they should only be played to honor the Orishas and bring joy to the people. To this day, the Aña lives within the Bata, and Shango\'s thunder is their echoes.'
      ]
    },
    additionalPatakis: [
      {
        title: 'Shango and the Palm Nut Divination',
        content: [
          'In the early days, Shango was the keeper of the 16 sacred palm nuts (Ikín) used for the highest forms of divination. However, Shango was too impatient and passionate to spend his days in long consultations.',
          'He preferred the quick thunder and the immediate strike of lightning. He saw Orunmila, the Orisha of wisdom, who was patient and studious but lacked the fire and rhythm to move the people.',
          'Shango struck a deal: he gave Orunmila the sacred palm nuts and the secret of the 256 Odus of Ifá. In return, Orunmila gave Shango the secret of the Bata drums and guaranteed that in every Ifá ceremony, Shango would be honored first as the king who provided the tools of wisdom. This is why Shango and Orunmila are inseparable in the high mysteries.'
        ]
      }
    ],
    throne: {
      description: 'Shango\'s shrine is a wooden vessel, traditionally carved from cedar or ayan wood, which sits atop a tall pedestal (pilón) shaped like a castle or a classic hourglass.',
      items: [
        'A cedar wood Batea (bowl) with a fitted lid',
        '6 sacred thunder stones (Edun Ara) — these are actual Neolithic axe heads believed to be lightning strikes',
        'His Oshe (double-headed axe) carved from cedar',
        'Miniature Bata drums carved from wood',
        'A sword or machete of wood or copper',
        'A wooden mortar and pestle',
        'A crown decorated with red and white beads'
      ],
      setup: [
        'Shango must never sit directly on the floor; he always sits on his Pilón.',
        'His throne should be placed in a central, dominant part of the room.',
        'Red and white fabrics should drape his pedestal, never mixing with the blue of his rivals or the yellow of his wives unless specifically dictated.',
        'The Edun Ara must be kept clean and occasionally "bathed" in palm oil and rum.'
      ]
    },
    feedingRituals: [
      {
        name: 'The Feeding of the Stones (Edun Ara)',
        offerings: ['Red palm oil (epo)', 'Dry wine or Rum', 'Roasted corn', 'Bananas (plátanos)', 'Okra (ilá)'],
        openingPrayer: 'Shango, mo pe o. King of Oyo, owner of the lightning, accept this heat to keep your fire burning.',
        chant: 'Amala, amala, Shango amala. Ilá, ilá, Shango ilá.',
        context: 'Shango is a "hot" Orisha. He thrives on the energy of fire and red palm oil. Okra (Amalá Ilá) is his favorite food and is offered when seeking his swift justice.',
        whenToUse: 'When a court case or a matter of deep injustice is pending, or when one needs a boost of courage and leadership.'
      }
    ],
    sacrificeRituals: [
      {
        name: 'The King\'s Life',
        offerings: ['Ram (agunko)', 'Rooster (akuko)', 'Turtle (ayapá)', 'Guinea hen (etú)'],
        openingPrayer: 'Kawaile! Shango beeku! Accept this life, King of the Bata, and bring your justice to this house.',
        chant: 'Mofoyu, mofoyu, Shango mofoyu. Agogo, agogo, Shango agogo.',
        context: 'Shango\'s sacrifices are energetic and loud, often accompanied by drumming. The ram is his primary animal, representing the strength and headstrong nature of the king.',
        whenToUse: 'During the initiation of a new child of Shango, or when a massive spiritual war (brujería) is threatening the household.'
      }
    ],
    oriki: [
      {
        lucumi: 'Shangó, obà kò so. Kabìèsí, abala jè lú bè. Odumáre bà l\'ayé.',
        phonetic: 'Shahn-goh, oh-bah koh soh. Kah-bee-eh-see, ah-bah-lah jeh loo beh...',
        translation: 'Shango, the king who did not hang. Your majesty, the one who eats through the drum. The manifestation of God on Earth.',
        context: 'Recited with the "saludo" (prostrating) before his Pilón.'
      }
    ],
    suyere: [
      {
        lucumi: 'Wemimilérè, Shango wemimilérè. Obà kò so, wemimilérè.',
        phonetic: 'Weh-mee-mee-leh-reh, Shahn-goh weh-mee-mee-leh-reh...',
        translation: 'He has purified me with joy, Shango has purified me with joy. The king who did not hang, he brings me joy.',
        context: 'Sung during the Shango portion of a gold or standard drumming set.'
      }
    ],
    source: 'Garcia Cortez, J. (2020). The Osha: Secrets of the Yoruba-Lucumí-Santería. Chapter 4.'
  },
  {
    id: 'ogun',
    number: '3',
    name: 'Ogun',
    alternateNames: 'Oggun, Ogún',
    domain: 'Iron, War, Technology, Labor, Surgery, Civilization',
    description: 'Ogun is the Orisha of iron, war, and labor. He represents the technology that allows civilization to exist — from the farmer\'s machete to the surgeon\'s scalpel. He is a fierce warrior who clears paths through obstacles and is the first Orisha to descend to Earth.',
    colors: ['Green', 'Black'],
    beads: 'Green and Black',
    numberSymbol: '3',
    numPaths: 7,
    syncretizedWith: 'St. Peter, St. Paul, St. James (Santiago)',
    symbol: 'Iron Tools (Machete, Anvil)',
    attributes: [
      'Owner of all iron and metals',
      'First Orisha to descend to Earth',
      'Warrior who clears obstacles',
      'Patron of workers, soldiers, and surgeons',
      'Represents both destruction and creation'
    ],
    sacredObjects: [
      'Green and black beads',
      'Iron tools (machete, anvil, hammer)',
      'Iron chains',
      'Palm oil',
      'Smoked fish and jutía',
      'Rum and tobacco'
    ],
    legend: {
      title: 'The First to Descend',
      content: 'When the Orishas decided to descend to Earth to create civilization, none dared to go first because the path was blocked by dense forest and hostile forces. Ogun stepped forward, wielding his machete of iron, and cleared a path through the wilderness. He established the first forge and taught humanity the use of iron. Without Ogun, no technology, no tools, and no civilization would exist. He is honored first in all construction and new endeavors.'
    },
    legendMoral: 'Hard work and determination can clear any path; technology serves humanity.',
    paths: [
      { name: 'Ogun Onire', description: 'The crowned king of Iré' },
      { name: 'Ogun Alagwedde', description: 'The owner of the crown' },
      { name: 'Ogun Shibiriki', description: 'The violent warrior' },
      { name: 'Ogun Ogunne', description: 'The owner of the house' },
      { name: 'Ogun Arere', description: 'The one who works the bellows' },
      { name: 'Ogun Meye', description: 'The owner of the leaves' },
      { name: 'Ogun Neye', description: 'The one who sees' }
    ],
    pataki: {
      title: 'Oggun\'s Retreat to the Woods',
      content: [
        'Disgusted by the corruption and greed of humanity, and burdened by a grave misunderstanding regarding his mother Yemaya, Oggun abandoned human society entirely. He retreated deep into the forest, vowing never to return.',
        'Without Oggun\'s iron tools, civilization collapsed. Crops couldn\'t be harvested without his machetes, houses couldn\'t be built without his nails, and meat couldn\'t be butchered without his knives.',
        'The Orishas tried to coax him back. Obatala tried with reason, but Oggun ignored him. Shango tried with force, but Oggun defeated him. Finally, Oshun went to the woods with five silk scarves, a pot of honey, and her sweetest bells.',
        'She danced at the edge of his camp, smearing honey on his lips while he was distracted by her movement and beauty. Blinded by desire and the sweetness of the honey he had been denied in the wild, he followed her trance-like dance all the way back into the city.',
        'Oggun returned to work, civilization was restored, and forever after, Oggun and Oshun shared a complicated bond of attraction and tension.'
      ]
    },
    additionalPatakis: [
      {
        title: 'The Pact Between Eshu, Oggun, and Oshosi',
        content: [
          'In ancient times, Oggun the warrior and Oshosi the hunter were enemies who constantly ruined each other\'s hunts. If Oshosi tracked an animal, Oggun would scare it away with his loud machete. If Oggun was setting a trap, Oshosi would shoot the trap.',
          'Both were starving. Eleggua (Eshu) saw this and forced them to meet at the crossroads. Eshu reasoned: "Oshosi, you can see the prey and shoot it perfectly, but you cannot clear the thick brush to retrieve the body. Oggun, you can chop through any brush, but you are too loud to sneak up on the prey."',
          'He made them swear a blood oath on a piece of hot iron. From that day on, Oggun clears the path, Oshosi shoots the arrow, and together they never go hungry. This is why in every house, Eleggua, Oggun, and Oshosi live together in the same iron cauldron by the door, known as the Warriors (Los Guerreros).'
        ]
      }
    ],
    throne: {
      description: 'Oggun\'s shrine is an iron cauldron with three legs (cazuela de hierro), located by the front door, next to Eleggua and containing Oshosi.',
      items: [
        'A large iron cauldron',
        'His otá (a smooth black stone from the forest)',
        'Anvil and hammer',
        'Machete (machete rompe monte)',
        'Railroad spikes and horseshoes',
        'Heavy iron chains',
        'Loose nails',
        'Surgical tools or car parts (modern additions)'
      ],
      setup: [
        'Oggun\'s cauldron lives on the floor, representing his grounded nature and labor.',
        'The iron tools within must occasionally be rubbed with red palm oil (epo) to prevent rust and essentially "feed" his fiery energy.',
        'The tools are arranged around the central black stone.'
      ]
    },
    feedingRituals: [
      {
        name: 'Oggun\'s Lubrication (Feeding the Tools)',
        offerings: ['Red palm oil (epo)', 'Roasted corn (awado)', 'Aguardiente (rum)', 'Cigar smoke'],
        openingPrayer: 'Oggun shibiriki, Oggun kobo kobo.',
        chant: 'Oggun, dueño del hierro, Oggun, abre el camino.',
        context: 'Oggun works constantly. Like any machine or tool, he must be lubricated to function well. If his cauldron dries out or rusts, the practitioner\'s life will experience intense friction and violent stops.',
        whenToUse: 'Rubbing his tools with epo whenever one asks him for protection or to clear a massive obstacle.'
      }
    ],
    sacrificeRituals: [
      {
        name: 'The Blood of the Earth (Sacrifice to Oggun)',
        offerings: ['Male goat (ounko)', 'Rooster (akuko)', 'Guava', 'Roasted yam'],
        openingPrayer: 'Oggun ye! Oggun patakori!',
        chant: 'Sara ikoko, Sara ikoko, Oggun de arere, sara ikoko.',
        context: 'Oggun requires strong, hot blood to maintain his strength for war. The knife used for the sacrifice is actually an extension of Oggun himself; thus, Oggun technically receives the first taste of every sacrifice made within the religion (the rite of the knife, pinaldo).',
        whenToUse: 'When an initiate receives the Warriors, or when preparing for surgery or intense physical danger.'
      }
    ],
    oriki: [
      {
        lucumi: 'Ogun mo pé o. Ogun ye, patakori. Ogun alagbede orun. Ogun awo, lehin awo, egbé ihin á gbá a.',
        phonetic: 'Oh-goon moh pey oh. Oh-goon yeh, pah-tah-koh-ree. Oh-goon ah-lah-gbeh-deh oh-roon...',
        translation: 'Ogun, I call you. Ogun, hail, the head chief. Ogun the blacksmith of heaven. Ogun the mystery, behind the mystery, the society of this place receives him.',
        context: 'A prayer of praise and submission to the sheer force of Oggun\'s power.'
      }
    ],
    suyere: [
      {
        lucumi: 'Oggun de arere, ile bombo lokua. Oggun de arere, ile bombo lokua.',
        phonetic: 'Oh-goon deh ah-reh-reh, ee-leh bohm-boh loh-kwah...',
        translation: 'Ogun the butcher has arrived, the house offers its respects to the one who kills.',
        context: 'Sung while dancing for Oggun, making aggressive, chopping motions reflecting his use of the machete.'
      }
    ],
    source: 'Garcia Cortez, J. (2020). The Osha: Secrets of the Yoruba-Lucumí-Santería. Chapter 4.'
  },
  {
    id: 'oya',
    number: '9',
    name: 'Oya',
    alternateNames: 'Oyá',
    domain: 'Wind, Storms, Change, Cemetery Gates, Transformation',
    description: 'Oya is the Orisha of winds, storms, and sudden change. She guards the cemetery gates and controls the spirits of the dead. She represents the winds of transformation that bring necessary change, even when destructive. She was Shango\'s favorite wife and remains his fierce ally.',
    colors: ['Brown', 'Burgundy'],
    beads: 'Brown and Burgundy',
    numberSymbol: '9',
    numPaths: 7,
    syncretizedWith: 'St. Teresa of Ávila',
    symbol: 'Iruke (Horse Tail Switch)',
    attributes: [
      'Guardian of the cemetery gates',
      'Controls the winds and storms',
      'Bringer of sudden, necessary change',
      'Communicates with the dead',
      'Fierce warrior queen, Shango\'s ally'
    ],
    sacredObjects: [
      'Brown and burgundy beads',
      'Copper jewelry',
      'Iruke (horse tail switch)',
      'Masks',
      'Rainbow-colored items',
      'Objects from the cemetery (earth, stones)'
    ],
    pataki: {
      title: 'The Queen of the Cemetery Gates',
      content: [
        'Oya was not always the guardian of the dead. In the beginning, she was a warrior queen who ruled the winds. However, she saw that the spirits of the dead (Egún) were often wandering lost, causing chaos in the world of the living.',
        'She approached Olodumare and offered to be their guide. She chose to live at the gates of the cemetery, the transition point between life and death. She donned a mask of copper and took up her Iruke (horse tail switch) to clear the path for the souls.',
        'Because of her residence at the cemetery, Oya is the only Orisha who can truly command the dead. She works closely with Babalú Ayé (the Orisha of disease) and the other owners of the cemetery (Yewa and Obba) to ensure the cycle of life and death is respected.',
        'Her presence is felt in the sudden gust of wind that precede a storm and the quiet chill that hangs over a fresh grave. She is the wind of change that ensures nothing remains stagnant, for even death is a form of progress.'
      ]
    },
    additionalPatakis: [
      {
        title: 'Oya and the Nine Whirlwinds',
        content: [
          'When Shango was in his greatest battle, Oya saw that he was being surrounded by enemies. She did not use a sword; she simply began to spin in circles. With each rotation, a whirlwind formed, until nine massive spirits of wind were tearing through the enemy ranks.',
          'Shango watched from the center of the storm, his lightning guided by her winds. From that day, Shango declared Oya his most essential ally and the mother of his nine children, each named after one of the winds she commanded. This is why Oya\'s number is nine, representing the depth and complexity of her power.'
        ]
      }
    ],
    throne: {
      description: 'Oya\'s shrine is a copper or burgundy-colored ceramic tureen (sopera), or a copper vessel, usually kept in an area with good airflow or near the spirit corner (rincón de los muertos).',
      items: [
        'A copper or burgundy porcelain sopera',
        'Her otá (a smooth, dark stone from the cemetery or the path of a storm)',
        '9 sacred cowrie shells (Diloggun)',
        'An Iruke (black horse tail switch) handled with copper',
        'Copper tools (miniature shovel, pick, and hoe)',
        'A copper crown with 9 points or 9 tools hanging from it',
        'A mask made of copper or wood',
        'Copper jewelry and bracelets'
      ],
      setup: [
        'Oya\'s sopera is often placed on a shelf decorated with burgundy or multicolored silk.',
        'Rainbow-colored items should be present, as she is the owner of the rainbow (the bridge to the ancestral realm).',
        'An Egún (ancestor) shrine is often located nearby.',
        'Drappings of 9 different colors (except black) are used to honor her manifold nature.'
      ]
    },
    feedingRituals: [
      {
        name: 'The Feeding of the Whirlwind',
        offerings: ['Purple grapes', 'Dark plums', 'Chocolate', 'Eggplant (berenjena)', 'Fried plantains in wine'],
        openingPrayer: 'Oya yansa, jekua jey. Queen of the cemetery, bring the winds of change to clear my path.',
        chant: 'Oya, Oya, Oya de arere. Oya, Oya, Oya de arere.',
        context: 'Oya loves all dark-colored fruits, especially grapes. Her offerings are often left at the gates of the cemetery or in a wooded area where the wind blows strongly.',
        whenToUse: 'When a person is stuck in a stagnant situation and needs a violent but necessary shift in direction. It is also used to ask for her protection against evil spirits.'
      }
    ],
    sacrificeRituals: [
      {
        name: 'The Life of the Cemetery',
        offerings: ['Black hen (adié dudu)', 'Guinea hen (etú)', 'Pigeon (eyelé)', 'Female goat (chiva)'],
        openingPrayer: 'Oya, guardian of the dead, accept this blood to guide the spirits away from this house.',
        chant: 'Oya, Oya, Oya mo pe o. Jekua jey, Oya mo pe o.',
        context: 'Oya\'s sacrifices are serious and often performed at night or in the cemetery itself. The guinea hen is her primary bird, its speckled feathers representing the stars and the spirits she guides.',
        whenToUse: 'During her initiation (Kariosha), or when dealing with a haunting or a severe spiritual obsession (muerto oscuro).'
      }
    ],
    oriki: [
      {
        lucumi: 'Oyá, yànsán, jekua jéy. Obìnrin t\'o gbé iná, t\'o gbé efúfú lú.',
        phonetic: 'Oh-yah, yahn-shahn, jeh-kwah jey... Oh-been-reen toh gbeh ee-nah...',
        translation: 'Oya, the mother of nine, hail! The woman who carries fire and the wind that destroys the city.',
        context: 'A powerful prayer used to invoke her warrior spirit for protection.'
      }
    ],
    suyere: [
      {
        lucumi: 'Ayílódá, Oyá daka, ayílódá, Oyá daka. Oyá daka, ayílódá.',
        phonetic: 'Ah-yee-loh-dah, Oh-yah dah-kah...',
        translation: 'The one who changes the state of things. Oya has arrived, the one who changes things.',
        context: 'The primary song used to induce the trance of Oya during a ceremony.'
      }
    ],
    source: 'Garcia Cortez, J. (2020). The Osha: Secrets of the Yoruba-Lucumí-Santería. Chapter 4 & 7.'
  },
  {
    id: 'oshosi',
    number: '4',
    name: 'Oshosi',
    alternateNames: 'Ochosi, Oshosi',
    domain: 'The Hunt, Justice, Protection, Runaway Slaves',
    description: 'Oshosi is the Orisha of the hunt, justice, and wilderness. He is a skilled tracker and archer who ensures that justice is served. He protects those who flee oppression, including escaped slaves seeking freedom. He is often syncretized with St. Norbert or St. Sebastian.',
    colors: ['Blue', 'Yellow'],
    beads: 'Blue and Yellow',
    numberSymbol: '4',
    numPaths: 5,
    syncretizedWith: 'St. Norbert, St. Sebastian',
    symbol: 'Bow and Arrow',
    attributes: [
      'Master hunter and tracker',
      'Enforcer of divine justice',
      'Protector of the oppressed and escaped slaves',
      'Represents concentration and focus',
      'Works closely with Ogun and Eshu'
    ],
    sacredObjects: [
      'Blue and yellow beads',
      'Bow and arrow',
      'Hunting traps',
      'Antelope horns',
      'Leather items'
    ],
    pataki: {
      title: 'The Hunter of Justice',
      content: [
        'Oshosi was once a mortal hunter who was unrivaled in his skill. He could track a shadow across a river and hit a bird in flight from a mile away. However, he was also a man of deep ethics who never hunted for sport, only for survival and to protect the innocent.',
        'Obatala, seeing his skill and character, appointed him as the divine detective and judge of the Orishas. When a crime was committed or a soul was lost in the woods, Oshosi was called to find the truth.',
        'He realized that his arrow didn\'t just pierce the body; it pierced the lies. He became the guardian of prisoners and those wrongly accused. He and Oggun formed an inseparable bond — Oggun provides the iron for the arrow, and Oshosi provides the aim.',
        'To this day, Oshosi is called upon when legal matters are at hand or when one needs the focus to hit a goal that seems impossible. He is the master of the "one shot, one kill" — meaning he never wastes effort and always finds the mark.'
      ]
    },
    additionalPatakis: [
      {
        title: 'Oshosi and the King\'s Bird',
        content: [
          'The King of Oyo had a sacred bird that disappeared. He declared that if the bird was not returned, the village would be destroyed. Oshosi was sent to find it. He tracked the bird to a distant mountain and saw it had been captured by a spirit.',
          'Oshosi did not just shoot; he studied the wind, the slope, and the spiritual energy of the mountain. He released a single arrow that flew through the cage and pinned the spirit\'s garment to a tree, allowing the bird to fly free.',
          'The bird returned to the palace, and the king was so impressed that he granted Oshosi the right to live in the palace as his advisor. This is why Oshosi is often found near the "head" or the logic of the religion, working closely with Obatala to ensure justice is tempered with wisdom.'
        ]
      }
    ],
    throne: {
      description: 'Oshosi\'s shrine in the Lucumí tradition is usually a blue and yellow ceramic vessel, or more commonly, he lives within the iron cauldron of Oggun in the form of a bow and arrow.',
      items: [
        'A blue and yellow porcelain sopera (if separate)',
        'His bow and arrow (arco y flecha) made of iron or wood',
        'His otá (a smooth hunter\'s stone from the deep forest)',
        '3 or 7 sacred cowrie shells (Diloggun)',
        'Deer or antelope antlers (tafí)',
        'A leather hunting bag (sisal)',
        'Miniature iron traps and hunting tools',
        'Beads of blue and yellow or green and amber'
      ],
      setup: [
        'If Oshosi lives with Oggun, his bow and arrow should be placed prominently atop the iron tools.',
        'The area should be decorated with shades of blue and gold.',
        'Offerings should include anisette (sweet liquor), bird-related items, and fruits from the forest.',
        'Tobacco and cigars should be kept near his shrine to "smoke out" the prey.'
      ]
    },
    feedingRituals: [
      {
        name: 'The Hunter\'s Focus (Feeding the Bow)',
        offerings: ['Anisette (Anís del Mono)', 'Bird feed (seeds)', 'Honey', 'Grapes', 'Roasted corn'],
        openingPrayer: 'Oshosi ode mata, ode mata. Divine hunter, find my target and bring justice to my house.',
        chant: 'Oshosi, ode mata. Oshosi, ode mata. Siré siré, ode mata.',
        context: 'Oshosi loves the sweetness of anisette. It is poured over his bow to "sweeten" his aim. Bird seeds are offered to represent the abundance he brings from the hunt.',
        whenToUse: 'Before a legal trial, a job interview, or any situation where precise focus and a favorable judgment are required.'
      }
    ],
    sacrificeRituals: [
      {
        name: 'The Life of the Hunter',
        offerings: ['Pigeon (eyelé)', 'Rooster (akuko)', 'Quail (akuaro)', 'Castrated goat (chivo)'],
        openingPrayer: 'Oshosi, hunter who never misses, accept this life to ensure our path is always found.',
        chant: 'Oshosi mo pe o, ode mata mo pe o.',
        context: 'Sacrifices to Oshosi are performed with quiet intensity. The quail is his favorite as it is elusive and requires a master hunter to catch, representing the difficult problems Oshosi helps solve.',
        whenToUse: 'When a major legal obstacle or a case of "falso testimonio" (false testimony) is threatening the practitioner.'
      }
    ],
    oriki: [
      {
        lucumi: 'Oshosi, ode mata. Omo ode mata, eleribo, eleri afon.',
        phonetic: 'Oh-shoh-see, oh-deh mah-tah... Oh-moh oh-deh mah-tah...',
        translation: 'Oshosi, the hunter who kills. Child of the hunter, king of the head, king of the mountain.',
        context: 'Used when asking for mental clarity and strategic focus.'
      }
    ],
    suyere: [
      {
        lucumi: 'Oshosi ayiloda, ode mata. Oshosi ayiloda, ode mata.',
        phonetic: 'Oh-shoh-see ah-yee-loh-dah... Oh-deh mah-tah.',
        translation: 'Oshosi the transformer, the hunter who kills. Oshosi the transformer, the hunter who kills.',
        context: 'Sung to celebrate the transformative power of divine justice.'
      }
    ],
    source: 'Garcia Cortez, J. (2020). The Osha: Secrets of the Yoruba-Lucumí-Santería. Chapter 4 & 7.'
  },
  {
    id: 'osun',
    number: '16',
    name: 'Osun',
    alternateNames: 'Osun',
    domain: 'Lookout, Messenger, Guardian of the Head',
    description: 'Osun is the Orisha who watches over the head and protects against evil. A small, bell-shaped Orisha that sits near the crown, Osun alerts the owner to danger and serves as a messenger between the person and their guardian Orisha. Without Osun, one cannot be initiated.',
    colors: ['Yellow', 'Gold'],
    beads: 'Yellow and Gold',
    numberSymbol: '16',
    numPaths: 3,
    syncretizedWith: 'St. John the Baptist (head only)',
    symbol: 'Brass Bell',
    attributes: [
      'Guardian of the head (ori)',
      'Sits at the crown, watching for danger',
      'Alerts the person to spiritual threats',
      'Essential for all initiations',
      'Represents the connection to Ori (higher self)'
    ],
    sacredObjects: [
      'Small brass or copper bell-shaped vessel',
      'Yellow and gold beads',
      'Items representing the head',
      'Never offered animal sacrifice'
    ],
    pataki: {
      title: 'The Lookout of the Orishas',
      content: [
        'Osun was the youngest assistant to Orunmila, the Orisha of destiny. When the wicked spirits tried to destroy Orunmila\'s house to steal the secrets of Ifá, Osun stood guard at the door. He did not sleep, he did not eat, and he did not blink.',
        'He saw the shadows approaching and began to strike his bell. The sound was so pure and sharp that it shattered the malicious intent of the spirits and woke Orunmila. To reward him, Olodumare declared that Osun would never have to touch the ground and would always stand at the crown of the head.',
        'Osun represents the verticality of human consciousness. As long as Osun stands upright, the person\'s connection to their destiny is intact. If Osun falls, it is a warning of an immediate and grave danger that requires the intervention of a priest.',
        'He is the silent messenger who speaks to the Ori (higher head) directly, bypassing the ego and the noise of the world. He is the stability that allows all other spiritual work to take hold.'
      ]
    },
    additionalPatakis: [
      {
        title: 'Osun and the Falling Cup',
        content: [
          'In a story of great warning, a king once neglected his Osun, allowing it to gather dust and lean against a wall. He believed his power was his own. One night, while he was plotting to betray his brothers, the Osun fell to the floor with a loud clang.',
          'The king ignored the omen. Within a week, his enemies had breached the palace and his reign was over. The lesson is that Osun is the early warning system of the soul. He only falls when the internal stability of the person has already been compromised by their own actions or a massive external threat.'
        ]
      }
    ],
    throne: {
      description: 'Osun is not kept in a tureen; he is a silver or brass staff-like vessel with a rooster (gallo) on top, sitting upon a small pedestal or cup. He must be kept at a height equal to or above the head of the practitioner.',
      items: [
        'The Osun staff (vessel with rooster)',
        'Small silver bells (optional attachments)',
        'Inside the cup: lead, secret powders, and small stones of the head',
        'Beads of yellow, white, and gold'
      ],
      setup: [
        'Osun must NEVER be placed on the floor.',
        'He is usually placed near the Warrior shrine (Eleggua, Oggun, Oshosi) but elevated on a high shelf or pedestal.',
        'If he falls, the owner must immediately consult a Babaláwo.',
        'He is often draped with white and yellow beads.'
      ]
    },
    feedingRituals: [
      {
        name: 'The Strengthening of the Lookout',
        offerings: ['Cocoa butter (ori)', 'Husk powder (efun)', 'White flowers', 'Fresh water', 'Honey'],
        openingPrayer: 'Osun, guardian of the head, stand firm. Watch my sleep, watch my path.',
        chant: 'Osun, Osun, Osun. Eleribo, eleri afon, Osun.',
        context: 'Osun does not eat blood or cooked food. He is strengthened by the "cool" elements of purification. Rubbing the rooster with cocoa butter is the primary way to maintain his power.',
        whenToUse: 'When a person feels spiritual instability, dizziness, or a premonition of danger.'
      }
    ],
    sacrificeRituals: [
      {
        name: 'The Silent Pact (Non-Sacrifice)',
        offerings: ['White pigeons (optional but rare)', 'Grapes', 'White candles'],
        openingPrayer: 'Osun, stay standing. Do not fall, for if you fall, I fall.',
        chant: 'No specific suyere for sacrifice, as Osun is the keeper of the head.',
        context: 'Osun is unique in that he rarely receives direct animal sacrifice. He is often satisfied by the sacrifices made to the Warriors he guards. If a pigeon is offered, it is usually to "cool" the head rather than to feed the staff.',
        whenToUse: 'When Osun has fallen and must be ritually re-stabilized by a priest.'
      }
    ],
    oriki: [
      {
        lucumi: 'Osún gbìngbìn. Eleribo, eleri afon. Atunwá, atunwá.',
        phonetic: 'Oh-shoon gbeen-gbeen... Eh-leh-ree-boh, eh-leh-ree ah-fohn.',
        translation: 'Osun the firm and stable. King of the head, he who rebuilds us.',
        context: 'A prayer for spiritual stability and health.'
      }
    ],
    suyere: [
      {
        lucumi: 'Osún, Osún, Osún. Gbogbo orisha, gbogbo egun, Osún.',
        phonetic: 'Oh-shoon, oh-shoon, oh-shoon...',
        translation: 'Osun, Osun, Osun. Guardian of all Orishas and all spirits, Osun.',
        context: 'Sung to call the protective presence of the guardian.'
      }
    ],
    source: 'Garcia Cortez, J. (2020). The Osha: Secrets of the Yoruba-Lucumí-Santería. Chapter 4 & 7.'
  },
  {
    id: 'olokun',
    number: '7',
    name: 'Olokun',
    alternateNames: 'Olókun',
    domain: 'Deep Ocean, Wealth, Secrets, Dreams, The Unconscious',
    description: 'Olokun is the Orisha of the deep ocean depths, representing the mysteries of the sea floor, wealth, and the unconscious mind. While Yemaya rules the surface of the ocean, Olokun dwells in the depths where light does not reach. Olokun holds immense wealth and ancient secrets.',
    colors: ['Dark Blue', 'Green'],
    beads: 'Dark Blue and Green',
    numberSymbol: '7',
    numPaths: 3,
    syncretizedWith: 'St. Francis of Assisi',
    symbol: 'Mask',
    attributes: [
      'Owner of the ocean depths',
      'Holds the treasures of the sea',
      'Represents dreams and the unconscious',
      'Can bring great wealth or take it away',
      'Older than Yemaya, more mysterious'
    ],
    sacredObjects: [
      'Deep blue and green beads',
      'Items from the deep sea',
      'Masks (Olokun is often masked)',
      'Wealth items (coins, jewelry)',
      'Raffia and dark fabrics'
    ],
    pataki: {
      title: 'The Secret of the Abyss',
      content: [
        'At the bottom of the ocean, where no light can reach, lives Olokun. In the beginning, Olokun was the absolute owner of the entire Earth, for the world was nothing but water. When the other Orishas wanted to create land, Olokun was enraged and threatened to swallow all the continents with a great flood.',
        'Obatala, the elder, went to the depths to reason with Olokun. He found a deity who was neither male nor female, but both and more — a force of nature so vast it could not be contained in a single form. Olokun wore a mask of pure mystery, and his voice was the sound of the deep currents.',
        'Obatala struck a deal: Olokun would retreat to the abyssal depths and keep the treasures of the sea, while the surface and the land would be shared. To ensure Olokun stayed in the deep, Obatala tied him with 21 heavy iron chains. This is why the ocean is relatively stable, but when Olokun grows restless and pulls on his chains, the sea rises in tsunamis and storms.',
        'Olokun represents the unconscious mind and the ancient memory of the world. He holds the wealth of all the sunken ships and the secrets of the beginning of time. He is respected as the ultimate authority of the deep, even by Yemaya, who rules the surface.'
      ]
    },
    additionalPatakis: [
      {
        title: 'Olokun and the Mask of Beauty',
        content: [
          'It is said that Olokun\'s true face is so beautiful and so terrifying that no mortal or Orisha could look upon it and remain sane. To protect the world, Olokun chose to wear a mask. This mask represents the surface of the ocean — a beautiful, shifting facade that hides the immense weight and darkness of the depths.',
          'When an initiate receives Olokun, they are warned never to try to peak behind the mask of his secrets. One must respect the boundaries of the unknown, for the deep only gives its treasures to those who can live with the silence of the abyss.'
        ]
      }
    ],
    throne: {
      description: 'Olokun\'s shrine is a large, deep blue, green, or black tureen, often made of heavy ceramic or even lead. It is frequently kept inside a wooden chest or draped in heavy fabrics to maintain its secrecy.',
      items: [
        'A large, heavy porcelain or lead tureen',
        'His otá (a smooth, dark stone from the deep seafloor)',
        '7 sacred cowrie shells (kept inside the vessel)',
        'A miniature lead anchor',
        'A miniature lead steering wheel',
        '21 iron or lead chains',
        'Various seashells, coral, and stones from the deep sea',
        'Silver or lead coins (representing the wealth of the sea)'
      ],
      setup: [
        'Olokun is most traditionally kept on the floor or on a very low stool, reflecting the depths.',
        'The vessel must never be opened except during specific ceremonies or annual washings by a priest.',
        'The space should be cool and dark, away from direct sunlight.',
        'Drapings should be of deep blue, green, or black velvet/heavy cloth.'
      ]
    },
    feedingRituals: [
      {
        name: 'The Feeding of the Abyss',
        offerings: ['Molasses (melaza)', 'Deep sea fish', 'Whole coconuts', 'Dark chocolate', 'Corn cakes'],
        openingPrayer: 'Olokun, owner of the depths, keep my secrets and bring the wealth of the sea to my home.',
        chant: 'Olokun ba o lode, Olokun ba o lode. Okun, Okun, Olokun.',
        context: 'Olokun loves offerings that are "heavy" and dark, matching his nature. Molasses represents the depth of his wealth. Offerings are often wrapped in dark cloth and taken to the shoreline at night.',
        whenToUse: 'When a person is suffering from mental instability, nightmares, or when they are in desperate need of financial stability and "groundedness".'
      }
    ],
    sacrificeRituals: [
      {
        name: 'The Life of the Deep',
        offerings: ['Duck (pato)', 'Rooster (akuko)', 'Guinea hen (etú)', 'Turtle (ayapá)'],
        openingPrayer: 'Olokun, ancient one, accept this life to preserve the life of your children.',
        chant: 'Olokun mo pe o, mo pe o Olokun. Olodo aba, mo pe o Olokun.',
        context: 'Sacrifices to Olokun are performed with great solemnity. The turtle is especially sacred to him as it is a creature that lives as long as the deep itself.',
        whenToUse: 'During the initiation (Kariosha or receiving Olokun), or when a massive spiritual challenge from the "unconscious" is present.'
      }
    ],
    oriki: [
      {
        lucumi: 'Olókun, mo pé o. Oba gbogbo lú okún. Alámorere, eleribo.',
        phonetic: 'Oh-loh-koon, moh pey oh... Oh-bah gboh-gboh loo oh-koon.',
        translation: 'Olokun, I call you. King of all the ocean world. Owner of the best secrets, king of the head.',
        context: 'Used as the primary greeting before his closed vessel.'
      }
    ],
    suyere: [
      {
        lucumi: 'Olókun bà o lódè, Olókun bà o lódè. Okún, okún, Olókun.',
        phonetic: 'Oh-loh-koon bah oh loh-deh...',
        translation: 'Olokun is at the gate of the world. Ocean, ocean, Olokun.',
        context: 'The primary song used to invoke his ancient and powerful presence.'
      }
    ],
    source: 'Garcia Cortez, J. (2020). The Osha: Secrets of the Yoruba-Lucumí-Santería. Chapter 4 & 7.'
  },
  {
    id: 'inle',
    number: '6',
    name: 'Inle',
    alternateNames: 'Inle, Erinle',
    domain: 'Hunting, Fishing, Healing, Abundance, The Inland Waters',
    description: 'Inle (or Erinle) is the Orisha of the inland waters, fishing, and healing. He represents the abundance that comes from rivers and lakes. A beautiful and androgynous deity, Inle is associated with healing and herbal medicine. He is often depicted as a fisherman or hunter.',
    colors: ['Blue', 'Yellow'],
    beads: 'Blue and Yellow',
    numberSymbol: '6',
    numPaths: 3,
    syncretizedWith: 'Archangel Raphael',
    symbol: 'Fishing Hook',
    attributes: [
      'Orisha of rivers, streams, and inland waters',
      'Master fisherman and provider of abundance',
      'Healer and herbalist',
      'Androgynous beauty',
      'Associated with doctors and healers'
    ],
    sacredObjects: [
      'Blue and yellow beads',
      'Fishing hooks and nets',
      'Serpent imagery',
      'Items representing the meeting of land and water',
      'Healing herbs'
    ],
    pataki: {
      title: 'The Physician of the Inland Waters',
      content: [
        'Inle was a beautiful hunter who lived in the forest where the river meets the marsh. He was known for his incredible skill with both the bow and the fishing net, but his true gift was healing. He spent his days studying the leaves, the roots, and the spirits of the water.',
        'One day, Oshun fell gravely ill from a broken heart and a mysterious fever. None of the other Orishas could cure her. Inle heard her cries and went to her riverbed. He did not use medicine alone; he used his beauty, his songs, and a sacred herbal infusion (omiero) he had perfected.',
        'Oshun was healed and fell deeply in love with him. Inle, however, was a being of balance and preferred the solitude of his healing work. He became the patron of doctors and healers, representing the perfect union of the products of the earth and the products of the water.',
        'He is often depicted as an androgynous deity, for healing requires both masculine strength and feminine intuition. He is the provider of abundance, ensuring that no one who approaches him with a clean heart goes hungry or ill.'
      ]
    },
    additionalPatakis: [
      {
        title: 'Inle and the Golden Hook',
        content: [
          'Inle possessed a golden fishing hook that never failed to catch the right fish. One day, while fishing for food for a starving village, he hooked a massive serpent. Instead of fighting it, he understood the serpent was a messenger from the deep earth.',
          'He listened to the serpent\'s whispers and learned the secrets of surgery and the handling of internal organs. This knowledge he shared with humanity, making them capable of healing even the deepest wounds. The golden hook remained his symbol of precision and the ability to "hook" the truth from the depth of a problem.'
        ]
      }
    ],
    throne: {
      description: 'Inle\'s shrine is a beautiful blue and yellow ceramic tureen, often with two handles, or a tureen designed to look like a fish or a boat, reflecting his connection to the inland waters.',
      items: [
        'A blue and yellow porcelain sopera',
        'His otá (a smooth river stone or sea stone)',
        '7 sacred cowrie shells (Diloggun)',
        'A miniature golden fishing hook (anzuelo)',
        'A miniature silver or gold steering wheel/compass',
        '2 silver or gold serpents (representing his healing power)',
        'Various shells and items from the riverbank',
        'Beads of blue and yellow or green and amber'
      ],
      setup: [
        'Inle\'s sopera is usually placed on a table or shelf decorated in blue and gold.',
        'He is often accompanied by Abata (his female companion/sister), who lives in a separate vessel.',
        'A pitcher of fresh river water should always be present.',
        'Herbal pouches and dried medicinal plants are often kept near him.'
      ]
    },
    feedingRituals: [
      {
        name: 'The Healing Banquet',
        offerings: ['Roasted sweet potato (boniato)', 'Fried fish (usually snapper)', 'Honey', 'White rice with black beans', 'White wine'],
        openingPrayer: 'Inle, Erinle, divine physician. Hook the sickness from my body and the hunger from my life.',
        chant: 'Inle, Inle, Inle de arere. Physician of the world, bring your healing.',
        context: 'Inle loves the bounty of both land and sea. Roasted sweet potato is his favorite offering from the earth. Offerings are often taken to the edge of a river or a stream.',
        whenToUse: 'When a person is facing a serious health crisis, a surgery, or when they are struggling with mental or emotional balance.'
      }
    ],
    sacrificeRituals: [
      {
        name: 'The Life of Abundance',
        offerings: ['Rooster (akuko)', 'Duck (pato)', 'Pigeon (eyelé)', 'Turtle (ayapá)'],
        openingPrayer: 'Inle, provider of all, accept this life to preserve the health of this house.',
        chant: 'Inle mo pe o, Inle mo pe o. Healer of the waters, Inle mo pe o.',
        context: 'Inle\'s sacrifices are performed with care, as he is a "gentle" Orisha who prefers healing over war. The duck is very sacred to him, as it represents his movement between land and water.',
        whenToUse: 'During his initiation, or when a massive healing or a "change of luck" in business is required.'
      }
    ],
    oriki: [
      {
        lucumi: 'Inle, Erinlé, aba jé lú bè. Oba gbogbo ewé, oba gbogbo eja.',
        phonetic: 'Ee-nleh, Eh-reen-leh... Oh-bah gboh-gboh eh-weh...',
        translation: 'Inle, the one who joins land and water. King of all herbs, king of all fish.',
        context: 'A prayer for abundance and medical success.'
      }
    ],
    suyere: [
      {
        lucumi: 'Inlé, Erinlé, yèyé o. Inlé, Erinlé, yèyé o. Healer of the world, yèyé o.',
        phonetic: 'Ee-nleh, Eh-reen-leh, yeh-yeh oh...',
        translation: 'Inle, the motherly healer. Inle, the motherly healer.',
        context: 'Sung to call for his cooling, healing presence.'
      }
    ],
    source: 'Garcia Cortez, J. (2020). The Osha: Secrets of the Yoruba-Lucumí-Santería. Chapter 4 & 7.'
  },
  {
    id: 'yewa',
    number: '11',
    name: 'Yewa',
    alternateNames: 'Yewá',
    domain: 'Cemetery, Death, Purity, Virginity, Transformation',
    description: 'Yewa is the Orisha of the cemetery, death, and purity. She represents the transformation that comes through death and the purity of the grave. A virgin deity, she lives in the cemetery among the dead and ensures proper passage to the ancestral realm.',
    colors: ['Pink', 'Mauve'],
    beads: 'Pink and Mauve',
    numberSymbol: '11',
    numPaths: 3,
    syncretizedWith: 'St. Catherine of Siena',
    symbol: 'White Flowers',
    attributes: [
      'Dwells in the cemetery',
      'Virgin deity of purity and transformation',
      'Ensures proper burial and transition',
      'Associated with death but not death itself',
      'Keeper of secrets of the grave'
    ],
    sacredObjects: [
      'Pink and mauve beads',
      'Items from the cemetery',
      'White flowers',
      'Porcelain or ceramic vessels',
      'Items representing virginity and purity'
    ],
    pataki: {
      title: 'The Virgin of the Silent Tomb',
      content: [
        'Yewa was a beautiful princess who was so protected by her father, Obatala, that she was never allowed to see a man. She lived in a palace of ivory and white silk. One day, a mischievous Eshu whispered to her of the beauty of the forest outside.',
        'She slipped out and saw Shango dancing in a clearing. She was so overwhelmed by his fire and vitality that she realized the world was too loud and too intense for her spirit. She retreated to the only place where she found peace — the cemetery, among the silent dead.',
        'Olodumare granted her the guardianship of the cemetery. She became the one who ensures that no spirit is disturbed and that the transition from life to death is pure and final. Because she chose virginity and silence, she is the only Orisha who can truly face death without fear or distraction.',
        'She represents the finality of truth. There is no lie that can survive the silence of Yewa. When a person is wrongly accused or when a secret must be guarded at all costs, Yewa is the one who holds it.'
      ]
    },
    additionalPatakis: [
      {
        title: 'Yewa and the Mirror of Death',
        content: [
          'It is said that Yewa possesses a mirror of smoke that only reflects the truth of a person\'s soul. When a person dies, they must pass before Yewa and her mirror. If the soul is weighed down by guilt or regret, the mirror remains dark. If the soul is at peace, the mirror reflects the light of the ancestors.',
          'Yewa does not judge; she simply reveals. This is why she is the owner of "the pink light of the dawn," the moment between the darkness of death and the light of the new ancestral life.'
        ]
      }
    ],
    throne: {
      description: 'Yewa\'s shrine is a beautiful pink or mauve ceramic/porcelain tureen, often kept high on a shelf or in a very private room (cuarto de santo) where only initiates may enter.',
      items: [
        'A pink or mauve porcelain sopera',
        'Her otá (a smooth, light-colored stone from the cemetery or a mountain)',
        '9 or 11 sacred cowrie shells (Diloggun)',
        'White silk or lace fabrics',
        'Porcelain figurines of flowers or angels',
        'A silver bell (Agogó Yewa)',
        'Beads of pink, mauve, and white'
      ],
      setup: [
        'Yewa should NEVER be placed in an area where men are often present or where loud noise occurs.',
        'Her space should be draped in white and pink silk, creating a sense of a silent sanctuary.',
        'Fresh white flowers (especially lilies or jasmine) should be kept near her.',
        'A small vessel of pink-tinted water (using rose petals) is often present.'
      ]
    },
    feedingRituals: [
      {
        name: 'The Offering of Silence',
        offerings: ['Pink sweets (merengues)', 'Red snapper (pargo)', 'White grapes', 'Pink flowers', 'Pomegranate (granada)'],
        openingPrayer: 'Yewa, mother of silence, guardian of the grave. Keep my secrets and bring peace to my transition.',
        chant: 'Yewa, Yewa, Yewa mo pe o. Virgin of the tomb, keep your peace.',
        context: 'Yewa loves pink and "delicate" offerings. The red snapper is her most traditional food. Offerings are often left in a quiet corner of the house or taken to the cemetery gates in the early morning.',
        whenToUse: 'When a person is facing a terminal diagnosis, seeking to protect a deep secret, or trying to achieve a state of spiritual purity.'
      }
    ],
    sacrificeRituals: [
      {
        name: 'The Pure Transition',
        offerings: ['Female goat (chiva virgen)', 'Guinea hen (etú)', 'Pigeon (eyelé)'],
        openingPrayer: 'Yewa, pure one, accept this life to preserve the purity of our lineage.',
        chant: 'Yewa mo pe o, Yewa mo pe o. Queen of the cemetery, Yewa mo pe o.',
        context: 'Sacrifices to Yewa are rare and high-level, performed with extreme silence and respect. The virgin goat is her primary animal, reflecting her own status.',
        whenToUse: 'During her initiation, or when a massive ancestral blockage or a spiritual transformation is required.'
      }
    ],
    oriki: [
      {
        lucumi: 'Yewa, obìnrin t\'o gbé iná, t\'o gbé efúfú lú. Oba gbogbo lú okara.',
        phonetic: 'Yeh-wah, oh-been-reen toh gbeh ee-nah...',
        translation: 'Yewa, the woman who carries the light of the tomb. Queen of all the silent world.',
        context: 'A prayer for discretion and spiritual peace.'
      }
    ],
    suyere: [
      {
        lucumi: 'Yewa, Yewa, Yewa mo pe o. Yewa, Yewa, Yewa mo pe o.',
        phonetic: 'Yeh-wah, yeh-wah, yeh-wah moh pey oh...',
        translation: 'Yewa, Yewa, Yewa I call you. Yewa, Yewa, Yewa I call you.',
        context: 'Sung to call for her very private and powerful presence.'
      }
    ],
    source: 'Garcia Cortez, J. (2020). The Osha: Secrets of the Yoruba-Lucumí-Santería. Chapter 4 & 7.'
  },
  {
    id: 'nana',
    number: '7',
    name: 'Nana Buruku',
    alternateNames: 'Naná Burukú',
    domain: 'Ancient Earth, Swamp, Mud, Ancestral Power, Witchcraft',
    description: 'Nana Buruku is the ancient earth mother, older than all other Orishas. She represents primordial mud, swamps, and the ancestral power of the earth itself. Associated with witchcraft and ancient wisdom, she holds the secrets of the beginning of time.',
    colors: ['Purple', 'Black'],
    beads: 'Purple and Black',
    numberSymbol: '7',
    numPaths: 3,
    syncretizedWith: 'St. Anne',
    symbol: 'Broom',
    attributes: [
      'Most ancient of the Orishas',
      'Represents primordial mud and swamp',
      'Associated with ancestral witchcraft (Aje)',
      'Holds secrets of the beginning',
      'Connected to Iyami (the powerful mothers)'
    ],
    sacredObjects: [
      'Purple and black beads',
      'Broom (symbol of witchcraft)',
      'Items from swamps and mud',
      'Clay and earthen vessels',
      'Dark fabrics and ancient objects'
    ],
    pataki: {
      title: 'The Mother of Ancient Magic',
      content: [
        'Nana Buruku is the oldest of the Orishas, the grandmother of the pantheon. When the world was being formed, she was already there, dwelling in the primordial mud. She represents the knowledge that existed before iron was discovered and before kings ruled.',
        'Because she predates the age of iron, she has a strict pact against it. In the ancient times, she saw that humanity was using iron tools for violence and destruction. She declared that no iron would ever touch her or her children. To this day, any ritual involving Nana Buruku must be performed using bamboo or wooden knives.',
        'She is the mother of the Iyami — the powerful "Witch Mothers" who govern the night and the secrets of ancestral magic. She is the source of the Ibis (the broom) which she uses to sweep away the spiritual "dust" of bad luck and disease.',
        'Because of her age, Nana Buruku is not crowned on the head in the standard Lucumí Kariosha. She is "received" as a separate, towering spiritual authority that provides the practitioner with an unbreakable connection to the ancient earth and the wisdom of the ancestors.'
      ]
    },
    additionalPatakis: [
      {
        title: 'Nana Buruku and the Silence of the Swamp',
        content: [
          'It is said that Nana Buruku speaks through the silence of the swamp. When a person is born, she is the one who provides the primordial clay for the body. When a person dies, she is the one who receives the body back into the earth.',
          'She holds the "Aje" (the power of transformation). She once challenged the other Orishas to see who could live the longest without the help of humanity. While the others relied on sacrifices and praise, Nana Buruku simply retreated into the mud. Eons passed, and she emerged unchanged, proving that she is the foundation upon which all life and divinity rests.'
        ]
      }
    ],
    throne: {
      description: 'Nana Buruku\'s shrine is a heavy, dark clay or earthen vessel, traditionally kept on the floor in a very quiet, shaded corner of the house, representing her grounded and ancient nature.',
      items: [
        'A heavy clay vessel (cazuela de barro)',
        'Her otá (a smooth, dark stone from a swamp or creek)',
        '7 sacred cowrie shells (kept inside)',
        'The Ibirí (a sacred broom made of palm ribs wrapped in purple and black cloth)',
        'Ancient wood carvings or items of antiquity',
        'Beads of purple, black, and sometimes silver'
      ],
      setup: [
        'Nana Buruku must ALWAYS be kept on the floor.',
        'Her space should be draped in purple and black velvet or heavy cotton.',
        '**WARNING:** No iron objects should ever be placed near her shrine.',
        'Her vessels are often kept near the rincón de los muertos (ancestor corner).'
      ]
    },
    feedingRituals: [
      {
        name: 'The Feeding of the Earth Mother',
        offerings: ['Purple grains', 'Roasted sweet potatoes (purples)', 'Corn meal cakes', 'Molasses', 'White wine'],
        openingPrayer: 'Nana Buruku, ancient mother, grandmother of the world. Sweep away the bad and bring the wisdom of old.',
        chant: 'Nana Buruku mo pe o, Nana Buruku mo pe o. Ancient of the earth, mo pe o.',
        context: 'Nana Buruku loves dark, earthy offerings. Offerings must be handled with wooden tools, never metal. They are often taken to a quiet marsh or buried in the earth.',
        whenToUse: 'When seeking protection from witchcraft, ancestral healing, or when one needs the stability of the most ancient wisdom to resolve a modern crisis.'
      }
    ],
    sacrificeRituals: [
      {
        name: 'The Bloodless Pact (Wooden Sacrifice)',
        offerings: ['Female goat (chiva)', 'Pigeon (eyelé)', 'Guinea hen (etú)'],
        openingPrayer: 'Nana, accept this life through the wooden knife. Keep the iron away.',
        chant: 'Nana Buruku, Nana Buruku. Mo pe o, Nana Buruku.',
        context: 'Sacrifices to Nana Buruku are unique because a wooden or bamboo knife must be used. The blood is allowed to flow over the earthen vessel, but the iron itself is never introduced.',
        whenToUse: 'During her specific initiation or during a time of extreme spiritual war where ancient "Aje" is needed.'
      }
    ],
    oriki: [
      {
        lucumi: 'Naná Burukú, ìyá wa akà bièsí. Oba gbogbo lú okara.',
        phonetic: 'Nah-nah Boo-roo-koo, ee-yah wah ah-kah bee-eh-see...',
        translation: 'Nana Buruku, our mother who is questioned by no one. Queen of all the silent world.',
        context: 'Used when seeking ancestral protection and ancient secrets.'
      }
    ],
    suyere: [
      {
        lucumi: 'Naná Burukú, Naná Burukú. A-she-re, a-she-re, Naná Burukú.',
        phonetic: 'Nah-nah Boo-roo-koo, Nah-nah Boo-roo-koo...',
        translation: 'Nana Buruku, Nana Buruku. The one who works magic, Nana Buruku.',
        context: 'The primary chant used to invoke her ancient power during a ritual.'
      }
    ],
    source: 'Garcia Cortez, J. (2020). The Osha: Secrets of the Yoruba-Lucumí-Santería. Chapter 4 & 7.'
  },
  {
    id: 'babalu',
    number: '17',
    name: 'Babalu-Aye',
    alternateNames: 'Babalú-Ayé',
    domain: 'Illness, Disease, Healing, Skin Conditions, Epidemics',
    description: 'Babalu-Aye is the Orisha of disease and healing. He represents the epidemics and illnesses that can sweep through communities, but also the power to heal them. Often depicted as a beggar covered in sores, he reminds us of the fragility of health and the importance of compassion for the sick.',
    colors: ['Brown', 'Purple'],
    beads: 'Brown and Purple',
    numberSymbol: '17',
    numPaths: 5,
    syncretizedWith: 'St. Lazarus',
    symbol: 'Crutches',
    attributes: [
      'Orisha of disease and epidemics',
      'Also brings healing and recovery',
      'Protector of the poor and outcast',
      'Associated with skin conditions',
      'Reminds of the value of health'
    ],
    sacredObjects: [
      'Brown and purple beads',
      'Crutches (he uses them)',
      'Two dogs (his faithful companions)',
      'Items made of sackcloth',
      'Grains, sesame seeds, toasted corn'
    ],
    pataki: {
      title: 'The Lord of the Earth\'s Rebirth',
      content: [
        'Babalu-Aye was not always a beggar. He was once a powerful and prideful king who ruled with an iron fist. He ignored the warnings of Obatala to treat his subjects with compassion. As a result, Olodumare sent a plague that covered his body in sores and robbed him of his wealth.',
        'He was cast out of his kingdom and forced to wander the Earth. He found solace only in the company of two dogs who licked his wounds and shared their food with him. Through his suffering, he learned the secret of the "cold head" — patience and humility.',
        'One day, he met Oshun at the riverbank. She saw his suffering and used her honey and sweet water to heal his skin. He realized that the earth itself was the source of all medicine. He became the master of the "Ajá" (the sacred broom of palm ribs) which he uses to sweep away disease.',
        'He is the Orisha who reminds us that health is the only true wealth. He demands absolute respect and humility from his followers. When he dances, he moves with a limp, reflecting the crutches he used during his wandering, and his power is absolute over all epidemics and long-term illnesses.'
      ]
    },
    additionalPatakis: [
      {
        title: 'Babalu-Aye and the Two Dogs',
        content: [
          'It is said that Babalu-Aye\'s dogs are not just pets; they are spiritual guardians. When the Orishas were in the heavens, these dogs were the ones who could see the "shadows" of disease before they reached the Earth. They warned Babalu-Aye, and he used this knowledge to become the master of the spirits of illness.',
          'When he was exiled, the dogs refused to leave his side, proving that loyalty is found in the lowest places. This is why in every shrine of Babalu-Aye, there must be two ceramic or wood dogs to guard the lord of the earth.'
        ]
      }
    ],
    throne: {
      description: 'Babalu-Aye\'s shrine is a deep ceramic or clay vessel (ajá) with a lid that has several holes to allow the "scent" of the earth to rise. It is always draped in purple or sackcloth.',
      items: [
        'A deep clay vessel (cazuela de Babalu)',
        'His otá (smooth, dark stones from a dry riverbed or a crossroad)',
        '17 sacred cowrie shells (Diloggun)',
        'An Ajá (broom made of palm ribs decorated with beads and snails)',
        'A set of miniature wooden or metal crutches',
        'Two ceramic or wooden dogs',
        'Large quantities of grains and seeds (sesame, lentils, corn)',
        'Beads of brown and purple or terracotta and black'
      ],
      setup: [
        'Babalu-Aye is traditionally kept on the floor, often in a separate room or a very quiet corner.',
        'The vessel is often filled with a variety of dry grains (his favorite food).',
        'Drapings should be made of "yute" (sackcloth) or purple velvet.',
        'A candle should always be lit when approaching his shrine to ward off the "heat" of disease.'
      ]
    },
    feedingRituals: [
      {
        name: 'The Banquet of the Earth (Feeding the Grains)',
        offerings: ['7 or 17 different grains', 'Toasted corn', 'Roasted sweet potato', 'White wine (dry)', 'Cigars and Rum'],
        openingPrayer: 'Babalu-Aye, Lord of the Earth, sweep away the pestilence. Bring health to this house.',
        chant: 'Babalu-Aye, Babalu-Aye. Asojano, Babalu-Aye.',
        context: 'Feeding Babalu-Aye is a community act. The grains represent the seeds of new life and the removal of the old disease. Offerings are often bundled in sackcloth and taken to a dry area or a hospital gate.',
        whenToUse: 'When a person is suffering from a skin disease, a long-term illness, or when an epidemic is threatening the community.'
      }
    ],
    sacrificeRituals: [
      {
        name: 'The Life of Healing',
        offerings: ['Male goat (chivo)', 'Rooster (akuko)', 'Guinea hen (etú)', 'Pigeon (eyelé)'],
        openingPrayer: 'Lord of the earth, accept this life to preserve the health of your children.',
        chant: 'Asojano kueré-o, Babalu-Aye kueré-o.',
        context: 'Sacrifices to Babalu-Aye are intense and performed with extreme care for cleanliness. The guinea hen is especially favored as its speckled feathers reflect the sores he heals.',
        whenToUse: 'During his initiation (giving the "Asojano"), or when a person is in a life-or-death health crisis.'
      }
    ],
    oriki: [
      {
        lucumi: 'Babalú-Ayé, oba gbogbo lú. A-shaka-shiki, eleribo, eleri afon.',
        phonetic: 'Bah-bah-loo Ah-yeh, oh-bah gboh-gboh loo...',
        translation: 'Babalu-Aye, king of all the world. The one who creates with great care, king of the head.',
        context: 'A prayer for health and longevity.'
      }
    ],
    suyere: [
      {
        lucumi: 'Babalú-Ayé, Babalú-Ayé. A-shé-re, a-shé-re, Babalú-Ayé.',
        phonetic: 'Bah-bah-loo Ah-yeh...',
        translation: 'Babalu-Aye, Babalu-Aye. The one who works the magic of the earth.',
        context: 'The main chant used to invoke his healing presence during a ceremony.'
      }
    ],
    source: 'Garcia Cortez, J. (2020). The Osha: Secrets of the Yoruba-Lucumí-Santería. Chapter 4 & 7.'
  },
  {
    id: 'aggayu',
    number: '12',
    name: 'Argayu (Aggayu Sola)',
    alternateNames: 'Agayú Solá',
    domain: 'Volcanoes, Lava, Earth\'s Core, Dry Earth, Father of Shango',
    description: 'Aggayu Sola is the Orisha of volcanoes, lava, and the dry earth. He represents the massive, unmoving power of the earth\'s core. Often considered the father of Shango, he is a giant deity who carries the weight of the world. He is associated with the wilderness and deserts.',
    colors: ['Brown', 'Red'],
    beads: 'Brown and Red',
    numberSymbol: '12',
    numPaths: 4,
    syncretizedWith: 'St. Christopher',
    symbol: 'Volcano',
    attributes: [
      'Giant Orisha of volcanoes and wilderness',
      'Carries the earth on his shoulders',
      'Father of Shango',
      'Represents immense, slow power',
      'Associated with ferrymen and travelers'
    ],
    sacredObjects: [
      'Brown and red beads',
      'Large stones and lava rocks',
      'Tray representing the earth',
      'Items of great weight',
      'Forest and desert items'
    ],
    pataki: {
      title: 'The Giant of the River Crossing',
      content: [
        'Aggayu Sola is the Orisha of the volcano and the dry earth. He is so large that he can span the distance between the mountaintop and the riverbed in a single step. In the ancient times, he served as the ferryman of the Orishas, carrying them across the great rivers of the world.',
        'One day, he carried the young Shango across a raging torrent. Shango was so impressed by Aggayu\'s strength that he declared him his father. Aggayu taught Shango the secrets of fire and the power of the drum. This is why Shango is often called "the son of Aggayu."',
        'He represents the massive, unmoving power of the earth\'s core. While Shango is the quick lighting, Aggayu is the slow, unstoppable flow of lava. He is the guardian of the wilderness and the protector of travelers. He demands a high degree of discipline and strength from those who follow him.'
      ]
    },
    additionalPatakis: [
      {
        title: 'Aggayu and the Crown of the Desert',
        content: [
          'It is said that Aggayu rules the deserts because they are the places where the earth is closest to the sun. He wears a crown of nine colors, representing the different layers of the earth as you descend into the core. He is a solitary deity who prefers the silence of the wilderness to the noise of the city.'
        ]
      }
    ],
    throne: {
      description: 'Aggayu\'s shrine is a large, heavy ceramic tray or tureen, often decorated with red and brown colors, representing the earth and lava. He is frequently kept near a window or in an area that feels spacious.',
      items: [
        'A large ceramic tray or Batea (bowl)',
        'His otá (a large, heavy, porous stone — often volcanic)',
        '12 sacred cowrie shells (Diloggun)',
        'A miniature wooden staff (bastón) to aid his giant steps',
        'Items of great weight (large iron or stone objects)',
        'A nine-colored silk or cotton draping',
        'Beads of brown, red, and sometimes gold'
      ],
      setup: [
        'Aggayu should be placed on a sturdy shelf or pedestal.',
        'The space should be decorated with earthy tones and shades of red.',
        'Offerings should include roasted fruits and heavy grains.'
      ]
    },
    feedingRituals: [
      {
        name: 'The Feeding of the Volcano',
        offerings: ['Roasted fruits (bananas, mangoes)', 'Whole coconuts', 'Honey', 'Molasses', 'White wine'],
        openingPrayer: 'Aggayu Sola, giant of the earth, carry me across the river of my life. Keep my path steady.',
        chant: 'Aggayu sola, Aggayu sola. Kinimole Aggayu sola.',
        context: 'Aggayu loves the products of the sun and the dry earth. Offerings are often left in a wooded area or near a high hill.',
        whenToUse: 'When a person is facing a massive obstacle that requires brute strength and steady persistence to overcome.'
      }
    ],
    sacrificeRituals: [
      {
        name: 'The Giant\'s Life',
        offerings: ['Male goat (chivo)', 'Rooster (akuko)', 'Turtle (ayapá)', 'Pigeon (eyelé)'],
        openingPrayer: 'Aggayu, giant father, accept this life to bring strength to your children.',
        chant: 'Aggayu mo pe o, Aggayu mo pe o. Giant of the earth, mo pe o.',
        context: 'Sacrifices to Aggayu are powerful and solemn. The turtle is favored due to its slow, steady nature being similar to his.',
        whenToUse: 'During his initiation or during a time of great personal or community transformation.'
      }
    ],
    oriki: [
      {
        lucumi: 'Aggayu Sola, oba gbogbo lú. A-shaka-shiki, eleribo, eleri afon.',
        phonetic: 'Ah-gah-yoo Soh-lah, oh-bah gboh-gboh loo...',
        translation: 'Aggayu Sola, king of all the world. The one who creates with great care, king of the head.',
        context: 'A prayer for strength and survival.'
      }
    ],
    suyere: [
      {
        lucumi: 'Aggayu Sola, Aggayu Sola. A-shé-re, a-shé-re, Aggayu Sola.',
        phonetic: 'Ah-gah-yoo Soh-lah...',
        translation: 'Aggayu Sola, Aggayu Sola. The one who works the magic of the giants.',
        context: 'The primary chant used to invoke his massive presence.'
      }
    ],
    source: 'Garcia Cortez, J. (2020). The Osha: Secrets of the Yoruba-Lucumí-Santería. Chapter 4.'
  },
  {
    id: 'osain',
    number: 'Varies',
    name: 'Osain',
    alternateNames: 'Osanyin, Osain',
    domain: 'Herbs, Plants, Healing, Magic, Forest',
    description: 'Osain is the Orisha of herbs, plants, and healing magic. He knows the secret properties of every leaf and root in the forest. Small in stature (one ear, one eye, one arm, one leg), he moves through the forest collecting herbs. No healing can be done without his permission.',
    colors: ['Green'],
    beads: 'Yellow and Green',
    numberSymbol: 'Varies',
    numPaths: 5,
    syncretizedWith: 'St. Sylvester, St. Joseph',
    symbol: 'Gourd (Calabash)',
    attributes: [
      'Owner of all herbs and medicinal plants',
      'Knows the secret name of every leaf',
      'Essential for all healing and cleansing',
      'Small, deformed deity who moves silently',
      'Without Osain, no ebbó can be made'
    ],
    sacredObjects: [
      'Green beads',
      'Gourd (calabash)',
      'Herbs of all kinds',
      'Caracol (snail shell)',
      'Items from the forest'
    ],
    pataki: {
      title: 'The Theft of the Herbs',
      content: [
        'Osain was the original and only owner of all the plants in the forest. He kept their secrets locked away in a gourd that he hung from a high tree. The other Orishas were frustrated because they could not heal without his permission and his high price.',
        'Oya, the queen of the winds, saw an opportunity. She blew a massive whirlwind through the forest, shaking the trees until Osain\'s gourd fell and shattered. The herbs were scattered to the four winds.',
        'The other Orishas rushed into the forest, each grabbing the plants that landed near them. This is why every Orisha now has their own specific "Ewe" (herbs). However, Osain still knows the secret name and the "Ashé" (power) of the plants that no one else can unlock. Without Osain to wake the herbs, they are just leaves.',
        'He remains a solitary and mysterious figure, living in the deepest parts of the woods. He is the one who reminds us that nature holds the ultimate power of life and death, and that every plant has a spirit that must be respected before it is harvested.'
      ]
    },
    additionalPatakis: [
      {
        title: 'Osain and the Loss of His Limbs',
        content: [
          'Osain was once a complete and beautiful deity. However, he was caught in a spiritual war between the Orishas and the dark forces. In the conflict, he lost one eye, one ear, one arm, and one leg. Instead of dying, he replaced his lost parts with the spirit of the forest.',
          'His one ear is huge so he can hear the whispers of the leaves. His one eye sees into the spirit world. He moves with a single leg like a tree trunk. His deformity is his power, for he has literally become one with the nature he protects.'
        ]
      }
    ],
    throne: {
      description: 'Osain\'s shrine is usually a large gourd (guede) or a specific ceramic vessel with several holes, often kept outside in a garden or a shaded porch to be close to the living plants.',
      items: [
        'A large, decorated gourd (güiro)',
        'His otá (smooth forest stones)',
        '16 sacred cowrie shells (kept inside the gourd)',
        'Various dried herbs and roots',
        'Small brass or wooden bells to wake the spirits',
        'Tobacco and matches',
        'Beads of green, yellow, and red'
      ],
      setup: [
        'Osain is ideally kept outdoors or in a space filled with living plants.',
        'The gourd is often hung from a beam or placed on a high wooden pedestal.',
        'The area must be kept clean of iron artifacts.',
        'A constant offering of tobacco smoke should be maintained.'
      ]
    },
    feedingRituals: [
      {
        name: 'The Waking of the Herbs (Feeding the Omiero)',
        offerings: ['Fresh rain water', 'Rum (Aguardiente)', 'Tobacco smoke', 'Honey', '7 or 21 different leaves'],
        openingPrayer: 'Osain, owner of the forest, wake the leaves. Let the Ashé flow from the root to the crown.',
        chant: 'Kosi Ewe, Kosi Orisha. Osain, wake the medicine.',
        context: 'Osain is fed primarily through the omiero — the sacred herbal water. The leaves are crushed by hand while singing his suyeres, activating their healing properties.',
        whenToUse: 'Before any major initiation or healing ceremony to ensure the herbs are spiritually active.'
      }
    ],
    sacrificeRituals: [
      {
        name: 'The Forest Sacrifice',
        offerings: ['Rooster (akuko)', 'Turtle (ayapá)', 'Pigeon (eyelé)', 'Goat (chivo)'],
        openingPrayer: 'Master of the herbs, accept this life to bring the power of the forest to this house.',
        chant: 'Osain, Osain, mo pe o. Owner of the magic, mo pe o.',
        context: 'Sacrifices to Osain are often performed in the woods or in the presence of his gourd. The turtle is very important as it represents the slow, ancient growth of the forest.',
        whenToUse: 'During his specific initiation or when a massive herbal healing is required for a practitioner.'
      }
    ],
    oriki: [
      {
        lucumi: 'Osányìn, oba gbogbo ewé. Alámorere, eleribo, eleri afon.',
        phonetic: 'Oh-sahn-yeen, oh-bah gboh-gboh eh-weh...',
        translation: 'Osain, king of all herbs. The one who creates with great care, king of the head.',
        context: 'A prayer for medical and magical success.'
      }
    ],
    suyere: [
      {
        lucumi: 'Osányìn, Osányìn, mo pe o. A-shé-re, a-shé-re, Osányìn.',
        phonetic: 'Oh-sahn-yeen...',
        translation: 'Osain, Osain, I call you. The one who works the magic of the leaves.',
        context: 'The primary song used to crush herbs for the omiero.'
      }
    ],
    source: 'Garcia Cortez, J. (2020). The Osha: Secrets of the Yoruba-Lucumí-Santería. Chapter 4.'
  },
  {
    id: 'orunmila',
    number: '16',
    name: 'Orunmila',
    alternateNames: 'Orúnmilà, Ifa',
    domain: 'Divination, Wisdom, Destiny, Knowledge of All Things',
    description: 'Orunmila is the Orisha of divination, wisdom, and destiny. As the deity of Ifá, he knows the past, present, and future. He was present at creation and knows the destiny of every human being. Unlike other Orishas, he is not crowned on the head but works through the Babalawo (father of secrets).',
    colors: ['Green', 'Yellow'],
    beads: 'Green and Yellow',
    numberSymbol: '16',
    numPaths: 4,
    syncretizedWith: 'St. Francis of Assisi',
    symbol: 'Divining Tray (Opón Ifá)',
    attributes: [
      'Deity of Ifá divination',
      'Knows all destinies and possible futures',
      'Witness to creation',
      'Works through Babalawos (priests)',
      'Not crowned on the head like other Orishas'
    ],
    sacredObjects: [
      'Green and yellow beads',
      'Opón Ifá (divining tray)',
      'Ikin (sacred palm nuts)',
      'Opele (divining chain)',
      'Irofa (divining tassel)'
    ],
    pataki: {
      title: 'The Witness of Creation',
      content: [
        'Orunmila was the only Orisha allowed to witness Olodumare create the universe. He saw how the stars were balanced, how the rivers were carved, and how the destiny of every soul was woven into the fabric of time. Because of this, he is the only one who knows how to fix a broken destiny.',
        'When a person is born, their soul makes a pact with Olodumare. Orunmila is the witness to that pact. If a person goes astray or suffers from bad luck, it is because they have forgotten their original destiny. Orunmila provides the Ifá system to help them remember and realign.',
        'He is the Orisha of total wisdom. He does not seek war or drama; he seeks only the truth. He is the master of the "Opele" (divining chain) and the "Ikin" (palm nuts), through which he speaks the 256 Odus of Ifá. He is the ultimate guide for all humanity.'
      ]
    },
    additionalPatakis: [
      {
        title: 'Orunmila and the Death of Death',
        content: [
          'It is said that Death (Ikú) once tried to take Orunmila before his time. Orunmila used his wisdom to trap Ikú in a spiritual contract. He declared that no child of Orunmila who follows the advice of the Ifá oracle would ever be taken by Death prematurely. This is why the "Idé Ifá" (green and yellow bracelet) is worn — it is a sign of that contract.'
        ]
      }
    ],
    throne: {
      description: 'Orunmila\'s shrine is a wooden tureen (opon) or a specific wooden vessel, kept in a very high, clean, and secluded place, often in a dedicated Ifá room.',
      items: [
        'A wooden Batea or tureen for the Ikins',
        '16 (or more) sacred palm nuts (Ikín Ifá)',
        'The Opele (divining chain made of seeds or metal)',
        'The Opón Ifá (circular divining tray)',
        'Irofa (tapper used to wake the spirit of the tray)',
        'A vessel of dry wine and honey',
        'Beads of green and yellow'
      ],
      setup: [
        'Orunmila should NEVER be kept in a room where people sleep or where arguments occur.',
        'He must be elevated, representing his high wisdom.',
        'The space should be decorated with green and yellow silk.',
        'A mat (estera) should always be placed on the floor before him for consultations.'
      ]
    },
    feedingRituals: [
      {
        name: 'The Feeding of the Wisdom',
        offerings: ['Dry wine', 'Honey', 'Roasted corn', 'Yam', 'Coconut'],
        openingPrayer: 'Orunmila, witness of destiny. Speak the truth through the tray. Show me the path.',
        chant: 'Ifá o, Ifá o. Orunmila baba Ifá o.',
        context: 'Orunmila is fed with quiet respect. He loves the clarity of dry wine and the sweetness of honey. Offerings are made during "Itá" (life readings) or annual celebrations.',
        whenToUse: 'When a major life decision is required or when a person\'s destiny feels blocked or lost.'
      }
    ],
    sacrificeRituals: [
      {
        name: 'The Great Ifá Sacrifice',
        offerings: ['Female goat (chiva)', 'Hen (adié)', 'Rooster (akuko)', 'Guinea hen (etú)'],
        openingPrayer: 'Orunmila, accept this life to preserve the destiny of your child.',
        chant: 'Ifá mo pe o, mo pe o Ifá. Orunmila mo pe o.',
        context: 'Sacrifices to Orunmila are high-level and performed only by Babalawos. They are aimed at "fixing" an Odu (sign) that is bringing bad fortune.',
        whenToUse: 'During his initiation (Hand of Ifá or Ifá priest initiation), or when the oracle demands a massive sacrifice to change a person\'s fate.'
      }
    ],
    oriki: [
      {
        lucumi: 'Orúnmìlà, baba Ifá. Oba gbogbo lú. Alámorere, eleribo, eleri afon.',
        phonetic: 'Oh-roon-mee-lah...',
        translation: 'Orunmila, father of Ifá. King of all the world. Owner of the best wisdom, king of the head.',
        context: 'A prayer for divine guidance and truth.'
      }
    ],
    suyere: [
      {
        lucumi: 'Ifá o, Ifá o. Orúnmìlà bà o lódè. Ifá o, Ifá o.',
        phonetic: 'Ee-fah oh...',
        translation: 'Ifá, Ifá. Orunmila is at the gate of the world.',
        context: 'The main chant used to open an Ifá consultation.'
      }
    ],
    source: 'Garcia Cortez, J. (2020). The Osha: Secrets of the Yoruba-Lucumí-Santería. Chapter 4.'
  },
  {
    id: 'oba',
    number: '9',
    name: 'Oba',
    alternateNames: 'Obá',
    domain: 'Marriage, Loyalty, Sacrifice, River, Witchcraft Knowledge',
    description: 'Oba is the Orisha of marriage and loyalty, known for her tragic sacrifice for Shango. She offered her ear to win his love (a story warning against jealousy). She represents the faithful wife and the power of sacrifice in marriage.',
    colors: ['Brown', 'Red'],
    beads: 'Brown and Red',
    numberSymbol: '9',
    numPaths: 3,
    syncretizedWith: 'St. Joan of Arc',
    symbol: 'Ear (symbol of sacrifice)',
    attributes: [
      'Orisha of marriage and conjugal fidelity',
      'Made the ultimate sacrifice for love',
      'Represents loyalty and devotion',
      'Connected to river and water',
      'Knows the secrets of witchcraft'
    ],
    sacredObjects: [
      'Brown and red beads',
      'Items representing the ear',
      'Marriage symbols',
      'River stones',
      'Items of domestic life'
    ],
    pataki: {
      title: 'The Sacrifice of the Ear',
      content: [
        'Oba was Shango\'s first and most faithful wife. She was known for her exceptional cooking and her deep loyalty. However, she was constantly jealous of Oshun, who she believed used magic to hold Shango\'s heart.',
        'Oshun, sensing her jealousy, played a trick. She told Oba that the secret to Shango\'s love was to cut off a piece of her own ear and put it in his favorite stew. Oshun herself was wearing a headwrap that hid both her ears, making Oba believe Oshun had already done the same.',
        'Oba, in her desperation, cut off her ear and cooked it. When Shango found it in his soup, he was horrified by the self-destruction and the desperation. He banished Oba from the palace. Tragic and broken, she turned herself into a river, her tears forming the whirlpools.',
        'She is now the guardian of marriage and the one who warns against the dangers of jealousy and excessive sacrifice. She represents the knowledge that one must love oneself before they can truly love another.'
      ]
    },
    additionalPatakis: [
      {
        title: 'Oba and the Secrets of the Grave',
        content: [
          'It is said that after she left Shango, Oba went to the cemetery to learn from her sister Yewa. She learned the secrets of witchcraft and the handling of transition. This is why Oba is often called upon for spiritual justice and for the "cutting" of bad luck.',
          'She carries a wooden anvil, representing her resilience and her ability to shape the future even after a great loss.'
        ]
      }
    ],
    throne: {
      description: 'Oba\'s shrine is a ceramic tureen, often draped in brown and red silk, kept near a water source or a very quiet area of the house.',
      items: [
        'A brown and red porcelain sopera',
        'Her otá (smooth river stone)',
        '9 sacred cowrie shells (Diloggun)',
        'A miniature wooden anvil',
        'A miniature wooden or metal ear-shaped object',
        'Wedding rings or symbols of marriage',
        'Beads of brown, red, and sometimes gold'
      ],
      setup: [
        'Oba should be kept in a clean, quiet space.',
        'Her sopera is often placed near Yewa or Oshun.',
        'Fresh water should always be present.',
        'Pink and red flowers are her favorites.'
      ]
    },
    feedingRituals: [
      {
        name: 'The Feeding of the Faithful Wife',
        offerings: ['Red fruits (pomegranate)', 'Roasted yam', 'Honey', 'White rice', 'Sweet wine'],
        openingPrayer: 'Oba, faithful mother, cut away the jealousy and bring loyalty to my house.',
        chant: 'Oba, Oba, Oba mo pe o. King of the house, mo pe o.',
        context: 'Oba is fed with the intention of bringing stability to a home or marriage. Offerings are often taken to the riverbank.',
        whenToUse: 'When a relationship is failing due to jealousy or when a person is suffering from a "broken heart".'
      }
    ],
    sacrificeRituals: [
      {
        name: 'The Pure Sacrifice',
        offerings: ['Female goat (chiva)', 'Pigeon (eyelé)', 'Guinea hen (etú)'],
        openingPrayer: 'Oba, queen of sacrifice, accept this life to preserve the loyalty of this lineage.',
        chant: 'Oba mo pe o, Oba mo pe o. Queen of the river, mo pe o.',
        context: 'Sacrifices to Oba are solemn and focused on restoration. The pigeon is very important for "cooling" her pain.',
        whenToUse: 'During her initiation or during a major family crisis.'
      }
    ],
    oriki: [
      {
        lucumi: 'Obà, ìyá wa akà bièsí. Oba gbogbo lú okara. Alámorere.',
        phonetic: 'Oh-bah...',
        translation: 'Oba, our mother who is questioned by no one. Queen of all the silent world.',
        context: 'A prayer for fidelity and domestic peace.'
      }
    ],
    suyere: [
      {
        lucumi: 'Obà, Obà, Obà mo pe o. Obà, Obà, Obà mo pe o.',
        phonetic: 'Oh-bah...',
        translation: 'Oba, Oba, I call you.',
        context: 'Sung to call for her protective and faithful presence.'
      }
    ],
    source: 'Garcia Cortez, J. (2020). The Osha: Secrets of the Yoruba-Lucumí-Santería. Chapter 4.'
  }
];

export const orishaQuote = '"Kosi Ewe, Kosi Orisha" — Without leaves, there is no Orisha';
