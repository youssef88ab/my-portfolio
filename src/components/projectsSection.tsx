import type { FC } from "react";
import { FolderOpen } from "lucide-react";
import MidProjectCard from "./midProjectCard";
import { midProjectsCardData } from "../data/midProjectsCardData";


const Projects: FC = () => {
  return (
    <section id="projects" className="py-24 fade-in-up opacity-0 translate-y-5">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        { midProjectsCardData.map((p) => (
          <MidProjectCard key={p.title} {...p} />
        ))}
      </div>
      <div className="text-center fade-in-up opacity-0 translate-y-5">
        <a
          href="/projects"
          className="inline-flex items-center bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          <FolderOpen className="w-5 h-5 mr-2" />
          Explore More Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
