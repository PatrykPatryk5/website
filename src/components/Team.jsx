import { useState } from 'react';
import { translations, teamMembers } from '../translations/index.js';
import TeamMemberModal from './TeamMemberModal';
import '../styles/Team.css';

const Team = ({ currentLang }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);
  const t = translations[currentLang];

  const handleCardClick = (member) => {
    console.log('Card clicked:', member); // Dla debugowania
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  // Grupowanie członków zespołu według roli
  const groupedMembers = {
    leadership: teamMembers.filter(member => 
      ['Project Coordinator', 'Head Administrator', 'System Administrator'].includes(member.role)
    ),
    developers: teamMembers.filter(member => 
      member.role.includes('Developer')
    )
  };

  const TeamCard = ({ member }) => (
    <div 
      className={`team-card ${member.role.toLowerCase().replace(' ', '-')}`}
      onMouseEnter={() => setHoveredMember(member.id)}
      onMouseLeave={() => setHoveredMember(null)}
      onClick={() => handleCardClick(member)}
      style={{ cursor: 'pointer' }}
    >
      <div className="card-content">
        <div className="member-header">
          <div className="role-badge" data-role={member.role}>
            {t.roles[member.role]}
          </div>
          <div className="member-identity">
            <h3 className="member-name">{member.name}</h3>
            <div className="member-nickname">{member.nickname}</div>
          </div>
        </div>

        <div className="member-specialty">{member.specialty}</div>

        <div className="skills-container">
          {member.skills.slice(0, 4).map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>

        <div className="member-stats">
          <div className="stat">
            <span className="stat-value">{member.projects}</span>
          </div>
        </div>

        <div className="member-socials">
          <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="social-link github">
            <i className="fab fa-github"></i>
          </a>
          <a href={member.socials.discord} target="_blank" rel="noopener noreferrer" className="social-link discord">
            <i className="fab fa-discord"></i>
          </a>
        </div>

        <div className="card-decoration">
          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="team" id="team">
      <div className="team-container">
        <div className="team-header">
          <h2 data-text={t.team.title}>{t.team.title}</h2>
          <div className="accent-line"></div>
          <p className="team-subtitle">{t.team.subtitle}</p>
        </div>

        <div className="team-section">
          <h3 className="section-title">{t.team.sections.leadership}</h3>
          <div className="team-grid">
            {groupedMembers.leadership.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        <div className="team-section">
          <h3 className="section-title">{t.team.sections.developers}</h3>
          <div className="team-grid">
            {groupedMembers.developers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        <div className="team-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <TeamMemberModal 
          member={selectedMember}
          onClose={handleCloseModal}
          currentLang={currentLang}
        />
      )}
    </section>
  );
};

export default Team; 