import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  const { prompt } = await req.json();

  console.log("🔐 OPENAI KEY:", process.env.OPENAI_API_KEY);

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const reply = response.data.choices[0].message.content;
    return NextResponse.json({ reply });
    } catch (err) {
    console.error("OpenAI Error:", {
      message: err.message,
      response: err.response?.data,
      status: err.response?.status,
    });

    return NextResponse.json({ reply: "Oops! Something went wrong.🛠️" });
  }

}
