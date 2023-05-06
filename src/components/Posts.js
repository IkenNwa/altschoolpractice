import React from 'react';

function Posts({ post, loading }) {
  if (loading) {
    return <h2 className="loading" ></h2>;
  }

  return (
    <div className="grid">
      {post.map((posts) => (
        <div className="post" key={posts.id}>
          <h2>{posts.title}</h2>
          <p>{posts.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
