import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();
  const { sub } = session?.user || {};
  console.log('sub ===>', sub);
  
  if (session?.user){
    redirect('/feed');
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a href='/api/auth/login'>Login</a>
    </main>
  );
}
