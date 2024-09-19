import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDarkMode(savedTheme === 'dark');
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">DH的博客</div>
        <nav className="nav">
          <Link href="/" className="nav-link">
            {language === 'zh' ? '首页' : 'Home'}
          </Link>
          <Link href="/about" className="nav-link">
            {language === 'zh' ? '关于' : 'About'}
          </Link>
          <Link href="/friends" className="nav-link">
            {language === 'zh' ? '友链' : 'Friends'}
          </Link>
        </nav>
      </div>
      <div className="header-buttons">
        <button onClick={toggleLanguage} className="language-toggle">
          {language === 'zh' ? 'EN' : '中文'}
        </button>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? '🌞' : '🌙'}
        </button>
      </div>
    </header>
  );
}