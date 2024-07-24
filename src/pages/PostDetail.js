import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostById } from '../api/apiService';
import Metadata from '../components/Metadata';

const PostDetail = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const data = await fetchPostById(id);
        setPost(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Metadata title={`Post ${post?.id}`} description={`Details for post ${post?.id}.`} />
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </>
  );
};

export default PostDetail;
