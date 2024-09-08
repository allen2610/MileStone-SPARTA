"use server";
import { cookies } from "next/headers";
import prisma from "@/lib/db";
import { Truculenta } from "next/font/google";
import { revalidatePath } from "next/cache";

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

export async function getMotivation(user){
    try{
        const today = new Date().setHours(0, 0, 0, 0);
        if(!user.motivTime){
            const quote = await prisma.dailyMotivation.findRandom();
            await prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    motivTime: new Date(today),
                    motiv: quote.quote
                },
            })
            user.motivTime = new Date(today);
            user.motiv = quote.quote;
        }
        else{
            if(user.motivTime < today){    
                const quote = await prisma.dailyMotivation.findRandom();
                await prisma.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        motivTime: new Date(today),
                        motiv: quote.quote
                    },
                })
                user.motivTime = new Date(today);
                user.motiv = quote.quote;
            }
        }
    }catch(err){
        console.error(err);
    }
}

export async function inputMood(formData, moodId){
  try{
      const session = await getSession();
      if(!moodId){
        await prisma.moods.create({
            data: {
                mood : parseInt(formData.get("option")),
                userId : session.user.id
            },
        })
      }
      else{
        await prisma.moods.update({
            where: {
                id: moodId,
            },
            data: {
                mood: parseInt(formData.get("option")),
            },
        })
      }
      revalidatePath("/home-login-page");
  }catch(error){
      console.error(error)
  }
}

export async function checkDailyMood(user){
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
            return [null, null];
        }
        else{
            return [latestMood[0].id, latestMood[0].mood];
        }
    }catch(err){
        console.error(err)
    }
}

export async function checkDailyJournal(user){
    try{
        const today = new Date();
        const latestJournal = await prisma.journal.findMany({
            where:{
                userId: user.id,
                AND: [
                    { createdAt: { gte: new Date(today.setHours(0, 0, 0, 0))}},
                    { createdAt: { lte: new Date(today.setHours(23, 59, 59, 999))}}
                ]
            },
        })
        if(!latestJournal.length){
            return [null, null];
        }
        else{
            return [latestJournal[0].id, latestJournal[0].content];
        }
    }catch(err){
        console.error(err)
    }
}

export async function inputJournal(formData, journalId){
  try{
    const session = await getSession();
    if(!journalId){
        await prisma.journal.create({
            data: {
                content : formData.get("journal"),
                userId : session.user.id
            },
        })
    }
    else{
        await prisma.journal.update({
            where: {
                id: journalId,
            },
            data: {
                content: formData.get("journal")
            },
        })
    }
    revalidatePath("/journalling-page");
    }catch(error){
        console.log(error)
    }
}

export async function login(formData) {
    // Verify credentials && get the user
    try{
        const user = await prisma.user.findUnique({
            where:{
                email: formData.get("email")
            }
        });
        if (!user || user.password !== formData.get("password")) {
            throw new Error("Invalid email or password");
        }
        // Create the session
        const expires = new Date(Date.now() + 10 * 60 * 1000);
        const session = JSON.stringify({ user, expires });
        cookies().set("session", session, { expires, httpOnly: true });
    }catch(err){
        console.error(err);
    }
    // Save the session in a cookie
    
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