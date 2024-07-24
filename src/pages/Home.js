import React from 'react';
import { Link } from 'react-router-dom';
import Metadata from '../components/Metadata';

const Home = () => {
  // Example post data
  const posts = [
    { id: 1, title: 'First Post' },
    { id: 2, title: 'Second Post' },
  ];

  return (
    <>
      <Metadata title="Home Page" description="This is the home page description." />
      <h1>Home Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
