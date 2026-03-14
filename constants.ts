
import { Odun, ShellState, Scenario } from './types';

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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
