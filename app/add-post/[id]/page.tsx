'use client'

import Link from 'next/link';
import { SetStateAction, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function AddPost(){
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const handleTitleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    
    try{
        const res = await fetch(`http://localhost:3000/api/add-post/${id}`,
          {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({title, content})
          }
        )
        const currentPost = await res.json();
        const currentName = currentPost.author.name;
        setName(currentName);
        // router.push(`/feed/${id}/${currentName}`);
        router.push(`/`);
        router.refresh();
        
      } catch (error){
        console.error(error);
      }
      
  };

    return (
      <>
        <main className='flex flex-col items-center bg-stone-900 gap-5 min-h-screen'>
          <section className='flex flex-col items-center m-5'>
            <h1 className='text-3xl font-bold text-pink-500'>Add Post</h1>
            {/* <Link className='text-blue-500 py-5' href={'/'}>View Feed</Link> */}
          </section>
          <section className='flex flex-col items-center m-5 p-5 gap-5 bg-stone-400 border border-slate-300 rounded-md w-1/2'>
            <form className='flex flex-col w-full' onSubmit={handleSubmit}>
              <div className='flex flex-col pb-3'>
                <label className='text-xl' htmlFor="title">Title</label>
                <input
                  className='font-roboto text-zinc-800 rounded-md p-1'
                  type="text"
                  id="title"
                  value={title}
                  onChange={handleTitleChange}
                  required
                />
              </div>
              <div className='flex flex-col pb-6'>
                <label className='text-xl' htmlFor="content">
                  Content
                </label>
                <textarea
                className="font-roboto border border-slate-300 rounded-md h-40  p-1 m-1 text-zinc-800"
                  id="content"
                  value={content}
                  onChange={handleContentChange}
                  required
                />
              </div>
              <div className='flex gap-4 justify-center items-center mt-4'>
              <button
                  className='flex gap-2 items-center justify-center bg-stone-600 hover:bg-stone-700 rounded-md p-1 w-2/3 text-gray-200'
                  type="submit"
                >
                  Submit
                </button>
                <button
                  className='flex gap-2 items-center justify-center bg-stone-600 hover:bg-stone-700 rounded-md p-1 w-2/3 text-gray-200'
                  type='button'
                  onClick={() => router.push(`/`)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
      </main>
    </>
    )
}
