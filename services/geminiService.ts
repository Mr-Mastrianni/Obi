
import { GoogleGenAI, Type } from "@google/genai";
import { Odun, ShellState, DiloggunOdu, IboReading } from "../types";
import { SourceRecord, TopicEntry, ClaimNote, TranscriptUploadForm, ProcessingResult } from "../transcriptTypes";

/**
 * Updated initialization to use process.env.API_KEY directly within each function.
 */

// ========== OBI ABATA FUNCTIONS ==========

export const getOdunWisdom = async (odun: Odun): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    const prompt = `
      You are a wise Yoruba elder and Babalawo. 
      The user has cast the Obi Abata (coconut divination) and received the Odun "${odun.name}".
      The pattern is: ${odun.pattern.map(p => p === ShellState.Open ? 'Open (White)' : 'Closed (Dark)').join(', ')}.
      
      Here are the traditional meanings associated with this cast:
      ${odun.details.join('\n- ')}

      Provide a short, mystical, and poetic interpretation of what this energy means for them today. 
      Focus on the spiritual essence of ${odun.name} based on these meanings. 
      Keep it under 100 words. 
      Speak with a celestial, respectful tone.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "The oracles are silent at this moment.";
  } catch (error) {
    console.error("Error fetching wisdom:", error);
    return "The connection to the ancestors is currently clouded. Please try again later.";
  }
};

export const getCompositeWisdom = async (first: Odun, second: Odun): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    const prompt = `
      You are a wise Babalawo interpreting a composite Obi Abata cast.
      
      The First Cast (Senior/Stationary) is: ${first.name} (#${first.number})
      Meaning: ${first.meaning}
      
      The Second Cast (Junior/Mutating) is: ${second.name} (#${second.number})
      Meaning: ${second.meaning}

      Interpret this specific combination. How does the energy of ${second.name} influence or change the situation established by ${first.name}?
      Provide a mystical, profound insight into this pairing. 
      Keep it under 120 words.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "The duality of these signs is shrouded in mystery.";
  } catch (error) {
    console.error("Error fetching composite wisdom:", error);
    return "The paths are currently obscured.";
  }
};

export const getScenarioComparativeAnalysis = async (
  question: string,
  pathA: { senior: Odun, junior: Odun },
  pathB: { senior: Odun, junior: Odun }
): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    const prompt = `
      You are an expert Babalawo analyzing two potential divination results for the same question.
      
      The Question: "${question}"
      
      Path A (Possibility 1): ${pathA.senior.name} + ${pathA.junior.name}
      Path B (Possibility 2): ${pathB.senior.name} + ${pathB.junior.name}
      
      Compare these two outcomes spiritually. 
      What makes Path A different from Path B for this specific question? 
      Explain the shift in energy, warning, or blessing between them.
      Keep it mystical, respectful, and concise (under 150 words).
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "The duality remains a silent mystery.";
  } catch (error) {
    console.error("Error fetching comparative analysis:", error);
    return "The interpretation is currently veiled.";
  }
};

export const getQuizHint = async (odunName: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    const prompt = `
      Give a cryptic but helpful mnemonic hint to remember the visual pattern of the Obi Odun "${odunName}"
      Do not explicitly state the pattern (e.g., don't say "3 open"). 
      Use imagery (e.g., "The light is surrounded by darkness").
      Max 1 sentence.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Focus your mind.";
  } catch (error) {
    console.error("Error fetching hint:", error);
    return "Focus your mind on the balance.";
  }
};

// ========== MERINDILOGUN FUNCTIONS ==========

/**
 * Get wisdom for an Odu without Ibo context (general reading)
 * Note: In authentic practice, Ire/Osobo should be determined via Ibo questioning
 */
