import React from 'react';
import { motion } from 'framer-motion';
import useLinkedInData from '../hooks/useLinkedInData';

const Experience = () => {
  const { experience, loading } = useLinkedInData();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0C0C0C] flex items-center justify-center">
        <div className="font-mono text-zinc-500 text-sm uppercase tracking-widest animate-pulse">
          LOADING CAREER ARCHIVE...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0C0C0C] text-[#fcfdff] font-body-lg min-h-screen overflow-x-hidden selection:bg-purple-600 selection:text-white">
      <main className="relative pt-48 pb-40 px-6 md:px-12">
        {/* Header */}
        <header className="max-w-7xl mx-auto mb-32">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-label-mono text-secondary uppercase tracking-[0.4em] mb-6 block"
          >
            Professional Path
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-headline-xl text-7xl md:text-9xl text-white uppercase tracking-tighter leading-none"
          >
            EXPERIENCE &<br /><span className="text-zinc-800">LEADERSHIP</span>
          </motion.h1>
        </header>

        {/* Timeline Section */}
        <section className="max-w-7xl mx-auto space-y-24 relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>

          {experience.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-secondary rounded-full -translate-x-[6px] shadow-[0_0_15px_rgba(255,172,235,0.5)] z-10 hidden md:block"></div>

              {/* Content Card */}
              <a 
                href={item.linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className={`w-full md:w-[45%] group block cursor-pointer`}
              >
                <div className="glass-card p-10 rounded-3xl border border-white/5 group-hover:border-secondary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/5 relative overflow-hidden">
                  {/* Click indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-secondary text-sm">open_in_new</span>
                  </div>

                  <div className="flex justify-between items-start mb-6">
                    <span className="font-label-mono text-secondary text-[10px] uppercase tracking-widest px-3 py-1 bg-secondary/10 rounded-full">
                      {item.type}
                    </span>
                    <span className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest">
                      {item.duration}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white uppercase tracking-tighter mb-2 group-hover:text-secondary transition-colors">
                    {item.role}
                  </h2>
                  <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-6">
                    {item.company} // {item.location}
                  </p>
                  
                  <p className="text-zinc-400 font-body-lg text-sm leading-relaxed mb-8">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono uppercase tracking-widest text-zinc-400 group-hover:border-secondary/20 group-hover:text-zinc-200 transition-all">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </a>

              {/* Spacer for the other side */}
              <div className="hidden md:block w-[45%]"></div>
            </motion.div>
          ))}
        </section>

        {/* Narrative Section */}
        <section className="max-w-5xl mx-auto mt-40 py-24 px-10 glass-panel rounded-[3rem] border border-secondary/10 text-center">
          <span className="material-symbols-outlined text-secondary text-5xl mb-6">workspace_premium</span>
          <h2 className="font-headline-md text-white mb-6 uppercase tracking-tighter">Growth Beyond Code</h2>
          <p className="text-xl text-zinc-400 leading-relaxed font-light">
            I believe that true leadership is about <span className="text-white">empowering others</span> and creating 
            environments where technical precision meets creative freedom. My experience across leadership and 
            engineering roles has equipped me with a holistic view of product development.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Experience;
