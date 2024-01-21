import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request){
  const {sub, name, email} = await request.json();
  const user = await prisma.user.findUnique({
    where: { sub: sub},
  });
  
  if (!user) {
    const result = await prisma.user.create({
      data: {
        sub,
        name,
        email,
      }
     });
      return NextResponse.json(result);
    }
    return NextResponse.json({id: user.id});
}
