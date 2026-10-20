import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Globe,
  Smartphone,
  Server,
  Brain,
  BarChart3,
  Cloud,
  Code2,
  Workflow,
  Sparkles,
  Bot,
  Database,
  Users,
  type LucideIcon,
} from 'lucide-react';

interface SkillCard {
  id: string;
  title: string;
  rank: string;
  suit: string;
  icon: LucideIcon;
  skills: string[];
}

const skillCards: SkillCard[] = [
  {
    id: 'web',
    title: 'WEB',
    rank: 'A',
    suit: '♠',
    icon: Globe,
    skills: ['REACT.JS', 'NEXT.JS (SSR, ISR)', 'VITE', 'FRAMER MOTION', 'TAILWIND CSS', 'EJS', 'HTML5'],
  },
  {
    id: 'mobile',
    title: 'MOBILE',
    rank: 'Q',
    suit: '♥',
    icon: Smartphone,
    skills: ['REACT NATIVE', 'EXPO', 'FLUTTER', 'DART', 'FIREBASE', 'ANDROID STUDIO'],
  },
  {
    id: 'backend',
    title: 'BACKEND',
    rank: 'K',
    suit: '♦',
    icon: Server,
    skills: [
      'NODE.JS', 'EXPRESS.JS', 'FLASK', 'FASTAPI',
      'REST APIS', 'WEBSOCKETS', 'JWT', 'RBAC',
    ],
  },
  {
    id: 'databases',
    title: 'DATABASES',
    rank: 'K',
    suit: '♣',
    icon: Database,
    skills: [
      'MONGODB', 'POSTGRESQL', 'MYSQL', 'SQLITE', 'SUPABASE', 'REDIS',
      'CHROMADB', 'DB INDEXING', 'AGGREGATION PIPELINES',
    ],
  },
  {
    id: 'ai',
    title: 'AI & ML',
    rank: 'A',
    suit: '♥',
    icon: Brain,
    skills: ['PYTORCH', 'TENSORFLOW', 'KERAS', 'SCIKIT-LEARN', 'TRANSFORMERS', 'HUGGING FACE'],
  },
  {
    id: 'genai',
    title: 'GENERATIVE AI',
    rank: 'A',
    suit: '♦',
    icon: Sparkles,
    skills: [
      'LLM APPLICATIONS', 'RAG', 'LANGCHAIN', 'OLLAMA',
      'LLM EVALUATION', 'PROMPT-INJECTION DEFENSE',
    ],
  },
  {
    id: 'agentic',
    title: 'AGENTIC AI',
    rank: 'A',
    suit: '♠',
    icon: Bot,
    skills: ['AI AGENTS', 'LANGGRAPH', 'MCP', 'N8N'],
  },
  {
    id: 'data',
    title: 'DATA',
    rank: 'J',
    suit: '♣',
    icon: BarChart3,
    skills: ['NUMPY', 'PANDAS', 'MATPLOTLIB', 'POWER BI', 'EXCEL', 'TABLEAU'],
  },
  {
    id: 'cloud',
    title: 'CLOUD & DEVOPS',
    rank: 'K',
    suit: '♠',
    icon: Cloud,
    skills: [
      'DOCKER', 'AWS', 'GCP (CLOUD RUN)', 'GITHUB ACTIONS', 'CI/CD',
      'VERCEL', 'STREAMLIT', 'MLFLOW', 'DVC',
    ],
  },
  {
    id: 'tools',
    title: 'AUTOMATION & TOOLS',
    rank: 'A',
    suit: '♣',
    icon: Workflow,
    skills: [
      'PLAYWRIGHT', 'PUPPETEER', 'SELENIUM', 'SCRAPY', 'BEAUTIFULSOUP', 'N8N',
      'CRON JOBS', 'GIT', 'GITHUB', 'POSTMAN',
    ],
  },
  {
    id: 'languages',
    title: 'LANGUAGES & CS',
    rank: 'JOKER',
    suit: '★',
    icon: Code2,
    skills: [
      'PYTHON', 'JAVASCRIPT', 'TYPESCRIPT', 'C++', 'SQL', 'DART',
      'OOP', 'DSA', 'SYSTEM DESIGN', 'DBMS', 'OPERATING SYSTEMS',
    ],
  },
  {
    id: 'soft',
    title: 'SOFT SKILLS',
    rank: 'J',
    suit: '♦',
    icon: Users,
    skills: ['OWNERSHIP', 'REQUIREMENTS ANALYSIS', 'STAKEHOLDER COMMUNICATION', 'PROBLEM SOLVING'],
  },
];

