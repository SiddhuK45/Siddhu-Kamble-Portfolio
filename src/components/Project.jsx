import React, { useEffect } from 'react';

const Projects = () => {
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

        document.querySelectorAll('.project-card').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects">
            <div className="container">
                <span className="section-label reveal">Portfolio</span>
                <h2 className="section-title reveal">My Recent Work</h2>
                <div className="projects-grid">
                    {/* Project 1: Portfolio Website (this one) */}
                    <div className="project-card delay-3">
                        <div className="project-tag">In Progress</div>
                        <h3>Personal Portfolio</h3>
                        <p>
                            A premium, animated developer portfolio built with React.js, Framer Motion,
                            and modern CSS. Designed to showcase skills, projects, and professional experience
                            with a cinematic user experience.
                        </p>
                        <div className="project-tech">
                            <span>React.js</span>
                            <span>JavaScript</span>
                            <span>CSS3</span>
                            <span>Framer Motion</span>
                            <span>Lenis</span>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/SiddhuK45" target="_blank">
                                <i className="fab fa-github"></i> GitHub
                            </a>
                            <a href="#" target="_blank">
                                <i className="fas fa-external-link-alt"></i> Live Demo
                            </a>
                        </div>
                    </div>


                    {/* Project 2: Student Management System */}
                    <div className="project-card delay-2">
                        <div className="project-tag">In Progress</div>
                        <h3>Student Management System</h3>
                        <p>
                            A full‑stack web application to manage student records, courses and attendance.
                            Built with Spring Boot (backend), React.js (frontend), and MySQL as database.
                        </p>
                        <div className="project-tech">
                            <span>Spring Boot</span>
                            <span>MySQL</span>
                            <span>Java</span>
                            <span>React.js</span>
                            <span>HTML/CSS/JS</span>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/SiddhuK45" target="_blank">
                                <i className="fab fa-github"></i> GitHub
                            </a>
                            <a href="#" target="_blank">
                                <i className="fas fa-external-link-alt"></i> Live Demo
                            </a>
                        </div>

                    </div>

                    {/* Project 3: Furniture E-Commerce */}
                    <div className="project-card delay-1">
                        <div className="project-tag">Completed • 2023</div>
                        <h3>Furniture E‑Commerce Website</h3>
                        <p>
                            A fully responsive e‑commerce platform for furniture with product listings,
                            shopping cart and modern UI. Built using Hibernate for ORM and MySQL for database.
                        </p>
                        <div className="project-tech">
                            <span>Hibernate</span>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>MySQL</span>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/SiddhuK45" target="_blank">
                                <i className="fab fa-github"></i> GitHub
                            </a>
                            <a href="#" target="_blank">
                                <i className="fas fa-external-link-alt"></i> Live Demo
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Projects;