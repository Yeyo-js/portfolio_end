import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow"></div>
      <div className="footer__container">
        <div className="footer__brand">
          <FaCode className="footer__logo" />
          <span className="footer__brand-name">YeYoJS</span>
        </div>
        <div className="footer__links">
          <a
            href="mailto: craftyeyo6@gmail.com"
            className="footer__icon"
            aria-label="Correo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Yeyo-js"
            className="footer__icon"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yerson-jhodemir-fustamante-olivares-a72553358/"
            className="footer__icon"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/51929224940"
            className="footer__icon"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com/yerson_jhodemir"
            className="footer__icon"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="footer__copyright">
          © {new Date().getFullYear()} <span>YeYoJS</span>. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
