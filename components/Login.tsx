import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <>
    <main className="flex min-h-screen justify-around items-center bg-stone-900 p-10">
        <section
          className="w-1/2 h-3/4 items-center p-24 bg-auto bg-center bg-no-repeat rounded-lg"
          style={{backgroundImage: "url('/design-em-preto.jpg')" }}
        >
          <div className="flex flex-col items-center text-center text-white text-3xl p-5 w-full">
            <p className="p-3">Explore and manage your ideas!</p>
            <p className="text-xl">Log in now to access your Post-its</p>
            <Link
              className='m-5 mt-20 w-1/2 text-3xl font-bold text-white bg-pink-500 rounded-md p-1 shadow-xl' href='/api/auth/login'
            >
              Login
            </Link>
          </div>
        </section>
        {/* <section className="w-1/2 items-center text-center p-24 bg-slate-800">
        </section> */}
    </main>
    </>
  );
};