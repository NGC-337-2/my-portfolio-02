'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Custom404() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-9xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                >
                    404
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-6">Page Not Found</h2>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto">
                        The page you're looking for seems to have wandered off into the digital void.
                    </p>

                    <Link
                        href="/"
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                        Return Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
