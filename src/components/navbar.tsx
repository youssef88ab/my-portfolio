import { useState, type FC } from "react";
import { Menu } from "lucide-react";

const Navbar: FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/60 backdrop-blur-md border border-white/10 fade-in-up opacity-0 translate-y-5" style={{ transition: 'opacity 0.6s ease-out, transform 0.6s ease-out', transitionDelay: '100ms' }}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-xl font-bold tracking-tight">Youssef Abou Eljihad</a>
                <nav className="hidden md:flex space-x-8">
                    <a href="/" className="text-sky-400 font-semibold">Home</a>
                    <a href="/projects" className="text-slate-300 hover:text-sky-400 transition-colors">Projects</a>
                    <a href="/blogs" className="text-slate-300 hover:text-sky-400 transition-colors">Blogs</a>
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
    );
}

export default Navbar;