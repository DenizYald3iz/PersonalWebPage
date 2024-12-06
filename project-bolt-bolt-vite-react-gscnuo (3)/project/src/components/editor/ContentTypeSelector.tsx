import React from 'react';
import { FileText, BookOpen, Newspaper } from 'lucide-react';

interface ContentTypeSelectorProps {
  selectedType: string;
  onTypeSelect: (type: string) => void;
  isDarkMode: boolean;
}

export function ContentTypeSelector({ selectedType, onTypeSelect, isDarkMode }: ContentTypeSelectorProps) {
  const types = [
    { id: 'lecture-note', label: 'Lecture Note', icon: BookOpen },
    { id: 'blog-post', label: 'Blog Post', icon: Newspaper },
    { id: 'draft', label: 'Draft', icon: FileText },
  ];

  return (
    <div className={`border-b ${isDarkMode ? 'border-[#AB886D]/20' : 'border-[#D6C0B3]'} p-4`}>
      <div className="flex space-x-4">
        {types.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onTypeSelect(id)}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
              selectedType === id
                ? isDarkMode
                  ? 'bg-[#AB886D] text-white'
                  : 'bg-[#493628] text-white'
                : isDarkMode
                ? 'text-[#E4E0E1] hover:bg-[#AB886D]/20'
                : 'text-[#493628] hover:bg-[#D6C0B3]/20'
            }`}
          >
            <Icon size={20} className="mr-2" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}