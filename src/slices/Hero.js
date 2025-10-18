import Image from "next/image";

import { PiChatsFill, PiMapPinFill, PiPhoneFill } from "react-icons/pi";

import  { motion } from 'motion/react'

export default function Hero() {
  return (
    <>

     <section className="flex bg-black w-full text-white min-h-screen">

        <div className="flex w-full gap-5 relative flex-col items-center justify-center text-center lg:pl-[4rem] pt-5 px-3 lg:pt-[11rem] ">


         <video className="inset-0 absolute opacity-60 object-cover" autoPlay muted loop playsInline poster="/fallback.jpg" src="/video/stock_video-2.mp4"/>

            <div className="relative bg-transparent flex flex-col gap-5 justify-center items-center ">
              <span className="lg:absolute lg:top-10 lg:left-[35rem]">
                  --------- THIS IS A TEMPLATE ---------
              </span>

              <h1>Trustworthy. Efficient. <span className="text-blue-400 italic">Handy.</span></h1>
              <span className="lg:w-[38rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, iusto officia.</span>
              <div className="flex justify-start gap-6 lg:w-[20rem]">
                  <button className="border rounded-2xl border-blue-500 bg-blue-400 hover:bg-black p-2 w-[7rem]">Book Now</button>

              </div>

            </div>
            
{/* 
            <motion.div initial={{y: 100, opacity: 0}} animate={{y:0, opacity: 1}} className="lg:absolute  lg:right-[10rem]">

            <Image className="" src='/Handyman-Headerr.webp' width={405} height={60} alt="Handy Man Logo" />

            </motion.div>
             */}


        </div>

      
     </section>

    </>
  );
}
