import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
    const elRef = useRef(null);
    const rafId = useRef(0);
    const last = useRef({ x: -100, y: -100 });
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    useEffect(() => {
        if (isMobile || !elRef.current) return;

        let scheduled = false;

        const apply = () => {
            scheduled = false;
            const el = elRef.current;
            if (!el) return;
            const { x, y } = last.current;
            el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        };

        const onMove = (e) => {
            last.current.x = e.clientX;
            last.current.y = e.clientY;
            if (!scheduled) {
                scheduled = true;
                rafId.current = requestAnimationFrame(apply);
            }
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        return () => {
            window.removeEventListener("pointermove", onMove);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <svg
            ref={elRef}
            className="custom-cursor"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path strokeWidth="2" d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"></path>
        </svg>
    );
}
