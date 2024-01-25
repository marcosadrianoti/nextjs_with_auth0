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
      <main className='flex flex-col items-center bg-stone-900 gap-5'>
        <section className='flex flex-col items-center m-5'>
          <h1 className='text-3xl font-bold'>Feed</h1>
          <h1 className='text-2xl text-gray-400'>{name}</h1>
          <div className='flex gap-5 py-5'>
            <Link className='text-blue-500' href={`/add-post/${id}`}>Add Post</Link>
            <Link className='text-blue-500' href='/api/auth/logout'>Logout</Link>
            {/* <a className='text-blue-500' href='/api/auth/logout'>Logout</a> */}
          </div>
        </section>
        <section className='grid grid-cols-3 gap-3 p-5'>
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
        </section>
      </main>
    </>
  )
}
