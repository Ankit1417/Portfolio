import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Briefcase, Database, Server, Code2, Globe, Cpu, ChevronRight } from 'lucide-react';

const Hero = () => {
  // Stats data
  const stats = [
    { label: "Full Stack Developer", val: "MERN Stack", desc: "Production-ready apps" },
    { label: "MERN Specialist", val: "Full Stack", desc: "Custom REST APIs & DBs" },
    { label: "SaaS Builder", val: "ERP & Apps", desc: "Scale-ready platforms" },
    { label: "International Exp", val: "German Co.", desc: "Global agile workflows" },
  ];

  // Orbit tech icons
  const orbitTech = [
    { name: 'React', icon: <Code2 className="w-5 h-5 text-cyan-400" />, bg: 'bg-cyan-950/80 border-cyan-500/50', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' },
    { name: 'Node.js', icon: <Cpu className="w-5 h-5 text-emerald-400" />, bg: 'bg-emerald-950/80 border-emerald-500/50', pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2' },
    { name: 'MongoDB', icon: <Database className="w-5 h-5 text-green-400" />, bg: 'bg-green-950/80 border-green-500/50', pos: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2' },
    { name: 'Express', icon: <Server className="w-5 h-5 text-zinc-400" />, bg: 'bg-zinc-900/80 border-zinc-500/50', pos: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Glows & Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[130px] animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Available for Remote Opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
                Building{' '}
                <span className="bg-gradient-to-r from-primary via-indigo-400 to-secondary bg-clip-text text-transparent">
                  SaaS Products
                </span>
                ,<br />
                <span className="text-gradient">ERP Systems</span> & Web Apps
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl font-light">
                I help businesses digitize operations, automate workflows, and build scalable software solutions using the MERN stack.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              {/* Primary: View Projects */}
              <a
                href="#projects"
                className="relative group inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-semibold text-white transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:scale-105"></div>
                <span className="relative flex items-center gap-2">
                  View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              {/* Secondary: Resume */}
              <a
                href="https://drive.google.com/file/d/1X-G7EmvFyairISLc528-ShJ_-wGLsZ07/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
              >
                <Download className="mr-2 w-4 h-4" /> Download Resume
              </a>

              {/* Tertiary: Contact */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl text-sm font-semibold text-zinc-400 hover:text-white transition-all duration-300 group"
              >
                <Briefcase className="mr-2 w-4 h-4 text-secondary" /> Contact Me
                <ChevronRight className="ml-1 w-4 h-4 text-zinc-600 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Orbit & Photo */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-12 lg:py-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center"
            >
              {/* Outer Orbit Path */}
              <div className="absolute inset-0 rounded-full border border-dashed border-zinc-800 animate-spin-slow">
                {/* Orbit badging */}
                {orbitTech.map((tech, idx) => (
                  <div
                    key={idx}
                    className={`absolute p-3 rounded-full border glass-card flex items-center justify-center shadow-lg ${tech.pos}`}
                  >
                    {tech.icon}
                  </div>
                ))}
              </div>

              {/* Middle Orbit Path */}
              <div className="absolute w-3/4 h-3/4 rounded-full border border-dashed border-zinc-800/60 animate-spin-reverse-slow"></div>

              {/* Inner Glowing background behind image */}
              <div className="absolute w-2/3 h-2/3 rounded-full bg-gradient-to-tr from-primary/25 to-secondary/25 blur-xl"></div>

              {/* Profile Image Wrap */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 bg-gradient-to-tr from-primary to-secondary/20 shadow-2xl">
                <img
                  src="images/photo.jpg"
                  alt="Ankit Gupta"
                  className="w-full h-full object-cover rounded-full bg-zinc-950 border-4 border-zinc-950"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-zinc-900 mt-16"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-6 border border-zinc-900 hover:border-zinc-800/80 flex flex-col text-left group"
            >
              <span className="text-2xl font-bold font-display text-white group-hover:text-primary transition-colors duration-300">
                {stat.val}
              </span>
              <span className="text-sm font-semibold text-zinc-400 mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-zinc-500 mt-1">
                {stat.desc}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
