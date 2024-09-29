import React from 'react';
import './Project.scss'; // Add appropriate styles here
import { useTranslation } from 'react-i18next';

interface ProjectProps {
    title: string;
    date: string;
    image_path: string;
    github_url: string;
    project_url: string;
}

const Project: React.FC<ProjectProps> = ({ title, date, image_path, github_url, project_url }) => {
    const { t } = useTranslation();

    return (
        <div className="project_card">
            <img src={image_path} alt={title} className="project-pic"/>
            <h2>{title} - {date}</h2>
            <div className="buttons_container">
                { github_url && (
                    <a href={github_url} className="btn" target="_blank" rel="noreferrer">{t('projects.view_code')}</a>
                )}
                { project_url && (
                    <a href={project_url} className="btn" target="_blank" rel="noreferrer">{t('projects.view_live')}</a>
                )}
            </div>
        </div>
    );
};

export default Project;