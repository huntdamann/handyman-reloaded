import Image from "next/image";

import { PiChatsFill, PiMapPinFill, PiPhoneFill } from "react-icons/pi";

import  { motion } from 'motion/react'

export default function InfoSection({title, description}) {
  return (
    <>

     <section className="flex bg-slate-950 text-white aspect-square">

        <div className="flex w-full gap-5 relative flex-col items-center justify-center text-center lg:pl-[4rem] pt-5 px-3 lg:pt-[11rem] ">

            <h2 className="">
                {title}
            </h2>

            <span className="lg:w-[38rem]"> {description} </span>
            

        </div>

      
     </section>

    </>
  );
}
