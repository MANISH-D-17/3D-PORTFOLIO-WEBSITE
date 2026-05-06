import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SkillOrbit from '../components/SkillOrbit';
import aboutImg from '../assets/manish_about.jpg';

const About = () => {
  return (
    <div className="bg-[#0C0C0C] text-[#fcfdff] font-body-lg overflow-x-hidden cosmic-void">
      <main className="relative pt-48">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-container-padding">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 z-10">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-label-mono text-secondary uppercase tracking-[0.4em] mb-6 block"
              >
                The Architect's Story
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-headline-xl text-7xl md:text-9xl text-white mb-12 uppercase tracking-tighter leading-[0.85]"
              >
                I Build <br /><span className="text-zinc-800 italic">Digital</span> Universes.
              </motion.h1>
              <div className="space-y-8 text-zinc-400 font-headline-md text-2xl md:text-3xl leading-snug">
                <p>
                  I'm Manish D, a specialized developer and designer from India, focused on creating high-impact digital products through meticulous UI/UX storytelling and robust engineering.
                </p>
                <p>
                  With a background in both <span className="text-white">creative direction</span> and <span className="text-white">full-stack development</span>, I bridge the gap between technical precision and real-world impact.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-panel border border-white/10 group">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                  alt="Portrait" 
                  src={aboutImg} 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white text-zinc-950 p-8 rounded-2xl hidden md:block">
                <span className="font-headline-xl text-5xl">22</span>
                <p className="font-label-mono text-[10px] uppercase tracking-widest mt-2">Public Repositories</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Leadership */}
        <section className="py-section-gap px-container-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4">
              <h2 className="font-headline-xl text-5xl text-white uppercase tracking-tighter mb-12">Accolades</h2>
              <div className="space-y-12">
                <div>
                  <span className="font-label-mono text-zinc-600 block mb-2">2024</span>
                  <h3 className="text-white font-bold text-xl uppercase">NVIDIA GPU Codeathon</h3>
                  <p className="text-zinc-500 text-sm uppercase font-mono mt-1">3rd Place Technical Excellence</p>
                </div>
                <div>
                  <span className="font-label-mono text-zinc-600 block mb-2">2024</span>
                  <h3 className="text-white font-bold text-xl uppercase">Capable 2024</h3>
                  <p className="text-zinc-500 text-sm uppercase font-mono mt-1">National Level Hackathon Finalist</p>
                </div>
                <div>
                  <span className="font-label-mono text-zinc-600 block mb-2">Leadership</span>
                  <h3 className="text-white font-bold text-xl uppercase">Club President</h3>
                  <p className="text-zinc-500 text-sm uppercase font-mono mt-1">Leading technical innovation & growth</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-headline-xl text-5xl text-white uppercase tracking-tighter mb-12">Skills Universe</h2>
              
              <div className="w-full h-[400px] md:h-[600px] flex items-center justify-center">
                <SkillOrbit />
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default About;
