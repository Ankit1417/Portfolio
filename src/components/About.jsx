import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Layers, Cpu, Compass, Activity, Play, Zap, FileSpreadsheet } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const metrics = [
    { value: "99.9%", label: "Uptime Design", desc: "Production-ready server availability" },
    { value: "10x", label: "Workflow Automation", desc: "Replacing manual spreadsheet tasks" },
    { value: "4+", label: "ERP Systems Built", desc: "From concept to active deployment" },
    { value: "100%", label: "Agile & Git Standards", desc: "For international collaboration" }
  ];

  const focusAreas = [
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
      title: "Problem Solving",
      description: "Approaching complex software challenges with a data-driven, analytical mindset to build optimal and performant logic."
    },
    {
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      title: "System Design",
      description: "Architecting multi-tier databases, secured REST routes, and decoupled UI layers that scale seamlessly under high traffic."
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: "Product Development",
      description: "Translating business visions into functional, beautiful SaaS platforms with intuitive user experiences and high client retention."
    },
    {
      icon: <Compass className="w-6 h-6 text-cyan-400" />,
      title: "Business Automation",
      description: "Designing workflows that digitize back-office operations, sync payment transactions, and automatically compile reports."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-secondary/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-indigo-950/40 border border-indigo-800/40 px-4 py-1.5 rounded-full">
              Engineering Mindset
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mt-4 tracking-tight">
              About My Philosophy
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Bio text and metrics */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold font-display text-white">
                Software Engineer focused on building{' '}
                <span className="text-gradient">business applications</span>, ERP systems, and SaaS platforms.
              </h3>
              
              <p className="text-zinc-400 leading-relaxed font-light">
                I specialize in bridging the gap between raw data analytics and high-performance software engineering. My background enables me to understand system behaviors, inspect database patterns, and engineer clean code that drives business value.
              </p>

              <p className="text-zinc-400 leading-relaxed font-light">
                Whether deploying multi-tenant SaaS portals, creating automation pipelines that replace manual operations, or developing comprehensive ERP suites, I design systems with scalability, performance, and global collaboration in mind.
              </p>
            </motion.div>

            {/* Metrics cards grid */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="glass-card p-5 border border-zinc-900 flex flex-col text-left group hover:border-zinc-800 transition-colors"
                >
                  <span className="text-3xl font-bold font-display bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                    {metric.value}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 mt-2">
                    {metric.label}
                  </span>
                  <span className="text-[11px] text-zinc-500 mt-1">
                    {metric.desc}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Core Focus Cards */}
          <div className="lg:col-span-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {focusAreas.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className="glass-card glass-card-hover p-6 flex flex-col text-left border border-zinc-900"
                >
                  <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-xl w-fit mb-5 shadow-inner">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white font-display mb-2">
                    {item.title}
                  </h4>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
