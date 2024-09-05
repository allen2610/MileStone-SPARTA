import React from 'react'
import Image from 'next/image'
import PP from '@/public/profile.svg'
import Link from 'next/link'
import { getSession } from '@/actions/actions'
import prisma from '@/lib/db'
import { redirect } from 'next/navigation'

const page = async ({params}) => {
  const session = await getSession();
  if(!session){
    redirect("/")
  }
  const name = session.user.name;
  const journal = await prisma.journal.findUnique({
    where:{
      id:params.id,
    }
  })
  return (
    <div className="bg-white/50 w-full h-full rounded-xl m-3 p-[60px]">
      <Link href="/profile-page" className=' w-screen '>
        <Image 
        src={PP}
        alt="Image"
        width={50}
        className='absolute right-[60px] top-10'
        />
      </Link>
      <h1 className='text-5xl font-extrabold '>Hai, {name}!</h1>
      <h2 className='text-3xl m-2 font-bold mb-5 mt-5'>Apa yang kamu mau ceritakan hari ini?</h2>
      <textarea name="journal" readOnly rows="20" className="resize w-full">{journal.content}</textarea>
      <Link href="/journalling-page/review" className='flex justify-center mt-3'>
        <button className='bg-red-400 p-2 px-4 rounded-3xl text-white w-[100px] flex items-center justify-center font-bold '>Review</button>
      </Link>
    </div>
  )
}

export default page
