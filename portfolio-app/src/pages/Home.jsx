import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useGithubData from '../hooks/useGithubData';
import heroImg from '../assets/manish_hero.jpg';
import aboutImg from '../assets/manish_about.jpg';
import portfolioImg from '../assets/Project/3d-portfolio.png';
import financeImg from '../assets/Project/ai-finance-advisor.png';
import imageGenImg from '../assets/Project/image-generator.png';
import drinkCounterImg from '../assets/Project/office-drink-counter.png';

import deloitteImg from '../assets/Awards/deloitte.png';
import innovsenseImg from '../assets/Awards/innovsense.png';
import nvidiaImg from '../assets/Awards/nvidia.png';
import yugamImg from '../assets/Awards/yugam.png';
import capablImg from '../assets/Awards/capabl.png';
import productShootImg from '../assets/Awards/product-shoot.png';
import letsDanceImg from '../assets/Awards/lets-dance.png';
import innovsenseTeamImg from '../assets/Awards/innovsense-team.png';

const ProjectSection = () => {
  const { repos } = useGithubData('MANISH-D-17');
  const featuredNames = ['3D-PORTFOLIO-WEBSITE', 'AI-FINANCE-ADVISOR', 'office-drink-counter', 'image-generator'];
  const featured = repos.filter(repo => featuredNames.includes(repo.name))
    .sort((a, b) => featuredNames.indexOf(a.name) - featuredNames.indexOf(b.name));

  const images = {
    'AI-FINANCE-ADVISOR': financeImg,
    'office-drink-counter': drinkCounterImg,
    'image-generator': imageGenImg,
    '3D-PORTFOLIO-WEBSITE': portfolioImg
  };

  const UI_MATCHING_PLACEHOLDERS = [
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1618267103063-8b5d10cb66ee?auto=format&fit=crop&q=80&w=800'
  ];

  const getProjectImage = (repoName, index) => {
    if (images[repoName]) return images[repoName];
    return UI_MATCHING_PLACEHOLDERS[index % UI_MATCHING_PLACEHOLDERS.length];
  };

  return (
    <section className="py-section-gap px-container-padding max-w-screen-2xl mx-auto" id="projects">
      <h2 className="font-headline-xl text-white mb-20">SELECTED WORKS</h2>
      <div className="space-y-stack-offset relative">
        {featured.map((repo, index) => (
          <div 
            key={repo.name} 
            className="sticky-card bg-[#141414] rounded-lg overflow-hidden h-[700px] flex flex-col md:flex-row border border-white/5"
            style={{ top: `${100 + (index * 40)}px` }}
          >
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-between">
              <div>
                <span className="font-label-mono text-secondary mb-4 uppercase tracking-widest text-[10px]">Case Study // 0{index + 1}</span>
                <h3 className="font-headline-xl text-5xl text-white uppercase tracking-tighter">{repo.name.replace(/-/g, ' ')}</h3>
              </div>
              <div>
                <p className="font-body-lg text-slate-400 mb-8 max-w-sm line-clamp-3 italic">
                  {repo.description || "Experimental digital architecture and development."}
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/MANISH-D-17" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-8 py-3 rounded-full bg-white text-zinc-950 font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-full bg-surface-container overflow-hidden relative">
              <div 
                className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100" 
                style={{ backgroundImage: `url('${getProjectImage(repo.name, index)}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20 flex flex-col items-center gap-6">
        <Link to="/projects" className="text-sm font-bold uppercase tracking-[0.4em] text-zinc-500 hover:text-white transition-all">Explore Full Archive</Link>
        <a 
          href="https://github.com/MANISH-D-17" 
          target="_blank" 
          rel="noreferrer"
          className="px-10 py-4 rounded-full border border-white/10 text-zinc-500 hover:text-white hover:border-white/40 transition-all text-[10px] font-mono uppercase tracking-[0.2em]"
        >
          View GitHub Profile
        </a>
      </div>
    </section>
  );
};

const MarqueeSection = () => {
  const allImages = [
    deloitteImg, innovsenseImg, nvidiaImg, yugamImg, 
    capablImg, productShootImg, letsDanceImg, innovsenseTeamImg,
    portfolioImg, financeImg, imageGenImg, drinkCounterImg
  ];
  
  // Shuffle images for randomness
  const shuffledImages = [...allImages].sort(() => Math.random() - 0.5);
  const row1 = shuffledImages.slice(0, 6);
  const row2 = shuffledImages.slice(6, 12);

  return (
    <section className="py-20 border-y border-white/5 bg-[#0C0C0C] overflow-hidden">
      <div className="space-y-12">
        <div className="marquee-track gap-12 flex">
          {[...row1, ...row1].map((img, i) => (
            <div key={i} className="h-64 aspect-square flex-shrink-0 rounded-2xl overflow-hidden border border-white/5 glass-panel group">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
                alt={`Showcase ${i}`} 
                src={img} 
              />
            </div>
          ))}
        </div>
        <div className="marquee-track-reverse gap-12 flex">
          {[...row2, ...row2].map((img, i) => (
            <div key={i} className="h-64 aspect-square flex-shrink-0 rounded-2xl overflow-hidden border border-white/5 glass-panel group">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
                alt={`Showcase ${i}`} 
                src={img} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="font-body-lg bg-[#131314]">
      <main className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center pt-48 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-400 rounded-full blur-[120px]"></div>
          </div>
          <div className="z-10 text-center max-w-6xl">
            <p className="font-label-mono text-label-mono text-secondary mb-8 uppercase tracking-[0.4em]">DIGITAL CRAFTSMANSHIP</p>
            <h1 className="font-display-hero text-6xl md:text-display-hero steel-gradient uppercase mb-6 leading-none select-none">
              Hi, i'm manish
            </h1>
            <p className="font-headline-md text-slate-400 max-w-3xl mx-auto mb-16 font-light leading-snug">
              A 3D creator driven by crafting striking and <span className="text-white">unforgettable projects</span>
            </p>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative w-72 h-96 md:w-[500px] md:h-[600px] rounded-lg overflow-hidden glass-panel mx-auto">
                <img alt="Manish Portrait" className="w-full h-full object-cover transition-all duration-700" src={heroImg} />
              </div>
            </div>
          </div>
        </section>

        {/* Marquee Section */}
        <MarqueeSection />

        {/* About Section */}
        <section className="py-section-gap px-container-padding max-w-7xl mx-auto relative" id="about">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-label-mono text-secondary uppercase tracking-[0.4em] mb-6 block"
              >
                The Visionary
              </motion.span>
              <h2 className="font-headline-xl text-6xl md:text-8xl text-white mb-12 uppercase tracking-tighter leading-[0.85]">
                Design that <br /><span className="text-zinc-800 italic">Defies</span> Gravity.
              </h2>
              <div className="space-y-8 text-zinc-400 font-headline-md text-2xl md:text-3xl leading-snug">
                <p>
                  I'm Manish D, a specialized 3D creator and developer focused on crafting <span className="text-white">unforgettable digital experiences</span> through technical precision and artistic flair.
                </p>
                <div className="flex gap-8 pt-4">
                  <Link to="/about" className="text-xs font-bold uppercase tracking-widest text-secondary border-b border-secondary pb-1 hover:text-white hover:border-white transition-all">Read My Story</Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-panel border border-white/10 group">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                  alt="Portrait" 
                  src={aboutImg} 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white text-zinc-950 p-8 rounded-2xl hidden md:block shadow-2xl">
                <span className="font-headline-xl text-5xl">22</span>
                <p className="font-label-mono text-[10px] uppercase tracking-widest mt-2">Projects Launched</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-section-gap bg-surface-container-lowest rounded-xl mx-4 md:mx-10 overflow-hidden">
          <div className="max-w-screen-xl mx-auto px-10">
            <p className="font-label-mono text-secondary-fixed-dim mb-12 text-center uppercase tracking-[0.3em]">SERVICES PROVIDED</p>
            <div className="divide-y divide-white/5">
              {[
                { id: '01', title: 'AI & LLM INTEGRATION', icon: 'psychology' },
                { id: '02', title: '3D IMMERSIVE DESIGN', icon: 'view_in_ar' },
                { id: '03', title: 'FULL-STACK DEVELOPMENT', icon: 'terminal' },
                { id: '04', title: 'CLOUD ARCHITECTURE', icon: 'cloud_done' },
                { id: '05', title: 'VISUAL STORYTELLING', icon: 'photo_camera' },
              ].map((service) => (
                <div key={service.id} className="group py-12 flex justify-between items-center hover:px-8 transition-all duration-500 cursor-default">
                  <div className="flex items-center gap-12">
                    <span className="font-label-mono text-slate-600 text-2xl">{service.id}</span>
                    <h3 className="font-headline-md text-white group-hover:tracking-wider transition-all duration-500">{service.title}</h3>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-slate-700 group-hover:text-white transition-colors">{service.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <ProjectSection />

        {/* CTA Section */}
        <section className="py-section-gap px-container-padding text-center">
          <h2 className="font-headline-xl text-white mb-8">Ready to bring your ideas to life?</h2>
          <p className="font-body-lg text-slate-400 mb-12 max-w-xl mx-auto">Let's create something unforgettable together.</p>
          <Link className="inline-block px-12 py-5 rounded-full cosmic-gradient text-white font-black uppercase tracking-widest text-lg hover:scale-110 transition-transform shadow-2xl shadow-purple-500/20" to="/contact">START A PROJECT</Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
