import React, { useState } from 'react';
import { Editor } from '../components/editor/Editor';
import { Sidebar } from '../components/editor/Sidebar';
import { Toolbar } from '../components/editor/Toolbar';
import { MetaSettings } from '../components/editor/MetaSettings';
import { AIAssistant } from '../components/editor/AIAssistant';
import { ContentTypeSelector } from '../components/editor/ContentTypeSelector';
import { useTheme } from '../hooks/useTheme';

export function EditorPage() {
  const [showPreview, setShowPreview] = useState(false);
  const [showMetaSettings, setShowMetaSettings] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [contentType, setContentType] = useState('draft');
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#2D1F1A]' : 'bg-[#E4E0E1]'}`}>
      <div className="flex h-screen pt-16">
        <Sidebar isDarkMode={isDarkMode} />

        <div className="flex-1 flex flex-col overflow-hidden">
          <ContentTypeSelector
            selectedType={contentType}
            onTypeSelect={setContentType}
            isDarkMode={isDarkMode}
          />
          <Toolbar
            isDarkMode={isDarkMode}
            showPreview={showPreview}
            onPreviewToggle={() => setShowPreview(!showPreview)}
            onMetaSettingsToggle={() => setShowMetaSettings(!showMetaSettings)}
            onAIAssistantToggle={() => setShowAIAssistant(!showAIAssistant)}
            onThemeToggle={toggleTheme}
          />

          <div className="flex-1 overflow-auto p-4">
            <div className={`max-w-4xl mx-auto bg-white/90 dark:bg-[#493628]/90 
                           backdrop-blur-sm rounded-lg shadow-lg p-6 ${
                             isDarkMode ? 'text-[#E4E0E1]' : 'text-[#493628]'
                           }`}>
              <Editor 
                showPreview={showPreview} 
                isDarkMode={isDarkMode}
                contentType={contentType}
              />
            </div>
          </div>
        </div>

        {showMetaSettings && (
          <MetaSettings
            onClose={() => setShowMetaSettings(false)}
            isDarkMode={isDarkMode}
          />
        )}

        {showAIAssistant && (
          <AIAssistant
            onClose={() => setShowAIAssistant(false)}
            isDarkMode={isDarkMode}
          />
        )}
      </div>
    </div>
  );
}