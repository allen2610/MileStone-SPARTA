import { getSession } from '@/actions/actions';
import prisma from '@/lib/db';
import { redirect } from 'next/navigation'
import React from 'react'
import PaginationControls from '@/components/PaginationControls';
import { format } from 'date-fns'
import Link from 'next/link';

const JournalReview = async ({ searchParams }) => {
    const session = await getSession();
    if(!session){
        redirect("/")
    }
    const currentCount = parseInt(searchParams['page']) || '0';
    const entryPerPage = 14;
    const totalUserEntry = await prisma.journal.count({
        where: {
          userId: session.user.id
        },
      })

    const entries = await prisma.journal.findMany({
        where:{
            userId: session.user.id
        },
        skip: Number(currentCount)*entryPerPage,
        take: entryPerPage,
        orderBy:{
            createdAt: 'desc',
        }
    })

    return (
        <div className='w-full my-10 mx-20 items-center justify-center'>
            <>
            <div className='flex items-center text-center font-bold text-xl mb-3 bg-[#BAD5F0] p-3 rounded-xl text-black italic border-[1px] border-black'>
                <div className='ml-4 mr-7'>Date</div>
                <div className=''>Content</div>
            </div>
            <div className='bg-white/50 mb-5 rounded-xl px-5 py-3 border-[1px] border-black'>
                <ul>
                    {entries.map((entry) => (
                        <li key={entry.id}>
                            <Link href={`/journalling-page/review/${encodeURIComponent(entry.id)}`}>
                            <div className=' flex items-center'>
                                <div className='mr-3'>
                                    {format(new Date(entry.createdAt), 'dd-MM-yy')}
                                </div>
                                <div className='font-semibold text-lg'>
                                    {entry.content.slice(0, 120)}
                                </div>
                            </div>
                            </Link>
                        </li>
                        
                    ))}
                </ul>            
            </div>

                <PaginationControls
                    hasPrevPage = {currentCount > 0}
                    hasNextPage = {(currentCount+1)*entryPerPage < totalUserEntry}
                    className='flex justify-center items-center'
                />
            </>
        </div>

    )
}

export default JournalReview