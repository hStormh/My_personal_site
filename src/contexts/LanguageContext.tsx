import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  blogName: string;
}

export const LanguageContext = createContext<LanguageContextType>({ language: 'en', setLanguage: () => {}, blogName: 'DHStormh\'s Blog' });

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const blogName = language === 'en' ? 'DHStormh\'s Blog' : 'DHStormh的博客';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, blogName }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
