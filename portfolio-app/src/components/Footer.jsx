import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-20 bg-transparent border-t border-white/5 mt-20 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 gap-8 w-full max-w-screen-2xl mx-auto">
        <p className="font-['Kanit'] uppercase text-xs tracking-[0.2em] text-slate-500">
          © 2024 MANISH. BUILT IN 3D SPACE.
        </p>
        <div className="flex gap-12">
          <a 
            className="font-['Kanit'] uppercase text-xs tracking-[0.2em] text-slate-500 hover:text-white transition-colors underline decoration-purple-500 underline-offset-4" 
            href="https://www.linkedin.com/in/d-manish-930514292/" 
            target="_blank" 
            rel="noreferrer"
          >
            LINKEDIN
          </a>
          <a 
            className="font-['Kanit'] uppercase text-xs tracking-[0.2em] text-slate-500 hover:text-white transition-colors" 
            href="https://github.com/MANISH-D-17" 
            target="_blank" 
            rel="noreferrer"
          >
            GITHUB
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
