'use client'

import { useRouter } from 'next/navigation';
import React, { useState, FormEvent } from 'react';

interface ReusableFormProps {
  onSubmit: () => Promise<void>;
}

// export default function ReusableForm: React.FC<ReusableFormProps>({ onSubmit }) {
export default function ReusableForm({ onSubmit }: ReusableFormProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // Outras lógicas específicas do formulário podem ser adicionadas aqui
    await onSubmit();
  };

  return (
    <>
        <main className='flex flex-col items-center bg-stone-900 gap-5 min-h-screen'>
          <section className='flex flex-col items-center m-5'>
            <h1 className='text-3xl font-bold text-pink-500'>Edit Post-it</h1>
            {/* <Link className='text-blue-500 py-5' href={'/'}>View Feed</Link> */}
          </section>
          <section className='flex flex-col items-center m-5 p-5 gap-5 bg-stone-400 border border-slate-300 rounded-md w-1/2'>
            <form className='flex flex-col w-full' onSubmit={handleSubmit}>
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
                <label className='text-xl' htmlFor="content">
                  Content
                </label>
                <textarea
                  className="font-roboto border border-slate-300 rounded-md h-40  p-1 m-1 text-zinc-800"
                  name="content"
                  id="content"
                  value={content}
                  onChange={e => setContent(e.target.value)}
                />
              </div>
              <div className='flex gap-4 justify-center items-center mt-4'>
                <button
                  className='flex gap-2 items-center justify-center bg-stone-600 hover:bg-stone-700 rounded-md p-1 w-2/3 text-gray-200'
                  type="submit"
                >
                  Submit
                </button>
                <button
                  className='flex gap-2 items-center justify-center bg-stone-600 hover:bg-stone-700 rounded-md p-1 w-2/3 text-gray-200'
                  type='button'
                  onClick={() => router.push(`/`)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        </main>
      </>
  );
};



// ReusableForm.tsx

// import React, { FormEvent } from 'react';

// interface ReusableFormProps {
//   onSubmit: () => Promise<void>;
// }

// function ReusableForm({ onSubmit }: ReusableFormProps): JSX.Element {
//   function handleSubmit(event: FormEvent): void {
//     event.preventDefault();
//     // Outras lógicas específicas do formulário podem ser adicionadas aqui
//     onSubmit();
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Seus campos de formulário e outras lógicas específicas do formulário podem ser adicionados aqui */}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default ReusableForm;





// SeuComponente.tsx

// import React from 'react';
// import ReusableForm from './ReusableForm';

// function SeuComponente(): JSX.Element {
//   function handleAddPost(): Promise<void> {
//     // Lógica para adicionar um post
//     console.log('Adicionando post...');
//     return Promise.resolve();
//   }

//   function handleEditPost(): Promise<void> {
//     // Lógica para editar um post
//     console.log('Editando post...');
//     return Promise.resolve();
//   }

//   return (
//     <div>
//       {/* Para o formulário de adição de post */}
//       <h2>Adicionar Post</h2>
//       <ReusableForm onSubmit={handleAddPost} />

//       {/* Para o formulário de edição de post */}
//       <h2>Editar Post</h2>
//       <ReusableForm onSubmit={handleEditPost} />
//     </div>
//   );
// }

// export default SeuComponente;

