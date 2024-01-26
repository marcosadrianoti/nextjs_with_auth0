'use client'

import { useRouter } from "next/navigation"
import { RiDeleteBinLine } from "react-icons/ri"

export default function DeletePostButton({ postId }: { postId: string }) {
  const router = useRouter();

  async function handleClick() {
    // Adiciona uma confirmação antes de excluir
    const shouldDelete = window.confirm('Are you sure you want to delete this post-it?');

    if (!shouldDelete) {
      // O usuário cancelou a exclusão
      return;
    }

    try {
      await fetch(`/api/delete-post/${postId}`, {
        method: 'DELETE',
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <button
      className='flex gap-2 items-center justify-center bg-stone-600 hover:bg-stone-700 text-gray-200 rounded-md p-1 w-2/3'
      onClick={handleClick}
    >
      <RiDeleteBinLine />
      Delete
    </button>
  );
}
  