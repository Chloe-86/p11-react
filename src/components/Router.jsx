import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Home from './Home';
import About from './About';
import Template from '../pages/Template';
import NotFound from './NotFound';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/data" element={<list />} />
        <Route path="/pages/:id" element={<Template />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
}

export default Router;
