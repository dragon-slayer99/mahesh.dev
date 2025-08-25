import React from 'react'
import './Card.css'

function Card({ project }) {
    if (!project) {
        return (
            <>
                <div className="card">
                    <h3>Chess Project</h3>
                    <p>
                        A simple chess projects that implements all the higher level rules along side with the basic rules.
                    </p>
                    <a
                        href='#'
                        target="_blank"
                    >
                        GitHub
                    </a>
                </div>
            </>
        );
    }

    return (
        <div className="card">
            <h3>{project.title}</h3>
            <p>
                {project.desc}
            </p>
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
            >
                GitHub
            </a>
        </div>
    )
}


export default Card