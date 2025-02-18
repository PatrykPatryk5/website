import { useState, useEffect } from 'react';
import { translations } from '../translations';
import '../styles/Navbar.css';

const Navbar = ({ currentLang, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[currentLang];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>AIDE<span>Team</span></h1>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home">{t.nav.home}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#team">{t.nav.team}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#contact">{t.nav.contact}</a>
          
          <button className="flagship-button" onClick={() => window.location.href='#aide-assistant'}>
            AIDE Assistant
            <span className="button-glow"></span>
          </button>

          <div className="language-selector">
            <button 
              className={currentLang === 'pl' ? 'active' : ''} 
              onClick={() => onLanguageChange('pl')}
            >
              PL
            </button>
            <button 
              className={currentLang === 'en' ? 'active' : ''} 
              onClick={() => onLanguageChange('en')}
            >
              EN
            </button>
            <button 
              className={currentLang === 'es' ? 'active' : ''} 
              onClick={() => onLanguageChange('es')}
            >
              ES
            </button>
          </div>
        </div>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 