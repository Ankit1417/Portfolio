import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, AppWindow, Zap, Code2, ArrowRight } from 'lucide-react';

const WhatIBuild = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: <Layers className="w-8 h-8 text-indigo-400" />,
      title: "ERP Systems",
      description: "Custom management systems designed to streamline corporate resource tracking, logistics, invoices, and analytics dashboards.",
      highlights: ["Inventory Controls", "Role-based Security", "Financial Reporting"],
      gradient: "from-indigo-500/10 to-purple-500/5"
    },
    {
      icon: <AppWindow className="w-8 h-8 text-cyan-400" />,
      title: "SaaS Platforms",
      description: "Secure, multi-tenant cloud products structured with isolated databases, modern auth, payment portals, and high-conversion landing layouts.",
      highlights: ["Multi-tenancy", "Stripe Checkout", "Cloud Databases"],
      gradient: "from-cyan-500/10 to-indigo-500/5"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Business Automation",
      description: "Digitizing and automating slow, paper-based workflows. Replaces error-prone spreadsheet tracking with real-time sync engines.",
      highlights: ["REST API Syncs", "Automated Emails", "Cron Analytics"],
      gradient: "from-yellow-500/10 to-amber-500/5"
    },
    {
      icon: <Code2 className="w-8 h-8 text-rose-400" />,
      title: "Custom Web Applications",
      description: "Blazing fast, SEO-friendly responsive web interfaces. Structured with modern React patterns, clean Tailwind utilities, and expressive UX flow.",
      highlights: ["React / Vite SPA", "Tailwind CSS Layouts", "Vercel Deployments"],
      gradient: "from-rose-500/10 to-orange-500/5"
    }
  ];

  return (
    <section id="what-i-build" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary bg-cyan-950/40 border border-cyan-800/40 px-4 py-1.5 rounded-full">
              What I Build
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight">
              Software Solutions That Solve Business Problems
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
            <p className="text-zinc-400 mt-4 text-base font-light">
              Designing custom software architectures that improve productivity and accelerate revenue growth.
            </p>
          </motion.div>
        </div>

        {/* Card Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`glass-card p-8 flex flex-col justify-between border border-zinc-900 bg-gradient-to-br ${card.gradient} relative overflow-hidden group hover:border-zinc-800 transition-all duration-300`}
            >
              {/* Card Glow Effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full blur-xl group-hover:bg-primary/10 transition-colors duration-500"></div>

              <div>
                {/* Icon wrapper */}
                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl w-fit mb-6 shadow-inner group-hover:scale-110 transition-all duration-300">
                  {card.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-6 border-t border-zinc-900/60 flex flex-wrap gap-2.5">
                {card.highlights.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-md bg-zinc-950 border border-zinc-900 text-zinc-400 group-hover:border-zinc-800 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;
