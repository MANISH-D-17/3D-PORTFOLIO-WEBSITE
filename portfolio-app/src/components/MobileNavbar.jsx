import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileNavbar = () => {
  const activeClass = "flex flex-col items-center justify-center bg-[#D7E2EA] text-zinc-950 rounded-full p-3 scale-110 shadow-lg shadow-[#D7E2EA]/20 transition-all duration-300";
  const inactiveClass = "flex flex-col items-center justify-center text-zinc-400 p-3 hover:text-white transition-all duration-300";

  return (
    <nav className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md">
      <div className="navbar-glass rounded-full border border-[#D7E2EA]/20 px-6 py-3 flex justify-around items-center shadow-2xl shadow-black/50">
        <NavLink className={({ isActive }) => isActive ? activeClass : inactiveClass} to="/">
          <span className="material-symbols-outlined">home_max</span>
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? activeClass : inactiveClass} to="/projects">
          <span className="material-symbols-outlined">category</span>
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? activeClass : inactiveClass} to="/awards">
          <span className="material-symbols-outlined">workspace_premium</span>
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? activeClass : inactiveClass} to="/about">
          <span className="material-symbols-outlined">person</span>
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? activeClass : inactiveClass} to="/contact">
          <span className="material-symbols-outlined">mail</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default MobileNavbar;
