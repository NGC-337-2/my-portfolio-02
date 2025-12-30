'use client';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: "Understanding Microservices Architecture",
        excerpt: "A deep dive into decomposing monolithic applications into scalable microservices using Kubernetes.",
        date: "Dec 15, 2023",
        readTime: "8 min read",
        url: "https://medium.com/@nikhil/microservices",
        platform: "Medium"
    },
    {
        id: 2,
        title: "The Future of Cloud Native Development",
        excerpt: "Exploring emerging trends in serverless computing, edge capability, and Wasm.",
        date: "Nov 28, 2023",
        readTime: "6 min read",
        url: "https://dev.to/nikhil/cloud-future",
        platform: "Dev.to"
    },
    {
        id: 3,
        title: "Optimizing React Performance",
        excerpt: "Practical tips and techniques for improving the rendering performance of large React applications.",
        date: "Oct 10, 2023",
        readTime: "5 min read",
        url: "https://hashnode.com/@nikhil/react-perf",
        platform: "Hashnode"
    }
];

export default function Blog() {
    return (
        <section id="blog" className="py-20 bg-white dark:bg-gray-900/50 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                        <span className="gradient-text">Recent Writings</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-none hover:border-cyan-400/50 transition-all duration-300 card-hover group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700/50 text-cyan-600 dark:text-cyan-400 rounded-full text-xs font-medium">
                                        {post.platform}
                                    </span>
                                    <BookOpen className="w-5 h-5 text-gray-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                                        {post.title}
                                    </a>
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                                    <span>{post.date}</span>
                                    <span>{post.readTime}</span>
                                </div>

                                <a
                                    href={post.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    Read Article <ExternalLink className="w-3 h-3" />
                                </a>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
