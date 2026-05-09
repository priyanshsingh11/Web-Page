import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto">
        
        <h2 className="font-extended text-3xl md:text-4xl text-center mb-16 text-[#853A17] tracking-tight uppercase">
          ACHIEVEMENTS & LOGS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border-[1px] border-[#853A17] p-8 bg-black/85 backdrop-blur-md flex flex-col items-center text-center group hover:bg-[#853A17]/10 transition-all shadow-[6px_6px_0_0_#000] h-full"
            >
              <div className="font-pixel text-[10px] text-[#853A17] tracking-widest mb-4">
                {cert.id}
              </div>

              <div className="w-12 h-12 border-[1px] border-[#853A17] flex items-center justify-center text-[#853A17] group-hover:bg-[#853A17] group-hover:text-white transition-colors mb-6">
                <Award size={20} />
              </div>

              <h3 className="font-extended text-lg md:text-xl text-white mb-6 leading-tight group-hover:text-[#853A17] transition-colors uppercase">
                {cert.title}
              </h3>

              <div className="mt-auto pt-4 border-t border-[#853A17]/20 w-full">
                <p className="font-pixel text-[10px] text-white/60 tracking-widest uppercase">
                  {cert.issuer}
                </p>
                <p className="font-pixel text-[10px] text-[#853A17]/70 mt-2">
                  COMPLETED // {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
