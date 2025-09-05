'use client';

import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Github, Linkedin, Menu, ArrowRight, Twitter } from 'lucide-react';

// Data for the blog posts
const blogData = [
  {
    date: 'August 10, 2025',
    title: "The Rise of Serverless: A Developer's Perspective",
    excerpt: "Serverless architecture is changing the way we build and deploy applications. In this post, I explore the benefits, drawbacks, and my personal experience with AWS Lambda and Vercel Functions...",
    slug: '#',
    delay: 400,
  },
  {
    date: 'July 22, 2025',
    title: 'Mastering State Management in React with Zustand',
    excerpt: 'Forget Redux boilerplate. Zustand offers a minimalistic and powerful approach to state management in React. Let\'s dive into how it works and build a simple app to demonstrate its elegance...',
    slug: '#',
    delay: 500,
  },
  {
    date: 'June 15, 2025',
    title: 'Why Tailwind CSS is My Go-To for Rapid Prototyping',
    excerpt: "Utility-first CSS has been a game-changer for my workflow. I'll break down why I prefer Tailwind CSS over traditional CSS or component libraries for quickly bringing ideas to life...",
    slug: '#',
    delay: 600,
  },
];

const BlogPost: FC<typeof blogData[0]> = ({ date, title, excerpt, slug, delay }) => (
  <article
    className="bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 fade-in-up opacity-0 translate-y-5 transition-all duration-500 ease-out"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <p className="text-sm text-slate-400 mb-2">{date}</p>
    <h2 className="text-2xl font-bold mb-3 hover:text-sky-400 transition-colors">
      <a href={slug}>{title}</a>
    </h2>
    <p className="text-slate-400 mb-4 text-justify">{excerpt}</p>
    <a href={slug} className="font-semibold text-sky-400 hover:text-sky-300 flex items-center group">
      Read More
      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
    </a>
  </article>
);

const BlogPage: FC = () => {
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
            <a href="/projects" className="text-slate-300 hover:text-sky-400 transition-colors">Projects</a>
            <a href="/blog" className="text-sky-400 font-semibold">Blog</a>
            <a href="/#contact" className="text-slate-300 hover:text-sky-400 transition-colors">Contact</a>
          </nav>
          <button onClick={() => setMenuOpen(!isMenuOpen)} className="md:hidden p-2" aria-label="Toggle Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-2">
            <a href="/" className="block text-slate-300 hover:text-sky-400 transition-colors" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="/projects" className="block text-slate-300 hover:text-sky-400 transition-colors" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="/blog" className="block text-sky-400 font-semibold" onClick={() => setMenuOpen(false)}>Blog</a>
            <a href="/#contact" className="block text-slate-300 hover:text-sky-400 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

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

export default BlogPage;
