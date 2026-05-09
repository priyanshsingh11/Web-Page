import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const floatingLetters = [
  { char: 'C', top: '5%', left: '3%', size: 'text-[12vw]', rotate: -15, delay: 0 },
  { char: 'R', top: '8%', left: '28%', size: 'text-[10vw]', rotate: 8, delay: 0.1 },
  { char: 'E', top: '3%', right: '30%', size: 'text-[9vw]', rotate: -5, delay: 0.2 },
  { char: 'A', top: '15%', right: '8%', size: 'text-[11vw]', rotate: 12, delay: 0.15 },
  { char: 'T', top: '40%', left: '5%', size: 'text-[13vw]', rotate: -20, delay: 0.25 },
  { char: 'E', top: '45%', left: '25%', size: 'text-[8vw]', rotate: 5, delay: 0.3 },
];

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="vision"
      className="relative min-h-screen w-full overflow-hidden border-t border-black"
    >
      {/* Floating Chrome Letters */}
      {floatingLetters.map((letter, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: letter.delay + 0.2 }}
          className={`absolute ${letter.size} font-extended font-bold select-none pointer-events-none`}
          style={{
            top: letter.top,
            left: letter.left,
            right: (letter as any).right,
            transform: `rotate(${letter.rotate}deg)`,
            color: 'transparent',
            WebkitTextStroke: '2px rgba(0,0,0,0.15)',
          }}
        >
          {letter.char}
        </motion.div>
      ))}

      {/* Blue accent squares */}
      {[
        { top: '12%', left: '22%' },
        { top: '25%', right: '35%' },
        { top: '55%', left: '18%' },
        { top: '35%', right: '20%' },
      ].map((pos, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
          className="absolute w-3 h-3 bg-blue-700"
          style={pos}
        />
      ))}

      {/* Main Content Card - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-full md:w-[55%] lg:w-[45%]"
      >
        {/* Card Header */}
        <div className="text-white p-8 md:p-10">

          <div className="flex justify-between items-start mb-6">

            <div>
              <h2 className="font-extended font-bold text-3xl md:text-5xl leading-none tracking-tighter">
                A VISION
                <span className="text-blue-400 text-lg align-super ml-1">
                  ©
                </span>
              </h2>
            </div>

            <div className="text-right font-pixel text-[10px] tracking-widest text-white/50 leading-relaxed">
              A VISION
              <br />
              A TARGET
            </div>
          </div>

          <div className="flex gap-8">

            {/* Left column */}
            <div className="flex-1">
              <p className="font-pixel text-[10px] md:text-xs leading-relaxed text-white/60 uppercase tracking-wider">
                MY OBJECTIVE IS TO BRING TOGETHER
                <br />
                THE BRIGHTEST TALENTS, FOSTER
                <br />
                A SPIRIT OF COLLABORATION AND
                <br />
                INNOVATION, AND CREATE AI SOLUTIONS
                <br />
                THAT ARE NOT ONLY EFFECTIVE,
                <br />
                BUT ALSO REVOLUTIONARY.
              </p>
            </div>

            {/* Right column */}
            <div className="flex-1">
              <p className="font-pixel text-[10px] md:text-xs leading-relaxed text-white/60 uppercase tracking-wider mb-4">
                ENGINEERING INTELLIGENCE, A SYNERGY
                BETWEEN CODE AND CREATIVITY,
                AND THE DYNAMIC ENERGY OF
                FULL-STACK DEVELOPMENT.
              </p>

              <p className="font-pixel text-[10px] md:text-xs leading-relaxed text-white/60 uppercase tracking-wider">
                THIS IS NOT JUST A PORTFOLIO.
                IT'S AN ECOSYSTEM. DESIGNED TO
                BRING TOGETHER THE BEST OF
                AI, DATA, AND WEB ENGINEERING.
              </p>
            </div>
          </div>

          {/* Bottom row with icons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">

            <div className="flex gap-3">

              <div className="w-8 h-8 border border-white/20 flex items-center justify-center">
                <div className="w-4 h-4 border border-white/40 rounded-full" />
              </div>

              <div className="w-8 h-8 border border-white/20 flex items-center justify-center">
                <div className="w-4 h-4 grid grid-cols-2 grid-rows-2 gap-[1px]">
                  <div className="bg-white/40" />
                  <div className="bg-white/40" />
                  <div className="bg-white/40" />
                  <div className="bg-white/40" />
                </div>
              </div>

            </div>

            {/* Striped decoration */}
            <div className="flex gap-[2px]">

              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[3px] h-6"
                  style={{
                    background:
                      i % 2 === 0
                        ? 'rgba(255,255,255,0.3)'
                        : 'transparent',
                  }}
                />
              ))}

            </div>

            <div className="font-pixel text-white/30 text-lg">
              ✳
            </div>

          </div>
        </div>
      </motion.div>

      {/* Section label */}
      <div className="absolute top-8 left-8 font-pixel text-[10px] tracking-widest text-black/30 uppercase">
        02 // VISION
      </div>
    </section>
  );
};

export default VisionSection;