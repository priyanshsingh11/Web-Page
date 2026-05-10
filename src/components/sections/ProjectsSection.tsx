import { motion } from 'framer-motion';

const projects = [
  {
    id: 'rag',
    title: 'ADVANCED RAG',
    description: 'Advanced Retrieval-Augmented Generation system with intelligent retrieval pipelines and optimized contextual response generation.',
    tech: ['LANGCHAIN', 'OLLAMA', 'RAGAS', 'FASTAPI', 'QDRANT']
  },
  {
    id: 'trustgraph',
    title: 'TRUSTGRAPH AI',
    description: 'Precision evaluation engine designed to automate government and corporate tender compliance using explainable AI.',
    tech: ['LLMS', 'GROQ', 'FASTAPI', 'RAG', 'REACT']
  },
  {
    id: 'agentforge',
    title: 'AGENTFORGE',
    description: 'Autonomous AI workflow system for orchestrating intelligent agents and scalable task execution.',
    tech: ['LANGGRAPH', 'NEXTJS', 'FASTAPI', 'REDIS']
  },
  {
    id: 'trailflow',
    title: 'TRAILFLOW',
    description: 'Autonomous AI system streamlining clinical trial workflows and optimizing patient recruitment processes.',
    tech: ['LANGCHAIN', 'GROQ', 'RAG', 'HEALTHCARE_AI']
  },
  {
    id: 'winkwear',
    title: 'WINK & WEAR',
    description: 'Modern fashion e-commerce platform with a premium dark aesthetic and responsive shopping experience.',
    tech: ['MERN', 'AWS', 'RENDER', 'GOOGLE GEMINI KIT']
  },
  {
    id: 'virtual-pandit',
    title: 'VIRTUAL PANDIT',
    description: 'AI-powered virtual assistant designed for intelligent conversations, contextual responses, and real-time interaction.',
    tech: ['NEXTJS', 'TYPESCRIPT', 'LANGCHAIN', 'FASTAPI']
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 md:py-20 px-4 md:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto">

        <h2 className="font-extended text-xl md:text-3xl text-center mb-10 md:mb-16 text-[#853A17] tracking-tight uppercase">
          WHERE DID MY SKILLS GO?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="border-[1px] border-[#853A17] p-6 md:p-8 bg-black/85 flex flex-col items-center text-center group transition-all shadow-[4px_4px_0_0_#000] md:shadow-[6px_6px_0_0_#000]"
            >
              <h3 className="font-extended text-base md:text-xl text-[#853A17] mb-4 md:mb-6 leading-tight group-hover:text-white transition-colors">
                {project.title}
              </h3>

              <p className="font-pixel text-[10px] md:text-sm text-white/60 mb-6 md:mb-8 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-6 md:mb-8">
                {project.tech.map(t => (
                  <span key={t} className="text-[8px] md:text-[9px] font-pixel text-[#853A17]/70 border-[1px] border-[#853A17]/30 px-1.5 py-0.5 group-hover:border-[#853A17] group-hover:text-[#853A17] transition-colors">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto w-full">
                <a
                  href={`https://github.com/priyanshsingh11/${project.id === 'trustgraph' ? 'AI-for-bharat' : project.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto px-5 py-2 bg-[#853A17] text-white font-pixel text-[9px] md:text-[10px] tracking-widest hover:bg-white hover:text-black transition-all shadow-[3px_3px_0_0_#000] md:shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
                >
                  VIEW DETAILS
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <a
            href="https://github.com/priyanshsingh11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto px-8 py-3 bg-[#1a1a1a] border-[1px] border-[#853A17] font-pixel text-[9px] md:text-[10px] tracking-widest text-white/70 hover:bg-[#853A17] hover:text-white transition-all shadow-[4px_4px_0_0_#000] md:shadow-[6px_6px_0_0_#000]"
          >
            SHOW ALL PROJECTS (30+)
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;