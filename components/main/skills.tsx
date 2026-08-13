import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  SKILLS_ROW_1,
  SKILLS_ROW_2,
  SKILLS_ROW_3,
  SKILLS_ROW_4,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center relative overflow-hidden h-[550px] md:h-[650px] lg:h-full lg:min-h-screen py-10 lg:py-20"
    >
      <SkillText />

      <div className="flex flex-row justify-center items-center flex-wrap gap-3 sm:gap-5 max-w-[360px] sm:max-w-none mx-auto mt-4">
        {SKILLS_ROW_1.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center items-center flex-wrap gap-3 sm:gap-5 max-w-[360px] sm:max-w-none mx-auto mt-4">
        {SKILLS_ROW_2.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i + SKILLS_ROW_1.length}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center items-center flex-wrap gap-3 sm:gap-5 max-w-[360px] sm:max-w-none mx-auto mt-4">
        {SKILLS_ROW_3.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i + SKILLS_ROW_1.length + SKILLS_ROW_2.length}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center items-center flex-wrap gap-3 sm:gap-5 max-w-[360px] sm:max-w-none mx-auto mt-4">
        {SKILLS_ROW_4.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i + SKILLS_ROW_1.length + SKILLS_ROW_2.length + SKILLS_ROW_3.length}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            style={{ filter: "hue-rotate(-110deg) saturate(1.1) brightness(0.95)" }}
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
