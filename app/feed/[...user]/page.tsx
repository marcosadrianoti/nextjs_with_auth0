import Link from 'next/link';
import Post from '@/components/Post';
import { MdPostAdd, MdLogout } from "react-icons/md";
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
      <main className='flex flex-col items-center bg-stone-900 gap-5 min-h-screen'>
        <section className='flex justify-between m-5 w-full'>
          <div className='w-1/3'></div>
          <div className='w-1/3 text-center'>
            <h1 className='text-3xl font-bold text-pink-500'>My Post-its</h1>
            <h1 className='text-2xl text-gray-400'>{name}</h1>
          </div>
          <div className='flex justify-end items-start gap-5 w-1/3 mr-5'>
            <Link className='flex gap-1 items-center justify-center text-blue-500' href={`/add-post/${id}`}>
              <MdPostAdd />
              Add Post-it
            </Link>
            <Link className='flex gap-1 items-center justify-center text-blue-500' href='/api/auth/logout'>
              <MdLogout />
              Logout
            </Link>
            {/* <a className='text-blue-500' href='/api/auth/logout'>Logout</a> */}
          </div>
        </section>
        <section className='grid grid-cols-3 gap-3 p-5 w-2/3'>
        {/* <Card title="Título do Card" content="Conteúdo do Card. Este é um exemplo de texto que será cortado, e o botão 'Leia mais...' permitirá expandir o texto."/> */}
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
