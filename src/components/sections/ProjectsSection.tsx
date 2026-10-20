import { motion } from 'framer-motion';

const projects = [
  {
    id: 'rag',
    title: 'Advanced RAG',
    description: 'Advanced Retrieval-Augmented Generation system with intelligent retrieval pipelines and optimized contextual response generation.',
    tech: ['LangChain', 'Ollama', 'RAGAS', 'FastAPI', 'Qdrant']
  },
  {
    id: 'trustgraph',
    title: 'TrustGraph AI',
    description: 'Precision evaluation engine designed to automate government and corporate tender compliance using explainable AI.',
    tech: ['LLMs', 'Groq', 'FastAPI', 'RAG', 'React']
  },
  {
    id: 'agentforge',
    title: 'AgentForge',
    description: 'Autonomous AI workflow system for orchestrating intelligent agents and scalable task execution.',
    tech: ['LangGraph', 'Next.js', 'FastAPI', 'Redis']
  },
  {
    id: 'Lumen AI',
    title: 'Lumen AI',
    description: 'AI customer support orchestration system using LLMs, RAG, Supabase, ChromaDB, and deterministic workflow routing.',
    tech: ['LLMs', 'RAG', 'Supabase', 'HITL', 'Ollama']
  },
  {
    id: 'winkwear',
    title: 'Wink & Wear',
    description: 'Modern fashion e-commerce platform with a premium dark aesthetic and responsive shopping experience.',
    tech: ['MERN', 'AWS', 'Render', 'Google Gemini Kit']
  },
  {
    id: 'virtual-pandit',
    title: 'Virtual Pandit',
    description: 'AI-powered virtual assistant designed for intelligent conversations, contextual responses, and real-time interaction.',
    tech: ['Next.js', 'TypeScript', 'LangChain', 'FastAPI']
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 md:py-20 px-4 md:px-16 bg-transparent">
      <div className="max-w-5xl mx-auto">

        <h2 className="font-extended text-xl md:text-3xl text-center mb-10 md:mb-16 text-[#FF5A2E] tracking-tight">
          Where Did My Skills Go?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="border-[1px] border-[#FF5A2E] p-6 md:p-8 bg-black/85 flex flex-col items-center text-center group transition-all shadow-[4px_4px_0_0_#000] md:shadow-[6px_6px_0_0_#000]"
            >
              <h3 className="font-extended text-base md:text-xl text-[#FF5A2E] mb-4 md:mb-6 leading-tight group-hover:text-white transition-colors">
                {project.title}
              </h3>

              <p className="font-body text-base md:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-6 md:mb-8">
                {project.tech.map(t => (
                  <span key={t} className="text-sm md:text-base font-body text-[#FF5A2E]/70 border-[1px] border-[#FF5A2E]/30 px-1.5 py-0.5 group-hover:border-[#FF5A2E] group-hover:text-[#FF5A2E] transition-colors">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto w-full flex justify-center">
                <a
                  href={`https://github.com/priyanshsingh11/${project.id === 'trustgraph' ? 'AI-for-bharat' : project.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full px-4 py-2.5 bg-[#FF5A2E] text-white font-body text-base md:text-lg tracking-wider hover:bg-white hover:text-black transition-all shadow-[3px_3px_0_0_#000] md:shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] text-center"
                >
                  View Details
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
            className="inline-block w-full sm:w-auto px-8 py-3 bg-[#1a1a1a] border-[1px] border-[#FF5A2E] font-body text-base md:text-lg tracking-wider text-white/90 hover:bg-[#FF5A2E] hover:text-white transition-all shadow-[4px_4px_0_0_#000] md:shadow-[6px_6px_0_0_#000]"
          >
            Show All Projects (30+)
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;