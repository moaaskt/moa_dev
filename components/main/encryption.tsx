"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center h-[500px] md:min-h-screen w-full -z-20 overflow-hidden">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-2xl sm:text-3xl md:text-[40px] font-medium text-center text-gray-200 px-4"
        >
          Qualidade{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">
            &
          </span>{" "}
          boas práticas.
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#10b9818b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[20px] px-[5px] w-full">
        <div className="cursive text-sm sm:text-base md:text-[20px] font-medium text-center text-gray-300">
          Código limpo, testado e documentado.
        </div>
      </div>

      <div className="w-full h-full flex items-center justify-center absolute top-0 left-0">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover"
          style={{ filter: "hue-rotate(-110deg) saturate(1.1) brightness(0.95)" }}
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
