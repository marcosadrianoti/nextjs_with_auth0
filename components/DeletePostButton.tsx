'use client'
import { useRouter } from "next/navigation"
import { RiDeleteBinLine } from "react-icons/ri"

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
        <button className='flex gap-2 items-center justify-center bg-stone-600 text-gray-200 rounded-md p-1 w-2/3' onClick={handleClick}>
            <RiDeleteBinLine />
            Delete
        </button>
    )
}