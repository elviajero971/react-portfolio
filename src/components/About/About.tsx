import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.scss';

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="about">
            <p>{t('about.text_1')}</p>
            <h1>{t('about.text_2')}</h1>
            <div className="content">
                <div className="pic_container">
                    <img src="/picture_ai.jpeg" alt="Profile" className="about-pic"/>
                </div>
                <div className="description_container">
                    <div className="cards">
                        <div className="card">
                            <img src="/experience.png" alt="experience" className="card-pic"/>
                            <h2>{t('about.experience.title')}</h2>
                            <p>{t('about.experience.text_1')}</p>
                            <p>{t('about.experience.text_2')}</p>
                        </div>
                        <div className="card">
                            <img src="/education.png" alt="education" className="card-pic"/>
                            <h2>{t('about.education.title')}</h2>
                            <p>{t('about.education.text_1')}</p>
                            <p>{t('about.education.text_2')}</p>
                        </div>
                    </div>
                    <div className="text">
                        <p>{t('about.text_3')}</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;