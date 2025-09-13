import { type FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-sky-400 font-semibold"
      : "text-slate-300 hover:text-sky-400 transition-colors";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/60 backdrop-blur-md border border-white/10 fade-in-up opacity-0 translate-y-5"
      style={{ transition: 'opacity 0.6s ease-out, transform 0.6s ease-out', transitionDelay: '100ms' }}>

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold tracking-tight">
          Youssef Abou Eljihad
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" className={linkClasses} end>Home</NavLink>
          <NavLink to="/projects" className={linkClasses}>Projects</NavLink>
          <NavLink to="/blogs" className={linkClasses}>Blogs</NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="md:hidden px-6 py-4 space-y-2 flex flex-col bg-neutral-900/95 border-t border-white/10">
          <NavLink to="/" className={linkClasses} end onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/projects" className={linkClasses} onClick={() => setMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/blogs" className={linkClasses} onClick={() => setMenuOpen(false)}>Blogs</NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
