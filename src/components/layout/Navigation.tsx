import { useState, useEffect } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import AudioPlayer from '../ui/AudioPlayer';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false);
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
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col pointer-events-none bg-black/95 backdrop-blur-md">
      <div className="flex items-center px-4 md:px-16 py-2 md:py-3 pointer-events-auto gap-3 md:gap-4">
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 text-[#853A17] border border-[#853A17]/30 bg-black/40 shadow-[2px_2px_0_0_#000]"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`flex-shrink-0 flex items-center gap-1 px-4 py-2 text-xs font-pixel tracking-widest transition-all ${activeSection === item.href
                ? 'bg-[#853A17] text-white shadow-[4px_4px_0_0_#000] border-[2px] border-dashed border-black/50'
                : 'text-white/70 hover:text-white hover:bg-white/5 border-[2px] border-transparent'
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Buttons (Always Visible) */}
        <div className="flex items-center ml-auto gap-3 md:gap-8">
          {/* Highlighted Resume Link */}
          <a
            href="https://drive.google.com/file/d/15UHoMdkaeQBKOwC2MqH4lOLiaJ183iPI/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-1 md:gap-2 px-2.5 py-1.5 md:px-4 md:py-2 text-[8px] md:text-xs font-pixel tracking-widest text-[#853A17] border-[1px] md:border-[2px] border-[#853A17] hover:bg-[#853A17] hover:text-white transition-all shadow-[2px_2px_0_0_#000] md:shadow-[4px_4px_0_0_#000]"
          >
            <FileText size={10} className="hidden sm:block" />
            RESUME
          </a>

          <div className="flex items-center border-l border-white/10 pl-2 md:pl-4">
            <AudioPlayer />
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pointer-events-auto bg-black/98 border-t border-[#853A17]/30 px-4 py-6 flex flex-col gap-4 shadow-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center justify-center py-4 text-[10px] font-pixel tracking-[0.2em] transition-all border border-[#853A17]/20 ${activeSection === item.href
                  ? 'bg-[#853A17] text-white'
                  : 'text-white/70 hover:bg-white/5'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

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
