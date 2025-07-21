import React, { useRef, useEffect } from "react";
import "./Resume.css";
import { useTranslation } from "react-i18next";
import { FaGraduationCap, FaAward, FaBriefcase } from "react-icons/fa";

// ICONOS
const iconsEdu = [<FaGraduationCap />, <FaAward />];
const iconsExp = [<FaBriefcase />, <FaBriefcase />];

// Función robusta para obtener el porcentaje exacto
function getSkillWidth(level) {
  if (!level) return 0;
  const val = level.toLowerCase();
  if (val.includes("100")) return 100;
  if (val.includes("98")) return 98;
  if (val.includes("97")) return 97;
  if (val.includes("95")) return 95;
  if (val.includes("94")) return 94;
  if (val.includes("92")) return 92;
  if (val.includes("90")) return 90;
  if (val.includes("88")) return 88;
  if (val.includes("86")) return 86;
  if (val.includes("81")) return 81;
  if (val.includes("80")) return 80;
  if (val.includes("75")) return 75;
  if (val.includes("73")) return 73;
  if (val.includes("70")) return 70;
  if (val.includes("interm")) return 86;
  if (val.includes("avan")) return 98;
  if (val.includes("básic") || val.includes("basic")) return 73;
  return 70;
}

export default function Resume() {
  const { t } = useTranslation();

  // EDUCACIÓN Y EXPERIENCIA
  const educacion = t("resume.educacion", { returnObjects: true }) || [];
  const experiencia = t("resume.experiencia", { returnObjects: true }) || [];
  const eduList = educacion.map((item, i) => ({ ...item, icon: iconsEdu[i] }));
  const expList = experiencia.map((item, i) => ({ ...item, icon: iconsExp[i] }));

  // SKILLS, ORDEN FIJO
  const allSkills = t("resume.skills_list", { returnObjects: true }) || [];
  // Este orden es fijo y no depende del idioma ni del array
  const skillOrder = ["HTML5", "CSS3", "JavaScript", "React"];
  const filteredSkills = skillOrder
    .map(name => allSkills.find(s => s.skill === name))
    .filter(Boolean);

  return (
    <section id="resume" className="resume">
      <h2 className="resume__title">{t("resume.title")}</h2>
      <div className="resume__timeline-area">
        <div className="resume__timelines">
          <TimelineList title={t("resume.education")} items={eduList} />
          <TimelineList title={t("resume.experience")} items={expList} />
        </div>
        <SkillsList title={t("resume.skills")} skills={filteredSkills} />
      </div>
    </section>
  );
}

// ---------- Timelines ----------
function TimelineList({ title, items }) {
  return (
    <div className="resume__timeline-neo">
      <h3 className="resume__subtitle">{title}</h3>
      <div className="timeline__neo__list">
        {items.map((item, i) => (
          <div className="timeline__neo__item" key={i}>
            <span className="timeline__neo__dot" />
            <span className="timeline-neo-icon">{item.icon}</span>
            <div className="timeline-neo-content">
              <h4>{item.titulo}</h4>
              <div className="timeline-neo-inst">{item.institucion || item.empresa}</div>
              <div className="timeline-neo-date">{item.fecha}</div>
              <div className="timeline-neo-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- SKILLS LIST con animación (sin estilos en línea) ----------
function SkillsList({ title, skills }) {
  const barRefs = useRef([]);

  useEffect(() => {
    if (!skills.length) return;
    barRefs.current.forEach((bar, i) => {
      if (bar) {
        // Reinicia a 0% antes de animar
        bar.style.width = "0%";
        bar.offsetHeight; // Forzar repintado
        setTimeout(() => {
          bar.style.transition = "width 1.4s cubic-bezier(.82,.14,.15,.98)";
          bar.style.width = `${getSkillWidth(skills[i]?.level)}%`;
        }, 150 * i + 100);
      }
    });
    return () => {
      barRefs.current.forEach(bar => {
        if (bar) {
          bar.style.width = "0%";
          bar.style.transition = "none";
        }
      });
    };
  }, [skills]);

  return (
    <div className="resume__skills-neo">
      <h3 className="resume__subtitle">{title}</h3>
      <div className="resume__skills-grid">
        {skills.map((skill, i) => (
          <div className="skill-neo-card" key={i}>
            <span className="skill-neo-title">{skill.skill}</span>
            <div className={`skill-neo-bar-bg skill-neo-bar-bg--${skill.skill.toLowerCase()}`}>
              <div
                ref={el => (barRefs.current[i] = el)}
                className={`skill-neo-bar skill-neo-bar--${skill.skill.toLowerCase()}`}
                aria-valuenow={getSkillWidth(skill.level)}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <span className="skill-neo-pct">{getSkillWidth(skill.level)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
