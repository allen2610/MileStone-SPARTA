import React from 'react'
import prisma from '@/lib/db';
import { getSession } from '@/actions/actions';
import { redirect } from 'next/navigation';
import DropdownButton from '@/components/DropdownButton';
import Bubble from '@/public/bubble2.svg'
import Maskot from '@/public/maskot.svg'
import PP from '@/public/profile.svg'
import Image from 'next/image';
import Link from 'next/link';
import Bahagia from '@/public/bahagia.svg'
import Senang from '@/public/senang.svg'
import Biasa from '@/public/biasa.svg'
import Sedih from '@/public/sedih.svg'
import Marah from '@/public/marah.svg'

const MoodAssessment = async ({ searchParams }) => {
  const session = await getSession();
  if(!session){
      redirect("/")
  }
  const currentDate = new Date();
  const currentMonth = Number(searchParams['month']) || currentDate.getMonth() + 1;
  const currentYear = Number(searchParams['year']) || currentDate.getYear() + 1900;
  
  const startOfMonth =  new Date(currentYear, currentMonth - 1, 1);
  const endOfMonth =  new Date(currentYear, currentMonth, 0, 23, 59, 59, 999);
  const moods = await prisma.moods.findMany({
    where: {
      createdAt: {
        gte: startOfMonth,
        lt: endOfMonth,
      },
    },
    orderBy:{
      createdAt: 'desc',
    }
  });

  const moodsByWeek = [
    {
      id: 1, 
      moods: [null, null, null, null, null, null, null] 
    },
    {
      id: 2, 
      moods: [null, null, null, null, null, null, null] 
    },
    {
      id: 3, 
      moods: [null, null, null, null, null, null, null] 
    },
    {
      id: 4, 
      moods: [null, null, null, null, null, null, null] 
    },
    {
      id: 5, 
      moods: [null, null, null, null, null, null, null] 
    },
  ]
  const moodCounter = [
    {
      id: 1,
      count: 0
    },
    {
      id: 2,
      count: 0
    },
    {
      id: 3,
      count: 0
    },
    {
      id: 4,
      count: 0
    },
    {
      id: 5,
      count: 0
    }
  ];
  const moodImages = ['', Marah, Sedih, Biasa, Senang, Bahagia];
  let weeklyMood = [null, null, null, null, null, null, null];
  moods.forEach((mood, index, array) => {
    const date = new Date(mood.createdAt);
    const weekday = date.getDay();
    weeklyMood[weekday] = mood.mood;
    moodCounter[mood.mood-1].count+=1;
    // console.log(moodCounter)
    if (date.getDay() == 0 || index === array.length - 1){
      const weekToUpdate = moodsByWeek.find((week) => week.id === 1 + (date.getDate()/7|0));
      // If the object exists, update its moods array
      if (weekToUpdate) {
        weekToUpdate.moods = weeklyMood;
        weeklyMood = [null, null, null, null, null, null, null];
      }
    }
  })
  
  const expression = ['Marah', 'Sedih', 'Biasa saja', 'Senang', 'Bahagia'];
  const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  return (
    <div className='bg-white/50 w-full h-full rounded-xl m-3 p-[60px] '>
      <Link href="/profile-page" className=' w-screen '>
        <Image 
        src={PP}
        alt="Image"
        width={50}
        className='absolute right-[60px] top-10'
        />
      </Link>
      <h1 className='text-5xl font-extrabold '>Mood Echoers selama sebulan</h1>
      <DropdownButton></DropdownButton>
      <div className="flex items-start justify-center mt-10">
        <table>
          <thead>
            <tr className='flex justify-between'>
              <th className='text-xl font-bold bg-pink-300 w-[100px] text-center py-1 m-1'>Senin</th>
              <th className='text-xl font-bold  w-[100px] text-center py-1 m-1 bg-yellow-300'>Selasa</th>
              <th className='text-xl font-bold  w-[100px] text-center py-1 m-1 bg-red-300'>Rabu</th>
              <th className='text-xl font-bold  w-[100px] text-center py-1 m-1 bg-indigo-300'>Kamis</th>
              <th className='text-xl font-bold  w-[100px] text-center py-1 m-1 bg-teal-300'>Jumat</th>
              <th className='text-xl font-bold w-[100px] text-center py-1 m-1 bg-purple-300'>Sabtu</th>
              <th className='text-xl font-bold  w-[100px] text-center py-1 m-1 bg-blue-300'>Minggu</th>
            </tr>
          </thead>
          <tbody>
            {moodsByWeek.map((entry) => (
              <tr key={entry.id} className='flex'>
                <td className='bg-pink-200 w-[100px] text-center py-1 m-1 flex justify-center h-[60px]'>{entry.moods[1] ? <Image src={moodImages[entry.moods[1]]} alt="mood" width={50} height={50} /> : " "} {}</td>
                <td className='bg-yellow-200 w-[100px] text-center py-1 m-1 flex justify-center h-[60px]'>{entry.moods[2] ? <Image src={moodImages[entry.moods[2]]} alt="mood" width={50} height={50} /> : " "}</td>
                <td className='bg-red-200 w-[100px] text-center py-1 m-1 flex justify-center h-[60px]'>{entry.moods[3] ? <Image src={moodImages[entry.moods[3]]} alt="mood" width={50} height={50} /> : " "}</td> 
                <td className='bg-indigo-200 w-[100px] text-center py-1 m-1 flex justify-center h-[60px]'>{entry.moods[4] ? <Image src={moodImages[entry.moods[4]]} alt="mood" width={50} height={50} /> : " "}</td>
                <td className='bg-teal-200 w-[100px] text-center py-1 m-1 flex justify-center h-[60px]'>{entry.moods[5] ? <Image src={moodImages[entry.moods[5]]} alt="mood" width={50} height={50} /> : " "}</td>
                <td className='bg-purple-200 w-[100px] text-center py-1 m-1 flex justify-center h-[60px]'>{entry.moods[6] ? <Image src={moodImages[entry.moods[6]]} alt="mood" width={50} height={50} /> : " "}</td>
                <td className='bg-blue-200 w-[100px] text-center py-1 m-1 flex justify-center h-[60px]'>{entry.moods[0] ? <Image src={moodImages[entry.moods[0]]} alt="mood" width={50} height={50} /> : " "}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex'>
        <div className='ml-10 text-lg'>
          <h2 className='font-bold'>Total: </h2>
          <ul className='list-disc'>
            {moodCounter.map(moodCount => (
              <li key = {moodCount.id}>
                {expression[Number(moodCount.id)-1]}: {moodCount.count}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image
            src={Bubble}
            alt='image'
            width={500}
            className='flex ml-[380px]'
          />  
          <p className='absolute text-lg w-[400px] right-[250px] bottom-[170px] font-bold text-white'>Pada bulan {monthNames[currentMonth-1]}, Anda mengalami mood 
          yang fluktuatif. Namun, stabil karena Anda menuliskan perasaan Anda ”biasa saja” sebanyak 9 kali.</p>    
        </div>
        <Image
          src={Maskot}
          alt='image'
          width={250}
          className='absolute right-[50px] bottom-[10px]'
        />
      </div>
      
    </div>
  )
}
export default MoodAssessment
