import React, { useEffect, useState, useRef } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const rafId = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
            rafId.current = requestAnimationFrame(() => {
                setPosition({ x: e.clientX, y: e.clientY });
            });
        };

        document.addEventListener("mousemove", moveCursor);
        return () => {
            document.removeEventListener("mousemove", moveCursor);
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, []);

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    return (
        <>
            {!isMobile && (

                <svg className="custom-cursor"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    style={{
                        left: position.x,
                        top: position.y,
                        willChange: 'transform' // GPU acceleration
                    }}
                    viewBox="0 0 24 24">
                    <path strokeWidth="2" d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"></path>
                </svg>
            )}
        </>
    );
}
