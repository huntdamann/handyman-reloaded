import Image from "next/image";
import { PiChatsFill, PiMapPinFill, PiPhoneFill } from "react-icons/pi";
import { motion } from "motion/react";

export default function InfoSection({ title, description }) {
  return (
    <section className="flex border border-gray-400 overflow-hidden bg-slate-950 text-white flex-col items-center justify-center text-center p-6 lg:p-16">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <span className="w-full max-w-prose text-base leading-relaxed">
        {description}
      </span>
    </section>
  );
}
