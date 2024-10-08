import React from 'react';
import './LanguageButton.scss';

interface LanguageButtonProps {
    lang: string;
    currentLang: string;
    changeLanguage: (lang: string) => void;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ lang, currentLang, changeLanguage }) => {
    return (
        <button
            onClick={() => changeLanguage(lang)}
            className={`lang-button ${currentLang === lang ? 'active' : ''}`}
        >
            {lang.toUpperCase()}
        </button>
    );
};

export default LanguageButton;
