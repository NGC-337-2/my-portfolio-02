// src/components/Credentials.jsx
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { credentials } from '../utils/data';
import { ExternalLink, Award, CheckCircle, Calendar } from 'lucide-react';
import Image from 'next/image';

const CredentialCard = ({ cred, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-[320px] perspective-1000 group cursor-pointer"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                className="w-full h-full relative preserve-3d shadow-xl rounded-2xl"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front of Card - Badge Style */}
                <div className="absolute inset-0 backface-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700 overflow-hidden">
                    {/* Decorative Gradient Blob */}
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent rounded-t-2xl" />

                    <motion.div
                        className="relative w-32 h-32 mb-6 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center shadow-inner"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                        {cred.thumbnail && !cred.thumbnail.includes('placeholder') ? (
                            <Image
                                src={cred.thumbnail}
                                alt={cred.title}
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                        ) : (
                            <Award className="w-16 h-16 text-blue-500 dark:text-blue-400" />
                        )}
                    </motion.div>

                    <h3 className="text-lg font-bold text-center text-gray-800 dark:text-gray-100 line-clamp-2 px-2">
                        {cred.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium">
                        {cred.issuer}
                    </p>

                    <div className="absolute bottom-4 left-0 w-full flex justify-center opacity-50 text-xs text-gray-400">
                        Hover to reveal
                    </div>
                </div>

                {/* Back of Card - Details */}
                <div
                    className="absolute inset-0 backface-hidden bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-2xl p-6 flex flex-col items-center justify-center rotate-y-180 border border-blue-500/30"
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    <div className="text-center space-y-4">
                        <h4 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">
                            Certification
                        </h4>

                        <div className="flex items-center justify-center gap-2 text-blue-100">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">Issued: {cred.date}</span>
                        </div>

                        <p className="text-sm text-blue-50 leading-relaxed px-2">
                            Verified credential for excellence in {cred.title.split(' ').slice(0, 3).join(' ')}...
                        </p>

                        {cred.link && (
                            <motion.a
                                href={cred.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-6 py-2 mt-4 bg-white text-blue-600 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                            >
                                Verify
                                <ExternalLink className="w-4 h-4" />
                            </motion.a>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default function Credentials() {
    return (
        <section id="credentials" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        <span className="gradient-text">Badges & Certifications</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Professional qualifications and verified technical skills.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                    {credentials.map((cred, index) => (
                        <CredentialCard key={cred.id} cred={cred} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}