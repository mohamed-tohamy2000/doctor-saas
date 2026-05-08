import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-base-100 border-t border-slate-200 py-10 px-4 md:px-12 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-xl font-bold text-primary mb-1">Smart Clinic Booking</h2>
          <p className="text-xs text-slate-500">© 2024 Smart Clinic Booking System. Clinical Excellence & Operational Efficiency.</p>
        </div>

        <div className="flex gap-6 text-xs text-slate-500 font-medium">
          <Link to="/#" className="hover:text-primary transition-colors">Terms of Service</Link>
          <Link to="/#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/#" className="hover:text-primary transition-colors">Accessibility</Link>
          <Link to="/#" className="hover:text-primary transition-colors">Cookie Settings</Link>
        </div>
      </div>
    </footer>
  );
}

