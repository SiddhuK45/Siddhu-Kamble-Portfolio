import React, { useEffect } from 'react';

const skillsData = [
  // Existing technologies
  { name: 'Java', icon: 'fab fa-java', progress: 85 },
  { name: 'Advanced Java', icon: 'fas fa-code', progress: 75 },
  { name: 'Hibernate', icon: 'fas fa-database', progress: 60 },
  { name: 'Spring MVC', icon: 'fas fa-cogs', progress: 65 },
  { name: 'Spring Boot', icon: 'fas fa-leaf', progress: 70 },
  { name: 'HTML5', icon: 'fab fa-html5', progress: 90 },
  { name: 'CSS3', icon: 'fab fa-css3-alt', progress: 85 },
  { name: 'JavaScript', icon: 'fab fa-js', progress: 80 },
  { name: 'React.js', icon: 'fab fa-react', progress: 78 },
  { name: 'MySQL', icon: 'fas fa-database', progress: 70 },
  { name: 'Git', icon: 'fab fa-git-alt', progress: 75 },
  { name: 'GitHub', icon: 'fab fa-github', progress: 72 }
];

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.skill-card').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="container">
        <span className="section-label reveal">My Skills</span>
        <h2 className="section-title reveal">Technologies I Work With</h2>
        <div className="skills-grid">
          {skillsData.map((skill, i) => (
            <div
              key={skill.name}
              className={`skill-card delay-${(i % 6) + 1}`}
              style={{ '--progress': skill.progress + '%' }}
            >
              <span className="skill-icon"><i className={skill.icon}></i></span>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-progress">
                <div className="skill-progress-bar"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;