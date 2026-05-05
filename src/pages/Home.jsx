import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="font-body-lg">
      <main className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-400 rounded-full blur-[120px]"></div>
          </div>
          <div className="z-10 text-center max-w-6xl">
            <p className="font-label-mono text-label-mono text-secondary mb-8 uppercase tracking-[0.4em]">DIGITAL CRAFTSMANSHIP</p>
            <h1 className="font-display-hero text-display-hero steel-gradient uppercase mb-6 leading-none select-none">
              Hi, i'm manish
            </h1>
            <p className="font-headline-md text-slate-400 max-w-3xl mx-auto mb-16 font-light leading-snug">
              A 3D creator driven by crafting striking and <span className="text-white">unforgettable projects</span>
            </p>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative w-72 h-96 md:w-[500px] md:h-[600px] rounded-lg overflow-hidden glass-panel mx-auto">
                <img alt="Manish Portrait" className="w-full h-full object-cover transition-all duration-700" src="https://lh3.googleusercontent.com/aida/ADBb0uhGoJoq802jWDMs5nzAPEU2_lrzfuP6_mpPWzjr2ZncUi4U5XuXwB0X8M99t3YVDoo57jfhvX7Ipe19k_pxJSAy3vcUEdjAir6eY0Nz_uILygcQc3o62T2WIuEw1YRFfUdm_bI46EbL-wslBP0usxe3fvaJUKxtcFGxI7GDUvLbC4J1h2hbb7ZyMbRCAFBeQ-1K4VdRadthk6ReQOG6lmLYE-V7B_-SEAerPaJ7exptlM8xteYrL3R4GIv6pl_00Ep08fySPAB6" />
              </div>
            </div>
          </div>
        </section>

        {/* Marquee Section */}
        <section className="py-20 border-y border-white/5 bg-[#0C0C0C]">
          <div className="overflow-hidden space-y-8">
            <div className="marquee-track gap-8 px-4 flex">
              <img className="h-40 rounded-lg" alt="Fluid abstract metallic spheres" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTAy0C1YX4dyP70EQua4O6wHk3dA5JiVeh9pUedtL6i5SEyqUVN_yGfUC00jaHl-h8FMvKNXLWv3g__uxKodgSeLf4BskPpNhl4ZsSKekOJ8Fi77c7Q1v7TG1T7Zmi9TcdZ5fKXx0GqAbr2Ww7SYNjaJCzPBkUgmcazHPzFVq_4198aXoOtEf7L1YiImE7EL-EcHX0L59qDxfiaAewUiOUuIdZ6lEb6-VJmA_w4epIoq0FX03B3BhdUzO4l-GkKXQ4O4fhtgxnPbQ" />
              <img className="h-40 rounded-lg" alt="Complex architectural elements" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLnCQfLLLcySEZfi_YqwqZl7b8UZQjS-0BgGHtszOsvj6Hbj6CXDUIWrj0ur1nofZ62J-qwtHZtNqx0GHxYbvTzja00JMkw5r7oNzbaCrV7X8_LNB7Y5MtpdS16ux6prmcf0i-HaqaKaUxhZAk2sLXMRd7_ifpEu3bKHiBOdTF0hg02qMwii2fxWCDh2WrRX3GGwHYrck3up-AKtY7hELRV1l4syKfH2UD8GTS0oUe3FeLZHFifMO98qj8GutchkKewrDRwV3oUFE" />
              <img className="h-40 rounded-lg" alt="Floating crystalline shards" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcHyYeRE3c7lHciQMuA5YQvhfqLgA990RwzmBtBSwtlnR-GQBWDmjKKWva2VYVionSDPVnMBQRb-Z0iYQPhl0OmetHr6u3pjP2VcUiT5Zb2OzvNeuGWplh03lFt8osVKUOgucEUzEpbgFNx2e9maBymhzCA-QT3hJAWPjFG23zRqJR_K8z2lyLCzz6CFmol-miEfj6XmhIFNePWnY6b9-LpmQqOh_1LDmJio3UD076fxGQY2Ok1GiwBj1wANqf7hnOpwEVYZQi_EU" />
              <img className="h-40 rounded-lg" alt="Zero-gravity spheres" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4GD-VT5Cjr0PQ0RLPogw54QTDVsFyygzufPrhcFvEzHqbLDr8GTZZ8Ovjkb5zl1GvqE2xn1pOtisdbbE928egW1Wm4hbT1e22LaU2r2R6WUYerNgni8ZINlKDn4iZ9pjWLWI-c1UnAYXkmh0b4N_P_lAH5D6WZRe7czacyOkMDqYvh0PV9Lr-MUha0MvAkBN3hAdwiB0fGwEH3qonBTelBh4vzyBemFe9hg7WN438D9hUTbywMeN4maCFPSB5PjEStj8EDQYMpuM" />
              <img className="h-40 rounded-lg" alt="Rotating architectural structure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjcnkqc85wgvckpxU1n-LdBEWeNWcWX8uZ8yDgSNEhA4UWvo3HSUrUjwzZeWPazm-YV-m8jDqjfiaDQV5vv1fYp4J3ze2x0aKtcEKmeFZEdhJRQ82ZoaYzEqxHZeceE0Bz-v8_OC90ljL9gvc4zUjTL8PTX5A3-qqvmwIKg021AFw-WdyOK4nCcaKDVIFXwoUXzvdJqKkMXnYQY5ddNDPTYaSllvvT28jytC4wcnVtRYzLViLVXfJQwBqEsIiIjSP-wur9J94OblA" />
            </div>
            <div className="marquee-track-reverse gap-8 px-4 flex">
              <img className="h-40 rounded-lg" alt="Mechanical gears void" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD270xCoH7Iw45VKhcw4Mg9rQYnyHj1BsSRTVVDRbD8JNtU_wwZ0mhI4EZIEhkXJ4gGpyw1pwzfrl1HCmfr1XsiCemvExwk1rDjN8PyJ9dKuePDRvgKfNbTXDwscQ_FDnGJwWvKFdVWw2LfvTtnwoHXX3AYdCogJnbwMsFgznF27jFtZVhRA_YJ12APoT8zqdq2pMwV6OrwsUnWXsHjWbw1EWjv6LvPHQPpaexgDEHttIxCzEizD3OPy50d9YXJLBMkmjzF9VjK5_A" />
              <img className="h-40 rounded-lg" alt="Dynamic typography deconstructing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1LxLucHGvkCPykVQlRCD8iRRJoXzGVk5PbFd7wQfuicxH6Q_YLsO21kthU1LTLoEWbJkMAdE59RG1F230u76vkgVw-dD6Fquxf22qnXQYS-2HIHJ7o-YdUwzMJZsFLlXOJAm3DdRxo1Za7hzLAsZ2D8FXD7H0XcgN8Yxh_sn3lZdoHtxr0Wn6PFR2ybbVMrz3ctuJXduF0qwtNAfezs0QhiBui56qR0OqdvitNtWY_4NBJZrZUedUmICcNsgdJ7JGlV-5o8xQ3uY" />
              <img className="h-40 rounded-lg" alt="Abstract pulsating forms" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG3Y1fDH1YVgXoO9Unq_MzdAxJXCiPWEZNuwWpMvXp136pUf9lx3XsO7AJO2Tco3AnNF3EOorSzGnaPAK333aaC2h5F43wdqB_46viHXshocNp4L2LBnFydwteMSCxYwslLMUmVXvGE_152yNdxe9vZYP58xOdCpLExaS3Swpf8qREEkBxAnIbkvntshqWNjcbYJmodod1i1saIcP71WZ4BAEb8DeQfuhLZAYjunEHR-xvqZ72jLOSBrIEMAHc_sZQkClJSw-aSHM" />
              <img className="h-40 rounded-lg" alt="Floating clockwork components" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxynUgGp4N7Di6QZufVAi6VFNHPK5BDe-Ztc56GR4ypqEtGulho5Rk095KlIFNVdX9w7bIx2iva4k92PTCf72RY64AlAFoatNkPy-UBLMf2uFecdULCV5GWfZ0zTf-Y--hOetx4EI7arzrmcOKzUqbEy4dyFwg1gaw85K85Yrnq4QqfMq9-4bB6o3S8uTdpR3Kggsby7NGTaycGWZcRpw1ZHtiBkvSGPeucjuVoaHvfuGnaYcL7lRYJE2_7q9th8aU_XjBfqRO8_Q" />
              <img className="h-40 rounded-lg" alt="Reforming typography elements" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEuL4BRoZ_MqnaeqoXsppNLYqHsqrXLK7Do6NAYQBRTDAjxct_oLR5Vj051YpmNQ04NrJb0AeiRCTJearTtXNfSKmDwzn3yN9_GSqI2o-p1aNbLysztpF_FvyIItwoN38WFMu_dE7i5LMhGn3zVhYsykxqPObbTDd78L1sgj_yDjLux3awN9bPWy7zTgTHHrQjwsmCH1L5OWZftqXZp0xjjEfRo-AJian6mtL04MLnmKKSsF21sIKuw5eTypVYnbaBAMS60aiTuPs" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-section-gap px-container-padding max-w-screen-2xl mx-auto relative" id="about">
          <span className="material-symbols-outlined absolute top-20 left-10 text-6xl text-purple-500 opacity-20">polymer</span>
          <span className="material-symbols-outlined absolute bottom-20 right-10 text-6xl text-orange-400 opacity-20">deployed_code</span>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
            <div className="md:col-span-4">
              <h2 className="font-headline-xl text-headline-xl steel-gradient uppercase">ABOUT</h2>
            </div>
            <div className="md:col-span-8">
              <p className="font-headline-md text-on-surface leading-[1.2] mb-12">
                With more than five years of experience in design, i focus on <span className="text-secondary">branding</span>, web design, and <span className="text-primary-fixed">user experience</span>. I blend technical precision with artistic flair to build immersive digital worlds.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-white/10 pt-12">
                <div>
                  <p className="font-label-mono text-slate-500 mb-4 uppercase">EXPERIENCE</p>
                  <p className="font-body-lg text-slate-300">Specializing in high-fidelity 3D assets and motion environments for luxury brands and tech innovators.</p>
                </div>
                <div>
                  <p className="font-label-mono text-slate-500 mb-4 uppercase">APPROACH</p>
                  <p className="font-body-lg text-slate-300">Minimalism meets high-contrast bold. Creating depth through layering, lighting, and physical weight.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-section-gap bg-surface-container-lowest rounded-xl mx-4 md:mx-10 overflow-hidden">
          <div className="max-w-screen-xl mx-auto px-10">
            <p className="font-label-mono text-secondary-fixed-dim mb-12 text-center uppercase tracking-[0.3em]">SERVICES PROVIDED</p>
            <div className="divide-y divide-white/5">
              {[
                { id: '01', title: '3D MODELING', icon: 'view_in_ar' },
                { id: '02', title: 'RENDERING', icon: 'flare' },
                { id: '03', title: 'MOTION DESIGN', icon: 'animation' },
                { id: '04', title: 'BRANDING', icon: 'token' },
                { id: '05', title: 'WEB DESIGN', icon: 'web_asset' },
              ].map((service) => (
                <div key={service.id} className="group py-12 flex justify-between items-center hover:px-8 transition-all duration-500 cursor-default">
                  <div className="flex items-center gap-12">
                    <span className="font-label-mono text-slate-600 text-2xl">{service.id}</span>
                    <h3 className="font-headline-md text-white group-hover:tracking-wider transition-all duration-500">{service.title}</h3>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-slate-700 group-hover:text-white transition-colors">{service.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-section-gap px-container-padding max-w-screen-2xl mx-auto" id="projects">
          <h2 className="font-headline-xl text-white mb-20">SELECTED WORKS</h2>
          <div className="space-y-stack-offset relative">
            {/* Project 1 */}
            <div className="sticky-card bg-[#141414] rounded-lg overflow-hidden h-[707px] flex flex-col md:flex-row border border-white/5">
              <div className="w-full md:w-1/2 p-12 flex flex-col justify-between">
                <div>
                  <span className="font-label-mono text-secondary mb-4 uppercase">CASE STUDY 01</span>
                  <h3 className="font-headline-xl text-white">Nextlevel Studio</h3>
                </div>
                <div>
                  <p className="font-body-lg text-slate-400 mb-8 max-w-sm">A full 3D environment for a premium digital agency, focusing on kinetic typography and glassmorphism.</p>
                  <button className="px-8 py-3 rounded-full cosmic-gradient text-white font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform">VIEW PROJECT</button>
                </div>
              </div>
              <div className="w-full md:w-1/2 h-full bg-surface-container overflow-hidden">
                <div className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBttuo6ynKWLPwTZbSsJrnR4YZjtizH5-H5ppY-CjthSrv5ZWZ0wlaIp0_agzd-9ox1ShXOzTfe3TrAT1QBXXPW6mL5jzKEkN2bX5Enl7HurCOMTTvjV9zisAlUQBusDhfRCzq6X4k1sr3Xb8lfX1W9rK06ZofgD3q3tMzSVxmW4_Y_9yQ_BYB-w4GGI9XfHIhEtJJgqP9XjZt1akw-dtxhtqTDJkz0wDAsEa43Gn9Enwu6tpSoIY6rfsGO32Dc4RWZBxRBinoaBzg')" }}></div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="sticky-card bg-[#141414] rounded-lg overflow-hidden h-[707px] flex flex-col md:flex-row border border-white/5 mt-stack-offset" style={{ top: '140px' }}>
              <div className="w-full md:w-1/2 p-12 flex flex-col justify-between">
                <div>
                  <span className="font-label-mono text-secondary mb-4 uppercase">CASE STUDY 02</span>
                  <h3 className="font-headline-xl text-white">Aura Brand Identity</h3>
                </div>
                <div>
                  <p className="font-body-lg text-slate-400 mb-8 max-w-sm">Exploration of light and transparency for a wellness brand utilizing generative 3D particles and iridescent textures.</p>
                  <button className="px-8 py-3 rounded-full cosmic-gradient text-white font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform">VIEW PROJECT</button>
                </div>
              </div>
              <div className="w-full md:w-1/2 h-full bg-surface-container overflow-hidden">
                <div className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGSogrF-AgZ9ibt1mpTeHDQU4MkmT_h1abuyrnUqMTJzJc1iRl6GSD81lgEyhvnDa9T4DN3fxe1uH0N8YOMJ-QdlDnNLnXL4t34TyXnN2esoqSfDNmMqgZESEcOt7w3Mb9Inizo3qVs9hw-GpDfPDPHmnTlp-odVkSNyIf3bh_Wq9vRcoFAb6f4UBx1UZPJYYQY9_3lHSlSekXtaAlLOOCujXSKyR6TEuriF5HkLBe6cg3uDbGlTAmnLW-OcMSNdLvEYGvJBXSdhs')" }}></div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="sticky-card bg-[#141414] rounded-lg overflow-hidden h-[707px] flex flex-col md:flex-row border border-white/5 mt-stack-offset" style={{ top: '180px' }}>
              <div className="w-full md:w-1/2 p-12 flex flex-col justify-between">
                <div>
                  <span className="font-label-mono text-secondary mb-4 uppercase">CASE STUDY 03</span>
                  <h3 className="font-headline-xl text-white">Solaris Digital</h3>
                </div>
                <div>
                  <p className="font-body-lg text-slate-400 mb-8 max-w-sm">Developing a 3D-first design system for a future-tech platform, using monolithic forms and metallic surfaces.</p>
                  <button className="px-8 py-3 rounded-full cosmic-gradient text-white font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform">VIEW PROJECT</button>
                </div>
              </div>
              <div className="w-full md:w-1/2 h-full bg-surface-container overflow-hidden">
                <div className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQjjKOoivb_XItvYCw06yAwEhftLug302u01sh1QdDChhEjSd61kzGOEUrue-Afp4Q6oEtFNGAV5kVFXXX90yw9cBo3oNCXvWb0OumhqBdsb-VLbj2DI8EwdVIMM68kTwox0pDSCU9KpOhRHU53b3D4aBbUYoCFE72uG_mEE2X4uIJBN58LrN8YULaSHzX-bp8gfTM4zKerd6X5Xa9LQq99eYSzJEsRgXxKUW5T5Zh18yK3Ere5q0gK7O9MDsWsm5aDOwlsNrYHzY')" }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section-gap px-container-padding text-center">
          <h2 className="font-headline-xl text-white mb-8">Ready to bring your ideas to life?</h2>
          <p className="font-body-lg text-slate-400 mb-12 max-w-xl mx-auto">Currently accepting new projects for 2024. Let's create something unforgettable together.</p>
          <Link className="inline-block px-12 py-5 rounded-full cosmic-gradient text-white font-black uppercase tracking-widest text-lg hover:scale-110 transition-transform shadow-2xl shadow-purple-500/20" to="/contact">START A PROJECT</Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
