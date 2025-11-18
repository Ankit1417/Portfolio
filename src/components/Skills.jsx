import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2, 
  Database, 
  BarChart3, 
  Globe, 
  Server, 
  FileJson,
  PieChart,
  Table
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Data Analysis & Visualization",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: [
        { name: "Python", icon: <Code2 className="w-5 h-5" /> },
        { name: "SQL", icon: <Database className="w-5 h-5" /> },
        { name: "Power BI", icon: <PieChart className="w-5 h-5" /> },
        { name: "Pandas", icon: <Table className="w-5 h-5" /> },
        { name: "NumPy", icon: <Code2 className="w-5 h-5" /> },
      ]
    },
    {
      category: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React.js", icon: <Code2 className="w-5 h-5" /> },
        { name: "JavaScript", icon: <Code2 className="w-5 h-5" /> },
        { name: "HTML/CSS", icon: <Code2 className="w-5 h-5" /> },
        { name: "Tailwind CSS", icon: <Code2 className="w-5 h-5" /> },
      ]
    },
    {
      category: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", icon: <Server className="w-5 h-5" /> },
        { name: "Express.js", icon: <Server className="w-5 h-5" /> },
        { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
        { name: "REST APIs", icon: <FileJson className="w-5 h-5" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for data-driven development and analysis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-accent">{category.category}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="text-primary">{skill.icon}</div>
                    <span className="font-medium text-accent">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h4 className="text-xl font-semibold text-accent mb-4">Additional Competencies</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git & GitHub', 'Data Cleaning', 'Statistical Analysis', 'API Integration', 'Responsive Design', 'Agile Methodology'].map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white text-accent font-medium rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
