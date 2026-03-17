/**
 * Static transcript data — permanently baked into the app.
 * 
 * To add a new transcript:
 * 1. Process it in the Transcript Library UI
 * 2. Download the JSON file
 * 3. Place it in this folder (data/transcripts/)
 * 4. Import it below and add to the arrays
 * 5. Commit and redeploy
 */

import { SourceRecord, TopicEntry } from '../../transcriptTypes';

// ============================================================
// IMPORT TRANSCRIPT JSON FILES HERE
// ============================================================
import whatIsOriki from './what-is-orik-calling-orisha-down-from-heaven.json';
import patakiTheater from './aptataki-theater-with-oba-live-q-a.json';
import suyere from './what-is-a-suyer-specific-chants-for-specific-actions.json';
import witchcraftMainstream from './apataki-theater-with-oba-live-q-a-has-witchcraft-gone-mainstream.json';
import patakiTheater2 from './apataki-theater-with-oba-live-q-a2.json';

// ============================================================
// STATIC DATA ARRAYS
// ============================================================

// Add each imported transcript's source record here
const staticSources: SourceRecord[] = [
  whatIsOriki.source as SourceRecord,
  patakiTheater.source as SourceRecord,
  suyere.source as SourceRecord,
  witchcraftMainstream.source as SourceRecord,
  patakiTheater2.source as SourceRecord,
];

// Add each imported transcript's topics here
const staticTopics: TopicEntry[] = [
  ...(whatIsOriki.topics as TopicEntry[]),
  ...(patakiTheater.topics as TopicEntry[]),
  ...(suyere.topics as TopicEntry[]),
  ...(witchcraftMainstream.topics as TopicEntry[]),
  ...(patakiTheater2.topics as TopicEntry[]),
];

export { staticSources, staticTopics };
