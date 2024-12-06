import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Understanding Modern Web Architecture',
    excerpt: 'An in-depth look at contemporary web architecture patterns and best practices.',
    date: '2024-03-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=500'
  },
  {
    title: 'The Future of AI in Software Development',
    excerpt: 'Exploring how artificial intelligence is reshaping the software development landscape.',
    date: '2024-03-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=500'
  },
  {
    title: 'Building Scalable Systems',
    excerpt: 'Key principles and patterns for designing systems that scale effectively.',
    date: '2024-03-05',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=500'
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-[#E4E0E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#493628] mb-12">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-[#493628]/60 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                  <Clock size={16} className="ml-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#493628] mb-3">
                  {post.title}
                </h3>
                <p className="text-[#493628]/80 mb-4">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-[#AB886D] hover:text-[#493628] transition-colors duration-200"
                >
                  Read More <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}