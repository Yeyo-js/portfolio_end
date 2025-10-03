import React from "react";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeSwitcher from './ThemeSwitcher'
import LanguageSwitcher  from "./LanguageSwitcher"
import { useTranslation } from "react-i18next";


const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { t } = useTranslation();
  
  return (
    <header className="header">
      <div className="header__container">
        <a href="#hero" className="header__logo">
          {/* Icono digital con SVG */}
          <span className="header__logo__icon">
            <svg height="28" viewBox="0 0 32 32" width="28">
              <circle
                cx="16"
                cy="16"
                r="12"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="3"
              />
              <path
                d="M8 16h16"
                stroke="var(--color-primary)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="header__logo__text">YeYoJS</span>
        </a>
        <button
          className="nav__hamburger"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMobileOpen((m) => !m)}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav${mobileOpen ? " open" : ""}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#hero" onClick={() => setMobileOpen(false)}>
                {t("nav.home")}
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#about" onClick={() => setMobileOpen(false)}>
                {t("nav.about")}
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#resume" onClick={() => setMobileOpen(false)}>
                {t("nav.resume")}
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#projects" onClick={() => setMobileOpen(false)}>
                {t("nav.projects")}
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#contact" onClick={() => setMobileOpen(false)}>
                {t("nav.contact")}
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__actions">
          {<ThemeSwitcher />}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
