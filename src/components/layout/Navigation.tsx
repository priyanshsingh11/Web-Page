import { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';
import AudioPlayer from '../ui/AudioPlayer';

const navItems = [
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
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col pointer-events-none bg-black/90 backdrop-blur-md">
      <div className="flex items-center px-3 md:px-16 py-2 md:py-3 pointer-events-auto gap-1 md:gap-2 overflow-x-auto no-scrollbar">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className={`flex-shrink-0 flex items-center gap-1 px-3 py-2 md:px-4 md:py-2 text-[9px] md:text-xs font-pixel tracking-widest transition-all ${activeSection === item.href
              ? 'bg-[#853A17] text-white shadow-[3px_3px_0_0_#000] md:shadow-[4px_4px_0_0_#000] border-[1px] md:border-[2px] border-dashed border-black/50'
              : 'text-white/70 hover:text-white hover:bg-white/5 border-[1px] md:border-[2px] border-transparent'
              }`}
          >
            {item.label}
          </a>
        ))}

        <div className="flex items-center ml-auto gap-8">
          {/* Highlighted Resume Link */}
          <a
            href="https://drive.google.com/file/d/15UHoMdkaeQBKOwC2MqH4lOLiaJ183iPI/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 text-[9px] md:text-xs font-pixel tracking-widest text-[#853A17] border-[1px] md:border-[2px] border-[#853A17] hover:bg-[#853A17] hover:text-white transition-all shadow-[3px_3px_0_0_#000] md:shadow-[4px_4px_0_0_#000]"
          >
            <FileText size={12} className="hidden sm:block" />
            RESUME
          </a>

          <div className="flex items-center border-l border-white/10 pl-3 md:pl-4">
            <AudioPlayer />
          </div>
        </div>
      </div>
      {/* Full width dashed line with animation */}
      <div className="w-full relative h-[1.5px] md:h-[2px] overflow-hidden opacity-90">
        <div
          className="absolute inset-0 w-[200%] h-full"
          style={{
            backgroundImage: `linear-gradient(to right, #853A17 50%, transparent 50%)`,
            backgroundSize: '15px 100%',
            animation: 'dash-scroll 1.5s linear infinite'
          }}
        />
        <div className="absolute inset-0 shadow-[0_0_15px_rgba(133,58,23,0.4)]"></div>
      </div>
    </nav>
  );
};

export default Navigation;
