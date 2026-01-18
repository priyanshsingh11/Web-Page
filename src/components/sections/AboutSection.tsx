import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
  {
    year: '2022',
    title: 'AI/ML Engineer',
    description: 'Dove deep into machine learning, neural networks & intelligent systems',
    color: 'secondary'
  },
  {
    year: '2023',
    title: 'Full-Stack Developer',
    description: 'Built end-to-end applications, mastering modern web technologies',
    color: 'primary'
  },
  {
    year: '2024',
    title: 'Data Analyst',
    description: 'Started exploring data, building insights from raw information',
    color: 'primary'
  },
  {
    year: '2025',
    title: 'Agentic AI',
    description: 'Building autonomous AI systems that think, act, and adapt',
    color: 'primary'
  },
  {
    year: '2026',
    title: 'MLOps Engineer',
    description: 'Bridging ML and DevOps for scalable product deployment',
    color: 'secondary'
  },
];

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">About Me</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            The Journey of <span className="text-gradient">Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            I transform complex problems into elegant solutions. From analyzing terabytes of data
            to building autonomous AI agents, my journey has been driven by one question:
            <span className="text-foreground font-medium"> "How can technology make this better?"</span>
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border">
            <motion.div
              style={{ scaleY: pathLength }}
              className="absolute inset-0 w-full bg-gradient-to-b from-primary via-secondary to-primary origin-top"
            />
          </div>

          {/* Milestones */}
          <div className="relative space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-glow z-10" />

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="glass-card p-6 md:p-8 hover:border-primary/30 transition-all duration-500 group">
                    <span className={`text-sm font-bold ${milestone.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                      {milestone.year}
                    </span>
                    <h3 className="text-2xl font-display font-semibold mt-2 mb-3 group-hover:text-gradient transition-all duration-300">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24"
        >
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '20+', label: 'Projects Completed' },
            { value: '15+', label: 'Technologies Mastered' },
            { value: '10+', label: 'Hackathons Participated' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center group hover:border-primary/30 transition-all duration-300"
            >
              <span className="text-4xl md:text-5xl font-display font-bold text-gradient group-hover:text-glow">
                {stat.value}
              </span>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
