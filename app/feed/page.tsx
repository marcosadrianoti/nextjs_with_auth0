import Link from 'next/link';
import Post from '@/components/Post';


export default async function Home({searchParams}:any) {
  try{
    const { id } = searchParams;
    console.log('searchParams ===>', id);
    const res = await fetch(
      `${process.env.BASE_URL}/api/get-posts`,
      {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: id})
      }
    );
    const data = await res.json();
    console.log(`${process.env.BASE_URL}/api/get-posts`);
    
    console.log('DATA====>', data);
    // userID = data.id;
    
    
    
    // const data = await res.json();
    
    // router.refresh()
  } catch (error){
    console.error(error);
  }
  return (
    <main>
      <Link href={'/add-post'}>Add Post</Link>
       <div>
         <a href='/api/auth/logout'>Logout</a>
       </div>
       <br />
       <h1>Feed</h1>
       {/* {
         posts.map((post) => {
           return (
             <Post
             key={post.id}
             id={post.id}
             title={post.title}
             content={post.content}
             authorName={post.author}
             />
           )
         })
       } */}
    </main>
  )
}