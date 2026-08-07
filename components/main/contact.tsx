import React from "react";
import { SOCIALS } from "@/constants";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center py-20 px-5 md:px-20 z-[20]">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600 py-6 text-center">
        Vamos trabalhar juntos?
      </h1>
      
      <p className="text-lg text-gray-400 mb-12 max-w-[800px] text-center">
        Aberto a oportunidades como Desenvolvedor Full Stack Jr. e projetos onde eu possa contribuir com soluções web, automações e evolução de sistemas.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {SOCIALS.map(({ name, icon: Icon, link }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="group"
          >
            <HoverBorderGradient
              containerClassName="cursor-pointer"
              className="flex items-center justify-center text-center font-medium gap-3 px-6 py-3"
            >
              {Icon && <Icon className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />}
              <span>{name}</span>
            </HoverBorderGradient>
          </a>
        ))}
      </div>
    </section>
  );
};
