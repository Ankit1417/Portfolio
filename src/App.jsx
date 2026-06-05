import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import About from './components/About';
import WhatIBuild from './components/WhatIBuild';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TrustSection from './components/TrustSection';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  // Custom cursor motion states
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring configurations for mouse lag trail
  const springConfig = { damping: 40, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="relative min-h-screen bg-darkBg text-zinc-300 font-sans selection:bg-indigo-500/30 selection:text-white">
      {/* Custom Glowing Cursor Trail (Visible only on desktop/large screens) */}
      <motion.div
        className="hidden lg:block fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/40 bg-primary/5 pointer-events-none z-[9999] shadow-[0_0_15px_rgba(99,102,241,0.15)]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />

      {/* Main Layout */}
      <Navbar scrolled={scrolled} />
      
      <main className="space-y-4">
        <Hero />
        <Experience />
        <About />
        <WhatIBuild />
        <Skills />
        <Projects />
        <TrustSection />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
