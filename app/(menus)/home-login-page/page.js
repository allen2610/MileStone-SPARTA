import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PP from '@/public/profile.svg'
import Bahagia from '@/public/bahagia.svg'
import Senang from '@/public/senang.svg'
import Biasa from '@/public/biasa.svg'
import Sedih from '@/public/sedih.svg'
import Marah from '@/public/marah.svg'
import Bubble from '@/public/text-bubble.svg'

const page = () => {
  return (
    <div className="bg-white/50 opacity- w-full rounded-xl m-3 p-[60px]">
      <Link href="/profile" className=' w-screen '>
        <Image 
        src={PP}
        alt="Image"
        width={50}
        className='absolute right-[60px] top-10'
        />
      </Link>
      <h1 className='text-5xl font-extrabold mb-[40px]'>Hai, Andi!</h1>
      <p className='text-xl font-bold'>Bagaimana perasaanmu hari ini?</p>
      <div className='m-5 px-10 flex justify-between flex-wrap'>
        <button className='bg-pink-200 rounded-3xl px-6 mx-2 pb-2 mb-3 text-xl shadow-md'>
          <Image
            src={Marah}
            width={90}
            alt ="image"
          />
          <p>Marah</p>
        </button>
        <button className='bg-yellow-200 rounded-3xl px-6 mx-2 pb-2 mb-3 text-xl shadow-md'>
          <Image
            src={Sedih}
            width={90}
            alt ="image"
          />
          <p>Sedih</p>
        </button>
        <button className='bg-orange-200 rounded-3xl px-6 mx-2 pb-2 mb-3 text-xl  shadow-md'>
          <Image
            src={Biasa}
            width={90}
            alt ="image"
          />
          <p>Biasa Saja</p>
        </button>
        <button className='bg-green-200 rounded-3xl px-6 mx-2 pb-2 mb-3 text-xl shadow-md'>
          <Image
            src={Senang}
            width={90}
            alt ="image"
          />
          <p>Senang</p>
        </button>
        <button className='bg-purple-200 rounded-3xl px-6 mx-2 pb-2 mb-3 text-xl shadow-md'>
          <Image
            src={Bahagia}
            width={90}
            alt ="image"
          />
          <p>Bahagia</p>
        </button>
      </div>
      <div className='mt-5'>
        <div className='flex justify-center w-full md:absolute md:right-[150px] md:top-[350px]'>
          <Image
            src={Bubble}
            alt="Image"
            width={300}
            className='flex items-center'
          />
          <div className='text-3xl md:absolute md:top-[30px] text-white font-semibold'>Daily Motivation</div>
        </div>
        <div className='flex flex-col justify-center items-center bg-[#7A3B2E] md:ml-[250px] md:w-[700px] text-white rounded-xl'>
          <div className='bg-[#7A3B2E] h-[300px]'> </div>
          <div className='bg-white w-full h-[2px]'></div>
          <div className='bg-[#7A3B2E] mt-1 text-lg p-2'>Noted!</div>
        </div>
      </div>
    </div>
  )
}

export default page
