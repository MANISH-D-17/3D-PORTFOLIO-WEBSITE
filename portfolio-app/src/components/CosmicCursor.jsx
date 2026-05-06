import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CosmicCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef(null);
  const [particles, setParticles] = useState([]);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 300 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const trailLength = 12;
  const trailRefs = useRef([]);
  const trailPositions = useRef(Array.from({ length: trailLength }, () => ({ x: -100, y: -100 })));

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .glass-card, input, textarea')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleClick = (e) => {
      const newParticles = Array.from({ length: 8 }).map((_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        angle: (i * 45) * (Math.PI / 180),
      }));
      setParticles((prev) => [...prev, ...newParticles]);
      setTimeout(() => {
        setParticles((prev) => prev.slice(8));
      }, 400);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('click', handleClick);

    let raf;
    const updateTrail = () => {
      const mx = mouseX.get();
      const my = mouseY.get();
      
      trailPositions.current[0] = { x: mx, y: my };
      
      for (let i = 1; i < trailLength; i++) {
        const prev = trailPositions.current[i - 1];
        const curr = trailPositions.current[i];
        
        trailPositions.current[i] = {
          x: curr.x + (prev.x - curr.x) * 0.35,
          y: curr.y + (prev.y - curr.y) * 0.35,
        };
        
        if (trailRefs.current[i]) {
          trailRefs.current[i].style.transform = `translate3d(${trailPositions.current[i].x}px, ${trailPositions.current[i].y}px, 0) translate(-50%, -50%)`;
        }
      }
      raf = requestAnimationFrame(updateTrail);
    };
    raf = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Ghost Trail */}
      {!isHovered && Array.from({ length: trailLength }).map((_, i) => (
        <div
          key={i}
          ref={el => trailRefs.current[i] = el}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 4 + i,
            height: 4 + i,
            opacity: 0.8 - (i * 0.06),
            backgroundColor: i % 2 === 0 ? "#FFACEB" : "#B805AA",
            borderRadius: '50%',
            willChange: 'transform',
          }}
          className="absolute"
        />
      ))}

      {/* Main Cursor */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 40 : 10,
          height: isHovered ? 40 : 10,
          border: isHovered ? "2px solid #FFACEB" : "none",
          backgroundColor: isHovered ? "rgba(255, 172, 235, 0.1)" : "#FFACEB",
        }}
        className="absolute rounded-full"
      />

      {/* Click Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: p.x, y: p.y, opacity: 1, scale: 1 }}
          animate={{
            x: p.x + Math.cos(p.angle) * 50,
            y: p.y + Math.sin(p.angle) * 50,
            opacity: 0,
            scale: 0.2,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute w-1.5 h-1.5 bg-[#FFACEB] rounded-full"
        />
      ))}
    </div>
  );
};

export default CosmicCursor;
