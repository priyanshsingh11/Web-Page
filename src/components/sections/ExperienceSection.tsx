import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

interface Experience {
  level: string;
  role: string;
  company: string;
  location?: string;
  date: string;
  description?: string[];
  tech?: string[];
}

const experiences: Experience[] = [
  {
    level: 'Level 5',
    role: 'Junior Engineer',
    company: 'Ajaia.ai',
    location: 'Remote | US Startup',
    date: 'Jun 2026 - Present',
    description: [
      'Recruitment Automation Platform: Shipped a production platform (Python, Flask, MongoDB Atlas) for 50+ hiring roles with automated assessments and AI candidate scoring, cutting manual effort by 80–90%.',
      'High-Throughput Scraping & Data Pipeline: Built a Scrapy, BeautifulSoup, and Puppeteer pipeline with Workable APIs, CSV ingestion, and Brevo, run by scheduled Python/PowerShell jobs, cutting processing from 45 minutes to under 15 seconds across 20,000+ candidates.',
      'Fault-Tolerant LLM Evaluation Service: Designed an LLM evaluation service with structured JSON outputs, evidence grounding, and prompt-injection defenses, using Groq and OpenRouter with retries and exponential backoff.',
      'Containerized Medical Intake System: Deployed a CDL/DOT intake system on Flask, MongoDB, Docker, and Google Cloud Run with PDF generation, e-signatures, and eClinicalWorks API sync, cutting manual processing by 95%.',
      'Production Reliability: Added idempotent processing, structured logging, and API error handling for safe-to-retry workflows.',
    ],
    tech: ['Python', 'Flask', 'MongoDB Atlas', 'Scrapy', 'Puppeteer', 'Docker', 'GCP Cloud Run', 'LLM Evaluation'],
  },
  {
    level: 'Level 4',
    role: 'AI Web Developer',
    company: 'Learn With Fraternity Pvt. Ltd',
    date: 'May 2026 - Jun 2026',
    description: [
      'Developed and integrated AI-driven features into web applications.',
      'Collaborated on modern web development practices and workflows.',
    ],
    tech: ['Web Development', 'AI Integration', 'Internship'],
  },
  {
    level: 'Level 3',
    role: 'Founding Engineer',
    company: 'Tuned Society',
    location: 'Remote',
    date: 'Feb 2026 - Present',
    description: [
      'End-to-End Marketplace Architecture: Co-founded and built a two-sided automotive marketplace from architecture to production, owning backend, database design, integrations, and deployment.',
      'Secure REST API Design: Built Node.js, Express.js, and MongoDB APIs for vendor onboarding, verification, and bookings with JWT, RBAC, and geospatial search.',
      'CI/CD & Notifications: Established CI/CD, structured logging, and deployment workflows, and integrated Resend Email and WhatsApp Business APIs for notifications.',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC', 'CI/CD'],
  },
  {
    level: 'Level 2',
    role: 'Full-stack Engineer',
    company: 'Plypicker',
    location: 'Remote',
    date: 'Jan 2025 - Jan 2026',
    description: [
      'End-to-End B2B Platform & ERP: Built the entire platform (web, mobile app, internal ERP) from ordering to delivery, covering site visits, dynamic BOM calculation, proforma invoicing, and warehouse fulfillment.',
      'PDF Engine with TTL-Indexed Proposals: Built a dynamic PDF engine with MongoDB TTL-indexed, auto-expiring proposals, cutting quotation turnaround by 75%.',
      'Logistics & OTP Proof-of-Delivery: Engineered per-km delivery costing, route navigation, and OTP verification with photo proof of delivery on AWS S3.',
      'Audit Trail & Query Performance: Created an append-only audit trail and escalation lifecycle with real-time chat (100% data integrity) and tuned Mongoose aggregation pipelines for sub-100ms queries.',
    ],
    tech: ['MongoDB', 'Mongoose', 'AWS S3', 'Mobile App', 'ERP', 'PDF Engine'],
  },
  {
    level: 'Level 1',
    role: 'Freelance Developer',
    company: 'Independent',
    date: '2024 - Present',
    description: [
      'Building custom AI solutions and full-stack applications for global clients.',
      'Specializing in rapid prototyping and autonomous agentic workflows.',
    ],
    tech: ['Full Stack', 'AI Engineering', 'MLOps', 'Automation'],
  },
];

const ExperienceSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="experience" className="py-12 md:py-20 px-4 md:px-16 bg-transparent">
      <div className="relative z-10 max-w-5xl mx-auto">

        <h2 className="font-extended text-xl md:text-3xl text-center mb-12 md:mb-20 text-[#FF5A2E] tracking-tighter">
          THE GRIND SO FAR
        </h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-[84px] top-0 bottom-0 w-[2px] border-l-2 border-dashed border-[#FF5A2E]/30"></div>

          <div className="flex flex-col gap-12 md:gap-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 md:gap-16 relative group"
              >
                {/* Level Indicator & Timeline Node */}
                <div className="flex flex-row md:flex-col items-center md:w-32 flex-shrink-0 relative z-20 gap-3 md:gap-0">
                  <div className="w-7 h-7 md:w-10 md:h-10 border-2 border-[#FF5A2E] bg-black flex items-center justify-center md:mb-4 group-hover:scale-110 transition-transform">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF5A2E]"></div>
                  </div>

                  <div className="bg-black border-[1px] border-[#FF5A2E] px-2 py-1 md:px-4 md:py-2 text-[#FF5A2E] font-body text-sm md:text-lg tracking-wide shadow-[3px_3px_0_0_#FF5A2E] md:shadow-[6px_6px_0_0_#FF5A2E] group-hover:bg-[#FF5A2E] group-hover:text-white transition-all whitespace-nowrap">
                    {exp.level}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 border-[1px] border-[#FF5A2E] bg-black/85 backdrop-blur-md p-5 md:p-8 shadow-[4px_4px_0_0_#000] md:shadow-[8px_8px_0_0_#000] relative overflow-hidden ml-10 md:ml-0">

                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h3 className="font-extended text-base md:text-2xl text-white mb-1.5 leading-tight">
                        {exp.role}
                      </h3>
                      <p className="font-body text-sm md:text-xl text-[#FF5A2E] tracking-wide">
                        @ {exp.company}{exp.location && <span className="text-white/70"> // {exp.location}</span>}
                      </p>
                    </div>
                    <div className="font-body text-xs md:text-base tracking-wide text-[#FF5A2E]/60">
                      {exp.date}
                    </div>
                  </div>

                  {exp.description && (
                    <>
                      <button
                        type="button"
                        onClick={() => setOpen(open === index ? null : index)}
                        aria-expanded={open === index}
                        className="mt-4 font-body text-sm md:text-base tracking-wide text-[#FF5A2E] hover:text-white transition-colors"
                      >
                        {open === index ? 'Less ▲' : 'More ▼'}
                      </button>

                      <AnimatePresence initial={false}>
                        {open === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <ul className="space-y-2 md:space-y-3 mt-4 mb-5">
                              {exp.description.map((item, i) => (
                                <li key={i} className="font-body text-base md:text-xl text-white/90 flex gap-3 leading-relaxed">
                                  <span className="text-[#FF5A2E] mt-1.5 flex-shrink-0">•</span>
                                  <span>
                                    {item.includes(': ') ? (
                                      <>
                                        <span className="text-white">{item.slice(0, item.indexOf(': ') + 1)}</span>
                                        {item.slice(item.indexOf(': ') + 1)}
                                      </>
                                    ) : (
                                      item
                                    )}
                                  </span>
                                </li>
                              ))}
                            </ul>
                            {exp.tech && (
                              <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech) => (
                                  <span
                                    key={tech}
                                    className="font-body text-xs md:text-base bg-[#FF5A2E] text-white px-2 py-1 md:px-3 md:py-1.5 tracking-wider"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
