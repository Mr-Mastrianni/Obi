
// ============================================================
// TRANSCRIPT KNOWLEDGE SYSTEM — 3-Layer Schema
// ============================================================

// Layer 3: Claim-Level Notes (atomic knowledge units)
export type ClaimType =
  | 'claim'
  | 'interpretation'
  | 'practice_instruction'
  | 'warning'
  | 'historical_assertion'
  | 'anecdote'
  | 'mythic_explanation'
  | 'contested_statement'
  | 'needs_verification';

export interface ClaimNote {
  id: string;
  type: ClaimType;
  content: string;
}

// Layer 2: Topic Entries (knowledge notes broken out from each transcript)
export interface TopicEntry {
  id: string;
  sourceId: string;
  title: string;
  teacher: string;
  knowledgeType: string;
  summary: string;
  detailedNotes: string;
  practiceImplications?: string;
  warnings?: string;
  historicalClaims?: string;
  mythicReferences?: string;
  lineageSensitivity?: string;
  verificationStatus: string;
  tags: string[];
  claims: ClaimNote[];
}

// Layer 1: Source Record (parent entry for each transcript)
export interface SourceRecord {
  id: string;
  title: string;
  sourceType: string;
  teacher: string;
  date: string;
  traditionLens: string;
  toneTags: string[];
  reliabilityType: string;
  editorialNote: string;
  rawTranscript: string;
  createdAt: string;
  topicIds: string[];
}

// Processing state
export type ProcessingStatus = 'idle' | 'processing' | 'success' | 'error';

// Upload form data
export interface TranscriptUploadForm {
  rawTranscript: string;
  teacher: string;
  title: string;
  date: string;
  traditionLens: string;
  sourceType: string;
}

// AI processing result
export interface ProcessingResult {
  source: SourceRecord;
  topics: TopicEntry[];
}
