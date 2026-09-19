/**
 * EventSphere AI Service
 * Handles all calls to the Google Gemini API.
 */

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL   = "gemini-2.5-flash";
const STREAM_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:streamGenerateContent?alt=sse&key=`;

/**
 * Stream a response from Gemini AI.
 * @param {string} systemPrompt - Instructions for the AI
 * @param {string} userMessage  - The user's question / input
 * @param {function} onChunk    - Callback called with accumulated text on each new token
 * @returns {Promise<string>}   - Full response text
 */
export async function callAI(systemPrompt, userMessage, onChunk) {
  if (!API_KEY) {
    const msg = "⚠️ Gemini API key missing. Add VITE_GEMINI_API_KEY to your .env file.";
    onChunk?.(msg);
    return msg;
  }

  try {
    const response = await fetch(`${STREAM_URL}${API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: `${systemPrompt}\n\n${userMessage}` }],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      const msg = `❌ API Error ${response.status}: ${err?.error?.message ?? response.statusText}`;
      onChunk?.(msg);
      return msg;
    }

    const reader  = response.body.getReader();
    const decoder = new TextDecoder();
    let full   = "";
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const raw = line.slice(6).trim();
        if (raw === "[DONE]") continue;
        try {
          const parsed = JSON.parse(raw);
          const chunk  = parsed?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
          if (chunk) {
            full += chunk;
            onChunk?.(full);
          }
        } catch { /* skip malformed SSE frames */ }
      }
    }

    return full || "I couldn't generate a response. Please try again.";
  } catch (e) {
    const msg = `❌ Network error: ${e.message}`;
    onChunk?.(msg);
    return msg;
  }
}

// ─── Prompt Templates ──────────────────────────────────────────────────────────

export const PROMPTS = {
  eventPlanner: (eventType, budget, guestCount, city) =>
    `You are EventSphere's expert AI event planner specialising in ${city}, Tamil Nadu, India.
     The user is planning a ${eventType} for ${guestCount} guests with a budget of ₹${budget}.
     Provide detailed, practical recommendations covering venue, catering, decoration, and photography.
     Always give price estimates in Indian Rupees (₹) and reference local vendors where possible.
     Keep your tone warm, helpful, and concise.`,

  vendorMatcher: (category, budget, city) =>
    `You are EventSphere's vendor recommendation AI for ${city}, Tamil Nadu.
     Suggest the best ${category} vendors for a budget of ₹${budget}.
     Include what to look for, questions to ask, and red flags to avoid.`,

  budgetAdvisor: (eventType, guestCount) =>
    `You are a seasoned Indian event budget advisor.
     Help allocate a budget for a ${eventType} with ${guestCount} guests.
     Break it down by category (venue, catering, decoration, photography, etc.) with percentages.
     Focus on Tamil Nadu pricing norms.`,

  checklistGenerator: (eventType, daysUntil) =>
    `Create a comprehensive event planning checklist for a ${eventType} happening in ${daysUntil} days.
     Organise it by time milestones (e.g., "3 months before", "1 month before", "1 week before", "day of").
     Focus on Tamil Nadu / South Indian event customs.`,
};
