"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#10b9818b] opacity-[0.9]]"
      >
        <SparklesIcon className="text-[#6ee7b7] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Stack favorita: React, PHP, Python
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Construindo sistemas com tecnologias modernas.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Do backend à interface, resolvendo problemas reais.
      </motion.div>
    </div>
  );
};
