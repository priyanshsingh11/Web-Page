import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    level: 'LEVEL 5',
    role: 'FULL STACK AI ENGINEER',
    company: 'AJAIA AI',
    date: 'JUN 2026 - PRESENT',
  },
  {
    level: 'LEVEL 4',
    role: 'AI WEB DEVELOPER',
    company: 'LEARN WITH FRATERNITY PVT. LTD',
    date: 'MAY 2026 - JUN 2026',
  },
  {
    level: 'LEVEL 3',
    role: 'CO-FOUNDER & FULL-STACK ENGINEER',
    company: 'TUNED SOCIETY',
    date: 'FEB 2026 - PRESENT',
  },
  {
    level: 'LEVEL 2',
    role: 'FULL-STACK ENGINEER',
    company: 'PLYPICKER',
    date: 'JAN 2025 - JAN 2026',
  },
  {
    level: 'LEVEL 1',
    role: 'FREELANCE DEVELOPER',
    company: 'INDEPENDENT',
    date: '2024 - PRESENT',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 md:py-20 px-4 md:px-16 bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto">

        <h2 className="font-extended text-xl md:text-3xl text-center mb-12 md:mb-20 text-[#853A17] tracking-tighter">
          THE GRIND SO FAR
        </h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-[84px] top-0 bottom-0 w-[2px] border-l-2 border-dashed border-[#853A17]/30"></div>

          <div className="flex flex-col gap-12 md:gap-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 md:gap-16 relative group"
              >
                {/* Level Indicator & Timeline Node */}
                <div className="flex flex-row md:flex-col items-center md:w-32 flex-shrink-0 relative z-20 gap-3 md:gap-0">
                  <div className="w-7 h-7 md:w-10 md:h-10 border-2 border-[#853A17] bg-black flex items-center justify-center md:mb-4 group-hover:scale-110 transition-transform">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#853A17]"></div>
                  </div>

                  <div className="bg-black border-[1px] border-[#853A17] px-2 py-1 md:px-4 md:py-2 text-[#853A17] font-pixel text-[9px] md:text-xs tracking-widest shadow-[3px_3px_0_0_#853A17] md:shadow-[6px_6px_0_0_#853A17] group-hover:bg-[#853A17] group-hover:text-white transition-all whitespace-nowrap">
                    {exp.level}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 border-[1px] border-[#853A17] bg-black/85 backdrop-blur-md p-5 md:p-8 shadow-[4px_4px_0_0_#000] md:shadow-[8px_8px_0_0_#000] relative overflow-hidden ml-10 md:ml-0">

                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h3 className="font-extended text-base md:text-2xl text-white mb-1.5 leading-tight">
                        {exp.role}
                      </h3>
                      <p className="font-pixel text-[10px] md:text-sm text-[#853A17] tracking-widest uppercase">
                        @ {exp.company}
                      </p>
                    </div>
                    <div className="font-pixel text-[8px] md:text-[10px] tracking-widest text-[#853A17]/60">
                      {exp.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
