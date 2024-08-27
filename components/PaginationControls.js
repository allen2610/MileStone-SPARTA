'use client'

import { useRouter, useSearchParams} from 'next/navigation'

const PaginationControls = (
  {
    hasNextPage,
    hasPrevPage,
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '0'
  return (
    <div className='flex gap-2'>
      <button
        className='bg-blue-500 text-white p-1'
        disabled={!hasPrevPage}
        onClick={() => {
            router.push(`/Journalling/review?page=${Number(page) - 1}`)
        }}>
        prev page
      </button>

      <div>
        {Number(page)+1}
      </div>

      <button
        className='bg-blue-500 text-white p-1'
        disabled={!hasNextPage}
        onClick={() => {
            router.push(`/Journalling/review?page=${Number(page) + 1}`)  
        }}>
        next page
      </button>
    </div>
  )
}

export default PaginationControls