import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import LanguageButton from '../Shared/LanguageButton'; // Import LanguageButton component
import './NavBar.scss';

const NavBar: React.FC = () => {
    const { i18n, t } = useTranslation();
    const { lang } = useParams();
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.dataset.theme = darkMode ? 'light' : 'dark';
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const languages = ['en', 'fr']; // Dynamically handle multiple languages

    return (
        <>
            {/* Desktop Nav */}
            <nav id="desktop-nav" className={isSticky ? 'sticky' : ''}>
                <div className="logo_container">
                    <button onClick={scrollToTop}>
                        <img src={darkMode ? "/logo_dark.png" : "/logo_light.png"} alt="Logo" className="logo" />
                    </button>
                    <p>Lucas Illiano</p>
                </div>
                <ul className="nav-links">
                    <li><Link to={`/${lang}/about`}>{t('navbar.about')}</Link></li>
                    <li><Link to={`/${lang}/skills`}>{t('navbar.skills')}</Link></li>
                    <li><Link to={`/${lang}/experiences`}>{t('navbar.experiences')}</Link></li>
                    <li><Link to={`/${lang}/projects`}>{t('navbar.projects')}</Link></li>
                    <li><Link to={`/${lang}/educations`}>{t('navbar.educations')}</Link></li>
                    <li><Link to={`/${lang}/contact`}>{t('navbar.contact')}</Link></li>
                </ul>
                <div className="nav-buttons">
                    {languages.map((language) => (
                        <LanguageButton
                            key={language}
                            lang={language}
                            currentLang={i18n.language}
                        />
                    ))}
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
                            <li><Link to={`/${lang}/about`} onClick={toggleMenu}>{t('navbar.about')}</Link></li>
                            <li><Link to={`/${lang}/skills`} onClick={toggleMenu}>{t('navbar.skills')}</Link></li>
                            <li><Link to={`/${lang}/experiences`} onClick={toggleMenu}>{t('navbar.experiences')}</Link></li>
                            <li><Link to={`/${lang}/projects`} onClick={toggleMenu}>{t('navbar.projects')}</Link></li>
                            <li><Link to={`/${lang}/educations`} onClick={toggleMenu}>{t('navbar.educations')}</Link></li>
                            <li><Link to={`/${lang}/contact`} onClick={toggleMenu}>{t('navbar.contact')}</Link></li>
                        </div>
                    </div>
                    <div className="nav-buttons">
                        {languages.map((language) => (
                            <LanguageButton
                                key={language}
                                lang={language}
                                currentLang={i18n.language}
                            />
                        ))}
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
