"use client";

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './project.css';
import { animate, createScope } from 'animejs';


const skills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "REST APIs",
  "Responsive Design",
  "UI/UX Design",
  "Agile Development",
  "Firebase",
   "Supabase",
   "PostgreSQL",
   "Dart",
   "Next",
   "AI/ML",
   "RAG"
];

const projects = [
     {
    id: 1,
    name: "Askoria",
    description: "Askoria is a full-stack web application that allows users to generate structured course outlines instantly. Users provide a course title and description, and the backend—powered by AI—returns a clear, organized outline of modules and lessons.",
    image: "../ask.png",
    githubLink: "https://github.com/CodedGrimoire/askoria",
    livelink: "https://askoria-frontend-5oqc.vercel.app/",
    videoLink: "",
    type: "Full Stack Web App",
    tags: ["Next", "Responsive Design", "UI/UX Design", "JavaScript","REST APIs","AI/ML", "HTML", "CSS","REST APIs","Node.js",  "Express"]
  },
   {
    id: 2,
    name: "ChartGenie",
    description: "ChartGenie is a conversational AI-powered web application that converts natural language descriptions into interactive diagrams via a chat interface",
    image: "../cgb.png",
    githubLink: "https://github.com/CodedGrimoire/ChartGenie",
    livelink: "https://chart-genie-eta.vercel.app/",
    videoLink: "",
    type: "Full Stack Web App",
    tags: ["Next", "Responsive Design", "UI/UX Design", "JavaScript","REST APIs","AI/ML", "HTML", "CSS","REST APIs","Node.js",  "Express"]
  },
  
  {
    id: 3,
    name: "Cinephile",
    description: "Cinephile is a modern movie app for exploring films, viewing details, and managing a personalized watchlist with AI powered movie suggestion.",
    image: "../cine.png",
    githubLink: "https://github.com/CodedGrimoire/cinephile",
    livelink: "https://cinephile-xoym.vercel.app/",
    videoLink: "",
    type: "Full Stack Web App",
    tags: ["React", "JavaScript", "REST APIs", "Firebase","AI/ML","Node.js",  "Express"]
  },
  {
    id: 4,
    name: "Uddhar",
    description: "The Tragedy Aid Management System streamlines aid distribution and tracking to ensure transparency and efficiency.",
    image: "../tra.png",
    githubLink: "https://github.com/CodedGrimoire/tragedy-aid-management",
    livelink: "https://tragedy-aid-management-467q.vercel.app/",
    videoLink: "",
    type: "Full Stack Web App",
    tags: ["React", "Responsive Design", "UI/UX Design", "JavaScript","Firebase","PostgreSQL","REST APIs", "Prisma"]
  },
  {
    id: 5,
    name: "Awaaz",
    description: "A women's safety app with SOS alerts, live location sharing, and instant connection to trusted contacts.",
    image: "../wsa.png",
    githubLink: "",
    livelink: "",
    videoLink: "https://drive.google.com/file/d/1xcR1gDCwLOJ-ESR5iPGl1mAAk5Y1I4zi/view?usp=sharing",
    type: "Mobile App",
    tags: ["Flutter", "Supabase","Dart","Firebase","REST APIs"]
  },
 
 
  {
    id: 6,
    name: "ResumeGPT",
    description: "ResumeGPT is an AI-powered resume review and career insight tool that analyzes uploaded resumes and provides detailed, structured feedback, along with personalized career insights using LLMs via the Groq API.",
    image: "../ras.png",
    githubLink: "https://github.com/CodedGrimoire/resume-gpt",
    livelink: "https://resume-gpt-frontend-tau.vercel.app/",
    videoLink: "",
   type: "Web App",
     tags: ["Next", "Responsive Design", "UI/UX Design", "JavaScript","REST APIs","HTML","CSS","AI/ML","Node.js",  "Express"]
  },
  {
    id: 7,
    name: "Style Frontend",
    description: "Style is a frontend for a role-based commerce experience with Stripe-powered payments, delivering tailored views for admins, customers, and guests.",
    image: "../style.png",
    githubLink: "https://github.com/CodedGrimoire/style-frontend",
    livelink: "https://style-frontend-sigma.vercel.app/",
    videoLink: "",
    type: "Web App",
    tags: ["Next", "Responsive Design", "UI/UX Design", "JavaScript", "TypeScript", "REST APIs", "Stripe", "MERN"]
  },
  {
    id: 8,
    name: "The Book Haven",
    description: "The Book Haven is a full-stack MERN library with Firebase Auth where readers can explore, add, manage, and review books with dynamic feeds, sorting, and private CRUD routes.",
    image: "../bookhaven.png",
    githubLink: "https://github.com/CodedGrimoire/a10frontend",
    livelink: "https://a10frontend-seven.vercel.app/",
    videoLink: "",
    type: "Full Stack Web App",
    tags: [
      "MERN",
      "React",
      "Firebase",
      "MongoDB",
      "Express",
      "Node.js",
      "REST APIs",
      "Responsive Design",
      "UI/UX Design",
      "Axios"
    ]
  }
];

