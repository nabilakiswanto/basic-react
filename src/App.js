import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Metadata from './components/Metadata';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Post from './pages/Post';

const App = () => {
  return (
    <>
      <Metadata title="Default Title" description="Default description for the website." />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:id" element={<Post />} /> {/* Dynamic Route */}
        </Routes>
      </Layout>
    </>
  );
};

export default App;
