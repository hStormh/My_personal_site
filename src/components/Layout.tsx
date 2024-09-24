import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { language } = useLanguage();

  return (
    <div className="layout">
      <Header />
      {/* 移除了 Navbar 组件 */}
      <div className="content-wrapper">
        <main>{children}</main>
        <aside className="sidebar">
          <div className="profile-card">
            <Image
              src="/images/my-avatar.jpg"
              alt={language === 'zh' ? "我的头像" : "My Avatar"}
              width={150}
              height={150}
              className="profile-image"
            />
            <h2>DHStormh</h2>
            <p>
              {language === 'zh' 
                ? "👋DHStormh | 本科教育中 | 05后\n19 y.o\n计算机体系结构小白 | web3菜狗💵 | 悬疑电影爱好者 | 打点拳击🥊" 
                : "👋DHStormh | Undergraduate | Born after 2005\n19 y.o\nComputer Architecture Novice | Web3 Newbie💵 | Mystery Movie Enthusiast | Amateur Boxer 🥊"}
            </p>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;