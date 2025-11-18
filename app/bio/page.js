"use client";

import React, { useState, useEffect } from 'react';
import './bio.css';
import { animate, createScope } from 'animejs';

const Bio = () => {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('frontend');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [animatedText, setAnimatedText] = useState('');

  const skillCategories = {
    frontend: ['React', 'Next.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'GraphQL'],
    database: ['PostgreSQL', 'MongoDB', 'Firebase', 'Supabase'],
    devops: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Git'],
    ai: ['TensorFlow', 'PyTorch', 'Machine Learning', 'NLP', 'Computer Vision'],
    tools: ['VS Code', 'Postman', 'Figma', 'Linux', 'Bash']
  };

  const specializations = [
    "Full Stack Developer",
    "AI Enthusiast", 
    "Quantum Computing Explorer",
    "Problem Solver"
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setAnimatedText(specializations[currentIndex]);
      currentIndex = (currentIndex + 1) % specializations.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Scroll reveal animations
  useEffect(() => {
    const scope = createScope();
    const revealTargets = document.querySelectorAll(
      '.profile-section, .bio-description, .skills-section, .education-section, .experience-section'
    );

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = 'true';

          scope.add(() => {
            animate(entry.target, {
              from: { opacity: 0, translateY: 24 },
              to: { opacity: 1, translateY: 0 },
              duration: 600,
              ease: 'easeOutCubic'
            });

            // Stagger in skill tags when the skills section enters
            if (entry.target.classList.contains('skills-section')) {
              const tags = entry.target.querySelectorAll('.skill-tag');
              animate(tags, {
                from: { opacity: 0, translateY: 12 },
                to: { opacity: 1, translateY: 0 },
                delay: (index) => index * 60,
                duration: 400,
                ease: 'easeOutQuad'
              });
            }
          });

          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    revealTargets.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      scope.revert();
    };
  }, []);

  const openModal = (type, data) => {
    setModalContent({ type, data });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  return (
    <div className="bio-page">
      {/* Animated background elements */}
      <div className="bg-animation">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
      </div>

      <div className="bio-container">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-image-wrapper">
            <div 
              className="profile-image"
              style={{
                backgroundImage: 'url("../me.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              onClick={() => openModal('profile', {})}
            />
            <div className="online-status"></div>
          </div>
          
          <div className="profile-info">
            <h1>Tazkia Malik</h1>
            <div className="animated-title">
              <p className="job-title">{animatedText}</p>
            </div>
          </div>
        </div>

        {/* Bio Description */}
        <div className="bio-description">
          <p>
            I'm Tazkia, a full-stack developer passionate about building scalable and meaningful digital experiences. 
            With hands-on expertise across the entire tech stack and a growing focus on artificial intelligence and quantum computing, 
            I turn complex ideas into real-world solutions. Whether it's frontend finesse or backend architecture, I craft with purpose, clarity, and precision.
          </p>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h2>Technical Skills</h2>
          
          {/* Skill Category Buttons */}
          <div className="skill-categories">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedSkillCategory(category)}
                className={`category-btn ${selectedSkillCategory === category ? 'active' : ''}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {skillCategories[selectedSkillCategory].map((skill, index) => (
              <div
                key={skill}
                className="skill-tag"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal('skill', { name: skill, category: selectedSkillCategory })}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="education-section">
          <h2>Education</h2>
          <div className="education-item">
            <div className="education-icon">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9l-11-6zM18.82 9L12 12.72 5.18 9 12 5.28 18.82 9zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73V16z"/>
              </svg>
            </div>
            <div className="education-details">
              <h3>Bachelor of Science in Computer Science and Engineering</h3>
              <p className="education-institution">University of Dhaka</p>
              <p className="education-description">
                Comprehensive study in computer science fundamentals, software engineering, algorithms, 
                and emerging technologies including AI and quantum computing.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="experience-section">
          <h2>Professional Experience</h2>
          <div className="experience-item">
  <div className="experience-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
    </svg>
  </div>
  <div className="experience-details">
    <h3>Backend Engineer at Makebell</h3>
    <p className="experience-period">2025 – Present</p>
    <p>
      Working at <b>Makebell</b>, a legal document configuring platform with AI. 
      Responsible for building scalable backend services, designing APIs, integrating AI-powered features, 
      and ensuring secure and efficient document management workflows.
    </p>
    <div className="experience-line"></div>
  </div>
</div>

          <div className="experience-item">
            <div className="experience-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"/>
              </svg>
            </div>
            <div className="experience-details">
              <h3>Annotation Specialist at Labelbox & SuperAnnotate</h3>
              <p className="experience-period">2021 – Present</p>
              <p>
                Specialized in AI code alignment and data annotation for LLMs like Gemini. 
                Contributed to model comprehension, code-based prompt crafting, and QA for coding datasets.
              </p>
              <div className="experience-line"></div>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
              </svg>
            </div>
            <div className="experience-details">
              <h3>Freelance Full Stack Developer</h3>
              <p className="experience-period">2022 – Present</p>
              <p>
                Delivered custom-built web apps using MERN and Next.js. Developed AI-powered tools like resume analyzers, diagram generators, and travel logs.
              </p>
              <div className="experience-line"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                {modalContent?.type === 'skill' ? modalContent.data.name : 'Profile'}
              </h3>
              <button className="modal-close" onClick={closeModal}>
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="modal-body">
              {modalContent?.type === 'skill' ? (
                <div>
                  <p className="modal-category">
                    Category: <span>{modalContent.data.category}</span>
                  </p>
                  <p>
                    {modalContent.data.name} is one of my core technical skills. I use it regularly in my development projects and continue to expand my expertise in this area.
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    Full Stack Developer passionate about creating innovative solutions with cutting-edge technologies. 
                    Always eager to take on new challenges and learn emerging technologies.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bio;