
import { Odun, ShellState, Scenario, Pataki } from './types';

// === THE ORIGIN OF OBI — The foundational Pataki of the coconut oracle ===
export const OBI_ORIGIN_PATAKI: Pataki = {
  title: 'The Fall of Obi — Why the Coconut Must Touch the Ground',
  story: 'In the beginning, Obi was an Orisha of great purity. Olofi created him white inside and out — radiant, kind, and generous. He wore white robes and people traveled far to receive his blessings. But as praise grew, so did Obi\'s vanity. He began to believe himself the most perfect being in creation, rivaling even Olofi. He dressed lavishly, not for devotion but for his own glory, and he turned away the poor and suffering who once sought his counsel. Olofi, hearing the complaints, disguised himself as a ragged beggar and attended a great feast hosted by Obi. When the beggar approached, Obi recoiled in disgust and ordered him removed. Olofi revealed himself in a flash of divine light. "I gave you beauty, wisdom, a sweet voice, and a pure heart so you could be my ambassador on Earth," Olofi thundered. "But you have become drunk on your own reflection." As punishment, Olofi stripped Obi of his voice — never again would he speak for himself, only convey the words of other Orishas. His outer skin was made dark and coarse, though his inside remained white as a reminder of the purity he once embodied. And because Obi had once prostrated himself before Olofi in shame, he was condemned to only speak when thrown to the ground.',
  moral: 'Pride and vanity will strip away even the greatest gifts. True beauty is found in humility and service to others, not in the admiration of oneself.',
  orishasInvolved: ['Obi', 'Olofi']
};

