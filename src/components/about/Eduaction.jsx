import React from "react";
import "./Education.css";
import {
    Target,
    Rocket,
    GraduationCap,
    Calendar,
    Building2,
    TrendingUp,
} from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const educationData = [
    {
        period: "2019-2020",
        title: "10th Standard",
        institution: "Lotus The Real School",
        performance: "10 CGPA",
        status: "Completed",
    },
    {
        period: "2020-2022",
        title: "12th Intermediate",
        institution: "Sri Chaitanya Junior College",
        performance: "93%",
        status: "Completed",
    },
    {
        period: "2022-Present",
        title: "B.Tech degree",
        institution: "Swarna Bharathi Institute of Science and Technology",
        performance: "Nil",
        status: "Ongoing",
    },
];

export default function Education() {
    return (
        <div className="education-container">
            {/* Heading animation */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true, amount: 0.8}}
            >
                Education & Experience
            </motion.h1>

            {/* Education cards */}
            {educationData.map((edu, index) => (
                <motion.div
                    key={index}
                    className="education-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: index * 0.2, // stagger effect
                    }}
                    viewport={{once:true, amount: 0.8 }}
                >
                    <div className="card-header">
                        <div className="title">
                            <GraduationCap size={20} />
                            <h2>{edu.title}</h2>
                        </div>
                        <span
                            className={`status-badge ${edu.status === "Completed" ? "completed" : "ongoing"
                                }`}
                        >
                            {edu.status}
                        </span>
                    </div>

                    <div className="card-row">
                        <Calendar size={18} />
                        <p>{edu.period}</p>
                    </div>

                    <div className="card-row">
                        <Building2 size={18} />
                        <p>{edu.institution}</p>
                    </div>

                    <div className="card-row performance">
                        <TrendingUp size={18} />
                        <p>{edu.performance}</p>
                    </div>
                </motion.div>
            ))}

            {/* Experience card (long one) */}
            <motion.div
                className="experience-wrapper"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="experience-card">
                    {/* Header */}
                    <div className="experience-header">
                        <h2>No Formal Work Experience Yet</h2>
                        <span className="status-chip">Seeking Opportunities</span>
                    </div>

                    {/* Meta info */}
                    <div className="experience-meta">
                        <Calendar />
                        <p>2025 – Present</p>
                    </div>
                    <div className="experience-meta">
                        <Target />
                        <p>Focused on Skill-Building</p>
                    </div>

                    {/* Description */}
                    <p className="experience-description">
                        I am currently sharpening my skills through hands-on projects,
                        online learning, and problem-solving on platforms like
                        <strong> LeetCode</strong> and <strong> GitHub</strong>. I strongly
                        believe in learning by doing and continuously challenging myself.
                    </p>

                    {/* Recruiter-focused statement */}
                    <div className="experience-highlight">
                        <Rocket />
                        <p>
                            Excited to join a dynamic team where I can <strong>learn</strong>,
                            <strong> grow</strong>, and <strong>add value from day one</strong>
                            .
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
