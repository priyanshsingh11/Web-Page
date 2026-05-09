import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'AWS CERTIFIED MACHINE LEARNING ENGINEER',
    issuer: 'AMAZON WEB SERVICES',
    date: '2026',
    id: 'ASSOCIATE',
    link: '#'
  },
  {
    title: 'MACHINE LEARNING SPECIALIZATION',
    issuer: 'COURSERA // DEEPLEARNING.AI',
    date: '2024',
    id: 'SPECIALIZATION',
    link: '#'
  },
  {
    title: 'ADVANCED LEARNING ALGORITHMS',
    issuer: 'STANFORD ONLINE // COURSERA',
    date: '2024',
    id: 'COURSE',
    link: '#'
  }
];

const CertificationSection = () => {
  return (
    <section id="certifications" className="py-20 px-4 md:px-16 bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto border-[2px] border-[#853A17] bg-black/85 backdrop-blur-md text-white shadow-[8px_8px_0_0_#000]">

        {/* Header */}
        <div className="border-b-[2px] border-[#853A17] bg-black/90 text-white p-2 flex justify-between items-center">
          <div className="flex gap-2 items-center font-pixel text-xs tracking-widest px-2">
            <Award size={14} className="text-[#853A17]" />
            <span>ACHIEVEMENTS_LOG.DAT</span>
          </div>
          <div className="flex gap-1 pr-2">
            <div className="w-2 h-2 border border-[#853A17]"></div>
            <div className="w-2 h-2 border border-[#853A17]"></div>
          </div>
        </div>

        <div className="p-6 md:p-12">
          <h2 className="font-extended text-3xl md:text-4xl border-b-[2px] border-[#853A17] pb-4 mb-10 text-white uppercase tracking-tight">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-[1px] border-[#853A17] p-6 bg-white/5 backdrop-blur-sm group hover:bg-[#853A17]/10 transition-all cursor-default"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="font-pixel text-[10px] text-[#853A17] tracking-widest">
                    {cert.id}
                  </div>
                  <div className="w-8 h-8 border-[1px] border-[#853A17] flex items-center justify-center text-[#853A17] group-hover:bg-[#853A17] group-hover:text-white transition-colors">
                    <Award size={16} />
                  </div>
                </div>

                <h3 className="font-extended text-xl text-white mb-3 group-hover:text-[#853A17] transition-colors leading-tight">
                  {cert.title}
                </h3>

                <p className="font-pixel text-[11px] text-white/60 tracking-widest">
                  ISSUED BY: {cert.issuer} // {cert.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
