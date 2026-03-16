import React, { useState } from 'react';
import { ChevronLeft, Scroll, Leaf, Crown, Wind, Flame, Droplets, Mountain, Eye, Sword, Skull, Sun, Moon, Sparkles, Mic, Music, BookOpen, Copy, Check, AlertTriangle, Info } from 'lucide-react';
import { ViewState } from '../types';
import { getOrikiForOrisha, getSuyereForOrisha, getRitualsForOrisha, hasOriki, hasSuyere, hasRituals, OPENING_FORMULAS, MOYUBA_PRAYERS, type OrikiEntry, type SuyereEntry, type RitualEntry } from '../orikiSuyere';

interface OrishaEncyclopediaProps {
  setView: (v: ViewState) => void;
  goHome: () => void;
}

interface OrishaData {
  id: string;
  name: string;
  yorubaName: string;
  catholicSyncretism: string;
  colors: string[];
  number: number | string;
  domain: string;
  symbol: string;
  icon: React.ReactNode;
  description: string;
  attributes: string[];
  sacredObjects: string[];
  pataki: {
    title: string;
    story: string;
    moral: string;
  };
  additionalPatakis?: {
    title: string;
    story: string;
    moral: string;
  }[];
  fromOsha?: string;
  paths?: { name: string; description: string }[];
  makuto?: {
    title: string;
    ingredients: string[];
    procedure: string;
    notes?: string;
  };
  throne?: {
    title: string;
    description: string;
    setup: string[];
    notes?: string;
  };
  bushCeremony?: {
    title: string;
    description: string;
    steps: string[];
    notes?: string;
  };
  feedingRituals?: RitualEntry[];
  sacrificeRituals?: RitualEntry[];
}

