import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-black py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-600 dark:text-gray-400">
            © 2024-2025 PiHex Labs
          </div>
          <div className="flex items-center space-x-8">
            <a href="#services" className="text-gray-600 dark:text-gray-400 hover:text-[#2E3192] dark:hover:text-white">Services</a>
            <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-[#2E3192] dark:hover:text-white">About</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-[#2E3192] dark:hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}