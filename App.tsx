import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

import { Navigation } from './components/Navigation';
import { Marquee } from './components/Marquee';
import { ProjectCard } from './components/ProjectCard';
import { Button } from './components/Button';
import { ChatWidget } from './components/ChatWidget';
import { PROJECTS, EXPERIENCE } from './constants';

const App: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="bg-dark-bg min-h-screen text-off-white selection:bg-acid-lime selection:text-black">
      <Navigation />

      {/* HERO SECTION */}
      <section className="h-screen w-full flex flex-col justify-center px-4 md:px-12 relative overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="z-10 w-full"
        >
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-[10vw] md:text-[9vw] leading-[0.9] tracking-tighter uppercase break-words"
          >
            Design<br />
            <span className="text-acid-lime" style={{ WebkitTextStroke: '1px #ccff00', color: 'transparent' }}>Symbiosis:</span><br />
            Human × AI
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mt-8 md:mt-12 border-t border-white/20 pt-6 md:pt-8"
          >
            <p className="font-sans text-base md:text-xl max-w-md text-neutral-400">
              Decoding 10 years of UI craftsmanship into the language of the future.
            </p>
            <div className="flex gap-4 mt-6 md:mt-0">
              <span className="animate-spin-slow">
                <ArrowDown size={32} className="text-acid-lime md:w-12 md:h-12" />
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Background ambient gradient */}
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-acid-lime/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

      <Marquee text="Design • Development • Strategy • Motion •" />

      {/* ABOUT/EXPERIENCE SECTION */}
      <section id="about" className="px-4 md:px-12 py-24 md:py-32 bg-neutral-900 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="font-display text-4xl md:text-7xl font-bold uppercase mb-8 sticky top-32">
              Experience<br />& Bio
            </h2>
            <div className="w-full h-[300px] md:h-[500px] bg-neutral-800 rounded-lg overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 mt-8">
              <img src="https://picsum.photos/600/800?grayscale" alt="Portrait" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex flex-col gap-12 pt-0 md:pt-24">
            <p className="font-sans text-xl md:text-3xl leading-snug">
              I'm YUNMUZE, a multidisciplinary designer focusing on <span className="text-acid-lime">interactive UI</span> and <span className="text-acid-lime">design systems</span>. I believe the web should be fun, weird, and memorable.
            </p>

            <div className="flex flex-col gap-8 mt-8">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="border-b border-white/20 pb-8 group hover:pl-4 transition-all duration-300">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-display text-xl md:text-2xl font-bold uppercase">{exp.role}</h4>
                    <span className="font-sans text-sm text-acid-lime">{exp.period}</span>
                  </div>
                  <p className="font-sans text-lg text-white mb-2">{exp.company}</p>
                  <p className="font-sans text-neutral-400 text-sm max-w-md">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORK SECTION */}
      <section id="work" className="px-4 md:px-12 py-24 md:py-32 relative">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <h2 className="font-display text-5xl md:text-8xl font-bold uppercase">
            Selected<br />Works
          </h2>
          <p className="hidden md:block font-sans text-neutral-400 max-w-xs text-right">
            A collection of projects that push the boundaries of digital design.
          </p>
        </div>

        <div className="flex flex-col">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="flex justify-center mt-16 md:mt-24">
          <Button variant="outline">View All Archives</Button>
        </div>
      </section>

      <Marquee text="Available for Freelance • Let's Create Magic •" direction="right" speed={25} />

      {/* CONTACT SECTION */}
      <section id="contact" className="px-4 md:px-12 py-24 md:py-32 min-h-[80vh] flex flex-col justify-between relative overflow-hidden">
        <div>
          <span className="font-sans text-acid-lime uppercase tracking-widest mb-4 block">Get in touch</span>
          <h2 className="font-display text-[10vw] font-black uppercase leading-[0.8] mb-12">
            Let's Start<br />
            A Project
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/20 pt-12">
          <div>
            <h4 className="font-display font-bold uppercase mb-4 text-xl">Socials</h4>
            <ul className="space-y-2 font-sans text-neutral-400">
              <li><a href="#" className="hover:text-acid-lime transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-acid-lime transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-acid-lime transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-acid-lime transition-colors">Dribbble</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold uppercase mb-4 text-xl">Contact</h4>
            <a href="mailto:hello@yunmuze.design" className="font-sans text-xl md:text-3xl hover:text-acid-lime transition-colors underline decoration-acid-lime decoration-2 underline-offset-4 break-all">
              hello@yunmuze.design
            </a>
          </div>
          <div className="md:text-right">
            <p className="font-sans text-neutral-500 text-sm">
              © 2026 YUNMUZE Design.<br />
              Made with React & Gemini.
            </p>
          </div>
        </div>
      </section>

      <ChatWidget />
    </div>
  );
};

export default App;