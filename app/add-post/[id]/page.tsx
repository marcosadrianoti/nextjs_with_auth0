'use client'
import styles from '@/app/page.module.css'
import Link from 'next/link';
import { SetStateAction, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function AddPost(){
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter()
  const params = useParams()
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
        await fetch(`http://localhost:3000/api/add-post/${id}`, {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, content}) })
            
        router.refresh()
    } catch (error){
        console.error(error)
    }

    setTitle('');
    setContent('');
  };

    return (
        <main className={styles.main}>
            <Link href={'/'}>View Feed</Link>
        <h1>Add Post</h1>
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
    )
}