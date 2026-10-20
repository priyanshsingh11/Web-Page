import { motion } from 'framer-motion';
import { Code2, FileText, Github, Linkedin, Mail, User } from 'lucide-react';

const faqs = [
  {
    q: "Behind the machine? PRIYANSH SINGH",
  },
  {
    q: "What I do?",
    a: "I build AI-powered products, scalable full-stack applications, autonomous agents, and production-ready software systems."
  },
  {
    q: "Prove your obsession with tech?",
    a: "Hackathons, research projects, late-night builds, and constantly learning the next thing in AI and engineering."
  },
  {
    q: "My passions?",
    a: "Artificial intelligence, system design, building impactful products, and turning ambitious ideas into reality."
  },
  {
    q: "When not coding?",
    a: "Gaming, gym, brainstorming startup ideas, watching tech content, or overthinking the future."
  },
  {
    q: "What I care about?",
    a: "Building meaningful technology, continuous growth, and creating things that genuinely stand out and bring impact."
  },
  {
    q: "My coding philosophy?",
    a: "Build with purpose. Optimize relentlessly. Keep learning. Ship fast."
  },
  {
    q: "My weakness?",
    a: "I don’t really have weaknesses, just an unhealthy attachment to optimizing things."
  },
  {
    q: "How I code?",
    a: "With headphones on, dark mode enabled, and music loud enough to summon bugs and solve them."
  },
  {
    q: "Special stuff?",
    a: "Funny enough to survive awkward situations, smart enough to escape them."
  }
];

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/priyanshsingh11' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/priyansh-singh-575a57289/' },
  { icon: Code2, label: 'LeetCode', href: 'https://leetcode.com/u/priyanshsingh11/' },
  { icon: FileText, label: 'Resume', href: 'https://drive.google.com/file/d/1TFWOIzQZNMV5Rt3KieD7KKLbTaGf-P66/view?usp=drive_link' },
  { icon: Mail, label: 'Email', href: 'mailto:priyanshsingh855@gmail.com' },
];

const FAQSection = () => {
  const mainTitle = faqs[0];
  const remainingFaqs = faqs.slice(1);

  return (
    <section id="about" className="py-12 md:py-20 px-3 md:px-16 bg-transparent">
      <div className="relative z-10 max-w-5xl mx-auto border-[2px] border-[#FF5A2E] bg-black/85 backdrop-blur-md text-white shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000]">

        {/* Header */}
        <div className="border-b-[2px] border-[#FF5A2E] bg-black/90 p-2 flex justify-between items-center">
          <div className="flex gap-2 items-center font-pixel text-[10px] md:text-xs tracking-widest px-2">
            <User size={14} className="text-[#FF5A2E]" />
            <span>SYS.PROFILE // [DEV_PRIYANSH]</span>
          </div>
          <div className="flex gap-1 pr-2">
            <div className="w-2 h-2 border border-[#FF5A2E]"></div>
            <div className="w-2 h-2 border border-[#FF5A2E]"></div>
          </div>
        </div>

        <div className="p-4 md:p-10">
          <h2 className="font-extended text-xl md:text-3xl border-b-[2px] border-[#FF5A2E] pb-4 mb-8 text-white uppercase tracking-tight">
            Player Info
          </h2>

          <p className="font-pixel text-xs md:text-sm tracking-widest text-[#FF5A2E] mb-8 uppercase">
            {mainTitle.q}
          </p>

          <div className="flex flex-col gap-4 md:gap-5">
            {remainingFaqs.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="group flex gap-4 md:gap-6 items-start border-[1px] border-[#FF5A2E]/40 bg-white/5 p-3 md:p-5 hover:border-[#FF5A2E] transition-colors"
              >
                <span className="font-pixel text-lg md:text-2xl text-[#FF5A2E] leading-none pt-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-pixel text-xs md:text-base text-[#FF5A2E] uppercase tracking-widest mb-1.5">
                    {faq.q}
                  </h3>
                  <p className="font-body text-base md:text-xl leading-relaxed text-white/95 group-hover:text-white transition-colors">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Find me on */}
          <div className="mt-10 border-t-[2px] border-[#FF5A2E] pt-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 flex-shrink-0 font-pixel text-sm md:text-base tracking-widest text-[#FF5A2E]">
              <span className="w-2.5 h-2.5 bg-[#FF5A2E]"></span>
              FIND ME ON:
            </div>
            <nav aria-label="Social links" className="flex flex-wrap md:flex-nowrap flex-1 gap-3 md:gap-5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex-1 basis-[calc(50%-0.375rem)] md:basis-auto flex items-center justify-center gap-2.5 px-3 py-2.5 border-[2px] border-[#FF5A2E] bg-[#0D0B0A] text-white font-pixel text-xs md:text-sm tracking-widest uppercase shadow-[3px_3px_0_0_#000] hover:bg-[#FF5A2E] transition-colors"
                >
                  <Icon size={18} strokeWidth={1.75} />
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
