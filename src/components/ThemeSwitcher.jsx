import React, { useState } from "react";
import { FaBolt, FaPalette } from "react-icons/fa";
import "./ThemeSwitcher.css";

// Define los temas con las variables a cambiar
const THEMES = [
  {
    name: "Verde Neón ",
    color: "#18ff68",
    icon: <FaBolt color="#18ff68" />,
    vars: {
      "--color-primary": "#18ff68",
      "--color-primary-alt": "#00ffa2",
      "--color-secondary": "#11f7af",
      "--color-background-card" : "rgba(34, 34, 34, 0.95)",
      "--color-box-shadow" : "0 8px 40px 0 rgba(24,255,104,0.10), 0 4px 18px 0 #151d27",
      "--color-dark" : "#111b17" ,
      "--color-dark-alt" : "#1a1a2e",
      " --color-light" : "#d6ffe9",
      "--color-text": "#e7fff1",
      "--color-soft-purple": "	#bfff21",
    }
  },
  {
  name: "Rojo Neón",
  color: "#ff003c",
  icon: <FaBolt color="#ff003c" />, // O el icono que prefieras
  vars: {
    "--color-primary": "#ff003c",
    "--color-primary-alt": "#ff002e",
    "--color-secondary": "#ff4f00",
    "--color-background-card": "rgba(34, 34, 34, 0.95)",
    "--color-box-shadow": "0 8px 40px 0 #ff003c66, 0 4px 18px 0 #2c090f",
    "--color-dark": "#160610",
    "--color-dark-alt": "#2c090f",
    "--color-light": "#ffffff",
    "--color-text": "#fff0f4",
    "--color-soft-purple": "#d55bff"
  }
},
{
  name: "Magenta Neón",
  color: "#ff38f2",
  icon: <FaBolt color="#ff38f2" />, // Cambia el icono si lo prefieres
  vars: {
    "--color-primary": "#ff38f2",
    "--color-primary-alt": "#fe00f6",
    "--color-secondary": "#ff55a5",
    "--color-soft-purple": "#b15cff",
    "--color-light": "#fff",
    "--color-background-card": "rgba(34, 34, 34, 0.95)",
    "--color-box-shadow": "0 8px 40px 0 rgba(255,56,242,0.12), 0 4px 18px 0 #37073a",
    "--color-dark": "#130021",
    "--color-dark-alt": "#00223e",
    "--color-text": "#ffe9fb"
  }
},

  // Agrega aquí más temas si quieres...
];

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);

  const resetTheme = () => {
    THEMES.forEach(theme => {
      Object.keys(theme.vars).forEach(key => {
        document.documentElement.style.removeProperty(key);
      })
    })
    setOpen(false);
  }

  const changeTheme = (vars) => {
    for (const key in vars) {
      document.documentElement.style.setProperty(key, vars[key]);
    }
    setOpen(false);
  };

  return (
    <div className="theme-switcher">
      <button
        className="theme-switcher__btn"
        title="Cambiar tema"
        onClick={() => setOpen(o => !o)}
      >
        <FaPalette />
      </button>
      {open && (
        <div className="theme-switcher__menu">
          <button
            className="theme-switcher__option"
            onClick={resetTheme}
            style={{ color: "#00ffff" }} // Puedes ponerle color cian y un rayo
          >
            <FaBolt color="#00ffff" style={{ filter: "drop-shadow(0 0 6px #00ffff)" }} />
            <span>Azul Neón</span>
          </button>
          {THEMES.map((theme) => (

            <button
              key={theme.name}
              className="theme-switcher__option"
              onClick={() => changeTheme(theme.vars)}
              style={{ color: theme.color }}
            >
              {theme.icon}
              <span>{theme.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
