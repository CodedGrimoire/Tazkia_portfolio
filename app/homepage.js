import React from 'react';
import './homepage.css';
/* Import your sections
import About from './bio/page';
import Projects from './projects/page';
import Contact from './contact/page';
*/
import ProjectHomepage from './components/project';

const Homepage = () => {
  const TechIcon = ({ name }) => {
    switch (name) {
      case 'JavaScript':
        return (
          <svg className="tech-icon" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M6 6h36v36H6z" opacity="0.12" />
            <path fill="currentColor" d="M28.5 34.4c.7 1.2 1.6 2.1 3.2 2.1 1.3 0 2.1-.6 2.1-1.6 0-1.1-.9-1.5-2.4-2.1l-.8-.4c-2.3-1-3.9-2.2-3.9-4.9 0-2.4 1.8-4.3 4.7-4.3 2 0 3.4.7 4.4 2.6l-2.4 1.5c-.5-.9-1-1.3-2-1.3s-1.6.6-1.6 1.3c0 .9.6 1.3 2 1.9l.8.4c2.7 1.1 4.3 2.3 4.3 5 0 2.8-2.2 4.3-5.1 4.3-2.8 0-4.6-1.3-5.5-3l2.2-1.5Zm-10.5.3c.6 1 1.2 1.8 2.6 1.8 1.3 0 2.1-.5 2.1-2.4V23h3.2v11.3c0 3.4-2 5-5 5-2.7 0-4.3-1.4-5.1-3l2.2-1.6Z" />
          </svg>
        );
      case 'TypeScript':
        return (
          <svg className="tech-icon" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M6 6h36v36H6z" opacity="0.12" />
            <path fill="currentColor" d="M21.7 23.6H14v3.2h2.7V37h3.6V26.8h2.7v-3.2Zm8.7 0h-3.4V37h3.4v-6.3c0-2.2 1-3.3 2.8-3.3 1.1 0 1.8.3 2.4.9l2.2-2.5c-1-.9-2.2-1.4-3.6-1.4-2 0-3.4.9-4.2 2.6V23.6Z" />
          </svg>
        );
      case 'React':
        return (
          <svg className="tech-icon" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
            <circle cx="32" cy="32" r="4.2" fill="currentColor" />
            <g fill="none" stroke="currentColor" strokeWidth="2.6">
              <ellipse cx="32" cy="32" rx="19" ry="8.5" />
              <ellipse cx="32" cy="32" rx="19" ry="8.5" transform="rotate(60 32 32)" />
              <ellipse cx="32" cy="32" rx="19" ry="8.5" transform="rotate(120 32 32)" />
            </g>
          </svg>
        );
      case 'Next.js':
        return (
          <svg className="tech-icon" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M10 10h28v28H10z" opacity="0.08" />
            <path fill="currentColor" d="M14 14h4v20h-4zm6 0h3.6l9.4 13.1V14h3.4v20h-3.6l-9.4-13.1V34H20V14Z" />
          </svg>
        );
      case 'Node.js':
        return (
          <svg className="tech-icon" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
            <path fill="none" stroke="currentColor" strokeWidth="2.4" d="m31.9 6.6 19 11v22l-19 11-19-11v-22z" />
            <path fill="currentColor" d="M32 20.8c3 0 5.6 1 5.6 4.8v8.6c0 4.7-3.4 6.3-7.2 6.3-2.4 0-4.8-.6-6.4-1.6l2-3.3c1 .7 2.6 1.2 4.1 1.2 1.8 0 3.2-.7 3.2-2.8V31c-.8 1-2 1.6-3.6 1.6-3 0-5.6-1.7-5.6-5.4 0-3.6 2.6-6.4 7.9-6.4Zm-2.3 6.2c0 1.6 1 2.4 2.6 2.4 1.5 0 2.5-.7 2.5-2.3 0-1.7-1-2.5-2.6-2.5s-2.5.9-2.5 2.4Z" />
          </svg>
        );
      case 'Express':
        return (
          <svg className="tech-icon" viewBox="0 0 160 64" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M49.3 46.7 67.6 23 50.5 1.5h6.5l13.4 17.5L83.4 1.5H89l-16 20.7 17.3 24.5h-6.4L70.9 28.5 58.2 46.7h-8.9Zm-21.6-3c-8 0-14.2-5.8-14.2-14.5 0-8.6 5.8-14.6 14.2-14.6 8.4 0 13.8 6 13.8 14.9 0 .5 0 1-.1 1.6H16.8c.6 5.7 4.3 9 10.9 9 4.1 0 6.9-1.7 8-4.3h4.8c-1.4 4.9-6.2 7.9-12.8 7.9Zm-11.1-17.9H35c-.2-5.4-3.7-9-8.9-9-5.4 0-8.9 3.5-9.5 9Z" />
          </svg>
        );
      case 'NestJS':
        return (
          <svg className="tech-icon" viewBox="0 0 256 256" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M173.4 31.6c-6.7-4.9-14-8.7-21.8-11.2C147.6 10.6 142.2 2 138.3 0c-.7 3.6-1 7.3-.9 11 0 9 2.5 16.2 4.8 21.2-7.7-.4-24.6.6-40.6 9.7C79.8 56.5 68.1 80 67.5 81.3c9.4-8.8 19.5-14.9 30.5-18.7-7.5 6.6-23.1 23.8-25.4 56.5-.1 1.2-.8 10 3.5 22.3 2.6 7.7 6.8 14.8 12.4 21 1.8 1.9 9.5 9.8 22.4 14.9 12.5 4.9 29 6.5 51.6-4.7a52 52 0 0 0 12.3-8.4 56 56 0 0 0 11.3-14.2l-.2-.2c-3.4 2.9-7.2 5.4-11.3 7.3a51 51 0 0 1-12.5 4 51 51 0 0 0 12-9.2 45.3 45.3 0 0 0 8.6-11.7c4.3-8 7-17.4 7-28.6-.1-11.2-2.5-20.8-6.2-29.4a72.2 72.2 0 0 0-27.1-32.6Z" />
          </svg>
        );
      case 'MongoDB':
        return (
          <svg className="tech-icon" viewBox="0 0 256 256" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M129.9 17.2s6.7 14.1 8.6 27.2c1.7 11.9 1.5 24 .8 30.5-1.5 14.1-2.7 22.7-2.6 31.8.1 10.1 2 18.9 3.6 26.5 2.8 13.2 6.1 21.5 7.8 34.8 1.7 13.4.7 24.5-1.1 32.5-2.7 12.2-7.7 20.9-10.6 25.4-2.8-4.1-8.7-14-11.5-27.4-1.6-7.6-2.4-16.8-.3-32 1.8-13.2 5-21.4 7.9-34.5 1.7-7.5 3.6-16.2 3.7-26.3.1-9.1-1-17.8-2.6-31.9-.7-6.5-.9-18.6.8-30.5 1.9-13.2 8.6-27.2 8.6-27.2Z" />
          </svg>
        );
      case 'PostgreSQL':
        return (
          <svg className="tech-icon" viewBox="0 0 256 256" aria-hidden="true" focusable="false">
            <path fill="none" stroke="currentColor" strokeWidth="12" d="M117 42c-9.4-3.8-22.3-6.4-36.7-1.7C55 47.6 40 64.5 40 94.3 40 132 50.8 166 74 196c10.5 13.6 23.3 24.3 35.4 30.5 10 5.1 19.8 6.8 27.4 3.9 15.6-6 16.7-31 17.9-47.7 1.4-19.5 7.6-25.3 15.7-23.2 8.1 2.1 12.8 9.4 10.7 21-3.7 21.1-5.6 35.5 8.3 34.8 14-.8 23.9-15.6 32.2-48.4 3.5-13.7 7.1-30.6 6-50.3-1-20.4-6.6-35.9-15.1-47.4C212 56.2 199 47.6 185 42c-14.3-5.8-29-8.1-45.3-6.7-16.3 1.4-29.7 6-39.8 12.7" />
            <path fill="currentColor" d="M111 86c-5.7-11-16.5-15-24.7-12-9.2 3.3-13 14.8-9 27 4.6 14 10 34.7 18.7 35 7.5.2 12-12.2 16.4-24 .8-2 1.6-4.2 2.5-6.2 2.2-5.2 4-10 4-15 0-1.7-.2-3.2-.5-4.8-1.7.8-4.6 2-7.4 2-2.5 0-4.5-1-5-2Zm34.4-27c-8.2-1.3-15.2 7.3-16.3 19.2-1 10.6 3 20.5 10.8 21.7 8 .8 15.9-7.8 16.9-18.6 1-10.4-4.2-20.8-11.4-22.3Zm32.5 20.5c-1.5-9.4-8.7-15.6-15.6-13.7-6.9 1.8-11.2 11-9.7 20.5 1.7 10.7 9.6 18 17.5 15.5 7.4-2.2 9.5-12.7 7.8-22.3Z" />
          </svg>
        );
      case 'Prisma':
        return (
          <svg className="tech-icon" viewBox="0 0 256 256" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M40 176.5 126.7 18.2a6 6 0 0 1 10.6-.1l78.7 144.3a6 6 0 0 1-4.8 9L50.3 186a6 6 0 0 1-5.5-9.5Zm83.2-126L57.3 167.8l120.3-12.2-54.4-105.1Z" />
          </svg>
        );
      case 'Docker':
        return (
          <svg className="tech-icon" viewBox="0 0 256 256" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M236.8 112.9c-3.5-2.5-11.5-3.5-17.6-2.4-1.1-7.8-6.7-14.7-16.9-20.7l-8.2 10.7c6.5 3.9 9.5 8 10.3 12.4 1 5.8-1.6 12.1-7.8 18.8-12.5 13.4-33.7 20.7-53.4 20.7H40.8c-1.8-7.3-2.2-16.2-1.1-26.5l.2-1.7h32v-28h28v-28h32v28h20v28h20V94h24.7c-1.4-6.8-5.6-12.8-12-17.3L203.2 66C214.8 74.2 224 86.2 226 98c6-1.3 15.5-.3 19.3 2.4 0 0-4.2 6.2-8.5 12.5Z" opacity="0.92" />
            <path fill="currentColor" d="M108 94H80v28h28V94Zm40 0h-28v28h28V94Zm20 0h-16v28h16V94Zm-80-36H56v28h32V58Zm40 0h-28v28h28V58Zm40 0h-28v28h28V58Z" opacity="0.92" />
          </svg>
        );
      case 'Kubernetes':
        return (
          <svg className="tech-icon" viewBox="0 0 256 256" aria-hidden="true" focusable="false">
            <path fill="none" stroke="currentColor" strokeWidth="10" d="m129 20 95 53-18 109-77 54-76-54-19-109z" />
            <path fill="currentColor" d="m130 66 16 21 26-3-2 26 21 14-18 18 8 25-25 6-11 24-23-14-23 14-11-24-25-6 8-25-18-18 21-14-2-26 26 3Z" />
          </svg>
        );
      case 'Tailwind CSS':
        return (
          <svg className="tech-icon" viewBox="0 0 256 156" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M128 30C152 14 176 14 200 38c-16-8-30-6-42 6-7.2 7.2-11.8 16.3-17.1 26.5C132 94 123 112 92 112c-24 0-42-18-44-42 10 16 24 22 40 18 9.6-2.4 16.8-9.6 24-22C120 44 128 30 128 30Zm76 44c24 0 42 18 44 42-10-16-24-22-40-18-9.6 2.4-16.8 9.6-24 22C144 140 136 154 136 154c-24 16-48 16-72-8 16 8 30 6 42-6 7.2-7.2 11.8-16.3 17.1-26.5C156 106 165 88 196 88Z" />
          </svg>
        );
      case 'Git':
        return (
          <svg className="tech-icon" viewBox="0 0 256 256" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="m247.3 118.7-110-110a10.3 10.3 0 0 0-14.6 0l-35.5 35.5 18.4 18.4a18 18 0 0 1 23 22.5l18.9 18.9a18 18 0 1 1-12.7 12.7l-17.7-17.7v46.8a18 18 0 1 1-12-16.9V76.7a18 18 0 0 1-10.3-23.5l-17-17L8.7 117.3a10.3 10.3 0 0 0 0 14.6l110 110a10.3 10.3 0 0 0 14.6 0l113-113a10.3 10.3 0 0 0 0-14.6Z" />
          </svg>
        );
      case 'AWS':
        return (
          <svg className="tech-icon" viewBox="0 0 256 154" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M93.3 57.5c-4.2-3.2-9.6-5-15.8-5-16 0-29 14.2-29 32.6 0 18.2 12.6 32.5 28.7 32.5 6.8 0 12.4-1.8 16.7-5.2v-13c-4 4-8.6 6-13.6 6-9.6 0-16.3-7.2-16.3-17.6 0-10.8 6.6-18 16.2-18 5 0 9.6 1.8 13.8 5.6V57.5Zm21.8 59.5h14.8L142 79.4l12.2 37.6h12.8l19-59.4h-14.6l-10.2 35.8-10.6-35.8h-13L126.8 96l-9-38.4H103l12.2 59.4Zm90.4-59.4h-14v59.4h14V57.6Z" />
            <path fill="currentColor" d="M52 123c-15.5-5.4-25.5-10.7-41-17.5-4.4-2-8 2-6 5 8.8 14 15 23.3 28 36 6 5.8 12 8 18 8 26 0 71-11 106-27 35-17 72-45 90-73 3-5-.3-9-5-6-24 14-61 32-90 43-35 13-79 25-100 22Z" opacity="0.8" />
          </svg>
        );
      default:
        return null;
    }
  };

  const techStack = [
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'React' },
    { name: 'Next.js' },
    { name: 'Node.js' },
    { name: 'Express' },
    { name: 'NestJS' },
    { name: 'MongoDB' },
    { name: 'PostgreSQL' },
    { name: 'Prisma' },
    { name: 'Docker' },
    { name: 'Kubernetes' },
    { name: 'Tailwind CSS' },
    { name: 'Git' },
    { name: 'AWS' },
  ];

  const skillTracks = [
    {
      title: 'Frontend Developer',
      skills: [
        { name: 'HTML5', level: 'Expert' },
        { name: 'JavaScript', level: 'Expert' },
        { name: 'TypeScript', level: 'Expert' },
        { name: 'React.js', level: 'Expert' },
        { name: 'Next.js', level: 'Expert' },
        { name: 'Tailwind CSS', level: 'Intermediate' },
      ],
    },
    {
      title: 'Backend Developer',
      skills: [
        { name: 'Node.js', level: 'Expert' },
        { name: 'Express.js', level: 'Expert' },
        { name: 'MongoDB', level: 'Expert' },
        { name: 'SQL', level: 'Intermediate' },
        { name: 'Docker', level: 'Intermediate' },
        { name: 'Kubernetes', level: 'Intermediate' },
      ],
    },
  ];
  
  return (
    <div className="homepage">
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
  <div className="hero-section animate__animated animate__fadeInUp">
    <div className="hero-content">
      <h1>Welcome to My Digital Realm</h1>
      <div className="items-box"> 
        <div className="hero-text-block">
          <p>
            I'm Tazkia, a full-stack developer passionate about creating seamless web experiences, from intuitive frontend to robust backends, with a keen interest in AI and its impact on the future of technology.
          </p>
          <div className="hero-actions">
            <a
              className="resume-btn"
              href="/tazkia_malik.pdf"
              download="tazkia_malik.pdf"
              aria-label="Download resume as PDF"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="image-container">
          <img src="laptop.png" alt="Laptop" className="laptop-image" />
        </div>
      </div>
    </div> {/* Close hero-content */}
  </div>   {/* Close hero-section */}
</main>

      <section className="tech-section">
        <div className="section-header">
          <p className="section-kicker">Technologies</p>
          <h2 className="section-title">My Tech Stack</h2>
        </div>
        <div className="tech-grid">
          {techStack.map((tech) => (
            <div className="tech-card" key={tech.name}>
              <div className="tech-icon-circle" aria-label={tech.name}>
                <TechIcon name={tech.name} />
              </div>
              <p className="tech-name">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-level-section">
        <div className="section-header">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">My Technical Level</h2>
        </div>
        <div className="skills-card-grid">
          {skillTracks.map((track) => (
            <div className="skill-card-glass" key={track.title}>
              <h3 className="skill-card-title">{track.title}</h3>
              <ul className="skill-level-list">
                {track.skills.map((skill) => (
                  <li className="skill-level-item" key={skill.name}>
                    <span className="skill-bullet" aria-hidden="true" />
                    <span className="skill-line">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
 <ProjectHomepage />


      {/* Biography Section 
      <section className="biography-section">
        <div className="profile-section">
          <div className="profile-image">
            <div 
              className="profile-image-inner" 
              style={{
                backgroundImage: "url('me.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </div>
          <div className="profile-info">
            <h1>Tazkia Malik</h1>
            <p className="job-title">Full Stack Developer</p>
            <p className="specialization">AI & Quantum Computing Enthusiast</p>
          </div>
        </div>
      </section>
*/}
      {/* Skills Section */}
      <section className="skillset-section">
        <div className="skills-section">
          <h2>Technical Skills</h2>
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
        </div>
      </section>

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
