import type { FC } from "react"
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer: FC = () => {
    return (
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
    )
};  

export default Footer;