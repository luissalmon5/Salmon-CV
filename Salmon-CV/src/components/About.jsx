import { PROFILE } from '../constans.js';

export const About = ( { ref, visible }) => {
  return (
    <section id="about" ref={ref} className={`grid grid-cols-1 gap-6 scroll-mt-24`}>
      <div className={`${ visible ? 'border-primary border-2 transition-all duration-300' : ''} bg-corp-card border border-border-color p-8 rounded-3xl shadow-soft hover:shadow-hover transition-all duration-300`}>
        <h2 className="text-3xl font-display font-bold text-text-main mb-4">About Me</h2>
        <p className="text-text-body text-lg leading-relaxed mb-6 font-body text-pretty">
          {PROFILE.bio}
        </p>
        <div className="flex flex-wrap gap-4">
          {[
            { icon: 'location_on', text: PROFILE.location },
            { icon: 'translate', text: PROFILE.languages },
            { icon: 'schedule', text: PROFILE.availability },
          ].map((item, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-2 text-sm font-medium text-text-main bg-slate-50 px-3 py-1.5 rounded-full border border-border-color"
            >
              <span className="material-symbols-outlined text-primary text-lg">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
