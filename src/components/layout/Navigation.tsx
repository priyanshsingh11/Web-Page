import { useState, useEffect } from 'react';
import AudioPlayer from '../ui/AudioPlayer';

const navItems = [
  { label: 'WELCOME', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CERTIFICATIONS', href: '#certifications' },
  { label: 'CONTACT', href: '#contact' },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        href: item.href,
        el: document.querySelector(item.href),
      }));

      for (const section of sections.reverse()) {
        if (section.el) {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section.href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col pointer-events-none bg-black/90 md:bg-black border-b-[3px] border-dashed border-[#853A17]/30">
      <div className="flex items-center px-4 md:px-16 py-3 pointer-events-auto gap-2 overflow-x-auto no-scrollbar">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className={`flex items-center gap-1 px-4 py-2 text-[10px] sm:text-xs font-pixel tracking-widest transition-all ${
              activeSection === item.href
                ? 'bg-[#853A17] text-white shadow-[4px_4px_0_0_#000] border-[2px] border-dashed border-black/50'
                : 'text-white/70 hover:text-white hover:bg-white/5 border-[2px] border-transparent'
            }`}
          >
            {item.label}
          </a>
        ))}

        <div className="flex items-center ml-2 border-l border-white/10 pl-4">
          <AudioPlayer />
        </div>
      </div>
      {/* Full width dashed line with animation */}
      <div className="w-full relative h-[4px] overflow-hidden opacity-90">
        <div 
          className="absolute inset-0 w-[200%] h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #853A17 2px, transparent 2px)`,
            backgroundSize: '12px 100%',
            animation: 'dash-scroll 2s linear infinite'
          }}
        />
        <div className="absolute inset-0 shadow-[0_0_15px_rgba(133,58,23,0.6)]"></div>
      </div>
    </nav>
  );
};

export default Navigation;
