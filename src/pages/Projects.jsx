import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="bg-[#0c0c0c] text-[#FCFDFF] font-body-lg overflow-x-hidden pt-32">
      {/* Main Content Canvas */}
      <main className="relative z-10">
        {/* Hero Title Section */}
        <header className="h-screen flex flex-col justify-center items-center px-container-padding text-center">
          <div className="space-y-4">
            <span className="font-label-mono text-label-mono text-primary-fixed uppercase">Portfolio Edition 2024</span>
            <h1 className="font-display-hero text-display-hero uppercase">SELECTED<br /><span className="text-zinc-700">CREATIONS</span></h1>
            <p className="max-w-2xl mx-auto font-body-lg text-on-surface-variant mt-8">
              An archive of spatial experiments, cinematic motion, and high-fidelity 3D visualization crafted at the intersection of geometry and light.
            </p>
          </div>
          <div className="mt-20 animate-bounce">
            <span className="material-symbols-outlined text-zinc-500 text-4xl">expand_more</span>
          </div>
        </header>

        {/* Category Filter */}
        <section className="sticky top-[80px] z-40 py-8 px-12 flex justify-center gap-4 pointer-events-none">
          <div className="glass-card px-6 py-3 rounded-full flex gap-8 pointer-events-auto">
            <button className="text-zinc-50 font-label-mono uppercase text-xs tracking-[0.2em]">All Projects</button>
            <button className="text-zinc-500 font-label-mono uppercase text-xs tracking-[0.2em] hover:text-zinc-50">Motion Design</button>
            <button className="text-zinc-500 font-label-mono uppercase text-xs tracking-[0.2em] hover:text-zinc-50">Branding</button>
            <button className="text-zinc-500 font-label-mono uppercase text-xs tracking-[0.2em] hover:text-zinc-50">3D Visualization</button>
          </div>
        </section>

        {/* Project Grid: Case Study Layout */}
        <section className="max-w-7xl mx-auto px-gutter py-section-gap space-y-40">
          {/* Project 1: Weather Application */}
          <div className="sticky-card" style={{ top: '100px' }}>
            <div className="glass-card rounded-xl overflow-hidden group border-primary/10">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12 flex flex-col justify-between">
                  <div>
                    <span className="font-label-mono text-label-mono text-primary tracking-widest uppercase mb-4 block">Case Study 01 / Frontend + UI</span>
                    <h2 className="font-headline-xl text-headline-xl text-zinc-100 mb-6 uppercase tracking-tighter">Weather<br />Companion</h2>
                    <div className="space-y-6 text-zinc-400 font-body-lg">
                      <p><strong className="text-white">Problem:</strong> Users struggle with cluttered weather apps that lack personalization and intuitive design.</p>
                      <p><strong className="text-white">My Role:</strong> UI/UX Designer + Frontend Developer</p>
                      <p><strong className="text-white">Technologies:</strong> React.js, Tailwind CSS, OpenWeather API</p>
                    </div>
                  </div>
                  <div className="pt-12 flex gap-6">
                    <a className="px-6 py-3 bg-primary text-zinc-950 font-bold uppercase tracking-widest text-xs rounded-full hover:scale-110 transition-transform" href="#">View Live</a>
                    <a className="px-6 py-3 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white/10 transition-all" href="#">GitHub</a>
                  </div>
                </div>
                <div className="relative h-[600px] bg-zinc-900 overflow-hidden">
                  <img className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Weather Application UI" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTAy0C1YX4dyP70EQua4O6wHk3dA5JiVeh9pUedtL6i5SEyqUVN_yGfUC00jaHl-h8FMvKNXLWv3g__uxKodgSeLf4BskPpNhl4ZsSKekOJ8Fi77c7Q1v7TG1T7Zmi9TcdZ5fKXx0GqAbr2Ww7SYNjaJCzPBkUgmcazHPzFVq_4198aXoOtEf7L1YiImE7EL-EcHX0L59qDxfiaAewUiOUuIdZ6lEb6-VJmA_w4epIoq0FX03B3BhdUzO4l-GkKXQ4O4fhtgxnPbQ" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: AI Assistant Doctor */}
          <div className="sticky-card" style={{ top: '140px' }}>
            <div className="glass-card rounded-xl overflow-hidden group border-secondary/10">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="order-2 lg:order-1 relative h-[600px] bg-zinc-900">
                  <img className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="AI Assistant Doctor UI" src="https://lh3.googleusercontent.com/aida/ADBb0uhGoJoq802jWDMs5nzAPEU2_lrzfuP6_mpPWzjr2ZncUi4U5XuXwB0X8M99t3YVDoo57jfhvX7Ipe19k_pxJSAy3vcUEdjAir6eY0Nz_uILygcQc3o62T2WIuEw1YRFfUdm_bI46EbL-wslBP0usxe3fvaJUKxtcFGxI7GDUvLbC4J1h2hbb7ZyMbRCAFBeQ-1K4VdRadthk6ReQOG6lmLYE-V7B_-SEAerPaJ7exptlM8xteYrL3R4GIv6pl_00Ep08fySPAB6" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
                </div>
                <div className="order-1 lg:order-2 p-12 flex flex-col justify-between bg-zinc-900/40">
                  <div>
                    <span className="font-label-mono text-label-mono text-secondary tracking-widest uppercase mb-4 block">Case Study 02 / AI + Hackathon</span>
                    <h2 className="font-headline-xl text-headline-xl text-zinc-100 mb-6 uppercase tracking-tighter">AI Assistant<br />Doctor</h2>
                    <div className="space-y-6 text-zinc-400 font-body-lg">
                      <p><strong className="text-white">Problem:</strong> Access to quick preliminary medical guidance is limited for many users.</p>
                      <p><strong className="text-white">My Role:</strong> Frontend + AI Integration</p>
                      <p><strong className="text-white">Technologies:</strong> Gradio, Groq, ElevenLabs</p>
                    </div>
                  </div>
                  <div className="pt-12">
                    <p className="text-xs font-label-mono text-secondary uppercase mb-4">Outcome: Hackathon Finalist</p>
                    <a className="group/btn inline-flex items-center gap-4 text-zinc-50 font-bold uppercase tracking-widest text-sm" href="#">
                      Project Details
                      <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: Expense Tracker */}
          <div className="sticky-card pb-32" style={{ top: '180px' }}>
            <div className="glass-card rounded-xl overflow-hidden group border-primary-fixed/10">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12 flex flex-col justify-between">
                  <div>
                    <span className="font-label-mono text-label-mono text-primary-fixed tracking-widest uppercase mb-4 block">Case Study 03 / Minimal UI</span>
                    <h2 className="font-headline-xl text-headline-xl text-zinc-100 mb-6 uppercase tracking-tighter">Expense<br />Insight</h2>
                    <div className="space-y-6 text-zinc-400 font-body-lg">
                      <p><strong className="text-white">Problem:</strong> Users need a clean and simple way to track expenses without overwhelming interfaces.</p>
                      <p><strong className="text-white">Outcome:</strong> Designed a modern finance UI focused on clarity and usability.</p>
                    </div>
                  </div>
                  <div className="pt-12">
                    <a className="group/btn inline-flex items-center gap-4 text-zinc-50 font-bold uppercase tracking-widest text-sm" href="#">
                      View Case Study
                      <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
                    </a>
                  </div>
                </div>
                <div className="relative h-[600px] bg-zinc-900">
                  <img className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Expense Tracker UI" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQjjKOoivb_XItvYCw06yAwEhftLug302u01sh1QdDChhEjSd61kzGOEUrue-Afp4Q6oEtFNGAV5kVFXXX90yw9cBo3oNCXvWb0OumhqBdsb-VLbj2DI8EwdVIMM68kTwox0pDSCU9KpOhRHU53b3D4aBbUYoCFE72uG_mEE2X4uIJBN58LrN8YULaSHzX-bp8gfTM4zKerd6X5Xa9LQq99eYSzJEsRgXxKUW5T5Zh18yK3Ere5q0gK7O9MDsWsm5aDOwlsNrYHzY" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid: Details & Metrics */}
        <section className="max-w-7xl mx-auto px-gutter py-section-gap grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 glass-card p-12 rounded-lg flex flex-col justify-end min-h-[400px] relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-headline-md text-headline-md text-zinc-50">TECHNICAL RIGOR</h3>
              <p className="text-zinc-400 mt-4 max-w-md">Every project starts with a mathematical approach to composition. We don't just render images; we simulate environments with physical accuracy.</p>
            </div>
            <div className="absolute -right-20 -top-20 opacity-10">
              <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>view_in_ar</span>
            </div>
          </div>
          <div className="glass-card p-12 rounded-lg flex flex-col justify-center items-center text-center">
            <span className="text-zinc-500 font-label-mono uppercase mb-4">Total Renders</span>
            <span className="font-display-hero text-headline-xl text-zinc-50 tracking-tighter">1.2K+</span>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Projects;
