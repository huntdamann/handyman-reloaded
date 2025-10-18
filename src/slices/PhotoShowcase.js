import Image from "next/image";

import { PiChatsFill, PiMapPinFill, PiPhoneFill } from "react-icons/pi";

import  { motion } from 'motion/react'

export default function PhotoShowcase({photo}) {
  return (
    <>

     <section className="flex bg-black w-full text-white min-h-50%">

        
            <motion.div className="relative aspect-square w-full">

            <Image className="" src={photo} fill alt="Handy Man Logo" />

            </motion.div>

             



      
     </section>

    </>
  );
}
