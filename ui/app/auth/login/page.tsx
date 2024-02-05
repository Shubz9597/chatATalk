import React from 'react'
import { getProviders, signIn } from 'next-auth/react'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import GoogleProvider from '@/app/components/ProviderSigninButtons/GoogleProvider';
import GithubProvider from '@/app/components/ProviderSigninButtons/GithubProvider';


const session = await getServerSession(nextAuthOptions);

console.dir(`session is this ${session}`, {depth: null})
const providers = await getProviders();

// if(session !== null) {
//   try{
//     redirect('http://localhost:3000/dashboard');
//   } catch(err) {
//     console.error(err)
//   }
// }

console.log(providers, {depth: null})

const Login = () => {
  return (
    <main className='flex flex-row min-h-screen w-screen'>
      <section className='bg-[#7974c2] w-3/5 flex flex-col shadow-md'>
        <h2 className='text-white font-bold justify-center'>Chat A Talk</h2>
      </section>
      <section className='bg-white w-2/5'>
        <div className='flex flex-col justify-center h-full px-60 py-36'>
          <div className='border-2 border-gray-400 shadow-lg rounded-xl flex-col space-y-12 text-center py-20'>
            <div className=''>
              <h2 className='font-extrabold tracking-wide uppercase text-black text-3xl'>Login / Signup</h2>
            </div>
            <div className='flex flex-col justify-center text-center px-12 space-y-2'>
              <GoogleProvider  {...providers!['google']}/>
              <GithubProvider {...providers!['github']} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login