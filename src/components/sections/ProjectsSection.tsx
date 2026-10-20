import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const mono = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
const MAX_TAGS = 3;

interface Project {
  repo: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  more: number;
}

const projects: Project[] = [
  {
    repo: 'Advanced-RAG',
    title: 'Advanced RAG',
    category: 'AI & Retrieval',
    description: 'High-precision, local-first RAG pipeline using hybrid search (semantic + keyword) and cross-encoder reranking for accurate, private answers over large document libraries.',
    tech: ['Python', 'FastAPI', 'Qdrant', 'Ollama', 'Groq', 'Docker'],
    more: 4,
  },
  {
    repo: 'Lumen',
    title: 'Lumen AI',
    category: 'Generative AI & Support',
    description: 'Production-style AI customer support orchestration with LLMs, RAG, ChromaDB and deterministic workflow routing for email classification and grounded responses.',
    tech: ['Python', 'FastAPI', 'ChromaDB', 'Supabase', 'Ollama', 'Next.js'],
    more: 2,
  },
  {
    repo: 'TrailFlow',
    title: 'TrailFlow',
    category: 'AI & Healthcare Analytics',
    description: 'Analyzes clinical trial data from multiple sources to flag data quality, operational and safety issues, with clear insights and recommended actions.',
    tech: ['Python', 'FastAPI', 'Streamlit', 'React'],
    more: 6,
  },
  {
    repo: 'winkwear',
    title: 'Wink & Wear',
    category: 'Full Stack & E-commerce',
    description: 'Modern fashion e-commerce platform with a premium dark aesthetic and a responsive shopping experience.',
    tech: ['MERN', 'AWS', 'Render', 'Google Gemini Kit'],
    more: 4,
  },
  {
    repo: 'AgentForge',
    title: 'AgentForge',
    category: 'Agentic AI & Automation',
    description: 'Autonomous AI engine that delivers deep competitor insights and a strategic roadmap for rapid business growth.',
    tech: ['LangGraph', 'Next.js', 'FastAPI', 'Groq', 'Redis', 'ChromaDB'],
    more: 2,
  },
  {
    repo: 'virtual_pandit',
    title: 'Virtual Pandit',
    category: 'Conversational AI',
    description: 'Spiritual intelligence platform that merges scriptures, mantra science, Vedic astrology and AI-driven wisdom into a scalable digital experience.',
    tech: ['Next.js', 'TypeScript', 'LangChain', 'Groq', 'MongoDB', 'ChromaDB'],
    more: 6,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 md:py-20 px-4 md:px-16 bg-transparent">
      <div className="max-w-5xl mx-auto">

        <h2 className="font-extended text-xl md:text-3xl text-center mb-10 md:mb-16 text-[#FF5A2E] tracking-tight uppercase">
          Where Did My Skills Go?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => {
            const shown = project.tech.slice(0, MAX_TAGS);
            const extra = project.tech.length - shown.length + project.more;
            return (
              <motion.div
                key={project.repo}
                className="aspect-square overflow-hidden border-[2px] border-[#FF5A2E] bg-[#0D0B0A] p-4 flex flex-col shadow-[4px_4px_0_0_#000] md:shadow-[6px_6px_0_0_#000]"
                style={{ fontFamily: mono }}
              >
                <div className="pb-3 border-b border-[#FF5A2E]/40">
                  <span className="inline-block border border-[#FF5A2E] px-2 py-0.5 text-[11px] text-[#FF5A2E]">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-extended text-sm md:text-base text-[#FF5A2E] uppercase leading-tight mt-3 mb-3">
                  {project.title}
                </h3>

                <div className="flex flex-wrap items-center gap-1.5 mb-3">
                  {shown.map((t) => (
                    <span key={t} className="border border-[#FF5A2E]/60 px-2 py-0.5 text-[11px] text-white">
                      {t}
                    </span>
                  ))}
                  {extra > 0 && <span className="text-[11px] text-white/60">+{extra}</span>}
                </div>

                <p className="text-[12px] leading-snug text-white/90 mb-3 line-clamp-4">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <a
                    href={`https://github.com/priyanshsingh11/${project.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF5A2E] border-2 border-dashed border-black/40 text-white text-[13px] font-bold shadow-[2px_2px_0_0_#000] hover:bg-white hover:text-black transition-colors"
                  >
                    GitHub <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <a
            href="https://github.com/priyanshsingh11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto px-8 py-3 bg-[#1a1a1a] border-[2px] border-dashed border-[#FF5A2E]/70 text-white/90 text-sm hover:bg-[#FF5A2E] hover:text-white transition-colors shadow-[4px_4px_0_0_#000]"
            style={{ fontFamily: mono }}
          >
            Show all projects (30+)
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
