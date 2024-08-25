import React from 'react'
import Image from 'next/image'
import PP from '@/public/profile.svg'
import Link from 'next/link'
import JournalForm from '@/components/JournalForm'

const page = () => {
  return (
    <div className="bg-white/50 w-full h-full rounded-xl m-3 p-[60px]">
      <Link href="/profile" className=' w-screen '>
        <Image 
        src={PP}
        alt="Image"
        width={50}
        className='absolute right-[60px] top-10'
        />
      </Link>
      <h1 className='text-5xl font-extrabold '>Hai, Andi!</h1>
      <h2 className='text-3xl m-2 font-bold mb-5 mt-5'>Apa yang kamu mau ceritakan hari ini?</h2>
      <JournalForm/>
    </div>
  )
}

export default page
