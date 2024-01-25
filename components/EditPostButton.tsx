'use client'
import { useRouter } from "next/navigation"
import { MdOutlineEdit } from "react-icons/md";

export default function EditPostButton({postId}: {postId: string}) {
    const router = useRouter()

    async function handleClick(){
        router.push(`/edit-post/${postId}`);
        router.refresh()
    }

    return (
        <button className='flex gap-2 items-center justify-center bg-stone-600 rounded-md p-2 w-2/3 text-gray-200' onClick={handleClick}>
            <MdOutlineEdit />
            Edit
        </button>
    )
}
