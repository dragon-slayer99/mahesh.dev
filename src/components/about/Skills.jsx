import React from 'react'
import './Skills.css'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import Badge from './Badge'
import {
    javaIcon, cssIcon, javascriptIcon, pythonIcon, htmlIcon, mysqlIcon, DjangoIcon, tailwindIcon,
    vscodeIcon, drawioIcon, gitIcon, githubIcon, reactIcon, cIcon
} from './icons'


export default function Skills() {
    return (
        <section className='main-skills-container'>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >Technical Skills</motion.h1>
            <div className="skills-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.6 }} className="skills-card">
                    <h2>Languages</h2>
                    <div className="skills-badges">

                        <Badge icon={javaIcon} label={"Java"} />

                        <Badge icon={javascriptIcon} label={"JavaScript"} />

                        <Badge icon={pythonIcon} label={"Python"} />

                        <Badge icon={mysqlIcon} label={"MySql"} />

                        <Badge icon={cIcon} label={"C"} />


                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true, amount: 0.6 }} className="skills-card">
                    <h2>Tools & Frameworks</h2>
                    <div className="skills-badges">

                        <Badge icon={gitIcon} label={"Git"} />

                        <Badge icon={githubIcon} label={"Github"} />

                        <Badge icon={drawioIcon} label={"DrawIO"} />

                        <Badge icon={vscodeIcon} label={"VS code"} />

                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                    viewport={{ once: true, amount: 0.6 }} className="skills-card">
                    <h2>Web Skills</h2>
                    <div className="skills-badges">

                        <Badge icon={htmlIcon} label={"HTML"} />

                        <Badge icon={cssIcon} label={"CSS"} />

                        <Badge icon={javascriptIcon} label={"JavaScript"} />

                        <Badge icon={reactIcon} label={"React"} />

                        <Badge icon={tailwindIcon} label={"Tailwind"} />

                        <Badge icon={DjangoIcon} label={"Django"} />
                    </div>
                </motion.div>
            </div>


        </section>
    )
}
