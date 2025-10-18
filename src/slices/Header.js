"use client"

import Image from "next/image";
import { useState, useEffect } from "react";


//Icons 
import { FiAlignJustify, FiSearch, FiShoppingCart } from "react-icons/fi";
import { motion } from "motion/react";


export default function Header({ open  , setOpen }) {


    const [showNav, setShowNav] = useState(true);
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
    <motion.header animate={{ opacity: open ? 0 : 1, zIndex: open ? -1 : 100 }} className={`fixed top-0 left-0 w-full transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } bg-blue-500 z-50 flex justify-between gap-7 p-6 items-center `}>
        <FiAlignJustify onClick={() => setOpen(true)} className="text-3xl" />
       

        <nav>

            <ul className="hidden">
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>

            </ul>
        </nav>
        <div className="flex">
        <FiSearch className="text-2xl" />
        </div>
       
    </motion.header>
    
    </>
  );
}
