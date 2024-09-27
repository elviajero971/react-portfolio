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
                <h3>{title}</h3>
            </div>
            <div>
                <p>{company}</p>
                <p>{location}</p>
            </div>
            <p>{date}</p>
            <ul>
                {Object.values(description).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;