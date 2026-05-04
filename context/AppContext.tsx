import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useColorScheme as useSystemColorScheme } from 'react-native';
import { Language, translations, Translations } from '@/constants/i18n';

interface SoundEntry {
  id: string;
  actionKey: string;
  locationKey: string;
  predictedDb: string;
  measuredDb: string;
  status: 'required' | 'completed';
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
  notifications: boolean;
  setNotifications: (value: boolean) => void;
  soundEffects: boolean;
  setSoundEffects: (value: boolean) => void;
  autoSave: boolean;
  setAutoSave: (value: boolean) => void;
  soundEntries: SoundEntry[];
  setSoundEntries: (entries: SoundEntry[] | ((prev: SoundEntry[]) => SoundEntry[])) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const systemColorScheme = useSystemColorScheme();
  
  const [language, setLanguage] = useState<Language>('en');
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const [soundEntries, setSoundEntries] = useState<SoundEntry[]>([]);

  const t = translations[language];

  useEffect(() => {
    setIsDarkMode(systemColorScheme === 'dark');
  }, [systemColorScheme]);

  const value: AppContextType = {
    language,
    setLanguage,
    t,
    isDarkMode,
    setIsDarkMode,
    notifications,
    setNotifications,
    soundEffects,
    setSoundEffects,
    autoSave,
    setAutoSave,
    soundEntries,
    setSoundEntries,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}