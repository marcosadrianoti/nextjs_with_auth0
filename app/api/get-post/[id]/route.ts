import prisma from "@/lib/prisma";

export async function GET(request: Request, params:any){
  const { id } = params.params;
  console.log('id===>', id);
  
  const post = await prisma.post.findUnique({
    where: {
      // published: true,
      id: id
    },
    include: {
      author: {
        select: {name: true}
      }}
  })

  return Response.json(post);
}