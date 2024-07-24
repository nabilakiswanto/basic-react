import React from 'react';
import { useParams } from 'react-router-dom';
import Metadata from '../components/Metadata';

const Post = () => {
  const { id } = useParams(); // Access the dynamic parameter from the URL

  // You can fetch data based on `id` or use it in some way
  // For demonstration, we'll just display the ID

  return (
    <>
      <Metadata title={`Post ${id}`} description={`Details for post ${id}.`} />
      <h1>Post {id}</h1>
      <p>Details for post {id} will be shown here.</p>
    </>
  );
};

export default Post;
