// 移除 Astro 特定的导入
// import { defineCollection, z } from 'astro:content';

// 使用 Next.js 兼容的方式定义内容集合
const blog = {
	type: 'content',
	// 其他配置...
};

export { blog };
