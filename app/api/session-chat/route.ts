import prismaClient from "@/app/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest){
    const {notes, selectedDoctor} = await req.json();
    const user = await currentUser();

    if(!user || !user.primaryEmailAddress?.emailAddress){
        return NextResponse.json({error:"unauthorized"}, {status:401}) 
    };
  
    try{
        const sessionId = uuidv4();

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
        return NextResponse.json(result);
    } catch(e){
        return NextResponse.json({ error: "Error while creating session", details: `${e}` }, { status: 500 });
    }
}

export async function GET(req:NextRequest){
    const {searchParams} = new URL(req.url);
    const sessionId = searchParams.get("sessionId");

    if(sessionId == null || !sessionId){
        return NextResponse.json("error while getting sessionId")
    }
    const user = await currentUser();

    if(sessionId=='all'){
     const result = await prismaClient.session.findMany({
        where:{
            createdBy: user?.primaryEmailAddress?.emailAddress
        },
        orderBy: {
            id: 'desc'
        }
    })
    return NextResponse.json(result);
    }
    else{
    const result = await prismaClient.session.findFirst({
        where:{
            sessionId: sessionId
        }
    })
    return NextResponse.json(result)
    }

}