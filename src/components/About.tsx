import React from 'react';
import { Users, Rocket, Award } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Users, label: 'Clients Worldwide', value: '200+' },
    { icon: Rocket, label: 'Projects Launched', value: '500+' },
    { icon: Award, label: 'Years Experience', value: '10+' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Driving Innovation Through Technology
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              At Pihex Labs, we're more than just a technology company. We're your partners in digital transformation, 
              helping businesses navigate the complexities of modern technology and emerge stronger.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-[#2E3192] dark:text-white mx-auto mb-2" />
                  <div className="font-bold text-2xl text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#2E3192]/10 dark:bg-white/5 rounded-xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="relative rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}