'use client';
import { motion } from 'framer-motion';
import { experience } from '../utils/data';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800/50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            <span className="gradient-text">Professional Experience</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-8 last:pb-0"
              >
                {/* Timeline line */}
                {index !== experience.length - 1 && (
                  <div className="absolute left-4 top-12 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-purple-500" />
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-4 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white dark:bg-gray-900 rounded-full" />
                </div>

                <div className="bg-gray-50 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-md dark:shadow-none">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="text-cyan-600 dark:text-cyan-400 font-medium mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-lg text-purple-600 dark:text-purple-400 font-medium mb-4">
                    {exp.company}
                  </h4>

                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                        <span className="text-cyan-600 dark:text-cyan-400 mt-1">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}