const ORISHAS: OrishaData[] = [
  {
    id: 'olorun',
    name: 'Olorun / Olodumare',
    yorubaName: 'Olorun / Olodumare',
    catholicSyncretism: 'God the Father / Creator',
    colors: ['White', 'Gold', 'All colors'],
    number: 'Infinite',
    domain: 'The Supreme God, Creator of the Universe',
    symbol: 'Sun, Crown, The Universe',
    icon: <Sun className="w-6 h-6" />,
    description: `Olorun (also called Olodumare) is the Supreme God, the source of all spiritual energy and the creator of the universe. In Yoruba cosmology, Olorun is considered too remote and powerful to interact directly with humans. Instead, the Orishas serve as intermediaries between Olorun and humanity. Olorun is not worshipped through images or statues but through prayers and offerings made to the Orishas who carry them to the Supreme.`,
    attributes: [
      'Source of all Ashé (sacred life force)',
      'Creator of the universe and humanity',
      'Too remote to interact directly with humans',
      'Delegated creation of human bodies to Obatala',
      'Receives prayers through Orisha intermediaries'
    ],
    sacredObjects: ['None directly - worshipped through Orishas', 'Prayers', 'All offerings ultimately reach Olorun'],
    pataki: {
      title: 'The Creation Delegation',
      story: 'When Olorun decided to create the world, he sent Obatala down on a golden chain to mold the earth from the primordial waters. Obatala created the land, the mountains, and the bodies of the first humans. When Obatala got drunk on palm wine and began creating deformed humans, Olorun gave the task of finishing creation to Orunmila, the wise diviner who knows all destinies.',
      moral: 'Even the Supreme Creator delegates responsibility, but ultimate authority and wisdom remain with Olorun.'
    },
    fromOsha: 'Chapter 4: Olorun: The Supreme God (p. 95)'
  },
  {
    id: 'eleggua',
    name: 'Eshu-Eleggua',
    yorubaName: 'Eshu-Eleggua',
    catholicSyncretism: 'Saint Anthony of Padua / Child of Atocha',
    colors: ['Red and Black', 'White (some paths)'],
    number: 3,
    domain: 'Crossroads, Messenger, Trickster, Opener of Paths',
    symbol: 'Cayente (laterite stone), Red and Black beads',
    icon: <Sparkles className="w-6 h-6" />,
    description: `Eshu-Eleggua is the divine messenger and the guardian of the crossroads. He is the first Orisha to be acknowledged in any ceremony — no ritual can begin without his permission. He opens and closes all paths, both physical and spiritual. Eleggua is a trickster who teaches through confusion and sudden reversals. He is associated with chance, opportunity, and the unexpected. Without Eleggua's blessing, no other Orisha can hear your prayers.`,
    attributes: [
      'Messenger between humans and Orishas',
      'Guardian of the crossroads and all paths',
      'Trickster who teaches through confusion',
      'First Orisha honored in any ceremony',
      'Controls opportunity and chance',
      'Can be childlike or ancient, depending on the path'
    ],
    sacredObjects: [
      'Cayente (laterite stone) - his primary material representation',
      'Red and black beads',
      'Small cement head sculptures',
      'Keys, coins, toys (for child Eleggua)',
      'Rum, cigars, candies as offerings'
    ],
    pataki: {
      title: 'The Birth of Eleggua',
      story: 'Eleggua was born when Olorun sent him to earth to guard the crossroads between heaven and earth, the living and the dead. He was given the power to open or close any path, making him the most essential Orisha to consult. He is always placed behind the door of a home to watch who enters and leaves, reporting to Olorun all that happens.',
      moral: 'Never ignore the small one at the crossroads, for he holds the keys to all destiny.'
    },
    fromOsha: 'Chapter 4: Eshu-Eleggue: The Messenger (p. 96); Chapter 7: Vestment (pp. 223-225)',
    paths: [
      { name: 'Batieyo', description: 'A warrior and great defender of children, always on the lookout, a sentinel of homes. Can destroy enemies in a flash. Associated with bullets, guns, arrows, and sharp metal pieces.' },
      { name: 'Lele', description: 'Masquerades as a dog. Closely associated with Babalu-Aye. A healer of unknown skin diseases. Offerings made at hospitals.' },
      { name: 'Bara-Lye', description: 'A good ally of Shango. They go to war together, dance together, enjoy the same zest for life and fondness for good meals. Any priest of Shango can prepare this Eshu for protection.' },
      { name: 'Aba-Nuke', description: "Orunmila's secretary and a good diviner. Represented by a small sculpture with four faces: Orunmila, Obatala, Eleggua, and Shango. Must receive an offering before consulting Orunmila." },
      { name: 'Male', description: 'One of the Babalawo\'s Eshu. Legend says he was chosen by Olorun to give Orula the sixteen kola nuts as part of his divination tools. Only Babalawos know its secrets.' }
    ],
    makuto: {
      title: "Eleggua's Makuto (The Sacred Load)",
      ingredients: [
        'Earth from both the back and front of the Godparent\'s house',
        'Ashe: Obi (cascarilla), Eru (black pepper), Kola (kola nut), Ossu (sesame)',
        'Seven different herbs belonging to Eleggua',
        'Three or twenty-one small black stones',
        'Three small pieces of gold or silver',
        'Seven guinea pepper grains',
        'A small piece from a turtle\'s shell',
        'Earth from a crossroads',
        'Sea sand and earth from the sea bottom',
        'Grains of roasted dry corn',
        'Smoked fish (jutia)',
        'Earth from the bottom of a river',
        'Earth from a forest at high noon',
        'A big chunk of Mashuquillo-Ashe pulp',
        'A bit of hair from the novice\'s head',
        'A small piece of jewelry worn by the novice',
        'Six large (about four inches) opened cowry shells'
      ],
      procedure: `All these items are placed inside an open piece of red cloth. Before closing it, the Godmother has to roll the coconut shells (obi) and ask if everything is in order, or if anything else is needed. Assuming the answer is satisfactory, she will close the cloth and sew onto it the six cowry shells, arranging them to resemble the eyes, ear, nose, and mouth of a person. On the top (what would be considered the head), she will attach permanently (with glue) twenty-one needles or nine blades, one red African parrot feather, the spur and one tail feather taken from a rooster sacrificed to Shango.`,
      notes: 'The makuto is the sacred "load" or secret bundle that gives Eleggua his power. It is never opened again after being sealed.'
    },
    throne: {
      title: "Eleggua's Throne (Ceremonial Seat)",
      description: 'Two thrones are required for the "crowning-vestment" ceremony: one built inside the Igbodu (sacred room) and another outside in the backyard.',
      setup: [
        'INSIDE THRONE (Igbodu): Built as an elaborate structure made mostly of palm branches resembling a hut or cave. It is covered inside and outside with Eleggua\'s herbs.',
        'Inside decorations: Hanging bottles of rum and other alcoholic beverages, toys, candies, pieces of agutti (bush rat/jutia), three small smoked chickens.',
        'Three small dried calabashes (jicaras) containing: pennies, dry roasted corn kernels, and smoked fish with jutia.',
        'A mariwo curtain (peels from royal palm tree branches) placed on top and at the back inside the hut.',
        'The entrance is covered with white sheets not to be removed until the Yawo (novice) is brought from the backyard.',
        'BACKYARD THRONE: A simpler throne built mostly of palm tree branches with few adornments.',
        'Inside the backyard throne, an inverted mortar is placed where the Yawo will be seated facing the house.',
        'The actual ceremony of vestment is performed there, after which Yawo is brought inside by the Yubona to see the elaborate throne for the first time.'
      ],
      notes: 'The dual throne structure represents Eleggua\'s presence at both the crossroads (outside) and the home (inside).'
    },
    bushCeremony: {
      title: "Eleggua's Bush Ceremony (Forest Ritual)",
      description: 'After the makuto is prepared and sealed, it must undergo a three-stage burial process in different sacred locations to charge it with Eleggua\'s spiritual power.',
      steps: [
        'STEP 1 - ROYAL PALM TREE: The makuto is taken to a royal palm tree and buried at its base. It remains there for three days.',
        'STEP 2 - CROSSROADS: After three days at the palm tree, the makuto is taken to a crossroads and buried there for another three days.',
        'STEP 3 - IGBODU: Finally, the makuto is taken to the Igbodu (sacred room), covered with a white sheet, and unveiled on the day of the vestment ceremony.',
        'During each burial, offerings may be made to Eleggua to empower the makuto and ensure the novice\'s protection.',
        'The sequence represents Eleggua\'s domains: the palm tree (elevation/communication), the crossroads (paths/choices), and the sacred room (the Orisha\'s home).'
      ],
      notes: 'This ceremony is essential for activating the makuto\'s spiritual power. Without these three burials, the Eleggua is not considered properly "born" or empowered to serve the novice.'
    },
    feedingRituals: getRitualsForOrisha('eleggua')
  },
  {
    id: 'obatala',
    name: 'Obatala',
    yorubaName: 'Obatalá',
    catholicSyncretism: 'Our Lady of Mercy / Virgen de la Merced',
    colors: ['White', 'Silver'],
    number: 8,
    domain: 'Creation, Purity, Wisdom, Elder of the Orishas',
    symbol: 'White cloth, Silver, Efun (white chalk)',
    icon: <Crown className="w-6 h-6" />,
    description: `Obatala is the eldest of the Orishas and the creator of human bodies. In the rituals of pure Cuban Santeria, Obatala created life and gave life to all the Orishas. He symbolizes life not only for the gods but for mankind also. When Olodumare created Earth and gave life to everything alive, the first thing He did was make Obatala in His semblance. He was given the task to watch over all living creatures. He is King, and as such is responsible before Olorun for the well-being, justice, and peace of all His subjects. Darkness and Light are his responsibilities. He created the albinos which eventually became the white man. He mediates among the Orishas when they quarrel, referring them to Orunmila for judgment, but the final reward or punishment is up to Him. He built the first castle which contained sixteen windows — sixteen windows for the main sixteen Orishas. He presides over every household and does His utmost to get a decent, clean house for you to live in. That is why people in need of housing, health, justice and peace go to Him. He is all purity, cleanliness and spirituality. His garments are immaculate white and he has very little tolerance for rudeness, untidiness, and disobedience. He takes special care of the lamed, disabled, and old people. It is said that sometimes He disguises himself as either one of those people to see how the rest of the people treats them, and accordingly will give reward. Obatala is the only Orisha who speaks in all sixteen signs of the Diloggun oracle. No matter which Orisha the priest-priestess may be vested with, they have to lean on and rely on Obatala for wisdom and as a peacemaker with their particular Orisha. Even Eleggua, who is always the first to be chanted and to be given offerings, will not hesitate to pay homage to Him.`,
    attributes: [
      'Creator of human bodies and forms',
      'Eldest and most respected of the Orishas — the Elder of the White Cloth',
      'Created life and gave life to all the Orishas',
      'Made in Olodumare\'s semblance to watch over all living creatures',
      'King responsible before Olorun for well-being, justice, and peace',
      'Built the first castle with sixteen windows for the sixteen main Orishas',
      'Presides over every household — invoked for housing, health, justice and peace',
      'Represents purity, wisdom, patience, cleanliness and spirituality',
      'Associated with the head (ori) and consciousness',
      'Peacemaker among the Orishas who mediates quarrels',
      'Only Orisha who speaks in all sixteen signs of the Diloggun oracle',
      'All priests, regardless of their guardian Orisha, must rely on Obatala for wisdom',
      'Takes special care of the lamed, disabled, and elderly',
      'Disguises himself to test how people treat the vulnerable',
      'Has little tolerance for rudeness, untidiness, and disobedience'
    ],
    sacredObjects: [
      'White beads',
      'Silver objects',
      'Efun (white chalk)',
      'White cloth — his sacred garments are immaculate white',
      'White ceramic or silver bowl',
      'White yam (iyan) as food offering',
      'White cotton cap or hat',
      'Items for the head (ori) — Obimeyi (head cleansing items)'
    ],
    pataki: {
      title: 'Obatala and the Drunken Creation',
      story: 'Obatala was given the task of creating human bodies from clay. One day, while working, he became drunk on palm wine and began creating humans with deformities — those with hunched backs, extra fingers, or other differences. When Olorun saw this, he took the task away from Obatala and gave it to Orunmila. Obatala became the protector of all those who are different, and his devotees often include people with disabilities whom he protects.',
      moral: 'Even in our mistakes, we find our purpose. Obatala protects those whom society overlooks.'
    },
    additionalPatakis: [
      {
        title: 'Obatala Binds Olokun',
        story: 'One pataki says that when Olokun tried to submerge Earth in water (perhaps a reference to the Deluge) because the people were dumping all their garbage at sea, Obatala bound her with silver chains to the bottom of the sea until she placated her ire. This demonstrates Obatala\'s power over both creation and destruction, and his role as the mediator who can calm even the most furious forces of nature.',
        moral: 'Even the most destructive forces can be calmed through wisdom and restraint rather than force.'
      }
    ],
    fromOsha: 'Chapter 4: Obatals (pp. 121-124); Chapter 7: Obatala\'s Throne (p. 233)',
    paths: [
      { name: 'Oshanla', description: 'The eldest and most respected Obatala. Completely white, associated with purity and wisdom. He is the king of all Obatalas and the most peaceful.' },
      { name: 'Oshaguiyan (Osha ge ri yan)', description: 'The warrior Obatala who fought in all the great battles. He carries a sword and is associated with justice and righteous warfare.' },
      { name: 'Orishanla', description: 'Another ancient form of Obatala, associated with the creation of the world. He represents the oldest wisdom.' },
      { name: 'Obatala Orole', description: 'Obatala of the mountains. He is associated with high places and the coolness of the mountain peaks.' },
      { name: 'Obatala Ayaguna (Ayai-guna)', description: 'The warrior who carries a sword. He fights for justice and protects those who are wronged.' },
      { name: 'Obatala Alagemo (Aguee-ma o)', description: 'Associated with the chameleon, representing adaptability and the ability to blend into any situation while maintaining inner peace.' },
      { name: 'Asho', description: 'A known path of Obatala.' },
      { name: 'Aiya-lo ua', description: 'A known path of Obatala.' },
      { name: 'Ele-fo-uro', description: 'A known path of Obatala.' },
      { name: 'Iye-kuo- Yeku o', description: 'A known path of Obatala.' },
      { name: 'Obba Moro', description: 'A known path of Obatala.' },
      { name: 'Oro Lou', description: 'A known path of Obatala.' },
      { name: 'Yem-bo', description: 'Female path of Obatala and supposedly Eleggua\'s mother in a pataki.' }
    ],
    throne: {
      title: "Obatala's Throne (The White Throne)",
      description: 'Of all the Orishas, Obatala has the simplest throne. According to "The Osha" (p. 233), it will be all white — the draperies, hand fans, all silk or large cloth handkerchiefs (about eight) will be white. Whatever other adornments are placed inside the tent-canopy throne (not too many) will be white. Very seldom are any other colors used in Obatala\'s throne.',
      setup: [
        'A tent-canopy throne structure draped completely with white sheets or white cloth (manta)',
        'All draperies are white — inside and outside the throne',
        'Hand fans placed inside are white',
        'All silk or large cloth handkerchiefs (about eight) are white',
        'A white chair or seat is placed inside for the Yawo (novice) to sit upon',
        'White candles are placed around the throne',
        'Items for the head cleansing (Obimeyi) are placed nearby: white plates, coconut, cotton, white cap, efun (cascarilla), and holy water',
        'The white pigeon used in the ceremony may be displayed',
        'Simple white flowers may be used as decoration',
        'Very few other adornments — not too many decorations',
        'Very seldom are any other colors used in Obatala\'s throne'
      ],
      notes: 'Obatala\'s throne represents purity above all else. The complete covering in white cloth symbolizes his domain over cleanliness, spirituality, and moral uprightness. Unlike the elaborate thrones of other Orishas with their multiple colors and hanging items, Obatala\'s all-white throne teaches that true power needs no ostentation — the white cloth itself is the highest honor. The eight white handkerchiefs represent the number 8, which is Obatala\'s sacred number.'
    },
  },
  {
    id: 'oshun',
    name: 'Oshun',
    yorubaName: 'Oshún / Osun',
    catholicSyncretism: 'Virgen de la Caridad del Cobre',
    colors: ['Yellow', 'Gold', 'Amber'],
    number: 5,
    domain: 'Rivers, Love, Fertility, Money, Beauty, Sweetness',
    symbol: 'Fan, Mirror, Sunflowers, Honey',
    icon: <Droplets className="w-6 h-6" />,
    description: `Oshun is the Orisha of rivers, love, fertility, and sweetness. She represents the joy of life, sensuality, and feminine power. Oshun is the youngest daughter of Obatala and is often considered his favorite. She governs the fresh waters of the world — rivers, streams, and lakes. Oshun is associated with luxury, beauty, and fine things. Without her blessing, no Orisha can bring abundance. She is invoked for matters of love, money, fertility, and healing.`,
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
      title: 'The Legend of Oshun\'s Birth',
      story: 'Oshun was the last Orisha to arrive at the creation of the world. All the other Orishas had already chosen their domains — Ogun took the forest, Shango took fire and thunder, Yemaya took the ocean. When Oshun arrived, there was nothing left for her. She began to weep, and her tears formed the rivers of the world. The other Orishas realized that without her fresh waters, their domains would wither and die. They acknowledged her power, and now no Orisha can work without her blessing.',
      moral: 'Never underestimate the power of sweetness and gentleness. Even the mightiest warrior needs the river\'s refreshment.'
    },
    fromOsha: 'Chapter 4: Oshun (p. 124)',
    paths: [
      { name: 'Oshun Yalode', description: 'The mother of wealth and abundance. She owns all the money in the world and is invoked for financial prosperity.' },
      { name: 'Oshun Ibu Akuaro', description: 'The quail, representing Oshun\'s more reserved and secretive side. She moves quietly and observes before acting.' },
      { name: 'Oshun Ibu Colade', description: 'The vulture, representing Oshun\'s ability to transform death into life. She cleanses and purifies.' },
      { name: 'Oshun Ibu Aña', description: 'Associated with drums and rhythm. She loves music and dance, and is very playful and youthful.' },
      { name: 'Oshun Ibu Oña', description: 'The road opener. She clears paths for her children and helps them find their way in life.' },
      { name: 'Oshun Sekese', description: 'The fan, representing coolness and refreshment. She brings relief from heat and stress.' },
      { name: 'Oshun Miwá', description: 'The beautiful one, representing physical beauty and attraction. She governs cosmetics and adornment.' }
    ]
  },
  {
    id: 'yemaya',
    name: 'Yemaya',
    yorubaName: 'Yemayá / Yemonja',
    catholicSyncretism: 'Virgen de Regla (Our Lady of Regla)',
    colors: ['Blue and White', 'Silver', 'Crystal'],
    number: 7,
    domain: 'Ocean, Motherhood, Family, Protection, Maternity',
    symbol: 'Anchor, Fish, Moon, Mermaid',
    icon: <Moon className="w-6 h-6" />,
    description: `Yemaya is the Orisha of the ocean and the mother of all living things. She represents motherhood in its most primal and protective form. Yemaya is the sister of Oshun and the mother of many other Orishas, including Shango. She is associated with the full moon, the tides, and the mysteries of the deep ocean. Yemaya is the nurturer who provides unconditionally, but she can also be fierce when protecting her children. She is invoked for matters of family, children, pregnancy, and protection.`,
    attributes: [
      'Mother of all living things',
      'Orisha of the ocean and all waters',
      'Represents primal motherhood and protection',
      'Mother of Shango and many other Orishas',
      'Associated with the moon and tides',
      'Can be nurturing or fierce, like the sea'
    ],
    sacredObjects: [
      'Blue and white beads',
      'Silver objects',
      'Seashells',
      'Fan',
      'Mermaid imagery',
      'Watermelon, brown sugar, molasses as offerings',
      'Blue ceramic bowl'
    ],
    pataki: {
      title: 'Yemaya and the Creation of the World',
      story: 'When Obatala descended on the golden chain to create the earth, it was Yemaya who provided the primordial waters from which the land was formed. When humanity was created, Yemaya offered her waters to nourish them. She is the source of all life, the womb from which all creation emerges. Even now, every life begins in the watery womb, carrying Yemaya\'s essence.',
      moral: 'We all come from the water, from the mother. Respect the ocean, for it is the source of all life.'
    },
    fromOsha: 'Chapter 4: Yemaya (p. 137)',
    paths: [
      { name: 'Yemaya Asesu', description: 'The founder of the house, the one who establishes lineage. She is associated with the foam of the sea.' },
      { name: 'Yemaya Achaba', description: 'The violent sea, representing the dangerous and unpredictable side of the ocean. She can be destructive when angered.' },
      { name: 'Yemaya Ibu Okoto', description: 'The oyster, representing hidden treasure and the womb. She protects children and pregnant women.' },
      { name: 'Yemaya Ibu Konla', description: 'The calm surface of the ocean. She represents peace and tranquility in the home.' },
      { name: 'Yemaya Mayelewo', description: 'The agitated sea. She is restless and constantly moving, representing change and transformation.' },
      { name: 'Yemaya Akuara', description: 'The beach where the ocean meets the shore. She represents the boundary between worlds.' },
      { name: 'Yemaya Timbele', description: 'The deepest part of the ocean. She holds the greatest mysteries and secrets.' }
    ]
  },
  {
    id: 'shango',
    name: 'Shango',
    yorubaName: 'Shangó / Changó',
    catholicSyncretism: 'Saint Barbara (Santa Barbara)',
    colors: ['Red and White', 'Scarlet'],
    number: 6,
    domain: 'Thunder, Lightning, Fire, War, Justice, Dance, Drums',
    symbol: 'Double-headed axe (Oshe), Bata drums, Fire',
    icon: <Flame className="w-6 h-6" />,
    description: `Shango is the Orisha of thunder, lightning, fire, and war. He was once a mortal king of the Oyo empire in Yorubaland who became deified after death. Shango represents masculine power, passion, justice, and the transformative power of fire. He is the patron of drumming and dance, and his followers are known for their energy and charisma. Shango is invoked for matters of justice, victory over enemies, passion, and vitality. He is one of the most popular Orishas in the diaspora.`,
    attributes: [
      'Former mortal king of Oyo, now divine',
      'Orisha of thunder, lightning, and fire',
      'Represents justice, passion, and masculine power',
      'Patron of drumming and dance',
      'Associated with the bata drums',
      'One of the most popular Orishas in the diaspora'
    ],
    sacredObjects: [
      'Red and white beads',
      'Double-headed axe (Oshe Shango)',
      'Bata drums',
      'Wooden mortar (throne)',
      'Apples, bananas, red wine as offerings',
      'Maraca (shekere)'
    ],
    pataki: {
      title: 'The King Who Became Thunder',
      story: 'Shango was the fourth king of Oyo, a powerful and feared ruler. His reign was marked by prosperity but also by tyranny. When his subjects rebelled against his harsh rule, Shango fled into the forest rather than face defeat. As he hung himself from an iroko tree, thunder and lightning erupted from his body, and he ascended to become an Orisha. His followers declared that he did not die but became the thunder itself, and to this day, Shango speaks through the storm.',
      moral: 'Power must be balanced with justice. Even a fallen king can be transformed into divine force.'
    },
    fromOsha: 'Chapter 4: Shango (p. 140)',
    paths: [
      { name: 'Shango Alafin', description: 'The king, the ruler. This is Shango in his most royal and authoritative form, associated with leadership and justice.' },
      { name: 'Shango Obadimeyi', description: 'The double-headed king, representing the two sides of Shango\'s nature — creation and destruction.' },
      { name: 'Shango Aganju', description: 'The volcano, the eruptive force. This path represents raw power and explosive energy.' },
      { name: 'Shango Obakoso', description: 'The king who hangs himself, representing the transformation from human to Orisha. Associated with the mystery of death and rebirth.' },
      { name: 'Shango Dina', description: 'The thunderbolt, the direct strike of lightning. He acts swiftly and decisively.' },
      { name: 'Shango Lade', description: 'The crown, representing royal authority and the right to rule. He governs legitimate leadership.' },
      { name: 'Shango Olufina', description: 'The owner of white cloth, representing the connection between fire and purity. He brings purification through flames.' }
    ]
  },
  {
    id: 'ogun',
    name: 'Ogun',
    yorubaName: 'Oggun / Ogún',
    catholicSyncretism: 'Saint Peter (San Pedro)',
    colors: ['Green and Black', 'Red and Black'],
    number: 3,
    domain: 'Iron, War, Technology, Labor, Surgery, Civilization',
    symbol: 'Iron tools, Machete, Anvil, Chains',
    icon: <Sword className="w-6 h-6" />,
    description: `Ogun is the Orisha of iron, war, and technology. He represents the transformative power of iron and the civilizing force of labor. Ogun clears the path through the forest with his machete, making way for civilization. He is the patron of blacksmiths, warriors, surgeons, and anyone who works with metal. Ogun is associated with both construction and destruction — he builds cities but also wages war. He is invoked for matters of work, victory, protection, and removing obstacles.`,
    attributes: [
      'Orisha of iron and all metals',
      'Patron of warriors, blacksmiths, and surgeons',
      'Clears paths and removes obstacles',
      'Represents labor and civilization',
      'Associated with both construction and destruction',
      'Can be furious and never fully at peace'
    ],
    sacredObjects: [
      'Green and black beads',
      'Iron tools and implements',
      'Machete',
      'Anvil',
      'Chains',
      'Palm oil, smoked fish, jutia as offerings',
      'Metal cauldron (iron pot)'
    ],
    pataki: {
      title: 'Ogun and the Path Through the Forest',
      story: 'When the Orishas first came to earth, they found the forest impassable. Ogun took his machete and cut a path through the dense vegetation, allowing the other Orishas to establish their domains. But as civilization grew, Ogun found himself increasingly marginalized. He retreated into the forest, becoming wild and furious. To this day, he is called upon to clear obstacles and open paths, but he must be properly honored or his anger can be destructive.',
      moral: 'Progress requires sacrifice and labor. Honor those who do the hard work, or they may turn against you.'
    },
    fromOsha: 'Chapter 4: Oggun (p. 152); Chapter 7: Vestment (pp. 227-228)',
    paths: [
      { name: 'Ogun Onire', description: 'The crowned one, the king of the warriors. He is the most senior Ogun and owns all crowns.' },
      { name: 'Ogun Alagbede', description: 'The blacksmith, the worker of iron. He is the patron of all who work with metal.' },
      { name: 'Ogun Shibiriki', description: 'The violent one, the executioner. He deals death swiftly and without mercy.' },
      { name: 'Ogun Onile', description: 'The owner of the house/earth. He clears the path for civilization and protects the home.' },
      { name: 'Ogun Mele', description: 'The deaf one who cannot hear pleas for mercy. He is relentless in pursuit of his goals.' },
      { name: 'Ogun Arere', description: 'The one who carries the bell. He announces his coming and warns of his approach.' },
      { name: 'Ogun Akirun', description: 'The warrior who fights at the front of battles. He leads the charge and never retreats.' }
    ],
    throne: {
      title: "Oggun's Throne",
      description: 'Much like Eleggua, two thrones are made: one in the backyard (very simple) and another in the Igbodu. Both are made of the same materials as Eleggua\'s throne.',
      setup: [
        'Inside the throne hang seven small bottles of rum or firewater',
        'Seven jicaras (gourds) painted with Oggun\'s colors (black and white)',
        'The jicaras are filled with: smoked fish, smoked jutia (bush rat), candies, seven guinea pepper grains, seven pennies, seven small pieces of iron, copper, brass, etc.',
        'The jicaras are hung from the throne\'s ceiling at about the height of the mariwo curtain',
        'Mariwo (palm leaf fiber) curtain on top and at the back',
        'Covered with white sheets',
        'Modern variation: Some Oggun thrones are made of wood or cardboard shaped and painted to resemble a grotto'
      ],
      notes: 'The throne represents Oggun\'s domain over iron, labor, and the wilderness. The iron pieces symbolize his forge and tools.'
    },
    makuto: {
      title: "Oggun's Vestment Stone & Iron Pot (The Load)",
      ingredients: [
        'A large stone brought from the forest (or from the sea according to Oggun\'s path)',
        'A solid iron pot made specially for this occasion (much bigger than the warrior set pot)',
        'No less than nine working tools (normal size): machete, ax, shovel, push rod, hammer, pickax, rifle, piece of railroad rail, anvil, etc.',
        'A large iron chain (about four feet long)',
        'Three worn horse shoes',
        'A pair of handcuffs',
        'One bow and arrow',
        'A special Oshosi (about three feet long) from which twenty-one smaller tools hang',
        'The Oshosi must be washed with twenty-one different herbs and twenty-one gray pigeons sacrificed to it',
        'Skull of a black dog (found in many Oggun iron pots)'
      ],
      procedure: `The stone, iron pot, and tools are washed with Omiero while seven chants to Oggun are chanted. A single rooster is sacrificed to the stone before washing it with Omiero. Lots of corozo lard and honey is poured over the stone. Then it is washed again with Omiero and taken to the backyard where the Yawo (novice) will sit for the vestment ceremony. It is brought back to the Igbodu when Yawo comes in and placed inside the throne for Yawo to sit on (instead of Shango's inverted mortar). The special Oshosi with twenty-one tools is placed in the middle of the iron pot and never taken out.`,
      notes: 'The iron pot and its contents represent Oggun\'s forge and his power over iron, labor, and warfare. The black dog skull is a traditional element connecting to his ancient worship.'
    },
    bushCeremony: {
      title: "Oggun's Forest Ceremony",
      description: 'The ceremony to empower Oggun\'s stone and tools involves taking them to the forest where Oggun dwells. This connects the novice\'s Oggun to the primal source of his power.',
      steps: [
        'The stone is brought from the forest (or sometimes from the sea, according to Oggun\'s path)',
        'All tools, the iron pot, and the stone are washed with Omiero (sacred herbal water)',
        'Seven chants to Oggun are sung during the washing',
        'A single rooster is sacrificed to the stone before washing it with Omiero',
        'Lots of corozo lard and honey are poured over the stone',
        'The stone is washed again with Omiero',
        'Everything is taken to the backyard where the Yawo will sit for the vestment ceremony',
        'After the ceremony, it is placed inside the throne for Yawo to sit on',
        'The iron pot with all its contents remains with the novice as their Oggun'
      ],
      notes: 'This ceremony establishes the connection between the novice\'s Oggun and the ancestral power of the forest. The black dog sacrifice is traditional in Oggun worship, representing his dominion over death and the wilderness.'
    },
    sacrificeRituals: getRitualsForOrisha('ogun')
  },
  {
    id: 'oya',
    name: 'Oya',
    yorubaName: 'Oyá',
    catholicSyncretism: 'Saint Teresa (Santa Teresa) / Candelaria',
    colors: ['Brown', 'Burgundy', 'Multi-colored'],
    number: 9,
    domain: 'Wind, Storms, Change, Cemetery Gates, Transformation',
    symbol: 'Flywhisk (Irukere), Wind, Buffalo horns',
    icon: <Wind className="w-6 h-6" />,
    description: `Oya is the Orisha of winds, storms, and sudden change. She guards the cemetery gates and the realm of the dead. Oya represents transformation, the winds of change that sweep away the old to make room for the new. She was Shango's favorite wife and is the only female warrior Orisha who fought alongside him in battle. Oya is invoked for matters of transformation, protection from enemies, communication with ancestors, and navigating major life changes.`,
    attributes: [
      'Orisha of winds, storms, and hurricanes',
      'Guardian of the cemetery gates',
      'Represents sudden change and transformation',
      'Warrior who fought beside Shango',
      'Can raise the dead and control spirits',
      'Associated with the number 9'
    ],
    sacredObjects: [
      'Brown and multi-colored beads',
      'Flywhisk (irukere)',
      'Buffalo horns',
      'Masks',
      'Eggplant, black-eyed peas, spicy foods as offerings'
    ],
    pataki: {
      title: 'Oya and the Fire',
      story: 'Oya was married to Shango and was his most loyal companion. When Shango\'s enemies came to destroy him, Oya used her winds to protect him and her power over fire (which she took from him) to fight his battles. She controls the winds of change that can either nurture or destroy. She stands at the cemetery gates, ensuring that the dead do not trouble the living and that the living show proper respect to the ancestors.',
      moral: 'Change is the only constant. Those who can harness the winds of change can transform their destiny.'
    },
    fromOsha: 'Chapter 4: Oya (p. 171)',
    paths: [
      { name: 'Oya Oriri', description: 'The whirlwind, the tornado. She represents the most destructive and transformative aspect of wind.' },
      { name: 'Oya Aksua', description: 'The rainbow, representing the bridge between worlds. She connects the living and the dead.' },
      { name: 'Oya Iansa', description: 'The mother of nine, representing fertility and the many forms of transformation.' },
      { name: 'Oya Afum', description: 'The darkness, the night. She rules over the cemetery after sunset.' },
      { name: 'Oya Timba', description: 'The grave digger, the one who buries the dead. She ensures proper transition to the ancestral realm.' },
      { name: 'Oya Okute', description: 'The stone, representing permanence and the foundation of the cemetery.' },
      { name: 'Oya Orara', description: 'The spark that starts the fire. She initiates change and transformation.' }
    ]
  },
  {
    id: 'oshosi',
    name: 'Oshosi',
    yorubaName: 'Ochosi / Oshosi',
    catholicSyncretism: 'Saint Norbert',
    colors: ['Blue and Yellow', 'Green and Yellow'],
    number: 4,
    domain: 'The Hunt, Justice, Protection, Runaway Slaves',
    symbol: 'Bow and Arrow, Hunting net, Deer',
    icon: <Eye className="w-6 h-6" />,
    description: `Oshosi is the Orisha of the hunt and justice. He is a skilled hunter and tracker who protects those who seek justice. During the era of slavery, Oshosi was invoked by runaway slaves (cimarrones) to cover their tracks and confuse their pursuers. He protects animals and ensures that hunters respect the balance of nature. Today, he is called upon by those dealing with legal matters, court cases, and anyone seeking justice. He is part of the "Warrior Set" along with Eleggua, Ogun, and Osun.`,
    attributes: [
      'Orisha of hunting and tracking',
      'Protector of those seeking justice',
      'Called upon by runaway slaves for protection',
      'Part of the Warrior Set (Guerreros)',
      'Changes wind direction to confuse enemies',
      'Associated with the bow and arrow'
    ],
    sacredObjects: [
      'Blue and yellow beads',
      'Bow and arrow',
      'Hunting net',
      'Deer antlers',
      'Sesame seeds, corn, game meat as offerings'
    ],
    pataki: {
      title: 'Oshosi and the Runaway Slaves',
      story: 'During the years of slavery, many enslaved people escaped into the forests. They believed their cause was just and called upon Oshosi constantly to help them gain their freedom. Oshosi protected them by changing the wind direction, making the hunters lose their tracks. He ensured that those seeking justice and freedom would find it. After slavery ended, anyone with legal troubles would call upon Oshosi to mediate with the courts.',
      moral: 'Justice will find those who seek it with a pure heart. The hunter who respects the balance will always be protected.'
    },
    fromOsha: 'Chapter 4: Oshosi (p. 187)',
    paths: [
      { name: 'Oshosi Ode', description: 'The hunter, the tracker. He is the skilled woodsman who never loses his prey.' },
      { name: 'Oshosi Onire', description: 'The crowned one, the king of hunters. He owns the crown of the forest.' },
      { name: 'Oshosi Alara', description: 'The one who hunts with the bow. He is the master archer who never misses.' },
      { name: 'Oshosi Ode Remo', description: 'The fisherman, representing Oshosi\'s connection to water and fishing.' },
      { name: 'Oshosi Alaye', description: 'The owner of the world. He knows all the secrets of the forest.' }
    ]
  },
  {
    id: 'osun',
    name: 'Osun',
    yorubaName: 'Osun',
    catholicSyncretism: 'Saint John the Baptist (San Juan Bautista)',
    colors: ['Yellow and Gold'],
    number: 16,
    domain: 'Lookout, Messenger, Guardian of the Head',
    symbol: 'Tall metal cup with rooster on top',
    icon: <Mountain className="w-6 h-6" />,
    description: `Osun (not to be confused with Oshun) is a lesser deity who serves as a lookout for Eleggua and a guardian of the head (Ori). He is always received as part of the "Warrior Set" along with Eleggua, Ogun, and Oshosi. Osun is represented by a tall metal cup with a rooster standing on top and four jingle bells hanging from the sides. His primary function is to watch over the person and alert them to danger. If Osun falls from his place, it is considered a very bad omen, usually a warning of death.`,
    attributes: [
      'Lookout and guardian',
      'Part of the Warrior Set (Guerreros)',
      'Watches over the person\'s head (Ori)',
      'Alerts to danger and warns of death',
      'Must be kept high, never on the floor',
      'Never to be opened after receiving'
    ],
    sacredObjects: [
      'Tall metal cup with rooster on top',
      'Four jingle bells',
      'Secrets (load) inside given by Babalawo',
      'Placed high above the person\'s head'
    ],
    pataki: {
      title: 'The Vigilant Rooster',
      story: 'Osun was given the task of watching over humans while they sleep, alerting them to danger and waking them when death approaches. He stands eternally vigilant, the rooster on top crowing to warn of approaching threats. If Osun falls, it means he has failed in his duty or the person is beyond saving. This is why Osun must always be kept secure and elevated.',
      moral: 'Vigilance is the price of safety. Never ignore the warnings of your guardian.'
    },
    fromOsha: 'Chapter 4: Osun (p. 187)',
    paths: [
      { name: 'Osun Niko', description: 'The guardian of the head. He watches over the Ori and alerts to danger.' },
      { name: 'Osun Yakuru', description: 'The one who never sleeps. He is eternally vigilant.' },
      { name: 'Osun Eleiye', description: 'The bird, representing the messenger aspect of Osun.' }
    ]
  },
  {
    id: 'olokun',
    name: 'Olokun',
    yorubaName: 'Olókun',
    catholicSyncretism: 'Saint Francis of Assisi / Our Lady of the Assumption',
    colors: ['Dark Blue', 'Green', 'Purple', 'Black'],
    number: 7,
    domain: 'Deep Ocean, Wealth, Secrets, Dreams, The Unconscious',
    symbol: 'Deep sea, Treasure, Chain, Fan made of iridescent material',
    icon: <Moon className="w-6 h-6" />,
    description: `Olokun is the Orisha of the deep ocean, the depths where light does not reach. He/She represents unfathomable wealth, secrets, dreams, and the mysteries of the unconscious mind. Olokun is androgynous and can manifest as male or female. While Yemaya rules the surface of the ocean, Olokun owns the depths. Olokun is associated with immense wealth and is invoked for prosperity, but also represents the dark mysteries that lie beneath the surface of consciousness.`,
    attributes: [
      'Owner of the ocean depths (Yemaya owns the surface)',
      'Androgynous — can manifest as male or female',
      'Guardian of unfathomable wealth and treasure',
      'Ruler of dreams and the unconscious',
      'Associated with deep secrets and mysteries',
      'Can bring great prosperity or devastating floods'
    ],
    sacredObjects: [
      'Dark blue, green, purple, and black beads',
      'Fan made of iridescent or dark material',
      'Chain (representing the depths)',
      'Treasure imagery (coins, jewels)',
      'Deep sea shells',
      'Watermelon, molasses as offerings'
    ],
    pataki: {
      title: 'The Treasure of the Deep',
      story: 'Olokun lived at the bottom of the ocean, guarding unimaginable treasures. Humans, greedy for wealth, would try to dive deep to steal from Olokun\'s hoard, but none could survive the crushing depths. One day, Olorun sent a message that Olokun should share some wealth with humanity. Olokun refused, saying humans were not worthy. But Olorun reminded Olokun that wealth unused is worthless. Reluctantly, Olokun agreed to share treasures through dreams and intuition — the only way humans could safely access the depths. To this day, Olokun brings wealth through dreams and deep insight.',
      moral: 'True wealth lies in the depths of wisdom and intuition, not just material treasure. What is buried too deep to reach must be accessed through inner vision.'
    },
    fromOsha: 'Associated with deep ocean mysteries and wealth',
    paths: [
      { name: 'Olokun Male', description: 'The male manifestation of Olokun, associated with violent storms and masculine energy of the depths.' },
      { name: 'Olokun Female', description: 'The female manifestation, associated with the nurturing aspect of the deep that holds and protects secrets.' },
      { name: 'Olokun Onire', description: 'The crowned owner of the depths, representing royal wealth hidden beneath the sea.' }
    ]
  },
  {
    id: 'inle',
    name: 'Inle',
    yorubaName: 'Inle / Erinle',
    catholicSyncretism: 'Saint Raphael / Archangel Raphael',
    colors: ['Blue and Yellow', 'Green and Yellow'],
    number: 6,
    domain: 'Hunting, Fishing, Healing, Abundance, The Inland Waters',
    symbol: 'Fish, Fishing hook, Snake, Seven metal bracelets',
    icon: <Droplets className="w-6 h-6" />,
    description: `Inle is the Orisha of hunting, fishing, and healing. He represents abundance from the waters and the knowledge of medicinal herbs. Inle is a divine hunter who knows the secrets of all plants and animals. He is associated with inland waters — rivers, lagoons, and estuaries. Inle is also a great healer and is invoked for health and prosperity. He is often depicted as a beautiful young fisherman and is syncretized with the Archangel Raphael, the healer.`,
    attributes: [
      'Divine hunter and fisherman',
      'Healer with knowledge of medicinal herbs',
      'Bringer of abundance and prosperity',
      'Associated with inland waters and estuaries',
      'Beautiful and youthful in appearance',
      'Syncretized with Archangel Raphael'
    ],
    sacredObjects: [
      'Blue and yellow or green and yellow beads',
      'Fishing hook and net',
      'Seven metal bracelets',
      'Fish imagery',
      'Snake symbolism',
      'Fish, seafood, yams as offerings'
    ],
    pataki: {
      title: 'The Healer Hunter',
      story: 'Inle was the most skilled hunter and fisherman in all the lands. But he was also lonely, as his time in the wilderness kept him from human company. One day, he discovered a plant that could heal any illness. He brought this medicine to humanity, who welcomed him as a healer. Inle taught that the forest and waters provide everything needed for healing — one only needs to know where to look. He became the patron of those who work with herbs and those who seek abundance from nature.',
      moral: 'Nature provides all that is needed for healing and abundance. Those who respect and understand the natural world become its greatest beneficiaries.'
    },
    fromOsha: 'Popular Orisha for healing and abundance work',
    paths: [
      { name: 'Inle Odo', description: 'The river Inle, associated with flowing waters and the movement of healing energy.' },
      { name: 'Inle Oke', description: 'The mountain Inle, representing the elevation of consciousness and healing.' },
      { name: 'Inle Ode', description: 'The hunter Inle, focused on the pursuit and capture of both game and healing knowledge.' }
    ]
  },
  {
    id: 'yewa',
    name: 'Yewa',
    yorubaName: 'Yewá',
    catholicSyncretism: 'Saint Clare of Assisi / Our Lady of Mount Carmel',
    colors: ['Pink', 'Mauve', 'Lavender'],
    number: 11,
    domain: 'Cemetery, Death, Purity, Virginity, Transformation',
    symbol: 'Coffin, Tomb, Fan, Pink flowers',
    icon: <Skull className="w-6 h-6" />,
    description: `Yewa is the Orisha of the cemetery, death, and transformation. She lives in the cemetery and guards the boundary between life and death. Yewa represents purity and virginity — she is the only female Orisha who remains apart from male influence. She is associated with transformation because death is the greatest transformation. Yewa works closely with Oya (who guards the cemetery gate) and is invoked for matters of death, transformation, and protection in the cemetery.`,
    attributes: [
      'Lives in the cemetery and rules over death',
      'Represents purity, virginity, and separation',
      'Guardian of the boundary between life and death',
      'Associated with transformation and rebirth',
      'Works with Oya at the cemetery gates',
      'Must never be exposed to male Orishas except Obatala'
    ],
    sacredObjects: [
      'Pink, mauve, and lavender beads',
      'Coffin or tomb imagery',
      'Fan',
      'Pink flowers',
      'Placed high, away from male Orishas',
      'Yams, corn, rice as offerings'
    ],
    pataki: {
      title: 'The Virgin of the Cemetery',
      story: 'Yewa was so beautiful that all the male Orishas desired her. To protect her purity, Obatala sent her to live in the cemetery, where she would be separated from the world of the living and the desires of the Orishas. In the cemetery, she discovered her true power — the power of transformation. She learned that death is not an end but a transformation, and she became the guardian of this sacred transition. To this day, she remains pure and powerful, keeper of the secrets of death and rebirth.',
      moral: 'True power often requires separation and sacrifice. Death is transformation, not ending.'
    },
    fromOsha: 'Important Orisha for cemetery work and transformation',
    paths: [
      { name: 'Yewa Meyi', description: 'The dark Yewa who dwells deep in the tomb, representing the most hidden aspects of death.' },
      { name: 'Yewa Omo', description: 'The youthful Yewa who represents the purity of those who die young.' },
      { name: 'Yewa Yansa', description: 'The transformative Yewa who works closely with Oya to bring about change.' }
    ]
  },
  {
    id: 'nanaburuku',
    name: 'Nana Buruku',
    yorubaName: 'Naná Burukú',
    catholicSyncretism: 'Saint Anne (Santa Ana) / Our Lady of the Immaculate Conception',
    colors: ['Purple', 'Black', 'Brown', 'White spots'],
    number: 7,
    domain: 'Ancient Earth, Swamp, Mud, Ancestral Power, Witchcraft',
    symbol: 'Mud, Swamp, Snail shells, Old basket',
    icon: <Mountain className="w-6 h-6" />,
    description: `Nana Buruku is the ancient mother of the earth, older than Obatala and grandmother to many Orishas. She represents primal earth energy, swamps, and the creative power of mud. Nana Buruku is associated with witchcraft and ancient ancestral power. She moves slowly but with immense force. Nana Buruku is invoked for matters requiring deep ancestral connection, ancient wisdom, and the most serious spiritual work. She is the oldest of the female Orishas.`,
    attributes: [
      'Ancient mother, grandmother of the Orishas',
      'Older than Obatala in some traditions',
      'Ruler of swamps, mud, and primal earth',
      'Associated with ancient witchcraft',
      'Moves slowly but with great power',
      'Most serious and ancient of the female Orishas'
    ],
    sacredObjects: [
      'Purple, black, brown, and white-spotted beads',
      'Mud and swamp elements',
      'Snail shells',
      'Old basket',
      'Chain',
      'Yams, corn, sesame as offerings'
    ],
    pataki: {
      title: 'The Ancient Mother',
      story: 'Before Obatala descended to create the world, Nana Buruku already existed in the primordial mud. She is the swamp that existed before dry land, the ancient mother from whom all earth energy flows. When the younger Orishas fight among themselves, it is Nana Buruku who they fear, for her ancient power predates their conflicts. She moves slowly, like the swamp reclaiming land, but nothing can stop her once she decides to act.',
      moral: 'Ancient wisdom and primal power move slowly but are unstoppable. Respect the elders and the ancestors from whom all power flows.'
    },
    fromOsha: 'Ancient earth mother, grandmother of the Orishas',
    paths: [
      { name: 'Nana Buruku Ayaguna', description: 'The warrior aspect of the ancient mother, representing the force of nature that clears obstacles.' },
      { name: 'Nana Buruku Asesu', description: 'The founder aspect, representing the establishment of lineage and tradition from ancient times.' },
      { name: 'Nana Buruku Onire', description: 'The crowned ancient one, representing royal authority that comes from age and wisdom.' }
    ]
  },
  {
    id: 'babaluaye',
    name: 'Babalu-Aye',
    yorubaName: 'Babalú-Ayé',
    catholicSyncretism: 'Saint Lazarus (San Lazaro)',
    colors: ['Brown', 'Purple', 'Burlap'],
    number: 17,
    domain: 'Illness, Disease, Healing, Skin Conditions, Epidemics',
    symbol: 'Crutches, Dogs, Leper',
    icon: <Skull className="w-6 h-6" />,
    description: `Babalu-Aye is the Orisha of disease and healing. He represents illness, particularly skin diseases and epidemics, but also the power to heal them. He is depicted as a leper walking with crutches, accompanied by dogs. Babalu-Aye teaches compassion for the sick and suffering. He is invoked for healing from illness, protection from epidemics, and help with skin conditions. Despite his association with disease, he is greatly loved and his feast day (December 17) is one of the most important in the religion.`,
    attributes: [
      'Orisha of disease and healing',
      'Associated with skin conditions and leprosy',
      'Patron of those with chronic illness',
      'Walks with crutches, accompanied by dogs',
      'Teaches compassion for the suffering',
      'Can both send and cure epidemics'
    ],
    sacredObjects: [
      'Brown and purple beads',
      'Burlap cloth',
      'Crutches',
      'Dog imagery',
      'Roasted corn, sesame seeds, beans as offerings'
    ],
    pataki: {
      title: 'The Leper Who Heals',
      story: 'Babalu-Aye was once a handsome prince who was struck with leprosy as punishment for arrogance. He wandered the earth on crutches, accompanied only by dogs who showed him unconditional love. Through his suffering, he learned compassion and was granted the power to heal others. He became the Orisha who understands illness best and therefore knows how to cure it.',
      moral: 'Suffering teaches compassion. Those who have been through the worst pain often become the greatest healers.'
    },
    fromOsha: 'Chapter 4: Bebalu eye-Osowano-Shopono (p. 158)',
    paths: [
      { name: 'Babalu-Aye Lanjamu', description: 'The one who walks with crutches, representing the suffering aspect that teaches compassion.' },
      { name: 'Babalu-Aye Naki', description: 'The dog companion, representing the loyal aspect that never leaves the side of the afflicted.' },
      { name: 'Babalu-Aye So', description: 'The shadow, representing the disease itself and the dark journey through illness to healing.' },
      { name: 'Babalu-Aye Alashe', description: 'The one with power, representing the healing authority that can cure any disease.' },
      { name: 'Babalu-Aye Oluo', description: 'The owner of the road, representing the journey from sickness to health that all must travel.' }
    ]
  },
  {
    id: 'argayu',
    name: 'Argayu (Aggayu Sola)',
    yorubaName: 'Agayú Solá',
    catholicSyncretism: 'Saint Christopher',
    colors: ['Brown', 'Red', 'Seven Colors'],
    number: 12,
    domain: 'Volcanoes, Lava, Earth\'s Core, Dry Earth, Father of Shango',
    symbol: 'Volcano, Lava, Double-headed axe',
    icon: <Mountain className="w-6 h-6" />,
    description: `Argayu (also called Aggayu Sola) is the Orisha of volcanoes, lava, and the dry earth. He represents the core of the earth and the tectonic forces that shape the planet. Argayu is the father of Shango and is associated with the wilderness and long journeys. He is often depicted as a giant or a force of nature. Argayu is invoked for matters of travel, strength, grounding, and protection during journeys. His throne is painted with seven different colors representing the various aspects of the earth.`,
    attributes: [
      'Orisha of volcanoes and the earth\'s core',
      'Father of Shango',
      'Represents dry earth and wilderness',
      'Patron of travelers and long journeys',
      'Associated with tectonic and volcanic forces',
      'Depicted as a giant or force of nature'
    ],
    sacredObjects: [
      'Seven-color beads',
      'Double-headed axe',
      'Volcano imagery',
      'Ceramic or wood bowl painted with seven colors',
      'Stone as primary material representation'
    ],
    pataki: {
      title: 'The Volcano and the King',
      story: 'Argayu is the primordial force of the earth\'s core, the father of Shango. When Shango was born, Argayu gave him his fire and his power over thunder. The story of Kunapongo tells how Argayu, Oya, and Shango interact — Argayu providing the foundational earth, Oya the winds that shape it, and Shango the fire that transforms it. Together they represent the elemental forces of nature.',
      moral: 'True power comes from deep within, from the core of our being. Like the volcano, we must let our inner fire shape our outer world.'
    },
    fromOsha: 'Chapter 4: Argayu-Aggayu Sola (p. 175)',
    paths: [
      { name: 'Argayu Sola', description: 'The volcano itself, representing the eruptive force that shapes the earth.' },
      { name: 'Argayu Onile', description: 'The owner of the house/earth, representing the foundational nature of volcanic soil.' },
      { name: 'Argayu Ayanmo', description: 'The one associated with destiny, representing how earth forces shape human fate.' },
      { name: 'Argayu Oloke', description: 'The owner of the mountain, representing the high places where volcanic forces are strongest.' }
    ]
  },
  {
    id: 'osain',
    name: 'Osain',
    yorubaName: 'Osanyin / Osain',
    catholicSyncretism: 'Saint Joseph',
    colors: ['Green', 'Yellow and Green'],
    number: 'Varies',
    domain: 'Herbs, Plants, Healing, Magic, Forest',
    symbol: 'Staff with bird, Herbs, Leaves',
    icon: <Leaf className="w-6 h-6" />,
    description: `Osain is the Orisha of herbs, plants, and healing magic. He owns all the leaves and vegetation in the world and knows the medicinal and magical properties of every plant. Osain is essential for all ceremonies because no ritual can be performed without his herbs. The sacred infusion called "omi ero" (cool water) or "Osanyin" is made from his herbs and is used to bathe both sacred implements and practitioners. He is often depicted as a small figure made entirely of leaves. Without Osain, no Orisha can work.`,
    attributes: [
      'Owner of all herbs, leaves, and vegetation',
      'Master of healing and magical plants',
      'Essential for all ceremonies',
      'Knows the properties of every plant',
      'Often depicted as a figure made of leaves',
      'Without him, no Orisha can work'
    ],
    sacredObjects: [
      'Green and yellow beads',
      'Osain staff (wrought iron with birds)',
      'Sacred herbs and leaves (ewe)',
      'Various plants and roots',
      'Gourd or container for herbs'
    ],
    pataki: {
      title: 'The Secret of the Leaves',
      story: 'Osain knows the secret of every leaf — which heals, which harms, which brings love, which brings protection. When the other Orishas need to perform ceremonies, they must come to Osain for the proper herbs. He taught humanity the uses of plants for healing. However, he is also secretive and must be properly honored before he reveals his knowledge. His power is so great that even Orunmila consults him when making medicine.',
      moral: 'Nature holds all the secrets we need. Respect the plants, for they are the foundation of all healing and magic.'
    },
    fromOsha: 'Chapter 4: Osain: His Secrets (p. 182)',
    paths: [
      { name: 'Osain Nwele', description: 'The small one, representing Osain\'s diminutive size but immense power.' },
      { name: 'Osain Onire', description: 'The crowned one, representing royal authority over all vegetation.' },
      { name: 'Osain Olocha', description: 'The owner of the medicine, representing the healing aspect of herbal knowledge.' },
      { name: 'Osain Ata', description: 'The pepper, representing the fiery aspect of certain medicinal plants.' },
      { name: 'Osain Oke', description: 'The mountain Osain, representing plants that grow at high elevations.' }
    ]
  },
  {
    id: 'orunmila',
    name: 'Orunmila',
    yorubaName: 'Orúnmilà / Ifa',
    catholicSyncretism: 'Saint Francis of Assisi',
    colors: ['Green', 'Yellow'],
    number: 16,
    domain: 'Divination, Wisdom, Destiny, Knowledge of All Things',
    symbol: 'Divination tray (Opón Ifá), Iroke (diviner\'s staff), Palm nuts',
    icon: <Scroll className="w-6 h-6" />,
    description: `Orunmila is the Orisha of wisdom, knowledge, and divination. He is the only Orisha who knows all destinies and was present at creation to witness how Olorun created the universe. Unlike other Orishas who speak through one or two Odus, Orunmila speaks through all 16 cowrie shells (Merindilogun) and the 256 Odu Ifa. He is the patron of the Babalawos (priests of Ifa) and is consulted for the most serious matters. No major decision should be made without consulting Orunmila.`,
    attributes: [
      'Only witness to creation — knows all destinies',
      'Speaks through all 16 cowrie shells and 256 Odu Ifa',
      'Patron of Babalawos (Ifa priests)',
      'Orisha of supreme wisdom and divination',
      'Knows the remedies (ebbo) for every problem',
      'Can see the past, present, and future'
    ],
    sacredObjects: [
      'Divination tray (Opón Ifá)',
      'Palm nuts (Ikines)',
      'Diviner\'s staff (Iroke)',
      'Green and yellow beads',
      'Ifa chain (Opele)',
      'Palm oil, kola nuts as offerings'
    ],
    pataki: {
      title: 'The Witness to Creation',
      story: 'When Olorun created the universe, only Orunmila was permitted to watch. He observed how Olorun formed the earth, the waters, the sky, and humanity. Because of this, Orunmila knows the destiny (Ori) of every person and every possible outcome of every action. When humans need guidance, they consult Orunmila because he alone knows all the paths that lead to blessing (Ire) and those that lead to destruction (Osobo).',
      moral: 'Wisdom comes from witnessing and understanding the fundamental nature of existence. Seek knowledge before action.'
    },
    fromOsha: 'Orunmila is central to all Ifa and Merindilogun practice',
    paths: [
      { name: 'Orunmila Elerin Ipin', description: 'The witness to creation, the one who knows all destinies. This is Orunmila in his highest form as the supreme knower.' },
      { name: 'Orunmila Oluwaiye', description: 'The owner of the world, representing Orunmila\'s authority over all earthly matters through divination.' },
      { name: 'Orunmila Awo', description: 'The initiate, representing the esoteric knowledge passed from Babalawo to Babalawo.' },
      { name: 'Orunmila Baba Ifa', description: 'The father of Ifa, representing the origin of all divination systems.' }
    ]
  },
  {
    id: 'oba',
    name: 'Oba',
    yorubaName: 'Obá',
    catholicSyncretism: 'Saint Joan of Arc / Saint Rita',
    colors: ['Brown', 'Red', 'Burgundy'],
    number: 9,
    domain: 'Marriage, Loyalty, Sacrifice, River, Witchcraft Knowledge',
    symbol: 'Copper bracelet, Crown with ear cut off, Red cloth',
    icon: <Droplets className="w-6 h-6" />,
    description: `Oba is the Orisha of the river and marriage, known as Shango's most loyal wife. She represents the sacrifices women make for love and the importance of loyalty in marriage. According to pataki, Oba cut off her own ear to feed Shango, believing it would win his love from Oshun and Oya. She is associated with witchcraft knowledge and walks in darkness. Oba teaches the value of self-respect and warns against sacrificing one's dignity for love.`,
    attributes: [
      'Shango\'s legitimate wife and most loyal companion',
      'Orisha of marriage and domestic stability',
      'Represents sacrifice and loyalty (sometimes to a fault)',
      'Associated with witchcraft and night knowledge',
      'Teaches self-worth and dignity in relationships',
      'Patience and endurance in adversity'
    ],
    sacredObjects: [
      'Brown, red, and burgundy beads',
      'Copper bracelet',
      'Crown imagery (sometimes with one ear)',
      'Red cloth',
      'She-goat, yams, corn as offerings'
    ],
    pataki: {
      title: 'The Ear That Was Cut for Love',
      story: 'Oba was Shango\'s legitimate wife, but he spent more time with Oshun and Oya. Jealous, Oba asked Oshun\'s secret for winning Shango\'s love. Oshun lied and told her that she cut off her ear and fed it to Shango in his soup. Desperate to win her husband back, Oba cut off her own ear and put it in Shango\'s food. When Shango discovered this, he was horrified and repulsed. He abandoned Oba forever. Oba retreated to become the river that bears her name, teaching the lesson that one must never sacrifice their dignity for love.',
      moral: 'Never sacrifice your self-worth or dignity to please another. True love does not require self-destruction.'
    },
    fromOsha: 'Referenced in oriki tradition as "the patient one who walks with witches"',
    paths: [
      { name: 'Oba Nani', description: 'The original Oba, representing the river and the faithful wife who endures all hardship.' },
      { name: 'Oba Nsorola', description: 'The one who wears the crown, representing her legitimate status as Shango\'s wife.' },
      { name: 'Oba Yemin', description: 'The motherly Oba who nurtures despite her suffering, associated with the nurturing aspect of the river.' }
    ]
  },
  {
    id: 'olokun',
    name: 'Olokun',
    yorubaName: 'Olókun',
    catholicSyncretism: 'Saint Francis of Assisi / Our Lady of the Assumption',
    colors: ['Dark Blue', 'Green', 'Purple', 'Black'],
    number: 7,
    domain: 'Deep Ocean, Wealth, Secrets, Dreams, The Unconscious',
    symbol: 'Deep sea, Treasure, Chain, Fan made of iridescent material',
    icon: <Moon className="w-6 h-6" />,
    description: `Olokun is the Orisha of the deep ocean, the depths where light does not reach. He/She represents unfathomable wealth, secrets, dreams, and the mysteries of the unconscious mind. Olokun is androgynous and can manifest as male or female. While Yemaya rules the surface of the ocean, Olokun owns the depths. Olokun is associated with immense wealth and is invoked for prosperity, but also represents the dark mysteries that lie beneath the surface of consciousness.`,
    attributes: [
      'Owner of the ocean depths (Yemaya owns the surface)',
      'Androgynous — can manifest as male or female',
      'Guardian of unfathomable wealth and treasure',
      'Ruler of dreams and the unconscious',
      'Associated with deep secrets and mysteries',
      'Can bring great prosperity or devastating floods'
    ],
    sacredObjects: [
      'Dark blue, green, purple, and black beads',
      'Fan made of iridescent or dark material',
      'Chain (representing the depths)',
      'Treasure imagery (coins, jewels)',
      'Deep sea shells',
      'Watermelon, molasses as offerings'
    ],
    pataki: {
      title: 'The Treasure of the Deep',
      story: 'Olokun lived at the bottom of the ocean, guarding unimaginable treasures. Humans, greedy for wealth, would try to dive deep to steal from Olokun\'s hoard, but none could survive the crushing depths. One day, Olorun sent a message that Olokun should share some wealth with humanity. Olokun refused, saying humans were not worthy. But Olorun reminded Olokun that wealth unused is worthless. Reluctantly, Olokun agreed to share treasures through dreams and intuition — the only way humans could safely access the depths. To this day, Olokun brings wealth through dreams and deep insight.',
      moral: 'True wealth lies in the depths of wisdom and intuition, not just material treasure. What is buried too deep to reach must be accessed through inner vision.'
    },
    fromOsha: 'Associated with deep ocean mysteries and wealth'
  },
  {
    id: 'inle',
    name: 'Inle',
    yorubaName: 'Inle / Erinle',
    catholicSyncretism: 'Saint Raphael / Archangel Raphael',
    colors: ['Blue and Yellow', 'Green and Yellow'],
    number: 6,
    domain: 'Hunting, Fishing, Healing, Abundance, The Inland Waters',
    symbol: 'Fish, Fishing hook, Snake, Seven metal bracelets',
    icon: <Droplets className="w-6 h-6" />,
    description: `Inle is the Orisha of hunting, fishing, and healing. He represents abundance from the waters and the knowledge of medicinal herbs. Inle is a divine hunter who knows the secrets of all plants and animals. He is associated with inland waters — rivers, lagoons, and estuaries. Inle is also a great healer and is invoked for health and prosperity. He is often depicted as a beautiful young fisherman and is syncretized with the Archangel Raphael, the healer.`,
    attributes: [
      'Divine hunter and fisherman',
      'Healer with knowledge of medicinal herbs',
      'Bringer of abundance and prosperity',
      'Associated with inland waters and estuaries',
      'Beautiful and youthful in appearance',
      'Syncretized with Archangel Raphael'
    ],
    sacredObjects: [
      'Blue and yellow or green and yellow beads',
      'Fishing hook and net',
      'Seven metal bracelets',
      'Fish imagery',
      'Snake symbolism',
      'Fish, seafood, yams as offerings'
    ],
    pataki: {
      title: 'The Healer Hunter',
      story: 'Inle was the most skilled hunter and fisherman in all the lands. But he was also lonely, as his time in the wilderness kept him from human company. One day, he discovered a plant that could heal any illness. He brought this medicine to humanity, who welcomed him as a healer. Inle taught that the forest and waters provide everything needed for healing — one only needs to know where to look. He became the patron of those who work with herbs and those who seek abundance from nature.',
      moral: 'Nature provides all that is needed for healing and abundance. Those who respect and understand the natural world become its greatest beneficiaries.'
    },
    fromOsha: 'Popular Orisha for healing and abundance work'
  },
  {
    id: 'yewa',
    name: 'Yewa',
    yorubaName: 'Yewá',
    catholicSyncretism: 'Saint Clare of Assisi / Our Lady of Mount Carmel',
    colors: ['Pink', 'Mauve', 'Lavender'],
    number: 11,
    domain: 'Cemetery, Death, Purity, Virginity, Transformation',
    symbol: 'Coffin, Tomb, Fan, Pink flowers',
    icon: <Skull className="w-6 h-6" />,
    description: `Yewa is the Orisha of the cemetery, death, and transformation. She lives in the cemetery and guards the boundary between life and death. Yewa represents purity and virginity — she is the only female Orisha who remains apart from male influence. She is associated with transformation because death is the greatest transformation. Yewa works closely with Oya (who guards the cemetery gate) and is invoked for matters of death, transformation, and protection in the cemetery.`,
    attributes: [
      'Lives in the cemetery and rules over death',
      'Represents purity, virginity, and separation',
      'Guardian of the boundary between life and death',
      'Associated with transformation and rebirth',
      'Works with Oya at the cemetery gates',
      'Must never be exposed to male Orishas except Obatala'
    ],
    sacredObjects: [
      'Pink, mauve, and lavender beads',
      'Coffin or tomb imagery',
      'Fan',
      'Pink flowers',
      'Placed high, away from male Orishas',
      'Yams, corn, rice as offerings'
    ],
    pataki: {
      title: 'The Virgin of the Cemetery',
      story: 'Yewa was so beautiful that all the male Orishas desired her. To protect her purity, Obatala sent her to live in the cemetery, where she would be separated from the world of the living and the desires of the Orishas. In the cemetery, she discovered her true power — the power of transformation. She learned that death is not an end but a transformation, and she became the guardian of this sacred transition. To this day, she remains pure and powerful, keeper of the secrets of death and rebirth.',
      moral: 'True power often requires separation and sacrifice. Death is transformation, not ending.'
    },
    fromOsha: 'Important Orisha for cemetery work and transformation'
  },
  {
    id: 'nanaburuku',
    name: 'Nana Buruku',
    yorubaName: 'Naná Burukú',
    catholicSyncretism: 'Saint Anne (Santa Ana) / Our Lady of the Immaculate Conception',
    colors: ['Purple', 'Black', 'Brown', 'White spots'],
    number: 7,
    domain: 'Ancient Earth, Swamp, Mud, Ancestral Power, Witchcraft',
    symbol: 'Mud, Swamp, Snail shells, Old basket',
    icon: <Mountain className="w-6 h-6" />,
    description: `Nana Buruku is the ancient mother of the earth, older than Obatala and grandmother to many Orishas. She represents primal earth energy, swamps, and the creative power of mud. Nana Buruku is associated with witchcraft and ancient ancestral power. She moves slowly but with immense force. Nana Buruku is invoked for matters requiring deep ancestral connection, ancient wisdom, and the most serious spiritual work. She is the oldest of the female Orishas.`,
    attributes: [
      'Ancient mother, grandmother of the Orishas',
      'Older than Obatala in some traditions',
      'Ruler of swamps, mud, and primal earth',
      'Associated with ancient witchcraft',
      'Moves slowly but with great power',
      'Most serious and ancient of the female Orishas'
    ],
    sacredObjects: [
      'Purple, black, brown, and white-spotted beads',
      'Mud and swamp elements',
      'Snail shells',
      'Old basket',
      'Chain',
      'Yams, corn, sesame as offerings'
    ],
    pataki: {
      title: 'The Ancient Mother',
      story: 'Before Obatala descended to create the world, Nana Buruku already existed in the primordial mud. She is the swamp that existed before dry land, the ancient mother from whom all earth energy flows. When the younger Orishas fight among themselves, it is Nana Buruku who they fear, for her ancient power predates their conflicts. She moves slowly, like the swamp reclaiming land, but nothing can stop her once she decides to act.',
      moral: 'Ancient wisdom and primal power move slowly but are unstoppable. Respect the elders and the ancestors from whom all power flows.'
    },
    fromOsha: 'Ancient earth mother, grandmother of the Orishas'
  }
];

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 hover:bg-indigo-700/50 rounded-lg transition-colors text-indigo-300 hover:text-amber-400"
      title="Copy to clipboard"
    >
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    </button>
  );
};

