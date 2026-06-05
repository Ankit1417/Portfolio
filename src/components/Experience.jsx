import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Globe, Award } from 'lucide-react';

const Experience = () => {
  const containerRef = useRef(null);
  
  // Timeline Data
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "German-based Company",
      type: "Contract / Remote",
      duration: "Jan 2026 – May 2026",
      description: "Collaborated with an international engineering team to build scalable enterprise solutions and optimize MERN stack architectures.",
      highlights: [
        "Developed production-ready MERN applications, enhancing stability and modularity.",
        "Designed and implemented high-performance REST APIs with secure authentication layers.",
        "Optimized MongoDB databases, query patterns, and schema indices for speed and scalability.",
        "Worked within international teams, utilizing Agile/Scrum workflows and global software standards.",
        "Delivered critical business-centric features, improving system performance and usability."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary bg-cyan-950/40 border border-cyan-800/40 px-4 py-1.5 rounded-full">
              Career History
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mt-4 tracking-tight">
              Work Experience
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
            <p className="text-zinc-400 mt-4 text-base font-light">
              Demonstrated capabilities in building production systems for international software companies.
            </p>
          </motion.div>
        </div>

        {/* Timeline Path Container */}
        <div className="max-w-4xl mx-auto relative pl-8 sm:pl-12">
          {/* Vertical Line */}
          <div className="absolute left-[15px] sm:left-[23px] top-0 bottom-0 w-[2px] bg-zinc-900">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-primary via-indigo-500 to-secondary"
            />
          </div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Pulsing Timeline Node */}
              <div className="absolute -left-[30px] sm:-left-[38px] top-1 z-10 flex items-center justify-center">
                <span className="relative flex h-8 w-8 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/30 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-zinc-950 border-2 border-primary items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  </span>
                </span>
              </div>

              {/* Card Container */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="glass-card p-6 sm:p-8 hover:border-zinc-800 transition-all duration-300 shadow-2xl relative"
              >
                {/* Upper row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-900">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                        {exp.role}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400 font-medium text-sm">
                      <span className="text-white hover:text-secondary transition-colors duration-200">
                        {exp.company}
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-xs bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-zinc-400">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 text-xs text-zinc-400 font-semibold bg-zinc-950/80 border border-zinc-900 px-4 py-2 rounded-xl self-start sm:self-center">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-secondary" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-indigo-400" />
                      Germany (Remote)
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-300 mt-6 font-light leading-relaxed text-sm">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <div className="mt-6 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-primary" /> Key Contributions & Impact
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
