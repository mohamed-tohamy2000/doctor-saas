import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './app/layouts/MainLayout';
import AboutUs from './pages/AboutUs';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/" element={<Navigate to="/about" replace />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}


