'use client';
import { motion } from 'framer-motion';
import { achievements } from '../utils/data';
import { Award, FileText, Trophy } from 'lucide-react';

const getIcon = (type) => {
  if (type.includes('Cert')) return <Award className="w-5 h-5" />;
  if (type.includes('Paper')) return <FileText className="w-5 h-5" />;
  return <Trophy className="w-5 h-5" />;
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            <span className="gradient-text">Achievements</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-md dark:shadow-none hover:border-cyan-400/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white">
                    {getIcon(achievement.title)}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {achievement.title}
                    </h3>

                    <p className="text-cyan-600 dark:text-cyan-400 text-sm mb-2">
                      {achievement.issuer || achievement.publisher}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {achievement.date}
                      </span>

                      {achievement.url && achievement.url !== '#' && (
                        <a
                          href={achievement.url}
                          className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 text-sm font-medium transition-colors"
                        >
                          View Details
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}