'use client';
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                    <div className="text-center p-8 bg-gray-800 rounded-xl border border-red-500/50">
                        <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong.</h2>
                        <p className="text-gray-400 mb-6">
                            We're sorry, but an unexpected error occurred.
                        </p>
                        <button
                            onClick={() => this.setState({ hasError: false })}
                            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                        >
                            Try again
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
