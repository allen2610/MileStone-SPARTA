'use client'

import { logout } from '@/actions/actions';
import { redirect } from 'next/navigation';
import { Mitr } from 'next/font/google';

const mitrLight = Mitr({ subsets: ["latin"], weight: '200'});
const mitrNormal = Mitr({ subsets: ["latin"], weight: '400'});
const mitrBold = Mitr({ subsets: ["latin"], weight: '500'});

const LogoutButton = () => {
  return (
    <button onClick={() => {
        logout();
        redirect('/')
    }} className={'rounded-full w-[11rem] p-3 mt-10 text-2xl text-center ' + mitrNormal.className} style={{backgroundColor: "#C8E7EC"}}> Logout </button>
  )
}

export default LogoutButton