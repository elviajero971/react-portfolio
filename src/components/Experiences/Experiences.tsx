// Experiences.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import DetailCard from "../Shared/DetailCard";
import './Experiences.scss';

// TypeScript interfaces
interface Description {
    [key: string]: string;
}

interface ExperienceData {
    title: string;
    date: string;
    company: string;
    location: string;
    description: Description;
}

const Experiences: React.FC = () => {
    const { t } = useTranslation();

    const experiencesList = t('experiences.experiences_list', { returnObjects: true }) as {
        [key: string]: ExperienceData;
    };

    const experiencesArray = Object.values(experiencesList);

    return (
        <section id="experiences" className="experiences">
            <p className="subtitle">{t('experiences.text_1')}</p>
            <h1 className="title">{t('experiences.text_2')}</h1>
            <div className="experiences_container">
                {experiencesArray.map((experience, index) => (
                    <DetailCard
                        key={index}
                        title={experience.title}
                        date={experience.date}
                        entity={experience.company}
                        location={experience.location}
                        description={experience.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Experiences;
