"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 sm:px-10 md:px-20 mt-36 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto items-center md:items-start text-center md:text-start">

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl sm:text-5xl md:text-6xl text-bold text-white max-w-[600px] w-auto h-auto text-center md:text-start"
        >
          <span>
            Código que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">
              resolve problemas
            </span>
            , não só que compila.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] text-center md:text-start"
        >
          Full Stack Jr. com experiência prática em sistemas de produção — da correção de bugs críticos de negócio à construção de integrações e SaaS multi-tenant com IA.
        </motion.p>

        <motion.div variants={slideInFromLeft(1)} className="flex w-full justify-center md:justify-start">
          <a href="#projects">
            <HoverBorderGradient
              containerClassName="max-w-[200px] cursor-pointer"
              className="flex items-center justify-center text-center font-medium"
            >
              Ver projetos
            </HoverBorderGradient>
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full hidden md:flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
