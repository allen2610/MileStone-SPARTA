import { getSession } from '@/actions/actions';
import prisma from '@/lib/db';
import { useRouter } from 'next/router'
import React from 'react'

const JournalReview = async () => {
    const session = await getSession();
    const router = useRouter();
    const { query } = router;
    const currentCount = parseInt(query.page) || 0;
    const entryPerPage = 5;
    const totalUserEntry = await prisma.journal.count({
        where: {
          userId: session.user.id
        },
      })

    const entries = await prisma.journal.findMany({
        skip: currentCount*5,
        take: entryPerPage,
        orderBy:{
            createdAt: 'desc',
        }
    })

    const incrementCount = () => {
        const newCount = currentCount + 1;
        router.push({
            pathname: router.pathname,
            query: {page: newCount },
        });
    };

    const decrementCount = () => {
        const newCount = currentCount - 1;
        router.push({
            pathname: router.pathname,
            query: {page: newCount },
        });
    };
    const hasPrevPage = start > 0
    const hasNextPage = currentCount*5 < totalUserEntry;

    return (
        <div>
            <ul>
                {entries.map((entry) => (
                    <li key={entry.id}>{entry.content.slice(0, 20)}</li>
                ))}
            </ul>
            <button onClick={decrementCount} disabled={!hasPrevPage}>Decrement Count</button>
            <button onClick={incrementCount} disabled={!hasNextPage}>Increment Count</button>
        </div>
    )
}

export default JournalReview