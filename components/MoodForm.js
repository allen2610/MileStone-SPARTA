"use client";
import { redirect } from "next/navigation";
import { checkDaily, inputMood } from "@/actions/actions"
import Bahagia from '@/public/bahagia.svg'
import Senang from '@/public/senang.svg'
import Biasa from '@/public/biasa.svg'
import Sedih from '@/public/sedih.svg'
import Marah from '@/public/marah.svg'
import Image from "next/image";

const MoodForm = (
    {avail, mood}
) => {
    if(avail){
        return (
            <>
                <p className='text-xl font-bold'>Bagaimana perasaanmu hari ini?</p>
                <form id="moodform"  action={async (formData) => {
                    await inputMood(formData);
                    redirect("/home-login-page");
                }}
                >
                    <div className='m-5 px-10 flex justify-between flex-wrap'>
                        <label className='bg-pink-200 rounded-3xl px-6 mx-2 pb-2 mb-3 text-xl shadow-md'>
                            <input type="radio" name="option" value="1" />
                            <Image
                                src={Marah}
                                width={90}
                                alt ="image"
                            />
                            <p>Marah</p>
                        </label>
                        <label className='bg-yellow-200 rounded-3xl px-6 mx-2 pb-2 mb-3 text-xl shadow-md'>
                            <input type="radio" name="option" value="2" />
                            <Image
                                src={Sedih}
                                width={90}
                                alt ="image"
                                />
                            <p>Sedih</p>
                        </label>
                        <label className='bg-orange-200 rounded-3xl px-6 mx-2 pb-2 mb-3 text-xl  shadow-md'>
                            <input type="radio" name="option" value="3" />
                            <Image
                                src={Biasa}
                                width={90}
                                alt ="image"
                                />
                                <p>Biasa Saja</p>
                        </label>
                        <label className='bg-green-200 rounded-3xl px-6 mx-2 pb-2 mb-3 text-xl shadow-md'>
                            <input type="radio" name="option" value="4" />
                            <Image
                                src={Senang}
                                width={90}
                                alt ="image"
                            />
                            <p>Senang</p>
                        </label>
                        <label className='bg-purple-200 rounded-3xl px-6 mx-2 pb-2 mb-3 text-xl shadow-md'>
                            <input type="radio" name="option" value="5" />
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
    else{
        let img, moodText;
        if(mood == 1){
            img = Marah
            moodText = 'Marah';
        }
        else if(mood == 2){
            img = Sedih
            moodText = 'Sedih';
        }
        else if(mood == 3){
            img = Biasa
            moodText = 'Biasa';
        }
        else if(mood == 4){
            img = Senang
            moodText = 'Senang';
        }
        else{
            img = Bahagia
            moodText = 'Bahagia';
        }

        return (
            <>
                <p className='text-xl font-bold'>Hari ini, kamu merasa:</p>
                <Image 
                    src={img}
                    width={90}
                    alt ="image"
                />
                <p>{moodText}</p>
            </>
        )
    }
  
}

export default MoodForm