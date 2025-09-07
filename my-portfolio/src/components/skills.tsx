import { useState, type FC } from "react";
import { skillsData } from "../data/skillsData";

const skills: FC = () => {

    type SkillCategory = 'web' | 'tools';

    const [activeTab, setActiveTab] = useState<SkillCategory>('web');

        const SkillIcon: FC<{ name: string; icon: string }> = ({ name, icon }) => (
        <div className="flex flex-col items-center gap-2">
            <i className={`${icon} colored text-5xl`}></i>
            <span className="text-sm text-slate-300">{name}</span>
        </div>
    );
    
    return (
        <section id="skills" className="py-24 fade-in-up opacity-0 translate-y-5">
            <div className="max-w-5xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Skills</h3>
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    <button onClick={() => setActiveTab('web')} className={`text-sm font-semibold py-2 px-6 border rounded-md transition-all duration-300 ${activeTab === 'web' ? 'bg-sky-500 text-white border-sky-500' : 'border-slate-600'}`}>
                        WEB DEVELOPMENT
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
    );
};

export default skills;