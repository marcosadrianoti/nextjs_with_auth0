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
    <>
      <header className='flex flex-col items-center m-5'>
        <h1 className='text-3xl font-bold'>Feed</h1>
        <h1 className='text-2xl text-gray-400'>{name}</h1>
        <div className='flex gap-5 py-5'>
          <Link className='text-blue-500' href={`/add-post/${id}`}>Add Post</Link>
          <a className='text-blue-500' href='/api/auth/logout'>Logout</a>
        </div>
      </header>
      <main className='flex flex-col items-center m-5 gap-5'>
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
    </>
  )
}
