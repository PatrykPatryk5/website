import { useState } from 'react';
import { translations } from '../translations/index.js';
import '../styles/FAQ.css';

const FAQ = ({ currentLang }) => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const t = translations[currentLang];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2>{t.faq.title}</h2>
          <div className="accent-line"></div>
          <p className="faq-subtitle">{t.faq.subtitle}</p>
        </div>

        <div className="faq-grid">
          {t.faq.questions.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-card ${openQuestion === index ? 'active' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="faq-question">
                <span className="question-number">0{index + 1}</span>
                <h3>{faq.question}</h3>
                <div className="faq-icon">
                  <i className={`fas ${openQuestion === index ? 'fa-minus' : 'fa-plus'}`}></i>
                </div>
              </div>
              <div className={`faq-answer ${openQuestion === index ? 'show' : ''}`}>
                <p>{faq.answer}</p>
              </div>
              <div className="card-decoration">
                <div className="corner top-left"></div>
                <div className="corner top-right"></div>
                <div className="corner bottom-left"></div>
                <div className="corner bottom-right"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 