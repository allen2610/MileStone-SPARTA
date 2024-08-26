import React from 'react'
import prisma from '@/lib/db';
import { getSession } from '@/actions/actions';
import { redirect } from 'next/navigation';
import DropdownButton from '@/components/DropdownButton';

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
  let weeklyMood = [null, null, null, null, null, null, null];
  moods.forEach((mood, index, array) => {
    const date = new Date(mood.createdAt);
    const weekday = date.getDay();
    weeklyMood[weekday] = mood.mood;
    moodCounter[mood.mood-1].count+=1;
    console.log(moodCounter)
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
  return (
      <div className="bg-white/50 w-full h-full rounded-xl m-3 p-[60px] flex justify-around">
        <table>
          <thead>
            <tr className='flex justify-between'>
              <th>Senin</th>
              <th>Selasa</th>
              <th>Rabu</th>
              <th>Kamis</th>
              <th>Jumat</th>
              <th>Sabtu</th>
              <th>Minggu</th>
            </tr>
          </thead>
          <tbody>
            {moodsByWeek.map((entry) => (
              <tr key={entry.id} className='flex'>
                <td className='bg-pink-200 w-[100px] text-center py-1 m-1 flex justify-center h-[60px]'>{entry.moods[1] ? entry.moods[1] : " "}</td>
                <td className='bg-pink-200 w-[100px] text-center py-1 m-1 flex justify-center h-[60px]'>{entry.moods[2] ? entry.moods[2] : " "}</td>
                <td className='bg-pink-200 w-[100px] text-center py-1 m-1 flex justify-center h-[60px]'>{entry.moods[3] ? entry.moods[3] : " "}</td> 
                <td className='bg-pink-200 w-[100px] text-center py-1 m-1 flex justify-center h-[60px]'>{entry.moods[4] ? entry.moods[4] : " "}</td>
                <td className='bg-pink-200 w-[100px] text-center py-1 m-1 flex justify-center h-[60px]'>{entry.moods[5] ? entry.moods[5] : " "}</td>
                <td className='bg-pink-200 w-[100px] text-center py-1 m-1 flex justify-center h-[60px]'>{entry.moods[6] ? entry.moods[6] : " "}</td>
                <td className='bg-pink-200 w-[100px] text-center py-1 m-1 flex justify-center h-[60px]'>{entry.moods[0] ? entry.moods[0] : " "}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <DropdownButton></DropdownButton>
        <ul>
          {moodCounter.map(moodCount => (
            <li key = {moodCount.id}>
              {expression[Number(moodCount.id)-1]}: {moodCount.count}
            </li>
          ))}
        </ul>
      </div>
  )
}


export default MoodAssessment
