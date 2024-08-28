
import { Mitr } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

/* MOHON MAAP, FONT HEADERNYA GAADA DI GOOGLE FONT  */

const mitr = Mitr({ subsets: ["latin"], weight: '400'});
export default function Meditation () {
  const topics = [
    {name: "Penerimaan Diri", source: "/meditation/penerimaan-diri.png", color: "#F8EECE" },
    {name: "Mengelola Emosi", source: "/meditation/mengelola-emosi.png", color: " #FDE4DF"},
    {name: "Kendalikan Overthinking", source: "/meditation/kendalikan-overthinking.png", color: "#EFEAFC"},
    {name: "Melatih Konsentrasi", source: "/meditation/melatih-konsentrasi.png", color: "#BAD5F0"},
    {name: "Menghadapi Ujian", source: "/meditation/menghadapi-ujian.png", color: "#C2D5A8"},
    {name: "Penerimaan Diri", source: "/meditation/penerimaan-diri.png", color: "#C2D5A8"} ]
  return (
    <div className={ mitr.className }>
    {/* MOHON MAAP, FONT HEADERNYA GAADA DI GOOGLE FONT  */}
    <h1 className='font-bold ml-10 text-5xl'> Pilihlah topik meditasi yang kamu sukai! </h1>
    <div className='grid grid-cols-2 text-xl'>
    {topics.map( (topic) => {
        return (
          /**
           * TODO: Bikin link buat masing masing video sama benerin linknya
          */
          <Link href='/meditation-page' className='flex flex-col justify-between rounded-3xl m-5 p-2 items-center' style={{backgroundColor: topic.color}}>
            <Image
              src={ topic.source }
              alt={ topic.name }
              width={1000}
              height={1000}
              style={{width:'auto', height:'200px'}}
            />
            <p> { topic.name } </p>
          </Link>
        )
      })
    }
    </div>
  </div>
  )
}