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
  // console.log(startOfMonth, endOfMonth)
  const moods = await prisma.moods.findMany({
    where: {
      createdAt: {
        gte: startOfMonth,
        lt: endOfMonth,
      },
    },
  });

  return (
      <div>
          <ul>
              {moods.map((entry) => (
                  <li key={entry.id}>
                    {entry.createdAt.getDay()} {entry.mood}
                  </li>
              ))}
          </ul>
          <DropdownButton></DropdownButton>
      </div>
  )
}


export default MoodAssessment