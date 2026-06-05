import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-16 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Condensed Glass Card */}
          <div className="glass-card p-6 border border-zinc-900 flex flex-col sm:flex-row items-center gap-6 justify-between hover:border-zinc-800 transition-colors">
            <div className="flex items-center gap-4 text-left">
              <div className="p-3.5 bg-zinc-900 border border-zinc-800 text-primary rounded-xl shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Academic Credentials</span>
                <h3 className="text-lg font-bold font-display text-white mt-0.5">
                  Bachelor of Technology
                </h3>
                <p className="text-zinc-400 text-xs font-light">
                  Computer Science & Engineering • Vignan's Foundation for Science, Technology & Research
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 bg-zinc-950 border border-zinc-900 px-4 py-2 rounded-xl">
              <Calendar className="w-4 h-4 text-secondary" />
              <span>Andhra Pradesh, India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
