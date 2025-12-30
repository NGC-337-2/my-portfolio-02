'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import { Mail, Github, Linkedin, Twitter, BookOpen, AtSign } from 'lucide-react';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  devto: BookOpen,
  mastodon: AtSign
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            <span className="gradient-text">Get In Touch</span>
          </h2>

          <div className="bg-white dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-none">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities, collaborations, and
              discussing technology. If you have a project in mind or just want to say hi,
              feel free to send me an email!
            </p>

            <div className="flex flex-col items-center gap-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-6 h-6" />
                Say Hello
              </a>

              <div className="flex items-center gap-2 text-gray-400">
                <span>or find me on</span>
              </div>

              <div className="flex gap-4">
                {Object.entries(siteConfig.social).map(([platform, url]) => {
                  const Icon = socialIcons[platform];
                  if (!Icon) return null;
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-800/50 rounded-lg text-gray-600 dark:text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-cyan-400/50"
                      aria-label={`Visit my ${platform}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}