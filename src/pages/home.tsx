'use client';

import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Github, Linkedin, Menu, ExternalLink, FolderOpen, Twitter } from 'lucide-react';

// Define the type for the skill categories
type SkillCategory = 'web' | 'db' | 'tools';

// Data for the skill icons
const skillsData = {
  web: [
    { name: 'HTML5', icon: 'devicon-html5-plain' },
    { name: 'CSS3', icon: 'devicon-css3-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Angular', icon: 'devicon-angularjs-plain' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'Spring', icon: 'devicon-spring-original' },
  ],
  db: [
    { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
    { name: 'MySQL', icon: 'devicon-mysql-plain-wordmark' },
  ],
  tools: [
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'Docker', icon: 'devicon-docker-plain' },
    { name: 'C++', icon: 'devicon-cplusplus-plain' },
    { name: 'Python', icon: 'devicon-python-plain' },
    { name: 'Java', icon: 'devicon-java-plain' },
    { name: 'Linux', icon: 'devicon-archlinux-plain' },
  ],
};

const Home: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<SkillCategory>('web');

  useEffect(() => {
    // This handles the on-scroll animations
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
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const elementsToAnimate = document.querySelectorAll('.fade-in-up');
    elementsToAnimate.forEach((el) => {
      observer.observe(el);
    });

    // Cleanup observer on component unmount
    return () => {
      elementsToAnimate.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);


  const SkillIcon: FC<{ name: string; icon: string }> = ({ name, icon }) => (
    <div className="flex flex-col items-center gap-2">
      <i className={`${icon} colored text-5xl`}></i>
      <span className="text-sm text-slate-300">{name}</span>
    </div>
  );

  return (
    <div className="bg-neutral-950 text-slate-200 font-sans antialiased text-justify">
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/60 backdrop-blur-md border border-white/10 fade-in-up opacity-0 translate-y-5" style={{ transition: 'opacity 0.6s ease-out, transform 0.6s ease-out', transitionDelay: '100ms' }}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-tight">Youssef Abou Eljihad</a>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-sky-400 font-semibold">Home</a>
            <a href="/projects" className="text-slate-300 hover:text-sky-400 transition-colors">Projects</a>
            <a href="/blogs" className="text-slate-300 hover:text-sky-400 transition-colors">BLogs</a>
            <a href="#contact" className="text-slate-300 hover:text-sky-400 transition-colors">Contact</a>
          </nav>
          <button onClick={() => setMenuOpen(!isMenuOpen)} className="md:hidden p-2" aria-label="Toggle Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-2">
            <a href="#about" className="block text-sky-400 font-semibold" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#projects" className="block text-slate-300 hover:text-sky-400" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#skills" className="block text-slate-300 hover:text-sky-400" onClick={() => setMenuOpen(false)}>Blog</a>
            <a href="#contact" className="block text-slate-300 hover:text-sky-400" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      <main className="container mx-auto px-6 pt-32">
        <section id="about" className="min-h-[80vh] flex flex-col justify-center">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <div className="max-w-3xl text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 fade-in-up opacity-0 translate-y-5" style={{ transitionDelay: '200ms' }}>
                Youssef Abou Eljihad
              </h1>
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-sky-400 to-indigo-400 text-transparent bg-clip-text fade-in-up opacity-0 translate-y-5" style={{ transitionDelay: '300ms' }}>
                Software Engineer Student
              </h2>
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-8 fade-in-up opacity-0 translate-y-5" style={{ transitionDelay: '400ms' }}>
                Hi there! I'm Youssef Abou Eljihad, a Software Engineering and Distributed Computing Systems student at ENSET, passionate about Linux, Java, and DevOps. Driven by a love for competitions, I strive to innovate and create impactful solutions for real-world problems.
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-4 fade-in-up opacity-0 translate-y-5" style={{ transitionDelay: '500ms' }}>
                <a href="#contact" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
                  Get In Touch
                </a>
                <a href="https://github.com/youssef88ab" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 p-3 rounded-full transition-colors"><Github /></a>
                <a href="https://www.linkedin.com/in/youssefabx/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 p-3 rounded-full transition-colors"><Linkedin /></a>
              </div>
            </div>
            <div className="hidden lg:block flex-shrink-0 fade-in-up opacity-0 translate-y-5" style={{ transitionDelay: '400ms' }}>
              {/* For React, it's better to use a library like 'lottie-react'
                  <Lottie animationData={yourAnimationData} loop={true} style={{ width: 500, height: 500 }} />
              */}
              <img src="https://placehold.co/500x500/0a0a0a/38bdf8?text=Animation" alt="Lottie Animation Placeholder" className="rounded-full"/>
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 fade-in-up opacity-0 translate-y-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-sky-500/50 flex flex-col fade-in-up opacity-0 translate-y-5">
                    <h3 className="text-xl font-bold mb-2">Ecommerce Platform</h3>
                    <p className="text-slate-400 mb-4 flex-grow">A simple full-stack e-commerce web application built with Java Spring Boot and Angular, featuring product listings, a shopping cart, and user management.</p>
                    <div className="flex flex-wrap gap-4 items-center mb-4">
                        <i className="devicon-angularjs-plain colored text-4xl"></i>
                        <i className="devicon-mysql-plain colored text-4xl"></i>
                        <i className="devicon-spring-plain colored text-4xl"></i>
                    </div>
                    <div className="flex space-x-3 mt-auto">
                        <a href="https://github.com/youssef88ab/ecommerce-java-angular" target="_blank" rel="noopener noreferrer" className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center text-sm">
                            <Github className="w-4 h-4 mr-2" /> Code
                        </a>
                        <a href="https://github.com/youssef88ab/ecommerce-java-angular" target="_blank" rel="noopener noreferrer" className="bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 font-medium py-2 px-4 rounded-lg transition-colors flex items-center text-sm">
                            <ExternalLink className="w-4 h-4 mr-2" /> Demo
                        </a>
                    </div>
                </div>
                <div className="bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-sky-500/50 flex flex-col fade-in-up opacity-0 translate-y-5" style={{transitionDelay: '100ms'}}>
                    <h3 className="text-xl font-bold mb-2">Notary Professional Website</h3>
                    <p className="text-slate-400 mb-4 flex-grow">A complete website solution for notary offices built with core web technologies (no frameworks).</p>
                    <div className="flex flex-wrap gap-4 items-center mb-4">
                        <i className="devicon-php-plain colored text-4xl"></i>
                        <i className="devicon-mysql-plain colored text-4xl"></i>
                        <i className="devicon-javascript-plain colored text-4xl"></i>
                        <i className="devicon-bootstrap-plain colored text-4xl"></i>
                    </div>
                    <div className="flex space-x-3 mt-auto">
                         <a href="https://github.com/youssef88ab/notaire-php" target="_blank" rel="noopener noreferrer" className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center text-sm">
                            <Github className="w-4 h-4 mr-2" /> Code
                        </a>
                        <a href="https://github.com/youssef88ab/notaire-php" target="_blank" rel="noopener noreferrer" className="bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 font-medium py-2 px-4 rounded-lg transition-colors flex items-center text-sm">
                            <ExternalLink className="w-4 h-4 mr-2" /> Demo
                        </a>
                    </div>
                </div>
                <div className="bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-sky-500/50 flex flex-col fade-in-up opacity-0 translate-y-5" style={{transitionDelay: '200ms'}}>
                    <h3 className="text-xl font-bold mb-2">Simple Banking System</h3>
                    <p className="text-slate-400 mb-4 flex-grow">This is a simple banking system implemented in C++ that manages client accounts and transactions.</p>
                    <div className="flex flex-wrap gap-4 items-center mb-4">
                        <i className="devicon-cplusplus-plain colored text-4xl"></i>
                    </div>
                    <div className="flex space-x-3 mt-auto">
                        <a href="https://github.com/youssef88ab/Bank-Managment-System" target="_blank" rel="noopener noreferrer" className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center text-sm">
                            <Github className="w-4 h-4 mr-2" /> Code
                        </a>
                        <a href="https://github.com/youssef88ab/Bank-Managment-System" target="_blank" rel="noopener noreferrer" className="bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 font-medium py-2 px-4 rounded-lg transition-colors flex items-center text-sm">
                            <ExternalLink className="w-4 h-4 mr-2" /> Demo
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center fade-in-up opacity-0 translate-y-5">
                <a href="#" className="inline-flex items-center bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                    <FolderOpen className="w-5 h-5 mr-2" />
                    Explore More Projects
                </a>
            </div>
        </section>

        <section id="skills" className="py-24 fade-in-up opacity-0 translate-y-5">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Skills</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <button onClick={() => setActiveTab('web')} className={`text-sm font-semibold py-2 px-6 border rounded-md transition-all duration-300 ${activeTab === 'web' ? 'bg-sky-500 text-white border-sky-500' : 'border-slate-600'}`}>
                WEB DEVELOPMENT
              </button>
              <button onClick={() => setActiveTab('db')} className={`text-sm font-semibold py-2 px-6 border rounded-md transition-all duration-300 ${activeTab === 'db' ? 'bg-sky-500 text-white border-sky-500' : 'border-slate-600'}`}>
                DATABASES
              </button>
              <button onClick={() => setActiveTab('tools')} className={`text-sm font-semibold py-2 px-6 border rounded-md transition-all duration-300 ${activeTab === 'tools' ? 'bg-sky-500 text-white border-sky-500' : 'border-slate-600'}`}>
                TOOLS & LANGUAGES
              </button>
            </div>
            <div className="bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 min-h-[260px]">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-8">
                {skillsData[activeTab].map(skill => <SkillIcon key={skill.name} {...skill} />)}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 text-center fade-in-up opacity-0 translate-y-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Let's Build Something Great</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect.
          </p>
          <a href="mailto:yousef.aboueljihad@gmail.com" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
            Contact Me
          </a>
        </section>
      </main>

      <footer className="border-t border-slate-800">
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

export default Home;
