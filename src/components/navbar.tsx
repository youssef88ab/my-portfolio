import { useState, type FC } from "react";
import { Menu } from "lucide-react";

const Navbar: FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("home"); // default active tab

    const linkClasses = (tab: string) =>
        activeTab === tab
            ? "text-sky-400 font-semibold"
            : "text-slate-300 hover:text-sky-400 transition-colors";

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/60 backdrop-blur-md border border-white/10 fade-in-up opacity-0 translate-y-5" 
            style={{ transition: 'opacity 0.6s ease-out, transform 0.6s ease-out', transitionDelay: '100ms' }}>
            
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="/" className="text-xl font-bold tracking-tight">Youssef Abou Eljihad</a>
                
                {/* Desktop nav */}
                <nav className="hidden md:flex space-x-8">
                    <a 
                        href="/" 
                        onClick={() => setActiveTab("home")}
                        className={linkClasses("home")}
                    >Home</a>
                    <a 
                        href="/projects" 
                        onClick={() => setActiveTab("projects")}
                        className={linkClasses("projects")}
                    >Projects</a>
                    <a 
                        href="/blogs" 
                        onClick={() => setActiveTab("blogs")}
                        className={linkClasses("blogs")}
                    >Blogs</a>
                    <a 
                        href="#contact" 
                        onClick={() => setActiveTab("contact")}
                        className={linkClasses("contact")}
                    >Contact</a>
                </nav>

                {/* Mobile menu button */}
                <button onClick={() => setMenuOpen(!isMenuOpen)} className="md:hidden p-2" aria-label="Toggle Menu">
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Mobile nav */}
            {isMenuOpen && (
                <div className="md:hidden px-6 pb-4 space-y-2">
                    <a 
                        href="/" 
                        onClick={() => { setActiveTab("home"); setMenuOpen(false); }}
                        className={linkClasses("home")}
                    >Home</a>
                    <a 
                        href="/projects" 
                        onClick={() => { setActiveTab("projects"); setMenuOpen(false); }}
                        className={linkClasses("projects")}
                    >Projects</a>
                    <a 
                        href="/blogs" 
                        onClick={() => { setActiveTab("blogs"); setMenuOpen(false); }}
                        className={linkClasses("blogs")}
                    >Blogs</a>
                    <a 
                        href="#contact" 
                        onClick={() => { setActiveTab("contact"); setMenuOpen(false); }}
                        className={linkClasses("contact")}
                    >Contact</a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
