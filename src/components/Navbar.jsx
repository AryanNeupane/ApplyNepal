import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import React from "react";
import { Link } from "react-router-dom";
import AppContext from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="Logo"
          className="h-10 w-auto object-contain"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <Link to={'/'} >Home</Link>
        <Link to={'/all-jobs'} >Jobs</Link>
        <Link to={'/about'} >About</Link>
       
        {/* Search Bar */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Jobs .."
          />
          
        </div>

        {/* Login Button */}
        <button onClick={()=>navigate('/login')} className="cursor-pointer px-8 py-2 bg-primary hover:bg-opacity-90 transition text-white rounded-full">
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="sm:hidden"
      >
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none">
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
         <Link to={'/'} >Home</Link>
        <Link to={'/all-jobs'} >Jobs</Link>
        <Link to={'/about'} >About</Link>
        <button onClick={()=>navigate('/login')} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-opacity-90 transition text-white rounded-full text-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
