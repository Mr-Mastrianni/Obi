
import { GoogleGenAI, Type } from "@google/genai";
import { Odun, ShellState } from "../types";

/**
 * Updated initialization to use process.env.API_KEY directly within each function.
 */

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
  pathA: {senior: Odun, junior: Odun}, 
  pathB: {senior: Odun, junior: Odun}
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
