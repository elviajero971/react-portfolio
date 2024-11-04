import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavBar from '../NavBar/NavBar';
import LandingPage from "../LandingPage/LandingPage";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Experiences from "../Experiences/Experiences";
import Projects from "../Projects/Projects";
import Educations from "../Educations/Educations";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const SectionScrollWrapper: React.FC<{ sectionId: string }> = ({ sectionId }) => {
    const { lang } = useParams();
    const { i18n } = useTranslation();

    // Change language based on the URL parameter
    useEffect(() => {
        if (lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang, i18n]);

    // Scroll to the specified section with an offset for the sticky navbar
    useEffect(() => {
        const scrollToSection = () => {
            const section = document.getElementById(sectionId);
            const navbarHeight = 80; // Adjust this value to match your navbar's height

            if (section) {
                const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
                console.log('Scrolling to:', sectionId, 'at position:', sectionTop);
                window.scrollTo({ top: sectionTop, behavior: 'smooth' });
            } else {
                console.warn('Section not found:', sectionId);
            }
        };

        // Use a timeout to allow the layout to settle before scrolling
        const timer = setTimeout(scrollToSection, 100); // Adjust delay if needed
        return () => clearTimeout(timer); // Clean up timeout on unmount
    }, [sectionId]);

    return (
        <div className="app">
            <NavBar />
            <LandingPage />
            <About />
            <Skills />
            <Experiences />
            <Projects />
            <Educations />
            <Contact />
            <Footer />
        </div>
    );
};

export default SectionScrollWrapper;
