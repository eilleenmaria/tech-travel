import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Cart from '../pages/cart';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
export default Routing;
