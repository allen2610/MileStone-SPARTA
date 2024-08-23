"use client";
import { redirect } from "next/navigation";
import { createUser } from "@/actions/actions"

const Signup = () => {
  return (
    <form id="signup" action={async (formData) => {
        await createUser(formData);
        redirect("/");
      }}
    >
        <input type="email" name="email" placeholder="E-mail" required /> <br />
        <input type="password" name="password" placeholder="Password" required /> <br />
        <input type="text" name="name" placeholder="Name" required /> <br />
        <label> Date of Birth </label> <br />
        <input type="date" name="dateOfBirth" required /> <br />
        <input type="radio" id="html" name="gender" value="1" required />
        <label >Male</label><br />
        <input type="radio" id="css" name="gender" value="0" required />
        <label >Female</label><br />
        <button type="submit" className="bg-blue-100">Sign Up</button>
    </form>
  )
}

export default Signup