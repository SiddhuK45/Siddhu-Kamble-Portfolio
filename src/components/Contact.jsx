import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Ripple effect for buttons
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

  // Magnetic hover effect
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
    <section id="contact">
      <div className="container">
        <span className="section-label reveal">Get In Touch</span>
        <h2 className="section-title reveal">Let's Connect</h2>
        <div className="contact-grid">
          {/* Left: Contact Info */}
          <div className="contact-info reveal-left">
            <a href="mailto:siddk380@gmail.com" className="contact-item">
              <div className="icon"><i className="fas fa-envelope"></i></div>
              <div>
                <div className="info-label">Email</div>
                <div className="info-value">siddk380@gmail.com</div>
              </div>
            </a>
            <a href="tel:+917517360482" className="contact-item">
              <div className="icon"><i className="fas fa-phone"></i></div>
              <div>
                <div className="info-label">Phone</div>
                <div className="info-value">+91 75173 60482</div>
              </div>
            </a>
            <a href="http://www.linkedin.com/in/siddhu-kamble-72ba4031a" target="_blank" className="contact-item">
              <div className="icon"><i className="fab fa-linkedin-in"></i></div>
              <div>
                <div className="info-label">LinkedIn</div>
                <div className="info-value">Siddhu Kamble</div>
              </div>
            </a>
            <a href="https://github.com/SiddhuK45" target="_blank" className="contact-item">
              <div className="icon"><i className="fab fa-github"></i></div>
              <div>
                <div className="info-label">GitHub</div>
                <div className="info-value">SiddhuK45</div>
              </div>
            </a>
            <div className="social-row">
              <a href="http://www.linkedin.com/in/siddhu-kamble-72ba4031a" target="_blank"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/SiddhuK45" target="_blank"><i className="fab fa-github"></i></a>
              <a href="mailto:siddk380@gmail.com"><i className="fas fa-envelope"></i></a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form reveal-right">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell me about your project..."></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onMouseMove={handleMagnetic}
                onMouseLeave={handleMagneticLeave}
                onClick={handleRipple}
              >
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;