import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'netra',
    title: 'Netra',
    subtitle: 'CV & NLP Analytics Platform',
    description: 'A comprehensive computer vision and natural language processing platform that processes millions of data points in real-time. Built with PyTorch, FastAPI, and React.',
    impact: 'Reduced processing time by 85% • 99.7% accuracy',
    tags: ['Computer Vision', 'NLP', 'PyTorch', 'FastAPI'],
    color: '#00D9FF',
    github: 'https://github.com/priyanshsingh11/Netra',
    demo: '#',
  },
  {
    id: 'trailflow',
    title: 'TrailFlow',
    subtitle: 'Agentic AI for Clinical Trials',
    description: 'An autonomous AI system that streamlines clinical trial workflows using multi-agent collaboration. Features RAG, function calling, and adaptive learning.',
    impact: 'Saved 500+ hours monthly • FDA-compliant pipeline',
    tags: ['LangChain', 'groq', 'Agentic AI', 'Healthcare'],
    color: '#8B5CF6',
    github: 'https://github.com/priyanshsingh11/TrailFlow',
    demo: '#',
  },
  {
    id: 'job-intelligence',
    title: 'Job Market Intelligence',
    subtitle: 'Data Analytics & ML Pipeline',
    description: 'End-to-end data pipeline that scrapes, processes, and analyzes job market trends using advanced ML models for prediction and classification.',
    impact: '1M+ records analyzed • Real-time dashboards',
    tags: ['CatBoost', 'Full Stack', 'PowerBI', 'ETL'],
    color: '#00D9FF',
    github: 'https://github.com/priyanshsingh11/Job-Market',
    demo: '#',
  },
  {
    id: 'agentic-chatbot',
    title: 'Agentic AI Chatbot',
    subtitle: 'Multi-Tool LLM System',
    description: 'A sophisticated chatbot leveraging multiple LLM tools, semantic memory, and function calling for complex task execution and reasoning.',
    impact: '40+ tool integrations • Sub-second responses',
    tags: ['LangGraph', 'OpenAI', 'RAG', 'Vector DB'],
    color: '#8B5CF6',
    github: 'https://github.com/priyanshsingh11/agentic-ai-chatbot',
    demo: '#',
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    subtitle: 'Full-Stack MERN Application',
    description: 'A production-grade SaaS dashboard with real-time analytics, user management, billing integration, and beautiful data visualizations.',
    impact: '10K+ active users • 99.9% uptime',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Full Stack'],
    color: '#00D9FF',
    github: 'https://github.com/priyanshsingh11',
    demo: '#',
  },
  {
    id: 'wink-wear',
    title: 'Wink & Wear',
    subtitle: 'Modern E-Commerce Storefront',
    description: 'A premium fashion storefront with a matte‑dark aesthetic, gold accents, and context-driven state management for a seamless experience.',
    impact: '100% Responsive • Custom State Engine • 0 to 1 Build',
    tags: ['React', 'Context API', 'Vanilla CSS', 'E-commerce'],
    color: '#D4AF37',
    github: 'https://github.com/PriyanshuSingh10114/winkwear',
    demo: 'https://winkandwear-1.onrender.com/',
  },
  {
    id: 'youtube-chat',
    title: 'YouTube Chat',
    subtitle: 'Video Content Interaction',
    description: 'An application enabling users to "chat" with YouTube videos, summarizing content and answering questions based on video transcripts.',
    impact: 'Content accessibility • Time-saving summaries',
    tags: ['YouTube API', 'LangChain', 'React', 'AI'],
    color: '#00D9FF',
    github: 'https://github.com/priyanshsingh11/youtube-chat',
    demo: '#',
  },
  {
    id: 'shopping-behaviour',
    title: 'Shopping Behaviour',
    subtitle: 'Customer Analytics',
    description: 'Data analysis project determining customer shopping behavior and trends, providing actionable insights for retail optimization.',
    impact: 'Customer insights • Trend analysis',
    tags: ['Data Analysis', 'Python', 'Pandas', 'Visualization'],
    color: '#00E676',
    github: 'https://github.com/priyanshsingh11/Shopping_Behaviour',
    demo: '#',
  },
];

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative min-h-screen py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="px-6 md:px-12 lg:px-24 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Selected Work</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A showcase of impactful solutions from AI systems to full-stack applications
            </p>
          </motion.div>
        </div>

        {/* Projects Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="relative overflow-x-auto no-scrollbar pb-8"
        >
          <div className="flex gap-8 px-6 md:px-12 lg:px-24 w-max">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-100px" }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative w-[400px] md:w-[500px] flex-shrink-0"
              >
                <div
                  className={`relative h-full glass-card p-8 rounded-3xl transition-all duration-500 ${hoveredProject === project.id ? 'border-opacity-50 shadow-glow scale-[1.02]' : ''
                    }`}
                  style={{
                    borderColor: hoveredProject === project.id ? project.color : undefined,
                    boxShadow: hoveredProject === project.id ? `0 0 60px -20px ${project.color}50` : undefined
                  }}
                >
                  {/* Project Number */}
                  <div className="absolute top-6 right-6 text-6xl font-display font-bold text-muted/30">
                    0{index + 1}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Title */}
                    <h3
                      className="text-3xl font-display font-bold mb-2 transition-all duration-300"
                      style={{ color: hoveredProject === project.id ? project.color : undefined }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-4">{project.subtitle}</p>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Impact */}
                    <div className="mb-6 p-4 rounded-xl bg-muted/30">
                      <p className="text-sm font-medium text-foreground">
                        📈 {project.impact}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 justify-center">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium hover:border-primary hover:text-primary transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>

                    </div>
                  </div>

                  {/* Hover Gradient */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 100%, ${project.color}15 0%, transparent 70%)`
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-muted-foreground mt-8"
        >
          <span className="text-sm">Scroll horizontally to explore</span>
          <ArrowRight className="w-4 h-4 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
