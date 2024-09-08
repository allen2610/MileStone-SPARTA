import React from 'react'
import Image from 'next/image'
import PP from '@/public/profile.svg'
import Link from 'next/link'
import JournalForm from '@/components/JournalForm'
import { getSession, checkDailyJournal } from '@/actions/actions'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

const page = async () => {
  const session = await getSession();
    if(!session){
        redirect("/")
    }
  const name = session.user.name;
  const [journalId, journalContent] = await checkDailyJournal(session.user);
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
      <h1 className='text-5xl font-extrabold '>Hai, Andi!</h1>
      <h2 className='text-3xl m-2 font-bold mb-5 mt-5'>Apa yang kamu mau ceritakan hari ini?</h2>
      <JournalForm 
          journalId = {journalId}
          journalContent = {journalContent}
      />
      <Link href="/journalling-page/review" className='flex justify-center mt-3'>
        <button className='bg-red-400 p-2 px-4 rounded-3xl italic text-white w-[100px] flex items-center justify-center font-bold '>Review</button>
      </Link>
    </div>
  )
}

export default page
