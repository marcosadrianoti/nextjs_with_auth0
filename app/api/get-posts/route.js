import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request){
  const { id } = await request.json();
  console.log('id ===>', id);
  const posts = await prisma.post.findMany({
    where: {
      published: true,
      authorId: id
    },
    include: {
      author: {
        select: {name: true}
      }
    }
  })
  return NextResponse.json(posts); // posts;
}