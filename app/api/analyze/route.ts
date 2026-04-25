import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are a supportive but rational thinking assistant.

Analyze the user's thoughts and return:
1. Mood
2. Insight
3. Control
4. No control
5. Actions

User input:
${text}
`;

    const result = await model.generateContent(prompt);
    const output = result.response.text();

    return Response.json({ result: output });
  } catch (err: any) {
    console.log(err);

    return Response.json(
      { error: err.message || "Gemini error" },
      { status: 500 }
    );
  }
}