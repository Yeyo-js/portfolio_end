import React from "react";
import "./Hero.css";
import perfil from "../assets/imagenes/perfil_final.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="hero" className="hero" data-aos="fade-up">
      <div className="hero__container">
        <div className="hero__image-wrapper">
          <span className="hero__flame"></span>
          <img src={perfil} alt="Foto de yeyo10" className="hero__image" />
        </div>
        <h1 className="hero__title">
          <span className="hero__title-gradient">YeYoJS</span>
        </h1>
        <p className="hero__subtitle">
          {t("hero.subtitle")}
          <br />
          <span className="hero__subtitle-highlight">
            {t("hero.highlight")}
          </span>
        </p>
        <a
          href="./assets/cv/cv_prueba.pdf"
          className="hero__cv"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hero__text">{t("hero.cv")}</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
