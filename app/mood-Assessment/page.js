import React from 'react'
import Image from 'next/image'
import PP from '@/public/profile.svg'
import Link from 'next/link'
import Bahagia from '@/public/bahagia.svg'
import Senang from '@/public/senang.svg'
import Biasa from '@/public/biasa.svg'
import Sedih from '@/public/sedih.svg'
import Marah from '@/public/marah.svg'
import Bubble from '@/public/bubble2.svg'
import Maskot from '@/public/maskot.svg'

const page = () => {
  return (
    <div className="bg-white opacity- w-full h-full rounded-xl m-3 p-[60px]">
      <Link href="/profile" className=' w-screen '>
        <Image 
        src={PP}
        alt="Image"
        width={50}
        className='absolute right-[60px] top-10'
        />
        <h1 className='text-5xl font-extrabold '>Mood Echoers selama sebulan</h1>
      </Link>
      <button className='bg-[#D2EBF0] rounded-3xl px-5 py-1 absolute right-20 '>▼ Juli 2024 </button>
      <div className='flex items-start justify-center mt-10'>
        <div>
          <p className='text-xl font-bold bg-pink-300 w-[100px] text-center py-1 m-1'>Senin</p>
          <div className='bg-pink-200 w-[100px] h-[60px] text-center py-1 m-1 flex justify-center'>
            <Image
              src={Senang}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-pink-200 w-[100px] text-center h-[60px] py-1 m-1 flex justify-center'>
            <Image
              src={Bahagia}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-pink-200 w-[100px] text-center py-1 m-1 flex justify-center h-[60px]'>
            <Image
              src={Marah}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-pink-200 w-[100px] text-center py-1 m-1 h-[60px] flex justify-center'>
            <Image
              src={Biasa}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-pink-200 w-[100px] text-center py-1 m-1 h-[60px] flex justify-center'>
            <Image
              src={Sedih}
              alt="mood"
              width={50}
            />
          </div>
        </div>
        <div>
          <p className='text-xl font-bold bg-yellow-300 w-[100px] text-center py-1 m-1'>Selasa</p>
          <div className='bg-yellow-200 w-[100px] text-center py-1 m-1 h-[60px] flex justify-center'>
            <Image
              src={Marah}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-yellow-200 w-[100px] text-center py-1 m-1 h-[60px] flex justify-center'>
            <Image
              src={Bahagia}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-yellow-200 w-[100px] text-center py-1 m-1 h-[60px] flex justify-center'>
            <Image
              src={Senang}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-yellow-200 w-[100px] text-center py-1 m-1 flex h-[60px] justify-center'>
            <Image
              src={Biasa}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-yellow-200 w-[100px] text-center py-1 m-1 h-[60px] flex justify-center'>
            <Image
              src={Bahagia}
              alt="mood"
              width={50}
            />
          </div>
        </div>
        <div>
          <p className='text-xl font-bold bg-red-300 w-[100px] text-center py-1 m-1'>Rabu</p>
          <div className='bg-red-200 w-[100px] text-center py-1 h-[60px] m-1 flex justify-center'>
            <Image
              src={Biasa}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-red-200 w-[100px] text-center h-[60px] py-1 m-1 flex justify-center'>
            <Image
              src={Senang}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-red-200 w-[100px] text-center py-1 h-[60px] m-1 flex justify-center'>
            <Image
              src={Sedih}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-red-200 w-[100px] text-center py-1 m-1 h-[60px] flex justify-center'>
            <Image
              src={Senang}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-red-200 w-[100px] text-center py-1 m-1 h-[60px] flex justify-center'>
            <Image
              src={Marah}
              alt="mood"
              width={50}
            />
          </div>
        </div>
        <div>
          <p className='text-xl font-bold bg-indigo-300 w-[100px] text-center py-1 m-1'>Kamis</p>
          <div className='bg-indigo-200 w-[100px] text-center py-1 m-1 h-[60px] flex justify-center'>
            <Image
              src={Senang}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-indigo-200 w-[100px] text-center py-1 m-1 h-[60px] flex justify-center'>
            <Image
              src={Sedih}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-indigo-200 w-[100px] text-center py-1 m-1 h-[60px] flex justify-center'>
            <Image
              src={Biasa}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-indigo-200 w-[100px] text-center py-1 m-1 h-[60px] flex justify-center'>
            <Image
              src={Bahagia}
              alt="mood"
              width={50}
            />
          </div>
        </div>
        <div>
          <p className='text-xl font-bold bg-teal-300 w-[100px] text-center py-1 m-1'>Jumat</p>
          <div className='bg-teal-200 w-[100px] text-center py-1 m-1 h-[60px] flex justify-center'>
            <Image
              src={Bahagia}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-teal-200 w-[100px] text-center py-1 m-1 h-[60px] flex justify-center'>
            <Image
              src={Senang}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-teal-200 w-[100px] text-center py-1 m-1 h-[60px] flex justify-center'>
            <Image
              src={Senang}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-teal-200 w-[100px] text-center py-1 m-1 flex  h-[60px] justify-center'>
            <Image
              src={Marah}
              alt="mood"
              width={50}
            />
          </div>
        </div>
        <div>
          <p className='text-xl font-bold bg-purple-300 w-[100px] text-center py-1 m-1'>Sabtu</p>
          <div className='bg-purple-200 w-[100px] text-center h-[60px] py-1 m-1 flex justify-center'>
            <Image
              src={Biasa}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-purple-200 w-[100px] text-center h-[60px] py-1 m-1 flex justify-center'>
            <Image
              src={Senang}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-purple-200 w-[100px] text-center h-[60px] py-1 m-1 flex justify-center'>
            <Image
              src={Bahagia}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-purple-200 w-[100px] text-center h-[60px] py-1 m-1 flex justify-center'>
            <Image
              src={Biasa}
              alt="mood"
              width={50}
            />
          </div>
        </div>
        <div>
          <p className='text-xl font-bold bg-blue-300 w-[100px] text-center py-1 m-1'>Minggu</p>
          <div className='bg-blue-200 w-[100px] text-center h-[60px] py-1 m-1 flex justify-center'>
            <Image
              src={Biasa}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-blue-200 w-[100px] text-center h-[60px] py-1 m-1 flex justify-center'>
            <Image
              src={Biasa}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-blue-200 w-[100px] text-center h-[60px] py-1 m-1 flex justify-center'>
            <Image
              src={Sedih}
              alt="mood"
              width={50}
            />
          </div>
          <div className='bg-blue-200 w-[100px] text-center h-[60px] py-1 m-1 flex justify-center'>
            <Image
              src={Senang}
              alt="mood"
              width={50}
            />
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className='ml-10 text-lg'>
          <h2 className='font-bold'>Total: </h2>
          <p>- Marah = 4 kali</p>
          <p>- Sedih = 4 kali</p>
          <p>- Biasa saja = 9 kali</p>
          <p>- Senang = 8 kali</p>
          <p>- Bahagia = 6 kali</p>
        </div>
        <div>
          <Image
            src={Bubble}
            alt='image'
            width={500}
            className='flex ml-[380px]'
          />  
          <p className='absolute text-xl w-[400px] right-[190px] bottom-[170px] font-bold text-white'>Pada bulan Juli, Anda mengalami mood 
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

export default page
