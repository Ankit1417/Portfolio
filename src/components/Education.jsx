import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-r from-primary to-secondary p-8">
              <div className="flex items-center gap-4 text-white">
                <div className="p-4 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl">
                  <GraduationCap className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Bachelor of Technology
                  </h3>
                  <p className="text-lg opacity-90">Computer Science and Engineering</p>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-accent text-lg mb-1">Institution</h4>
                  <p className="text-gray-700">
                    Vignan's Foundation for Science, Technology & Research
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-background rounded-lg">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-accent text-lg mb-1">Location</h4>
                  <p className="text-gray-700">Andhra Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-background rounded-lg">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-accent text-lg mb-1">Duration</h4>
                  <p className="text-gray-700">Currently Pursuing</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-accent text-lg mb-4">Key Focus Areas</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Data Structures & Algorithms',
                    'Database Management',
                    'Web Development',
                    'Data Analytics',
                    'Software Engineering',
                    'Machine Learning'
                  ].map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="px-4 py-3 bg-gradient-to-br from-primary to-secondary bg-opacity-10 rounded-lg text-center"
                    >
                      <span className="text-sm font-medium text-accent">{area}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
