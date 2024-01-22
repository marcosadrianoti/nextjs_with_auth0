'use client'
import React,{useEffect, useState, SetStateAction, useCallback} from 'react'
import { useRouter } from 'next/navigation'

export default function EditPage({params} :{params:{id:number}}) {
    const [authorId, setAuthorId] = useState('') // [authorId]
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const router = useRouter()
    const id = params.id;
    const handleTitleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setTitle(event.target.value);
    };
    
    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log('entrou aqui');
        try{
            await fetch(`http://localhost:3000/api/update-post/${id}`, {
                method: 'PUT', 
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, content}) })
                
        } catch (error){
        console.error(error)
        }
        router.push(`/feed/${authorId}/${name}`);
    }

    const getCurrentPost = async (id: any) => {
        try{
            const res = await fetch(`http://localhost:3000/api/get-post/${id}`);
            console.log('res===>', res);
            
            const post = await res.json();
            
            console.log('post===>', post);
            setAuthorId(post.authorId);
            setName(post.author.name);
            setTitle(post.title);
            setContent(post.content);
            // setTitle('outro teste');
            
        } catch (error){
            console.error(error)
        }
    }
    useEffect(()=>{
        getCurrentPost(id);
    }, [id])
    console.log('title+===>', title);
    console.log('content+===>', content);
    
        
          
        //   router.push(`/feed?id=${id}`);
    //   };
    //   const handleSubmit = async (event: { preventDefault: () => void; }) => {
          
    //   }
// const EditPage = ({params} :{params:{id:number}}) => {
    // const router = useRouter();
    // const [content, setContent] = useState('')
    // const { data: post, error, isLoading } = useSWR<any>(`http://localhost:3000/api/get-post/${params.id}`, fetcher);
    // const res = await fetch(`http://localhost:3000/api/get-post/${params.id}`);
    // const [ post ] = await res.json();
    // useEffect(()=>{
    //     if(post){
    //         console.log('post', title, params.id);
    //         setTitle(post.title);
    //         setContent(post.content);
    //     }
    // },[post, params.id, title])
    // console.log('post+===>', post);
    // const title = post.title;
    // setTitle(post.title);
    // console.log('title+===>', title);


    
    
    
    // const saveData = (e: { preventDefault: () => void; })=>{
    //     e.preventDefault();
        // if(title!="" && content !=""){
        //     var data = {
        //         "title":title,
        //         "content":content
        //     }
        //     console.log(data);
        //     fetch(`http://localhost:3000/api/posts/`+params.id, {
        //         method: 'PUT',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body:JSON.stringify(data),
        //     })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         if(data.success>0){
        //             alert(data.message);
        //             router.push('/post')
        //         }
        //     })
        // }
 
    // }
    // if(error) return <div>failed to load</div>
    // if(isLoading) return <div>loading...</div>
    return (
        <div className="w-full max-w-5xl m-auto">
            <h1 className="text-3xl font-bold">Edit = {title}</h1>
            {/* <form onSubmit={saveData}> */}
            <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" className="border border-slate-300 p-1 m-1 text-zinc-800" value={title} onChange={e => setTitle(e.target.value)}/>
                <br />
            <label htmlFor="content">Content</label>
                <textarea  name="content" id="content" className="border border-slate-300 p-1 m-1 text-zinc-800" value={content} onChange={e => setContent(e.target.value)}/>
                {/* onChange={e => setContent(e.target.value) */}
                {/* <input type="submit" value="submit" className="border border-slate-300 p-1 m-1" /> */}
                <br />
                <button className='bg-slate-700 rounded-md p-1' type="submit">Submit</button>
            </form>
        </div>
    )
}
// export default EditPage
