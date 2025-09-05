'use client';

import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Github, Linkedin, Menu, ExternalLink, Twitter } from 'lucide-react';

// Data for the projects
const projectsData = [
  {
    title: 'E-Commerce Platform',
    description: 'A simple full-stack e-commerce web application built with Java Spring Boot and Angular. Core features include product listing, shopping cart.',
    imageUrl: 'https://placehold.co/600x400/1e293b/e2e8f0?text=E-commerce+Platform',
    tags: ['Angular', 'Spring', 'Bootstrap', 'MySQL'],
    codeUrl: 'https://github.com/youssef88ab/ecommerce-java-angular',
    demoUrl: 'https://github.com/youssef88ab/ecommerce-java-angular',
    delay: 500,
  },
  {
    title: 'Notaire Professional Website',
    description: 'A complete website solution for notary offices built with core web technologies (no frameworks), with a reservation system and admin panel dashboard.',
    imageUrl: 'https://placehold.co/600x400/1e293b/e2e8f0?text=Notaire+Professional',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    codeUrl: '#',
    demoUrl: '#',
    delay: 600,
  },
  {
    title: 'Bank Management System',
    description: 'This is a simple banking system implemented in C++ that manages client accounts and transactions.',
    imageUrl: 'https://placehold.co/600x400/1e293b/e2e8f0?text=Bank+System',
    tags: ['C++'],
    codeUrl: 'https://github.com/youssef88ab/Bank-Managment-System',
    demoUrl: 'https://github.com/youssef88ab/Bank-Managment-System',
    delay: 700,
  },
  {
    title: 'Guess The Word Game',
    description: 'A classic "Guess the Word" game built with vanilla JavaScript, demonstrating fundamental DOM manipulation and game logic.',
    imageUrl: 'https://placehold.co/600x400/1e293b/e2e8f0?text=Guess+The+Word',
    tags: ['HTML', 'CSS', 'JavaScript'],
    codeUrl: '#',
    demoUrl: '#',
    delay: 500,
  },
  {
    title: 'Server Performance Stats',
    description: 'A collection of Bash scripts designed to monitor and report key server performance metrics on Linux systems.',
    imageUrl: 'https://placehold.co/600x400/1e293b/e2e8f0?text=Server+Stats',
    tags: ['Linux', 'Shell Scripting', 'Bash'],
    codeUrl: '#',
    demoUrl: '#',
    delay: 600,
  },
  {
    title: 'Weather App',
    description: 'A clean and simple weather application that fetches and displays current weather data from a third-party API.',
    imageUrl: 'https://placehold.co/600x400/1e293b/e2e8f0?text=Weather+App',
    tags: ['HTML', 'CSS', 'JavaScript'],
    codeUrl: '#',
    demoUrl: '#',
    delay: 700,
  },
];

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

const Projects: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-5');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToAnimate = document.querySelectorAll('.fade-in-up');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => elementsToAnimate.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="bg-neutral-950 text-slate-200 font-sans antialiased">
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/60 backdrop-blur-md border-b border-white/10 fade-in-up opacity-0 translate-y-5 transition-all duration-500 ease-out" style={{ transitionDelay: '100ms' }}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tight">Youssef Abou Eljihad</a>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-slate-300 hover:text-sky-400 transition-colors">Home</a>
            <a href="/projects" className="text-sky-400 font-semibold">Projects</a>
            <a href="/blogs" className="text-slate-300 hover:text-sky-400 transition-colors">Blog</a>
            <a href="/#contact" className="text-slate-300 hover:text-sky-400 transition-colors">Contact</a>
          </nav>
          <button onClick={() => setMenuOpen(!isMenuOpen)} className="md:hidden p-2" aria-label="Toggle Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-2">
            <a href="/" className="block text-slate-300 hover:text-sky-400 transition-colors" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="/projects" className="block text-sky-400 font-semibold" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="/blog" className="block text-slate-300 hover:text-sky-400 transition-colors" onClick={() => setMenuOpen(false)}>Blog</a>
            <a href="/#contact" className="block text-slate-300 hover:text-sky-400 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      <main className="container mx-auto px-6 pt-32">
        <section id="projects" className="py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 fade-in-up opacity-0 translate-y-5 transition-all duration-500 ease-out" style={{ transitionDelay: '200ms' }}>
              My Projects
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto fade-in-up opacity-0 translate-y-5 transition-all duration-500 ease-out" style={{ transitionDelay: '300ms' }}>
              A collection of my work, from web applications to backend systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 mt-16">
        <div className="container mx-auto px-6 py-8 text-center text-slate-500">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/youssef88ab" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors"><Github className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/youssefabx/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="https://x.com/yousefabx" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors"><Twitter className="w-6 h-6" /></a>
          </div>
          <p>&copy; {new Date().getFullYear()} Youssef Abou Eljihad. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
