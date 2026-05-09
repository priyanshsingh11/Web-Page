import { motion } from 'framer-motion';
import { FileCode2, Globe, Terminal } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-24px)] w-full overflow-hidden pt-24 pb-8 px-4 md:p-8 flex flex-col justify-center items-center"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-7xl mx-auto flex flex-col md:flex-row p-2 md:p-8 gap-10 md:gap-8 justify-between items-center z-10"
      >

        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
          <h1 className="font-extended font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-white drop-shadow-md normal-case break-words">
            Hi, I'm Priyansh!
          </h1>

          <p className="font-body text-lg md:text-2xl leading-relaxed text-white max-w-xl drop-shadow-md">
            I build intelligent systems that solve real-world problems through AI, full-stack engineering, and data-driven design. From architecting autonomous AI agents and high-performance RAG pipelines to developing scalable web applications and analytics platforms, I focus on creating technology that is practical, efficient, and impactful.
          </p>

          <div className="pt-1 flex flex-wrap gap-1 md:gap-1">
            {['AI ENGINEER', 'FULL-STACK ENGINEER', 'SOFTWARE ENGINEER', 'MLOPS'].map((role) => (
              <div
                key={role}
                className="border-[2px] md:border-[3px] border-black bg-white text-black px-3 py-1.5 md:px-4 md:py-2 font-pixel text-[10px] md:text-xs uppercase shadow-[3px_3px_0_0_#000] md:shadow-[4px_4px_0_0_#000] hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#000] transition-all cursor-default"
              >
                {role}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Stats & Activity */}
        <div className="w-full md:w-[40%] flex flex-col gap-6">
          
          {/* Quick Stats Box */}
          <div className="flex flex-col border-[2px] border-[#853A17] bg-black/75 backdrop-blur-md text-white p-5 md:p-6 gap-6 shadow-[6px_6px_0_0_#000] md:shadow-[8px_8px_0_0_#000]">
            {/* Box Header */}
            <div className="flex flex-col">
              <div className="font-extended text-[#853A17] text-xs md:text-base leading-tight mb-1 uppercase">PRIYANSH SINGH</div>
              <div className="font-mono text-xs md:text-sm text-white/90">Quick Stats</div>
            </div>

            {/* Box Content */}
            <div className="flex flex-col gap-3 font-extended text-[9px] md:text-xs uppercase tracking-wide">
              <div className="flex justify-between items-center border-[1px] border-[#853A17] bg-white/5 p-2.5 md:p-3 hover:bg-[#853A17] hover:text-white transition-colors cursor-default group/stat">
                <span className="leading-relaxed">Total<br />Experience</span>
                <span className="text-[#853A17] group-hover/stat:text-white text-right leading-relaxed transition-colors">24<br />months</span>
              </div>
              <div className="flex justify-between items-center border-[1px] border-[#853A17] bg-white/5 p-2.5 md:p-3 hover:bg-[#853A17] hover:text-white transition-colors cursor-default group/stat">
                <span>Projects Built</span>
                <span className="text-[#853A17] group-hover/stat:text-white transition-colors">20+</span>
              </div>
              <div className="flex justify-between items-center border-[1px] border-[#853A17] bg-white/5 p-2.5 md:p-3 hover:bg-[#853A17] hover:text-white transition-colors cursor-default group/stat">
                <span>HACKATHONS</span>
                <span className="text-[#853A17] group-hover/stat:text-white transition-colors">15+</span>
              </div>
              <div className="flex justify-between items-center border-[1px] border-[#853A17] bg-white/5 p-2.5 md:p-3 hover:bg-[#853A17] hover:text-white transition-colors cursor-default group/stat">
                <span>Tech Stack</span>
                <span className="text-[#853A17] group-hover/stat:text-white text-right transition-colors">touch grass<br /></span>
              </div>
            </div>
          </div>

          {/* GitHub Activity Chart */}
          <div className="flex flex-col border-[2px] border-[#853A17] bg-black/75 backdrop-blur-md text-white p-4 shadow-[6px_6px_0_0_#000] md:shadow-[8px_8px_0_0_#000]">
            <div className="flex items-center gap-2 mb-4">
              <FileCode2 size={14} className="text-[#853A17]" />
              <span className="font-pixel text-[9px] md:text-[10px] text-[#853A17] tracking-widest uppercase">CONTRIBUTION_LOG.SYS</span>
            </div>
            <div className="bg-white/5 border border-[#853A17]/20 p-2 overflow-hidden">
              <img 
                src="https://ghchart.rshah.org/853A17/priyanshsingh11" 
                alt="Priyansh's GitHub Contributions" 
                className="w-full opacity-90 hover:opacity-100 transition-opacity"
                style={{ 
                  imageRendering: 'pixelated',
                  filter: 'invert(1) hue-rotate(180deg) brightness(1.2) contrast(1.2)'
                }}
              />
            </div>
            <div className="mt-3 flex justify-between items-center opacity-40 font-pixel text-[7px] tracking-widest uppercase">
              <span>SOURCE: GITHUB_API</span>
              <span>USER_ID: PS_11</span>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default HeroSection;