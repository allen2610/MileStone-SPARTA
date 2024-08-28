import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from '@/components/Navbar'
import Image from "next/image";
import Background from "@/public/background.svg"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InnerEcho",
  description: "A self-tracking mood assessment website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative ">
          <div className="w-full h-full flex justify-between">
            <Image
              src={Background}
              className="absolute top-0 left-0 w-full h-full -z-20 object-cover"
              alt="background"/>
            <Navbar/> 
           {children}
          </div>
        </div>
      </body>
    </html>
  );
}
