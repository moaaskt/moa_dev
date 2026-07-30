import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  repoLink: string;
  liveLink: string;
  category: string;
  techStack: readonly string[];
  year: number;
};

export const ProjectCard = ({
  src,
  title,
  description,
  repoLink,
  liveLink,
  category,
  techStack,
  year,
}: ProjectCardProps) => {
  const showOverlay = repoLink || liveLink;

  return (
    <CardContainer containerClassName="w-full h-full py-0">
      <CardBody className="relative flex flex-col h-full w-full overflow-hidden rounded-xl shadow-lg border border-[#064e3b] bg-[#000f0a] backdrop-blur-md hover:shadow-emerald-500/10 transition-shadow">
        <CardItem translateZ={100} className="relative group overflow-hidden h-48 w-full flex-shrink-0">
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />

          {showOverlay && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              {repoLink && (
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-110"
                  title="Ver código no GitHub"
                >
                  <FaGithub size={24} />
                </a>
              )}
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-110"
                  title="Ver ao vivo"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              )}
            </div>
          )}
        </CardItem>

        <div className="relative flex flex-col p-6 flex-grow">
          <CardItem translateZ={50} className="w-full flex justify-between items-start mb-4">
            <h1 className="text-xl md:text-2xl font-bold text-white leading-tight">{title}</h1>
            <span className="text-xs font-semibold px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-full flex-shrink-0 ml-2 whitespace-nowrap">
              {category} · {year}
            </span>
          </CardItem>
          
          <CardItem translateZ={40} className="text-gray-300 text-sm md:text-base line-clamp-4 flex-grow">
            {description}
          </CardItem>

          {techStack && techStack.length > 0 && (
            <CardItem translateZ={60} className="flex items-center gap-2 mt-6 flex-wrap">
              {techStack.map((tech) => (
                <Image
                  key={tech}
                  src={`/skills/${tech}`}
                  alt={tech}
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                  title={tech.replace(/\.(png|svg)$/, "")}
                />
              ))}
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};

