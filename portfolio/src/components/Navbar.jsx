'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/site';
import { Menu, X, Github, Linkedin, Twitter, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const { theme, toggleTheme } = useTheme();

    // Effect for hydration mismatch avoidance
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section
            if (siteConfig.navLinks) {
                const sections = siteConfig.navLinks.map(link => link.name.toLowerCase());
                const current = sections.find(section => {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        return rect.top <= 100 && rect.bottom >= 100;
                    }
                    return false;
                });
                if (current) setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800' : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                        {siteConfig.name}
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {siteConfig.navLinks?.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.href)}
                                    className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-cyan-400 ${activeSection === link.name.toLowerCase() ? 'text-blue-600 dark:text-cyan-400' : 'text-gray-700 dark:text-gray-300'
                                        }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 pl-6 border-l border-gray-300 dark:border-gray-700">
                            <button
                                onClick={toggleTheme}
                                className="p-2 text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
                                aria-label="Toggle theme"
                            >
                                {mounted && theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-gray-400 hover:text-white transition-colors"
                            aria-label="Toggle theme"
                        >
                            {mounted && theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-300 hover:text-white transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-gray-900/95 backdrop-blur-md border-b border-gray-800 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 space-y-4">
                            {siteConfig.navLinks?.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.href)}
                                    className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${activeSection === link.name.toLowerCase()
                                        ? 'bg-blue-500/10 text-blue-400'
                                        : 'text-gray-300 hover:bg-gray-800'
                                        }`}
                                >
                                    {link.name}
                                </button>
                            ))}

                            <div className="flex items-center gap-4 px-4 pt-4 border-t border-gray-800">
                                <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <Github size={20} />
                                </a>
                                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <Linkedin size={20} />
                                </a>
                                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
