import React from "react";
import './Projects.css';

const projects = [
    {
        title: 'Web del Instituto IPC',
        description: 'Sitio web institucional desarrollado con HTML, CSS y JavaScript. Enfocado en usabilidad y presentación. académica.',
        image: "https://media.licdn.com/dms/image/v2/C4E1BAQHJrgyoG4Bndw/company-background_10000/company-background_10000/0/1645579874373/instituto_iberoamericano_de_formacin_profesional_cover?e=2147483647&v=beta&t=uWkHR4GeJW8bDx_gDLerFFFhQopVKWrflN9AVyW-NWE",
        url: "https://github.com/Yeyo-js/P-gina-web-IPC"
    },
    {
        title: 'Portafolio Personal',
        description: 'Mi portafolio actual, hecho con React y Vite. Incluye soporte multilenguaje, temas dinámicos y diseño moderno.',
        image: 'https://media.slidesgo.com/storage/2304276/conversions/0-game-developer-portfolio-thumb.jpg',
        url: "https://github.com/Yeyo-js/Portafolio_Yeyo"
    },
    {
        title: 'Versos de un poeta',
        description: "Aplicación web de versos de amor, desarrollada con HTML y CSS. Incluye muchos versos y un diseño atractivo.",
        image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1280008568-66bb3104ba635.jpg?resize=980:*",
        url: "https://poemasyerson.neocities.org/"
    },
    {
        title: 'Interandino',
        description: 'Sitio web institucional desarrollado con React.Enfocado en usabilidad y presentación. académica.',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjXCwIqcxftmFWtbUSD-PQFokD0eCipihh-g&s",
        url: "https://poemasyerson.neocities.org/"
    }

]

const Projects = () => {
    return (
        <section id="projects" className="projects" data-aos='fade-up'>
            <div className="projects__container">
                <h2 className="projects__title">
                    Mis Proyectos
                </h2>
                <div className="projects__grid">
                    {projects.map((project, index) => (
                        <div className="project__card" key={index}>
                            <img src={project.image} alt={project.title} className="project__image" />
                            <div className="project__info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href= {project.url} target="_blank" rel="noopener noreferrer" className="project__link">
                                    Ver Proyecto
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