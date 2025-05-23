import React from 'react';
import { Code2, Database, LineChart, Cpu, Cloud, Shield } from 'lucide-react';
import { ServiceCard } from './ui/ServiceCard';

export function Services() {
  const services = [
    {
      icon: Code2,
      title: "Custom Development",
      description: "Tailored solutions built with cutting-edge technologies to solve your unique challenges."
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights that drive informed decision-making."
    },
    {
      icon: LineChart,
      title: "Business Intelligence",
      description: "Strategic consulting to optimize your operations and maximize growth potential."
    },
    {
      icon: Cpu,
      title: "AI Solutions",
      description: "Leverage artificial intelligence to automate processes and enhance efficiency."
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure designed for reliability and performance."
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Protect your digital assets with enterprise-grade security measures."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comprehensive solutions tailored to meet your business needs and drive growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}