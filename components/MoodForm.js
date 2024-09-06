"use client";
import { redirect } from "next/navigation";
import { useState } from 'react';
import { inputMood } from "@/actions/actions"
import Bahagia from '@/public/bahagia.svg'
import Senang from '@/public/senang.svg'
import Biasa from '@/public/biasa.svg'
import Sedih from '@/public/sedih.svg'
import Marah from '@/public/marah.svg'
import Image from "next/image";

const MoodForm = (
    {moodId, mood}
) => {
    const [selectedMood, setSelectedMood] = useState(mood);
    const handleChange = (e) => {
        setSelectedMood(parseInt(e.target.value)); // Update selectedMood state when an option is selected
    };
    return (
        <>
            <p className='text-xl font-bold'>Bagaimana perasaanmu hari ini?</p>
            <form id="moodform"  action={async (formData) => {
                await inputMood(formData, moodId);
                redirect("/home-login-page");
            }}
            >
                <div className='m-5 px-10 flex justify-between flex-wrap'>
                    <label className='bg-pink-200 rounded-3xl px-6 mx-2 pb-2 mb-3 text-xl shadow-md'>
                        <input type="radio" name="option" value="1" checked={selectedMood === 1} onChange={handleChange} />
                        <Image
                            src={Marah}
                            width={90}
                            alt ="image"
                        />
                        <p>Marah</p>
                    </label>
                    <label className='bg-yellow-200 rounded-3xl px-6 mx-2 pb-2 mb-3 text-xl shadow-md'>
                        <input type="radio" name="option" value="2" checked={selectedMood === 2} onChange={handleChange} />
                        <Image
                            src={Sedih}
                            width={90}
                            alt ="image"
                            />
                        <p>Sedih</p>
                    </label>
                    <label className='bg-orange-200 rounded-3xl px-6 mx-2 pb-2 mb-3 text-xl  shadow-md'>
                        <input type="radio" name="option" value="3" checked={selectedMood === 3} onChange={handleChange} />
                        <Image
                            src={Biasa}
                            width={90}
                            alt ="image"
                            />
                            <p>Biasa Saja</p>
                    </label>
                    <label className='bg-green-200 rounded-3xl px-6 mx-2 pb-2 mb-3 text-xl shadow-md'>
                        <input type="radio" name="option" value="4" checked={selectedMood === 4} onChange={handleChange} />
                        <Image
                            src={Senang}
                            width={90}
                            alt ="image"
                        />
                        <p>Senang</p>
                    </label>
                    <label className='bg-purple-200 rounded-3xl px-6 mx-2 pb-2 mb-3 text-xl shadow-md'>
                        <input type="radio" name="option" value="5" checked={selectedMood === 5} onChange={handleChange} />
                        <Image
                            src={Bahagia}
                            width={90}
                            alt ="image"
                        />
                        <p>Bahagia</p>
                    </label>
                </div>
                <button type="submit" className="bg-blue-100 py-2 mx-auto w-full">Submit</button>
            </form>
        </>
    )
}

export default MoodForm