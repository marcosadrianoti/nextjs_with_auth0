import DeletePostButton from "./DeletePostButton";
import EditPostButton from "./EditPostButton";

export default function Post({id, title, content}){
    return (
        <div style={{border: '1px solid white', padding: '15px', margin: '10px 0px'}}>
            {/* <h3>{authorName}</h3> */}
            <h4>{title}</h4>
            <p>{content}</p>
            <EditPostButton  postId={id}/>
            <DeletePostButton postId={id} />
        </div>
    )
}