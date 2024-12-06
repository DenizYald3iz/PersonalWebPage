import React from 'react';
import { X, Tag } from 'lucide-react';
import { MetaSettingsProps } from '../../types/editor';

export function MetaSettings({ onClose, isDarkMode }: MetaSettingsProps) {
  return (
    <div className={`w-80 border-l ${
      isDarkMode ? 'bg-[#2D1F1A] border-[#AB886D]/20' : 'bg-[#E4E0E1] border-[#D6C0B3]'
    } p-4`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`font-semibold ${
          isDarkMode ? 'text-[#E4E0E1]' : 'text-[#493628]'
        }`}>
          Meta Settings
        </h2>
        <button
          onClick={onClose}
          className={`p-1 rounded hover:bg-[#AB886D]/20 ${
            isDarkMode ? 'text-[#E4E0E1]' : 'text-[#493628]'
          }`}
        >
          <X size={20} />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className={`block text-sm font-medium mb-1 ${
            isDarkMode ? 'text-[#E4E0E1]' : 'text-[#493628]'
          }`}>
            Title
          </label>
          <input
            type="text"
            className={`w-full px-3 py-2 rounded-lg border ${
              isDarkMode 
                ? 'bg-[#493628]/50 border-[#AB886D]/20 text-[#E4E0E1]' 
                : 'bg-white border-[#D6C0B3] text-[#493628]'
            } focus:outline-none focus:ring-2 focus:ring-[#AB886D]`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-1 ${
            isDarkMode ? 'text-[#E4E0E1]' : 'text-[#493628]'
          }`}>
            Description
          </label>
          <textarea
            rows={3}
            className={`w-full px-3 py-2 rounded-lg border ${
              isDarkMode 
                ? 'bg-[#493628]/50 border-[#AB886D]/20 text-[#E4E0E1]' 
                : 'bg-white border-[#D6C0B3] text-[#493628]'
            } focus:outline-none focus:ring-2 focus:ring-[#AB886D]`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-1 ${
            isDarkMode ? 'text-[#E4E0E1]' : 'text-[#493628]'
          }`}>
            Tags
          </label>
          <div className="flex flex-wrap gap-2 mb-2">
            {['React', 'Web'].map((tag) => (
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
                <button className="ml-1 opacity-60 hover:opacity-100">×</button>
              </div>
            ))}
          </div>
          <input
            type="text"
            placeholder="Add tag..."
            className={`w-full px-3 py-2 rounded-lg border ${
              isDarkMode 
                ? 'bg-[#493628]/50 border-[#AB886D]/20 text-[#E4E0E1]' 
                : 'bg-white border-[#D6C0B3] text-[#493628]'
            } focus:outline-none focus:ring-2 focus:ring-[#AB886D]`}
          />
        </div>
      </div>
    </div>
  );
}