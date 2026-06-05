import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2, TrendingUp, DollarSign, Users, Award, Shield, ArrowRight, MessageSquare, BookOpen, AlertTriangle } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Pharmacy ERP System",
      subtitle: "Enterprise Pharmacy Resource & Inventory Suite",
      description: "A secure, comprehensive ERP application designed for pharmaceutical retail. It streamlines complex inventory tracking, automates billing processes, and generates financial summaries.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "Tailwind CSS"],
      impact: "Reduced stockouts by 35%, increased billing speed by 50%, and digitized 10k+ daily transaction logs.",
      features: [
        "Real-time expiry dates & inventory tracker",
        "Smart replenishment trigger alerts",
        "Automated PDF invoice & receipt generation",
        "Sales, revenue, and cash-flow reporting"
      ],
      github: "https://github.com/Ankit1417",
      demo: "https://pms.uylite.com",
      // Code-based Mockup 1: Pharmacy Dashboard
      mockup: (
        <div className="w-full h-full bg-zinc-950 p-5 rounded-2xl border border-zinc-800 flex flex-col justify-between font-sans text-[11px] text-zinc-400 select-none shadow-2xl">
          <div className="flex justify-between items-center pb-3 border-b border-zinc-900">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
              <span className="font-bold text-white tracking-wider uppercase text-[9px]">PharmaERP Live</span>
            </div>
            <span className="text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-800/40 font-semibold text-[9px]">
              System Active
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 my-4">
            <div className="bg-zinc-900/50 p-2.5 border border-zinc-800/60 rounded-xl">
              <span className="text-[10px] text-zinc-500 font-semibold block">Total Revenue</span>
              <span className="text-sm font-bold text-white font-display block mt-1">$14,250.00</span>
              <span className="text-emerald-500 font-medium text-[9px] flex items-center gap-0.5 mt-1">
                <TrendingUp className="w-3 h-3" /> +12.5%
              </span>
            </div>
            <div className="bg-zinc-900/50 p-2.5 border border-zinc-800/60 rounded-xl">
              <span className="text-[10px] text-zinc-500 font-semibold block">Active Prescriptions</span>
              <span className="text-sm font-bold text-white font-display block mt-1">1,240</span>
              <span className="text-zinc-500 text-[9px] block mt-1">Last 24 hours</span>
            </div>
            <div className="bg-zinc-900/50 p-2.5 border border-zinc-800/60 rounded-xl">
              <span className="text-[10px] text-zinc-500 font-semibold block">Low Stock Alerts</span>
              <span className="text-sm font-bold text-rose-500 font-display block mt-1">8</span>
              <span className="text-rose-500 bg-rose-950/30 px-1 py-0.5 rounded border border-rose-800/30 text-[9px] inline-block mt-1">Reorder Now</span>
            </div>
          </div>

          <div className="flex-1 bg-zinc-900/30 border border-zinc-800/40 rounded-xl p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-white text-[10px]">Real-Time Stock Health</span>
              <span className="text-zinc-500 text-[9px]">Updated just now</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Amoxicillin 500mg</span>
                <div className="w-24 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[85%]"></div>
                </div>
                <span className="text-zinc-300 font-semibold">850 Units</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Paracetamol 650mg</span>
                <div className="w-24 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[45%]"></div>
                </div>
                <span className="text-zinc-300 font-semibold">220 Units</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Lisinopril 10mg</span>
                <div className="w-24 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full w-[12%]"></div>
                </div>
                <span className="text-rose-400 font-bold">18 Units</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "School ERP SaaS",
      subtitle: "Multi-Tenant Educational Institution Hub",
      description: "A subscription-based SaaS portal for educational systems. It divides operational workflows between admins, teachers, parents, and students while integrating online payments.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API", "Tailwind CSS"],
      impact: "Automated operations for 3 educational institutions, saving 20+ hours of administration work weekly.",
      features: [
        "Multi-role user authentication with secure cookies",
        "Online fee payments via Stripe checkout flow",
        "Interactive academic calendar & attendance logs",
        "Digital report cards compilation module"
      ],
      github: "https://github.com/Ankit1417",
      demo: "https://school-frontend-npui-lnoff0nz8-ankit-guptas-projects-8dbc88cb.vercel.app/",
      // Code-based Mockup 2: School SaaS
      mockup: (
        <div className="w-full h-full bg-zinc-950 p-5 rounded-2xl border border-zinc-800 flex flex-col justify-between font-sans text-[11px] text-zinc-400 select-none shadow-2xl">
          <div className="flex justify-between items-center pb-3 border-b border-zinc-900">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-500"></div>
              <span className="font-bold text-white tracking-wider uppercase text-[9px]">SchoolSaaS Portal</span>
            </div>
            <span className="text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded-full border border-cyan-800/40 font-semibold text-[9px]">
              Vignan Academy
            </span>
          </div>

          <div className="my-4 space-y-2">
            <div className="bg-zinc-900/50 p-3 border border-zinc-800/50 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-400" />
                <div>
                  <span className="text-white font-bold block">1,824 Students</span>
                  <span className="text-zinc-500 text-[9px]">98% Average Attendance</span>
                </div>
              </div>
              <span className="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-800/30">Stable</span>
            </div>

            <div className="bg-zinc-900/50 p-3 border border-zinc-800/50 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-indigo-400" />
                <div>
                  <span className="text-white font-bold block">Fee Collection Status</span>
                  <span className="text-zinc-500 text-[9px]">Q2 Invoices Cleared</span>
                </div>
              </div>
              <span className="text-xs font-bold text-white">$45,210</span>
            </div>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-800/40 rounded-xl p-3">
            <span className="font-bold text-white text-[10px] block mb-2">Class Schedules - Today</span>
            <div className="space-y-2">
              <div className="flex justify-between items-center bg-zinc-900/80 p-2 rounded border border-zinc-800">
                <span className="text-white font-semibold">Database Architecture</span>
                <span className="text-zinc-500">9:00 AM - CSE A</span>
              </div>
              <div className="flex justify-between items-center bg-zinc-900/40 p-2 rounded">
                <span className="text-zinc-400">Object-Oriented Design</span>
                <span className="text-zinc-500">11:30 AM - CSE B</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Edutimely",
      subtitle: "Integrated Student-Teacher Classroom Platform",
      description: "A modern educational communication app connecting students and teachers. It integrates virtual course folders, document submissions, and chat messaging.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "CSS"],
      impact: "Improved student engagement by 40% and simplified assignment tracking for 500+ active users.",
      features: [
        "Real-time instant classroom chat using Socket.io",
        "Structured course content & assignment uploads",
        "Live student grade & submission tracking metrics",
        "Automated notification triggers for upcoming tests"
      ],
      github: "https://github.com/Ankit1417",
      demo: "https://github.com/Ankit1417",
      // Code-based Mockup 3: Edutimely Chat & Modules
      mockup: (
        <div className="w-full h-full bg-zinc-950 p-5 rounded-2xl border border-zinc-800 flex flex-col justify-between font-sans text-[11px] text-zinc-400 select-none shadow-2xl">
          <div className="flex justify-between items-center pb-3 border-b border-zinc-900">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-violet-500"></div>
              <span className="font-bold text-white tracking-wider uppercase text-[9px]">Edutimely Classroom</span>
            </div>
            <span className="text-violet-400 bg-violet-950/40 px-2 py-0.5 rounded-full border border-violet-800/40 font-semibold text-[9px]">
              Socket Connected
            </span>
          </div>

          <div className="my-4 flex-1 flex flex-col justify-end gap-2.5 bg-zinc-900/30 border border-zinc-800/40 rounded-xl p-3 h-28 overflow-hidden">
            <div className="text-left">
              <span className="text-zinc-500 text-[9px] block">Dr. Sarah (Teacher)</span>
              <p className="bg-zinc-800/80 text-white p-2 rounded-xl rounded-tl-none inline-block mt-0.5 max-w-[85%] leading-snug">
                Remember to submit the project assignment by 5:00 PM today!
              </p>
            </div>
            <div className="text-right">
              <span className="text-zinc-500 text-[9px] block">You (Student)</span>
              <p className="bg-indigo-600 text-white p-2 rounded-xl rounded-tr-none inline-block mt-0.5 max-w-[85%] leading-snug">
                Understood, uploaded the ZIP file to the portal. Thanks!
              </p>
            </div>
          </div>

          <div className="bg-zinc-900/50 p-2.5 border border-zinc-800/60 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-violet-400" />
              <span className="text-white font-bold">MERN Capstone Assignment</span>
            </div>
            <span className="text-[9px] font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-800/30 px-2 py-0.5 rounded">Uploaded</span>
          </div>
        </div>
      )
    },
    {
      title: "Digital Complaint & Feedback Portal",
      subtitle: "Smart Community Ticket & Resolution System",
      description: "An administrative tool that digitizes public complaints and reviews. It manages incident tickets, routes items dynamically, and visualizes resolving statuses.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Chart.js"],
      impact: "Accelerated complaints resolution rate by 60% and enhanced community transparency.",
      features: [
        "Instant ticket generation with tracking tokens",
        "Dynamic priority sorting & auto-assignment algorithm",
        "Responsive administrative analytics dashboard",
        "Public feedback metrics transparency cards"
      ],
      github: "https://github.com/Ankit1417",
      demo: "https://digital-complaint-feedback-portal-7.onrender.com",
      // Code-based Mockup 4: Complaint Tickets Dashboard
      mockup: (
        <div className="w-full h-full bg-zinc-950 p-5 rounded-2xl border border-zinc-800 flex flex-col justify-between font-sans text-[11px] text-zinc-400 select-none shadow-2xl">
          <div className="flex justify-between items-center pb-3 border-b border-zinc-900">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
              <span className="font-bold text-white tracking-wider uppercase text-[9px]">Complaint Hub</span>
            </div>
            <span className="text-rose-400 bg-rose-950/40 px-2 py-0.5 rounded-full border border-rose-800/40 font-semibold text-[9px]">
              4 Pending Review
            </span>
          </div>

          <div className="my-4 space-y-2">
            <div className="bg-zinc-900/60 p-2.5 border border-zinc-800/80 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-white font-bold block">TKT-824: Water Supply Leakage</span>
                <span className="text-zinc-500 text-[9px] block">Assigned to: Utility Team</span>
              </div>
              <span className="text-[9px] font-bold text-amber-400 bg-amber-950/40 border border-amber-800/30 px-2 py-0.5 rounded">High Priority</span>
            </div>
            <div className="bg-zinc-900/30 p-2.5 border border-zinc-900 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-zinc-300 font-bold block">TKT-820: Street Light Outage</span>
                <span className="text-zinc-500 text-[9px] block">Status: Resolved</span>
              </div>
              <span className="text-[9px] font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-800/30 px-2 py-0.5 rounded">Closed</span>
            </div>
          </div>

          <div className="bg-zinc-900/50 p-3 border border-zinc-800/50 rounded-xl flex justify-between items-center">
            <div>
              <span className="text-zinc-500 text-[9px] block">Average Resolution Speed</span>
              <span className="text-white font-bold text-sm block">1.8 Hours</span>
            </div>
            <div className="text-emerald-400 font-bold text-xs flex items-center gap-0.5">
              <TrendingUp className="w-3.5 h-3.5" /> -40% time
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Glow decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary bg-cyan-950/40 border border-cyan-800/40 px-4 py-1.5 rounded-full">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mt-4 tracking-tight">
              Featured Systems & Applications
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
            <p className="text-zinc-400 mt-4 text-base font-light">
              Explore actual applications designed, architected, and coded for operational efficiency and scaling.
            </p>
          </motion.div>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Mockup Container (Grid Cols 5/12) */}
                <div className={`lg:col-span-5 h-[280px] w-full flex items-center justify-center relative rounded-3xl p-6 bg-gradient-to-tr from-zinc-900 to-zinc-950 border border-zinc-800/60 shadow-2xl overflow-hidden group ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Subtle hover background illumination */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Outer Orbit light */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/10 to-secondary/10 opacity-40 rounded-3xl group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300"></div>

                  <div className="w-full h-full relative z-10 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                    {project.mockup}
                  </div>
                </div>

                {/* Details Container (Grid Cols 7/12) */}
                <div className={`lg:col-span-7 text-left space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {project.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-zinc-400 text-sm font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Business Impact Banner */}
                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30 flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest block">Business Impact</span>
                      <p className="text-zinc-300 text-xs font-medium mt-0.5">{project.impact}</p>
                    </div>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Key Capabilities</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-400 text-xs">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[10px] font-semibold text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(99,102,241,0.15)]"
                    >
                      Live Demo <ExternalLink className="ml-2 w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                    >
                      <Github className="mr-2 w-3.5 h-3.5" /> Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
