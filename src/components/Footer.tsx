import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full py-6 mt-12 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-transparent backdrop-blur-sm transition-colors duration-300">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Web realizada y hosteada ... también por b0rjen &copy; 2025
                </p>
            </div>
        </footer>
    );
};

export default Footer;
