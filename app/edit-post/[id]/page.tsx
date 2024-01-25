'use client'

import React,{ useEffect, useState, SetStateAction, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function EditPage({params} :{params:{id:number}}) {
    const [authorId, setAuthorId] = useState('');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const id = params.id;
    const router = useRouter();

    const handleTitleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setTitle(event.target.value);
    };
    
    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        try{
            await fetch(`http://localhost:3000/api/update-post/${id}`, {
                method: 'PUT', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, content }) })
                
        } catch (error){
        console.error(error);
        }
        router.push(`/feed/${authorId}/${name}`);
    }

    const getCurrentPost = async (id: any) => {
        try{
            const res = await fetch(`http://localhost:3000/api/get-post/${id}`);
            const post = await res.json();
            setAuthorId(post.authorId);
            setName(post.author.name);
            setTitle(post.title);
            setContent(post.content);
            
        } catch (error){
            console.error(error);
        }
    }
    useEffect(()=>{
        getCurrentPost(id);
    }, [id])

    return (
      <>
        <header className='flex flex-col items-center m-5'>
          <h1 className="text-3xl font-bold">Edit Post</h1>
          <Link className='text-blue-500 py-5' href={'/'}>View Feed</Link>
        </header>
        <main className='flex flex-col items-center m-5 gap-5'>
          <form className='flex flex-col w-1/2' onSubmit={handleSubmit}>
            <div className='flex flex-col pb-3'>
              <label className='text-xl' htmlFor="title">Title</label>
              <input
                className="font-roboto border border-slate-300 rounded-md p-1 m-1 text-zinc-800"
                type="text"
                name="title"
                id="title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className='flex flex-col pb-6'>
              <label className='text-xl' htmlFor="content">Content</label>
              <textarea
                className="font-roboto border border-slate-300 rounded-md  p-1 m-1 text-zinc-800"
                name="content"
                id="content"
                value={content}
                onChange={e => setContent(e.target.value)}
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
