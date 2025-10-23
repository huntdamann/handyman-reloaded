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
      <section className="flex bg-slate-950 text-white min-h-60%">

        <div className="flex w-full gap-5 relative flex-col items-center justify-center text-center p-[5rem] ">

            <h2 className="">
                fjaslkjfdlskjf
            </h2>

            <span className="lg:w-[38rem] text-lg"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, nemo! Molestias iste quo natus ducimus sapiente libero ipsam, in, et eligendi, quae doloremque veritatis. Saepe nihil quibusdam eos hic iste! </span>
            

        </div>


      </section>

      <section className="bg-slate-950 text-white py-12 px-4">
  <div
    className="
      grid 
      grid-cols-1          
      sm:grid-cols-2      
      lg:grid-cols-3    
      gap-6 
      max-w-6xl            
      mx-auto             
    "
  >
    <PhotoShowcase photo="/stock_tools.jpg" />
    <PhotoShowcase photo="/stock_phone.jpg" />
    <PhotoShowcase photo="/stock_paint.jpg" />

    <InfoSection
      title={infoDescriptions[2].title}
      description={infoDescriptions[2].description}
    />
    <InfoSection
      title={infoDescriptions[1].title}
      description={infoDescriptions[1].description}
    />
    <InfoSection
      title={infoDescriptions[0].title}
      description={infoDescriptions[0].description}
    />
  </div>
</section>


    
    

<section className="flex flex-col lg:flex-row bg-black justify-between items-center w-full px-6 py-16 lg:p-20 min-h-screen text-white">
  {/* Text Section */}
  <div className="flex flex-col gap-5 max-w-xl text-center lg:text-left">
    <h2 className="text-3xl sm:text-4xl font-semibold">Meet Handy</h2>

    <p className="text-base sm:text-lg leading-relaxed text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur omnis rem suscipit id.
      Accusantium cumque eos blanditiis consequuntur non! Exercitationem, iusto atque vitae fuga in eos quas
      deleniti quo possimus. Sapiente vero sunt minima quaerat quis, tempore temporibus unde atque beatae amet dicta
      debitis dolores.
    </p>

    <div className="flex justify-center lg:justify-start mt-4">
      <button className="border rounded-2xl border-blue-500 bg-blue-400 hover:bg-transparent transition-colors duration-300 p-3 px-6 font-semibold">
        Book Now
      </button>
    </div>
  </div>

  {/* Image Section */}
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="mt-10 lg:mt-0 flex justify-center"
  >
    <Image
      src="/Handyman-Headerr.webp"
      width={350}
      height={350}
      alt="Handy Man Logo"
      className="w-64 sm:w-80 lg:w-[22rem] h-auto object-contain"
    />
  </motion.div>
</section>


      <footer className="text-white  p-[6rem]  flex lg:flex-row  gap-[2rem] flex-col">


          <span>
            +1 888 888 8888
          </span>

          <div className="flex flex-col">
            <span className="underline cursor-pointer">reservations@handyman.com</span>
            <span>Dallas</span>
          </div>

          <div className="flex flex-col">
            <span>Texas</span>
            <span>HANDY</span>
          </div>

          <div className="flex flex-col uppercase">
            <span className="cursor-pointer">Consulting</span>
            <span className="cursor-pointer">Privacy Policy</span>
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
