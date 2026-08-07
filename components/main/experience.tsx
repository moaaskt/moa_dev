import React from "react";

export const Experience = () => {
  const experiences = [
    {
      role: "[CARGO 1]",
      company: "[EMPRESA 1]",
      period: "[PERÍODO 1]",
      achievements: ["[CONQUISTA 1]", "[CONQUISTA 2]"],
    },
    {
      role: "[CARGO 2]",
      company: "[EMPRESA 2]",
      period: "[PERÍODO 2]",
      achievements: ["[CONQUISTA 1]", "[CONQUISTA 2]"],
    },
    {
      role: "[CARGO 3]",
      company: "[EMPRESA 3]",
      period: "[PERÍODO 3]",
      achievements: ["[CONQUISTA 1]", "[CONQUISTA 2]"],
    },
  ];

  return (
    <section id="experience" className="flex flex-col items-center justify-center py-20 px-5 md:px-20 z-[20]">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600 py-10">
        Experiência
      </h1>
      
      <div className="relative w-full max-w-4xl mt-10">
        {/* Linha central vertical com glow */}
        <div className="absolute left-4 md:left-1/2 md:-ml-[1px] w-[2px] h-full bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>

        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Marcador na linha */}
                <div className="absolute left-4 md:left-1/2 -translate-x-[11px] md:-translate-x-1/2 w-[24px] h-[24px] rounded-full bg-[#000f0a] border-4 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] z-10 mt-1 md:mt-0"></div>
                
                {/* Espaçador para layout alternado no desktop */}
                <div className="hidden md:block md:w-1/2"></div>
                
                {/* Card de conteúdo */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="p-6 rounded-xl border border-[#064e3b] bg-black/40 backdrop-blur-md hover:border-emerald-500/50 hover:bg-emerald-900/10 transition-all duration-300 text-left">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-emerald-400 font-medium mb-2">{exp.company}</h4>
                    <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs rounded-full mb-4">
                      {exp.period}
                    </span>
                    <ul className="text-gray-400 text-sm space-y-2 list-inside list-disc">
                      {exp.achievements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
