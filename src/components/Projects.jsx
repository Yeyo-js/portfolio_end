import React from "react";
import './Projects.css';
import { useTranslation } from "react-i18next";

const Projects = () => {
    const { t } = useTranslation()

    const projects = t("projects.list", {returnObjects: true}) || []
    return (
        <section id="projects" className="projects" data-aos='fade-up'>
            <div className="projects__container">
                <h2 className="projects__title">
                    {t("projects.title")}
                </h2>
                <div className="projects__grid">
                    {projects.map((project, index) => (
                        <div className="project__card" key={index}>
                            <img src={project.image} alt={project.title} className="project__image" />
                            <div className="project__info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href= {project.url} target="_blank" rel="noopener noreferrer" className="project__link">
                                    {t("projects.see")}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;