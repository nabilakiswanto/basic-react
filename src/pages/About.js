import React from 'react';
import Metadata from '../components/Metadata';

const About = () => {
    console.log('about component rendered'); 
  return (
    <>
      <Metadata title="About Page" description="This is the about page description." />
      <h1>About Page</h1>
      <p>Welcome to the about page!</p>
    </>
  );
};

export default About;
