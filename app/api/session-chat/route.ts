import prismaClient from "@/app/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest){
    const {notes, selectedDoctor} = await req.json();
    const user = await currentUser();
console.log("user", user)
console.log("note", notes)
    if(!user || !user.primaryEmailAddress?.emailAddress){
        return NextResponse.json({error:"unauthorized"}, {status:401}) 
    };
    if(!user || !user.primaryEmailAddress?.emailAddress){
     console.log("email or user is broke")
    }
    try{
        const sessionId = uuidv4();
console.log("sessionId", sessionId)
       console.log("selectedDoctor ++++", selectedDoctor , typeof selectedDoctor)
 console.log("📦 Prisma Create Input:", {
  sessionId,
  selectedDoctor,
  notes,
  createdBy: user.primaryEmailAddress?.emailAddress
});

        const result = await prismaClient.session.create({
            data:{
                sessionId: sessionId,
                selectedDoctor: selectedDoctor,
                notes: notes,
                conversation: {},
                report: {},
                createdBy: user.primaryEmailAddress?.emailAddress
            }
        })
        console.log("result from BE", result)
        return NextResponse.json(result);
    } catch(e){
console.error("🔥 Error while creating session:", e);
return NextResponse.json({ error: "Error while creating session", details: `${e}` }, { status: 500 });
    }
}

export async function GET(req:NextRequest){
    const {searchParams} = new URL(req.url);
    const sessionId = searchParams.get("sessionId");
    console.log("sessionId", sessionId)
    if(sessionId == null || !sessionId){
        return NextResponse.json("error while getting sessionId")
    }
    const user = await currentUser();

    const result = await prismaClient.session.findFirst({
        where:{
            sessionId: sessionId
        }
    })
    console.log("result", result);
    return NextResponse.json(result)
}