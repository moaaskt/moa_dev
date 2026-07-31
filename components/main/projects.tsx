"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["Todos", "Full Stack", "Frontend", "Backend", "IA & Python"];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = PROJECTS.filter((project) => 
    activeCategory === "Todos" || project.category === activeCategory
  );

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600 py-20">
        Meus Projetos
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-4 mb-12 px-4">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeCategory === category
                ? "bg-emerald-600/20 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                : "bg-black/50 border-[#064e3b] text-gray-400 hover:text-emerald-300 hover:border-emerald-500/50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                src={project.image}
                title={project.title}
                description={project.description}
                repoLink={project.repoLink}
                liveLink={project.liveLink}
                category={project.category}
                techStack={project.techStack}
                year={project.year}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
