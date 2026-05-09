import { motion } from 'framer-motion';
import {
  FileText,
  Github,
  Linkedin,
  Code2,
  Mail,
  Instagram
} from 'lucide-react';

const footerLinks = [
  { icon: FileText, label: 'Resume', href: 'https://drive.google.com/file/d/15UHoMdkaeQBKOwC2MqH4lOLiaJ183iPI/view?usp=drive_link' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/priyanshsingh11' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/priyansh-singh-575a57289/' },
  { icon: Code2, label: 'LeetCode', href: 'https://leetcode.com/u/priyanshsingh11/' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/xpriyanshsingh/' },
  { icon: Mail, label: 'Email', href: 'mailto:priyanshsingh855@gmail.com' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black py-6 md:py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Top Decorative Border */}
        <div className="w-full h-[1px] bg-[#853A17] mb-6 md:mb-8 opacity-70 shadow-[0_0_10px_#853A17]"></div>

        {/* Links Row */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 md:gap-x-12 gap-y-4 mb-6 px-4">
          {footerLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-3 py-1 border-[1px] border-transparent hover:border-[#853A17] text-white/60 hover:text-[#853A17] transition-all duration-300 group"
            >
              <link.icon size={18} className="text-[#853A17]/70 group-hover:text-[#853A17] transition-colors" />
              <span className="font-pixel text-[11px] md:text-[13px] tracking-widest uppercase">{link.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-pixel text-[8px] md:text-[9px] text-white/20 tracking-[0.2em] text-center uppercase leading-relaxed mt-2">
          © {currentYear} Priyansh Singh. Built with React & Tokens.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
