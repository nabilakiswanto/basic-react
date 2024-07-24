import React from 'react';
import Metadata from '../components/Metadata';

const Contact = () => {
    console.log('contact component rendered'); 
  return (
    <>
      <Metadata title="Contact Page" description="This is the contact page description." />
      <h1>Contact Page</h1>
      <p>Welcome to the contact page!</p>
    </>
  );
};

export default Contact;
