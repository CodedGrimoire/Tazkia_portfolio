
"use client";
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import './navbar.css';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo-icon">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h2>Tech Portfolio</h2>
      </div>
      <nav className="nav-section">
        <div className="nav-links">
          <a 
            href="#" 
            className={pathname === '/' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}
          >
            Home
          </a>
          <a 
            href="#" 
            className={pathname === '/bio' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavigation('/bio'); }}
          >
            About
          </a>
          <a 
            href="#" 
            className={pathname === '/projects' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavigation('/projects'); }}
          >
            Projects
          </a>
          <a 
            href="#" 
            className={pathname === '/contact' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavigation('/contact'); }}
          >
            Contact
          </a>
        </div>
        <div className="nav-actions">
          <div className="nav-social">
            <a
              href="https://github.com/CodedGrimoire"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"/>
              </svg>
            </a>
          </div>
          <button 
            className="resume-btn" 
            onClick={() => window.open("https://drive.google.com/file/d/18vHq8T3T7d09YMsDDcaD8wXeOCdehM6j/view?usp=sharing", "_blank")}
          >
            Resume
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
