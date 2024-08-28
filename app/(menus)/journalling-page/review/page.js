import { getSession } from '@/actions/actions';
import prisma from '@/lib/db';
import { redirect } from 'next/navigation'
import React from 'react'
import PaginationControls from '@/components/PaginationControls';
import { format } from 'date-fns'

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
        skip: Number(currentCount)*entryPerPage,
        take: entryPerPage,
        orderBy:{
            createdAt: 'desc',
        }
    })

    return (
        <div>
            <ul>
                {entries.map((entry) => (
                    <li key={entry.id}>
                        {format(new Date(entry.createdAt), 'dd-MM-yy') }
                        {entry.content.slice(0, 20)}
                    </li>
                ))}
            </ul>
            <PaginationControls
                hasPrevPage = {currentCount > 0}
                hasNextPage = {(currentCount+1)*entryPerPage < totalUserEntry}
            />
        </div>
    )
}

export default JournalReview