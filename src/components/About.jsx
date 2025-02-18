import { useEffect, useRef } from 'react';
import { translations } from '../translations';
import '../styles/About.css';

const About = ({ currentLang }) => {
  const particlesRef = useRef(null);
  const t = translations[currentLang];

  useEffect(() => {
    const createParticles = () => {
      const particles = particlesRef.current;
      const particlesCount = 30;

      for (let i = 0; i < particlesCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'about-particle';
        particle.style.setProperty('--delay', `${Math.random() * 4}s`);
        particles.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  const features = [
    {
      icon: <i className="fas fa-brain"></i>,
      title: t.about.features.ai.title,
      description: t.about.features.ai.description
    },
    {
      icon: <i className="fas fa-tools"></i>,
      title: t.about.features.tools.title,
      description: t.about.features.tools.description
    },
    {
      icon: <i className="fas fa-users"></i>,
      title: t.about.features.community.title,
      description: t.about.features.community.description
    }
  ];

  return (
    <section className="about" id="about">
      <div ref={particlesRef} className="about-particles"></div>
      
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">{t.about.title}</h2>
          <div className="accent-bar"></div>
          <p className="about-subtitle">{t.about.subtitle}</p>
        </div>

        <div className="about-content">
          <div className="about-card main-card">
            <div className="card-content">
              <p className="about-description">{t.about.description}</p>
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-value">100+</span>
                  <span className="stat-label">{t.about.stats.projects}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">50+</span>
                  <span className="stat-label">{t.about.stats.clients}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">24/7</span>
                  <span className="stat-label">{t.about.stats.support}</span>
                </div>
              </div>
            </div>
            <div className="card-decoration">
              <div className="glow-effect"></div>
              <div className="circuit-pattern"></div>
            </div>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="card-content">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
                <div className="card-decoration">
                  <div className="glow-effect"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 