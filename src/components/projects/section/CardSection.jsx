import React from 'react'
import Card from '../card/Card'
import './CardSection.css'
import { motion } from "framer-motion"


export default function CardSection() {
    const projects = [
        {
            title: "AlgoSphere",
            desc: "A website that consists curated collection of algorithm snippets in all major languages(Java, Python, C++, JavaScript). Algorithm to data structure implementation everything at one place.",
            link: "https://algosphere101.netlify.app/",
        },
        {
            title: "Chess Game",
            desc: "Made using Java; I am really proud of this project, it took me about a month to complete this project. It include all advanced rules of chess along with the basic ones.",
            link: "https://github.com/dragon-slayer99/Chessgame",
        },
        {
            title: "Anime Website",
            desc: "A Django based application that use 'Jiken API' to fetch anime data. Also implements user authentication using Django's inbuild authentication system.",
            link: "https://github.com/dragon-slayer99/Django_anime_project"
        },
        {
            title: "Calculator",
            desc: "The legendary calculator projects I have never met any one who hasn't built this as their first project so did I but not as the first project.",
            link: "https://github.com/dragon-slayer99/Calculator"
        },
        {
            title: "Mini Projects",
            desc: "This is a set of mini projects I have created while I was learning about the basic of the HTML, CSS and JavaScript",
            link: "https://github.com/dragon-slayer99/Mini-Projects"
        },
        {
            title: "Time-based Projects",
            desc: "A collection of projects (Small projects) I made along the way while I was learning about how browsers handle time.",
            link: "https://github.com/dragon-slayer99/Time-Based-Projects"
        },

    ];
    return (
        <>
            <div className='cardContainer' id='projects'>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6}}

                >Projects</motion.h1>
                <div className='cardLayout'>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Card project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </>

    )
}
