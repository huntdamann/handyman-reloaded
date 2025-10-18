"use client"

import Image from "next/image";

import { PiChatsFill, PiMapPinFill, PiPhoneFill } from "react-icons/pi";
import { IoAdd } from "react-icons/io5";
import { motion } from 'motion/react';
import Header from "@/slices/Header";



//Code Slices
import Hero from "@/slices/Hero";
import PhotoShowcase from "@/slices/PhotoShowcase";
import InfoSection from "@/slices/InfoSection";
import SimpleMenu from "@/slices/SimpleMenu";
import { infoDescriptions } from "@/data/reviewData";
import { useState, useEffect } from "react";




export default function Home() {


  const [showNav, setShowNav] = useState(true);
  const [ open, openMenu ] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0);



  const handleScroll = () => {

    if (window.scrollY > lastScrollY) {

      setShowNav(false)
    }
    else {
      setShowNav(true)
    }

    setLastScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  return (
    <>

      {/* <header className={`fixed top-0 left-0 w-full transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } bg-black z-50`}>

        <div className="flex justify-between border bg-black w-full p-2">
            <Image src='/handyman.png' width={150} height={60} alt="Handy Man Logo" />
          <div className="flex sm:hidden gap-5">

            <div className="flex items-center p-5 gap-6 border-r-2 border-slate-500">
              <div className="border p-2 rounded-3xl">
                  <PiPhoneFill className="text-orange-400 text-2xl" />
              </div>
              <div className="flex flex-col text-center">
                <span className="text-slate-500">Call us anytime:</span>
                <span className="text-white">+888-888-8888</span>
              </div>
            </div>
            <div className="flex items-center p-5 gap-6 border-r-2 border-slate-500">

              <div className="border p-2 rounded-3xl">
              <PiChatsFill className="text-orange-400 text-2xl" />

              </div>



              <div className="flex flex-col">
                <span className="text-slate-500">Email us: </span>
                <span className="text-white">info@plumer.com</span>
              </div>
            </div>
            <div className="flex items-center p-5 gap-6 ">

              <div className="border p-2 rounded-3xl">
                <PiMapPinFill className="text-orange-400" />

              </div>
              <div className="flex flex-col">
                <span className="text-slate-500">Our Office Location: </span>
                <span className="text-white">Santa Rosa, United States</span>
              </div>
            </div>
          </div>

        </div>
        <nav className="flex sm:absolute justify-between items-center bg-slate-700 text-white p-3">
          <ul className="flex gap-4">
            <li>
              Home
            </li>
            <li className="flex justify-center items-center">
              <span>About Us</span>
              <IoAdd className="text-orange-400" />
            </li>
            <li className="flex justify-center items-center">
              <span>Services </span>
              <IoAdd className="text-orange-400" />
              
            </li>
            <li>
              Contact
            </li>
          </ul>
          <button className=" p-2 bg-orange-400">
            Get a Quote
          </button>
        </nav>

      </header> */}
      <SimpleMenu open={open} setOpen={openMenu} />
      <Header open={open} setOpen={openMenu}  />
      
      <Hero />
      <InfoSection title={infoDescriptions[0].title} description={infoDescriptions[0].description} />
      <PhotoShowcase photo={'/stock_tools.jpg'} />
      <InfoSection title={infoDescriptions[1].title} description={infoDescriptions[1].description} />
      <PhotoShowcase photo={'/stock_paint.jpg'} />
      <InfoSection title={infoDescriptions[2].title} description={infoDescriptions[2].description} />

      <PhotoShowcase photo={'/stock_phone.jpg'} />
      <InfoSection title={infoDescriptions[2].title} description={infoDescriptions[2].description} />

      <section className="flex bg-slate-950 flex-col justify-center items-center text-white aspect-square">

        
          <motion.div initial={{y: 100, opacity: 0}} whileInView={{y:0, opacity: 1}} className="lg:absolute  lg:right-[10rem]">

            <Image className="" src='/Handyman-Headerr.webp' width={275} height={60} alt="Handy Man Logo" />

          </motion.div>

      </section>

      <section className="flex bg-black w-full text-white aspect-square">

      <div className="flex  w-full gap-5 relative flex-col  lg:pl-[4rem] pt-5 px-5 lg:pt-[11rem] ">

          <span className="lg:absolute lg:top-10 lg:left-[35rem]">
            Meet Handy
          </span>

          <span className="lg:w-[38rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur omnis rem suscipit id. Accusantium cumque eos blanditiis consequuntur non! Exercitationem, iusto atque vitae fuga in eos quas deleniti quo possimus.
          Sapiente vero sunt minima quaerat quis, tempore temporibus unde atque beatae amet dicta debitis dolores, </span>
          <div className="flex justify-start gap-6 lg:w-[20rem]">
              <button className="border rounded-2xl border-blue-500 bg-blue-400 hover:bg-black p-2 w-[7rem]">Book Now</button>

          </div>
      {/* 
          <motion.div initial={{y: 100, opacity: 0}} animate={{y:0, opacity: 1}} className="lg:absolute  lg:right-[10rem]">

          <Image className="" src='/Handyman-Headerr.webp' width={405} height={60} alt="Handy Man Logo" />

          </motion.div>
          */}


      </div>


    </section>


      <footer className="text-white min-h-[60dvh] p-6 flex  gap-[2rem] flex-col">


          <span>
            +1 888 888 8888
          </span>

          <div className="flex flex-col">
            <span className="underline">reservations@handyman.com</span>
            <span>Dallas</span>
          </div>

          <div className="flex flex-col">
            <span>Texas</span>
            <span>HANDY</span>
          </div>

          <div className="flex flex-col uppercase">
            <span>Consulting</span>
            <span>Privacy Policy</span>
          </div>


          <span>

          © Handy 2025. All Rights Reserved — Crafted by 
          <a href="https://humanndesign.com" target="_blank" className="font-semibold hover:underline ml-1">
            HUMANNDESIGN
          </a>

          </span>





      </footer>



    </>
  );
}
