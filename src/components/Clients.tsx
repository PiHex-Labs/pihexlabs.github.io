import React from 'react';

const clients = [
  {
    name: "TechFlow Solutions",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80",
    industry: "Technology"
  },
  {
    name: "Nexus Industries",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80",
    industry: "Manufacturing"
  },
  {
    name: "Global Dynamics",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80",
    industry: "Finance"
  },
  {
    name: "Innovate Health",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80",
    industry: "Healthcare"
  }
];

export function Clients() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600">
            Partnering with forward-thinking organizations worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="w-full h-20 object-contain mb-4"
              />
              <div className="text-center">
                <p className="font-semibold text-gray-900">{client.name}</p>
                <p className="text-sm text-gray-600">{client.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}