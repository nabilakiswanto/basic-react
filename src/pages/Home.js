import React from 'react';
import Metadata from '../components/Metadata';

const Home = () => {
    console.log('Home component rendered'); 
  return (
    <>
      <Metadata title="Home Page" description="This is the home page description." />
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </>
  );
};

export default Home;
