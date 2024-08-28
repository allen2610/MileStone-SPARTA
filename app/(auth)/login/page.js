import React from 'react'
import LoginForm from '@/components/LoginForm'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/logo1.svg'

const page = () => {
  return (
    <div className=' w-screen h-screen flex items-center justify-center'>
      <Image src={Logo} alt="logo" width={200} className='absolute left-5 top-3'/>
      <div className='flex flex-col items-center text-center bg-white p-10 rounded-xl w-[500px]'>
        <h1 className='text-2xl mb-5 font-extrabold'>User Login</h1>
        <LoginForm/>
        <div className='text-sm flex flex-col items-start mr-[150px]'>
          <Link href="/">
            <button >Forgot Password</button>
          </Link>
          <Link href='/register'>
            <button>Register</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page