export const ODUNS: Odun[] = [
  {
    id: 'okanran',
    number: 1,
    name: 'Okanran',
    pattern: [ShellState.Closed, ShellState.Closed, ShellState.Closed, ShellState.Open],
    meaning: 'Cancellation, termination, or "no" answer.',
    details: [
      'no answer',
      'cancellation or termination',
      'not going to fly',
      'death of something'
    ],
    pataki: [{
      title: 'The Sorceress Who Bound Three Warriors',
      story: 'Ozain, Ogun, and Shango were once good neighbors who lived in harmony. But a cunning sorceress, envious of their brotherhood, worked dark magic to turn them against each other. She collected personal items from each warrior and used them to weave a spell of hatred. Soon the three mighty Orishas were at each other\'s throats, trapped in a vicious cycle of conflict with no memory of their friendship. Elegua, the ever-watchful guardian of the crossroads, saw everything unfold. He rushed to Orunmila and reported the deception. Orunmila performed an ebbo that shattered the sorceress\'s curse, and the three warriors remembered their bond. But the damage had been done — the lesson of Okanran had been written: sometimes "no" is the universe\'s way of protecting you from unseen traps.',
      moral: 'When the answer is "no," it may be a divine protection you cannot yet see. Not every closed door is a punishment — some are shields.',
      orishasInvolved: ['Elegua', 'Orunmila', 'Ogun', 'Shango', 'Ozain']
    }]
  },
  {
    id: 'iwori',
    number: 2,
    name: 'Iwori',
    pattern: [ShellState.Closed, ShellState.Open, ShellState.Open, ShellState.Closed],
    meaning: 'Hyper-awareness and attention to surroundings.',
    details: [
      'pay attention to surroundings',
      'eyes on the front and back of head',
      "don't sit with back to the door",
      'pay attention to small fine print/details'
    ],
    pataki: [{
      title: 'The Eyes in the Back of the Head',
      story: 'There was once a prosperous merchant who traveled between villages carrying precious goods. Orunmila warned him: "You must develop eyes in the back of your head, for danger approaches from where you least expect it." The merchant laughed, believing his routes were safe. One evening, while resting at an inn, he sat with his back to the door — something Orunmila had specifically warned against. Thieves crept in behind him and stole everything he had. Devastated, the merchant returned to Orunmila, who told him: "Iwori teaches that awareness is not paranoia — it is wisdom. The one who sees in all directions is the one who arrives safely." From that day, the merchant never sat with his back to any entrance, and he prospered again, this time with the vigilance that Iwori demands.',
      moral: 'True awareness means paying attention to what is behind you as much as what is in front. Read the fine print of life — the details others miss are where both danger and opportunity hide.',
      orishasInvolved: ['Orunmila']
    }]
  },
  {
    id: 'ogunda',
    number: 3,
    name: 'Ogunda',
    pattern: [ShellState.Open, ShellState.Open, ShellState.Open, ShellState.Closed],
    meaning: 'Work, effort, and personal energy required.',
    details: [
      'energy is needed',
      'no one can do this for you',
      'calls for work and efforts',
      'only you can make it fly'
    ],
    pataki: [{
      title: 'Orunmila\'s Refusal to Fight Olofi',
      story: 'In the land of the Orishas, a great tyranny arose. Eruru, a powerful warlord, demanded that all Orishas bow before him or face destruction. Many Orishas prepared for war, and they came to Orunmila asking him to lead them into battle against Eruru. But Orunmila refused, saying: "This is not a battle to be won by my hand. Each of you must find the ogunda — the warrior energy — within yourselves. I cannot fight your fight." The Orishas were angry, but one by one they discovered that the effort Orunmila spoke of was not physical war but the internal work of courage. Eruru\'s own dog, loyal to truth over tyranny, eventually led his enemies to him. Eruru fell not by the sword of another, but by the consequences of his own cruelty.',
      moral: 'No one can do your work for you. The energy of change must come from within — your effort, your sacrifice, your commitment. The universe rewards those who sweat for their own destiny.',
      orishasInvolved: ['Orunmila', 'Ogun']
    }]
  },
  {
    id: 'irosun',
    number: 4,
    name: 'Irosun',
    pattern: [ShellState.Open, ShellState.Open, ShellState.Closed, ShellState.Closed],
    meaning: 'Incompletion or lack of readiness.',
    details: [
      'not ready to fly',
      'incompletion',
      'something missing',
      'more is needed for success'
    ],
    pataki: [{
      title: 'The Unfinished Bridge',
      story: 'A young builder was commissioned by his village to construct a bridge over a treacherous river. Eager for praise, he rushed the work, skipping the deep foundation posts that Orunmila had prescribed. "It looks complete," the builder said proudly. But when the rains came, the river swelled and the bridge collapsed, stranding the village. Orunmila appeared and said: "Irosun warned you — what appears finished on the surface may be hollow underneath. You built for the eyes of men, not for the test of the river." The builder spent the next year doing the work properly — digging deep, setting each post with prayer and patience. The second bridge stood for generations.',
      moral: 'Do not rush what requires patience. Something that looks complete may still be missing its foundation. True readiness comes from doing the invisible work that no one sees.',
      orishasInvolved: ['Orunmila']
    }]
  },
  {
    id: 'ose',
    number: 5,
    name: 'Ose',
    pattern: [ShellState.Open, ShellState.Closed, ShellState.Open, ShellState.Closed],
    meaning: 'The best "Yes", love, money, and success.',
    details: [
      'your best yes answer',
      'speaks of love and money',
      'speaks of success',
      'all things under good spiritual control'
    ],
    pataki: [{
      title: 'Oshun\'s Gift of Sweetness',
      story: 'When the world was young and bitter, nothing grew and the rivers ran dry. The Orishas gathered to find a solution, but none could bring sweetness back to the earth. Oshun, the youngest among them, stepped forward. She dipped her hands into the last drops of honey from her golden calabash and poured them into the barren riverbed. Where the honey touched, water began to flow. Where the water flowed, flowers bloomed. Where flowers bloomed, bees came, and where bees came, more honey was made. The cycle of abundance was born. Olofi smiled and said: "Ose — the sweetest yes — shall forever carry Oshun\'s energy. When this sign appears, know that love, prosperity, and success flow like her river."',
      moral: 'Generosity creates abundance. When you give from the heart without calculation, the universe multiplies what you offer. The sweetest blessings come to those who pour out for others first.',
      orishasInvolved: ['Oshun', 'Olofi']
    }]
  },
  {
    id: 'obara',
    number: 6,
    name: 'Obara',
    pattern: [ShellState.Open, ShellState.Closed, ShellState.Closed, ShellState.Closed],
    meaning: 'Highest spiritual consciousness and mental alignment.',
    details: [
      'highest spiritual consciousness',
      'speaks on Ori being in touch with the universe',
      'your own mind is important',
      'Your way of thinking'
    ],
    pataki: [{
      title: 'The Clumsy Awo Who Outsmarted Death',
      story: 'Obara She was known as the clumsiest Awo in the land. Before a dangerous journey, Orunmila told him to sacrifice four pigeons. But Obara, in his carelessness, only offered two. On the road, he stumbled into a trap set by bandits. They threw him into a pit and left him to die. But Obara\'s greatest gift was his mind — his Ori was aligned with the universe even when his feet were not. In the darkness of the pit, he remembered every lesson Orunmila had ever taught him. He used his wit to trick the bandits into returning, convinced them he knew the location of buried treasure, and led them straight to the town guards. Obara She survived not by strength or grace, but by the supreme power of his consciousness.',
      moral: 'Your mind is your most powerful weapon. Even when you stumble, even when you have not made every sacrifice perfectly, a mind aligned with spiritual truth can find the way out of any darkness.',
      orishasInvolved: ['Orunmila', 'Obatala']
    }]
  },
  {
    id: 'edi-odi',
    number: 7,
    name: 'Edi/Odi',
    pattern: [ShellState.Open, ShellState.Closed, ShellState.Closed, ShellState.Open],
    meaning: 'Stability, stagnation, or lack of movement.',
    details: [
      'things not changing',
      'not moving, stuck in a rut',
      'stable',
      'spinning wheels but not going anywhere'
    ],
    pataki: [{
      title: 'The Worker Who Buried His Offering',
      story: 'A farm worker, sick and exhausted, was told by his diviner to perform an ebbo and bury the offering in the center of the farm where he labored. He did so faithfully, digging a small hole and placing the offering with prayers for change. But his master, a distrustful man who had never believed in the Orishas, saw the worker digging and assumed he was burying stolen goods. In a rage, the master ordered the worker to be punished. But when they dug up what the worker had buried, they found only the sacred offering — coconut, feathers, and honey. The master was struck with shame. The worker\'s condition did not change immediately, for Edi teaches that true stability sometimes looks like stagnation. But the offering had been accepted. In time, the farm flourished and the worker was given his freedom.',
      moral: 'What feels like stagnation may be the quiet period before transformation. Do not mistake stillness for failure — sometimes the earth must be still for the seed to root.',
      orishasInvolved: ['Orunmila']
    }]
  },
  {
    id: 'ogbe',
    number: 8,
    name: 'Ogbe',
    pattern: [ShellState.Open, ShellState.Open, ShellState.Open, ShellState.Open],
    meaning: 'Total success and granted wishes.',
    details: [
      'all things good',
      'will have success',
      'what your asking for will be granted'
    ],
    pataki: [{
      title: 'Olofi Distributes the Calabashes of Destiny',
      story: 'Olofi called all the Babalawos to heaven and gave each one a sealed calabash containing their destiny. "Do not open it until you return to Earth," he commanded. Most obeyed, carrying their calabash carefully home. But one Babalawo, overcome with curiosity and greed, cracked his open on the journey. Inside he found dust and ashes — his impatience had turned his blessings to nothing. Another Babalawo, humble and patient, carried his calabash home without a single glance inside. When he finally opened it on Earth, as instructed, light poured out — and with it came wisdom, prosperity, health, and the love of his community. This is Ogbe: the sign where all four pieces open, all light showing, all blessings flowing. It is the reward for those who trust the process completely.',
      moral: 'Total success comes to those who trust divine timing. Do not crack open your blessings prematurely — carry them with faith, and they will pour out light when the moment is right.',
      orishasInvolved: ['Olofi', 'Orunmila']
    }]
  },
  {
    id: 'osa',
    number: 9,
    name: 'Osa',
    pattern: [ShellState.Closed, ShellState.Open, ShellState.Open, ShellState.Open],
    meaning: 'Conflict, disruptions, and obstacles.',
    details: [
      'speaks on arguments, fights',
      'delays',
      'disruptions',
      'anything that can go wrong will'
    ],
    pataki: [{
      title: 'Oya\'s Pact with Death',
      story: 'Oya, consumed by jealousy over Shango\'s wandering heart, made a desperate pact with Iku, the spirit of Death. "Bring Shango to me," she whispered into the wind, "and I will give you whatever you ask." Iku agreed but demanded a terrible price — chaos would follow Shango wherever he went, disrupting everything he touched. Oshun, who loved Shango with a pure heart, discovered the pact and rushed to Orunmila. The great diviner performed an ebbo that broke Iku\'s hold on Shango. But the energy of Osa had already been released into the world — the energy of disruption, of everything that can go wrong going wrong. Shango was freed, but the lesson remained: when you invite dark forces to solve your problems, the disruption they bring affects everyone around you.',
      moral: 'Do not make pacts born from jealousy or desperation. When you invite chaos to solve your problems, it will not stop at your enemy — it will disrupt everything in its path, including you.',
      orishasInvolved: ['Oya', 'Shango', 'Oshun', 'Orunmila', 'Iku']
    }]
  },
  {
    id: 'ofun',
    number: 10,
    name: 'Ofun',
    pattern: [ShellState.Closed, ShellState.Open, ShellState.Closed, ShellState.Open],
    meaning: 'Loss, creativity, and new beginnings.',
    details: [
      'speaks on lost and waste',
      'speaks on creativity',
      'new beginnings'
    ],
    pataki: [{
      title: 'The Father\'s Empty Inheritance',
      story: 'A father died leaving his son nothing — no land, no money, no trade. The son grew bitter, cursing his father\'s memory. From heaven, the father\'s spirit sent a heavenly messenger to his son, saying: "Bring me coconuts, a rooster, and a ram as offering, and I will show you where your true inheritance lies." But the son, full of resentment, refused. "He left me nothing in life — why should I give him anything in death?" he spat. The messenger returned again and again, but the son refused every time. Finally, in defiant rage, the son climbed into a large sack himself and said: "Take me to my father — I have nothing else to give." When the sack was opened in the realm of the ancestors, the son found himself standing before his father, who wept. "Your inheritance was never material," the father said. "It was the creativity and resilience I placed in your spirit. But you were so busy mourning what was lost that you could not see what was already within you."',
      moral: 'Loss is not the end — it is often the doorway to new beginnings. What the ancestors leave you is not always material; sometimes the greatest inheritance is the creative fire in your spirit. But you must be willing to look within to find it.',
      orishasInvolved: ['Egun (Ancestors)']
    }]
  },
  {
    id: 'owonrin',
    number: 11,
    name: 'Owonrin',
    pattern: [ShellState.Closed, ShellState.Closed, ShellState.Open, ShellState.Open],
    meaning: 'Spiritual vulnerability or scarcity.',
    details: [
      'police involvement, legal matters',
      'investing in self',
      'money having to be spent'
    ],
    pataki: [{
      title: 'The Chameleon\'s Warning',
      story: 'In the land where Orishas walked among mortals, a chameleon was sent by Orunmila to deliver a message to a young king: "Invest in yourself before you invest in your kingdom, or the law will come for what you owe." The chameleon, true to its nature, moved slowly, changing colors to blend with every surface. By the time it arrived, the king had already spent his personal wealth on wars and monuments, neglecting the offerings owed to the Orishas. When the authorities came to collect debts, the king had nothing left to pay. He was dragged before the council and stripped of his crown. The chameleon, finally arriving, delivered Orunmila\'s message to an empty throne. Owonrin teaches: the warning always comes — but only those who invest in their spiritual foundation will be ready when it arrives.',
      moral: 'Invest in yourself — spiritually, mentally, and materially — before the world demands its payment. Legal and financial troubles often come to those who neglect their own foundation while building outward.',
      orishasInvolved: ['Orunmila']
    }]
  },
  {
    id: 'oyeku',
    number: 12,
    name: 'Oyeku',
    pattern: [ShellState.Closed, ShellState.Closed, ShellState.Closed, ShellState.Closed],
    meaning: 'Endings, silence, and destiny shifts.',
    details: [
      'having to do with your destiny',
      'destiny changing or about to change',
      'changes the course of the path your on depending on other odu'
    ],
    pataki: [{
      title: 'The Night Olofi Closed All the Mouths',
      story: 'There came a night when Olofi grew weary of the noise of creation. Every Orisha was speaking, every mortal was praying, every animal was crying out — but no one was listening. The noise was so great that even the wind could not carry messages between heaven and earth. So Olofi did something unprecedented: he closed all four mouths of the Obi at once. Silence fell over everything. In that profound darkness and stillness, something remarkable happened — people began to listen. They heard the river speak. They heard the earth hum. They heard the whisper of their own Ori, their inner head, telling them their true destiny. When Olofi finally allowed the mouths to open again, the world had changed. New paths had been laid in the silence. This is Oyeku — the total closure, the sacred darkness where destiny shifts.',
      moral: 'Sometimes everything must go silent for you to hear your true calling. The darkest moment — when all seems closed and still — is when destiny is being rewritten. Do not fear the silence; listen to it.',
      orishasInvolved: ['Olofi']
    }]
  },
  {
    id: 'ika',
    number: 13,
    name: 'Ika',
    pattern: [ShellState.Closed, ShellState.Open, ShellState.Closed, ShellState.Closed],
    meaning: 'Restriction and potent feminine energy.',
    details: [
      'Iyami involvement',
      'Iyami energy present'
    ],
    pataki: [{
      title: 'The Mothers Who Held the Night',
      story: 'Before the world had order, the Iyami — the ancient mothers, the primordial feminine powers — held dominion over the night. They could create and destroy with a single thought. The male Orishas feared them, for the Iyami\'s power was older than thunder, older than iron, older than even the ocean. Orunmila, wisest of all, did not try to fight them. Instead, he approached the Iyami with respect, offering them the honor they were due. In return, the Iyami agreed to restrict their power, channeling it into the cycles of birth, menstruation, and the tides. But they warned: "Whenever Ika appears, know that we are watching. Our energy is present. Treat it with reverence, or face consequences no warrior can overcome."',
      moral: 'The feminine divine is powerful beyond measure. Ika reminds us that some forces cannot be fought — they can only be honored and respected. When this energy appears, approach with humility.',
      orishasInvolved: ['Iyami', 'Orunmila']
    }]
  },
  {
    id: 'otuwa',
    number: 14,
    name: 'Otura',
    pattern: [ShellState.Open, ShellState.Closed, ShellState.Open, ShellState.Open],
    meaning: 'Plans, conversations, and tests.',
    details: [
      'pay attention to plans & goals',
      'what you plan to do',
      'what you should or shouldn\'t do',
      'plans & goals will fly or not depending on what odu comes with it'
    ],
    pataki: [{
      title: 'The Two Sealed Boxes of Olofi',
      story: 'The women of the world, tired of being overlooked, gathered and marched to Olofi\'s palace. "We demand equality," they declared. "We carry the children, we tend the earth, we keep the homes — yet we are given no spiritual authority." Olofi listened carefully. He presented them with two sealed boxes and said: "In these boxes I have placed my ashé — my divine power. Take them, but do not open them until you return home." The women, bursting with excitement, could not resist. They opened the first box on the road — and out flew all the birds of the world, carrying secrets in every direction. The second box they opened at their doorstep — and from it spilled the monthly blood, a mark of their connection to creation itself. Olofi said: "I gave you everything you asked for. But Otura teaches that plans must be followed precisely. Had you waited, the power would have manifested differently."',
      moral: 'Plans and goals are sacred agreements with destiny. How and when you execute them matters as much as the plan itself. Impatience can transform a blessing into something you did not expect.',
      orishasInvolved: ['Olofi']
    }]
  },
  {
    id: 'irete',
    number: 15,
    name: 'Irete',
    pattern: [ShellState.Open, ShellState.Open, ShellState.Closed, ShellState.Open],
    meaning: 'Unchanging solidity and resilience.',
    details: [
      'solid as a rock',
      'not going to change',
      'impossible task',
      'not going to move'
    ],
    pataki: [{
      title: 'The Mountain That Refused the River',
      story: 'Oshun, in the form of a river, flowed through the world bringing life to every land she touched. But one day she encountered a great mountain that stood directly in her path. "Move aside," Oshun sang sweetly. "I bring water and life to the village beyond you." The mountain, embodying the energy of Irete, replied: "I was here before you. I will be here after you. I do not move." Oshun tried everything — she sang her sweetest songs, she raged with flash floods, she sent Shango\'s lightning to crack the stone. Nothing worked. The mountain would not budge. Finally, Oshun did what water does best — she flowed around it. Over centuries, she carved a new path, creating a fertile valley that became the richest land in the region. The mountain still stands, unchanged. But life found a way around it.',
      moral: 'Some things will never change no matter how hard you push. Irete teaches you to recognize the immovable — then flow around it. Stubbornness is not always strength; sometimes the wise choice is to find another path.',
      orishasInvolved: ['Oshun', 'Shango']
    }]
  },
  {
    id: 'oturukpon',
    number: 16,
    name: 'Oturukpon',
    pattern: [ShellState.Closed, ShellState.Closed, ShellState.Open, ShellState.Closed],
    meaning: 'Prematurity and future destiny.',
    details: [
      'that which your working/praying on may not manifest',
      'may not be time yet',
      'keep praying'
    ],
    pataki: [{
      title: 'The Farmer Who Pulled the Seed',
      story: 'A farmer planted a sacred seed given to him by Orula. "This seed will grow into a tree that bears fruit of gold," Orula promised. "But you must be patient." The farmer watered the seed every day. After one week, he saw nothing and grew anxious. After one month, a tiny sprout appeared, but the farmer wanted a tree. Unable to wait, he dug up the sprout to check the roots, tearing them in the process. He replanted it, but the damage was done — the growth slowed further. He dug again, and again. Each time, he set the plant back further. Finally, Orula returned and said: "Oturukpon teaches that what you pray for is indeed coming — but every time you dig it up with doubt, you reset the clock. The gold fruit was always your destiny. But you must stop pulling at what is growing beneath the surface."',
      moral: 'Your prayers are being answered, but manifestation takes its own time. Do not uproot your blessings with impatience and doubt. Keep praying, keep watering, and trust that what is meant for you is growing even when you cannot see it.',
      orishasInvolved: ['Orunmila']
    }]
  }
];

