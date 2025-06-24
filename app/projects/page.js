"use client";

import React from 'react';
import './projects.css';

const Project = () => {
  return (
    <div className="projects-page">
      <div className="projects-container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1>Full Stack Developer</h1>
            <p>Specializing in MERN stack development, I create dynamic and responsive web applications. Explore my projects and let's build something amazing together.</p>
            <button className="cta-btn">View Projects</button>
          </div>
        </div>

        {/* Featured Projects */}
        <section className="featured-projects">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div 
                className="project-image"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoLbyRFw4ag7W-DYm01Ne2tUYhv6_cm-bLR6S_VZj8lFsM5y-9iDAmUm_i8Wf5lHY-OPaQT44qr3OT1U6I1px4IwQmBEwPMXN7Tv9qEPYtYzZxEXNLkyHPL2UsqvDK6afkNw8CdtqIi1PZw3mVkNephkfYINE4Xsf-KnVsnO1jpe4ikWEWZ4QGW2oq8i6RSfG5Tx65yoWtlfehqkQE42r5RMZ42J3-j9CVrrRcX20NZ0fR5ck8k9TdN_xlUs4xjKByoYl-9V5aCed3")'
                }}
              ></div>
              <div className="project-info">
                <h3>Project Alpha</h3>
                <p>A comprehensive web application built with React, Node.js, Express, and MongoDB.</p>
              </div>
            </div>

            <div className="project-card">
              <div 
                className="project-image"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAWTwKTXGT9JHTM25AlliVbN2vruKB5Jy3NZpAKPGaq0HfTIHWZxXmqVilhCxNy9D_jHkpp8E53oNwAT2k7_dnO1DhyC5J6ir6_dFTSMGshwW-SZJ_3jSX-hrQ0goneAW4gZJuH-IuHIMkPiH1mqJCPP20lrkwxa6R6e8iIeN-4lo4cZAuqcVflcIW7ldCiiK542g4ak0h-2jsA5xebHRTzrB4MsnVCaTcEvI6v1et_HM1xgWvrEs_ZZxLm76GF2RtMoikFTR_oIsfQ")'
                }}
              ></div>
              <div className="project-info">
                <h3>Project Beta</h3>
                <p>An e-commerce platform with user authentication, product management, and payment integration.</p>
              </div>
            </div>

            <div className="project-card">
              <div 
                className="project-image"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBaDhP2MUVXQQ1piHAvmJqP4FY0UDS3IAJCa1M3YVVEHO93__4L-OorlJ-WIm35dgCuRqRJfmone4oDqEz_GPiG7Ol5LJKvWhdlzucILuvNdtEvo-FzoFW5i8iU03t7cEAB1-A1vJd4CNN_5m-LQU-dZcdp-cw20MXDDzBLX_NL4CTsKJhVt5JmlNbT7JtDb02gvpqFHj937cnShBis5fJAlkGH7hSvdfOfx23YWwCKN617jVUm6Jhuh8vA06zaR8uSOKTMXW8KeCF")'
                }}
              ></div>
              <div className="project-info">
                <h3>Project Gamma</h3>
                <p>A data visualization dashboard for tracking key metrics and performance indicators.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Express</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">HTML</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">Responsive Design</span>
            <span className="skill-tag">UI/UX Design</span>
            <span className="skill-tag">Agile Development</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;