// =========================
// Main Component
// =========================
const ProjectHomepage = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const projectsSectionRef = useRef(null);
  useEffect(() => setIsMounted(true), []);

  // Hero intro animation (v4 API)
  useEffect(() => {
    const scope = createScope();
    scope.add(() => {
      animate('.hero-content h1', {
        from: { opacity: 0, translateY: 20 },
        to: { opacity: 1, translateY: 0 },
        duration: 700,
        ease: 'easeOutQuad'
      });
      animate('.hero-content p', {
        from: { opacity: 0, translateY: 20 },
        to: { opacity: 1, translateY: 0 },
        duration: 600,
        delay: 300,
        ease: 'easeOutQuad'
      });
      animate('.hero-content .cta-btn', {
        from: { opacity: 0, translateY: 20 },
        to: { opacity: 1, translateY: 0 },
        duration: 600,
        delay: 600,
        ease: 'easeOutQuad'
      });
    });
    return () => scope.revert();
  }, []);

  // Animate project cards when section enters viewport
  useEffect(() => {
    const sectionEl = projectsSectionRef.current;
    if (!sectionEl) return;
    const scope = createScope();

    const run = () => {
      const cards = sectionEl.querySelectorAll('.project-card');
      scope.add(() => {
        animate(cards, {
          from: { opacity: 0, translateY: 16 },
          to: { opacity: 1, translateY: 0 },
          delay: (index) => index * 100,
          duration: 550,
          ease: 'easeOutCubic'
        });
      });
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          run();
          io.disconnect();
        }
      });
    }, { threshold: 0.2 });

    io.observe(sectionEl);
    return () => {
      io.disconnect();
      scope.revert();
    };
  }, []);

  // Re-animate cards when filters change
  useEffect(() => {
    const sectionEl = projectsSectionRef.current;
    if (!sectionEl) return;
    const scope = createScope();
    const cards = sectionEl.querySelectorAll('.project-card');
    scope.add(() => {
      animate(cards, {
        from: { opacity: 0, translateY: 12 },
        to: { opacity: 1, translateY: 0 },
        delay: (index) => index * 80,
        duration: 450,
        ease: 'easeOutQuad'
      });
    });
    return () => scope.revert();
  }, [selectedSkill]);

  // Modal pop-in animation on open
  useEffect(() => {
    const scope = createScope();
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      scope.add(() => {
        animate('.modal-overlay', {
          from: { opacity: 0 },
          to: { opacity: 1 },
          duration: 200,
          ease: 'linear'
        });
        animate('.modal-content', {
          from: { opacity: 0, scale: 0.96, translateY: 8 },
          to: { opacity: 1, scale: 1, translateY: 0 },
          duration: 300,
          ease: 'easeOutCubic'
        });
      });
    }
    return () => {
      document.body.style.overflow = '';
      scope.revert();
    };
  }, [isModalOpen]);

  // Filter projects by selected skill
  const filteredProjects = selectedSkill
    ? projects.filter(project => project.tags.includes(selectedSkill))
    : projects;

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleScrollToProjects = () => {
    if (projectsSectionRef.current) {
      projectsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="projects-page animate__animated animate__fadeIn">
      <div className="projects-container">

        {/* Hero Section 
        <div className="hero-section">
          <div className="hero-content">
            <h1>Full Stack Developer</h1>
            <p>I create dynamic and responsive web applications. Explore my projects and let's build something amazing together.</p>
            <button className="cta-btn" onClick={handleScrollToProjects}>View Projects</button>
          </div>
        </div>
*/}
       

        

        {/* Featured Projects */}
        <section className="featured-projects" id="featured-projects" ref={projectsSectionRef}>
          <h2>Featured Projects {selectedSkill && `(Filtered by: ${selectedSkill})`}</h2>
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => openModal(project)}
              >
                <div 
                  className="project-image"
                  style={{
                    backgroundImage: `url("${project.image}")`
                  }}
                ></div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-type">
                    <span className="type-badge">{project.type}</span>
                  </div>
                </div>
                <div className="hover-hint">click to expand</div>
              </div>
            ))}

            {filteredProjects.length === 0 && (
              <p className="no-projects">No projects found for "{selectedSkill}".</p>
            )}
          </div>
        </section>

        {/* Modal */}
        {isMounted && isModalOpen && selectedProject && createPortal(
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>✕</button>
              
              <div className="modal-body">
                {/* Image Section - 80% width */}
                <div className="modal-image-section">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.name}
                    className="modal-image"
                  />
                </div>
                
                {/* Info Section - 20% width */}
                <div className="modal-info-section">
                  <div className="modal-header">
                    <h2>{selectedProject.name}</h2>
                    <span className="modal-type-badge">{selectedProject.type}</span>
                  </div>
                  
                  <p className="modal-description">{selectedProject.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="modal-tech-stack">
                    <h4>Tech Stack</h4>
                    <div className="modal-tags">
                      {selectedProject.tags.map((tag, index) => (
                        <span key={`${tag}-${index}`} className="modal-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Links */}
                  <div className="modal-links">
                    {selectedProject.githubLink && (
                      <a 
                        href={selectedProject.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="modal-link github-link"
                      >
                        <i className="fa-brands fa-github" /> GitHub
                      </a>
                    )}
                    
                    {selectedProject.livelink && (
                      <a 
                        href={selectedProject.livelink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="modal-link live-link"
                      >
                        <i className="fa-solid fa-rocket" /> Live Demo
                      </a>
                    )}
                    
                    {selectedProject.videoLink && (
                      <a 
                        href={selectedProject.videoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="modal-link video-link"
                      >
                        <i className="fa-solid fa-video" /> Video Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </div>
  );
};

export default ProjectHomepage;
