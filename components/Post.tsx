'use client'

import React, { useState } from 'react';
import DeletePostButton from "./DeletePostButton";
import EditPostButton from "./EditPostButton";

type PostProps = {
  id: string;
  title: string;
  content: string;
};

const Post: React.FC<PostProps> = ({ id, title, content }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex flex-col justify-between bg-stone-800 border-2 border-slate-700 rounded-md p-5">
      <div>
        <h3 className="text-2xl justify-center">{title}</h3>
        <p className={`${expanded ? 'mb-4' : 'mb-2'} ${expanded ? 'block' : 'hidden'} text-lg py-2 text-gray-300`}>
          {content}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-500 hover:underline"
        >
          {expanded ? 'Leia menos...' : 'Leia mais...'}
        </button>
      </div>
      <div className="flex gap-4 justify-center items-center py-3">
        <EditPostButton postId={id} />
        <DeletePostButton postId={id} />
      </div>
    </div>
  );
};

export default Post;
