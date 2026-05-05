import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-background text-on-background font-body-lg overflow-x-hidden cosmic-void pt-32">
      <main className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-container-padding">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 z-10">
              <span className="font-label-mono text-label-mono text-primary-fixed uppercase mb-4 block">About Me</span>
              <h1 className="font-display-hero text-display-hero steel-gradient mb-8 uppercase">Designing with Purpose</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                I’m a Full Stack Developer and UI/UX Designer who enjoys transforming ideas into meaningful digital experiences. From clean interfaces to scalable applications, I build with the user at the center.
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] rounded-xl overflow-hidden glass-panel p-2">
                <img alt="Manish Portrait" className="w-full h-full object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida/ADBb0uhGoJoq802jWDMs5nzAPEU2_lrzfuP6_mpPWzjr2ZncUi4U5XuXwB0X8M99t3YVDoo57jfhvX7Ipe19k_pxJSAy3vcUEdjAir6eY0Nz_uILygcQc3o62T2WIuEw1YRFfUdm_bI46EbL-wslBP0usxe3fvaJUKxtcFGxI7GDUvLbC4J1h2hbb7ZyMbRCAFBeQ-1K4VdRadthk6ReQOG6lmLYE-V7B_-SEAerPaJ7exptlM8xteYrL3R4GIv6pl_00Ep08fySPAB6" />
              </div>
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary-container/20 blur-[100px] rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Biography & Story Section */}
        <section className="py-section-gap px-container-padding">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex items-center gap-6">
              <div className="h-px flex-1 bg-outline-variant"></div>
              <h2 className="font-headline-md text-headline-md steel-gradient uppercase">The Story</h2>
            </div>
            <div className="grid grid-cols-1 gap-12 text-on-surface-variant">
              <p className="font-body-lg leading-relaxed text-xl text-white/90">
                My journey started with frontend development, where I developed a strong interest in crafting clean and intuitive interfaces. Over time, I expanded into full stack development, allowing me to build complete, scalable applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <p className="font-body-lg leading-relaxed">
                  I have worked on several impactful projects, including a feature-rich weather application and an AI-powered assistant developed during a 24-hour national-level hackathon. These experiences strengthened my ability to work under pressure, think critically, and design solutions that are both functional and user-friendly.
                </p>
                <div className="space-y-6">
                  <div className="glass-panel p-6 rounded-lg">
                    <h4 className="font-bold text-primary mb-2 uppercase text-sm tracking-widest">Leadership</h4>
                    <p className="text-sm opacity-80">President of the Mental Health and Happiness Club and executive member of multiple student organizations.</p>
                  </div>
                  <div className="glass-panel p-6 rounded-lg">
                    <h4 className="font-bold text-secondary mb-2 uppercase text-sm tracking-widest">Interests</h4>
                    <p className="text-sm opacity-80">Tech communities, high-impact storytelling, and solving real-world problems through design.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-section-gap px-container-padding bg-zinc-950/50">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex items-center gap-6">
              <div className="h-px flex-1 bg-outline-variant"></div>
              <h2 className="font-headline-md text-headline-md steel-gradient uppercase">Experience</h2>
            </div>
            <div className="space-y-8">
              <div className="relative pl-8 border-l border-zinc-800 pb-8">
                <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-secondary"></div>
                <h3 className="text-2xl font-bold text-white">Student Developer & Designer</h3>
                <span className="font-label-mono text-zinc-500 uppercase text-xs">Present</span>
                <ul className="mt-4 space-y-3 text-on-surface-variant">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">▹</span>
                    <span>Built and deployed multiple real-world applications focusing on performance and user engagement.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">▹</span>
                    <span>Designed user-centric interfaces improving usability and visual clarity across all digital products.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">▹</span>
                    <span>Collaborated in national-level hackathons to deliver functional AI and web solutions under strict time constraints.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Bento Grid (Categorized) */}
        <section className="py-section-gap px-container-padding bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-headline-xl text-headline-xl steel-gradient text-center mb-20 uppercase tracking-tighter">My Toolkit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {/* UI/UX Design */}
              <div className="glass-panel p-8 rounded-xl flex flex-col hover:border-primary/30 transition-all duration-500">
                <span className="material-symbols-outlined text-4xl text-primary mb-6" data-icon="design_services">design_services</span>
                <h3 className="font-bold text-xl mb-4 text-zinc-50">UI/UX Design</h3>
                <div className="flex flex-wrap gap-2">
                  {['Wireframing', 'Prototyping', 'User Research', 'Interaction Design'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase tracking-wider">{skill}</span>
                  ))}
                </div>
              </div>
              {/* Frontend */}
              <div className="glass-panel p-8 rounded-xl flex flex-col hover:border-secondary/30 transition-all duration-500">
                <span className="material-symbols-outlined text-4xl text-secondary mb-6" data-icon="code">code</span>
                <h3 className="font-bold text-xl mb-4 text-zinc-50">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'React.js'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase tracking-wider">{skill}</span>
                  ))}
                </div>
              </div>
              {/* Backend */}
              <div className="glass-panel p-8 rounded-xl flex flex-col hover:border-tertiary/30 transition-all duration-500">
                <span className="material-symbols-outlined text-4xl text-primary-fixed mb-6" data-icon="dns">dns</span>
                <h3 className="font-bold text-xl mb-4 text-zinc-50">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['API Integration', 'Database Handling', 'Node.js'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase tracking-wider">{skill}</span>
                  ))}
                </div>
              </div>
              {/* Tools */}
              <div className="glass-panel p-8 rounded-xl flex flex-col hover:border-white/30 transition-all duration-500">
                <span className="material-symbols-outlined text-4xl text-zinc-400 mb-6" data-icon="build">build</span>
                <h3 className="font-bold text-xl mb-4 text-zinc-50">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Git & GitHub', 'VS Code'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase tracking-wider">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Stack */}
        <section className="py-section-gap px-container-padding relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="font-label-mono text-label-mono text-primary-fixed uppercase mb-4 block">The Arsenal</span>
              <h2 className="font-headline-xl text-headline-xl steel-gradient">TECH STACK</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { id: '01', title: 'BLENDER' },
                { id: '02', title: 'CINEMA 4D' },
                { id: '03', title: 'UNREAL ENGINE' },
                { id: '04', title: 'FRAMER MOTION' },
              ].map((skill) => (
                <div key={skill.id} className="p-8 border border-outline-variant/30 rounded-xl hover:bg-surface-container transition-colors group">
                  <h4 className="font-headline-md text-headline-md text-zinc-600 group-hover:text-zinc-100 transition-colors">{skill.id}</h4>
                  <p className="font-label-mono text-primary-container mt-4">{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-20 px-12 border-t border-[#D7E2EA]/5 bg-transparent mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-8">
            <div>
              <span className="text-zinc-50 font-bold text-2xl font-['Kanit'] tracking-widest uppercase">MANISH</span>
              <p className="text-zinc-500 font-['Kanit'] font-light text-sm tracking-wide mt-2">© 2024 Manish. Built for the cosmic void.</p>
            </div>
            <div className="flex gap-8">
              <a className="text-zinc-500 font-['Kanit'] font-light text-sm tracking-wide hover:text-zinc-100 transition-colors duration-500" href="#">Instagram</a>
              <a className="text-zinc-500 font-['Kanit'] font-light text-sm tracking-wide hover:text-zinc-100 transition-colors duration-500" href="#">ArtStation</a>
              <a className="text-zinc-500 font-['Kanit'] font-light text-sm tracking-wide hover:text-zinc-100 transition-colors duration-500" href="#">Behance</a>
              <a className="text-zinc-500 font-['Kanit'] font-light text-sm tracking-wide hover:text-zinc-100 transition-colors duration-500" href="https://linkedin.com/in/d-manish-930514292" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </footer>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 bg-zinc-900/60 backdrop-blur-2xl rounded-full border border-[#D7E2EA]/20 px-6 py-3 shadow-2xl shadow-black/50 md:hidden">
        <Link className="text-zinc-400 p-2 hover:scale-110 hover:text-zinc-50 transition-all active:scale-90" to="/"><span className="material-symbols-outlined" data-icon="home_max">home_max</span></Link>
        <Link className="bg-[#D7E2EA] text-zinc-950 rounded-full p-2 scale-95 active:scale-90 transition-transform" to="/about"><span className="material-symbols-outlined" data-icon="person" style={{ fontVariationSettings: "'FILL' 1" }}>person</span></Link>
        <Link className="text-zinc-400 p-2 hover:scale-110 hover:text-zinc-50 transition-all active:scale-90" to="/projects"><span className="material-symbols-outlined" data-icon="category">category</span></Link>
        <Link className="text-zinc-400 p-2 hover:scale-110 hover:text-zinc-50 transition-all active:scale-90" to="/awards"><span className="material-symbols-outlined" data-icon="workspace_premium">workspace_premium</span></Link>
        <Link className="text-zinc-400 p-2 hover:scale-110 hover:text-zinc-50 transition-all active:scale-90" to="/contact"><span className="material-symbols-outlined" data-icon="mail">mail</span></Link>
      </nav>
    </div>
  );
};

export default About;
