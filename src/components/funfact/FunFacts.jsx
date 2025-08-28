import React from "react";
import { Quote } from "lucide-react";
import "./FunFacts.css";
import { motion } from "framer-motion";

export default function FunFacts() {
    return (
        <section className="funfacts-section">
            <motion.h2

                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.6 }}

                className="funfacts-title">About this website</motion.h2>

            <div className="funfacts-grid">
                {/* Card 1 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.6 }}
                    className="funfact-card-wrapper"
                >
                    <div className="funfact-card">
                        <Quote className="funfact-icon" />
                        <p className="funfact-text">
                            Rome wasn’t built in a day — neither was this website.
                        </p>
                        <span className="funfact-footer">
                            Great things take time. Craft beats rush.
                        </span>
                    </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true, amount: 0.6 }}
                    className="funfact-card-wrapper"
                >
                    <div className="funfact-card">
                        <Quote className="funfact-icon" />
                        <p className="funfact-text">
                            Made with love, not with lovable.
                        </p>
                        <span className="funfact-footer">
                            Hand-crafted UI. Zero shortcuts.
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
