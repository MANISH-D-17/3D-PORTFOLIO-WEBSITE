import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalReveal = ({ projectName, onComplete }) => {
  const [lines, setLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const sequence = useMemo(() => [
    "loading project...",
    "reading package.json",
    "dependencies resolved ✓",
    `building ${projectName}...`,
    "STATUS: READY"
  ], [projectName]);

  useEffect(() => {
    if (currentLineIndex < sequence.length) {
      const currentFullLine = sequence[currentLineIndex];
      if (currentCharIndex < currentFullLine.length) {
        const timeout = setTimeout(() => {
          setCurrentCharIndex(prev => prev + 1);
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setLines(prev => [...prev, currentFullLine]);
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 200);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => {
        setIsFinished(true);
        onComplete();
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, sequence, projectName, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 z-50 bg-[#0C0C0C] p-8 font-mono text-sm flex flex-col justify-center"
        >
          <div className="space-y-1">
            {lines.map((line, i) => (
              <div key={i} className="text-zinc-500">
                <span className="text-zinc-700 mr-2">{">"}</span>
                {line}
              </div>
            ))}
            {currentLineIndex < sequence.length && (
              <div className="text-zinc-300">
                <span className="text-zinc-700 mr-2">{">"}</span>
                {sequence[currentLineIndex].substring(0, currentCharIndex)}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-white ml-1"
                />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalReveal;
