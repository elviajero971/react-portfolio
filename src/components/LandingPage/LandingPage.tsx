import React from 'react';
import { useTranslation } from 'react-i18next';
import './LandingPage.scss';

const LandingPage: React.FC = () => {

    const { t } = useTranslation();

    return (
        <>
            <section id="landing_page" className="landing_page">
                <div className="container_pic">
                    <img src="/profile-pic.png" alt="Profile Pic" className="profile-pic"/>
                </div>
                <div className="container_text">
                    <p>{t('profile.text_1')}</p>
                    <h1>{t('profile.text_2')}</h1>
                    <h2>{t('profile.text_3')}</h2>
                    <div className="container_btn">
                        <a href={t('profile.cv_path')} target="_blank" rel="noreferrer" className="btn">{t('profile.text_btn_cv')}</a>
                        <a href="#contact" className="btn">{t('profile.text_btn_contact')}</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LandingPage;