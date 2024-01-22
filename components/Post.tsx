import DeletePostButton from "./DeletePostButton";
import EditPostButton from "./EditPostButton";

type PostProps = {
  id: string;
  title: string;
  content: string;
};

const Post: React.FC<PostProps> = ({ id, title, content }) => {
  return (
    <div className="card items-center border-2 border-slate-700 rounded-md p-3 w-1/2">
      <h3 className="flex text-2xl justify-center">{title}</h3>
      <p className="text-lg py-2 text-gray-300">{content}</p>
      <div className="flex gap-2 justify-center items-center">
        <EditPostButton postId={id} />
        <DeletePostButton postId={id} />
      </div>
    </div>
  );
};

export default Post;
