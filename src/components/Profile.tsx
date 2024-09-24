import React, { useEffect, useState } from 'react';

// ... 其他导入 ...

const Profile: React.FC = () => {
    // 定义最近的文章数据
    const [recentPosts, setRecentPosts] = useState<{ title: string, date: string }[]>([]);

    useEffect(() => {
        console.log('Profile 组件 useEffect 被调用'); // 调试信息
        // 设置最近的文章数据
        const posts = [
            { title: "文章1", date: "2023-10-01" },
            { title: "文章2", date: "2023-09-25" },
            { title: "文章3", date: "2023-09-20" },
            { title: "文章4", date: "2023-09-15" }
        ];
        setRecentPosts(posts);
    }, []);

    return (
        <div>
            <p>Profile 组件已加载</p> {/* 调试信息 */}
            {/* 自我介绍方框 */}
            <div className="profile-box">
                {/* 你的自我介绍内容 */}
                <p>自我介绍内容</p>
            </div>

            {/* 最近的文章方框 */}
            <div className="recent-posts-box">
                <h2>最近的文章</h2>
                <ul>
                    {recentPosts.map((post, index) => (
                        <li key={index}>
                            <h3>{post.title}</h3>
                            <p>{post.date}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Profile;