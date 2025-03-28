import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import HousePricePredictor from './HousePricePredictor';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/courses" element={<HousePricePredictor />} />
    </Routes>
  </BrowserRouter>
);

export default App;