import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
// import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

export default async function Home() {
  const session = await getSession();
  const { sub, name, email } = session?.user || {};
  // const router = useRouter();
  let userID = '';
  
  if (session?.user){
    try{
      const res = await fetch(
      // await fetch(
        `${process.env.BASE_URL}/api/add-user`,
        {
          method: 'POST', 
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({sub, name, email})
        }
      );
      const data = await res.json();
      console.log('ID====>', data.id);
      userID = data.id;
      
      
      
      // const data = await res.json();
      
      // router.refresh()
    } catch (error){
      console.error(error);
    }
    // router.push({
    //   pathname: '/feed',
    //   query: { userID: userID},
    // });
    // router.push(`/feed/${userID}`);
    redirect(`/feed?id=${userID}`);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a href='/api/auth/login'>Login</a>
    </main>
  );
}
