import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Visuals = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // Dynamically import all images from src/assets/photos
  const imageModules = import.meta.glob('../assets/photos/*.{png,jpg,jpeg,webp,SVG}', { eager: true });
  
  const photos = Object.entries(imageModules).map(([path, module], index) => {
    // Extract filename for the title
    const filename = path.split('/').pop().split('.')[0];
    return {
      id: index + 1,
      url: module.default,
      title: `Composition ${index + 1}`, // Simplified titles
      category: 'Original Work'
    };
  });

  return (
    <div className="bg-[#0C0C0C] text-[#fcfdff] font-body-lg min-h-screen overflow-x-hidden selection:bg-purple-600 selection:text-white">
      <main className="relative pt-48 pb-40 px-6 md:px-12">
        {/* Header */}
        <header className="max-w-7xl mx-auto mb-24">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-label-mono text-secondary uppercase tracking-[0.4em] mb-6 block"
          >
            Behind the Lens
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-headline-xl text-7xl md:text-9xl text-white uppercase tracking-tighter leading-none"
          >
            VISUAL<br /><span className="text-zinc-800">STORYTELLING</span>
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="max-w-2xl text-zinc-500 font-body-lg text-xl mt-8"
          >
            A collection of moments captured through my lens, exploring the intersection of light, shadow, and digital composition.
          </motion.p>
        </header>

        {/* Masonry-style Grid */}
        <section className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {photos.map((photo, index) => (
            <motion.div 
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer break-inside-avoid"
              onClick={() => setSelectedImg(photo)}
            >
              <div className="rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 aspect-auto">
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="font-label-mono text-secondary text-[10px] uppercase tracking-widest mb-2">
                  {photo.category}
                </span>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">
                  {photo.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-black/95 backdrop-blur-xl"
              onClick={() => setSelectedImg(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="max-w-7xl w-full max-h-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImg.url} 
                  alt={selectedImg.title} 
                  className="w-full h-full object-contain rounded-2xl shadow-2xl"
                />
                <button 
                  className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                  onClick={() => setSelectedImg(null)}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
                <div className="absolute -bottom-16 left-0 right-0 text-center">
                  <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">{selectedImg.title}</h2>
                  <p className="font-label-mono text-zinc-500 text-[10px] uppercase tracking-widest mt-2">{selectedImg.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Visuals;
