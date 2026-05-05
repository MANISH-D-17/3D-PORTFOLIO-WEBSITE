import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Awards = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
      }
    };
    
    document.addEventListener('mousemove', moveCursor);
    
    const hoverElements = document.querySelectorAll('a, button, .glass-card');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => cursor?.classList.add('scale-150', 'bg-[#D7E2EA]/10'));
      el.addEventListener('mouseleave', () => cursor?.classList.remove('scale-150', 'bg-[#D7E2EA]/10'));
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="bg-background text-[#FCFDFF] selection:bg-primary selection:text-background overflow-x-hidden pt-32">
      <main className="relative min-h-screen pb-32 px-12 cosmic-void">
        {/* Decorative Background Assets */}
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] opacity-20 floating-element pointer-events-none">
          <img className="w-full h-full object-contain" alt="Decorative 1" src="https://lh3.googleusercontent.com/aida/ADBb0uiwTyR3dogb4CCt8oGM_KF1cbkQj2yjK2K215JJymMsRF8CplXnydZmeqaawvP_wsNa1kwZ5__xYgZJ_I46Hgs4SH7pkSZ5PJdR44E65d3xTfxA_J9SBKdjdTFvEHDZkvwOCCKwyJe6Qe8pGHcEksrU4DAMbuemg3bj_KhA8RtRK_M6RxDdcBERKZkio0MziFSkn7PX-HVaUQLQscer-pJf54V1o4Mvnac0yxxIXUvl_Og9h81NPGfJYMlDed3sWfZ46eocCPauHg" />
        </div>
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] opacity-10 floating-element pointer-events-none" style={{ animationDelay: '-2s' }}>
          <img className="w-full h-full object-contain" alt="Decorative 2" src="https://lh3.googleusercontent.com/aida/ADBb0ujpWDssvj-A2Z470frlG9M8gmYyCANNQ0AA6_cI7Rs_VT4alerl9cebsxkAqRgMJBOSuwJX-mYPDOpSdpLDOhFA3RAk5V3T_ZgGUBQnDu66aeeht4nM9Jg_7mg_MJEZn_2p8EeXCACQYgkZy6BwiC1EtpE33BmBOFsmnVjLRlu4oeMEVJkAAD-PQ2jEQLhlCQFZMBMDB2lkz93A4972BNr4LjSKYDOPoiVLfSHo8AWsFU7MIF-do7srTRRW82JcndVs9nHiviz2TA" />
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-section-gap">
          <span className="font-label-mono text-label-mono uppercase mb-4 block opacity-60">Recognition & Accolades</span>
          <h1 className="font-display-hero text-display-hero steel-gradient mb-8">AWARDS</h1>
          <p className="font-body-lg text-body-lg max-w-2xl opacity-60">
            A curation of industry recognition, global certifications, and featured highlights across leading creative platforms. Precision in every pixel, excellence in every frame.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {/* Award Card 1: NVIDIA */}
          <div className="glass-card p-12 rounded-lg flex flex-col justify-between group hover:border-primary/40 transition-all duration-500">
            <div>
              <div className="flex justify-between items-start mb-12">
                <span className="font-label-mono text-label-mono opacity-40">2024</span>
                <div className="w-16 h-16 bg-surface-container-highest rounded-full flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined text-primary">terminal</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors uppercase">3rd Place</h3>
              <p className="font-body-sm text-body-sm uppercase tracking-[0.3em] opacity-40 mb-8">NVIDIA GPU Accelerated Computing Codeathon</p>
            </div>
            <div className="flex items-center gap-4 pt-8 border-t border-white/5">
              <span className="font-label-mono text-label-mono opacity-60 uppercase">Technical Excellence</span>
            </div>
          </div>
          {/* Award Card 2: Product Shoot */}
          <div className="glass-card p-12 rounded-lg flex flex-col justify-between group hover:border-secondary/40 transition-all duration-500">
            <div>
              <div className="flex justify-between items-start mb-12">
                <span className="font-label-mono text-label-mono opacity-40">2024</span>
                <div className="w-16 h-16 bg-surface-container-highest rounded-full flex items-center justify-center border border-secondary/20">
                  <span className="material-symbols-outlined text-secondary">photo_camera</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2 group-hover:text-secondary transition-colors uppercase">Winner</h3>
              <p className="font-body-sm text-body-sm uppercase tracking-[0.3em] opacity-40 mb-8">Product Shoot Competition (Sangamam)</p>
            </div>
            <div className="flex items-center gap-4 pt-8 border-t border-white/5">
              <span className="font-label-mono text-label-mono opacity-60 uppercase">Creative Vision</span>
            </div>
          </div>
          {/* Award Card 3: Hackathon Finalist */}
          <div className="glass-card md:col-span-2 p-12 rounded-lg grid md:grid-cols-2 gap-12 group hover:border-primary-fixed/40 transition-all duration-500">
            <div className="relative overflow-hidden rounded-lg aspect-video md:aspect-auto">
              <img className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" alt="Hackathon Finalist" src="https://lh3.googleusercontent.com/aida/ADBb0uhGoJoq802jWDMs5nzAPEU2_lrzfuP6_mpPWzjr2ZncUi4U5XuXwB0X8M99t3YVDoo57jfhvX7Ipe19k_pxJSAy3vcUEdjAir6eY0Nz_uILygcQc3o62T2WIuEw1YRFfUdm_bI46EbL-wslBP0usxe3fvaJUKxtcFGxI7GDUvLbC4J1h2hbb7ZyMbRCAFBeQ-1K4VdRadthk6ReQOG6lmLYE-V7B_-SEAerPaJ7exptlM8xteYrL3R4GIv6pl_00Ep08fySPAB6" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-label-mono text-label-mono opacity-40 mb-4 uppercase">Competition Highlight</span>
              <h3 className="font-headline-md text-headline-md mb-4 uppercase tracking-tighter">Hackathon Finalist<br />Capable 2024</h3>
              <p className="font-body-lg text-body-lg opacity-60 mb-8">Selected as a finalist in a highly competitive national-level hackathon for developing an AI-driven medical assistance platform within 24 hours.</p>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-white/5 rounded-full font-label-mono text-[10px] uppercase">Innovation</span>
                <span className="px-4 py-2 bg-white/5 rounded-full font-label-mono text-[10px] uppercase">Rapid Prototyping</span>
              </div>
            </div>
          </div>
          {/* Award Card 4: Dance */}
          <div className="glass-card p-12 rounded-lg flex flex-col justify-between group hover:border-white/40 transition-all duration-500">
            <div>
              <div className="flex justify-between items-start mb-12">
                <span className="font-label-mono text-label-mono opacity-40">2024</span>
                <div className="w-16 h-16 bg-surface-container-highest rounded-full flex items-center justify-center border border-white/20">
                  <span className="material-symbols-outlined text-white">diversity_3</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2 group-hover:text-white transition-colors uppercase">Winner</h3>
              <p className="font-body-sm text-body-sm uppercase tracking-[0.3em] opacity-40 mb-8">"Let’s Dance 24" Competition</p>
            </div>
            <div className="flex items-center gap-4 pt-8 border-t border-white/5">
              <span className="font-label-mono text-label-mono opacity-60 uppercase">Team Synergy</span>
            </div>
          </div>
          {/* Award Card 5: Gnomon/Cert (Placeholder but relevant) */}
          <div className="glass-card p-12 rounded-lg flex flex-col justify-between group hover:border-primary-fixed/40 transition-all duration-500">
            <div>
              <div className="flex justify-between items-start mb-12">
                <span className="font-label-mono text-label-mono opacity-40">2024</span>
                <div className="w-16 h-16 bg-surface-container-highest rounded-full flex items-center justify-center border border-primary-fixed/20">
                  <span className="material-symbols-outlined text-primary-fixed">verified</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2 group-hover:text-primary-fixed transition-colors uppercase">Full Stack Certified</h3>
              <p className="font-body-sm text-body-sm uppercase tracking-[0.3em] opacity-40 mb-8">React & Node.js Development</p>
            </div>
            <div className="flex items-center gap-4 pt-8 border-t border-white/5">
              <span className="font-label-mono text-label-mono opacity-60 uppercase">Professional Credibility</span>
            </div>
          </div>
        </div>

        {/* Certification List */}
        <section className="max-w-7xl mx-auto mt-section-gap">
          <h2 className="font-headline-xl text-headline-xl mb-12 tracking-tight uppercase">Credentials</h2>
          <div className="flex flex-col gap-px bg-white/5 border border-white/10 rounded-lg overflow-hidden">
            {[
              { date: '2024', title: 'NVIDIA GPU Accelerated Computing', platform: 'Codeathon 3rd Place' },
              { date: '2024', title: 'Capable 2024 Hackathon Finalist', platform: 'National Level AI Competition' },
              { date: '2024', title: 'Full Stack Development Certification', platform: 'Industry Standard' },
            ].map((cert, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 p-8 glass-card items-center hover:bg-white/10 transition-colors cursor-default">
                <div className="md:col-span-2 font-label-mono text-label-mono opacity-40">{cert.date}</div>
                <div className="md:col-span-6 font-headline-md text-2xl tracking-tight uppercase">{cert.title}</div>
                <div className="md:col-span-3 font-body-sm text-body-sm opacity-60 md:text-right uppercase">{cert.platform}</div>
                <div className="md:col-span-1 text-right">
                  <span className="material-symbols-outlined opacity-40">verified</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 bg-zinc-900/60 backdrop-blur-2xl text-[#D7E2EA] rounded-full border border-[#D7E2EA]/20 px-6 py-3 shadow-2xl shadow-black/50 md:hidden">
        <Link className="text-zinc-400 p-2 hover:scale-110 hover:text-zinc-50 transition-all" to="/"><span className="material-symbols-outlined">home_max</span></Link>
        <Link className="text-zinc-400 p-2 hover:scale-110 hover:text-zinc-50 transition-all" to="/about"><span className="material-symbols-outlined">person</span></Link>
        <Link className="text-zinc-400 p-2 hover:scale-110 hover:text-zinc-50 transition-all" to="/projects"><span className="material-symbols-outlined">category</span></Link>
        <Link className="bg-[#D7E2EA] text-zinc-950 rounded-full p-2 hover:scale-110 transition-all" to="/awards"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span></Link>
        <Link className="text-zinc-400 p-2 hover:scale-110 hover:text-zinc-50 transition-all" to="/contact"><span className="material-symbols-outlined">mail</span></Link>
      </nav>

      {/* Footer */}
      <footer className="w-full py-20 px-12 border-t border-[#D7E2EA]/5">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-8">
          <div className="text-zinc-50 font-bold font-['Kanit'] text-xl tracking-widest uppercase">MANISH</div>
          <div className="flex gap-12 font-['Kanit'] font-light text-sm tracking-wide">
            <a className="text-zinc-500 hover:text-zinc-100 transition-colors duration-500" href="#">Instagram</a>
            <a className="text-zinc-500 hover:text-zinc-100 transition-colors duration-500" href="#">ArtStation</a>
            <a className="text-zinc-500 hover:text-zinc-100 transition-colors duration-500" href="#">Behance</a>
            <a className="text-zinc-500 hover:text-zinc-100 transition-colors duration-500" href="#">LinkedIn</a>
          </div>
          <div className="font-['Kanit'] font-light text-sm tracking-wide text-zinc-500 opacity-80">
            © 2024 Manish. Built for the cosmic void.
          </div>
        </div>
      </footer>

      {/* Custom Cursor */}
      <div id="cursor" className="fixed top-0 left-0 w-8 h-8 border border-[#D7E2EA] rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block transition-transform duration-75"></div>
    </div>
  );
};

export default Awards;
