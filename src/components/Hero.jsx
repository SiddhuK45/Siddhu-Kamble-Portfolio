import React, { useState, useEffect } from 'react';
import bgImage from '../assets/BG_Image.jpg'; // your background image

const Hero = () => {
  const roles = ['Full Stack Developer', 'Java Developer', 'React Developer'];
  const [typedIndex, setTypedIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentRole = roles[typedIndex];
    if (!isDeleting) {
      if (typedText.length < currentRole.length) {
        timer = setTimeout(() => setTypedText(currentRole.slice(0, typedText.length + 1)), 100);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (typedText.length > 0) {
        timer = setTimeout(() => setTypedText(typedText.slice(0, -1)), 50);
      } else {
        setIsDeleting(false);
        setTypedIndex((typedIndex + 1) % roles.length);
      }
    }
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, typedIndex, roles]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.lenis) window.lenis.scrollTo(el);
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Download resume function
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Siddhu_Kamble_Resume.pdf'; // file in public folder
    link.download = 'Siddhu_Kamble_Resume.pdf'; // filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleRipple = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.className = 'ripple';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const handleMagnetic = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const max = 12;
    const moveX = Math.max(-max, Math.min(max, x * 0.15));
    const moveY = Math.max(-max, Math.min(max, y * 0.15));
    btn.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
  };

  const handleMagneticLeave = (e) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <section id="home" className="hero">
      <div
        className="hero-profile-bg"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-name">Siddhu Kamble</h1>
        <div className="hero-role-wrapper">
          <span className="hero-role-label">I'm a</span>
          <span className="hero-role">
            {typedText}
            <span className="cursor-blink"></span>
          </span>
        </div>
        <div className="hero-buttons">
          <button
            className="btn btn-primary"
            onMouseMove={handleMagnetic}
            onMouseLeave={handleMagneticLeave}
            onClick={(e) => {
              handleRipple(e);
              downloadResume(); // 👈 trigger download
            }}
          >
            <i className="fas fa-download"></i> Download Resume
          </button>
          <button
            className="btn btn-secondary"
            onMouseMove={handleMagnetic}
            onMouseLeave={handleMagneticLeave}
            onClick={(e) => { handleRipple(e); scrollTo('contact'); }}
          >
            <i className="fas fa-envelope"></i> Contact Me
          </button>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => scrollTo('about')}>
        <div className="mouse"><div className="wheel"></div></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;