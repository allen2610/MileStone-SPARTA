import React from 'react'
import Image from 'next/image'
import Logo from '@/public/Logo.svg'
import Home from '@/public/home.svg'
import Mood from '@/public/mood.svg'
import Meditation from '@/public/meditation.svg'
import Journal from '@/public/journal.svg'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-screen py-6 px-2 bg-transparent'>
      <Image
        src={Logo}
        width={200}
        alt="Image"
      />
      <Link href="/" className='flex items-center p-2'>
        <Image
          src={Home}
          alt="Image"
          width={50}
        />
        <div className='p-3 font-bold text-xl'> Home </div>
      </Link>
      <Link href="/Meditation" className='flex items-center p-2'>
        <Image
          src={Meditation}
          alt="Image"
          width={50}
        />
        <div className='p-3 font-bold text-xl'>  Meditation </div>
      </Link>
      <Link href="/Journalling" className='flex items-center p-2'>
        <Image
          src={Journal}
          alt="Image"
          width={40}
        />
        <div className='p-3 font-bold text-xl'> Journalling </div>
      </Link>
      <Link href="/mood-Assessment" className='flex items-center p-2'>
        <Image
          src={Mood}
          alt="Image"
          width={50}
        />
        <div className='p-3 font-bold text-xl'> Mood Tracker </div>
      </Link>
    </div>
  )
}

export default Navbar
