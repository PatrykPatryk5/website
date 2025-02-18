import { useEffect, useRef } from 'react';
import { translations } from '../translations';
import '../styles/DiscordWidget.css';

const DiscordWidget = ({ currentLang }) => {
  const particlesRef = useRef(null);
  const t = translations[currentLang];
  
  useEffect(() => {
    const createParticles = () => {
      const particles = particlesRef.current;
      const particlesCount = 30;

      for (let i = 0; i < particlesCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'discord-particle';
        particle.style.setProperty('--delay', `${Math.random() * 4}s`);
        particles.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <section className="discord-section" id="community">
      <div ref={particlesRef} className="discord-particles"></div>
      
      <div className="discord-container">
        <div className="discord-content">
          <div className="discord-card">
            <div className="card-content">
              <div className="discord-header">
                <h2 className="discord-title">{t.discord.title}</h2>
                <div className="accent-bar"></div>
              </div>
              <p className="discord-description">{t.discord.description}</p>
              
              <div className="discord-features">
                <div className="discord-feature">
                  <div className="feature-icon">
                    <i className="fas fa-robot"></i>
                  </div>
                  <div className="feature-text">
                    <h3>AIDE Assistant</h3>
                    <p>24/7 AI Support</p>
                  </div>
                </div>
                <div className="discord-feature">
                  <div className="feature-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="feature-text">
                    <h3>Community</h3>
                    <p>Active Members</p>
                  </div>
                </div>
                <div className="discord-feature">
                  <div className="feature-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <div className="feature-text">
                    <h3>Knowledge</h3>
                    <p>Resources & Tips</p>
                  </div>
                </div>
              </div>

              <a href="https://discord.gg/your-invite-link" className="discord-join" target="_blank" rel="noopener noreferrer">
                {t.discord.join}
                <span className="button-glow"></span>
              </a>
            </div>
            <div className="card-decoration">
              <div className="glow-effect"></div>
            </div>
          </div>
        </div>
        
        <div className="discord-widget-container">
          <div className="widget-card">
            <iframe 
              src="https://discord.com/widget?id=1332749889528004669&theme=dark" 
              width="350" 
              height="500" 
              allowTransparency="true" 
              frameBorder="0" 
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              title="Discord Widget"
            />
            <div className="widget-decoration">
              <div className="glow-effect"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordWidget; 