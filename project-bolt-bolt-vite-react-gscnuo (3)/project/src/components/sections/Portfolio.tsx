import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A modern web application built with React and TypeScript',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500',
    link: '#'
  },
  {
    title: 'Project Beta',
    description: 'Mobile-first e-commerce platform',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=500',
    link: '#'
  },
  {
    title: 'Project Gamma',
    description: 'AI-powered data analytics dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500',
    link: '#'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-[#E4E0E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#493628] mb-12">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#493628]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-[#E4E0E1] mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-[#D6C0B3] hover:text-white transition-colors duration-200"
                  >
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}