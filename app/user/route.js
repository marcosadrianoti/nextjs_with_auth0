import prisma from "@/lib/prisma";
import { NextResponse } from "next/server"

export async function POST(request){
    const res = await request.json()
    const {sub, name, email} = res;
    const result = { data: {
          sub,
          name,
          email,
        }
      }
    // const result = await prisma.user.create({
    //   data: {
    //     sub,
    //     name,
    //     email,
    //   }
    //  })

    return NextResponse.json(result.data)
}