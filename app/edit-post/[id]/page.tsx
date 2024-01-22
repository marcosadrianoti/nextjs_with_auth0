'use client'

import React,{ useEffect, useState, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';

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
        <div className="w-full max-w-5xl m-auto">
            <h1 className="text-3xl font-bold">Edit = {title}</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" className="border border-slate-300 p-1 m-1 text-zinc-800" value={title} onChange={e => setTitle(e.target.value)}/>
                <br />
            <label htmlFor="content">Content</label>
                <textarea  name="content" id="content" className="border border-slate-300 p-1 m-1 text-zinc-800" value={content} onChange={e => setContent(e.target.value)}/>
                <br />
                <button className='bg-slate-700 rounded-md p-1' type="submit">Submit</button>
            </form>
        </div>
    )
}
