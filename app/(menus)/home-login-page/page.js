import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PP from '@/public/profile.svg'
import Bubble from '@/public/text-bubble.svg'
import { checkDaily, getSession } from '@/actions/actions'
import { redirect } from 'next/navigation'
import MoodForm from '@/components/MoodForm'
import { revalidatePath } from 'next/cache'

const page = async () => {
  const session = await getSession();
    if(!session){
        redirect("/")
    }
    const name = session.user.name;
    const [avail, mood] = await checkDaily(session.user);
    revalidatePath("/home-login-page");
  return (
    <div className="bg-white/50 opacity- w-full rounded-xl m-3 p-[60px]">
      <Link href="/profile-page" className=' w-screen '>
        <Image 
        src={PP}
        alt="Image"
        width={50}
        className='absolute right-[60px] top-10'
        />
      </Link>
      <h1 className='text-5xl font-extrabold mb-[40px]'>Hai, {name}!</h1>
      <MoodForm 
        avail = {avail}
        mood = {mood}
      />
      <div className='pt-10'>
        <div className='flex justify-center w-full md:absolute md:right-[150px] md:top-[450px]'>
          <Image
            src={Bubble}
            alt="Image"
            width={300}
            className='flex items-center'
          />
          <div className='text-3xl md:absolute md:top-[30px] text-white font-semibold'>Daily Motivation</div>
        </div>
        <div className='flex flex-col justify-center items-center bg-[#7A3B2E] md:ml-[250px] md:w-[700px] text-white rounded-xl'>
          <div className='bg-[#7A3B2E] h-[300px]'> </div>
          <div className='bg-white w-full h-[2px]'></div>
          <div className='bg-[#7A3B2E] mt-1 text-lg p-2'>Noted!</div>
        </div>
      </div>
    </div>
  )
}

export default page
