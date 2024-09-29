import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './NavBar.scss';

const NavBar: React.FC = () => {
    const { i18n } = useTranslation();
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false); // New state to track stickiness

    useEffect(() => {
        const handleScroll = () => {
            // 10rem equals 160px
            if (window.scrollY > 60) {
                setIsSticky(true); // Add 'stick' class
            } else {
                setIsSticky(false); // Remove 'stick' class
            }
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this runs only once

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.dataset.theme = darkMode ? 'light' : 'dark';
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Function to scroll to the top when the logo is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // This ensures the scrolling is smooth
        });
    };

    const { t } = useTranslation();

    return (
        <>
            {/* Desktop Nav */}
            <nav id="desktop-nav" className={isSticky ? 'sticky' : ''}>
                <div className="logo_container">
                    <a href="#" onClick={scrollToTop}>
                        <img src="/logo.svg" alt="Logo"/>
                    </a>
                    <p>Lucas Illiano</p>
                </div>
                <div>
                    <ul className="nav-links">
                        <li><a href="#about">{t('navbar.about')}</a></li>
                        <li><a href="#skills">{t('navbar.skills')}</a></li>
                        <li><a href="#experiences">{t('navbar.experiences')}</a></li>
                        <li><a href="#projects">{t('navbar.projects')}</a></li>
                        <li><a href="#educations">{t('navbar.educations')}</a></li>
                        <li><a href="#contact">{t('navbar.contact')}</a></li>
                    </ul>
                </div>
                <div className="nav-buttons">
                    <button onClick={() => changeLanguage('en')} className="lang-button">EN</button>
                    <button onClick={() => changeLanguage('fr')} className="lang-button">FR</button>
                    <button onClick={toggleDarkMode} className="dark-mode-toggle">
                        {darkMode ? (
                            <img src="/moon-icon.png" alt="Dark Mode" className="dark-mode-icon" />
                        ) : (
                            <img src="/sun-icon.png" alt="Light Mode" className="light-mode-icon" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Hamburger (Mobile) Nav */}
            <nav id="hamburger-nav">
                <div className="logo">Lucas Illiano</div>
                <div className="buttons">
                    <div className="hamburger-menu">
                        <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
                            <li><a href="#about" onClick={toggleMenu}>{t('navbar.about')}</a></li>
                            <li><a href="#skills" onClick={toggleMenu}>{t('navbar.skills')}</a></li>
                            <li><a href="#experiences" onClick={toggleMenu}>{t('navbar.experiences')}</a></li>
                            <li><a href="#projects" onClick={toggleMenu}>{t('navbar.projects')}</a></li>
                            <li><a href="#educations" onClick={toggleMenu}>{t('navbar.educations')}</a></li>
                            <li><a href="#contact" onClick={toggleMenu}>{t('navbar.contact')}</a></li>
                        </div>
                    </div>
                    <div className="nav-buttons">
                        <button onClick={() => changeLanguage('en')} className="lang-button">EN</button>
                        <button onClick={() => changeLanguage('fr')} className="lang-button">FR</button>
                        <button onClick={toggleDarkMode} className="dark-mode-toggle">
                            {darkMode ? (
                                <img src="/moon-icon.png" alt="Dark Mode" className="dark-mode-icon" />
                            ) : (
                                <img src="/sun-icon.png" alt="Light Mode" className="light-mode-icon" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
