import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}