export const getDiloggunOduWisdom = async (odu: DiloggunOdu): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    const prompt = `
      You are a wise Olorisha and experienced diviner of the Diloggun (Merindilogun) cowrie shell oracle.
      
      The consultant has cast the 16 cowrie shells and ${odu.mouthsUp} shells landed with their mouths facing up.
      This reveals the Odu: "${odu.name}" (Odu #${odu.number}).
      
      The ruling Orisha who speaks in this sign is: ${odu.rulingOrisha}.
      
      Traditional meanings:
      ${odu.details.join('\n- ')}
      
      ${odu.restricted ? 'NOTE: This is one of the higher Odu reserved for Ifá. Speak with appropriate reverence and note that a Babalawo should be consulted for full interpretation.' : ''}
      
      Important context: In authentic Merindilogun practice, the Ire (blessing) or Osobo (obstruction) nature 
      of this Odu would be determined separately through Ibo questioning. Without that determination, 
      provide a balanced interpretation that acknowledges both the potential blessings and challenges 
      this Odu may carry, depending on the consultant's situation.
      
      Provide a mystical, profound interpretation of this reading. 
      Channel the voice of ${odu.rulingOrisha}. 
      Keep it under 120 words.
      Speak with sacred authority and poetic wisdom.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "The cowrie shells are silent at this moment.";
  } catch (error) {
    console.error("Error fetching Diloggun wisdom:", error);
    return "The Orishas are not speaking through the shells right now. Please try again.";
  }
};

/**
 * Get wisdom for an Odu WITH Ibo reading context (authentic complete reading)
 * This is the preferred method as it includes the Ire/Osobo determination
 */
export const getDiloggunWisdomWithIbo = async (odu: DiloggunOdu, iboReading: IboReading): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

    const ireOsogboText = iboReading.ireOsogbo === 'ire'
      ? `IRE (Blessing) — The cascarilla (efun) was revealed in the ${iboReading.hand} hand, indicating blessings and positive energy.`
      : `OSOGBO (Obstruction) — The black stone (ota) was revealed in the ${iboReading.hand} hand, indicating obstacles that need attention.`;

    const specificTypeText = iboReading.specificType
      ? `Specific type identified: ${iboReading.specificType}`
      : '';

    const prompt = `
      You are an experienced Olorisha interpreting a Diloggun (cowrie shell) reading.
      
      The Odu that has fallen is: "${odu.name}" (${odu.mouthsUp} mouths up, Odu #${odu.number}).
      The ruling Orisha is: ${odu.rulingOrisha}.
      
      Through the Ibo questioning process, the reading has revealed:
      ${ireOsogboText}
      ${specificTypeText}
      
      Traditional meanings of ${odu.name}:
      ${odu.details.join('\n- ')}
      
      ${odu.restricted ? 'NOTE: This is one of the higher Odu reserved for Ifá. Speak with appropriate reverence.' : ''}
      
      Interpret this reading with the ${iboReading.ireOsogbo} context. What does ${odu.rulingOrisha} advise?
      ${iboReading.ireOsogbo === 'ire'
        ? 'Focus on the blessings, how they manifest, and how the consultant can maintain this positive energy.'
        : 'Focus on what obstacles are present, their source, and what offerings (ebbo) or actions might restore balance.'}
      
      Keep it under 130 words. Mystical, warm, and respectful tone.
      Speak as ${odu.rulingOrisha} directly to the consultant.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "The message remains veiled.";
  } catch (error) {
    console.error("Error fetching Diloggun wisdom with Ibo:", error);
    return "The path is currently obscured. Try again.";
  }
};

/**
 * Legacy function - maintained for backward compatibility
 * @deprecated Use getDiloggunWisdomWithIbo instead for authentic readings
 */
