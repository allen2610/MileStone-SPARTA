import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mitr } from 'next/font/google';

const mitrLight = Mitr({ subsets: ["latin"], weight: '200'});
const mitrNormal = Mitr({ subsets: ["latin"], weight: '400'});
const mitrBold = Mitr({ subsets: ["latin"], weight: '700'});

function formatDate(date) {
  const nameIndo = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  const str = `${date.getDate()} ` + nameIndo[date.getMonth()] + ` ${date.getFullYear()}` 
  return str;
}
const page = () => {
  const User = {
    id          : '0',
    email       : 'JaneDoe@example.com',
    password    : '',
    bio         : '',
    name        : 'Jane Doe',
    dateOfBirth : new Date(0),
    gender      : 'Laki-laki',
    profilePic  : 'profile.svg'
  }
  console.log(mitrBold.className);
  return (
    <div className='m-auto flex flex-col items-center'>
      <Image
        src={User.profilePic}
        width={300}
        height={300}
        alt='user profile picture'
      />
      <div className='grid grid-cols-2 text-2xl'>
        <div className={mitrBold.className}> Nama </div>
        <div className={mitrLight.className}> : {User.name} </div>
        <div className={mitrBold.className}> Tanggal Lahir </div>
        <div className={mitrLight.className}> : {formatDate(User.dateOfBirth)} </div>
        <div className={mitrBold.className}> Jenis Kelamin </div>
        <div className={mitrLight.className}> : {User.gender} </div>
        <div className={mitrBold.className}> Email </div>
        <div className={mitrLight.className}> : {User.email} </div>
      </div>
      <Link href='/' className={'rounded-full w-[11rem] p-3 mt-10 text-2xl text-center ' + mitrNormal.className} style={{backgroundColor: "#C8E7EC"}}> Kembali </Link>
    </div>
  );
}

export default page;
