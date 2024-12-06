import React from 'react';
import {
  Bold, Italic, List, Link as LinkIcon, Image, Eye, Settings,
  Sun, Moon, Save, Upload, Undo, Redo, Table, Sparkles
} from 'lucide-react';
import { ToolbarProps } from '../../../types/editor';

export function Toolbar({ 
  isDarkMode,
  showPreview,
  onPreviewToggle,
  onMetaSettingsToggle,
  onAIAssistantToggle,
  onThemeToggle,
}: ToolbarProps) {
  const buttonClass = `p-2 rounded-lg transition-colors duration-200 ${
    isDarkMode 
      ? 'hover:bg-[#AB886D]/20 text-[#E4E0E1]' 
      : 'hover:bg-[#D6C0B3]/20 text-[#493628]'
  }`;

  return (
    <div className={`border-b ${
      isDarkMode ? 'border-[#AB886D]/20' : 'border-[#D6C0B3]'
    } p-2 flex items-center justify-between`}>
      <div className="flex items-center space-x-2">
        <button className={buttonClass}><Bold size={20} /></button>
        <button className={buttonClass}><Italic size={20} /></button>
        <button className={buttonClass}><List size={20} /></button>
        <button className={buttonClass}><LinkIcon size={20} /></button>
        <button className={buttonClass}><Image size={20} /></button>
        <button className={buttonClass}><Table size={20} /></button>
        <div className="mx-2 h-6 w-px bg-current opacity-20" />
        <button className={buttonClass}><Undo size={20} /></button>
        <button className={buttonClass}><Redo size={20} /></button>
      </div>

      <div className="flex items-center space-x-2">
        <button className={buttonClass} onClick={onThemeToggle}>
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className={buttonClass} onClick={onAIAssistantToggle}>
          <Sparkles size={20} />
        </button>
        <button 
          className={`${buttonClass} ${showPreview ? 'bg-[#AB886D]/20' : ''}`}
          onClick={onPreviewToggle}
        >
          <Eye size={20} />
        </button>
        <button className={buttonClass} onClick={onMetaSettingsToggle}>
          <Settings size={20} />
        </button>
        <button className={`${buttonClass} bg-[#AB886D] text-white hover:bg-[#493628]`}>
          <Save size={20} />
        </button>
        <button className={`${buttonClass} bg-[#493628] text-white hover:bg-[#AB886D]`}>
          <Upload size={20} />
        </button>
      </div>
    </div>
  );
}