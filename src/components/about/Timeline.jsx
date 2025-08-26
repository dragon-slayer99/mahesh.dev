
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import "./Timeline.css";

export const Timeline = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="timeline-container" ref={containerRef}>
            <div className="timeline-header">
                <h2 className="timeline-title">My educational qualifications</h2>
                <p className="timeline-subtitle">
                    Currently pursuing my Bachelors degree in computer science and engineering
                </p>
            </div>

            <div ref={ref} className="timeline-items">
                {data.map((item, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-left">
                            <div className="timeline-dot-wrapper">
                                <div className="timeline-dot" />
                            </div>
                            <h3 className="timeline-item-title">{item.title}</h3>
                        </div>

                        <div className="timeline-right">
                            <h3 className="timeline-item-title-mobile">{item.title}</h3>
                            {item.content}
                        </div>
                    </div>
                ))}

                {/* Vertical Line */}
                <div
                    style={{ height: height + "px" }}
                    className="timeline-line"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="timeline-line-progress"
                    />
                </div>
            </div>
        </div>
    );
};
