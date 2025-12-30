'use client';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            <span className="gradient-text">About Me</span>
          </h2>

          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

            {/* Text Content */}
            <div className="flex-1 space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I’m a passionate IT student specializing in
                <span className="text-blue-600 dark:text-blue-400 font-semibold"> cloud computing, </span> 
                 <span className="text-cyan-600 dark:text-cyan-400 font-semibold"> Data Engineering</span> and
                <span className="text-purple-600 dark:text-purple-400 font-semibold"> full-stack development</span>.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey began with frontend development and evolved into building scalable,
                cloud-native applications. I thrive on solving complex problems and enjoy the creative process of
                <span className="gradient-text font-semibold"> "vibe coding"</span> — finding
                flow states where technology and creativity intersect.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects,
                writing technical blogs, or experimenting with the latest AI tools and frameworks.
              </p>

              <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium">
                  <span className="text-cyan-600 dark:text-cyan-400">📍</span>
                  {siteConfig.location}
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium">
                  <span className="text-cyan-600 dark:text-cyan-400">✉️</span>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Photo Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative shrink-0"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl rotate-6 opacity-20 blur-lg dark:opacity-40"></div>
                <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl rotate-3 border border-gray-100 dark:border-gray-700 shadow-xl"></div>

                {/* Image Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <Image
                    src="/avatar.jpg"
                    alt={`${siteConfig.name} - Professional Photo`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Status Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 rounded-lg">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-semibold text-green-600 dark:text-green-400">Open to Work</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}