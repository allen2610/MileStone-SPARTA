import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mitr } from 'next/font/google';
import { getSession } from '@/actions/actions';
import { redirect } from 'next/navigation';

const mitrLight = Mitr({ subsets: ["latin"], weight: '200'});
const mitrNormal = Mitr({ subsets: ["latin"], weight: '400'});
const mitrBold = Mitr({ subsets: ["latin"], weight: '500'});

const page = async () => {
  const session = await getSession();
  if (!session){
      redirect("/");
  }
  const user = session.user;
  const dob = new Date(user.dateOfBirth);
  const formattedDate = dob.toLocaleDateString('en-GB')
  return (
    <div className='m-auto flex flex-col items-center'>
      <Image
        src={'/profile.svg'}
        width={300}
        height={300}
        alt='user profile picture'
      />
      <div className='grid grid-cols-2 text-2xl gap-x-10'>
        <div className={mitrBold.className}> Nama </div>
        <div className={mitrLight.className}> : {user.name} </div>
        <div className={mitrBold.className}> Tanggal Lahir </div>
        <div className={mitrLight.className}> : {formattedDate} </div>
        <div className={mitrBold.className}> Gender </div>
        <div className={mitrLight.className}> : {user.gender ? 'Laki-laki' : 'Perempuan'} </div>
        <div className={mitrBold.className}> Email </div>
        <div className={mitrLight.className}> : {user.email} </div>
        <div className={mitrBold.className}> Bio </div>
        <div className={mitrLight.className}> : {user.bio} </div>
      </div>
      <Link href='/' className={'rounded-full w-[11rem] p-3 mt-10 text-2xl text-center ' + mitrNormal.className} style={{backgroundColor: "#C8E7EC"}}> Kembali </Link>
    </div>
  );
}

export default page;
