import React, { useState, useEffect } from 'react';
import logo from '../assets/Favicon.png'; // 👈 import your logo image

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      if (window.lenis) window.lenis.scrollTo(el);
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          {/* Logo as image */}
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
            <img
              src={logo}
              alt="Siddhu Kamble"
              style={{
                height: '40px',
                width: 'auto',
                display: 'block',
              }}
            />
          </a>
          <ul className="nav-links">
            {navItems.map((label) => {
              const id = label.toLowerCase();
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={activeSection === id ? 'active' : ''}
                    onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className={`hamburger ${mobileOpen ? 'active' : ''}`} onClick={() => setMobileOpen(!mobileOpen)}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>

      {/* Mobile overlay & drawer */}
      <div className={`mobile-overlay ${mobileOpen ? 'show' : ''}`} onClick={() => setMobileOpen(false)}></div>
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        {navItems.map((label) => {
          const id = label.toLowerCase();
          return (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollTo(id); }}
            >
              {label}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;