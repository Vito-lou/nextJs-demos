import React from 'react';

// 定义 Post 类型
type Post = {
    id: number;
    title: string;
};

// 异步组件
async function BlogPage() {
    // 直接在组件中获取数据
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
    const posts: Post[] = await res.json();

    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default BlogPage;