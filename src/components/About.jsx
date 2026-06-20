import React, { useEffect } from 'react';
import profileImage from '../assets/BG_Image.jpg'; // 👈 import your image

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="container">
        <span className="section-label reveal">About Me</span>
        <h2 className="section-title reveal">Know Me Better</h2>
        <div className="about-grid">
          <div className="about-image reveal-left">
            <div className="avatar-placeholder">
              <img
                src={profileImage}
                alt="Siddhu Kamble"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
            </div>
          </div>
          <div className="about-text reveal-right">
            <p>
              Hello! I'm Siddhu Kamble, an MSc Computer Science student and passionate Full Stack Developer.
              I enjoy building modern web applications using Java, React.js, JavaScript and MySQL.
              I continuously learn new technologies and create projects that improve my development skills.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1+</div>
                <div className="stat-label">Year Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;