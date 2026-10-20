import { motion } from 'framer-motion';
import { Award, FileText } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Certified Machine Learning - Associate',
    issuer: 'Amazon Web Services',
    date: '2026',
    type: 'Associate',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera // DeepLearning.AI',
    date: '2024',
    type: 'Specialization',
  },
  {
    title: 'Claude Certified Architect - Foundations',
    issuer: 'Anthropic Education',
    date: '2026',
    type: 'Certification',
  },
];

const CertificationSection = () => {
  return (
    <section id="certifications" className="py-16 md:py-24 px-4 md:px-16 bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto border-[2px] border-[#CF492C] bg-black/85 backdrop-blur-md text-white shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000]">

        {/* Header Bar */}
        <div className="border-b-[2px] border-[#CF492C] bg-black/90 text-white p-2 flex justify-between items-center">
          <div className="flex gap-2 items-center font-pixel text-[10px] md:text-xs tracking-widest px-2">
            <FileText size={14} className="text-[#CF492C]" />
            <span>ACHIEVEMENTS_LOG.DAT</span>
          </div>
          <div className="flex gap-1 pr-2">
            <div className="w-2 h-2 border border-[#CF492C]"></div>
            <div className="w-2 h-2 border border-[#CF492C]"></div>
          </div>
        </div>

        <div className="p-4 md:p-12">
          <h2 className="font-extended text-xl md:text-3xl border-b-[2px] border-[#CF492C] pb-4 mb-8 md:mb-10 text-white uppercase tracking-tight">
            Certifications
          </h2>

          <div className="flex flex-col gap-5 md:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-[1px] border-[#CF492C] p-4 md:p-6 bg-white/5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 group hover:bg-[#CF492C]/10 transition-all shadow-[6px_6px_0_0_#000]"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 border-[1px] border-[#CF492C] flex items-center justify-center text-[#CF492C] group-hover:bg-[#CF492C] group-hover:text-white transition-colors">
                  <Award size={20} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="font-body text-base md:text-lg text-[#CF492C] mb-1">
                    {cert.type}
                  </div>
                  <h3 className="font-extended text-xs md:text-sm text-white leading-snug md:whitespace-nowrap group-hover:text-[#CF492C] transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <div className="md:text-right flex-shrink-0 border-t md:border-t-0 border-[#CF492C]/20 pt-3 md:pt-0">
                  <p className="font-body text-base md:text-xl text-white/70">
                    {cert.issuer}
                  </p>
                  <p className="font-body text-base md:text-xl text-[#CF492C]">
                    Completed // {cert.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-4 p-4 border-t border-[#CF492C]/10 bg-black/40 text-center">
          <p className="font-pixel text-[8px] text-[#CF492C]/30 tracking-[0.4em] uppercase">
            LOG_ENTRY_VALIDATED // SESSION_2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