export const SCENARIOS: Scenario[] = [
  { id: '1', question: 'How would it be to buy a new car?', category: 'Material', pathA: ['ogunda', 'osa'], pathB: ['ofun', 'edi-odi'] },
  { id: '2', question: 'How would it be to take a loan out to take a trip?', category: 'Travel', pathA: ['okanran', 'iwori'], pathB: ['ika', 'ose'] },
  { id: '3', question: 'Am I being watched or followed?', category: 'Safety', pathA: ['iwori', 'obara'], pathB: ['irosun', 'edi-odi'] },
  { id: '4', question: 'Do I have job stability?', category: 'Career', pathA: ['edi-odi', 'ogbe'], pathB: ['okanran', 'ogunda'] },
  { id: '5', question: 'Should I have a roommate to come and live with me?', category: 'Material', pathA: ['osa', 'ogbe'], pathB: ['irosun', 'edi-odi'] },
  { id: '6', question: 'Is anybody doing spiritual work against me?', category: 'Spiritual', pathA: ['edi-odi', 'ofun'], pathB: ['ose', 'obara'] },
  { id: '7', question: 'I\'m not feeling too well, should I go to the emergency room?', category: 'Health', pathA: ['ogbe', 'ogunda'], pathB: ['edi-odi', 'ogbe'] },
  { id: '8', question: 'How would it be for me to quit my job?', category: 'Career', pathA: ['edi-odi', 'ogbe'], pathB: ['ose', 'ofun'] },
  { id: '9', question: 'How would it be for me to move to Atlanta?', category: 'Travel', pathA: ['obara', 'osa'], pathB: ['irosun', 'ose'] },
  { id: '10', question: 'I want to take a trip to the Bahamas, how would that be?', category: 'Travel', pathA: ['ose', 'edi-odi'], pathB: ['okanran', 'ogunda'] },
  { id: '11', question: 'I\'m going to ask my boss for a raise, how would that be?', category: 'Career', pathA: ['irosun', 'ogunda'], pathB: ['iwori', 'obara'] },
  { id: '12', question: 'Shall I have hip surgery?', category: 'Health', pathA: ['okanran', 'oturukpon'], pathB: ['obara', 'ogbe'] },
  { id: '13', question: 'Should I trade in my car or pay to fix it?', category: 'Material', pathA: ['edi-odi', 'osa'], pathB: ['ogunda', 'obara'] },
  { id: '14', question: 'Does he or she really love me?', category: 'Relationships', pathA: ['ika', 'ofun'], pathB: ['iwori', 'ose'] },
  { id: '15', question: 'Will I win my court case?', category: 'Safety', pathA: ['otuwa', 'ose'], pathB: ['obara', 'ogbe'] },
  { id: '16', question: 'Will I find a meaningful relationship this year?', category: 'Relationships', pathA: ['obara', 'ika'], pathB: ['ose', 'ogunda'] },
  { id: '17', question: 'Am I following my destiny?', category: 'Spiritual', pathA: ['oyeku', 'ogunda'], pathB: ['ogbe', 'obara'] },
  { id: '18', question: 'I want to go into business for myself, how would this be?', category: 'Career', pathA: ['ogunda', 'edi-odi'], pathB: ['oyeku', 'ofun'] },
  { id: '19', question: 'Will my finances improve this year?', category: 'Career', pathA: ['iwori', 'obara'], pathB: ['ofun', 'irosun'] },
];