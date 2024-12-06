import React, { useState } from 'react';
import { Sparkles, X } from 'lucide-react';

interface AIAssistantProps {
  isDarkMode: boolean;
  onClose: () => void;
}

export function AIAssistant({ isDarkMode, onClose }: AIAssistantProps) {
  const [prompt, setPrompt] = useState('');

  return (
    <div className={`w-80 border-l ${
      isDarkMode ? 'bg-[#2D1F1A] border-[#AB886D]/20' : 'bg-[#E4E0E1] border-[#D6C0B3]'
    } p-4`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Sparkles className={`mr-2 ${isDarkMode ? 'text-[#E4E0E1]' : 'text-[#493628]'}`} size={20} />
          <h2 className={`font-semibold ${isDarkMode ? 'text-[#E4E0E1]' : 'text-[#493628]'}`}>
            AI Assistant
          </h2>
        </div>
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
            How can I help you?
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask for writing suggestions, outline help, or content improvements..."
            rows={4}
            className={`w-full px-3 py-2 rounded-lg border ${
              isDarkMode 
                ? 'bg-[#493628]/50 border-[#AB886D]/20 text-[#E4E0E1]' 
                : 'bg-white border-[#D6C0B3] text-[#493628]'
            } focus:outline-none focus:ring-2 focus:ring-[#AB886D]`}
          />
        </div>

        <button
          className={`w-full py-2 px-4 rounded-lg ${
            isDarkMode
              ? 'bg-[#AB886D] text-white hover:bg-[#AB886D]/90'
              : 'bg-[#493628] text-white hover:bg-[#493628]/90'
          } transition-colors duration-200`}
        >
          Get Suggestions
        </button>

        <div className={`mt-6 p-4 rounded-lg ${
          isDarkMode ? 'bg-[#493628]/30' : 'bg-white'
        }`}>
          <h3 className={`text-sm font-medium mb-2 ${
            isDarkMode ? 'text-[#E4E0E1]' : 'text-[#493628]'
          }`}>
            Quick Actions
          </h3>
          {['Improve writing style', 'Generate outline', 'Fix grammar', 'Suggest topics'].map((action) => (
            <button
              key={action}
              className={`block w-full text-left px-3 py-2 rounded-lg mb-2 text-sm ${
                isDarkMode
                  ? 'hover:bg-[#AB886D]/20 text-[#E4E0E1]'
                  : 'hover:bg-[#D6C0B3]/20 text-[#493628]'
              }`}
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}