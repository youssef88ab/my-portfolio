'use client';
import { useEffect } from 'react';
import type { FC } from 'react';
import Navbar from '../components/navbar';
import projectsData from '../data/projectsData';
import ProjectCard from '../components/projectCard';
import Footer from '../components/footer';

const Projects: FC = () => {

  // Scroll animation effect
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
      <Navbar />

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

      <Footer />
    </div>
  );
};

export default Projects;
