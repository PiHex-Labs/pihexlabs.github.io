import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-block">
            <span className="bg-black/10 text-black px-4 py-2 rounded-full text-sm font-medium">
              Innovative Solutions for Modern Businesses
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Transform Your Vision Into
            <span className="text-black"> Digital Reality</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            We combine cutting-edge technology with strategic insights to help businesses thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#contact">
              <Button icon>Start Your Journey</Button>
            </a>
            <a href="#about" className="group flex items-center text-gray-600 hover:text-black transition-colors">
              Learn more about us
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
            alt="Dashboard Preview"
            className="rounded-xl shadow-2xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
}