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
    author: "Amit Kumar",
    role: "Founder",
    company: "Cirun.io"
  },
  {
    quote: "Outstanding service and technical expertise. They're not just vendors, they're strategic partners.",
    author: "Shruti priya",
    role: "CTO",
    company: "Aktech Labs"
  },
  {
    quote: "Their AI solutions helped us automate complex processes, saving countless hours and resources.",
    author: "Hrithik Jain",
    role: "Founder",
    company: "Ocean Mart"
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Client Success Stories</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Hear from organizations we've helped transform
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-black/20 dark:text-white/20" />
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                <p className="text-sm text-black dark:text-white">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}