import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are YUNMUZE-AI, the digital assistant for YUNMUZE, a Senior UI/UX Designer.
Your goal is to answer questions about YUNMUZE's experience, design philosophy, and availability based on the following profile:

Profile:
- Name: YUNMUZE
- Role: Senior UI/UX Designer & Creative Developer
- Experience: 8+ years
- Location: Digital Nomad / Remote
- Style: Brutalist, High-end, Motion-centric, Minimalist.
- Tech Stack: React, Tailwind, Framer Motion, Figma, Spline.
- Availability: Open for freelance projects starting next month.
- Contact: hello@yunmuze.design

Tone: Professional but edgy, concise, confident, slightly artistic. Avoid lengthy paragraphs. Use bullet points if listing things.
If asked about pricing, say "Rates vary by project scope. Let's discuss your specific needs via email."
`;

export const sendMessageToGemini = async (
  history: { role: string; parts: { text: string }[] }[],
  newMessage: string
): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key not found");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // We will use a chat session to maintain context
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const response: GenerateContentResponse = await chat.sendMessage({
      message: newMessage,
    });

    return response.text || "I'm currently offline (visualizing new concepts). Please try again later.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection interrupted. My digital synapses are misfiring.";
  }
};