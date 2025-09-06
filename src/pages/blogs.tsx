'use client';

import { useEffect } from 'react';
import type { FC } from 'react';
import blogData from '../data/blogData';
import BlogPost from '../components/blogPost';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const BlogPage: FC = () => {
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
      <div className='navbar-container'>
        <Navbar />
      </div>

      <main className="container mx-auto px-6 pt-32">
        <section id="blog" className="py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 fade-in-up opacity-0 translate-y-5 transition-all duration-500 ease-out" style={{ transitionDelay: '200ms' }}>
              From My Desk
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto fade-in-up opacity-0 translate-y-5 transition-all duration-500 ease-out" style={{ transitionDelay: '300ms' }}>
              Thoughts on technology, development, and everything in between.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-12">
            {blogData.map((post) => (
              <BlogPost key={post.title} {...post} />
            ))}
          </div>
        </section>
      </main>
     
        <Footer />
    </div>
  );
};

export default BlogPage;
