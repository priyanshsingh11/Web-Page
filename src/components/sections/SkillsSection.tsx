import { Shield } from 'lucide-react';

const skillCategories = [
  {
    id: 'programming',
    title: 'PROGRAMMING',
    skills: [
      'PYTHON',
      'C++',
      'JAVASCRIPT',
      'TYPESCRIPT',
      'HTML5',
      'SQL',
    ],
  },
  {
    id: 'frontend',
    title: 'FRONTEND',
    skills: [
      'REACT',
      'NEXT.JS',
      'VITE',
      'FRAMER MOTION',
      'TAILWINDCSS',
      'EJS',
    ],
  },
  {
    id: 'backend',
    title: 'BACKEND',
    skills: [
      'NODE.JS',
      'EXPRESS.JS',
      'FASTAPI',
      'WEBSOCKETS',
      'JWT',
    ],
  },
  {
    id: 'databases',
    title: 'DATABASES',
    skills: [
      'MYSQL',
      'MONGODB',
      'POSTGRESQL',
      'SQLITE',
    ],
  },
  {
    id: 'ai_ml',
    title: 'AI & ML',
    skills: [
      'PYTORCH',
      'TENSORFLOW',
      'KERAS',
      'SCIKIT-LEARN',
      'TRANSFORMERS',
      'HUGGING FACE',
    ],
  },
  {
    id: 'genai',
    title: 'GENERATIVE AI',
    skills: [
      'LANGCHAIN',
      'LANGGRAPH',
      'RAG',
      'OLLAMA',
    ],
  },
  {
    id: 'data',
    title: 'DATA ANALYTICS',
    skills: [
      'NUMPY',
      'PANDAS',
      'MATPLOTLIB',
      'POWER BI',
      'EXCEL',
      'TABLEAU',
    ],
  },
  {
    id: 'cloud_mlops',
    title: 'CLOUD & MLOPS',
    skills: [
      'DOCKER',
      'AWS',
      'VERCEL',
      'STREAMLIT',
      'MLFLOW',
      'DVC',
    ],
  },
  {
    id: 'tools',
    title: 'TOOLS',
    skills: [
      'GIT',
      'GITHUB',
      'REDIS',
      'POSTMAN',
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 md:py-20 px-3 md:px-16 bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto border-[2px] border-[#853A17] bg-black/85 backdrop-blur-md text-white shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000]">

        {/* Header */}
        <div className="border-b-[2px] border-[#853A17] bg-black/90 text-white p-2 flex justify-between items-center">
          <div className="flex gap-2 items-center font-pixel text-[10px] md:text-xs tracking-widest px-2">
            <Shield size={14} className="text-[#853A17]" />
            <span>INVENTORY_DECK.DAT</span>
          </div>
          <div className="flex gap-1 pr-2">
            <div className="w-2 h-2 border border-[#853A17]"></div>
            <div className="w-2 h-2 border border-[#853A17]"></div>
          </div>
        </div>

        <div className="p-5 md:p-12">

          <h2 className="font-extended text-xl md:text-3xl border-b-[2px] border-[#853A17] pb-4 mb-8 md:mb-10 text-white uppercase tracking-tight">
            Inventory Deck
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

            {skillCategories.map((category) => (
              <div
                key={category.id}
                className="border-[1px] border-[#853A17] p-5 md:p-6 bg-white/5 hover:bg-white/[0.08] transition-colors cursor-default group flex flex-col relative overflow-hidden"
              >

                <div className="border-b-[1px] border-[#853A17]/30 pb-3 mb-4 md:mb-5 flex justify-between items-center">
                  <h3 className="font-pixel text-sm md:text-base tracking-widest text-[#853A17] group-hover:text-white transition-colors">
                    {category.title}
                  </h3>
                  <div className="w-2 h-2 bg-[#853A17]/20 group-hover:bg-[#853A17] transition-colors"></div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-2 text-[9px] md:text-xs border-[1px] border-[#853A17]/40 bg-black/40 font-pixel tracking-widest uppercase transition-all duration-200 flex items-center justify-center text-center cursor-crosshair hover:bg-[#853A17] hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Marquee */}
        <div className="mt-4 border-t-[2px] border-[#853A17] bg-[#853A17]/5 py-4 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="font-pixel text-[10px] md:text-sm tracking-[0.2em] text-[#853A17] mx-6 md:mx-10 flex items-center gap-4">
                <span className="opacity-50">•</span>
                OPEN TO INTERNSHIPS, COLLABORATIONS, AND CONTINUOUS LEARNING
                <span className="opacity-50">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;