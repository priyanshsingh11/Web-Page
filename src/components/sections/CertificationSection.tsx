import { motion } from 'framer-motion';
import { Award, FileText } from 'lucide-react';

const certifications = [
  {
    title: 'AWS CERTIFIED MACHINE LEARNING ENGINEER',
    issuer: 'AMAZON WEB SERVICES',
    date: '2026',
    type: 'CERTIFICATION',
  },
  {
    title: 'MACHINE LEARNING SPECIALIZATION',
    issuer: 'COURSERA // DEEPLEARNING.AI',
    date: '2024',
    type: 'SPECIALIZATION',
  },
  {
    title: 'ADVANCED LEARNING ALGORITHMS',
    issuer: 'STANFORD ONLINE // COURSERA',
    date: '2024',
    type: 'COURSE',
  }
];

const CertificationSection = () => {
  return (
    <section id="certifications" className="py-16 md:py-24 px-4 md:px-16 bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto border-[2px] border-[#853A17] bg-black/85 backdrop-blur-md text-white shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000]">

        {/* Header Bar */}
        <div className="border-b-[2px] border-[#853A17] bg-black/90 text-white p-2 flex justify-between items-center">
          <div className="flex gap-2 items-center font-pixel text-[10px] md:text-xs tracking-widest px-2">
            <FileText size={14} className="text-[#853A17]" />
            <span>ACHIEVEMENTS_LOG.DAT</span>
          </div>
          <div className="flex gap-1 pr-2">
            <div className="w-2 h-2 border border-[#853A17]"></div>
            <div className="w-2 h-2 border border-[#853A17]"></div>
          </div>
        </div>

        <div className="p-6 md:p-12">
          <h2 className="font-extended text-2xl md:text-3xl border-b-[2px] border-[#853A17] pb-4 mb-10 text-white uppercase tracking-tight">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-[1px] border-[#853A17] p-6 md:p-8 bg-white/5 flex flex-col items-center text-center group hover:bg-[#853A17]/10 transition-all shadow-[6px_6px_0_0_#000] h-full"
              >
                <div className="font-pixel text-[10px] text-[#853A17] tracking-widest mb-4 uppercase">
                  {cert.type}
                </div>

                <div className="w-10 h-10 md:w-12 md:h-12 border-[1px] border-[#853A17] flex items-center justify-center text-[#853A17] group-hover:bg-[#853A17] group-hover:text-white transition-colors mb-6">
                  <Award size={20} />
                </div>

                <h3 className="font-extended text-sm md:text-base text-white mb-6 leading-tight group-hover:text-[#853A17] transition-colors uppercase">
                  {cert.title}
                </h3>

                <div className="mt-auto pt-4 border-t border-[#853A17]/20 w-full">
                  <p className="font-pixel text-[9px] md:text-[10px] text-white/60 tracking-widest uppercase mb-2">
                    {cert.issuer}
                  </p>
                  <p className="font-pixel text-[9px] md:text-[10px] text-[#853A17] font-bold">
                    COMPLETED // {cert.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-4 p-4 border-t border-[#853A17]/10 bg-black/40 text-center">
          <p className="font-pixel text-[8px] text-[#853A17]/30 tracking-[0.4em] uppercase">
            LOG_ENTRY_VALIDATED // SESSION_2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
