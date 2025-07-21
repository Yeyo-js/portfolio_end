import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const LANGS = [
  { code: "es", icon: "🇪🇸", label: "ES" },
  { code: "en", icon: "🇺🇸", label: "EN" },
  { code: "fr", icon: "🇫🇷", label: "FR" }
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language;

  return (
    <div className="language-switcher">
      {LANGS.map((lang) => (
        <button
          key={lang.code}
          className={`language-switcher__btn${current === lang.code ? " active" : ""}`}
          onClick={() => i18n.changeLanguage(lang.code)}
          title={lang.label}
        >
          {/* Icono y etiqueta */}
          <span className="language-switcher__icon">{lang.icon}</span>
          <span className="language-switcher__label">{lang.label}</span>
        </button>
      ))}
    </div>
  );
}


export default LanguageSwitcher;