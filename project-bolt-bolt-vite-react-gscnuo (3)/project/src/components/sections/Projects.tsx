import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Code Assistant',
    description: 'An intelligent code completion and suggestion tool powered by machine learning',
    tech: ['Python', 'TensorFlow', 'React'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=500',
    github: '#',
    demo: '#'
  },
  {
    title: 'Cloud Infrastructure Manager',
    description: 'A dashboard for managing and monitoring cloud resources across providers',
    tech: ['TypeScript', 'Node.js', 'AWS'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=500',
    github: '#',
    demo: '#'
  },
  {
    title: 'Data Visualization Platform',
    description: 'Interactive data visualization tools for complex datasets',
    tech: ['D3.js', 'React', 'GraphQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500',
    github: '#',
    demo: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#D6C0B3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#493628] mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#493628] mb-3">
                  {project.title}
                </h3>
                <p className="text-[#493628]/80 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#E4E0E1] text-[#493628] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="inline-flex items-center text-[#AB886D] hover:text-[#493628] transition-colors duration-200"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center text-[#AB886D] hover:text-[#493628] transition-colors duration-200"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Demo
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