import Image from "next/image";
import Logo from '@/public/logo1.svg'
import Link from "next/link";
import Hello from '@/public/hello.png'

export default function Home() {
  return (
    <div className='w-full w-max-[1440px] h-screen'>
      <div className="flex justify-end p-6">
        <Image src={Logo} alt="logo" width={200} className='absolute left-5 top-3'/>
        <Link href='/login'>
              <button className="bg-gray-100 p-2 px-4 rounded-xl">Login</button>
        </Link>
      </div>
      <div className="px-10 flex justify-around w-full bg-white bg-opacity-50">
        <div className="p-10 my-auto">
          <div className="pb-2 w-2/3 font-extrabold text-4xl">
            An Inner Echo is not just a reflection. It is a reminder of who you truly are
          </div>
          <Link href='/register'>
              <button className="bg-blue-200 p-2 px-4 rounded-xl">Mulai dulu --&gt; </button>
          </Link>
        </div>
        <Image src={Hello} alt='hello' width={450}/>
      </div>
    </div>
  );
}
