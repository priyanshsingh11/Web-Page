import { useState } from 'react';
import { motion } from 'framer-motion';
import PixelCardArt from '@/components/ui/PixelCardArt';
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
    title: 'Web',
    rank: 'A',
    suit: '♠',
    icon: Globe,
    skills: ['React.js', 'Next.js (SSR, ISR)', 'Vite', 'Framer Motion', 'Tailwind CSS', 'EJS', 'HTML5'],
  },
  {
    id: 'ai',
    title: 'AI & ML',
    rank: 'A',
    suit: '♠',
    icon: Brain,
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'Transformers', 'Hugging Face'],
  },
  {
    id: 'genai',
    title: 'Generative AI',
    rank: 'A',
    suit: '♠',
    icon: Sparkles,
    skills: [
      'LLM Applications', 'RAG', 'LangChain', 'Ollama',
      'LLM Evaluation', 'Prompt-Injection Defense',
    ],
  },
  {
    id: 'agentic',
    title: 'Agentic AI',
    rank: 'A',
    suit: '♠',
    icon: Bot,
    skills: ['AI Agents', 'LangGraph', 'MCP', 'N8N'],
  },
  {
    id: 'backend',
    title: 'Backend',
    rank: 'K',
    suit: '♦',
    icon: Server,
    skills: [
      'Node.js', 'Express.js', 'Flask', 'FastAPI',
      'REST APIs', 'WebSockets', 'JWT', 'RBAC',
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    rank: 'K',
    suit: '♣',
    icon: Database,
    skills: [
      'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Supabase', 'Redis',
      'ChromaDB', 'DB Indexing', 'Aggregation Pipelines',
    ],
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    rank: 'K',
    suit: '♥',
    icon: Users,
    skills: ['Ownership', 'Requirements Analysis', 'Stakeholder Communication', 'Problem Solving'],
  },
  {
    id: 'tools',
    title: 'Automation & Tools',
    rank: 'K',
    suit: '♠',
    icon: Workflow,
    skills: [
      'Playwright', 'Puppeteer', 'Selenium', 'Scrapy', 'BeautifulSoup', 'N8N',
      'Cron Jobs', 'Git', 'GitHub', 'Postman',
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    rank: 'Q',
    suit: '♥',
    icon: Smartphone,
    skills: ['React Native', 'Expo', 'Flutter', 'Dart', 'Firebase', 'Android Studio'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    rank: 'Q',
    suit: '♠',
    icon: Cloud,
    skills: [
      'Docker', 'AWS', 'GCP (Cloud Run)', 'GitHub Actions', 'CI/CD',
      'Vercel', 'Streamlit', 'MLflow', 'DVC',
    ],
  },
  {
    id: 'languages',
    title: 'Languages & CS',
    rank: 'J',
    suit: '♣',
    icon: Code2,
    skills: [
      'Python', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'Dart',
      'OOP', 'DSA', 'System Design', 'DBMS', 'Operating Systems',
    ],
  },
  {
    id: 'data',
    title: 'Data',
    rank: 'J',
    suit: '♦',
    icon: BarChart3,
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Power BI', 'Excel', 'Tableau'],
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
      <div className="relative z-10 max-w-5xl mx-auto border-[2px] border-[#FF5A2E] bg-black/85 backdrop-blur-md text-white shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000]">

        {/* Header */}
        <div className="border-b-[2px] border-[#FF5A2E] bg-black/90 text-white p-2 flex justify-between items-center">
          <div className="flex gap-2 items-center font-body text-sm md:text-lg tracking-wide px-2">
            <Shield size={14} className="text-[#FF5A2E]" />
            <span>inventory_deck.dat</span>
          </div>
          <div className="flex gap-1 pr-2">
            <div className="w-2 h-2 border border-[#FF5A2E]"></div>
            <div className="w-2 h-2 border border-[#FF5A2E]"></div>
          </div>
        </div>

        <div className="p-4 md:p-12">

          <h2 className="font-extended text-xl md:text-3xl border-b-[2px] border-[#FF5A2E] pb-4 mb-2 text-white uppercase tracking-tight">
            Inventory Deck
          </h2>
          <p className="font-body text-sm md:text-lg tracking-wide text-white/80 mb-8 md:mb-10">
            Click a card to flip it and reveal its skills
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 max-w-lg lg:max-w-none mx-auto gap-4 md:gap-6">
            {skillCards.map((card) => {
              const Icon = card.icon;
              const isFlipped = flipped.has(card.id);
              const isRed = card.suit === '♥' || card.suit === '♦';
              const cornerColor = isRed ? 'text-[#ff8a66]' : 'text-white';
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
                    <div className="absolute inset-0 [backface-visibility:hidden] bg-[#140a07] border-[2px] border-[#FF5A2E] text-white p-2 md:p-3 flex flex-col shadow-[4px_4px_0_0_#000] md:shadow-[6px_6px_0_0_#000]">
                      <div className={`flex items-center justify-between font-body leading-none text-base md:text-2xl mb-1.5 md:mb-2 ${cornerColor}`}>
                        <span>{card.rank}{card.suit}</span>
                        <span className="text-xs md:text-base text-white/70">{card.skills.length} skills</span>
                      </div>

                      <div className="w-full flex-1 min-h-0 border border-[#FF5A2E]/60 flex items-center justify-center p-9 md:p-14">
                        <PixelCardArt rank={card.rank} suit={card.suit} className="w-full h-full" />
                      </div>

                      <div className={`flex items-center justify-between mt-1.5 md:mt-2 font-body leading-none ${cornerColor}`}>
                        <span className="text-sm md:text-xl tracking-wide text-white leading-tight">{card.title}</span>
                        <span className="rotate-180 text-base md:text-2xl">{card.rank}{card.suit}</span>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#FF5A2E] border-[2px] border-white text-white p-2 md:p-3 flex flex-col shadow-[4px_4px_0_0_#000] md:shadow-[6px_6px_0_0_#000]">
                      <div className="flex items-center gap-1.5 border-b border-white/40 pb-1.5 mb-2">
                        <Icon className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
                        <span className="font-body text-sm md:text-lg tracking-wide truncate">
                          {card.title}
                        </span>
                        <span className="ml-auto font-body text-xs md:text-base">
                          {card.rank}{card.suit}
                        </span>
                      </div>
                      <div className={`flex-1 min-h-0 grid auto-rows-[minmax(0,1fr)] gap-1.5 ${card.skills.length <= 4 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                        {card.skills.map((skill, i) => (
                          <span
                            key={skill}
                            className={`min-h-0 min-w-0 overflow-hidden px-1 flex items-center justify-center text-center leading-[1.05] break-words border border-white/50 bg-black/30 font-body tracking-wide ${
                              card.skills.length >= 10
                                ? 'text-[13px] md:text-[15px]'
                                : card.skills.length >= 7
                                  ? 'text-sm md:text-[17px]'
                                  : 'text-base md:text-xl'
                            } ${
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
        <div className="mt-4 border-t-[2px] border-[#FF5A2E] bg-[#FF5A2E]/5 py-4 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="font-body text-sm md:text-xl tracking-wide text-[#FF5A2E] mx-6 md:mx-10 flex items-center gap-4">
                <span className="opacity-50">•</span>
                Open to internships, collaborations, and continuous learning
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