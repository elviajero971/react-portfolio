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
        <div className="paragraph">
            <div className="paragraph_header">
                <h2 className="title">{title}</h2>
                <div className="details">
                    <p className="details_text">{date}</p>
                    <div className="vertical_line"></div>
                    <p className="details_text">{company}</p>
                    <div className="vertical_line"></div>
                    <p className="details_text">{location}</p>
                </div>
            </div>
            <ul className="paragraph_description">
                {Object.values(description).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;