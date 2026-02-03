
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
          <svg
            className="logo-image"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.5 3 9 6l3-2 3 2 2.5-3 .5 5c2 1 3 3 3 5.3C21 17.9 17.9 21 13 21H11C6.1 21 3 17.9 3 13.3 3 11 4 9 6 8l.5-5Zm6.5 8.5c0-.8-.7-1.5-1.5-1.5S10 10.7 10 11.5 10.7 13 11.5 13s1.5-.7 1.5-1.5Zm4 0c0-.8-.7-1.5-1.5-1.5S14 10.7 14 11.5 14.7 13 15.5 13s1.5-.7 1.5-1.5Zm-6.1 3.6c.7.3 1.4.4 2.1.4.7 0 1.4-.1 2.1-.4.5-.2 1 .4.7.9-.9 1.4-2.2 2-2.8 2s-1.9-.6-2.8-2c-.3-.5.2-1.1.7-.9Z" />
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
            onClick={() => window.open("https://drive.google.com/file/d/1aHQ9yr78g39Kff0_5R8BdOcCooQKTGxP/view?usp=sharing", "_blank")}
          >
            Resume
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
