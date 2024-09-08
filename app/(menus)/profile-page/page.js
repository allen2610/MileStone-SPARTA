import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mitr } from 'next/font/google';
import { getSession } from '@/actions/actions';
import { redirect } from 'next/navigation';
import LogoutButton from '@/components/LogoutButton';

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
      <div className='grid grid-cols-2 text-lg gap-x-10'>
        <div className={mitrBold.className}> Nama </div>
        <div className={mitrLight.className}> : {user.name} </div>
        <div className={mitrBold.className}> Tanggal Lahir </div>
        <div className={mitrLight.className}> : {formattedDate} </div>
        <div className={mitrBold.className}> Gender </div>
        <div className={mitrLight.className}> : {user.gender ? 'Laki-laki' : 'Perempuan'} </div>
        <div className={mitrBold.className}> Email </div>
        <div className={mitrLight.className}> : {user.email} </div>
      </div>
      <Link href='/home-login-page' className={'rounded-full px-5 py-2 border-[1px] border-black mt-10 text-lg text-center ' + mitrNormal.className} style={{backgroundColor: "#C8E7EC"}}> Kembali </Link>
      <LogoutButton />
    </div>
  );
}

export default page;
