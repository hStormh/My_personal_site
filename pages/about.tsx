import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { language } = useLanguage();

  return (
    <Layout>
      <h1>{language === 'zh' ? '关于我' : 'About Me'}</h1>
      <section>
        <h2>{language === 'zh' ? '简介' : 'Introduction'}</h2>
        <p>
          {language === 'zh'
            ? '欢迎来到我的博客！我是hStormh，一个热爱技术和写作的[您的职业/身份]。'
            : 'Welcome to my blog! I am hStormh, a [Your Profession/Identity] passionate about technology and writing.'}
        </p>
      </section>
      
      <section>
        <h2>{language === 'zh' ? '技能' : 'Skills'}</h2>
        <ul>
          <li>{language === 'zh' ? '前端开发: React, Next.js, TypeScript' : 'Frontend Development: React, Next.js, TypeScript'}</li>
          <li>{language === 'zh' ? '后端开发: Node.js, Express' : 'Backend Development: Node.js, Express'}</li>
          <li>{language === 'zh' ? '其他: Git, Docker' : 'Others: Git, Docker'}</li>
        </ul>
      </section>
      
      <section>
        <h2>{language === 'zh' ? '经历' : 'Experience'}</h2>
        <p>
          {language === 'zh'
            ? '在这里描述您的工作经历或学习经历...'
            : 'Describe your work or study experience here...'}
        </p>
      </section>
      
      <section>
        <h2>{language === 'zh' ? '未来计划' : 'Future Plans'}</h2>
        <p>
          {language === 'zh'
            ? '描述您的未来计划和目标...'
            : 'Describe your future plans and goals...'}
        </p>
      </section>
    </Layout>
  );
}