// import { getSession } from "@auth0/nextjs-auth0";
// import { redirect } from "next/navigation";

// export default async function Home() {
//   const session = await getSession();
//   const { sub } = session?.user || {};
//   console.log('sub ===>', sub);
  
//   if (session?.user){
//     redirect('/dashboard');
//   }
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <a href='/api/auth/login'>Login</a>
//     </main>
//   );
// }

import Link from 'next/link';
import Post from '@/components/Post';
// import styles from './page.module.css';
import prisma from '@/lib/prisma';

async function getPosts(){
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true}
      }
    }
  })
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main>
      <Link href={'/add-post'}>Add Post</Link>
      <div>
        <a href='/api/auth/logout'>Logout</a>
      </div>
      <br />
      <h1>Feed</h1>
      {
        posts.map((post) => {
          return (
            <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author}
            />
          )
        })
      }
    </main>
  )
}