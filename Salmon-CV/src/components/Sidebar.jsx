import { navItems, PROFILE, contact_icons } from "../constans"


export const Sidebar = ({ activeSection }) => {
    return (
        <>
            <aside className="w-full lg:w-[320px] lg:h-screen lg:sticky lg:top-0 bg-corp-sidebar border-r border-slate-700/50 flex flex-col justify-between p-8 text-white z-20 shadow-xl transition-colors duration-300">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4 items-center justify-center text-center">
                        <div className="relative group cursor-pointer">
                            <div className="size-32 rounded-full overflow-hidden border-4 border-white/10 shadow-glow group-hover:border-primary transition-all duration-300">
                                <img
                                    alt={PROFILE.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    src={PROFILE.image}
                                />
                            </div>
                            <div className="absolute bottom-1 right-1 bg-primary text-white p-1.5 rounded-full shadow-sm border-2 border-corp-sidebar">
                                <span className="material-symbols-outlined text-[16px] leading-none block">check</span>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-display font-bold text-3xl tracking-tight mb-4 text-white">{PROFILE.name}</h1>
                            <p className="font-body text-slate-300 font-medium bg-white/10 inline-block px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-white/10">{PROFILE.role}</p>
                        </div>
                    </div>

                    <nav className="flex flex-col gap-2 mt-4 fixed right-0 bottom-10 bg-corp-sidebar p-4 lg:relative">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all group ${item.id === activeSection
                                    ? 'bg-white/10 text-primary'
                                    : 'text-slate-400 hover:text-primary hover:bg-white/5'
                                    }`}
                            >
                                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </span>
                                <span className="font-bold hidden lg:block">{item.label}</span>
                            </a>
                        ))}
                    </nav>

                    <div className="mt-8 lg:mt-0 flex flex-col gap-8">
                        <div className="flex gap-6 justify-center">
                            {contact_icons.map(icon => (
                                <a
                                    key={icon.name}
                                    href={icon.link}
                                    target="_blank"
                                    aria-label={icon.name}
                                    className="w-12.5 h-12.5 flex items-center justify-center bg-white/5 border border-white/10 p-2 rounded-full hover:bg-primary hover:border-primary transition-all text-slate-400 hover:text-white"
                                >
                                    <span className={`icon-${icon.name} text-white text-3xl`}></span>
                                </a>
                            ))}
                        </div>
                        <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-2xl transition-all shadow-glow hover:shadow-glow-hover flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">download</span>
                            <a href='/CVLuisSalmon.pdf' download>Download CV</a>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    )
}