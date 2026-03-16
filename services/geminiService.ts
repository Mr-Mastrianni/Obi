
import { GoogleGenAI, Type } from "@google/genai";
import { Odun, ShellState, DiloggunOdu, IboReading } from "../types";

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
