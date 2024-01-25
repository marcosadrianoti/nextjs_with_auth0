import Login from "@/components/Login";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();
  const { sub, name, email } = session?.user || {};
  let userName = encodeURIComponent(name);
  let userID = '';
  
  if (session?.user){
    try{
      const res = await fetch(
        `${process.env.BASE_URL}/api/add-user`,
        {
          method: 'POST', 
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({sub, name, email})
        }
      );
      const data = await res.json();
      userID = data.id;

    } catch (error){
      console.error(error);
    }

    redirect(`/feed/${userID}/${userName}`);
  }
  
  return (
    <Login />
  );
}
