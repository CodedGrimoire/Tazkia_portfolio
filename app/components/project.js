"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import './project.css';

const projects = [
  {
    id: 1,
    name: "Askoria",
    description: "Askoria is a full-stack web application that allows users to generate structured course outlines instantly. Users provide a course title and description, and the backend—powered by AI—returns a clear, organized outline of modules and lessons.",
    image: "/ask.png",
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
    image: "/cgb.png",
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
    image: "/cine.png",
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
    image: "/tra.png",
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
    image: "/wsa.png",
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
    image: "/ras.png",
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
    image: "/style.png",
    githubLink: "https://github.com/CodedGrimoire/style-frontend",
    livelink: "https://style-frontend-sigma.vercel.app/",
    videoLink: "",
    type: "Full Stack Web App",
    tags: ["Next", "Responsive Design", "UI/UX Design", "JavaScript", "TypeScript", "REST APIs", "Stripe", "MERN"]
  },
  {
    id: 8,
    name: "The Book Haven",
    description: "The Book Haven is a full-stack MERN library with Firebase Auth where readers can explore, add, manage, and review books with dynamic feeds, sorting, and private CRUD routes.",
    image: "/bookhaven.png",
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
  },
  {
    id: 9,
    name: "DataPilot AI",
    description: "DataPilot AI is an AI spreadsheet workspace that turns natural-language questions into safe SQL, runs them on uploaded datasets, and returns dashboards, tables, and insights in a polished analytics interface.",
    image: "/datapilot.png",
    githubLink: "",
    livelink: "",
    videoLink: "",
    type: "Full Stack Web App",
    tags: [
      "Next",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "AI/ML",
      "SQL",
      "Tailwind",
      "Data Visualization"
    ]
  },
  {
    id: 10,
    name: "Garden AI",
    description: "Garden AI is a full-stack plant discovery platform with personalized recommendations, AI gardening guidance, and a RAG-powered knowledge base for more grounded plant care answers.",
    image: "/garden.png",
    githubLink: "",
    livelink: "",
    videoLink: "",
    type: "Full Stack Web App",
    tags: [
      "Next",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "AI/ML",
      "RAG",
      "Tailwind",
      "REST APIs"
    ]
  },
  {
    id: 11,
    name: "Hopper",
    description: "Hopper is a collaborative full-stack compute provisioning platform for university environments, where students can launch isolated workspaces, access them through the web and SSH, and use credits under role-based institutional controls.",
    image: "/hopper.png",
    githubLink: "https://github.com/CREVIOS/Hopper",
    livelink: "https://hopper.farefin.com",
    videoLink: "https://youtu.be/9BCcEsXJXi0",
    reportLink: "/hopper.pdf",
    type: "Collaborative Full Stack Platform",
    tags: [
      "SvelteKit",
      "FastAPI",
      "Go",
      "PostgreSQL",
      "Kubernetes",
      "Keycloak",
      "NATS",
      "Testing"
    ]
  }
];

