import React from 'react';
import './Experience.scss';

interface ExperienceProps {
    title: string;
    date: string;
    company: string;
    location: string;
    description: { [key: string]: string };
}

const Experience: React.FC<ExperienceProps> = ({ title, date, company, location, description }) => {

    return (
        <div className="experience">
            <div className="experience_header">
                <h3 className="title">{title}</h3>
                <div className="details">
                    <p>{company}</p>
                    <p>{location}</p>
                </div>

            </div>

            <p>{date}</p>
            <ul className="experience_description">
                {Object.values(description).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;