export const getDiloggunCompositeWisdom = async (odu: DiloggunOdu, ireOrOsogbo: 'ire' | 'osogbo'): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    const prompt = `
      You are an experienced Olorisha interpreting a Diloggun (cowrie shell) reading.
      
      The Odu that has fallen is: "${odu.name}" (${odu.mouthsUp} mouths up, Odu #${odu.number}).
      The ruling Orisha is: ${odu.rulingOrisha}.
      
      The shells have further revealed that the consultant is in a state of: ${ireOrOsogbo === 'ire' ? 'IRE — a state of balance and blessings. Good fortune is present.' : 'OSOGBO — a state of imbalance and obstacles. Offerings or ebbo may be needed.'}
      
      Traditional meanings of ${odu.name}:
      ${odu.details.join('\n- ')}
      
      Interpret this reading with the ${ireOrOsogbo} context. What does ${odu.rulingOrisha} advise?
      ${ireOrOsogbo === 'ire' ? 'Focus on the blessings and how to maintain this positive energy.' : 'Focus on what needs to be corrected and what offerings or actions might restore balance.'}
      Keep it under 130 words. Mystical, warm, and respectful tone.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "The message remains veiled.";
  } catch (error) {
    console.error("Error fetching Diloggun composite wisdom:", error);
    return "The path is currently obscured. Try again.";
  }
};

// ========== TRANSCRIPT PROCESSING FUNCTIONS ==========

const generateId = () => `${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

/**
 * Process a raw YouTube transcript into structured knowledge entries.
 * Uses OpenRouter API with a free model.
 */
export const processRawTranscript = async (form: TranscriptUploadForm): Promise<ProcessingResult> => {
  const apiKey = process.env.OPENROUTER_API_KEY as string;
  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY is not set. Add it to your .env.local file.");
  }

  const sourceId = generateId();

  const prompt = `You are a scholarly knowledge-systems architect specializing in oral tradition, religious studies, and African diaspora spiritual practice. Your job is to take a raw YouTube transcript and transform it into a structured digital study guide.

CRITICAL RULES FOR WORDING:
- NEVER use "the speaker says", "the speaker argues", "he states", "she mentions" etc.
- Instead, use source-framed teaching style:
  • "${form.teacher} frames X as Y"
  • "Within ${form.teacher}'s teaching framework, X is treated as Y"
  • "From ${form.teacher}'s perspective, X represents Y"
  • "In this framework, X is presented as Y"
  • For practice instructions: "X is presented as Y for practitioners who Z"
- Write each entry like a curated study note, not a transcript recap
- Be calm, precise, rooted, interpretive, non-hysterical, respectful but not submissive

TEACHER: ${form.teacher}
SOURCE TITLE: ${form.title}
DATE: ${form.date}
TRADITION LENS: ${form.traditionLens || "Yoruba / Lucumí / Regla de Ocha"}
SOURCE TYPE: ${form.sourceType || "Live talk / oral teaching / commentary"}

RAW TRANSCRIPT:
${form.rawTranscript}

TASK: Analyze this transcript and produce structured output with these components:

1. EDITORIAL NOTE: Write a 2-3 sentence editorial disclaimer noting this preserves the teacher's oral teaching framework in cleaned study-note form, includes various types of content (instruction, interpretation, critique, etc.), and should be read alongside other lineages and references.

2. TONE TAGS: Identify 3-8 tone/content tags from: instruction, critique, warning, history, spiritual practice, ritual ethics, polemic, personal testimony, mythic narrative, lineage perspective, practical advice, devotional, philosophical, controversial

3. TOPICS: Break the transcript into 3-15 distinct topic entries. For each:
   - title: Clear, concise topic name
   - knowledgeType: One or more of: oral teaching, lineage perspective, personal critique, ritual instruction, historical claim, mythic interpretation, practical advice, controversial assertion, devotional instruction, training philosophy, ritual philosophy
   - summary: 2-4 sentences in source-framed style
   - detailedNotes: Expanded notes (3-8 sentences)
   - practiceImplications: What practitioners should know (if applicable, otherwise empty string)
   - warnings: Any cautions or warnings (if applicable, otherwise empty string)
   - historicalClaims: Historical assertions made (if applicable, otherwise empty string)
   - mythicReferences: Mythic or narrative references (if applicable, otherwise empty string)
   - lineageSensitivity: Notes on lineage-specific content (if applicable, otherwise empty string)
   - verificationStatus: One of: verified, interpretive, tradition-specific, needs verification, contested, personal opinion
   - tags: 3-6 relevant tags
   - claims: Array of atomic claim-level notes, each with:
     - type: One of: claim, interpretation, practice_instruction, warning, historical_assertion, anecdote, mythic_explanation, contested_statement, needs_verification
     - content: The specific claim in 1-2 sentences, source-framed

You MUST return ONLY valid JSON, no markdown, no explanation, no code fences. The JSON must match this exact structure:
{"editorialNote":"string","toneTags":["string"],"topics":[{"title":"string","knowledgeType":"string","summary":"string","detailedNotes":"string","practiceImplications":"string","warnings":"string","historicalClaims":"string","mythicReferences":"string","lineageSensitivity":"string","verificationStatus":"string","tags":["string"],"claims":[{"type":"string","content":"string"}]}]}`;

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': window.location.origin,
    },
    body: JSON.stringify({
      model: 'inception/mercury-2',
      messages: [
        {
          role: 'system',
          content: 'You are a JSON-only API. You MUST respond with valid JSON only. No markdown, no explanation, no code fences, no text before or after the JSON.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.3,
      max_tokens: 8000,
    }),
  });

  if (!response.ok) {
    const errBody = await response.text();
    throw new Error(`OpenRouter API error (${response.status}): ${errBody}`);
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content;

  if (!text) {
    throw new Error("AI returned empty response");
  }

  let parsed: any;
  try {
    parsed = JSON.parse(text);
  } catch {
    // Try to extract JSON from markdown code blocks
    const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      parsed = JSON.parse(jsonMatch[1]);
    } else {
      // Try to find JSON object in the response
      const objectMatch = text.match(/\{[\s\S]*\}/);
      if (objectMatch) {
        parsed = JSON.parse(objectMatch[0]);
      } else {
        throw new Error("Failed to parse AI response as JSON");
      }
    }
  }

  // Build the SourceRecord
  const source: SourceRecord = {
    id: sourceId,
    title: form.title,
    sourceType: form.sourceType || "Live talk / oral teaching / commentary",
    teacher: form.teacher,
    date: form.date,
    traditionLens: form.traditionLens || "Yoruba / Lucumí / Regla de Ocha",
    toneTags: parsed.toneTags || [],
    reliabilityType: "primary oral source",
    editorialNote: parsed.editorialNote || "",
    rawTranscript: form.rawTranscript,
    createdAt: new Date().toISOString(),
    topicIds: [],
  };

  // Build TopicEntry[] from AI output
  const topics: TopicEntry[] = (parsed.topics || []).map((t: any) => {
    const topicId = generateId();
    source.topicIds.push(topicId);
    return {
      id: topicId,
      sourceId,
      title: t.title || "Untitled Topic",
      teacher: form.teacher,
      knowledgeType: t.knowledgeType || "oral teaching",
      summary: t.summary || "",
      detailedNotes: t.detailedNotes || "",
      practiceImplications: t.practiceImplications || undefined,
      warnings: t.warnings || undefined,
      historicalClaims: t.historicalClaims || undefined,
      mythicReferences: t.mythicReferences || undefined,
      lineageSensitivity: t.lineageSensitivity || undefined,
      verificationStatus: t.verificationStatus || "needs verification",
      tags: t.tags || [],
      claims: (t.claims || []).map((c: any) => ({
        id: generateId(),
        type: c.type || "claim",
        content: c.content || "",
      })),
    } as TopicEntry;
  });

  return { source, topics };
};
