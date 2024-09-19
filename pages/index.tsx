import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { language } = useLanguage();

  return (
    <Layout>
      <h1>{language === 'zh' ? '欢迎来到我的博客' : 'Welcome to My Blog'}</h1>
      <p>
        {language === 'zh' 
          ? '这里是我的个人博客主页。我会在这里分享我的想法、经验和学习心得。' 
          : 'This is my personal blog homepage. Here I share my thoughts, experiences, and learning insights.'}
      </p>
      <p>
        {language === 'zh'
          ? '请随意浏览，希望你能找到有趣的内容！'
          : 'Feel free to browse around, I hope you find something interesting!'}
      </p>
    </Layout>
  );
}