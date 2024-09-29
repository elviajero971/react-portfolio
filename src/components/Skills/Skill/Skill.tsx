import React from 'react';
import './Skill.scss'; // Add appropriate styles here

interface SkillProps {
    name: string;
}

const Skill: React.FC<SkillProps> = ({ name }) => {
    return (
        <article>
            <img src="/checkmark.svg" alt="Skills icon" className="icon" />
            <h3>{name}</h3>
        </article>
    );
};

export default Skill;