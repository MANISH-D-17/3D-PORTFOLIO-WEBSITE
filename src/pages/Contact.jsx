import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="bg-[#0c0c0c] text-[#FCFDFF] font-body-lg overflow-x-hidden pt-32">
      <main className="relative pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
        {/* Floating 3D Background Elements */}
        <div className="fixed top-20 -right-20 w-[600px] h-[600px] opacity-20 pointer-events-none blur-3xl rounded-full bg-secondary-container/20"></div>
        <div className="fixed bottom-0 -left-20 w-[400px] h-[400px] opacity-10 pointer-events-none blur-3xl rounded-full bg-primary-container/10"></div>
        
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Content Side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="font-label-mono text-label-mono text-secondary-fixed-dim uppercase">Status: Available for hire</span>
              <h1 className="font-headline-xl text-headline-xl text-scrubber">Let's build something incredible</h1>
              <p className="font-body-lg text-on-surface-variant max-w-md">
                Merging 3D precision with seamless user experiences. Drop a line to start a cosmic collaboration.
              </p>
            </div>
            {/* Contact Links & Social */}
            <div className="space-y-8">
              <div className="glass-panel p-8 rounded-lg space-y-6 group hover:border-secondary/30 transition-colors duration-500">
                <h3 className="font-headline-md text-[24px] font-bold">Direct Channels</h3>
                <div className="space-y-4">
                  <a className="flex items-center justify-between p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all group/link" href="https://linkedin.com/in/d-manish-930514292" target="_blank" rel="noreferrer">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-secondary" data-icon="hub">hub</span>
                      <span className="font-bold tracking-tight">LinkedIn</span>
                    </div>
                    <span className="material-symbols-outlined opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" data-icon="arrow_outward">arrow_outward</span>
                  </a>
                  <a className="flex items-center justify-between p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all group/link" href="https://github.com/MANISH-D-17" target="_blank" rel="noreferrer">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-secondary" data-icon="code">code</span>
                      <span className="font-bold tracking-tight">GitHub</span>
                    </div>
                    <span className="material-symbols-outlined opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" data-icon="arrow_outward">arrow_outward</span>
                  </a>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden h-64 glass-panel group">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0" alt="Contact Decoration" src="https://lh3.googleusercontent.com/aida/ADBb0uhGoJoq802jWDMs5nzAPEU2_lrzfuP6_mpPWzjr2ZncUi4U5XuXwB0X8M99t3YVDoo57jfhvX7Ipe19k_pxJSAy3vcUEdjAir6eY0Nz_uILygcQc3o62T2WIuEw1YRFfUdm_bI46EbL-wslBP0usxe3fvaJUKxtcFGxI7GDUvLbC4J1h2hbb7ZyMbRCAFBeQ-1K4VdRadthk6ReQOG6lmLYE-V7B_-SEAerPaJ7exptlM8xteYrL3R4GIv6pl_00Ep08fySPAB6" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <p className="font-label-mono text-label-mono text-zinc-400">Located in the digital ether</p>
                  <p className="font-bold text-white uppercase tracking-widest">Earth / Orbit</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-12 rounded-xl sticky top-32">
              <form action="#" className="space-y-8" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label className="font-label-mono text-label-mono text-zinc-500 group-focus-within:text-secondary-fixed transition-colors" htmlFor="name">NAME</label>
                    <input className="w-full bg-transparent border-0 border-b border-zinc-800 focus:border-secondary focus:ring-0 text-headline-md text-[24px] py-4 px-0 transition-colors placeholder:text-zinc-800" id="name" name="name" placeholder="John Doe" type="text" />
                  </div>
                  <div className="space-y-2 group">
                    <label className="font-label-mono text-label-mono text-zinc-500 group-focus-within:text-secondary-fixed transition-colors" htmlFor="email">EMAIL</label>
                    <input className="w-full bg-transparent border-0 border-b border-zinc-800 focus:border-secondary focus:ring-0 text-headline-md text-[24px] py-4 px-0 transition-colors placeholder:text-zinc-800" id="email" name="email" placeholder="john@cosmos.com" type="email" />
                  </div>
                </div>
                <div className="space-y-2 group">
                  <label className="font-label-mono text-label-mono text-zinc-500 group-focus-within:text-secondary-fixed transition-colors" htmlFor="message">MESSAGE</label>
                  <textarea className="w-full bg-transparent border-0 border-b border-zinc-800 focus:border-secondary focus:ring-0 text-headline-md text-[24px] py-4 px-0 transition-colors placeholder:text-zinc-800 resize-none" id="message" name="message" placeholder="Tell me about your vision..." rows="4"></textarea>
                </div>
                <div className="pt-8">
                  <button className="cosmic-gradient-cta w-full py-6 rounded-full font-headline-md text-[20px] uppercase tracking-widest text-white hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-purple-500/20 relative group overflow-hidden" type="submit">
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      Send Transmission
                      <span className="material-symbols-outlined" data-icon="rocket_launch">rocket_launch</span>
                    </span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                </div>
              </form>
              <div className="mt-12 pt-12 border-t border-zinc-800/50 flex items-center gap-6">
                <div className="flex -space-x-4">
                  <img className="w-12 h-12 rounded-full border-2 border-zinc-950 object-cover" alt="User 1" src="https://lh3.googleusercontent.com/aida/ADBb0uiwTyR3dogb4CCt8oGM_KF1cbkQj2yjK2K215JJymMsRF8CplXnydZmeqaawvP_wsNa1kwZ5__xYgZJ_I46Hgs4SH7pkSZ5PJdR44E65d3xTfxA_J9SBKdjdTFvEHDZkvwOCCKwyJe6Qe8pGHcEksrU4DAMbuemg3bj_KhA8RtRK_M6RxDdcBERKZkio0MziFSkn7PX-HVaUQLQscer-pJf54V1o4Mvnac0yxxIXUvl_Og9h81NPGfJYMlDed3sWfZ46eocCPauHg" />
                  <img className="w-12 h-12 rounded-full border-2 border-zinc-950 object-cover" alt="User 2" src="https://lh3.googleusercontent.com/aida/ADBb0ujpWDssvj-A2Z470frlG9M8gmYyCANNQ0AA6_cI7Rs_VT4alerl9cebsxkAqRgMJBOSuwJX-mYPDOpSdpLDOhFA3RAk5V3T_ZgGUBQnDu66aeeht4nM9Jg_7mg_MJEZn_2p8EeXCACQYgkZy6BwiC1EtpE33BmBOFsmnVjLRlu4oeMEVJkAAD-PQ2jEQLhlCQFZMBMDB2lkz93A4972BNr4LjSKYDOPoiVLfSHo8AWsFU7MIF-do7srTRRW82JcndVs9nHiviz2TA" />
                </div>
                <p className="font-body-sm text-zinc-500 italic">"Manish brings a unique cinematic depth to every 3D interaction." — Previous Partner</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation Shell (Mobile Only) */}
      <nav className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 bg-zinc-900/60 backdrop-blur-2xl rounded-full border border-[#D7E2EA]/20 px-6 py-3 shadow-2xl shadow-black/50">
        <Link className="text-zinc-400 p-2 hover:scale-110 hover:text-zinc-50 transition-all" to="/">
          <span className="material-symbols-outlined" data-icon="home_max">home_max</span>
        </Link>
        <Link className="text-zinc-400 p-2 hover:scale-110 hover:text-zinc-50 transition-all" to="/projects">
          <span className="material-symbols-outlined" data-icon="category">category</span>
        </Link>
        <Link className="bg-[#D7E2EA] text-zinc-950 rounded-full p-2 scale-95 active:scale-90 transition-transform" to="/contact">
          <span className="material-symbols-outlined" data-icon="mail">mail</span>
        </Link>
        <Link className="text-zinc-400 p-2 hover:scale-110 hover:text-zinc-50 transition-all" to="/awards">
          <span className="material-symbols-outlined" data-icon="workspace_premium">workspace_premium</span>
        </Link>
        <Link className="text-zinc-400 p-2 hover:scale-110 hover:text-zinc-50 transition-all" to="/about">
          <span className="material-symbols-outlined" data-icon="person">person</span>
        </Link>
      </nav>

      {/* Footer */}
      <footer className="w-full py-20 px-12 border-t border-[#D7E2EA]/5 bg-transparent">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-8">
          <div className="text-zinc-50 font-bold font-['Kanit'] tracking-widest text-xl">MANISH</div>
          <p className="font-['Kanit'] font-light text-sm tracking-wide text-zinc-500">
            © 2024 Manish. Built for the cosmic void.
          </p>
          <div className="flex gap-8">
            <a className="text-zinc-500 hover:text-zinc-100 transition-colors duration-500 font-['Kanit'] text-sm uppercase tracking-widest" href="#">Instagram</a>
            <a className="text-zinc-500 hover:text-zinc-100 transition-colors duration-500 font-['Kanit'] text-sm uppercase tracking-widest" href="#">ArtStation</a>
            <a className="text-zinc-500 hover:text-zinc-100 transition-colors duration-500 font-['Kanit'] text-sm uppercase tracking-widest" href="#">Behance</a>
            <a className="text-zinc-100 font-bold transition-colors duration-500 font-['Kanit'] text-sm uppercase tracking-widest" href="https://linkedin.com/in/d-manish-930514292" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
