import {
  FileText,
  Github,
  Linkedin,
  Code2,
  Mail,
  Instagram
} from 'lucide-react';

const footerLinks = [
  { icon: FileText, label: 'Resume', href: 'https://drive.google.com/file/d/1PdfnHvgsal54m0gCk5yVpDvlkkngLqVW/view?usp=drive_link' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/priyanshsingh11' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/priyansh-singh-575a57289/' },
  { icon: Code2, label: 'LeetCode', href: 'https://leetcode.com/u/priyanshsingh11/' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/xpriyanshsingh/' },
  { icon: Mail, label: 'Email', href: 'mailto:priyanshsingh855@gmail.com' },
];

const monoStack = "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-[#121110] border-t-[3px] border-[#CF492C] pt-12 md:pt-[68px] pb-8 md:pb-10"
      style={{ fontFamily: monoStack }}
    >
      {/* Links row */}
      <nav
        aria-label="Social links"
        className="flex flex-wrap justify-center items-center gap-x-6 md:gap-x-10 gap-y-4 px-4"
      >
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[14px] md:text-[15px] text-white/90 hover:text-[#CF492C] transition-colors"
          >
            <link.icon size={17} strokeWidth={1.75} />
            <span>{link.label}</span>
          </a>
        ))}
      </nav>

      {/* Divider + copyright */}
      <div className="w-[82%] max-w-[1200px] mx-auto mt-10 md:mt-[52px] border-t border-white/15 pt-6 md:pt-8">
        <p className="text-center text-[12px] md:text-[13px] text-white/35 tracking-wide">
          © {currentYear} Priyansh Singh. Built with React &amp; Tokens.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
