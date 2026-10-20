import { useState, useEffect } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import AudioPlayer from '../ui/AudioPlayer';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Terminal', href: '#terminal' },
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

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
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
          className="md:hidden flex items-center justify-center p-2 text-[#FF5A2E] border border-[#FF5A2E]/30 bg-black/40 shadow-[2px_2px_0_0_#000]"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Mobile: current section name */}
        <span className="md:hidden px-3 py-1.5 text-sm font-body tracking-wide bg-[#FF5A2E] text-white border-[1px] border-dashed border-black/50">
          {navItems.find((item) => item.href === activeSection)?.label}
        </span>

        {/* Desktop Nav: only the current section shows its name, the rest collapse to squares */}
        <div className="hidden md:flex items-center gap-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <motion.a
                key={item.href}
                layout
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                title={item.label}
                aria-label={item.label}
                aria-current={isActive ? 'true' : undefined}
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                className={
                  isActive
                    ? 'flex items-center px-4 py-2 text-xs font-pixel tracking-widest bg-[#FF5A2E] text-white shadow-[4px_4px_0_0_#000] border-[2px] border-dashed border-black/50'
                    : 'w-4 h-4 border-[1px] border-[#FF5A2E]/50 bg-black/40 flex items-center justify-center hover:border-[#FF5A2E] transition-colors'
                }
              >
                {isActive ? (
                  item.label
                ) : (
                  <span className="w-1 h-1 bg-[#FF5A2E]/60"></span>
                )}
              </motion.a>
            );
          })}
        </div>

        {/* Action Buttons (Always Visible) */}
        <div className="flex items-center ml-auto gap-4 md:gap-10">
          {/* Highlighted Resume Link */}
          <a
            href="https://drive.google.com/file/d/1PdfnHvgsal54m0gCk5yVpDvlkkngLqVW/view"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 md:gap-3 px-4 py-1.5 md:px-8 md:py-2 text-sm md:text-lg font-body tracking-wide text-[#FF5A2E] border-[1px] md:border-[2px] border-[#FF5A2E] hover:bg-[#FF5A2E] hover:text-white transition-all shadow-[2px_2px_0_0_#000] md:shadow-[4px_4px_0_0_#000]"
          >
            <FileText size={12} className="hidden sm:block" />
            Resume
          </a>

          <div className="flex items-center border-l border-white/10 pl-3 md:pl-8">
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
            className="md:hidden pointer-events-auto bg-black/98 border-t border-[#FF5A2E]/30 px-4 py-6 flex flex-col gap-4 shadow-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center justify-center py-4 text-sm font-body tracking-wide transition-all border border-[#FF5A2E]/20 ${activeSection === item.href
                  ? 'bg-[#FF5A2E] text-white'
                  : 'text-white/90 hover:bg-white/5'
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
            backgroundImage: `linear-gradient(to right, #FF5A2E 50%, transparent 50%)`,
            backgroundSize: '15px 100%',
            animation: 'dash-scroll 1.5s linear infinite'
          }}
        />
        <div className="absolute inset-0 shadow-[0_0_15px_rgba(255, 90, 46,0.4)]"></div>
      </div>
    </nav>
  );
};

export default Navigation;
