'use client'
import { useRouter } from "next/navigation"

export default function EditPostButton({postId}: {postId: string}) {
    const router = useRouter()

    async function handleClick(){
        router.push(`/edit-post/${postId}`);
        router.refresh()
    }

    return (
        <button className='bg-slate-700 rounded-md p-1 w-1/3' onClick={handleClick}>Edit Post</button>
    )
}
