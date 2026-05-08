import { NavLink, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const activeStyle = "border-b-2 border-primary rounded-none text-primary";
  const navStyle = "px-4 py-2 hover:bg-base-200 rounded-lg"
  const navStyleMini = "hover:text-primary transition-colors"
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-12 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <Menu size={24} />
          </div>

          <div className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex flex-col gap-2">
            <NavLink to="/#" className={navStyle}>Home</NavLink>
            <NavLink to="/#" className={navStyle}>Specialties</NavLink>
            <NavLink to="/about" className={({ isActive }) => `px-4 py-2 hover:bg-base-200 rounded-lg ${isActive ? activeStyle : ""}`}>About</NavLink>
            <NavLink to="/#" className={navStyle}>Contact</NavLink>
            <NavLink to="/#" className={navStyle}>FAQ</NavLink>
          </div>
        </div>
        <Link to="/" className="text-xl font-bold text-primary tracking-tight">Smart Clinic Booking</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <nav className="flex items-center gap-6 font-medium">
          <NavLink to="/#" className={navStyleMini}>Home</NavLink>
          <NavLink to="/#" className={navStyleMini}>Specialties</NavLink>
          <NavLink to="/about" className={({ isActive }) => `pb-1 transition-all ${isActive ? activeStyle : navStyleMini}`}>About</NavLink>
          <NavLink to="/#" className={navStyleMini}>Contact</NavLink>
          <NavLink to="/#" className={navStyleMini}>FAQ</NavLink>
        </nav>
      </div>


      <div className="navbar-end gap-2">
        <button className="btn btn-ghost btn-sm text-slate-600 hidden sm:inline-flex">Login</button>
        <button className="btn btn-primary btn-sm px-6">Get Started</button>
      </div>
    </div>
  );
}
