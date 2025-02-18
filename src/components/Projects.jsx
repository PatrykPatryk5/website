import { translations } from '../translations/index.js';
import '../styles/Projects.css';

const Projects = ({ currentLang }) => {
  const t = translations[currentLang];

  const flagshipProject = {
    title: t.projects.flagship.title,
    description: t.projects.flagship.description,
    technologies: ["AI", "ML", "Web", "Cloud"],
    features: t.projects.flagship.features,
    stats: {
      accuracy: "99.9%",
      languages: "28+",
      response: "<0.5s"
    }
  };

  const otherProjects = t.projects.otherProjects.projects;

  const techIcons = {
    'AI': <i className="fas fa-robot"></i>,
    'ML': <i className="fas fa-brain"></i>,
    'Web': <i className="fas fa-globe"></i>,
    'Mobile': <i className="fas fa-mobile-alt"></i>,
    'Cloud': <i className="fas fa-cloud"></i>
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2>{t.projects.title}</h2>
          <div className="accent-line"></div>
          <p className="projects-subtitle">{t.projects.subtitle}</p>
        </div>

        {/* Flagship Project */}
        <div className="flagship-project">
          <div className="flagship-card">
            <div className="flagship-content">
              <div className="flagship-title">
                <div className="flagship-badge">{t.projects.flagship.badge}</div>
                <h3>{flagshipProject.title}</h3>
              </div>
              
              <p className="flagship-description">{flagshipProject.description}</p>
              
              <div className="tech-stack">
                {flagshipProject.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag flagship-tag">{techIcons[tech]}</span>
                ))}
              </div>

              <div className="flagship-features">
                {flagshipProject.features.map((feature, i) => (
                  <div key={i} className="feature-item">
                    <span className="feature-bullet">→</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="project-stats flagship-stats">
                {Object.entries(flagshipProject.stats).map(([key, value], i) => (
                  <div key={i} className="stat-item">
                    <span className="stat-value">{value}</span>
                    <span className="stat-label">{key}</span>
                  </div>
                ))}
              </div>

              <div className="card-decoration">
                <div className="glow-effect"></div>
                <div className="circuit-pattern"></div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="other-projects-title">{t.projects.otherProjects.title}</h3>
        
        <div className="projects-grid">
          {otherProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <div className="project-title">
                  <span className="project-number">#{index + 1}</span>
                  <h3>{project.title}</h3>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{techIcons[tech]}</span>
                  ))}
                </div>

                <div className="project-stats">
                  {Object.entries(project.stats).map(([key, value], i) => (
                    <div key={i} className="stat-item">
                      <span className="stat-value">{value}</span>
                      <span className="stat-label">{key}</span>
                    </div>
                  ))}
                </div>

                <div className="card-decoration">
                  <div className="glow-effect"></div>
                  <div className="circuit-pattern"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 