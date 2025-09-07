'use client';
import { useEffect } from 'react';
import type { FC } from 'react';
import Navbar from '../components/navbar';
import About from '../components/about';
import Projects from '../components/projectsSection';
import Skills from '../components/skills';
import Contact from '../components/contact';
import Footer from '../components/footer';

const Home: FC = () => {

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

  return (
    <div className="bg-neutral-950 text-slate-200 font-sans antialiased text-justify">
      <div className='navbar-container'>
        <Navbar />
      </div>

      <main className="container mx-auto px-6 pt-32">
        <div className='about-container '>
          <About />
        </div>
        <div className='projects-container'>
          <Projects />
        </div>
        <div className='skills-container'>
          <Skills />
        </div>
        <div className='contact-container'>
          <Contact />
        </div>
      </main>

      <div className='footer-container'>
        <Footer />
      </div>
    
    </div>
  );
};

export default Home;
