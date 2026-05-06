// src/pages/Awards.jsx — Full rewrite consuming useLinkedInData hook
import React from 'react';
import { motion } from 'framer-motion';
import VoidShader from '../components/VoidShader';
import TrophyModel from '../components/TrophyModel';
import useLinkedInData from '../hooks/useLinkedInData';

const Awards = () => {
  const { awards, certifications, loading, lastUpdated } = useLinkedInData();

  // Loading state — matches the exact style used in Projects.jsx
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0C0C0C] flex items-center justify-center">
        <div className="font-mono text-zinc-500 text-sm uppercase tracking-widest">
          SYNCING LINKEDIN DATA...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0C0C0C] text-[#fcfdff] font-body-lg overflow-x-hidden selection:bg-purple-600 selection:text-white">
      <VoidShader />
      <main className="relative pt-48 pb-40 px-6 md:px-12">

        {/* ── HEADER — IDENTICAL TO CURRENT ── */}
        <header className="max-w-7xl mx-auto py-24 border-b border-white/5">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-label-mono text-secondary uppercase tracking-[0.4em] mb-6 block"
          >
            Curated Excellence
          </motion.span>
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-headline-xl text-7xl md:text-9xl text-white uppercase tracking-tighter leading-none"
            >
              AWARDS &<br /><span className="text-zinc-800">RECOGNITION</span>
            </motion.h1>
            <div className="flex flex-col items-end gap-3 mb-4">
              <motion.a
                href="https://www.linkedin.com/in/d-manish-930514292/"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="px-10 py-4 bg-[#0077b5] text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">verified</span>
                Verify on LinkedIn
              </motion.a>
              {/* Live sync badge — shows when data was last updated */}
              {lastUpdated && (
                <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
                  ● Data synced: {lastUpdated}
                </span>
              )}
            </div>
          </div>
        </header>

        {/* ── AWARDS GRID — NOW FROM useLinkedInData ── */}
        {/* Layout is IDENTICAL to current — only data source changed */}
        <section className="max-w-7xl mx-auto py-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {awards.map((award, index) => (
            <motion.a
              key={award.id}
              href={award.linkedInUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-3xl border border-white/5 group hover:border-secondary/20 transition-all flex flex-col md:flex-row items-center gap-8 cursor-pointer"
            >
              <div className="w-64 h-64 md:w-48 md:h-48 flex-shrink-0 rounded-2xl overflow-hidden relative border border-white/10 bg-zinc-900 group">
                {award.image ? (
                  <img 
                    src={award.image} 
                    alt={award.title} 
                    className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-black/40">
                    <TrophyModel type={award.type} />
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="material-symbols-outlined text-xs opacity-40 text-white bg-black/50 p-1 rounded-md backdrop-blur-sm">
                    {award.icon}
                  </span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                  <span className="font-label-mono text-zinc-600 block uppercase text-[10px] tracking-widest">
                    {award.category} // {award.year}
                  </span>
                  {award.verified && (
                    <span className="material-symbols-outlined text-[#0077b5] text-xs" title="Verified on LinkedIn">
                      verified
                    </span>
                  )}
                </div>
                <h2 className="text-3xl font-bold text-white uppercase tracking-tighter mb-2 group-hover:text-secondary transition-colors">
                  {award.title}
                </h2>
                <p className="text-secondary font-black uppercase text-xs tracking-widest mb-4">{award.rank}</p>
                <p className="text-zinc-400 font-body-lg text-sm leading-relaxed mb-4">{award.description}</p>
                {/* Skills tags — NEW addition, same style as Projects.jsx tags */}
                <div className="flex flex-wrap gap-2">
                  {award.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono uppercase tracking-widest text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </section>

        {/* ── CERTIFICATIONS TABLE — NOW FROM useLinkedInData ── */}
        {/* Layout is IDENTICAL to current — only data source changed */}
        <section className="max-w-7xl mx-auto py-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="font-headline-xl text-5xl md:text-7xl text-white uppercase tracking-tighter">
              Verified Skills
            </h2>
            <div className="text-right">
              <p className="font-body-lg text-zinc-500 max-w-sm">
                Converting certificates into practical, AI-driven solutions.
              </p>
              <p className="font-mono text-[9px] text-zinc-700 uppercase tracking-widest mt-2">
                {certifications.length} certifications · LinkedIn verified
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-px bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            {certifications.map((cert, index) => (
              <motion.a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                key={cert.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-12 p-10 glass-panel items-center hover:bg-white/10 transition-all group cursor-pointer"
              >
                <div className="md:col-span-2 font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
                  {cert.year}
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-bold text-2xl uppercase text-zinc-400 group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-zinc-600 text-xs mt-1 uppercase tracking-widest">{cert.platform}</p>
                </div>
                {/* Skills pills */}
                <div className="md:col-span-3 flex flex-wrap gap-1 mt-4 md:mt-0">
                  {cert.skills.slice(0, 2).map(skill => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-[8px] font-mono uppercase tracking-widest text-zinc-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="md:col-span-2 font-body-sm text-zinc-500 italic text-right group-hover:text-secondary transition-colors flex items-center justify-end gap-3">
                  {cert.verified && (
                    <span className="material-symbols-outlined text-[#0077b5] text-xs" title="Verified">verified</span>
                  )}
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                    arrow_outward
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* ── NARRATIVE SECTION — IDENTICAL TO CURRENT ── */}
        <section className="max-w-5xl mx-auto mt-32 py-20 px-10 glass-panel rounded-[3rem] border border-secondary/10 text-center">
          <span className="material-symbols-outlined text-secondary text-5xl mb-6">psychology</span>
          <h2 className="font-headline-md text-white mb-6 uppercase tracking-tighter">The Hybrid Advantage</h2>
          <p className="text-xl text-zinc-400 leading-relaxed font-light">
            My path is defined by a rare intersection of{' '}
            <span className="text-white">Technical Credibility</span>,{' '}
            <span className="text-white">Creative Storytelling</span>, and{' '}
            <span className="text-white">AI Innovation</span>. I don't just write code; I orchestrate
            intelligent digital experiences that are technically robust and visually unforgettable.
          </p>
        </section>

      </main>
    </div>
  );
};

export default Awards;
