import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>Quem somos?</h1>


      <section className="team-container">
        <div className="team-members">
          {/* Membro 1 */}
          <article className="member">
            <img src="https://avatars.githubusercontent.com/leonardobianchii" alt="Leonardo Bianchi" />
            <h3>Leonardo Bianchi</h3>
            <p>RM: 558576</p>
            <p>Scrum Master/Product Owner</p>
            <div className="social-links">
              <a href="https://github.com/leonardobianchii" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </article>

          {/* Membro 2 */}
          <article className="member">
            <img src="https://avatars.githubusercontent.com/HeitorOrtega" alt="Heitor Ortega" />
            <h3>Heitor Ortega</h3>
            <p>RM: 557825</p>
            <p>Full Stack Developer</p>
            <div className="social-links">
              <a href="https://github.com/HeitorOrtega" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </article>

          {/* Membro 3 */}
          <article className="member">
            <img src="https://avatars.githubusercontent.com/danie-anx" alt="Robert Daniel" />
            <h3>Robert Daniel</h3>
            <p>RM: 555881</p>
            <p>Back-End Developer</p>
            <div className="social-links">
              <a href="https://github.com/danie-anx" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </article>
        </div>

        <div className="repositorio">
          <a href="https://github.com/HeitorOrtega/SmartConnectCar.git" target="_blank" rel="noopener noreferrer">Repositório no GitHub</a>
        </div>
      </section>
    </div>
  );
};

export default About;
