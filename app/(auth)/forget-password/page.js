import React from "react"
import ForgetPassword from "@/components/ForgetPassword.js"
import Image from "next/image"
import Logo from '@/public/logo1.svg'

const page = () => {
  return (
    <div>
      <Image src={Logo} alt="logo" width={200} className='absolute left-5 top-3'/>
    <section className = "w-screen h-screen flex flex-row items-center justify-center align-middle">
      <ForgetPassword/>
    </section>
    </div>
  )
}

export default page
