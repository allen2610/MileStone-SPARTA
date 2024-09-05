"use server";
import { cookies } from "next/headers";
import prisma from "@/lib/db";
import { Truculenta } from "next/font/google";

export async function createUser(formData){
    try{
        await prisma.user.create({
            data: {
                email: formData.get("email"),
                password: formData.get("password"),
                name: formData.get("name"),
                dateOfBirth: new Date(formData.get("dateOfBirth")),
                gender: parseInt(formData.get("gender"))
            },
        })
    }catch(error){
        console.log(error)
    }
}

export async function inputMood(formData){
  try{
      const session = await getSession();
      await prisma.moods.create({
          data: {
              mood : parseInt(formData.get("option")),
              userId : session.user.id
          },
      })
  }catch(error){
      console.error(error)
  }
}

export async function checkDaily(user){
    try{
        const today = new Date();
        const latestMood = await prisma.moods.findMany({
            where:{
                userId: user.id,
                AND: [
                    { createdAt: { gte: new Date(today.setHours(0, 0, 0, 0))}},
                    { createdAt: { lte: new Date(today.setHours(23, 59, 59, 999))}}
                ]
            },
        })
        if(!latestMood.length){
            return [true, null];
        }
        else{
            return [false, latestMood];
        }
    }catch(err){
        console.error(err)
    }
}

export async function inputJournal(formData){
  try{
      const session = await getSession();
      await prisma.journal.create({
          data: {
              content : formData.get("journal"),
              userId : session.user.id
          },
      })
  }catch(error){
      console.log(error)
  }
}

export async function login(formData) {
    // Verify credentials && get the user
  
    const user = await prisma.user.findUnique({
        where:{
            email: formData.get("email")
        }
    });
  
    // Create the session
    const expires = new Date(Date.now() + 10 * 60 * 1000);
    const session = JSON.stringify({ user, expires });
  
    // Save the session in a cookie
    cookies().set("session", session, { expires, httpOnly: true });
  }
  
export async function logout() {
    // Destroy the session
    cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
    const session = cookies().get("session")?.value;
    if (!session) return null;
    return JSON.parse(session);
}