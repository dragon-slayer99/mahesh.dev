import React from 'react'
import Card from '../card/Card'
import './CardSection.css'

export default function CardSection() {
    const projects = [
        {
            title: "Chess Game",
            desc: "Made using Java; I am really proud of this project, it took me about a month to complete this project. It include all advanced rules of chess along with the basic ones.",
            link: "https://github.com/dragon-slayer99/Chessgame",
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
{
    title: "Fun Projects",
        desc: "A collections of projects I made while learning about APIs for the first; I was really excited to learn about all the possible things I can do with this amazing tools.",
            link: "https://github.com/dragon-slayer99/Fun-Projects"
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

    ];
return (
    <>
        <div className='cardContainer' id='projects'>
            <h1>Projects</h1>
            <div className='cardLayout'>
                {projects.map((project, index) => (
                    <Card key={index} project={project} />
                ))}
            </div>
        </div>
    </>

)
}
