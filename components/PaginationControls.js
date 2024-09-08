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
    <div className='flex gap-2 text-center items-center justify-center font-semibold text-sm'>
      <button
        className='bg-[#F8F4EB] text-black py-1 px-3 rounded-full italic border-[1px] border-black'
        disabled={!hasPrevPage}
        onClick={() => {
            router.push(`/journalling-page/review?page=${Number(page) - 1}`)
        }}>
        Prev
      </button>

      <div>
        {Number(page)+1}
      </div>

      <button
        className='bg-[#F8F4EB] text-black py-1 px-3 rounded-full italic border-[1px] border-black'
        disabled={!hasNextPage}
        onClick={() => {
            router.push(`/journalling-page/review?page=${Number(page) + 1}`)  
        }}>
        Next
      </button>
    </div>
  )
}

export default PaginationControls