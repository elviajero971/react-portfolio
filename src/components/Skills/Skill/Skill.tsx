import React from 'react';
import './Skill.scss'; // Add appropriate styles here

interface SkillProps {
    name: string;
    level: string;
}

const Skill: React.FC<SkillProps> = ({ name, level }) => {
    return (
        <article>
            <img src="/checkmark.png" alt="Skills icon" className="icon" />
            <div>
                <h3>{name}</h3>
                <p>{level}</p>
            </div>
        </article>
    );
};

export default Skill;