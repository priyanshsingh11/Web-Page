import { motion } from 'framer-motion';

const projects = [
  {
    id: 'rag',
    title: 'ADVANCED RAG',
    description: 'Advanced Retrieval-Augmented Generation system with intelligent retrieval pipelines and optimized contextual response generation.',
    tech: ['LANGCHAIN', 'RAG', 'VECTOR_DB', 'LLMS', 'PYTHON']
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
    title: 'VIRTUAL_PANDIT',
    description: 'AI-powered virtual assistant designed for intelligent conversations, contextual responses, and real-time interaction.',
    tech: ['PYTHON', 'LLMS', 'LANGCHAIN', 'FASTAPI', 'STREAMLIT']
  },
  {
    id: 'compliance-monitor',
    title: 'AI_COMPLIANCE_MONITORING_AGENT',
    description: 'AI-powered monitoring agent for detecting compliance risks, policy violations, and automated regulatory analysis.',
    tech: ['LANGCHAIN', 'LLMS', 'FASTAPI', 'PYTHON', 'RAG']
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto">

        <h2 className="font-extended text-3xl md:text-4xl text-center mb-16 text-[#853A17] tracking-tight uppercase">
          WHERE DID MY SKILLS GO?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="border-[1px] border-[#853A17] p-8 bg-black/85 md flex flex-col items-center text-center group transition-all shadow-[6px_6px_0_0_#000]"
            >
              <h3 className="font-extended text-lg md:text-xl text-[#853A17] mb-6 leading-tight group-hover:text-white transition-colors">
                {project.title}
              </h3>

              <p className="font-pixel text-xs md:text-sm text-white/60 mb-8 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {project.tech.map(t => (
                  <span key={t} className="text-[9px] font-pixel text-[#853A17]/70 border-[1px] border-[#853A17]/30 px-2 py-0.5 group-hover:border-[#853A17] group-hover:text-[#853A17] transition-colors">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <a
                  href={`https://github.com/priyanshsingh11/${project.id === 'trustgraph' ? 'AI-for-bharat' : project.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-[#853A17] text-white font-pixel text-[10px] tracking-widest hover:bg-white hover:text-black transition-all shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                >
                  VIEW DETAILS
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/priyanshsingh11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#1a1a1a] border-[1px] border-[#853A17] font-pixel text-[10px] tracking-widest text-white/70 hover:bg-[#853A17] hover:text-white transition-all shadow-[6px_6px_0_0_#000]"
          >
            SHOW ALL PROJECTS (12)
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;