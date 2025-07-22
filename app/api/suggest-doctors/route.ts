import { openai } from "@/app/lib/OpenAIModel";
import { AIDoctorAgents } from "@/shared/list";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { notes } = await req.json();
  console.log("notes", notes)
  try {
    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-r1-0528-qwen3-8b:free",
      messages: [
        { role: "system", content: JSON.stringify(AIDoctorAgents) },
        {
          role: "user", content: `User Notes/Symptoms${notes}, 
         Based on the user's symptoms above, suggest 2 or more relevant doctors.
         Always include one General Physician as the first doctor for basic treatment.
         Return only a JSON object in this format (no text outside JSON,  send like this in response{
        id: 1,
        specialist: "General Physician",
        description: "Helps with everyday health concerns and common symptoms.",
        image: "/doctor1.png",
        agentPrompt: "You are a friendly General Physician AI. Greet the user and quickly ask what symptoms they’re experiencing. Keep responses short and helpful.",
        voiceId: "will",
        subscriptionRequired: false
    },`
        }
      ],
    })

    const rawResponse = completion.choices[0].message;
    console.log("rawResponse", rawResponse)
    const data = rawResponse.content?.trim().replace('```json', '').replace('```', '');

    if (data === undefined) {
      console.log("data is undefined")
      return NextResponse.json("Cannot get a doctor")
    }

    const JSONResponse = JSON.parse(data);
    console.log("JSONResponse", JSONResponse)
    return NextResponse.json(JSONResponse);

  } catch (e) {
      return NextResponse.json({ error: "Error while calling OpenAI", detail: (e as Error).message }, { status: 500 });
  }
}