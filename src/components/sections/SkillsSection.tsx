import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  Database,
  Cloud,
  Layers,
  Bot,
  Server,
  Workflow,
  Terminal,
  Sparkles
} from 'lucide-react';

const skillCategories = [
  {
    id: 'programming',
    title: 'Programming',
    icon: Code2,
    color: '#00D9FF',
    skills: ['Python', 'JavaScript', 'SQL', 'C++'],
    description: 'Building robust, scalable solutions with modern languages'
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: Brain,
    color: '#8B5CF6',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face', 'LangChain'],
    description: 'Creating intelligent systems that learn and adapt'
  },
  {
    id: 'data',
    title: 'Data Analytics',
    icon: Database,
    color: '#00D9FF',
    skills: ['Pandas', 'NumPy', 'Tableau', 'Power BI', 'SQL', 'Excel'],
    description: 'Transforming raw data into actionable insights'
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    icon: Layers,
    color: '#8B5CF6',
    skills: ['React', 'Express', 'Node', 'FastAPI', 'PostgreSQL', 'MongoDB'],
    description: 'End-to-end application development and deployment'
  },
  {
    id: 'agentic',
    title: 'Agentic AI',
    icon: Bot,
    color: '#00D9FF',
    skills: ['LangGraph', 'Langgraph', 'Transformer', 'RAG', 'Fine-tuning'],
    description: 'Autonomous AI agents that reason and execute'
  },
  {
    id: 'mlops',
    title: 'MLOps & DevOps',
    icon: Workflow,
    color: '#8B5CF6',
    skills: ['Docker', 'Linux', 'MLflow', 'Airflow', 'CI/CD', 'Terraform'],
    description: 'Productionizing ML models at scale'
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    icon: Terminal,
    color: '#8B5CF6',
    skills: ['OOPs', 'DSA', 'System Design', 'Version Control (Git)'],
    description: 'Engineering robust and scalable software solutions'
  },
  {
    id: 'additional',
    title: 'Additional Skills',
    icon: Sparkles,
    color: '#00D9FF',
    skills: ['Prompt Engineering', 'Debugging', 'Code Optimization', 'Technical Writing'],
    description: 'Enhancing meaningful development workflows'
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="relative min-h-screen py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/3 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI, data, and software engineering
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
              className={`group glass-card p-6 cursor-pointer transition-all duration-500 ${activeCategory === category.id ? 'border-primary/50 shadow-glow' : ''
                }`}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${category.color}20, ${category.color}10)`,
                  boxShadow: activeCategory === category.id ? `0 0 30px ${category.color}40` : 'none'
                }}
              >
                <category.icon
                  className="w-7 h-7 transition-all duration-300"
                  style={{ color: category.color }}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-gradient transition-all duration-300">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">
                {category.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
                {category.skills.length > 4 && (
                  <span className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground">
                    +{category.skills.length - 4}
                  </span>
                )}
              </div>

              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${category.color}10 0%, transparent 70%)`
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 py-10 border-t border-b border-border/30 overflow-hidden relative group"
        >
          {/* Masked edges for cinematic fade */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

          <div className="flex animate-marquee gap-16 text-muted-foreground/40 text-lg font-display whitespace-nowrap group-hover:pause-animation">
            {["Let’s collaborate to build impactful products — open to internships, collaborations, and continuous learning"].map((item) => (
              <span key={item} className="flex items-center gap-4 group-hover:text-primary/70 transition-colors duration-500">
                <span className="w-2 h-2 rounded-full bg-primary/40 shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
                {item}
              </span>
            ))}
            {["Let’s collaborate to build impactful products — open to internships, collaborations, and continuous learning"].map((item) => (
              <span key={`${item}-2`} className="flex items-center gap-4 group-hover:text-primary/70 transition-colors duration-500">
                <span className="w-2 h-2 rounded-full bg-primary/40 shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
                {item}
              </span>
            ))}
            {/* Third copy for smoother loop on larger screens */}
            {["Let’s collaborate to build impactful products — open to internships, collaborations, and continuous learning"].map((item) => (
              <span key={`${item}-3`} className="flex items-center gap-4 group-hover:text-primary/70 transition-colors duration-500">
                <span className="w-2 h-2 rounded-full bg-primary/40 shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
                {item}
              </span>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .group-hover\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
