import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';

export default function MainLayout() {
  return (
    <div className="flex flex-col h-dvh">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
