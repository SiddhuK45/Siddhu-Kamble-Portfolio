import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const el = document.getElementById('home');
    if (el) {
      if (window.lenis) window.lenis.scrollTo(el);
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="gradient-line"></div>
        <p>Designed &amp; Developed by <strong>Siddhu Kamble</strong> &mdash; 2026</p>
        <div className="social-row" style={{ marginTop: 0 }}>
          <a href="http://www.linkedin.com/in/siddhu-kamble-72ba4031a" target="_blank"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/SiddhuK45" target="_blank"><i className="fab fa-github"></i></a>
          <a href="mailto:siddk380@gmail.com"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
      <button className={`back-to-top ${showBackTop ? 'visible' : ''}`} onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;