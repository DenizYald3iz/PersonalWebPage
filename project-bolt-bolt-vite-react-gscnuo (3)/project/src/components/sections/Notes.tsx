import React, { useState } from 'react';
import { Search, BookOpen, Calendar, ArrowUpRight } from 'lucide-react';

const categories = [
  'Computer Science',
  'Web Development',
  'System Design',
  'Algorithms',
  'Security'
];

const notes = [
  {
    title: 'Advanced Algorithms',
    description: 'Comprehensive notes on graph theory and dynamic programming',
    date: '2024-03-15',
    category: 'Algorithms',
    readingTime: '15 min'
  },
  {
    title: 'System Design',
    description: 'Scalability patterns and distributed systems',
    date: '2024-03-10',
    category: 'System Design',
    readingTime: '12 min'
  },
  {
    title: 'Web Security',
    description: 'OWASP top 10 and security best practices',
    date: '2024-03-05',
    category: 'Security',
    readingTime: '10 min'
  }
];

export function Notes() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotes = notes.filter(note => {
    const matchesCategory = !selectedCategory || note.category === selectedCategory;
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="lecture-notes" className="py-20 bg-[#D6C0B3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl font-bold text-[#493628] mb-6 md:mb-0">Lecture Notes</h2>
          <div className="w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search notes..."
                className="w-full md:w-64 px-4 py-2 pl-10 bg-white/90 backdrop-blur-sm rounded-full 
                         border-2 border-[#493628]/10 focus:border-[#493628]/30 outline-none
                         text-[#493628] placeholder-[#493628]/50 transition-all duration-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#493628]/50" size={18} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                     ${!selectedCategory 
                       ? 'bg-[#493628] text-white shadow-lg' 
                       : 'bg-white/80 text-[#493628] hover:bg-white'}`}
          >
            All Notes
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                       ${selectedCategory === category 
                         ? 'bg-[#493628] text-white shadow-lg' 
                         : 'bg-white/80 text-[#493628] hover:bg-white'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6">
          {filteredNotes.map((note) => (
            <div
              key={note.title}
              className="group bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm 
                       hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="text-[#AB886D]" size={20} />
                    <span className="text-sm font-medium text-[#AB886D]">{note.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#493628] mb-2 group-hover:text-[#AB886D] 
                               transition-colors duration-200">
                    {note.title}
                  </h3>
                  <p className="text-[#493628]/70 mb-4">{note.description}</p>
                  <div className="flex items-center gap-4 text-sm text-[#493628]/60">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{note.date}</span>
                    </div>
                    <span>•</span>
                    <span>{note.readingTime}</span>
                  </div>
                </div>
                <div className="ml-4">
                  <ArrowUpRight 
                    className="text-[#AB886D] opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                    size={24} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#493628]/60 text-lg">No notes found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}