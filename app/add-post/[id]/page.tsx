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
        router.push(`/feed/${id}/${currentName}`);
        router.refresh();
        
      } catch (error){
        console.error(error);
      }
      
  };

    return (
      <>
        <header className='flex flex-col items-center m-5'>
          <h1 className='text-3xl font-bold'>Add Post</h1>
          <Link className='text-blue-500 py-5' href={'/'}>View Feed</Link>
        </header>
        <main className='flex flex-col items-center m-5'>
          <form className='flex flex-col w-1/2' onSubmit={handleSubmit}>
          <div className='flex flex-col pb-3'>
            <label className='text-xl' htmlFor="title">Title</label>
            <input
              className='text-zinc-800'
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className='flex flex-col pb-6'>
            <label className='text-xl' htmlFor="content">Content</label>
            <textarea
              className='text-zinc-800'
              id="content"
              value={content}
              onChange={handleContentChange}
              required
            />
          </div>
          <div className='flex justify-center'>
            <button className='bg-slate-700 rounded-md p-1 w-1/6' type="submit">Submit</button>
          </div>
      </form>
    </main>
    </>
    )
}
