import React from 'react';
import { useTranslation } from 'react-i18next';
import './Educations.scss';
import Education from "./Education/Education";

interface Description {
    [key: string]: string;
}

interface EducationData {
    title: string;
    date: string;
    school: string;
    location: string;
    description: Description;
}

const Educations: React.FC = () => {
    const { t } = useTranslation();

    const educationsList = t('educations.educations_list', { returnObjects: true }) as {
        [key: string]: EducationData;
    };

    const educationsArray = Object.values(educationsList);

    return (
        <section id="educations" className="educations">
            <p className="subtitle">{t('educations.text_1')}</p>
            <h1 className="title">{t('educations.text_2')}</h1>
            <div className="educations_container">
                {educationsArray.map((education, index) => (
                    <Education
                        key={index}
                        title={education.title}
                        date={education.date}
                        school={education.school}
                        location={education.location}
                        description={education.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Educations;
