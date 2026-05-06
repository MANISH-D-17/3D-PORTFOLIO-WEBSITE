import React from 'react';
import { motion } from 'framer-motion';

const SkillPill = ({ name, angle, radius, duration, reverse }) => {
  return (
    <motion.div
      animate={{
        rotate: reverse ? -360 : 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        position: 'absolute',
        width: radius * 2,
        height: radius * 2,
        left: '50%',
        top: '50%',
        marginLeft: -radius,
        marginTop: -radius,
        pointerEvents: 'none',
      }}
    >
      <motion.div
        whileHover={{ scale: 1.3, zIndex: 10 }}
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'auto',
        }}
        className="px-4 py-2 bg-[#131314] border border-[#FFACEB]/20 rounded-full text-[10px] font-mono text-white whitespace-nowrap cursor-pointer shadow-xl shadow-black/50"
      >
        <motion.div
          animate={{
            rotate: reverse ? 360 : -360,
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {name}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const SkillOrbit = () => {
  const orbits = [
    { radius: 120, duration: 8, reverse: false, skills: ["Figma", "Adobe XD", "Framer"] },
    { radius: 180, duration: 12, reverse: true, skills: ["React", "Tailwind", "Vite", "Three.js"] },
    { radius: 240, duration: 16, reverse: false, skills: ["Python", "Node.js", "FastAPI"] },
    { radius: 300, duration: 20, reverse: true, skills: ["Git", "GitHub", "VS Code", "Vercel"] },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[700px] mx-auto flex items-center justify-center overflow-visible scale-[0.45] sm:scale-[0.7] md:scale-100">
      {/* Central Sun */}
      <div className="relative z-20 w-24 h-24 rounded-full overflow-hidden border-4 border-[#FFACEB] shadow-[0_0_50px_rgba(255,172,235,0.3)]">
        <img 
          src="https://lh3.googleusercontent.com/aida/ADBb0uhGoJoq802jWDMs5nzAPEU2_lrzfuP6_mpPWzjr2ZncUi4U5XuXwB0X8M99t3YVDoo57jfhvX7Ipe19k_pxJSAy3vcUEdjAir6eY0Nz_uILygcQc3o62T2WIuEw1YRFfUdm_bI46EbL-wslBP0usxe3fvaJUKxtcFGxI7GDUvLbC4J1h2hbb7ZyMbRCAFBeQ-1K4VdRadthk6ReQOG6lmLYE-V7B_-SEAerPaJ7exptlM8xteYrL3R4GIv6pl_00Ep08fySPAB6" 
          alt="Manish"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Orbits */}
      {orbits.map((orbit, orbitIndex) => (
        <React.Fragment key={orbitIndex}>
          {/* Orbital Ring */}
          <div 
            style={{
              width: orbit.radius * 2,
              height: orbit.radius * 2,
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
            className="absolute rounded-full pointer-events-none"
          />
          
          {/* Skill Pills */}
          {orbit.skills.map((skill, skillIndex) => {
            const angle = (skillIndex / orbit.skills.length) * 360;
            return (
              <div
                key={skill}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  transform: `rotate(${angle}deg)`,
                  pointerEvents: 'none',
                }}
              >
                <SkillPill 
                  name={skill} 
                  radius={orbit.radius} 
                  duration={orbit.duration} 
                  reverse={orbit.reverse}
                />
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SkillOrbit;
