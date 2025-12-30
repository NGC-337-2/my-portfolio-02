'use client';
import { motion } from 'framer-motion';
import { skills } from '../utils/data';
import { Code2, LayoutTemplate, Cloud, Brain, Wrench } from 'lucide-react';
import {
  FaJava, FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJenkins
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiPython, SiGo,
  SiNextdotjs, SiExpress, SiFastapi,
  SiKubernetes, SiTerraform, SiServerless,
  SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, SiHuggingface,
  SiPrometheus, SiGrafana, SiJest,
  SiOracle
} from 'react-icons/si';

const categoryIcons = {
  languages: Code2,
  frameworks: LayoutTemplate,
  cloud: Cloud,
  ml: Brain,
  tools: Wrench
};

const techIcons = {
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "Python": SiPython,
  "Java": FaJava,
  "Go": SiGo,
  "React": FaReact,
  "Next.js": SiNextdotjs,
  "Node.js": FaNodeJs,
  "Express": SiExpress,
  "FastAPI": SiFastapi,
  "AWS": FaAws,
  "Docker": FaDocker,
  "Kubernetes": SiKubernetes,
  "Terraform": SiTerraform,
  "Serverless": SiServerless,
  "TensorFlow": SiTensorflow,
  "PyTorch": SiPytorch,
  "Scikit-learn": SiScikitlearn,
  "OpenCV": SiOpencv,
  "Hugging Face": SiHuggingface,
  "Git": FaGitAlt,
  "Jenkins": FaJenkins,
  "Prometheus": SiPrometheus,
  "Grafana": SiGrafana,
  "Jest": SiJest,
  "OCI":SiOracle
};

export default function Skills() {
  const skillCategories = Object.entries(skills);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map(([category, items], categoryIndex) => {
              const CategoryIcon = categoryIcons[category] || Wrench;
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-none hover:border-cyan-400/50 transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gray-100 dark:bg-gray-700/50 rounded-lg text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-400/10 transition-colors">
                      <CategoryIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 capitalize">
                      {category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => {
                      const Icon = techIcons[skill];
                      return (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700 hover:border-cyan-400/50 hover:text-cyan-700 dark:hover:text-cyan-100 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 transition-all duration-300"
                        >
                          {Icon && <Icon className="w-4 h-4" />}
                          <span className="font-medium">{skill}</span>
                        </motion.span>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}