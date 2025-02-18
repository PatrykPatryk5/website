import { useEffect, useRef } from 'react';
import { translations } from '../translations';
import '../styles/Hero.css';

const Hero = ({ currentLang }) => {
  const particlesRef = useRef(null);
  const t = translations[currentLang];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const createParticles = () => {
      const particles = particlesRef.current;
      const particlesCount = 50;

      for (let i = 0; i < particlesCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        
        // Losowe pozycje i opóźnienia dla każdej cząsteczki
        particle.style.setProperty('--x', `${Math.random() * 100}%`);
        particle.style.setProperty('--y', `${Math.random() * 100}%`);
        particle.style.setProperty('--delay', `${Math.random() * 4}s`);
        particle.style.setProperty('--size', `${Math.random() * 3 + 1}px`);
        particle.style.setProperty('--duration', `${Math.random() * 2 + 3}s`);

        particles.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="cyber-grid"></div>
        <div className="glow-effect"></div>
        <div ref={particlesRef} className="particles-container"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="glitch-text" data-text={t.hero.title}>
            {t.hero.title}
          </h1>
          <p>{t.hero.subtitle}</p>
          <button className="cta-button" onClick={scrollToProjects}>
            {t.hero.cta}
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        <div className="hero-decoration">
          <div className="tech-circle"></div>
          <div className="floating-elements">
            {['AI', 'ML', 'Neural', 'Data', 'Cloud'].map((text, index) => (
              <div 
                key={index} 
                className="floating-element"
                style={{
                  '--delay': `${index * 0.5}s`,
                  '--distance': `${Math.random() * 20 + 10}px`
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 