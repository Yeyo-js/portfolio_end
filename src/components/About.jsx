import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaJs, FaPython } from "react-icons/fa";
import './About.css'
import { useTranslation } from "react-i18next";

const floatingIcons = [
  { icon: <FaHtml5 />, style: { top: "10%", left: "6%", color: "#e44d26" } },
  { icon: <FaCss3Alt />, style: { top: "75%", left: "10%", color: "#2965f1" } },
  { icon: <FaJs />, style: { top: "15%", left: "85%", color: "#f7df1e" } },
  { icon: <FaReact />, style: { top: "55%", left: "88%", color: "#61dafb" } },
  { icon: <FaGitAlt />, style: { top: "60%", left: "25%", color: "#f1502f" } },
  { icon: <FaNodeJs />, style: { top: "80%", left: "60%", color: "#83cd29" } },
  { icon: <FaPython />, style: { top: "20%", left: "55%", color: "#3572A5" } },
];

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title">{t("about.title")}</h2>
        <p className="about__desc">
          {t("about.desc")}
        </p>
      </div>
      {/* Iconos flotantes */}
      {floatingIcons.map((item, i) => (
        <span key={i} className="about__icon-float" style={item.style}>{item.icon}</span>
      ))}
    </section>
  );
};

export default About;
