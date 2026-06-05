import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, Linkedin, Github, ExternalLink, MessageSquare, ShieldAlert } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mimic API post
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for reaching out! I will respond to your message shortly.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1200);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5 text-blue-400" />,
      url: "https://www.linkedin.com/in/ankit-gupta-507b242aa/",
      value: "linkedin.com/in/ankit-gupta",
      desc: "Professional network & updates"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5 text-zinc-300" />,
      url: "https://github.com/Ankit1417",
      value: "github.com/Ankit1417",
      desc: "Source code repository & activity"
    },
    {
      name: "Email Address",
      icon: <Mail className="w-5 h-5 text-indigo-400" />,
      url: "mailto:guptaankit98242@gmail.com",
      value: "guptaankit98242@gmail.com",
      desc: "Direct corporate communication"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background glow filters */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/5 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct contact info */}
          <div className="lg:col-span-5 text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary bg-cyan-950/40 border border-cyan-800/40 px-4 py-1.5 rounded-full w-fit block">
                Let's Work Together
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight">
                Let's Build Something Great Together
              </h2>
              <p className="text-zinc-400 font-light text-base leading-relaxed">
                Open to full-time opportunities, freelance projects, SaaS collaborations, and remote work.
              </p>
            </motion.div>

            {/* Quick response stats box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-900 flex items-center gap-3 w-fit"
            >
              <div className="relative flex h-3.5 w-3.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Average Reply Time</span>
                <span className="text-zinc-300 text-xs font-semibold">Under 12 hours • Monday - Friday</span>
              </div>
            </motion.div>

            {/* Social card stacks */}
            <div className="space-y-3 pt-4">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800/80 hover:bg-zinc-900/40 transition-all duration-300 group"
                >
                  <div className="p-3 bg-zinc-900/80 border border-zinc-850 rounded-xl group-hover:scale-105 transition-transform shrink-0">
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">{link.name}</span>
                    <span className="text-zinc-200 text-sm font-semibold truncate block mt-0.5 group-hover:text-primary transition-colors">
                      {link.value}
                    </span>
                    <span className="text-[10px] text-zinc-500 truncate block mt-0.5">{link.desc}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 border border-zinc-900 space-y-6 text-left relative overflow-hidden shadow-2xl">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-950/80 border border-zinc-800/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm text-white placeholder-zinc-600 transition-all"
                    placeholder="Enter name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-950/80 border border-zinc-800/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm text-white placeholder-zinc-600 transition-all"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                  Project Goal
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-950/80 border border-zinc-800/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm text-white placeholder-zinc-600 transition-all"
                  placeholder="e.g. Building SaaS Platform"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                  Message Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-zinc-950/80 border border-zinc-800/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm text-white placeholder-zinc-600 transition-all resize-none"
                  placeholder="Detail your requirements, project timeline, or system goals..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={15} /> Send Message Inquiry
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
