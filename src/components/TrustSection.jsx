import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Cpu, Layers, ShieldCheck, Award } from 'lucide-react';

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: <Globe className="w-7 h-7 text-indigo-400" />,
      title: "International Collaboration",
      metric: "100% Remote Sync",
      description: "Collaborating with German engineering teams using strict PR code reviews, automated CI/CD checks, and structured Scrum schedules."
    },
    {
      icon: <Cpu className="w-7 h-7 text-cyan-400" />,
      title: "MERN Stack Expertise",
      metric: "Security-First Logic",
      description: "Designing isolated database schemas, optimized indices, stateless JWT authorization gates, and clean React custom hooks."
    },
    {
      icon: <Layers className="w-7 h-7 text-purple-400" />,
      title: "SaaS Architecture",
      metric: "Subscription Configured",
      description: "Implementing multi-tenant data structures, Stripe checkouts, subscription-gated features, and notification engines."
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-emerald-400" />,
      title: "Business Grade Solutions",
      metric: "Zero Legacy Bugs",
      description: "Digitizing manual back-office billing processes, creating dashboard reporting interfaces, and securing active transaction logs."
    }
  ];

  return (
    <section id="trust" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:32px_32px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-indigo-950/40 border border-indigo-800/40 px-4 py-1.5 rounded-full">
              Trust & Quality
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mt-4 tracking-tight">
              Why Companies Trust My Code
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
            <p className="text-zinc-400 mt-4 text-base font-light">
              Adhering to high-quality code patterns, clean documentations, and reliable architectures.
            </p>
          </motion.div>
        </div>

        {/* Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col justify-between border border-zinc-900 shadow-xl hover:border-zinc-800 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl group-hover:bg-zinc-850 transition-colors">
                    {card.icon}
                  </div>
                  <span className="text-[9px] uppercase font-extrabold tracking-widest text-emerald-400 bg-emerald-950/30 border border-emerald-800/20 px-2 py-0.5 rounded">
                    {card.metric}
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-base mb-2 group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom accent glow bar */}
              <div className="h-1 bg-gradient-to-r from-primary/10 to-secondary/10 w-full rounded-full mt-6 group-hover:from-primary group-hover:to-secondary transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
