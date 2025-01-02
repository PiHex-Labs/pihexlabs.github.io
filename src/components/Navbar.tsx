import React from 'react';
import { Menu } from 'lucide-react';
import { Logo } from './ui/Logo';
import { Button } from './ui/Button';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-[#2E3192]">Services</a>
            <a href="#about" className="text-gray-600 hover:text-[#2E3192]">About</a>
            <a href="#contact" className="text-gray-600 hover:text-[#2E3192]">Contact</a>
            <Button>Get Started</Button>
          </div>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}