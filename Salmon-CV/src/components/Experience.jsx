import { EXPERIENCES } from '../constans.js';

export const Experience = () => {
  return (
    <section id="experience" className={`bg-corp-card border border-border-color p-8 rounded-3xl shadow-soft hover:shadow-hover transition-all duration-300 scroll-mt-24`}>
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-display font-bold text-text-main">Experience</h2>
      </div>

      <div className="relative ml-2 sm:ml-4">
        <div className="absolute left-0 top-3 bottom-0 w-0.5 bg-slate-200"></div>
        <div className="flex flex-col gap-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-8 sm:pl-10 group">
              <div className="absolute -left-1.75 top-1.75 w-4 h-4 rounded-full bg-white border-[3px] border-primary z-10 shadow-[0_0_0_4px_rgba(255,255,255,1)] group-hover:scale-125 transition-transform duration-300"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-display font-bold text-text-main">{exp.title}</h3>
                  <p className="text-text-main font-bold text-base mt-0.5">{exp.company}</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light text-corp-sidebar text-xs font-bold whitespace-nowrap self-start border border-primary/20">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-text-body text-sm mb-5 leading-relaxed max-w-3xl">
                {exp.description}
              </p>

              <div className="bg-slate-50/50 rounded-2xl p-5 border border-slate-100">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                  Responsibilities
                </h4>
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-text-body">
                      <span className="material-symbols-outlined text-primary text-[18px] leading-tight shrink-0">check_circle</span>
                      <span>
                        {resp.text}
                        {resp.highlight && <strong className="text-text-main">{resp.highlight}</strong>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
