import React from 'react';
import './Education.scss';

interface EducationProps {
    title: string;
    date: string;
    school: string;
    location: string;
    description: { [key: string]: string };
}

const Education: React.FC<EducationProps> = ({ title, date, school, location, description }) => {

    return (
        <div className="paragraph">
            <div className="paragraph_header">
                <h2 className="title">{title}</h2>
                <div className="details">
                    <p className="details_text">{date}</p>
                    <div className="vertical_line"></div>
                    <p className="details_text">{school}</p>
                    <div className="vertical_line"></div>
                    <p className="details_text">{location}</p>
                </div>
                <ul className="paragraph_description">
                    {Object.values(description).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Education;