"use client";

import { useState, useEffect } from "react";
import { FiAlignJustify, FiSearch } from "react-icons/fi";
import { motion } from "motion/react";

export default function Header({ open, setOpen }) {
  const [headerState, setHeaderState] = useState("transparent");
  // states: "transparent" | "visible" | "hidden"

  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollY) {
      // scrolling down
      if (currentScroll < 100) {
        setHeaderState("transparent");
      } else if (currentScroll >= 100 && currentScroll < 300) {
        setHeaderState("visible");
      } else {
        setHeaderState("hidden");
      }
    } else {
      // scrolling up
      if (currentScroll < 100) {
        setHeaderState("transparent");
      } else {
        setHeaderState("visible");
      }
    }

    setLastScrollY(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      animate={{
        opacity: open ? 0 : 1,
        zIndex: open ? -1 : 100,
        y: headerState === "hidden" ? "-100%" : "0%",
        backgroundColor:
          headerState === "transparent"
            ? "rgba(59,130,246,0)" // transparent-ish blue
            : "rgba(59,130,246,1)",
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      className="fixed top-0 left-0 w-full flex justify-between gap-7 p-6 items-center backdrop-blur-md text-white"
    >
      <FiAlignJustify onClick={() => setOpen(true)} className="text-3xl cursor-pointer" />
      <nav>
        <ul className="hidden md:flex gap-[10rem] text-lg uppercase">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">About</li>
          <li className="cursor-pointer hover:underline">Projects</li>
          <li className="cursor-pointer hover:underline">Contact</li>
        </ul>
      </nav>
      <div className="flex">
        <FiSearch className="text-2xl cursor-pointer" />
      </div>
    </motion.header>
  );
}
