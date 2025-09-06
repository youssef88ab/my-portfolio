import type { FC } from "react";
import type projectsData from "../data/projectsData";
import { Github, Linkedin, Menu, ExternalLink, Twitter } from 'lucide-react';


const ProjectCard: FC<typeof projectsData[0]> = ({ title, description, imageUrl, tags, codeUrl, demoUrl, delay }) => (
  <div
    className="bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden group fade-in-up opacity-0 translate-y-5 transition-all duration-500 ease-out"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <img src={imageUrl} alt={title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400 mb-6 text-justify">{description}</p>
      <div className="flex flex-wrap gap-3 items-center mb-6">
        {tags.map((tag) => (
          <span key={tag} className="bg-sky-500/10 text-sky-300 text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center">
          <Github className="w-4 h-4 mr-2" /> View Code
        </a>
        <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center">
          <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;