import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import './LanguageButton.scss';

interface LanguageButtonProps {
    lang: string;
    currentLang: string;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ lang, currentLang }) => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const { lang: currentLangParam } = useParams();

    const handleClick = () => {
        if (lang !== currentLangParam) {
            // Change the language in i18n
            i18n.changeLanguage(lang);

            // Update the URL path with the new language prefix
            const currentPath = window.location.pathname.split('/').slice(2).join('/');
            navigate(`/${lang}/${currentPath}`);
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`lang-button ${currentLang === lang ? 'active' : ''}`}
        >
            {lang.toUpperCase()}
        </button>
    );
};

export default LanguageButton;
