import React, { useState, useEffect } from "react";

function BottomLeft() {
    const [copyText, setCopyText] = useState("press C - copy email");
    const email = "27tianailiu@gmail.com";
    
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopyText("press C - successfully copied email");
        setTimeout(() => {
            setCopyText("C - copy email");
        }, 10000);
    };

    const handleToggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key.toLowerCase() === 'c') {
                handleCopyEmail();
            } else if (event.key.toLowerCase() === 'd') {
                handleToggleDarkMode();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isDarkMode]);

    return (
        <div className = "main">
            <div className = "mainComponent">
                <div className = "bottomLeft">
                    <p>{copyText}</p>
                    <p>press D - toggle dark mode</p>
                </div>
            </div>
        </div>
    );
}
export default BottomLeft; 