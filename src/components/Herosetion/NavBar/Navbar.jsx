// import React from 'react'
import './Navbar.css'
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

import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>

            <nav className="navbar">
                <div className="nav-container">
                    <a href="#" className="nav-logo">
                        I'm Mahesh
                    </a>

                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                <img src="projects.svg" alt="" /> Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                <img src="about.svg" alt="" /> About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                <img src="certificate.svg" alt="" /> Certifications
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                <img src="contact.svg" alt="" /> Contact
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
};

export default Navbar;