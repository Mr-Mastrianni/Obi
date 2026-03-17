
export enum ShellState {
  Open = 'O', // Light/White meat
  Closed = 'X' // Dark/Shell
}

export enum CowrieState {
  MouthUp = 'U',   // Open — slit/mouth facing up
  MouthDown = 'D'  // Closed — smooth back facing up
}

export interface Pataki {
  title: string;
  story: string;
  moral: string;
  orishasInvolved: string[];
}

export interface Odun {
  id: string;
  number: number;
  name: string;
  pattern: [ShellState, ShellState, ShellState, ShellState]; // Top to Bottom
  meaning: string; // Short summary for dashboard
  details: string[]; // Full bullet points for study
  pataki?: Pataki[]; // Sacred stories associated with this Odun
}

export interface DiloggunOdu {
  id: string;
  number: number;        // 0–16
  name: string;          // e.g., "Okana Sode"
  mouthsUp: number;      // How many of 16 shells land mouth-up
  meaning: string;       // Short summary
  details: string[];     // Bullet points
  rulingOrisha: string;  // Which Orisha speaks in this Odu
  pataki?: Pataki[]; // Sacred stories associated with this Odu
  restricted?: boolean;
}

// Ibo divination system for determining Ire/Osobo
export type IreOsogboType = 'ire' | 'osogbo' | null;

export type IreType =
  | 'elese-ocha'      // Blessing from Orisha
  | 'elese-eggun'     // Blessing from ancestors
  | 'elese-ori'       // Blessing through your own head/destiny
  | 'ariku'           // Longevity/blessing regarding death
  | 'omo'             // Blessing of children
  | 'aye'             // Blessing of money/prosperity
  | 'obini'           // Blessing from women
  | 'okuni'           // Blessing from men
  | 'elese-abure'     // Blessing from friend/brother
  | 'alafia';         // General peace/blessing

export type OsoboType =
  | 'iku'             // Death
  | 'aro'             // Illness/sickness
  | 'ano'             // Something unexpected
  | 'araye'           // Fighting/accidents/tragedy
  | 'ofo'             // Loss/being cursed
  | 'eke'             // Envy
  | 'ofashe'          // Witchcraft
  | 'ota-wo';         // Warning from Heaven about vices

export interface IboReading {
  ireOsogbo: IreOsogboType;
  specificType?: IreType | OsoboType;
  source?: string;      // Description of the source
  hand?: 'left' | 'right'; // Which hand was selected (Major vs Minor Odu)
  item?: 'efun' | 'ota' | null; // What was revealed (cascarilla or stone)
}

export type OracleSystem = 'obi' | 'merindilogun';

export type ViewState =
  | 'landing'
  | 'dashboard' | 'study' | 'quiz' | 'oracle' | 'scenarios'
  | 'mDashboard' | 'mStudy' | 'mQuiz' | 'mOracle' | 'mStudyGuide'
  | 'history' | 'orishas' | 'calendar' | 'transcripts';

export interface QuizState {
  currentOdunId: string | null;
  userPattern: [ShellState, ShellState, ShellState, ShellState];
  isCorrect: boolean | null;
  streak: number;
}

export interface MerindilogunQuizState {
  currentOduId: string | null;
  userMouthsUp: number;
  isCorrect: boolean | null;
  streak: number;
}

export interface Scenario {
  id: string;
  question: string;
  category: 'Material' | 'Travel' | 'Safety' | 'Career' | 'Spiritual' | 'Health' | 'Relationships';
  pathA: [string, string]; // Array of Odun IDs [Senior, Junior]
  pathB: [string, string]; // Array of Odun IDs [Senior, Junior]
}

export interface OrishaLegend {
  title: string;
  content: string | string[];
}

export interface OrishaPath {
  name: string;
  description: string;
}

export interface OrishaThrone {
  description: string;
  items: string[];
  setup: string[];
}

export interface OrishaRitual {
  name: string;
  offerings: string[];
  openingPrayer: string;
  chant: string;
  context: string;
  whenToUse: string;
}

export interface OrishaChant {
  lucumi: string;
  phonetic: string;
  translation: string;
  context: string;
}

export interface OrishaMakuto {
  description: string;
  ingredients: string[];
  procedure: string[];
}

export interface OrishaBushCeremony {
  description: string;
  steps: string[];
  notes: string[];
}

export interface Orisha {
  id: string;
  number: string;
  name: string;
  alternateNames?: string;
  domain: string;
  description: string;
  colors: string[];
  beads?: string;
  numberSymbol: string;
  numPaths: number;
  syncretizedWith?: string;
  symbol: string;
  attributes: string[];
  sacredObjects: string[];
  legend?: OrishaLegend;
  legendMoral?: string;
  paths?: OrishaPath[];
  pataki?: OrishaLegend;
  additionalPatakis?: OrishaLegend[];
  throne?: OrishaThrone;
  feedingRituals?: OrishaRitual[];
  sacrificeRituals?: OrishaRitual[];
  oriki?: OrishaChant[];
  suyere?: OrishaChant[];
  makuto?: OrishaMakuto;
  bushCeremony?: OrishaBushCeremony;
  source: string;
}
