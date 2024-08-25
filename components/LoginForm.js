"use client";

import { redirect } from "next/navigation";
import { getSession, login, logout } from "@/actions/actions";
import Image from "next/image";
import Email from '@/public/email.svg'
import Password from '@/public/password.svg'

const Login = () => {
  return (
    <form id="login" action={async (formData) => {
        await login(formData);
        redirect("/");
      }}
    >
      <div className="bg-[#D9D9D9] px-3 py-1 flex rounded-3xl m-2">
        <Image
          src={Email}
          width={30}
          alt="image"
        />
        <input type="email" name="email" placeholder="E-mail" required className="bg-transparent"/> <br />
      </div>
      <div className="bg-[#D9D9D9] px-3 py-1 flex rounded-3xl m-2">
        <Image
          src={Password}
          width={30}
          alt="image"
        />
        <input type="password" name="password" placeholder="Password" required className="bg-transparent"/> <br />
      </div>
      <div className="flex items-right m-1">
        <button type="submit" className="bg-red-100 rounded-2xl px-5 py-1 ml-[190px] font-semibold text-xs ">Log In</button>
      </div>
    </form>
  )
}

export default Login