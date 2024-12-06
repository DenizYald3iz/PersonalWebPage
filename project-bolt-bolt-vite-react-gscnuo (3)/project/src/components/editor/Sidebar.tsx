import React from 'react';
import { File, FolderOpen, Tag } from 'lucide-react';
import { SidebarProps } from '../../types/editor';

export function Sidebar({ isDarkMode }: SidebarProps) {
  const items = [
    { title: 'Draft: Modern Web Development', date: '2024-03-20' },
    { title: 'Published: React Best Practices', date: '2024-03-15' },
    { title: 'Draft: AI in Software', date: '2024-03-10' },
  ];

  return (
    <div className={`w-64 border-r ${
      isDarkMode ? 'bg-[#2D1F1A] border-[#AB886D]/20' : 'bg-[#E4E0E1] border-[#D6C0B3]'
    } p-4`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`font-semibold ${
          isDarkMode ? 'text-[#E4E0E1]' : 'text-[#493628]'
        }`}>
          Content
        </h2>
        <button className={`p-1 rounded hover:bg-[#AB886D]/20 ${
          isDarkMode ? 'text-[#E4E0E1]' : 'text-[#493628]'
        }`}>
          <FolderOpen size={20} />
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.title}
            className={`p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
              isDarkMode 
                ? 'hover:bg-[#AB886D]/20 text-[#E4E0E1]' 
                : 'hover:bg-[#D6C0B3]/20 text-[#493628]'
            }`}
          >
            <div className="flex items-center mb-1">
              <File size={16} className="mr-2" />
              <span className="text-sm font-medium truncate">{item.title}</span>
            </div>
            <div className="text-xs opacity-60">{item.date}</div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className={`font-semibold mb-2 ${
          isDarkMode ? 'text-[#E4E0E1]' : 'text-[#493628]'
        }`}>
          Tags
        </div>
        <div className="flex flex-wrap gap-2">
          {['React', 'TypeScript', 'Web'].map((tag) => (
            <div
              key={tag}
              className={`flex items-center px-2 py-1 rounded-full text-xs ${
                isDarkMode 
                  ? 'bg-[#AB886D]/20 text-[#E4E0E1]' 
                  : 'bg-[#D6C0B3]/20 text-[#493628]'
              }`}
            >
              <Tag size={12} className="mr-1" />
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}