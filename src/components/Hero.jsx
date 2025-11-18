import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Briefcase } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-secondary font-semibold text-lg mb-2">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-accent mb-4">
                Ankit Gupta
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gradient">
                Turning Data into Insight & Ideas into Code
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Data Analyst & Full Stack MERN Developer specializing in transforming complex data 
              into actionable insights and building scalable web applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://www.upwork.com/freelancers/~0143f02db0862105f3?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Briefcase className="mr-2" size={20} />
                Hire Me on Upwork
                <ArrowRight className="ml-2" size={20} />
              </a>
              
              <a
                href="https://drive.google.com/file/d/1X-G7EmvFyairISLc528-ShJ_-wGLsZ07/view?usp=drive_link"
                download
                target='_blank'
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20"
              />
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <img 
                  src="images\photo.jpg" 
                  alt="Ankit Gupta" 
                  className="w-full h-full object-cover rounded-full shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
