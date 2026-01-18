import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 md:px-12 lg:px-24 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-display font-bold text-gradient">Priyansh Singh</span>
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            {[
              { label: 'GitHub', href: 'https://github.com/priyanshsingh11', icon: <Github className="w-8 h-8" /> },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/priyansh-singh-575a57289/', icon: <Linkedin className="w-8 h-8" /> },
              { label: 'Instagram', href: 'https://www.instagram.com/xpriyanshsingh/', icon: <Instagram className="w-8 h-8" /> },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                aria-label={link.label}
              >
                {link.icon || link.label}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Back to Top
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↑
            </motion.span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
