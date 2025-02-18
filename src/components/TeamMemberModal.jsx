import React, { useState, useEffect } from 'react';
import '../styles/TeamMemberModal.css';

const TeamMemberModal = ({ member, onClose, currentLang }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Czas trwania animacji
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  if (!member) return null;

  return (
    <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>×</button>
        
        <div className="modal-header">
          <div className="member-avatar">
            {/* Możemy dodać awatar lub inicjały */}
            <div className="avatar-placeholder">
              {member.name.charAt(0)}
            </div>
          </div>
          
          <div className="member-title">
            <h2>{member.name}</h2>
            <span className="member-role">{member.role}</span>
            <div className="member-nickname">{member.nickname}</div>
          </div>
        </div>

        <div className="modal-body">
          <section className="member-info-section">
            <h3>Specjalizacja</h3>
            <p>{member.specialty}</p>
          </section>

          <section className="member-info-section">
            <h3>Umiejętności</h3>
            <div className="skills-grid">
              {member.skills.map((skill, index) => (
                <div key={index} className="skill-badge">
                  {skill}
                </div>
              ))}
            </div>
          </section>

          <section className="member-info-section">
            <h3>Doświadczenie</h3>
            <div className="experience-stats">
              <div className="stat">
                <span className="stat-value">{member.experience}</span>
                <span className="stat-label">Doświadczenie</span>
              </div>
              <div className="stat">
                <span className="stat-value">{member.projects}</span>
                <span className="stat-label">Projekty</span>
              </div>
            </div>
          </section>

          <section className="member-info-section">
            <h3>Bio</h3>
            <p className="member-bio">{member.bio}</p>
          </section>

          <section className="member-info-section">
            <h3>Kontakt</h3>
            <div className="social-links">
              <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="social-link github">
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a href={member.socials.discord} target="_blank" rel="noopener noreferrer" className="social-link discord">
                <i className="fab fa-discord"></i>
                <span>Discord</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal;