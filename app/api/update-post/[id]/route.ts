import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(request: Request, params:any) {
  const { title, content } = await request.json();
  try{
    const { id } = params.params;
    const post = await prisma.post.update(
      {
        where: { id },
        data: { title, content }
      }
    );

    return NextResponse.json(post);
  }catch(error){
    console.log(error);
  }
}
