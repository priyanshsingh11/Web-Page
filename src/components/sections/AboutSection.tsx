import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const stats = [
  { value: '02+', label: 'YEARS (EXP)' },
  { value: '30+', label: 'BUILDS' },
  { value: '02', label: 'STARTUPS' },
  { value: '20+', label: 'SKILLS' },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative p-3 md:p-8 bg-transparent"
    >
      {/* Optional subtle blur layer */}
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto border-[2px] border-[#853A17] bg-black/85 backdrop-blur-md text-white shadow-[6px_6px_0_0_#000] md:shadow-[8px_8px_0_0_#000]">

        {/* Header */}
        <div className="border-b-[2px] border-[#853A17] bg-black/90 text-white p-2 flex justify-between items-center">
          <div className="flex gap-2 items-center font-pixel text-[10px] md:text-xs tracking-widest px-2">
            <User size={14} className="text-[#853A17]" />
            <span>CHARACTER_BIO.TXT</span>
          </div>
          <div className="flex gap-1 pr-2">
            <div className="w-2 h-2 border border-[#853A17]"></div>
            <div className="w-2 h-2 border border-[#853A17]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-5 md:p-10">

          {/* Left Side */}
          <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-6">

            <h2 className="font-extended text-xl md:text-2xl border-b-[2px] border-[#853A17] pb-3 md:pb-4 text-white">
              Player Info
            </h2>

            <div className="border-[1px] border-[#853A17] p-4 md:p-5 bg-white/5 backdrop-blur-sm">
              <p className="font-body text-base md:text-xl leading-relaxed text-white">
                I transform complex problems into scalable AI solutions — building autonomous agents, full-stack applications, and reliable MLOps systems for real-world impact.
              </p>
            </div>

            <div className="border-[1px] border-[#853A17] p-4 md:p-5 bg-white/5 backdrop-blur-sm">
              <h3 className="font-pixel text-sm md:text-lg uppercase mb-3 text-[#853A17]">
                Technical Mindset
              </h3>

              <p className="font-body text-sm md:text-lg leading-relaxed text-white/90">
                My approach is AI-driven, scalable, and user-focused. I believe great technology should feel seamless — combining intelligent systems, efficient engineering, and clean user experiences to solve meaningful real-world problems.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 border-[1px] border-[#853A17] bg-white/5 backdrop-blur-md p-5 md:p-6 text-white flex flex-col">

            <h3 className="font-pixel text-base md:text-xl mb-6 md:mb-8 text-center text-[#853A17] tracking-widest">
              CHARACTER STATS
            </h3>

            <div className="grid grid-cols-2 gap-3 md:gap-5 flex-grow">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.02 }}
                  className="border-[1px] border-[#853A17] p-3 md:p-5 text-center bg-black/40 hover:bg-[#853A17] hover:text-white transition-all duration-300 cursor-default group flex flex-col items-center justify-center min-h-[80px] md:min-h-[120px]"
                >
                  <div className="font-extended text-xl md:text-4xl mb-1 md:mb-2 text-[#853A17] group-hover:text-white transition-colors">
                    {stat.value}
                  </div>

                  <div className="font-pixel text-[7px] md:text-[10px] tracking-widest opacity-80 group-hover:opacity-100">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 md:mt-10 font-mono text-[9px] md:text-[10px] tracking-widest text-center text-white/40 uppercase">
              Engineering Intelligence // Since 2022
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;