import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Frontend/Login';
import HousePricePredictor from './Frontend/HousePricePredictor';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/predict" element={<HousePricePredictor />} />
    </Routes>
  </BrowserRouter>
);

export default App;