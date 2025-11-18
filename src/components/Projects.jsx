import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, BarChart3, MessageSquare, GraduationCap } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Edutimely",
      subtitle: "Student-Teacher Platform",
      description: "A comprehensive educational platform connecting students and teachers with features for course management, real-time communication, and progress tracking. Built with MERN stack for seamless user experience.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      icon: <GraduationCap className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Real-time messaging and notifications",
        "Course and assignment management",
        "Student progress tracking dashboard",
        "Secure authentication and authorization"
      ]
    },
    {
      title: "Digital Complaint & Feedback Portal",
      subtitle: "Community Management System",
      description: "An intuitive web application for managing community complaints and feedback with automated routing, status tracking, and analytics dashboard for administrators.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js"],
      icon: <MessageSquare className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Complaint submission and tracking",
        "Automated categorization and routing",
        "Admin analytics dashboard",
        "Email notifications and updates"
      ]
    },
    {
      title: "Academic Performance Dashboard",
      subtitle: "Data Analytics Project",
      description: "Interactive dashboard analyzing student academic performance with predictive insights. Leverages Python for data processing and Power BI for visualization to identify trends and improvement areas.",
      tech: ["Python", "Pandas", "NumPy", "Power BI", "SQL"],
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500",
      features: [
        "Comprehensive performance metrics",
        "Trend analysis and predictions",
        "Interactive visualizations",
        "Automated report generation"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Showcasing real-world applications that combine data analysis and full-stack development
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Project Icon/Visual */}
                <div className={`md:col-span-2 bg-gradient-to-br ${project.gradient} p-12 flex items-center justify-center`}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-white"
                  >
                    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                      {project.icon}
                    </div>
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className="md:col-span-3 p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-accent mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary font-semibold">{project.subtitle}</p>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-accent mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <span className="text-secondary mt-1">•</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-accent mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white text-accent text-sm font-medium rounded-full shadow-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105">
                      <ExternalLink size={18} />
                      View Project
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105">
                      <Github size={18} />
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
