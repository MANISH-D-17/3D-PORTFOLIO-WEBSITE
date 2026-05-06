import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const AmbientToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtx = useRef(null);
  const oscillator = useRef(null);

  const toggleSound = () => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (!isPlaying) {
      oscillator.current = audioCtx.current.createOscillator();
      const gainNode = audioCtx.current.createGain();
      
      oscillator.current.type = 'sine';
      oscillator.current.frequency.setValueAtTime(40, audioCtx.current.currentTime);
      
      gainNode.gain.setValueAtTime(0, audioCtx.current.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.03, audioCtx.current.currentTime + 1);
      
      oscillator.current.connect(gainNode);
      gainNode.connect(audioCtx.current.destination);
      
      oscillator.current.start();
      setIsPlaying(true);
    } else {
      oscillator.current.stop();
      setIsPlaying(false);
    }
  };

  return (
    <button 
      onClick={toggleSound}
      className={`fixed bottom-10 right-10 z-50 p-4 rounded-full glass-panel border border-white/10 transition-all ${isPlaying ? 'bg-secondary/20 border-secondary' : ''}`}
    >
      <span className="material-symbols-outlined text-white">
        {isPlaying ? 'volume_up' : 'volume_off'}
      </span>
      <span className="ml-2 font-mono text-[10px] uppercase tracking-widest hidden md:inline">Ambient Mode</span>
    </button>
  );
};

const Contact = () => {
  const [state, handleSubmit] = useForm("mjglrzwz"); 
  const [step, setStep] = useState('form');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-[#0C0C0C] flex items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 rounded-3xl max-w-xl border border-white/10"
        >
          <span className="material-symbols-outlined text-6xl text-secondary mb-6 block">check_circle</span>
          <h2 className="text-4xl font-bold text-white uppercase mb-4 tracking-tighter">Transmission Received</h2>
          <motion.p 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            className="text-zinc-400 font-mono text-sm overflow-hidden whitespace-nowrap border-r border-secondary"
          >
            Manish will respond within 24 hours. ✓
          </motion.p>
          <Link to="/" className="mt-8 inline-block px-8 py-3 bg-white text-zinc-950 font-bold rounded-full uppercase text-xs tracking-widest">
            Return to Core
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#0c0c0c] text-[#fcfdff] font-body-lg overflow-x-hidden">
      <AmbientToggle />
      <main className="relative pt-48 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Content Side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="font-label-mono text-secondary uppercase tracking-[0.4em] block">Encrypted Channel</span>
              <h1 className="font-headline-xl text-6xl md:text-8xl text-white uppercase tracking-tighter leading-none">
                Got a project that should feel alive? <br /><span className="text-zinc-800">Let's build it.</span>
              </h1>
              <p className="font-body-lg text-zinc-400 max-w-md text-xl">
                Merging 3D precision with seamless user experiences. Drop a line to start a cosmic collaboration.
              </p>
            </div>
          </div>

          {/* Form / Preview Side */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {step === 'form' ? (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="glass-panel p-8 md:p-12 rounded-3xl sticky top-32 border border-white/5"
                >
                  <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">Name</label>
                        <input 
                          type="text" 
                          name="name" 
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full bg-transparent border-b border-white/10 focus:border-secondary py-3 text-xl transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">Email</label>
                        <input 
                          type="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="w-full bg-transparent border-b border-white/10 focus:border-secondary py-3 text-xl transition-all outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">Vision</label>
                      <textarea 
                        name="message" 
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project..."
                        rows="4"
                        className="w-full bg-transparent border-b border-white/10 focus:border-secondary py-3 text-xl transition-all outline-none resize-none"
                      />
                    </div>
                    <button 
                      type="button"
                      onClick={() => setStep('preview')}
                      className="w-full py-5 bg-white text-zinc-950 font-black uppercase tracking-widest text-xs rounded-full hover:scale-[1.02] transition-all"
                    >
                      Initialize Preview
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="preview"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="glass-panel p-8 md:p-12 rounded-3xl sticky top-32 border border-secondary/20 bg-secondary/5"
                >
                  <div className="font-mono text-sm space-y-6">
                    <div className="flex items-center gap-2 text-zinc-500 mb-8">
                      <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
                      <span className="ml-4 uppercase tracking-widest text-[10px]">Message Preview</span>
                    </div>
                    
                    <div>
                      <span className="text-secondary mr-4">{">"} SENDER:</span>
                      <span className="text-white">{formData.name || 'ANONYMOUS'}</span>
                    </div>
                    <div>
                      <span className="text-secondary mr-4">{">"} CONTACT:</span>
                      <span className="text-white">{formData.email || 'N/A'}</span>
                    </div>
                    <div className="pt-4 border-t border-white/5">
                      <span className="text-secondary block mb-2">{">"} DATA STREAM:</span>
                      <p className="text-zinc-400 leading-relaxed italic">
                        "{formData.message || 'No content provided.'}"
                      </p>
                    </div>

                    <div className="flex gap-4 pt-12">
                      <button 
                        onClick={() => setStep('form')}
                        className="flex-1 py-4 border border-white/10 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-white/5"
                      >
                        Edit
                      </button>
                      <form onSubmit={handleSubmit} className="flex-[2]">
                        <input type="hidden" name="name" value={formData.name} />
                        <input type="hidden" name="email" value={formData.email} />
                        <input type="hidden" name="message" value={formData.message} />
                        <button 
                          type="submit" 
                          disabled={state.submitting} 
                          className="w-full py-4 bg-secondary text-white rounded-full font-bold uppercase text-[10px] tracking-widest hover:scale-105 transition-all shadow-xl shadow-secondary/20"
                        >
                          {state.submitting ? 'Transmitting...' : 'Send Transmission'}
                        </button>
                      </form>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Contact;
