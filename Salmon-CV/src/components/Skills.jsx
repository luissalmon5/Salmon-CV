import { SKILL_CATEGORIES } from '../constans.js';

export const Skills = () => {
  return (
    <section id="skills" className="grid grid-cols-1 md:grid-cols-2 gap-6 scroll-mt-24">

      {SKILL_CATEGORIES.map((cat, idx) => (

        <div key={idx} className="bg-corp-card border border-border-color p-8 rounded-3xl shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary text-3xl">{cat.icon}</span>
            <h2 className="text-2xl font-display font-bold text-text-main">{cat.title}</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4 h-full content-start">

            {cat.skills.map((skill, sIdx) => (
              <div 
                key={sIdx} 
                className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-slate-50 transition-colors group cursor-default"
              >
                <div 
                  className="text-slate-400 transition-colors duration-300 group-hover:scale-110"
                > 
                {
                  skill.icon === 'css' || skill.icon === 'html' || skill.icon === 'figma' ? <span className={`icon-${skill.icon} text-6xl`}><span className="path1 text-6xl"></span><span className="path2 text-6xl"></span><span className="path3 text-6xl"></span><span className="path4"></span></span> : <span className={`icon-${skill.icon} text-6xl`}></span>
                }
                  
                </div>
                <span className="text-xs font-semibold text-slate-500 group-hover:text-text-main text-center">
                  {skill.name}
                </span>
              </div>
            ))}

            
          </div>
        </div>
      ))}
    </section>
  );
};