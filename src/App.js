import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Metadata from './components/Metadata';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <Metadata title="Default Title" description="Default description for the website." />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
