

import React, { useState, useEffect } from 'react';
import { Rocket, Mail, User, Download } from 'lucide-react';

import './Navbar.css';
import Switch from './Switch/Switch';
import RESUME from '../../../assets/MAHESH_GUDOORU.pdf';


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const sections = ['projects', 'about', 'contact', 'resume'];


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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <a href="#" className="nav-logo">
                        {"<GM/>"}
                    </a>

                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li className="nav-item">
                            <Switch/>
                        </li>
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
                        <li className="nav-item">
                            <a
                                href={RESUME}
                                target='_blank'
                                rel="noopener noreferrer"
                                className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Download/> Resume
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


