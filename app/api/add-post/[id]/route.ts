import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request, params:any){
  const { title, content } = await request.json();
  const { id } = params.params;
  const post = await prisma.post.create({
    data: {
      title,
      content,
      published: true,
      author: {connect: {id: id }}
    },
    include: {
      author: {
        select: {name: true}
      }}
  });
  
  return NextResponse.json(post);
}
