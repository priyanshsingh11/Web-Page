import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const faqs = [
  {
    q: "Behind the machine? PRIYANSH SINGH",
  },
  {
    q: "What I do?",
    a: "I build AI-powered products, scalable full-stack applications, autonomous agents, and production-ready ML systems."
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
    a: "Building meaningful technology, continuous growth, and creating things that genuinely stand out."
  },
  {
    q: "My coding philosophy?",
    a: "Build with purpose. Optimize relentlessly. Keep learning. Ship fast."
  },
  {
    q: "My weakness?",
    a: "Turning 'small side projects' into full-scale systems."
  },
  {
    q: "How I code?",
    a: "With headphones on, dark mode enabled, and music loud enough to summon bugs and solve them."
  },
  {
    q: "Special stuff?",
    a: "Fast learner, research-driven mindset, strong execution, and the ability to adapt quickly across AI, full-stack, and MLOps."
  }
];

const FAQSection = () => {
  const mainTitle = faqs[0];
  const remainingFaqs = faqs.slice(1);

  return (
    <section id="lore" className="py-20 px-4 md:px-16 border-t border-b border-[#853A17]/20">
      <div className="max-w-6xl mx-auto">

        {/* Section Metadata */}
        <div className="flex items-center gap-4 mb-12 opacity-60">
          <div className="h-[1px] flex-grow bg-[#853A17]"></div>
          <div className="font-pixel text-[10px] tracking-[0.3em] text-[#853A17] whitespace-nowrap">
            DIALOGUE_LOG.TXT // LORE & FAQ
          </div>
          <div className="h-[1px] flex-grow bg-[#853A17]"></div>
        </div>

        {/* Hero Title for Section */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="font-extended text-2xl md:text-3xl leading-tight text-[#853A17] uppercase">
            {mainTitle.q}
          </h2>
        </div>

        {/* Dialogue List */}
        <div className="grid grid-cols-1 gap-10 max-w-6xl">
          {remainingFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group flex gap-6 items-start"
            >
              <div className="mt-1 text-[#853A17] font-bold text-xl">•</div>
              <p className="font-body text-xl md:text-2xl leading-relaxed text-white/70 group-hover:text-white transition-colors">
                <span className="font-pixel text-sm md:text-base text-[#853A17] mr-3 uppercase">{faq.q}:</span>
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Accent */}
        <div className="mt-24 border-t border-[#853A17]/30 pt-8 flex justify-between items-center opacity-40">
           <div className="font-mono text-[10px] tracking-widest text-white">SYSTEM_STATUS: STABLE</div>
           <div className="font-mono text-[10px] tracking-widest text-white">ACCESS_LVL: ADMINISTRATOR</div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
