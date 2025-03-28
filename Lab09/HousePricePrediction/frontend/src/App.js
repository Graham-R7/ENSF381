import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import HousePricePredictor from './HousePricePredictor';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/predict" element={<HousePricePredictor />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
