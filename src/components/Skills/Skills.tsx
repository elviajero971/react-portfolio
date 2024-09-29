import React from 'react';
import { useTranslation } from 'react-i18next';
import Skill from './Skill/Skill'; // Import the Skill component
import './Skills.scss';

const Skills: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="skills" className="skills">
            <p className="subtitle">{t('skills.text_1')}</p>
            <h1 className="title">{t('skills.text_2')}</h1>
            <div className="details_container">
                <div className="skills_container">
                    {['backend', 'frontend', 'database', 'testing', 'devops'].map((category) => (
                        <div className="details_container" key={category}>
                            <h2>{t(`skills.${category}.title`)}</h2>
                            <div className="article_container">
                                {/* Convert the object into an array using Object.values() */}
                                {Object.values(t(`skills.${category}.skills`, {returnObjects: true})).map(
                                    (skill: any, index: number) => (
                                        <Skill
                                            key={index}
                                            name={skill.name}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
);
};

export default Skills;
