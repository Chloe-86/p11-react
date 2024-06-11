import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Template from '../template/Template.jsx';
import NotFound from '../components/NotFound';
import {useJsonDataContext} from "../jsonDataContext.jsx"

const Router = () => {
  const { jsonData } = useJsonDataContext();

  // Si les données ne sont pas encore disponibles, affichez un message de chargement
  if (!jsonData) {
    return <div aria-live="polite">Loading...</div>;
  }
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