const ConfidenceBadge: React.FC<{ level: string }> = ({ level }) => {
  const colors: Record<string, string> = {
    high: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    medium: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    house_specific: 'bg-rose-500/20 text-rose-300 border-rose-500/30'
  };
  
  const labels: Record<string, string> = {
    high: 'Common',
    medium: 'Varies by House',
    house_specific: 'House Specific'
  };

  return (
    <span className={`px-2 py-0.5 text-xs rounded-full border ${colors[level] || colors.medium}`}>
      {labels[level] || level}
    </span>
  );
};

const OrikiCard: React.FC<{ entry: OrikiEntry }> = ({ entry }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-indigo-700/30 rounded-xl overflow-hidden hover:border-amber-500/30 transition-all bg-indigo-900/20">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-start justify-between gap-4 hover:bg-indigo-800/30 transition-colors text-left"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-amber-200">{entry.title}</span>
            <ConfidenceBadge level={entry.confidence} />
          </div>
          <p className="text-lg text-amber-300/90 font-serif leading-relaxed">
            {entry.lucumiText}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <CopyButton text={entry.lucumiText} />
        </div>
      </button>

      {expanded && (
        <div className="px-4 pb-4 space-y-3 border-t border-indigo-700/30 pt-3">
          {entry.phoneticGuide && (
            <div>
              <h5 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Mic className="w-3 h-3" /> Phonetic Guide
              </h5>
              <p className="text-sm text-indigo-300/70 italic">{entry.phoneticGuide}</p>
            </div>
          )}

          {entry.translation && (
            <div>
              <h5 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">Translation</h5>
              <p className="text-sm text-indigo-200/90">{entry.translation}</p>
            </div>
          )}

          <div>
            <h5 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">Context</h5>
            <p className="text-sm text-indigo-200/80">{entry.context}</p>
          </div>

          {entry.whenToUse && entry.whenToUse.length > 0 && (
            <div>
              <h5 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">When to Use</h5>
              <ul className="text-sm text-indigo-200/80 space-y-1">
                {entry.whenToUse.map((use, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-500/70">•</span>
                    {use}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {entry.lineageNotes && entry.lineageNotes.length > 0 && (
            <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <h5 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Info className="w-3 h-3" /> Lineage Notes
              </h5>
              <ul className="text-sm text-amber-200/80 space-y-1">
                {entry.lineageNotes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <AlertTriangle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                      note.severity === 'critical' ? 'text-red-400' : 
                      note.severity === 'warning' ? 'text-amber-400' : 'text-emerald-400'
                    }`} />
                    {note.note}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {entry.source && (
            <p className="text-xs text-indigo-500/70 pt-2 border-t border-indigo-700/30">
              Source: {entry.source}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const SuyereCard: React.FC<{ entry: SuyereEntry }> = ({ entry }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-indigo-700/30 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all bg-blue-900/10">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-start justify-between gap-4 hover:bg-blue-800/20 transition-colors text-left"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-blue-200">{entry.title}</span>
            <ConfidenceBadge level={entry.confidence} />
          </div>
          <p className="text-lg text-blue-300/90 font-serif leading-relaxed">
            {entry.lucumiText}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <CopyButton text={entry.lucumiText} />
        </div>
      </button>

      {expanded && (
        <div className="px-4 pb-4 space-y-3 border-t border-indigo-700/30 pt-3">
          {entry.phoneticGuide && (
            <div>
              <h5 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Mic className="w-3 h-3" /> Phonetic Guide
              </h5>
              <p className="text-sm text-indigo-300/70 italic">{entry.phoneticGuide}</p>
            </div>
          )}

          {entry.translation && (
            <div>
              <h5 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">Translation</h5>
              <p className="text-sm text-indigo-200/90">{entry.translation}</p>
            </div>
          )}

          {entry.rhythmContext && (
            <div>
              <h5 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">Rhythm Context</h5>
              <p className="text-sm text-indigo-200/80">{entry.rhythmContext}</p>
            </div>
          )}

          {entry.lineageNotes && entry.lineageNotes.length > 0 && (
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <h5 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Info className="w-3 h-3" /> Lineage Notes
              </h5>
              <ul className="text-sm text-blue-200/80 space-y-1">
                {entry.lineageNotes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-400" />
                    {note.note}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const RitualCard: React.FC<{ ritual: RitualEntry; type?: 'feeding' | 'sacrifice' }> = ({ ritual, type = 'feeding' }) => {
  const [expanded, setExpanded] = useState(false);
  const isSacrifice = type === 'sacrifice';

  return (
    <div className={`border rounded-xl overflow-hidden transition-all ${isSacrifice ? 'border-red-700/30 hover:border-red-500/30 bg-red-900/10' : 'border-amber-700/30 hover:border-amber-500/30 bg-amber-900/10'}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full p-4 flex items-start justify-between gap-4 transition-colors text-left ${isSacrifice ? 'hover:bg-red-800/20' : 'hover:bg-amber-800/20'}`}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{ritual.offeringIcon}</span>
            <span className={`font-semibold ${isSacrifice ? 'text-red-200' : 'text-amber-200'}`}>{ritual.title}</span>
            <ConfidenceBadge level={ritual.confidence} />
          </div>
          <p className="text-sm text-indigo-300/70">{ritual.offering}</p>
        </div>
        <div className="flex items-center gap-1">
          <CopyButton text={`${ritual.openingPrayer.lucumi}\n${ritual.chant.lucumi}`} />
        </div>
      </button>

      {expanded && (
        <div className={`px-4 pb-4 space-y-4 border-t pt-3 ${isSacrifice ? 'border-red-700/30' : 'border-amber-700/30'}`}>
          {/* Opening Prayer Section */}
          <div className={`p-3 rounded-lg ${isSacrifice ? 'bg-red-950/30 border border-red-700/20' : 'bg-amber-950/30 border border-amber-700/20'}`}>
            <h5 className={`text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1 ${isSacrifice ? 'text-red-400' : 'text-amber-400'}`}>
              <Scroll className="w-3 h-3" /> Opening Prayer (First Say)
            </h5>
            <p className={`text-base font-serif leading-relaxed mb-2 ${isSacrifice ? 'text-red-300/90' : 'text-amber-300/90'}`}>
              {ritual.openingPrayer.lucumi}
            </p>
            {ritual.openingPrayer.phoneticGuide && (
              <p className="text-sm text-indigo-300/70 italic mb-1">
                <Mic className="w-3 h-3 inline mr-1" /> {ritual.openingPrayer.phoneticGuide}
              </p>
            )}
            <p className="text-sm text-indigo-200/80">
              <span className="text-indigo-400/60">Translation:</span> {ritual.openingPrayer.translation}
            </p>
          </div>

          {/* Chant Section */}
          <div className="p-3 bg-indigo-900/30 border border-indigo-700/20 rounded-lg">
            <h5 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-1">
              <Music className="w-3 h-3" /> Chant/Response
            </h5>
            <p className="text-base text-indigo-300/90 font-serif leading-relaxed mb-2">
              {ritual.chant.lucumi}
            </p>
            {ritual.chant.phoneticGuide && (
              <p className="text-sm text-indigo-300/70 italic mb-1">
                <Mic className="w-3 h-3 inline mr-1" /> {ritual.chant.phoneticGuide}
              </p>
            )}
            <p className="text-sm text-indigo-200/80">
              <span className="text-indigo-400/60">Translation:</span> {ritual.chant.translation}
            </p>
          </div>

          {/* Context */}
          <div>
            <h5 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">Context</h5>
            <p className="text-sm text-indigo-200/80">{ritual.context}</p>
          </div>

          {/* When to Use */}
          {ritual.whenToUse && ritual.whenToUse.length > 0 && (
            <div>
              <h5 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">When to Use</h5>
              <ul className="text-sm text-indigo-200/80 space-y-1">
                {ritual.whenToUse.map((use, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={isSacrifice ? 'text-red-500/70' : 'text-amber-500/70'}>•</span>
                    {use}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Lineage Notes */}
          {ritual.lineageNotes && ritual.lineageNotes.length > 0 && (
            <div className={`p-3 rounded-lg ${isSacrifice ? 'bg-red-500/10 border border-red-500/20' : 'bg-amber-500/10 border border-amber-500/20'}`}>
              <h5 className={`text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1 ${isSacrifice ? 'text-red-400' : 'text-amber-400'}`}>
                <AlertTriangle className="w-3 h-3" /> Lineage Notes
              </h5>
              <ul className="text-sm text-indigo-200/80 space-y-2">
                {ritual.lineageNotes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <AlertTriangle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${note.severity === 'critical' ? 'text-red-400' : note.severity === 'warning' ? 'text-amber-400' : 'text-blue-400'}`} />
                    {note.note}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const OrishaEncyclopedia: React.FC<OrishaEncyclopediaProps> = ({ goHome }) => {
  const [selectedOrisha, setSelectedOrisha] = useState<OrishaData | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'paths' | 'ceremony' | 'oriki' | 'rituals' | 'vestment'>('overview');

  if (selectedOrisha) {
    return (
      <div className="min-h-screen pb-12">
        {/* Header */}
        <header className="relative pt-12 pb-8 px-6">
          <button 
            onClick={() => setSelectedOrisha(null)} 
            className="absolute top-12 left-6 text-indigo-300 hover:text-white flex items-center gap-2 transition-colors group"
          >
            <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back
          </button>
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/20 to-blue-500/20 border border-amber-400/30 flex items-center justify-center">
                {selectedOrisha.icon}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-blue-200 to-amber-400 serif tracking-wider mb-2">
              {selectedOrisha.name}
            </h1>
            <p className="text-indigo-300/80 text-lg">
              {selectedOrisha.yorubaName}
            </p>
            <p className="text-indigo-400/60 text-sm mt-2">
              Syncretized with: {selectedOrisha.catholicSyncretism}
            </p>
          </div>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 px-4 mb-8">
          {[
            { id: 'overview', label: 'Overview' },
            ...(selectedOrisha.paths ? [{ id: 'paths', label: 'Paths (Caminos)' }] : []),
            { id: 'ceremony', label: 'Ceremonial Info' },
            ...(hasOriki(selectedOrisha.id) || hasSuyere(selectedOrisha.id) ? [{ id: 'oriki', label: 'Oriki & Songs', icon: BookOpen }] : []),
            ...(selectedOrisha.feedingRituals?.length || selectedOrisha.sacrificeRituals?.length ? [{ id: 'rituals', label: 'Ritual Liturgy', icon: Scroll }] : []),
            ...(selectedOrisha.makuto || selectedOrisha.throne || selectedOrisha.bushCeremony ? [{ id: 'vestment', label: 'Vestment Details', icon: Scroll }] : []),
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all
                ${activeTab === tab.id 
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/50' 
                  : 'bg-indigo-900/50 text-indigo-300 hover:bg-indigo-800/50 border border-indigo-700/50'}`}
            >
              {tab.icon && <tab.icon className="w-4 h-4 mr-1" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-indigo-950/40 border border-indigo-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            
            {activeTab === 'overview' && (
              <>
                {/* Basic Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-indigo-900/30 p-4 rounded-xl text-center">
                    <p className="text-indigo-400 text-xs uppercase tracking-wider mb-1">Colors</p>
                    <p className="text-amber-300 font-bold text-sm">{selectedOrisha.colors.join(', ')}</p>
                  </div>
                  <div className="bg-indigo-900/30 p-4 rounded-xl text-center">
                    <p className="text-indigo-400 text-xs uppercase tracking-wider mb-1">Number</p>
                    <p className="text-amber-300 font-bold text-sm">{selectedOrisha.number}</p>
                  </div>
                  <div className="bg-indigo-900/30 p-4 rounded-xl text-center">
                    <p className="text-indigo-400 text-xs uppercase tracking-wider mb-1">Domain</p>
                    <p className="text-amber-300 font-bold text-sm">{selectedOrisha.domain.split(',')[0]}</p>
                  </div>
                  <div className="bg-indigo-900/30 p-4 rounded-xl text-center">
                    <p className="text-indigo-400 text-xs uppercase tracking-wider mb-1">Symbol</p>
                    <p className="text-amber-300 font-bold text-sm">{selectedOrisha.symbol.split(',')[0]}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-amber-300 mb-4">Description</h3>
                  <p className="text-indigo-200/80 leading-relaxed">{selectedOrisha.description}</p>
                </div>

                {/* Attributes */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-amber-300 mb-4">Attributes</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedOrisha.attributes.map((attr, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-indigo-200/80">
                        <span className="text-amber-400 mt-1">•</span>
                        {attr}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sacred Objects */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-amber-300 mb-4">Sacred Objects & Offerings</h3>
                  <ul className="space-y-2">
                    {selectedOrisha.sacredObjects.map((obj, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-indigo-200/80">
                        <span className="text-amber-400 mt-1">◦</span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pataki */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-amber-950/30 to-indigo-950/30 border border-amber-700/30 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-amber-300 mb-2">{selectedOrisha.pataki.title}</h3>
                    <p className="text-indigo-200/80 leading-relaxed mb-4 italic">{selectedOrisha.pataki.story}</p>
                    <p className="text-amber-400/80 text-sm border-t border-amber-700/30 pt-4">
                      <strong>Moral:</strong> {selectedOrisha.pataki.moral}
                    </p>
                  </div>
                  
                  {/* Additional Patakis */}
                  {selectedOrisha.additionalPatakis?.map((pataki, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-amber-950/20 to-indigo-950/20 border border-amber-700/20 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-amber-300 mb-2">{pataki.title}</h3>
                      <p className="text-indigo-200/80 leading-relaxed mb-4 italic">{pataki.story}</p>
                      <p className="text-amber-400/80 text-sm border-t border-amber-700/30 pt-4">
                        <strong>Moral:</strong> {pataki.moral}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Source */}
                {selectedOrisha.fromOsha && (
                  <p className="text-indigo-400/50 text-xs mt-6 text-center">
                    Source: {selectedOrisha.fromOsha}
                  </p>
                )}
              </>
            )}

            {activeTab === 'paths' && selectedOrisha.paths && (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-amber-300 mb-2">Paths (Caminos)</h3>
                  <p className="text-indigo-300/70 text-sm">
                    The Orishas manifest through various paths or "caminos" — different manifestations 
                    with specific attributes, offerings, and functions. Each path represents a different 
                    face of the Orisha's power.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {selectedOrisha.paths.map((path, idx) => (
                    <div key={idx} className="bg-indigo-900/30 border border-indigo-700/30 rounded-xl p-5">
                      <h4 className="text-lg font-bold text-amber-300 mb-2">{path.name}</h4>
                      <p className="text-indigo-200/80 text-sm leading-relaxed">{path.description}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === 'ceremony' && (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-amber-300 mb-4">Ceremonial Information</h3>
                  <p className="text-indigo-200/80 leading-relaxed mb-6">
                    Based on Chapter 7 of "The Osha" — the vestment ceremony (ceremonia de asiento) 
                    is the sacred ritual through which a devotee receives their guardian Orisha. 
                    Each Orisha has specific requirements for their throne, offerings, and ritual objects.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-xl p-5">
                    <h4 className="text-lg font-bold text-amber-300 mb-3">Required Items for Vestment</h4>
                    <p className="text-indigo-200/80 text-sm leading-relaxed">
                      According to traditional ceremony requirements, the novice must provide:
                    </p>
                    <ul className="mt-3 space-y-2 text-indigo-200/70 text-sm">
                      <li>• Seven white shirts, trousers, and undergarments</li>
                      <li>• White sandals, hat, and suit</li>
                      <li>• Four white towels and bed sheets</li>
                      <li>• Bag of cowry shells</li>
                      <li>• Razor, white comb, barber scissors</li>
                      <li>• White porcelain plate, cup, and silver spoon</li>
                      <li>• The "Warrior Set" (if not already received): Eleggua, Ogun, Oshosi, and Osun</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-xl p-5">
                    <h4 className="text-lg font-bold text-amber-300 mb-3">Throne Specifications</h4>
                    <p className="text-indigo-200/80 text-sm leading-relaxed">
                      Each Orisha has specific requirements for their throne (trono), which serves as 
                      their seat of power during the ceremony:
                    </p>
                    <div className="mt-3 space-y-2 text-indigo-200/70 text-sm">
                      <p><strong className="text-amber-400/80">Shango:</strong> Mortar and wood bowl (cedar or sweet poplar)</p>
                      <p><strong className="text-amber-400/80">Oshun:</strong> Yellow ceramic bowl or mixed colors with yellow/orange accent</p>
                      <p><strong className="text-amber-400/80">Yemaya:</strong> Blue ceramic bowl or colors with blue accent</p>
                      <p><strong className="text-amber-400/80">Obatala:</strong> White ceramic or silver bowl</p>
                      <p><strong className="text-amber-400/80">Argayu:</strong> Ceramic or wood bowl painted with seven different colors</p>
                    </div>
                  </div>

                  <div className="bg-amber-950/20 border border-amber-700/30 rounded-xl p-5">
                    <h4 className="text-lg font-bold text-amber-300 mb-3">Sacred Herbs (Ewe)</h4>
                    <p className="text-indigo-200/80 text-sm leading-relaxed">
                      From Chapter 8 of "The Osha" — The preparation of <strong>omi ero</strong> (cool water) 
                      is essential for all ceremonies. This herbal infusion, also called "Osanyin" in honor 
                      of the Orisha of herbs, typically uses no less than eight different plants, with some 
                      mixtures containing 21 or more. Each plant is chosen for its specific ashé and its 
                      interaction with the particular Orisha's energy.
                    </p>
                    <p className="text-indigo-300/70 text-sm mt-3 italic">
                      "Kosi Ewe, Kosi Orisha" — Without leaves, there is no Orisha.
                    </p>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'oriki' && (
              <>
                {/* Lineage Warning */}
                <div className="mb-6 p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-500/20 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-200 mb-1">Lineage Variation Warning</h3>
                      <p className="text-sm text-amber-100/70 leading-relaxed">
                        Lukumi is an oral, lineage-based tradition. The oriki and suyere here represent common public forms, 
                        but your godparent's version may differ. Always defer to your own lineage's transmission.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Oriki Section */}
                {(() => {
                  const orikiList = getOrikiForOrisha(selectedOrisha.id);
                  const suyereList = getSuyereForOrisha(selectedOrisha.id);
                  
                  return (
                    <>
                      {orikiList.length > 0 && (
                        <div className="mb-8">
                          <div className="flex items-center gap-3 mb-4">
                            <Scroll className="w-6 h-6 text-amber-400" />
                            <h3 className="text-2xl font-bold text-amber-300">Oriki — Praise Poetry</h3>
                          </div>
                          <p className="text-indigo-200/70 mb-4 text-sm">
                            Oriki are praise poems used to call the ase (spiritual energy) of the Orisha. 
                            Recite these to invite {selectedOrisha.name.split(' ')[0]} to be present.
                          </p>
                          <div className="space-y-3">
                            {orikiList.map(entry => (
                              <OrikiCard key={entry.id} entry={entry} />
                            ))}
                          </div>
                        </div>
                      )}

                      {suyereList.length > 0 && (
                        <div className="mb-8">
                          <div className="flex items-center gap-3 mb-4">
                            <Music className="w-6 h-6 text-blue-400" />
                            <h3 className="text-2xl font-bold text-blue-300">Suyere — Sacred Songs</h3>
                          </div>
                          <p className="text-indigo-200/70 mb-4 text-sm">
                            Suyere are sacred songs sung at tambores (drum ceremonies) to praise and call the Orisha.
                          </p>
                          <div className="space-y-3">
                            {suyereList.map(entry => (
                              <SuyereCard key={entry.id} entry={entry} />
                            ))}
                          </div>
                        </div>
                      )}

                      {orikiList.length === 0 && suyereList.length === 0 && (
                        <div className="text-center py-12 text-indigo-400/50">
                          <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-50" />
                          <p>No oriki or suyere recorded for this Orisha yet.</p>
                          <p className="text-sm mt-2">Check the Opening Formulas section for universal prayers.</p>
                        </div>
                      )}
                    </>
                  );
                })()}
              </>
            )}

            {activeTab === 'vestment' && (
              <>
                {/* Lineage Warning for Vestment */}
                <div className="mb-6 p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-500/20 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-200 mb-1">Initiatory Material</h3>
                      <p className="text-sm text-amber-100/70 leading-relaxed">
                        The following details are from "The Osha" by Julio Garcia Cortez. This is initiatory-level 
                        information intended for educational purposes. Actual practice may vary by lineage (ile) 
                        and should always be guided by your godparent.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Makuto Section */}
                {selectedOrisha.makuto && (
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-emerald-500/20 rounded-lg">
                        <Scroll className="w-6 h-6 text-emerald-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-emerald-300">{selectedOrisha.makuto.title}</h3>
                    </div>
                    
                    <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-xl p-5 mb-4">
                      <h4 className="text-lg font-semibold text-amber-300 mb-3">Sacred Ingredients</h4>
                      <ul className="space-y-2">
                        {selectedOrisha.makuto.ingredients.map((ingredient, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-indigo-200/80 text-sm">
                            <span className="text-emerald-400 mt-0.5">◦</span>
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-xl p-5">
                      <h4 className="text-lg font-semibold text-amber-300 mb-3">Procedure</h4>
                      <p className="text-indigo-200/80 text-sm leading-relaxed whitespace-pre-line">
                        {selectedOrisha.makuto.procedure}
                      </p>
                      {selectedOrisha.makuto.notes && (
                        <p className="text-indigo-300/60 text-xs mt-4 pt-3 border-t border-indigo-700/30 italic">
                          Note: {selectedOrisha.makuto.notes}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Throne Section */}
                {selectedOrisha.throne && (
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-purple-500/20 rounded-lg">
                        <Crown className="w-6 h-6 text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-purple-300">{selectedOrisha.throne.title}</h3>
                    </div>
                    
                    <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-xl p-5 mb-4">
                      <p className="text-indigo-200/80 text-sm leading-relaxed mb-4">
                        {selectedOrisha.throne.description}
                      </p>
                      <h4 className="text-lg font-semibold text-amber-300 mb-3">Setup Details</h4>
                      <ul className="space-y-3">
                        {selectedOrisha.throne.setup.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-indigo-200/80 text-sm">
                            <span className="text-purple-400 mt-0.5">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      {selectedOrisha.throne.notes && (
                        <p className="text-indigo-300/60 text-xs mt-4 pt-3 border-t border-indigo-700/30 italic">
                          Note: {selectedOrisha.throne.notes}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Bush Ceremony Section */}
                {selectedOrisha.bushCeremony && (
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-rose-500/20 rounded-lg">
                        <Leaf className="w-6 h-6 text-rose-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-rose-300">{selectedOrisha.bushCeremony.title}</h3>
                    </div>
                    
                    <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-xl p-5 mb-4">
                      <p className="text-indigo-200/80 text-sm leading-relaxed mb-4">
                        {selectedOrisha.bushCeremony.description}
                      </p>
                      <h4 className="text-lg font-semibold text-amber-300 mb-3">Ceremonial Steps</h4>
                      <ul className="space-y-3">
                        {selectedOrisha.bushCeremony.steps.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-indigo-200/80 text-sm">
                            <span className="text-rose-400 mt-0.5 font-bold">{idx + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ul>
                      {selectedOrisha.bushCeremony.notes && (
                        <p className="text-indigo-300/60 text-xs mt-4 pt-3 border-t border-indigo-700/30 italic">
                          Note: {selectedOrisha.bushCeremony.notes}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Source Citation */}
                <div className="mt-6 pt-4 border-t border-indigo-700/30 text-center">
                  <p className="text-xs text-indigo-400/50">
                    Source: {selectedOrisha.fromOsha}
                  </p>
                </div>
              </>
            )}

            {activeTab === 'rituals' && (
              <>
                {/* Lineage Warning for Rituals */}
                <div className="mb-6 p-4 bg-gradient-to-r from-red-500/10 to-amber-500/10 border border-red-500/30 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-red-500/20 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-red-200 mb-1">Sacred Ritual Material</h3>
                      <p className="text-sm text-red-100/70 leading-relaxed">
                        These are ritual liturgies for feeding and sacrifice. Blood sacrifice should only be 
                        performed by trained priests. Always follow your godparent's guidance and lineage tradition.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feeding Rituals */}
                {selectedOrisha.feedingRituals && selectedOrisha.feedingRituals.length > 0 && (
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-amber-500/20 rounded-lg">
                        <span className="text-2xl">🍯</span>
                      </div>
                      <h3 className="text-2xl font-bold text-amber-300">Feeding Rituals (Adimu)</h3>
                    </div>
                    <p className="text-indigo-200/70 mb-4 text-sm">
                      Standardized liturgy for offering food, drink, and items to {selectedOrisha.name.split(' ')[0]}. 
                      Each offering has a specific opening prayer and chant.
                    </p>
                    <div className="space-y-4">
                      {selectedOrisha.feedingRituals.map((ritual) => (
                        <RitualCard key={ritual.id} ritual={ritual} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Sacrifice Rituals */}
                {selectedOrisha.sacrificeRituals && selectedOrisha.sacrificeRituals.length > 0 && (
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-red-500/20 rounded-lg">
                        <span className="text-2xl">⚔️</span>
                      </div>
                      <h3 className="text-2xl font-bold text-red-300">Sacrifice Rituals (Ebo)</h3>
                    </div>
                    <p className="text-indigo-200/70 mb-4 text-sm">
                      Blood sacrifice liturgy for {selectedOrisha.name.split(' ')[0]}. 
                      <strong className="text-red-400"> These rituals require priesthood training.</strong>
                    </p>
                    <div className="space-y-4">
                      {selectedOrisha.sacrificeRituals.map((ritual) => (
                        <RitualCard key={ritual.id} ritual={ritual} type="sacrifice" />
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <header className="relative pt-12 pb-8 px-6">
        <button onClick={goHome} className="absolute top-12 left-6 text-indigo-300 hover:text-white flex items-center gap-2 transition-colors group">
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Home
        </button>
        
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-blue-200 to-amber-400 serif tracking-wider mb-4">
            The Orishas
          </h1>
          <p className="text-indigo-300/80 text-lg font-light">
            Encyclopedia of the Divine Forces
          </p>
          <p className="text-indigo-400/60 text-sm mt-2">
            Based on "The Osha" by Julio Garcia Cortez — Chapter 4: The Orishas & Chapter 7: Vestment
          </p>
        </div>
      </header>

      {/* Orisha Grid */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ORISHAS.map((orisha) => (
            <button
              key={orisha.id}
              onClick={() => setSelectedOrisha(orisha)}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950/60 to-indigo-900/30 border border-indigo-700/50 hover:border-amber-400/50 p-6 text-left transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] hover:scale-[1.02] backdrop-blur-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-900/30 border border-amber-700/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-800/50 transition-colors">
                  {orisha.icon}
                </div>
                <span className="text-indigo-400/50 text-xs">#{orisha.number}</span>
              </div>
              
              <h3 className="text-xl font-bold text-indigo-100 group-hover:text-amber-300 transition-colors mb-1">
                {orisha.name}
              </h3>
              <p className="text-indigo-400/60 text-xs mb-3">{orisha.yorubaName}</p>
              
              <p className="text-indigo-300/70 text-sm leading-relaxed mb-4 line-clamp-2">
                {orisha.domain}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {orisha.colors.slice(0, 2).map((color, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-1 rounded-full bg-indigo-900/50 text-indigo-300/70 border border-indigo-700/30">
                    {color}
                  </span>
                ))}
                {orisha.paths && (
                  <span className="text-[10px] px-2 py-1 rounded-full bg-amber-900/30 text-amber-400/70 border border-amber-700/30">
                    {orisha.paths.length} Paths
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-indigo-300/60 italic text-lg max-w-2xl mx-auto">
            "Kosi Ewe, Kosi Orisha" 
            <span className="block text-sm mt-2 text-indigo-400/50">— Without leaves, there is no Orisha</span>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default OrishaEncyclopedia;