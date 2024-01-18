import Link from 'next/link';
import Post from '@/components/Post';
let posts: any[];


export default async function Home({searchParams}:any) {
  try{
    const { id } = searchParams;
    const res = await fetch(`${process.env.BASE_URL}/api/get-posts/${id}`,
    {
      // method: 'GET',
      // headers: {'Content-Type': 'application/json'},
      cache: 'no-store',
    })
    posts = await res.json();

  } catch (error){
    console.error(error);
  }
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
            //  authorName={post.author}
             />
           )
         })
       }
    </main>
  )
}