import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Send } from 'lucide-react';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Started</h2>
          <p className="text-gray-600">Ready to transform your business? Let's talk about your project.</p>
        </div>
        
        {isSubmitted ? (
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Thank you for your message!</h3>
            <p className="text-green-600">We'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <Button icon type="submit">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}