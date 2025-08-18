"use client";

import React, { useState, useRef } from 'react';
import './projects.css';

// =========================
// Dummy Data Structure
// =========================
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
];

const projects = [
  {
    id: 1,
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
    id: 2,
    name: "Cinephile",
    description: "Cinephile is a modern movie app for exploring films, viewing details, and managing a personalized watchlist with AI powered movie suggestion.",
    image: "../cine.png",
    githubLink: "https://github.com/CodedGrimoire/cinephile",
    livelink: "https://cinephile-xoym.vercel.app/",
    videoLink: "",
    type: "Full Stack Web App",
    tags: ["React", "JavaScript", "REST APIs", "Firebase","AI/ML"]
  },
  {
    id: 3,
    name: "Uddhar",
    description: "The Tragedy Aid Management System streamlines aid distribution and tracking to ensure transparency and efficiency.",
    image: "../tra.png",
    githubLink: "https://github.com/CodedGrimoire/tragedy-aid-management",
    livelink: "https://tragedy-aid-management-467q.vercel.app/",
    videoLink: "",
    type: "Full Stack Web App",
    tags: ["React", "Responsive Design", "UI/UX Design", "JavaScript","Firebase","PostgreSQL","REST APIs"]
  },
  {
    id: 4,
    name: "ChartGenie",
    description: "ChartGenie is a conversational AI-powered web application that converts natural language descriptions into interactive diagrams via a chat interface",
    image: "../cg.png",
    githubLink: "https://github.com/CodedGrimoire/ChartGenie",
    livelink: "https://chart-genie-eta.vercel.app/",
    videoLink: "",
    type: "Full Stack Web App",
    tags: ["Next", "Responsive Design", "UI/UX Design", "JavaScript","REST APIs","AI/ML", "HTML", "CSS","REST APIs"]
  },
  {
    id: 5,
    name: "Mythos",
    description: "Mythos is an immersive app that brings legends of gods, goddesses, and mythical creatures from cultures around the world to life, letting you explore ancient stories, epic battles, and rich lore.",
    image: "../myth.png",
    githubLink: "https://github.com/CodedGrimoire/mythos",
    livelink: "https://mythos-fcgz.vercel.app/",
    videoLink: "",
    type: "Web App",
    tags: ["Next", "Responsive Design", "UI/UX Design", "JavaScript","REST APIs","HTML","CSS","AI/ML"]
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
     tags: ["Next", "Responsive Design", "UI/UX Design", "JavaScript","REST APIs","HTML","CSS","AI/ML"]
  },
  {
    id: 7,
    name: "ChefGPT",
    description: "ChefGPT is an AI-powered recipe recommendation app that suggests meal ideas based on the ingredients you have. It uses semantic search to retrieve matching recipes and falls back to Groq's LLM when no matches are found ",
    image: "../food.png",
    githubLink: "https://github.com/CodedGrimoire/ChefGPT",
    livelink: "https://chefgptfrontend2.vercel.app/",
    videoLink: "",
   type: "Web App",
     tags: ["Next", "Responsive Design", "UI/UX Design", "JavaScript","REST APIs","HTML","CSS","AI/ML"]
  }
];

// =========================
// Main Component
// =========================
const Project = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projectsSectionRef = useRef(null);

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
    <div className="projects-page">
      <div className="projects-container">

        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1>Full Stack Developer</h1>
            <p>I create dynamic and responsive web applications. Explore my projects and let's build something amazing together.</p>
            <button className="cta-btn" onClick={handleScrollToProjects}>View Projects</button>
          </div>
        </div>

        {/* Skills Section (Filterable) */}
        <section className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map(skill => (
              <button
                key={skill}
                className={`skill-tag ${selectedSkill === skill ? "active" : ""}`}
                onClick={() => setSelectedSkill(skill)}
              >
                {skill}
              </button>
            ))}
          </div>

          {/* Clear Filter Button */}
          {selectedSkill && (
            <button  
              className="clear-filter-btn" 
              onClick={() => setSelectedSkill(null)}
            >
              Clear Filter ✖
            </button>
          )}
        </section>

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
        {isModalOpen && selectedProject && (
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;