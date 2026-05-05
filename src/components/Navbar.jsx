import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <nav className="flex justify-between items-center px-10 py-6 w-full max-w-screen-2xl mx-auto">
        <Link className="flex items-center gap-2 cursor-pointer" to="/">
          <span className="material-symbols-outlined text-slate-200" data-icon="blur_on">blur_on</span>
          <span className="text-2xl font-black tracking-tighter text-slate-100 font-['Kanit'] uppercase">MANISH</span>
        </Link>
        <div className="hidden md:flex items-center gap-12">
          <Link 
            className={`font-['Kanit'] uppercase tracking-widest text-sm transition-all duration-300 ${
              isActive('/') ? 'text-white border-b border-white pb-1' : 'text-slate-400 hover:text-white'
            }`} 
            to="/"
          >
            HOME
          </Link>
          <Link 
            className={`font-['Kanit'] uppercase tracking-widest text-sm transition-all duration-300 ${
              isActive('/projects') ? 'text-white border-b border-white pb-1' : 'text-slate-400 hover:text-white'
            }`} 
            to="/projects"
          >
            WORK
          </Link>
          <Link 
            className={`font-['Kanit'] uppercase tracking-widest text-sm transition-all duration-300 ${
              isActive('/about') ? 'text-white border-b border-white pb-1' : 'text-slate-400 hover:text-white'
            }`} 
            to="/about"
          >
            ABOUT
          </Link>
        </div>
        <Link 
          className="px-6 py-2 rounded-full border border-white/20 font-['Kanit'] uppercase tracking-widest text-sm text-slate-200 hover:bg-white hover:text-black transition-all duration-500" 
          to="/contact"
        >
          CONTACT
        </Link>
      </nav>

      {/* Mobile Nav Bar (Bottom) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center p-4">
        <div className="bg-[#0C0C0C]/80 backdrop-blur-2xl fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md rounded-full border border-white/10 shadow-2xl shadow-purple-500/10 flex justify-around items-center p-4">
          <Link 
            className={`flex flex-col items-center justify-center p-3 transition-all ${
              isActive('/') ? 'bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 text-white rounded-full scale-110' : 'text-slate-500 hover:text-slate-200'
            }`} 
            to="/"
          >
            <span className="material-symbols-outlined">home</span>
          </Link>
          <Link 
            className={`flex flex-col items-center justify-center p-3 transition-all ${
              isActive('/projects') ? 'bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 text-white rounded-full scale-110' : 'text-slate-500 hover:text-slate-200'
            }`} 
            to="/projects"
          >
            <span className="material-symbols-outlined">work_outline</span>
          </Link>
          <Link 
            className={`flex flex-col items-center justify-center p-3 transition-all ${
              isActive('/awards') ? 'bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 text-white rounded-full scale-110' : 'text-slate-500 hover:text-slate-200'
            }`} 
            to="/awards"
          >
            <span className="material-symbols-outlined">workspace_premium</span>
          </Link>
          <Link 
            className={`flex flex-col items-center justify-center p-3 transition-all ${
              isActive('/contact') ? 'bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 text-white rounded-full scale-110' : 'text-slate-500 hover:text-slate-200'
            }`} 
            to="/contact"
          >
            <span className="material-symbols-outlined">mail</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
