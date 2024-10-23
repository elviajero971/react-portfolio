import React from 'react';
import './Skill.scss'; // Add appropriate styles here

interface SkillProps {
    name: string;
}

const Skill: React.FC<SkillProps> = ({ name }) => {
    return (
        <article>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor"
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                />
            </svg>
            <h3>{name}</h3>
        </article>
    );
};

export default Skill;