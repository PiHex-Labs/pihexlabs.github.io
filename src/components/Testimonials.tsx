import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Pihex Labs transformed our data infrastructure, leading to a 40% increase in operational efficiency.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions"
  },
  {
    quote: "Their AI solutions helped us automate complex processes, saving countless hours and resources.",
    author: "Michael Rodriguez",
    role: "Director of Innovation",
    company: "Nexus Industries"
  },
  {
    quote: "Outstanding service and technical expertise. They're not just vendors, they're strategic partners.",
    author: "Emma Thompson",
    role: "Head of Digital",
    company: "Global Dynamics"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Client Success Stories</h2>
          <p className="text-xl text-gray-600">
            Hear from organizations we've helped transform
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-black/20" />
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-black">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}