export interface EditorProps {
  showPreview: boolean;
  isDarkMode: boolean;
  contentType: string;
}

export interface ToolbarProps {
  isDarkMode: boolean;
  showPreview: boolean;
  onPreviewToggle: () => void;
  onMetaSettingsToggle: () => void;
  onAIAssistantToggle: () => void;
  onThemeToggle: () => void;
}

export interface SidebarProps {
  isDarkMode: boolean;
}

export interface MetaSettingsProps {
  onClose: () => void;
  isDarkMode: boolean;
}