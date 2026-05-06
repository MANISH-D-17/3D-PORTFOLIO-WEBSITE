import React from 'react';
import { motion } from 'framer-motion';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[1000] bg-[#0C0C0C] flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-8xl font-black font-['Kanit'] text-white"
        >
          M
        </motion.div>
        <div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-full cosmic-gradient"
          />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
