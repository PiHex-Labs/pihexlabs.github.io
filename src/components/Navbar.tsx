import React from 'react';
import { Menu } from 'lucide-react';
import { Logo } from './ui/Logo';
import { Button } from './ui/Button';
import { ThemeToggle } from './ui/ThemeToggle';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 dark:bg-black/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-[#2E3192] dark:hover:text-white">Services</a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-[#2E3192] dark:hover:text-white">About</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-[#2E3192] dark:hover:text-white">Contact</a>
            <ThemeToggle />
            <Button>Get Started</Button>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </div>
        </div>
      </div>
    </nav>
  );
}