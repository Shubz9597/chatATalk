'use client'
import React from 'react'
import Image from 'next/image'
import {ClientSafeProvider, signIn} from 'next-auth/react'

const GithubProvider = (props: ClientSafeProvider): React.JSX.Element => {
    return (
        <button className='px-4 py-3 border-gray-300 shadow-md border-solid border-2 flex space-x-5 cursor-pointer rounded outline-none' onClick={() => signIn(props.id, {callbackUrl: '/dashboard'})}>
            <Image src='/githubLogo.png' width={25} height={25} alt='Google Logo'/>
        <h5 className='text-[#747474] font-bold leading-5 tracking-normal text-lg'>Sign in with Github</h5>
    </button>
    )
}

export default GithubProvider