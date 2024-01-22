import Link from 'next/link';
import Post from '@/components/Post';
let posts: any[];


export default async function Home({ params }: { params: { user: string } }) {
  const id = params.user[0];
  const name = decodeURIComponent(params.user[1]);
  
  try{
    const res = await fetch(`${process.env.BASE_URL}/api/get-posts/${id}`,
    {
      cache: 'no-store',
    });
    posts = await res.json();

  } catch (error){
    console.error(error);
  }
  return (
    <main>
      <Link href={`/add-post/${id}`}>Add Post</Link>
       <div>
         <a href='/api/auth/logout'>Logout</a>
       </div>
       <br />
       <h1>Feed</h1>
       <h1>Author = {name}</h1>
       {
         posts.map((post) => {
           return (
             <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
             />
           )
         })
       }
    </main>
  )
}
