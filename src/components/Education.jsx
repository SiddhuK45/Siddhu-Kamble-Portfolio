import React, { useEffect } from 'react';

const Education = () => {
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

    document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education">
      <div className="container">
        <span className="section-label reveal">Education</span>
        <h2 className="section-title reveal">My Academic Journey</h2>
        <div className="timeline">
          {/* M.Sc – 2026 */}
          <div className="timeline-item delay-1">
            <div className="year">2026</div>
            <h4>M.Sc Computer Science</h4>
            <div className="institute">Shivaji University, Kolhapur</div>
          </div>

          {/* B.Sc – 2023 */}
          <div className="timeline-item delay-2">
            <div className="year">2023</div>
            <h4>B.Sc Computer Science</h4>
            <div className="institute">Shivaji University, Kolhapur</div>
          </div>

          {/* HSC – 2020 */}
          <div className="timeline-item delay-3">
            <div className="year">2020</div>
            <h4>HSC (12th)</h4>
            <div className="institute">Vyankartrao Junior College, Ajara</div>
          </div>

          {/* SSC – 2018 */}
          <div className="timeline-item delay-4">
            <div className="year">2018</div>
            <h4>SSC (10th)</h4>
            <div className="institute">Adarsh High School, Sirsangi</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;