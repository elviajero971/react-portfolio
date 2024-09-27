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
        <div className="education">
            <div className="education_header">
                <h3>{title}</h3>
            </div>
            <div>
                <p>{school}</p>
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

export default Education;