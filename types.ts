
export enum ShellState {
  Open = 'O', // Light/White meat
  Closed = 'X' // Dark/Shell
}

export interface Odun {
  id: string;
  number: number;
  name: string;
  pattern: [ShellState, ShellState, ShellState, ShellState]; // Top to Bottom
  meaning: string; // Short summary for dashboard
  details: string[]; // Full bullet points for study
}

export type ViewState = 'dashboard' | 'study' | 'quiz' | 'oracle' | 'scenarios';

export interface QuizState {
  currentOdunId: string | null;
  userPattern: [ShellState, ShellState, ShellState, ShellState];
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
