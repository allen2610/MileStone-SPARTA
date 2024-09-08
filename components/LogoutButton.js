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
    }} className={'rounded-full px-5 py-2 mt-3 text-lg border-[1px] border-black text-center ' + mitrNormal.className} style={{backgroundColor: "#FCE3DF"}}> Logout </button>
  )
}

export default LogoutButton