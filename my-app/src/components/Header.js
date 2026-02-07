
    import React, { useState } from "react";

    export default function Header({
        siteTitle = "My Site",
        // Default links map to the class names used in App.js
        links = [
            { label: "Home", href: "IntroSection" },
            { label: "About", href: "AboutSection" },
            { label: "Resume", href: "ResumeSection" },
            { label: "Projects", href: "ProjectSection" },
        ],
        theme = 'light',
        toggleTheme = () => {},
    }) {
            const [menuOpen, setMenuOpen] = useState(false);
        
            // Function to handle smooth scrolling
            const handleSmoothScroll = (e, href) => {
                e.preventDefault();
                const target = document.querySelector(`.${href}`);
                    if (target) {
                        setMenuOpen(false);
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        try {
                            // Prefer pushState so the user can use the back button to return to the previous section.
                            if (typeof window !== 'undefined' && window.history && window.history.pushState) {
                                window.history.pushState(null, '', `#${href}`);
                            } else if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
                                // fallback to replaceState if pushState not available
                                window.history.replaceState(null, '', `#${href}`);
                            }
                        } catch (err) {
                            // ignore errors from history API
                        }
                    } else {
                        window.location.href = `#${href}`;
                    }
            };

        return (
            <header className="site-header">
                <div className="header-inner">
                    <a
                        className="logo"
                        href="#IntroSection"
                        aria-label={siteTitle}
                        onClick={(e) => {
                            const targetClass = 'IntroSection';
                            e.preventDefault();
                            const target = document.querySelector(`.${targetClass}`);
                            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                    >
                        {siteTitle}
                    </a>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <button
                            className="theme-button"
                            onClick={toggleTheme}
                            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                            title={theme === 'light' ? 'Dark mode' : 'Light mode'}
                        >
                        </button>

                        <button
                            className="menu-button"
                            aria-label="Toggle navigation"
                            aria-controls="main-navigation"
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen((s) => !s)}
                        >
                            <span
                                className={`hamburger ${menuOpen ? "open" : ""}`}
                                aria-hidden="true"
                            />
                        </button>
                    </div>

                    <nav
                        id="main-navigation"
                        className={`nav ${menuOpen ? "open" : ""}`}
                        aria-label="Main"
                    >
                        <ul className="nav-list">
                                {links.map((link) => (
                                    <li key={link.href} className="nav-item">
                                        <a
                                            href={`#${link.href}`}
                                            className="nav-link"
                                            onClick={(e) => handleSmoothScroll(e, link.href)}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                        </ul>
                    </nav>
                </div>

        <style>{`
            .site-header {
                background: var(--header-bg, #0f172a);
                color: var(--header-text, #fff);
                margin: 0px 100px 10px 100px;
                position: sticky;
                top: 0;
                z-index: 1000;
                transition: all 1s ease; 

            }
            .header-inner {
                max-width: auto; 
                display: flex;
                align-items: center;
                padding-top: 10px;
                padding-bottom: 10px; 
                justify-content: space-between;
                border-bottom: var(--header-text, #fff) 2px solid;
            }
            .logo {
                font-weight: 700;
                font-size: 1.125rem;
                color: var(--header-text, #fff);
                text-decoration: none;
            }
            .menu-button {
                background: transparent;
                border: none;
                padding: 8px;
                display: none; /* shown on small screens via media query */
                cursor: pointer;
            }
            .theme-button {
                background: transparent;
                border: none;
                padding: 6px 8px;
                cursor: pointer;
                color: var(--header-text, #fff);
                font-size: 1rem;
            }
            .hamburger {
                display: block;
                width: 22px;
                height: 2px;
                background: var(--header-text, #fff);
                position: relative;
                transition: transform 1s ease, top 1s ease, opacity 1s ease;
            }
            .hamburger::before,
            .hamburger::after {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                height: 2px;
                background: var(--header-text, #fff);

            }
            .hamburger::before {
                top: -7px;
            }
            .hamburger::after {
                top: 7px;
            }

            .hamburger.open {
                background: transparent;
            }
            .hamburger.open::before {
                top: 0;
                transform: rotate(45deg);
            }
            .hamburger.open::after {
                top: 0;
                transform: rotate(-45deg);
            }
            .nav {
                display: block;
            }
            .nav-list {
                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
                gap: 18px;
                align-items: center;
                text-decoration: underline; 

            }
            .nav-link {
                color: var(--link-text, #cbd5e1);
                text-decoration: none;
                padding: 8px 6px;
                border-radius: 6px;
                transition: background 0.15s, color 0.15s;
            }
            .nav-link:hover,
            .nav-link:focus {
                background: rgba(255,255,255,0.04);
                color: var(--header-text, #fff);
                outline: none;
            }

            /* Responsive: small screens */
            @media (max-width: 720px) {
                .menu-button {
                    display: block;
                }
                .nav {
                    right: 0px;
                    top: 60px;
                    position: absolute; 
                    background: var(--header-bg);
                    border: 1px solid var(--header-text);
                    border-radius: 8px;
                    padding: 8px;
                    min-width: 160px;
                    box-shadow: 0 6px 18px rgba(2,6,23,0.6);
                    display: none;
                    font-size: 20px; 
                }
                .nav.open {
                    display: block;
                }
                .nav-list {
                    flex-direction: column;
                    gap: 8px;
                }
                .site-header {
                    margin: 0px 50px 0px 50px; 
                    transition: all 1s ease; 
                }

            }
        `}</style>
    </header>
);
}