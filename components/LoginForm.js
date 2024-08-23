"use client";

import { redirect } from "next/navigation";
import { getSession, login, logout } from "@/actions/actions";

const Login = () => {
  return (
    <form id="login" action={async (formData) => {
        await login(formData);
        redirect("/");
      }}
    >
        <input type="email" name="email" placeholder="E-mail" required /> <br />
        <input type="password" name="password" placeholder="Password" required /> <br />
        <button type="submit" className="bg-blue-100">Log In</button>
    </form>
  )
}

export default Login