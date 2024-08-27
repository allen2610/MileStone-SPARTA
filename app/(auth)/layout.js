import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image';
import Background from "@/public/loginbg.svg"

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
        <div className="relative ">
          <div className="w-full h-full flex justify-between">
            <Image
              src={Background}
              className="absolute top-0 left-0 w-full h-full -z-10 object-cover"
              alt="background"/>
            {children}
          </div>
        </div>
  )
}
