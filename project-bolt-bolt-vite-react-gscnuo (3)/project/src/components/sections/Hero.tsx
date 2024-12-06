import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E4E0E1] to-[#D6C0B3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300&h=300"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-[#AB886D]"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-[#493628] mb-4">
            Deniz
          </h1>
          <p className="text-xl text-[#493628]/80 mb-8">
            AI/ML Enthusiast & Technical Writer
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { Icon: Github, href: 'https://github.com' },
              { Icon: Linkedin, href: 'https://linkedin.com' },
              { Icon: Mail, href: 'mailto:contact@example.com' },
            ].map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                className="text-[#493628] hover:text-[#AB886D] transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
