"use client";

import React from 'react';
import './bio.css';

const Bio = () => {
  return (
    <div className="bio-page">
      <div className="bio-container">
        <div className="bio-content">
          {/* Profile Section */}
          <div className="profile-section">
            <div 
              className="profile-image"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCUkfu5SaBZ-nV3zGy5xW4QoLDBnn6wqhBSnNDyq7shyKK5IaVtjz1SFvj9-Qbl44RBlx7heqPElABdO-LeLMxNnpeAXNnt9OpnwoY5e4iRCAWj-JnviogggY0AwoR9hSKuSFnPOu2Iw0_NenVqWe30Wyss6b0adxVZhxKNHt4xHOVPTwk9JnocaCuM_kefRBDb8ueMAWAI9whbbB07-LYya3JjDiDkwJIExp_gb-yu9_au_FgA1vUwlHeJe9UPjufHmx_thK9cns8Z")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
            </div>
            <div className="profile-info">
              <h1>Ethan Carter</h1>
              <p className="job-title">Full Stack Developer</p>
              <p className="specialization">Specializing in MERN stack development</p>
            </div>
          </div>

          {/* Bio Description */}
          <div className="bio-description">
            <p>
              I'm a passionate full-stack developer with a focus on creating robust and scalable web applications using the MERN stack. With a strong foundation in both front-end and back-end technologies, I bring a holistic approach to software development, ensuring seamless user experiences and efficient functionality. My goal is to leverage my skills and expertise to build innovative solutions that meet the evolving needs of businesses and users alike.
            </p>
          </div>

          {/* Skills Section */}
          <div className="skills-section">
            <h2>Skills</h2>
            <div className="skills-grid">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">RESTful APIs</span>
              <span className="skill-tag">Responsive Design</span>
            </div>
          </div>

          {/* Experience Section */}
          <div className="experience-section">
            <h2>Experience</h2>
            <div className="experience-item">
              <div className="experience-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"/>
                </svg>
              </div>
              <div className="experience-details">
                <h3>Full Stack Developer at Tech Solutions Inc.</h3>
                <p className="experience-period">2021 - Present</p>
                <div className="experience-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;