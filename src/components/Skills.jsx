import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Server, Wrench, BarChart3 } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      colorClass: "from-cyan-500 to-blue-500",
      accentColor: "#06b6d4",
      skills: [
        { name: "React", level: 95 },
        { name: "Angular", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Tailwind CSS", level: 95 }
      ]
    },
    {
      title: "Backend & DBs",
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      colorClass: "from-emerald-500 to-green-600",
      accentColor: "#10b981",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 92 },
        { name: "MongoDB", level: 85 },
        { name: "REST APIs", level: 95 },
        { name: "SQL", level: 88 }
      ]
    },
    {
      title: "Coding Languages",
      icon: <Code2 className="w-6 h-6 text-amber-400" />,
      colorClass: "from-amber-500 to-yellow-500",
      accentColor: "#f59e0b",
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++ (CPP)", level: 78 },
        { name: "C", level: 75 }
      ]
    },
    {
      title: "Tools & Analytics",
      icon: <Wrench className="w-6 h-6 text-purple-400" />,
      colorClass: "from-purple-500 to-indigo-500",
      accentColor: "#a855f7",
      skills: [
        { name: "Git & GitHub", level: 92 },
        { name: "Postman", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Power BI", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-[450px] h-[450px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-indigo-950/40 border border-indigo-800/40 px-4 py-1.5 rounded-full">
              Core Stack
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mt-4 tracking-tight">
              Technical Skill Ecosystem
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
            <p className="text-zinc-400 mt-4 text-base font-light">
              A carefully structured set of full-stack engineering tools and data frameworks.
            </p>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className="glass-card p-6 flex flex-col border border-zinc-900 shadow-xl relative overflow-hidden hover:border-zinc-800 transition-colors duration-300"
            >
              {/* Top Row with icon */}
              <div className="flex items-center gap-3.5 mb-8 pb-4 border-b border-zinc-900">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6 flex-1">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2 text-left">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-zinc-300">
                        {skill.name}
                      </span>
                      <span className="text-zinc-500 font-bold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress track */}
                    <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-900/50">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.2 + (skillIndex * 0.1), ease: "easeOut" }}
                        style={{
                          background: `linear-gradient(to right, ${category.accentColor}dd, ${category.accentColor})`,
                          boxShadow: `0 0 8px ${category.accentColor}aa`
                        }}
                        className="h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
