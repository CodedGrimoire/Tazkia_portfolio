"use client";

import React, { useState } from 'react';
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
  "Agile Development"
];

const projects = [
  {
    id: 1,
    name: "Project Alpha",
    description: "A comprehensive web application built with React, Node.js, Express, and MongoDB.",
    image: "https://via.placeholder.com/400x250",
    tags: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    id: 2,
    name: "Project Beta",
    description: "An e-commerce platform with authentication, product management, and payments.",
    image: "https://via.placeholder.com/400x250",
    tags: ["React", "JavaScript", "REST APIs", "MongoDB"]
  },
  {
    id: 3,
    name: "Project Gamma",
    description: "A data visualization dashboard for tracking key metrics and performance indicators.",
    image: "https://via.placeholder.com/400x250",
    tags: ["React", "Responsive Design", "UI/UX Design", "JavaScript"]
  }
];

// =========================
// Main Component
// =========================
const Project = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Filter projects by selected skill
  const filteredProjects = selectedSkill
    ? projects.filter(project => project.tags.includes(selectedSkill))
    : projects;

  return (
    <div className="projects-page">
      <div className="projects-container">

        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1>Full Stack Developer</h1>
            <p>I create dynamic and responsive web applications. Explore my projects and let's build something amazing together.</p>
            <button className="cta-btn">View Projects</button>
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
        <section className="featured-projects">
          <h2>Featured Projects {selectedSkill && `(Filtered by: ${selectedSkill})`}</h2>
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div 
                  className="project-image"
                  style={{
                    backgroundImage: `url("${project.image}")`
                  }}
                ></div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {filteredProjects.length === 0 && (
              <p className="no-projects">No projects found for "{selectedSkill}".</p>
            )}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Project;
