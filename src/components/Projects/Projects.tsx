import React from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.scss';
import Project from './Project/Project';

const Projects: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="projects" className="projects">
            <p className="subtitle">{t('projects.text_1')}</p>
            <h1 className="title">{t('projects.text_2')}</h1>
            <div className="projects_container">
                <div className="project_cards">
                    {Object.values(t('projects.projects_list', {returnObjects: true})).map(
                        (project: any, index: number) => (
                        <Project
                            key={index}
                            title={project.title}
                            date={project.date}
                            image_path={project.image_path}
                            github_url={project.github_url}
                            project_url={project.live_url}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
