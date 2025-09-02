import { React, useState, useEffect } from "react";
import "./Switch.css";

const Switch = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme) return savedTheme;
        return "light";
    });


    function toggleTheme() {
        if (theme === "light") setTheme("dark");
        else setTheme("light");
    }

    const body = document.querySelector("body");

    useEffect(() => {
        if (theme === "dark") {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }

        localStorage.setItem('theme', theme);

    }, [body.classList, theme]);

    return (
        <label className="switch">
            <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
            />
            <span className="slider" />
        </label>
    );
};

export default Switch;
