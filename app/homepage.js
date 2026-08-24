"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import './homepage.css';
import {
  SiDocker,
  SiExpress,
  SiGit,
  SiGo,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
/* Import your sections
import About from './bio/page';
import Projects from './projects/page';
import Contact from './contact/page';
*/
import ProjectHomepage from './components/project';

const AwsGlyph = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M6 15.5C7.3 16.5 9.1 17 11.2 17C14.3 17 16.7 15.9 18.2 14"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M8.2 11.8L10 7L11.8 11.8M8.8 10.3H11.2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.2 11.8V7.4H15.3C16.4 7.4 17 8 17 8.9C17 9.5 16.7 10 16.2 10.2C16.9 10.4 17.3 11 17.3 11.7C17.3 12.7 16.5 13.4 15.2 13.4H13.2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 650);
    return () => window.clearTimeout(timeout);
  }, []);

  const techStack = [
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express', icon: SiExpress },
    { name: 'NestJS', icon: SiNestjs },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Go', icon: SiGo },
    { name: 'Prisma', icon: SiPrisma },
    { name: 'Docker', icon: SiDocker },
    { name: 'Kubernetes', icon: SiKubernetes },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Git', icon: SiGit },
    { name: 'AWS', icon: AwsGlyph },
  ];
  
  const reveal = reduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };
  const stagger = { show: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } } };

  return (
    <div className="homepage">
      <AnimatePresence>
        {isLoading && (
          <motion.div className="site-loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
            <motion.div className="loader-mark" animate={reduceMotion ? {} : { rotate: 360 }} transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }} />
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>Entering the digital realm</motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Animated Background Tech Logos */}
      <div className="tech-logos">
        <div className="tech-logo code">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <div className="tech-logo terminal">
          <svg viewBox="0 0 24 24" fill="none">
            <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M6 7L8 9L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 11H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="tech-logo database">
          <svg viewBox="0 0 24 24" fill="none">
            <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/>
            <path d="M3 5V19C3 20.6569 7.02944 22 12 22C16.9706 22 21 20.6569 21 19V5" stroke="currentColor" strokeWidth="2"/>
            <path d="M3 12C3 13.6569 7.02944 15 12 15C16.9706 15 21 13.6569 21 12" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        <div className="tech-logo cloud">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M18 10H16.74C16.24 6.67 13.39 4 10 4C6.15 4 3 7.15 3 11C3 11.34 3.04 11.67 3.09 12H2C0.9 12 0 12.9 0 14S0.9 16 2 16H18C19.66 16 21 14.66 21 13S19.66 10 18 10Z" fill="currentColor"/>
          </svg>
        </div>

        <div className="tech-logo gear">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="tech-logo mobile">
          <svg viewBox="0 0 24 24" fill="none">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
            <line x1="12" y1="18" x2="12" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="tech-logo lightning">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
          </svg>
        </div>

        <div className="tech-logo api">
          <svg viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M9 9H15M9 12H15M9 15H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="7" cy="7" r="1" fill="currentColor"/>
          </svg>
        </div>
      </div>
<main className="main-content">
  <motion.div className="hero-section" initial="hidden" animate="show" variants={stagger}>
    <div className="hero-content">
      <motion.h1 variants={reveal}>Welcome to My Digital Realm</motion.h1>
      <div className="items-box"> 
        <motion.div className="hero-text-block" variants={stagger}>
          <motion.p variants={reveal}>
            I'm Tazkia, a full-stack developer passionate about creating seamless web experiences, from intuitive frontend to robust backends, with a keen interest in AI and its impact on the future of technology.
          </motion.p>
          <motion.div className="hero-actions" variants={reveal}>
            <a
              className="resume-btn"
              href="https://drive.google.com/file/d/1E2YcMSVDziZqE0nTX7KDLDPkrIAmaJ2M/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View resume"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
        <motion.div className="image-container" variants={reveal} whileHover={reduceMotion ? {} : { scale: 1.04, rotate: -2 }} transition={{ type: 'spring', stiffness: 240, damping: 18 }}>
          <Image
            src="/laptop.png"
            alt="Laptop"
            className="laptop-image"
            width={388}
            height={312}
            priority
          />
        </motion.div>
      </div>
    </div> {/* Close hero-content */}
  </motion.div>   {/* Close hero-section */}
</main>

      <motion.section className="tech-section" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={reveal}>
        <div className="section-header">
          <p className="section-kicker">Technologies</p>
          <h2 className="section-title">My Tech Stack</h2>
        </div>
        <motion.div className="tech-grid" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          {techStack.map((tech) => {
            const Icon = tech.icon;

            return (
            <motion.div className="tech-card" key={tech.name} variants={reveal} whileHover={reduceMotion ? {} : { y: -7, scale: 1.025 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
              <div className="tech-icon-circle" aria-label={tech.name}>
                <Icon className="tech-logo-image" aria-hidden="true" />
              </div>
              <p className="tech-name">{tech.name}</p>
            </motion.div>
          )})}
        </motion.div>
      </motion.section>

      {/* Technical Skills - right below My Tech Stack */}
      <motion.section className="skillset-section" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={reveal}>
        <motion.div className="skills-section" variants={stagger}>
          <motion.h2 variants={reveal}>Technical Skills</motion.h2>
          <div className="skills-categories">
            <div className="skill-category">
              <h3 className="category-title">
                <svg className="category-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
                Frontend Development
              </h3>
              <div className="skills-grid">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">JavaScript</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">
                <svg className="category-icon" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Backend Development
              </h3>
              <div className="skills-grid">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Go</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">
                <svg className="category-icon" viewBox="0 0 24 24" fill="none">
                  <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 5V19C3 20.6569 7.02944 22 12 22C16.9706 22 21 20.6569 21 19V5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 12C3 13.6569 7.02944 15 12 15C16.9706 15 21 13.6569 21 12" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Databases & Cloud
              </h3>
              <div className="skills-grid">
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Firebase</span>
                <span className="skill-tag">Supabase</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">
                <svg className="category-icon" viewBox="0 0 24 24" fill="none">
                  <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" fill="currentColor"/>
                </svg>
                AI & Machine Learning
              </h3>
              <div className="skills-grid">
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Data Analysis</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">
                <svg className="category-icon" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                DevOps & Tools
              </h3>
              <div className="skills-grid">
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Git</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <ProjectHomepage />

      <footer className="footer">
        <div className="social-links">
          <a
            href="https://github.com/CodedGrimoire"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            {/* GitHub Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.21 11.387c.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.42-1.305.762-1.604-2.665-.303-5.467-1.334-5.467-5.931 0-1.31.468-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016 0c2.29-1.553 3.295-1.23 3.295-1.23.655 1.653.244 2.873.12 3.176.77.84 1.232 1.913 1.232 3.222 0 4.609-2.807 5.625-5.48 5.921.43.372.823 1.103.823 2.222v3.293c0 .32.218.694.825.576A12.005 12.005 0 0024 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/tazkia-malik-42506129b"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            {/* LinkedIn Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"/>
            </svg>
          </a>
        </div>
        <p>© 2025 Tazkia's Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
