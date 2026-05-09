import { motion } from 'framer-motion';
import { 
  FileText, 
  Briefcase, 
  Github, 
  Linkedin, 
  Code2, 
  Youtube, 
  Twitter, 
  BookOpen, 
  Mail 
} from 'lucide-react';

const footerLinks = [
  { icon: FileText, label: 'Resume', href: '#' },
  { icon: Briefcase, label: 'Hire Me', href: '#contact' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/priyanshsingh11' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/priyansh-singh-575a57289/' },
  { icon: Code2, label: 'LeetCode', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Twitter, label: 'x.com', href: 'https://twitter.com/xpriyanshsingh' },
  { icon: BookOpen, label: 'Medium', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:priyanshsingh855@gmail.com' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Border */}
        <div className="w-full h-[1px] bg-[#853A17] mb-16 opacity-50 shadow-[0_0_10px_#853A17]"></div>

        {/* Links Grid */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 mb-16">
          {footerLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 text-white/60 hover:text-white transition-all group"
            >
              <link.icon size={16} className="text-[#853A17]/70 group-hover:text-[#853A17] transition-colors" />
              <span className="font-pixel text-[11px] tracking-widest uppercase">{link.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full max-w-4xl h-[1px] bg-white/10 mb-8"></div>

        {/* Copyright */}
        <p className="font-pixel text-[10px] text-white/30 tracking-[0.2em] text-center uppercase">
          © {currentYear} Priyansh Singh. Built with React & lots of Creativity + Tokens.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
