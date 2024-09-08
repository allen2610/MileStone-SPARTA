
import { Mitr } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const mitr = Mitr({ subsets: ["latin"], weight: '400'});
export default function Meditation () {
  const topics = [
    {name: "Penerimaan Diri", source: "/meditation/penerimaan-diri.png", color: "#F8EECE", ref: "https://drive.google.com/file/d/1pQPe_FkQxUsm5ZPNael95U4ky5EHl9Qv/view?usp=drive_link"},
    {name: "Mengelola Emosi", source: "/meditation/mengelola-emosi.png", color: " #FDE4DF", ref: "https://drive.google.com/file/d/1lG63sUMIAENWcccuGixdR6wQrn0oV7m8/view?usp=drive_link"},
    {name: "Kendalikan Overthinking", source: "/meditation/kendalikan-overthinking.png", color: "#EFEAFC", ref: "https://drive.google.com/file/d/1PU0bLBIiIxqoJ9Zx91uVCN3NfXQF_4Fo/view?usp=drive_link"},
    {name: "Melatih Konsentrasi", source: "/meditation/melatih-konsentrasi.png", color: "#BAD5F0", ref: "https://drive.google.com/file/d/1Ol2Cxm3bEzGUv9Y5pgih1dntDTvi5pZg/view?usp=drive_link"},
    {name: "Menghadapi Ujian", source: "/meditation/menghadapi-ujian.png", color: "#C2D5A8", ref: "https://drive.google.com/file/d/1iYnK78KrILFpKhuma8OjgFCUAEufgeU5/view?usp=drive_link"},
    {name: "Penerimaan Diri", source: "/meditation/penerimaan-diri.png", color: "#F8EECE", ref: "https://drive.google.com/file/d/1pQPe_FkQxUsm5ZPNael95U4ky5EHl9Qv/view?usp=drive_link"} ]
  return (
    <div className={ mitr.className }>
    <h1 className='font-bold ml-10 text-4xl mb-5'> Pilihlah topik meditasi yang kamu sukai! </h1>
    <div className='grid grid-cols-2 text-xl'>
    {topics.map( (topic) => {
        return (
          <Link href={topic.ref} className='flex flex-col justify-between rounded-3xl m-5 p-2 items-center' style={{backgroundColor: topic.color}}>
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