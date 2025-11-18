import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, TrendingUp, Lightbulb } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analysis",
      description: "Expert in transforming raw data into meaningful insights using Python, SQL, and Power BI"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Building scalable web applications with MERN stack and modern best practices"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Data Visualization",
      description: "Creating compelling dashboards and visualizations that drive decision-making"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Analytical mindset with a passion for solving complex technical challenges"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate <span className="font-semibold text-primary">Computer Science student</span> at 
              Vignan's Foundation for Science, Technology, and Research, with a unique blend of skills in 
              <span className="font-semibold text-secondary"> data analysis</span> and 
              <span className="font-semibold text-secondary"> full-stack development</span>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in technology is driven by a deep curiosity to understand how data tells stories 
              and how code brings ideas to life. I specialize in extracting meaningful insights from complex 
              datasets and building robust web applications that solve real-world problems.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Whether it's creating interactive dashboards with <span className="font-semibold">Power BI</span>, 
              analyzing data with <span className="font-semibold">Python and SQL</span>, or developing 
              full-stack applications with the <span className="font-semibold">MERN stack</span>, I bring 
              a data-driven approach to every project.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I'm actively seeking opportunities to collaborate with clients and teams who value 
              innovation, quality, and results-driven solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="bg-background p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-accent mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
