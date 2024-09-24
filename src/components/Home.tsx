import React from 'react';
import styles from './Home.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            <div className={styles.sidebar}>
                <div className={styles.categoryBox}>
                    <h3>文章类别</h3>
                    <ul>
                        <li>类别1</li>
                        <li>类别2</li>
                        <li>类别3</li>
                    </ul>
                </div>
                <div className={styles.yearBox}>
                    <h3>文章年份</h3>
                    <ul>
                        <li>2023</li>
                        <li>2022</li>
                        <li>2021</li>
                    </ul>
                </div>
            </div>
            <div className={styles.articleShowcase}>
                <div className={styles.articleBox}>
                    <h3>示例文章1</h3>
                    <p>这是示例文章1的简短描述。</p>
                </div>
                <div className={styles.articleBox}>
                    <h3>示例文章2</h3>
                    <p>这是示例文章2的简短描述。</p>
                </div>
                <div className={styles.articleBox}>
                    <h3>示例文章3</h3>
                    <p>这是示例文章3的简短描述。</p>
                </div>
                <div className={styles.articleBox}>
                    <h3>示例文章4</h3>
                    <p>这是示例文章4的简短描述。</p>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.introBox}>
                    <h2>自我介绍</h2>
                    <p>你好，我是DHStormh，一个热爱编程和技术的开发者。</p>
                    <p>我专注于Web开发，喜欢探索新技术。</p>
                    <p>欢迎访问我的博客，了解更多关于我的信息。</p>
                </div>
                <div className={styles.blogListBox}>
                    <h2>最近的文章</h2>
                    <ul>
                        <li>
                            <p>文章1</p>
                            <p className={styles.date}>2023-10-01</p>
                        </li>
                        <li>
                            <p>文章2</p>
                            <p className={styles.date}>2023-09-25</p>
                        </li>
                        <li>
                            <p>文章3</p>
                            <p className={styles.date}>2023-09-18</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;