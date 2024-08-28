import Image from "next/image";
import Logo from "@/public/logo1.svg"
import PP from "@/public/profile.svg"
import image1 from "@/public/Control your mind (3) 1.svg"
import image2 from "@/public/Control your mind (3) 2.svg"
import image3 from "@/public/Control your mind (4) 1.svg"
import person1 from "@/public/image-removebg-preview (43) 1.svg"
import Link from "next/link";


export default function Home() {
  return (
    <main className="">
      <div className="h-1/6 flex bg-transparent justify-between">
        <div className="items-center">
          <Image
          src={Logo}
          alt="logo"
          width={200}
          className="m-4 "
          />
        </div>

        <div className="items-center">
        <Link href={"/login"} className='w-screen text-bold'>
          <div className="m-8 border-2 rounded-lg bg-[#F8F4EB] font-semibold py-2 px-8">
              Login          
          </div>
        </Link>
        </div>
      </div>

      <div className="relative h-2/5 w-screen m-0 flex justify-around">
        <div className="absolute bg-white/50 opacity-35 inset-0 -z-10"></div> {/*for transparent backgorund*/}

        <div className="items-center py-20">
          <div className="relative justify-center font-bold text-black font-serif text-2xl">
            An inner echo is not just a reflection,
          </div>

          <div className="relative justify-center font-bold text-black font-serif text-3xl">
            it is a reminder of who you truly are
          </div>

          <div className="items-center inline-flex">
            <div className="m-8 border-2 rounded-lg bg-[#BAD5F0] font-semibold text-black py-2 px-8">
              <Link href="/register" className='w-screen'>
                Mulai disini
              </Link>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
        <Image
        src={person1}
        alt="person 1"
        width={350}
        className="z-10"
        />
        </div>

      </div>

      <div className="flex h-2/5 justify-around">
        <div>
        <Image
        src={image1}
        alt="image 1"
        width={250}
        className=""
        />
        </div>

        <div>
        <Image
        src={image2}
        alt="image2"
        width={250}
        className=""
        />
        </div>

        <div>
        <Image
        src={image3}
        alt="image3"
        width={250}
        className=""
        />
        </div>

      </div> 
    </main>
  );
}
