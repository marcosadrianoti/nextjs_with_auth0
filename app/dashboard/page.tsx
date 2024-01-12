import { getSession } from "@auth0/nextjs-auth0";

export default async function Dashboard() {
  const session = await getSession();
  
  return <div>
      {!!session?.user && (
        <div>
          {session.user.email} - <a href='/api/auth/logout'>Logout</a>
        </div>)}
      <br />
      Dashboard
    </div>;
}