const projectInsights = {
  Askoria: {
    challenges: [
      "Designing prompts that generate structured, balanced quizzes.",
      "Handling AI output variability while keeping UX consistent.",
      "Managing latency and cost trade-offs."
    ],
    plans: [
      "Adaptive difficulty based on user performance.",
      "Question quality scoring.",
      "Support for additional quiz formats."
    ]
  },
  ChartGenie: {
    challenges: [
      "Translating ambiguous natural language into accurate diagrams.",
      "Maintaining diagram correctness with flexible input.",
      "Rendering complex visuals efficiently."
    ],
    plans: [
      "Support for more diagram types.",
      "Editable post-generation diagrams.",
      "Multi-format export."
    ]
  },
  Cinephile: {
    challenges: [
      "Building relevant recommendations without overfitting.",
      "Balancing API performance with UX.",
      "Avoiding visual clutter."
    ],
    plans: [
      "Hybrid recommendation logic.",
      "Persistent user profiles.",
      "Offline caching."
    ]
  },
  Uddhar: {
    challenges: [
      "Modeling real-world emergency workflows.",
      "Designing time-critical dashboards.",
      "Maintaining usability for non-technical users."
    ],
    plans: [
      "Role-based dashboards.",
      "Real-time analytics and alerts.",
      "External system integrations."
    ]
  },
  ResumeGPT: {
    challenges: [
      "Avoiding generic AI feedback.",
      "Structuring actionable insights.",
      "Handling diverse resume formats."
    ],
    plans: [
      "JD matching.",
      "Career roadmap generation.",
      "Resume version comparison."
    ]
  },
  Awaaz: {
    challenges: [
      "Ensuring reliability of emergency features.",
      "Minimizing latency in critical actions.",
      "Designing for trust and simplicity."
    ],
    plans: [
      "Pattern-based safety detection.",
      "Multilingual support.",
      "Emergency service integration."
    ]
  },
  "Style Frontend": {
    challenges: [
      "Implementing role-based access control.",
      "Secure payment integration.",
      "Frontend–backend state consistency."
    ],
    plans: [
      "Advanced analytics.",
      "Service customization.",
      "Improved order tracking."
    ]
  },
  "The Book Haven": {
    challenges: [
      "Managing auth boundaries.",
      "Efficient CRUD operations.",
      "Scaling content-heavy views."
    ],
    plans: [
      "Reading-based recommendations.",
      "Social reading features.",
      "Performance optimization."
    ]
  },
  "DataPilot AI": {
    challenges: [
      "Translating ambiguous natural-language questions into reliable SQL.",
      "Keeping dataset queries safe while still supporting useful joins and aggregations.",
      "Presenting dashboards, tables, and answers in one coherent workflow."
    ],
    plans: [
      "Broader chart coverage and richer dashboard templates.",
      "Persistent collaboration and dataset history.",
      "Smarter semantic modeling for uploaded spreadsheet schemas."
    ]
  },
  "Garden AI": {
    challenges: [
      "Balancing friendly UX with genuinely useful plant-care guidance.",
      "Designing recommendation flows that still work when backend data is sparse.",
      "Keeping retrieval-based gardening answers grounded in curated source material."
    ],
    plans: [
      "Saved care plans and user dashboards.",
      "Deeper AI chat and profile-aware plant guidance.",
      "Expanded knowledge-base ingestion and recommendation quality."
    ]
  },
  Hopper: {
    challenges: [
      "Coordinating a multi-service architecture across frontend, API, orchestration, identity, and cluster infrastructure.",
      "Keeping provisioning, billing, and role-based access flows reliable under real deployment constraints.",
      "Maintaining confidence across a large collaborative codebase with many moving parts."
    ],
    plans: [
      "Stronger distributed rate limiting and staging validation.",
      "More scalable multi-node deployment support.",
      "Expanded platform observability and user assistance inside the dashboard."
    ]
  }
};
// =========================
// Main Component
// =========================
const ProjectHomepage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const reduceMotion = useReducedMotion();
  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="projects-page">
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
        <section className="featured-projects" id="featured-projects">
          <h2>Featured Projects</h2>
          <motion.div className="projects-grid" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }} variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
            {projects.map(project => (
              <motion.div
                key={project.id} 
                className="project-card"
                onClick={() => openModal(project)}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                variants={{ show: { opacity: 1, y: 0 } }}
                whileHover={reduceMotion ? {} : { y: -8, scale: 1.012 }}
                whileTap={reduceMotion ? {} : { scale: 0.985 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <motion.div className="project-image" layoutId={`project-image-${project.id}`}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </motion.div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-type">
                    <span className="type-badge">{project.type}</span>
                  </div>
                </div>
                <div className="project-links">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="project-link-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="project-link-icon">
                        <path
                          fill="currentColor"
                          d="M12 .5C5.7.5.7 5.5.7 11.8c0 5 3.2 9.3 7.7 10.8.6.1.8-.3.8-.6v-2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.2-1.3-5.2-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a10 10 0 0 1 6 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.4 0 4.6-2.7 5.6-5.2 5.9.4.3.8 1 .8 2v3c0 .3.2.7.8.6a11.3 11.3 0 0 0 7.7-10.7C23.3 5.5 18.3.5 12 .5Z"
                        />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.livelink && (
                    <a
                      href={project.livelink}
                      className="project-link-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="project-link-icon">
                        <path
                          fill="currentColor"
                          d="M5 19h14v2H5zm13.3-9.4-4.9 4.9-3-3L4 18V6h14v3.6Zm-6.2 2.4 5-5H6v6.9l3.2-3.2 3 3Z"
                        />
                      </svg>
                      <span>Live</span>
                    </a>
                  )}
                </div>
                <div className="hover-hint">click to expand</div>
              </motion.div>
            ))}

          </motion.div>
        </section>

        {/* Modal */}
        {isMounted && createPortal(
          <AnimatePresence>
            {isModalOpen && selectedProject && (
            <motion.div className="modal-overlay" onClick={closeModal} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="modal-content" onClick={(e) => e.stopPropagation()} initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 40, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }} transition={{ type: 'spring', stiffness: 260, damping: 26 }}>
              <motion.button className="modal-close" onClick={closeModal} whileHover={reduceMotion ? {} : { rotate: 90, scale: 1.08 }} whileTap={reduceMotion ? {} : { scale: 0.9 }}>✕</motion.button>
              
              <div className="modal-body">
                {/* Image Section - 80% width */}
                <motion.div className="modal-image-section" layoutId={`project-image-${selectedProject.id}`}>
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="modal-image"
                    width={1200}
                    height={720}
                    sizes="(max-width: 900px) 100vw, 70vw"
                    priority
                  />
                </motion.div>
                
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
                        GitHub
                      </a>
                    )}
                    
                    {selectedProject.livelink && (
                      <a 
                        href={selectedProject.livelink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="modal-link live-link"
                      >
                        Live Demo
                      </a>
                    )}
                    
                    {selectedProject.videoLink && (
                      <a 
                        href={selectedProject.videoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="modal-link video-link"
                      >
                        Video Demo
                      </a>
                    )}

                    {selectedProject.reportLink && (
                      <a 
                        href={selectedProject.reportLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="modal-link live-link"
                      >
                        Report
                      </a>
                    )}
                  </div>

                  {projectInsights[selectedProject.name] && (
                    <div className="modal-insights">
                      <div className="insight-section">
                        <h4>Challenges Faced</h4>
                        <ul>
                          {projectInsights[selectedProject.name].challenges.map((item, idx) => (
                            <li key={`challenge-${idx}`}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="insight-section">
                        <h4>Potential Improvements &amp; Future Plans</h4>
                        <ul>
                          {projectInsights[selectedProject.name].plans.map((item, idx) => (
                            <li key={`plan-${idx}`}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </div>
  );
};

export default ProjectHomepage;
