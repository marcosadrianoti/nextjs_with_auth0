'use client'
import { useRouter } from "next/navigation"

export default function DeletePostButton({postId}: {postId: string}) {
    const router = useRouter()

    async function handleClick(){
        
        try {
            await fetch(`/api/delete-post/${postId}`, {
                method: 'DELETE'
            })
            router.refresh()
        } catch(e){
            console.error(e)
        }
       
    }

    return (
        <button className='bg-slate-700 rounded-md p-1 w-1/3' onClick={handleClick}>Delete Post</button>
    )
}