import type { FC } from "react";
import { Github, Linkedin } from "lucide-react";

const About: FC = () => {
    return (
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
                    <img src="https://placehold.co/500x500/0a0a0a/38bdf8?text=Animation" alt="Lottie Animation Placeholder" className="rounded-full" />
                </div>
            </div>
        </section>
    );
}

export default About;