import React from 'react';

const blogs = [
    { id: 1, title: 'React Learning', author: 'Stephen Biz', desc: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', author: 'Schwezdenier', desc: 'You can install React from npm.' }
];

function BlogDetails() {
    return (
        <div className="section">
            <h1>Blog Details</h1>
            {blogs.map(blog => (
                <div key={blog.id}>
                    <h1>{blog.title}</h1>
                    <h4><strong>{blog.author}</strong></h4>
                    <p>{blog.desc}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogDetails;
