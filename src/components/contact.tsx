import type { FC } from "react";

const Contact: FC = () => {
    return (
        <section id="contact" className="py-24 text-center fade-in-up opacity-0 translate-y-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Let's Build Something Great</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8">
                I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect.
            </p>
            <a href="mailto:yousef.aboueljihad@gmail.com" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
                Contact Me
            </a>
        </section>
    )
};

export default Contact;