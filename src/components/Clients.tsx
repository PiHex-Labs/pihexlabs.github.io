import React from 'react';

const clients = [
  {
    name: "Python AI Solutions",
    logo: "https://i.imghippo.com/files/Ix6310eg.png",
    industry: "Technology"
  },
  {
    name: "Aktech Labs",
    logo: "https://i.imghippo.com/files/Tt3034szk.jpeg",
    industry: "Technology"
  },
  {
    name: "Cirun.io",
    logo: "https://i.imghippo.com/files/pJUP6586vI.png",
    industry: "Technology"
  },
  {
    name: "Ocean Mart",
    logo: "https://i.imghippo.com/files/IBUQ6358MDM.webp",
    industry: "Product"
  },
];

export function Clients() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Partnering with forward-thinking organizations worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-black p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="w-full h-20 object-contain mb-4"
              />
              <div className="text-center">
                <p className="font-semibold text-gray-900 dark:text-white">{client.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{client.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}