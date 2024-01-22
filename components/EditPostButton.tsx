'use client'
import { useRouter } from "next/navigation"

export default function EditPostButton({postId}: {postId: string}) {
    const router = useRouter()

    async function handleClick(){
        router.push(`/edit-post/${postId}`);
        router.refresh()
        
        // try {
        //     await fetch(`http://localhost:3000/edit-post/${postId}`, {
        //         // method: 'PUT'
        //     })
        //     // router.refresh()
        // } catch(e){
        //     console.error(e)
        // }
       
    }

    return (
        <button className='bg-slate-700 rounded-md p-1' onClick={handleClick}>Edit Post</button>
    )
}