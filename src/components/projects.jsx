
function Projects() {
  const projects = [
    {
      name: "Real-Time Messenger Application",
      description:
        "A real-time messaging application built using React and Go. Features a modern chat interface, sidebar tools, and an interactive canvas.",
      technologies: ["React", "Go"],
      category: "Full Stack",
      github:
        "https://github.com/prajwalpais-08/Real-Time-Messenger-Application",
      live: "https://real-time-messenger-frontend.onrender.com",
    },
    {
      name: "SmartInventory",
      description:
        "A Windows desktop inventory and sales management system with product management, customer management, POS, purchase tracking, stock updates, low-stock alerts, and printable sales reports.",
      technologies: ["C#", ".NET WinForms", "SQL Server"],
      category: "Desktop Application",
      github:
        "https://github.com/prajwalpais-08/SmartInventory",
      live: null,
    },
    {
      name: "GST Billing App",
      description:
        "A GST billing application with automatic CGST, SGST, and IGST calculations, invoice history, SQLite database storage, and PDF invoice export.",
      technologies: [
        "HTML",
        "JavaScript",
        "Node.js",
        "Express",
        "SQLite",
      ],
      category: "Web Application",
      github: "https://github.com/prajwalpais-08/gst-billing",
      live: "https://gst-billing-xi.vercel.app",
    },
    {
      name: "Multi-Cipher Network Simulator",
      description:
        "An interactive network and cipher simulation project. Explore the implementation and experiments through its source code and live deployment.",
      technologies: ["JavaScript"],
      category: "Simulation",
      github:
        "https://github.com/prajwalpais-08/multi-cipher-network-simulator",
      live: "https://multi-cipher-network-simulator.vercel.app",
    },
    {
      name: "Banking Backend API",
      description:
        "A modular REST API for managing banking users, accounts, and transactions using Express.js, MongoDB, Mongoose, and MVC architecture.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
      ],
      category: "Backend Development",
      github: "https://github.com/prajwalpais-08/banking-backend",
      live: null,
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* Heading */}
        <header className="projects-header">
          <span className="projects-label">MY WORK</span>

          <h2>
            My <span>Projects</span>
          </h2>

          <p>
            Explore my development journey through applications,
            software, and projects I've built.
          </p>

          <a
            href="https://github.com/prajwalpais-08"
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-link"
          >
            Explore My GitHub Profile ↗
          </a>
        </header>

        {/* Project count */}
        <div className="projects-toolbar">
          <span>FEATURED PROJECTS</span>
          <span>{projects.length} PROJECTS</span>
        </div>

        {/* Project cards */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.github}>

              <div className="project-top">
                <span className="project-icon">⌘</span>

                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.name}</h3>

              <p className="project-description">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project links */}
              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn github-btn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M9 19c-4 1.5-4-2.5-6-3m12 6v-4a3 3 0 0 0-1-2.5c3-.5 6-1.5 6-7a5 5 0 0 0-1.4-3.5 5 5 0 0 0-.1-3.5S17.5 1.5 15 3a13 13 0 0 0-7 0C5.5 1.5 4.2 1.5 4.2 1.5a5 5 0 0 0-.1 3.5A5 5 0 0 0 2.7 8.5c0 5.5 3 6.5 6 7a3 3 0 0 0-1 2.5v4" />
                  </svg>

                  GitHub Code ↗
                </a>

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn live-btn"
                  >
                    Live Project ↗
                  </a>
                ) : (
                  <span className="no-live">
                    No live demo yet
                  </span>
                )}

              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Styles */}
      <style>{`
        .projects-section {
          min-height: 100vh;
          background: #111;
          color: #fff;
          padding: 100px 7%;
          font-family: inherit;
        }

        .projects-container {
          max-width: 1250px;
          width: 100%;
          margin: auto;
        }

        .projects-header {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 65px;
        }

        .projects-label {
          color: #a78bfa;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 5px;
        }

        .projects-header h2 {
          font-size: clamp(40px, 6vw, 65px);
          margin: 18px 0;
          font-weight: 800;
        }

        .projects-header h2 span {
          color: #a78bfa;
        }

        .projects-header p {
          color: #999;
          line-height: 1.8;
          font-size: 15px;
        }

        .github-profile-link {
          display: inline-block;
          margin-top: 20px;
          color: #c4b5fd;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .github-profile-link:hover {
          color: #fff;
        }

        .projects-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          padding-bottom: 17px;
          border-bottom: 1px solid #303030;
          color: #999;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 23px;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          min-height: 340px;
          padding: 27px;
          background: #191919;
          border: 1px solid #303030;
          border-radius: 16px;
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-7px);
          border-color: #a78bfa;
          background: #1e1a26;
        }

        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .project-icon {
          color: #a78bfa;
          font-size: 28px;
        }

        .project-number {
          color: #666;
          font-size: 12px;
        }

        .project-category {
          color: #a78bfa;
          font-size: 11px;
          margin-top: 23px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .project-card h3 {
          font-size: 19px;
          line-height: 1.4;
          margin: 10px 0;
          overflow-wrap: anywhere;
        }

        .project-description {
          color: #999;
          font-size: 13px;
          line-height: 1.8;
          margin: 8px 0 20px;
          flex: 1;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 20px;
        }

        .project-technologies span {
          background: #282333;
          color: #c4b5fd;
          padding: 6px 9px;
          border-radius: 5px;
          font-size: 10px;
        }

        .project-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          padding-top: 17px;
          border-top: 1px solid #303030;
        }

        .project-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 10px 12px;
          border-radius: 7px;
          font-size: 11px;
          font-weight: 600;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .project-btn svg {
          width: 16px;
          height: 16px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.7;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .github-btn {
          background: #292929;
          border: 1px solid #444;
          color: #fff;
        }

        .github-btn:hover {
          border-color: #a78bfa;
        }

        .live-btn {
          background: #a78bfa;
          border: 1px solid #a78bfa;
          color: #17121f;
        }

        .live-btn:hover {
          background: #c4b5fd;
        }

        .no-live {
          color: #777;
          font-size: 11px;
        }

        @media (max-width: 1000px) {
          .projects-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 620px) {
          .projects-section {
            padding: 75px 5%;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-card {
            min-height: 300px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .project-card,
          .project-btn {
            transition: none;
          }

          .project-card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;
