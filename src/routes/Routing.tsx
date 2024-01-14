import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from '@/pages/Auth/Register/Register';
import Login from '@/pages/Auth/Login/Login';
import Home from '@/pages/Home/Home';
import Services from '@/pages/Home/Services';

const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routing;
