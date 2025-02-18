import { translations } from '../translations/index.js';
import '../styles/Footer.css';

const Footer = ({ currentLang }) => {
  const t = translations[currentLang];

  const socialLinks = {
    github: "https://github.com/aide-project",
    linkedin: "https://linkedin.com/company/aide-project",
    discord: "https://discord.gg/aide-project"
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{t.footer.company.name}</h3>
          <p>{t.footer.company.description}</p>
        </div>
        
        <div className="footer-section">
          <h3>{t.footer.contact.title}</h3>
          <div className="footer-socials">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-link github">
              <i className="fab fa-github"></i>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href={socialLinks.discord} target="_blank" rel="noopener noreferrer" className="social-link discord">
              <i className="fab fa-discord"></i>
            </a>
          </div>
          <div className="footer-contact">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>{t.footer.contact.email}</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>{t.footer.contact.location}</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>{t.footer.social.title}</h3>
          <div className="social-links">
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              {t.footer.social.links.linkedin}
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              {t.footer.social.links.github}
            </a>
            <a href={socialLinks.discord} target="_blank" rel="noopener noreferrer">
              {t.footer.social.links.discord}
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer; 