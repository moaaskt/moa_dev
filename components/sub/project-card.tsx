import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  repoLink: string;
  liveLink: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  repoLink,
  liveLink,
}: ProjectCardProps) => {
  const showOverlay = repoLink || liveLink;

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#03001417] backdrop-blur-md">
      <div className="relative group overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-48 object-cover"
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
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