const SkillsSection = () => {
  const [flipped, setFlipped] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

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

        <div className="p-4 md:p-12">

          <h2 className="font-extended text-xl md:text-3xl border-b-[2px] border-[#853A17] pb-4 mb-2 text-white uppercase tracking-tight">
            Inventory Deck
          </h2>
          <p className="font-pixel text-[9px] md:text-xs tracking-widest text-white/60 mb-8 md:mb-10">
            CLICK A CARD TO FLIP IT AND REVEAL ITS SKILLS
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 max-w-lg lg:max-w-none mx-auto gap-4 md:gap-6">
            {skillCards.map((card) => {
              const Icon = card.icon;
              const isFlipped = flipped.has(card.id);
              const isRed = card.suit === '♥' || card.suit === '♦';
              const cornerColor = isRed ? 'text-[#e0623a]' : 'text-white';
              return (
                <motion.div
                  key={card.id}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isFlipped}
                  aria-label={`${card.title} card, ${isFlipped ? 'showing skills' : 'click to reveal skills'}`}
                  onClick={() => toggle(card.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggle(card.id);
                    }
                  }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="relative aspect-[5/7] lg:aspect-[5/7] w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white [perspective:1000px]"
                >
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="absolute inset-0"
                  >
                    {/* Front */}
                    <div className="absolute inset-0 [backface-visibility:hidden] bg-[#4d2312] border-[2px] border-[#853A17] text-white p-2 md:p-3 flex flex-col justify-between shadow-[4px_4px_0_0_#000] md:shadow-[6px_6px_0_0_#000]">
                      <div className={`font-pixel leading-none text-xs md:text-base ${cornerColor}`}>
                        <div>{card.rank}</div>
                        <div>{card.suit}</div>
                      </div>

                      <div className="flex flex-col items-center gap-2 md:gap-3">
                        <Icon className="w-8 h-8 md:w-14 md:h-14 text-[#c4622d]" strokeWidth={1.5} />
                        <span className="font-pixel text-[9px] md:text-xs tracking-widest text-center leading-tight">
                          {card.title}
                        </span>
                        <span className="font-pixel text-[8px] md:text-[10px] tracking-widest text-white/50">
                          {card.skills.length} SKILLS
                        </span>
                      </div>

                      <div className={`self-end rotate-180 font-pixel leading-none text-xs md:text-base ${cornerColor}`}>
                        <div>{card.rank}</div>
                        <div>{card.suit}</div>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#853A17] border-[2px] border-white text-white p-2 md:p-3 flex flex-col shadow-[4px_4px_0_0_#000] md:shadow-[6px_6px_0_0_#000]">
                      <div className="flex items-center gap-1.5 border-b border-white/40 pb-1.5 mb-2">
                        <Icon className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
                        <span className="font-pixel text-[9px] md:text-xs tracking-widest truncate">
                          {card.title}
                        </span>
                        <span className="ml-auto font-pixel text-[8px] md:text-[10px]">
                          {card.rank}{card.suit}
                        </span>
                      </div>
                      <div className={`flex-1 min-h-0 grid auto-rows-fr gap-1.5 ${card.skills.length <= 4 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                        {card.skills.map((skill, i) => (
                          <span
                            key={skill}
                            className={`px-1 flex items-center justify-center text-center leading-tight break-words text-[9px] md:text-[11px] border border-white/50 bg-black/30 font-pixel tracking-wider uppercase ${
                              card.skills.length > 4 && card.skills.length % 2 === 1 && i === card.skills.length - 1 ? 'col-span-2' : ''
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
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