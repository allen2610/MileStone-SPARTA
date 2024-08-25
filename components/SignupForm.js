"use client";
import React from "react";
import { redirect } from "next/navigation";
import { createUser } from "@/actions/actions";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-4">
        <form
          className="flex flex-col bg-white rounded-md p-8 shadow-lg w-full"
          id="signup"
          action={async (formData) => {
            await createUser(formData);
            redirect("/");
          }}
        > 
          <p className="font-bold text-center mb-[0.5vw]">Create Your Account!</p>
          <label className="block mb-2">Nama</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="mb-4 p-2 border rounded"
          />
          <label className="block mb-2">Tanggal Lahir</label>
          <input
            type="date"
            name="dateOfBirth"
            required
            className="mb-4 p-2 border rounded"
          />
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            className="mb-4 p-2 border rounded"
          />
          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="mb-4 p-2 border rounded"
          />
          <div className="flex flex-row mb-4 justify-between
          ">
            <div className="bg-[#FEE7F4] hover:bg-[#ff9ad5] p-[1vw] rounded-md">
              <input
                type="radio"
                id="female"
                name="gender"
                value="0"
                required
                className="mr-2"
              />
              <label htmlFor="female">Female</label>
            </div>
            <div className="bg-[#CDFAF7] hover:bg-[#76fff6] p-[1vw] rounded-md">
              <input
                type="radio"
                id="male"
                name="gender"
                value="1"
                required
                className="mr-2"
              />
              <label htmlFor="male" className="mr-4">Male</label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#BAFFD4] p-2 rounded hover:bg-[#87ffb5]"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
