import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import useGithubData from '../hooks/useGithubData';
import portfolioImg from '../assets/Project/3d-portfolio.png';
import financeImg from '../assets/Project/ai-finance-advisor.png';
import imageGenImg from '../assets/Project/image-generator.png';
import drinkCounterImg from '../assets/Project/office-drink-counter.png';
import TerminalReveal from '../components/TerminalReveal';

const ProjectCard = ({ repo, index, stickyTop }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasBooted, setHasBooted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Featured image mapping
  const images = {
    'RIVARA-ITALY': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEuL4BRoZ_MqnaeqoXsppNLYqHsqrXLK7Do6NAYQBRTDAjxct_oLR5Vj051YpmNQ04NrJb0AeiRCTJearTtXNfSKmDwzn3yN9_GSqI2o-p1aNbLysztpF_FvyIItwoN38WFMu_dE7i5LMhGn3zVhYsykxqPObbTDd78L1sgj_yDjLux3awN9bPWy7zTgTHHrQjwsmCH1L5OWZftqXZp0xjjEfRo-AJian6mtL04MLnmKKSsF21sIKuw5eTypVYnbaBAMS60aiTuPs',
    '3D-PORTFOLIO-WEBSITE': portfolioImg,
    'AI-FINANCE-ADVISOR': financeImg,
    'image-generator': imageGenImg,
    'office-drink-counter': drinkCounterImg
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
    // Use index to deterministically pick a placeholder so it doesn't jump on re-render
    return UI_MATCHING_PLACEHOLDERS[index % UI_MATCHING_PLACEHOLDERS.length];
  };

  const getLanguageColor = (lang) => {
    const colors = {
      'Python': '#3572A5',
      'JavaScript': '#f1e05a',
      'HTML': '#e34c26',
      'CSS': '#563d7c',
      'TypeScript': '#3178c6',
      'Jupyter Notebook': '#DA5B0B'
    };
    return colors[lang] || '#8b8b8b';
  };

  const daysAgo = (dateStr) => {
    const diff = Date.now() - new Date(dateStr).getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <div ref={ref} className="sticky-card" style={{ top: stickyTop }}>
      <div className="glass-card rounded-xl overflow-hidden group border-white/5 relative min-h-[600px]">
        {isInView && !hasBooted && (
          <TerminalReveal 
            projectName={repo.name} 
            onComplete={() => {
              setHasBooted(true);
              setIsRevealed(true);
            }} 
          />
        )}

        <motion.div 
          animate={{ opacity: isRevealed ? 1 : 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 h-full"
        >
          <div className="p-12 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="font-label-mono text-label-mono text-secondary tracking-widest uppercase">
                  Project {index + 1}
                </span>
                <div className="flex gap-4">
                  <span className="flex items-center gap-1 text-xs text-zinc-400 font-mono">
                    ⭐ {repo.stargazers_count || 0}
                  </span>
                </div>
              </div>
              <h2 className="font-headline-xl text-5xl md:text-7xl text-zinc-100 mb-6 uppercase tracking-tighter">
                {repo.name.replace(/-/g, ' ')}
              </h2>
              <div className="space-y-6 text-zinc-400 font-body-lg">
                <p>{repo.description || "Experimental digital architecture and development."}</p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {repo.language && (
                    <span 
                      className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-white"
                      style={{ backgroundColor: `${getLanguageColor(repo.language)}44`, border: `1px solid ${getLanguageColor(repo.language)}` }}
                    >
                      {repo.language}
                    </span>
                  )}
                  {repo.topics?.slice(0, 3).map(topic => (
                    <span key={topic} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-12 flex flex-col gap-6">
              <span className="text-[10px] font-mono text-zinc-500 uppercase">
                Last updated: {daysAgo(repo.updated_at)} days ago
              </span>
              <div className="flex gap-6">
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-8 py-3 bg-white text-zinc-950 font-bold uppercase tracking-widest text-xs rounded-full hover:scale-110 transition-transform"
                >
                  View Repo
                </a>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] lg:h-auto bg-zinc-900 overflow-hidden">
            <motion.div 
              style={{ y }}
              className="absolute inset-0 w-full h-[120%]"
            >
              <img 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                alt={repo.name} 
                src={getProjectImage(repo.name, index)} 
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { repos, loading } = useGithubData('MANISH-D-17');
  
  // Filter for only the 4 specific projects and sort them
  const projectOrder = ['3D-PORTFOLIO-WEBSITE', 'AI-FINANCE-ADVISOR', 'image-generator', 'office-drink-counter'];
  const allProjects = repos
    .filter(repo => projectOrder.includes(repo.name))
    .sort((a, b) => projectOrder.indexOf(a.name) - projectOrder.indexOf(b.name));

  return (
    <div className="bg-[#0c0c0c] text-[#fcfdff] font-body-lg overflow-x-hidden">
      <main className="relative pt-48 pb-40 px-6 md:px-12">
        <header className="h-screen flex flex-col justify-center items-center px-container-padding text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="font-label-mono text-label-mono text-primary-fixed uppercase tracking-[0.3em]">Selected Repository Archive</span>
            <h1 className="font-headline-xl text-7xl md:text-9xl uppercase tracking-tighter leading-none">
              SELECTED<br /><span className="text-zinc-800">CREATIONS</span>
            </h1>
            <p className="max-w-2xl mx-auto font-body-lg text-zinc-400 mt-8 text-xl">
              A curated collection of my most impactful digital architectures and experimental developments.
            </p>
          </motion.div>
        </header>

        <section className="max-w-7xl mx-auto px-gutter py-section-gap space-y-40 pb-40">
          {!loading && allProjects.map((repo, i) => (
            <ProjectCard 
              key={repo.id} 
              repo={repo} 
              index={i} 
              stickyTop={`${100 + i * 40}px`}
            />
          ))}
          {loading && (
            <div className="h-screen flex items-center justify-center font-mono text-zinc-500">
              CONNECTING TO ARCHIVE...
            </div>
          )}
        </section>

        <section className="py-section-gap px-container-padding text-center border-t border-white/5">
          <h2 className="font-headline-xl text-white mb-8 uppercase tracking-tighter">Want to see more?</h2>
          <p className="font-body-lg text-zinc-400 mb-12 max-w-xl mx-auto">
            Beyond these selected works, my GitHub contains numerous experiments, utility tools, and ongoing explorations.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="https://github.com/MANISH-D-17" 
              target="_blank" 
              rel="noreferrer"
              className="px-12 py-5 rounded-full bg-white text-zinc-950 font-black uppercase tracking-widest text-sm hover:scale-110 transition-transform shadow-2xl shadow-white/10"
            >
              Explore More on GitHub
            </a>
            <Link 
              className="px-12 py-5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-zinc-950 transition-all" 
              to="/contact"
            >
              Start Transmission
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
