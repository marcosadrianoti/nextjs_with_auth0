import prisma from "@/lib/prisma";

export async function GET(request: Request, params:any){
  const { id } = params.params;
  console.log('id author====>', id);
  
  const posts = await prisma.post.findMany({
    where: {
      // published: true,
      authorId: id
    },
    include: {
      author: {
        select: {name: true}
      }}
  })

  return Response.json(posts);
}