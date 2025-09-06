import type { FC } from "react";
import { Github, ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  delay?: string;
};

const midProjectCard: FC<ProjectCardProps> = ({ title, description, tech, github, demo, delay }) => {
  return (
    <div
      className="bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-sky-500/50 flex flex-col fade-in-up opacity-0 translate-y-5"
      style={{ transitionDelay: delay }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400 mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-4 items-center mb-4">
        {tech.map((t) => (
          <i key={t} className={`devicon-${t}-plain colored text-4xl`}></i>
        ))}
      </div>
      <div className="flex space-x-3 mt-auto">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center text-sm"
          >
            <Github className="w-4 h-4 mr-2" /> Code
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 font-medium py-2 px-4 rounded-lg transition-colors flex items-center text-sm"
          >
            <ExternalLink className="w-4 h-4 mr-2" /> Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default midProjectCard;
