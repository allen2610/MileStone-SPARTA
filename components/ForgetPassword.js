"use client";
import React from "react";
import { redirect } from "next/navigation";
import { updatePassword } from "@/actions/actions";

const ForgetPassword = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[800px] max-w-md p-4">
        <form
          className="flex flex-col bg-white rounded-3xl p-8 shadow-lg w-full"
          id="signup"
          action={async (formData) => {
            await updatePassword(formData);
            redirect("/");
          }}
        > 
          <p className="font-bold text-xl text-center mb-[0.5vw]">Forget Password</p>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            className="mb-4 p-2 border rounded"
          />
          <label className="block mb-2">Nama</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="mb-4 p-2 border rounded"
          />
          <label className="block mb-2">New Password</label>
          <input
            type="password"
            name="password"
            placeholder="New Password"
            required
            className="mb-4 p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-[#BAFFD4] p-2 rounded hover:bg-[#87ffb5]"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
