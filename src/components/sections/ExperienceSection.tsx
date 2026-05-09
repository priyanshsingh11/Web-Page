import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    level: 'LEVEL 2',
    role: 'CO-FOUNDER & FULL-STACK ENGINEER',
    company: 'TUNED SOCIETY',
    date: 'FEB 2026 - PRESENT',
    description: [
      'Built a car modification marketplace connecting users with verified garages.',
      'Developed scalable backend systems, booking workflows, and location-based search.'
    ],
    tech: [
      'NODE.JS',
      'EXPRESS.JS',
      'MONGODB',
      'REST_API',
      'SYSTEM_DESIGN'
    ]
  },
  {
    level: 'LEVEL 1',
    role: 'FREELANCE DEVELOPER',
    company: 'INDEPENDENT',
    date: '2024 - PRESENT',
    description: [
      'Building custom AI solutions and full-stack applications for global clients.',
      'Specializing in rapid prototyping and autonomous agentic workflows.'
    ],
    tech: ['FULL STACK ENGINEER', 'AI ENGINEER', 'SOFTWARE ENGINNER', 'MLOPS', 'A2O']
  }
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
                <div className="flex flex-row md:flex-col items-center md:w-32 flex-shrink-0 relative z-10 gap-4 md:gap-0">
                  <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-[#853A17] bg-black flex items-center justify-center md:mb-4 group-hover:scale-110 transition-transform">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#853A17]"></div>
                  </div>

                  <div className="bg-black border-[1px] border-[#853A17] px-3 py-1.5 md:px-4 md:py-2 text-[#853A17] font-pixel text-[10px] md:text-xs tracking-widest shadow-[4px_4px_0_0_#853A17] md:shadow-[6px_6px_0_0_#853A17] group-hover:bg-[#853A17] group-hover:text-white transition-all whitespace-nowrap">
                    {exp.level}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 border-[1px] border-[#853A17] bg-black/85 backdrop-blur-md p-5 md:p-8 shadow-[6px_6px_0_0_#000] md:shadow-[8px_8px_0_0_#000] relative overflow-hidden ml-10 md:ml-0">
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5 md:mb-6 gap-3">
                    <div>
                      <h3 className="font-extended text-lg md:text-2xl text-white mb-2 leading-tight">
                        {exp.role}
                      </h3>
                      <p className="font-pixel text-xs md:text-sm text-[#853A17] tracking-widest">
                        @ {exp.company}
                      </p>
                    </div>
                    <div className="font-pixel text-[9px] md:text-[10px] tracking-widest text-[#853A17]/60">
                      {exp.date}
                    </div>
                  </div>

                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {exp.description.map((item, i) => (
                      <li key={i} className="font-pixel text-[11px] md:text-sm text-white/70 flex gap-3 leading-relaxed">
                        <span className="text-[#853A17] mt-1.5 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(tech => (
                      <span
                        key={tech}
                        className="font-pixel text-[8px] md:text-[9px] bg-[#853A17] text-white px-2 py-1 md:px-3 md:py-1.5 tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
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