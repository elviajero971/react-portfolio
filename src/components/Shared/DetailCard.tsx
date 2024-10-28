import React from 'react';
import './DetailCard.scss';

interface DetailCardProps {
    title: string;
    date: string;
    entity: string;
    location: string;
    description: { [key: string]: string };
}

const DetailCard: React.FC<DetailCardProps> = ({ title, date, entity, location, description }) => {

    return (
        <div className="detail_card">
            <div className="detail_card_header">
                <h2 className="title">{title}</h2>
                <div className="details">
                    <p className="details_text">{date}</p>
                    <div className="vertical_line"></div>
                    <p className="details_text">{entity}</p>
                    <div className="vertical_line"></div>
                    <p className="details_text">{location}</p>
                </div>
                <ul className="detail_card_description">
                    {Object.values(description).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DetailCard;