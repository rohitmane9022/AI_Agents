import { NextRequest } from "next/server";
import { streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { messages, videoId } = await req.json();

    console.log("Video ID:", videoId);

    const result = await streamText({
      model: google("gemini-1.5-flash"),
      messages,
    });


    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({ error: error || "Something went wrong" }),
      { status: 500 }
    );
  }
}
