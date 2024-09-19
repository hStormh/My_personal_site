import React from 'react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';

const FriendsPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">
        {language === 'zh' ? '友链列表' : 'Friends List'}
      </h1>
      {/* 这里可以添加更多的友链内容 */}
    </Layout>
  );
};

export default FriendsPage;