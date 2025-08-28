// import React from 'react'
// import './Navbar.css'
// function Navbar() {

//     return (
//         <nav>
//             <div class="title-name"><a href="#home">I'm Mahesh</a></div>
//             <div class="nav-items">
//                 <a href="#projects"><img src="projects.svg" alt="" /> Projects</a>
//                 <a href="#certificates"><img src="certificate.svg" alt="" /> Certifications</a>
//                 <a href="#about"><img src="about.svg" alt="" /> About</a>
//                 <a href="#contact"><img src="contact.svg" alt="" /> Contact</a>
//             </div>
//             <div class="hamburger">
//                 <img src="../Assets/menu.svg" alt="" />
//             </div>

//         </nav>
//     )
// }

// export default Navbar

import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Rocket, Mail, User } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const sections = ['projects', 'about', 'contact'];
    // const sectionRefs = useRef({});

    // sections.forEach((section) => {
    //     sectionRefs.current[section] = React.createRef();
    // });

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 } // Section is considered active when 60% visible
        );

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <a href="#" className="nav-logo">
                        I'm Mahesh
                    </a>

                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li className="nav-item">
                            <a
                                href="#projects"
                                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Rocket /> Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#about"
                                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <User /> About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#contact"
                                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Mail /> Contact
                            </a>
                        </li>
                    </ul>

                    <button
                        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        </>
    );
}


