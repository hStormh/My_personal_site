import { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '../contexts/LanguageContext';
import ThemeToggleButton from './ThemeToggleButton';

export default function Header() {
  const { language, setLanguage, blogName } = useContext(LanguageContext);

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">{blogName}</div>
        <nav className="nav">
          <Link href="/" className="nav-link">{language === 'en' ? 'Home' : '首页'}</Link>
          <Link href="/about" className="nav-link">{language === 'en' ? 'About' : '关于'}</Link>
          <Link href="/friends" className="nav-link">{language === 'en' ? 'Friends' : '友链'}</Link>
        </nav>
      </div>
      <div className="header-buttons">
        <ThemeToggleButton />
        <button onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')} className="language-toggle">
          {language === 'en' ? '中文' : 'English'}
        </button>
      </div>
    </header>
  );
}