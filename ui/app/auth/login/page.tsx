import React from 'react'
import { getProviders, signIn } from 'next-auth/react'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import GoogleProvider from '@/app/components/ProviderSigninButtons/GoogleProvider';
import GithubProvider from '@/app/components/ProviderSigninButtons/GithubProvider';
import { redirect } from 'next/navigation';
import Logo from '@/public/svg/logo.svg';


const Login = async () => {
  const session = await getServerSession(nextAuthOptions);

  const providers = await getProviders();

  if(session !== null) {
    redirect('/dashboard')
  }

  return (
    <div className='bg-green-primary dark:bg-green-primary-dark min-h-screen min-w-full'>
      <div className='flex flex-col lg:flex-row h-full'>
        <div className='p-6 lg:p-12 flex justify-center lg:justify-normal lg:w-1/4'>
          <div className='my-1 mr-2 lg:my-1.5'>
            <Logo className='h-7 w-7 fill-white'/>
          </div>
          <h2 className='text-white dark:text-dark-text font-medium pt-1.5 text-xl lg:text-xl '>Chat A Talk</h2>
        </div>

        <div className='h-[calc(100vh-48px)] justify-center rounded-2xl shadow-md m-6 bg-white dark:bg-dark flex p-4 lg:w-3/4'>
          <div className='flex flex-col text-center justify-center'>
          <h2 className='font-medium text-black dark:text-darkText leading-3 text-2xl tracking-wider py-1 mb-4'>
            Welcome Back !
          </h2>
          <span className='text-black dark:text-darkText text-'>
            Sign Up / Login into the Application
          </span>
          <div className='mt-8 flex-col lg:flex lg:flex-row lg:space-x-5 space-y-4 lg:space-y-0 w-full'>
          <GoogleProvider {...providers!['google']}/>
          <GithubProvider {...providers!['github']}/>
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login