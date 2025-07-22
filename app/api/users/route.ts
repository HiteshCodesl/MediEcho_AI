import prismaClient from "@/app/lib/prisma"; 
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const user = await currentUser();
    
    const email = user?.primaryEmailAddress?.emailAddress;
    const name = user?.fullName ?? "Anonymous";

    if(!email){
      return NextResponse.json({message: "missing email"})
    }
    try{
      const existingUser = await prismaClient.user.findUnique({
        where: {email}
      });

      if(!existingUser){
        const result = await prismaClient.user.create({
          data: {
            name, email
          },
        })
        console.log(result);
        return NextResponse.json(result)
      }
      return NextResponse.json({message: "user already exists"})

    }catch(e){
      return NextResponse.json({error: e})
    }
}