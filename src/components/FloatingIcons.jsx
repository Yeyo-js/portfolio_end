// src/components/FloatingIcons.jsx

import React from "react";
import {
  FaLaptopCode, FaMicrochip, FaRobot, FaServer, FaCloud,
  FaNetworkWired, FaDatabase, FaCogs, FaTerminal
} from "react-icons/fa";
import { MdMemory, MdComputer, MdScience } from "react-icons/md";
import { BiChip } from "react-icons/bi";
import "./FloatingIcons.css";

const icons = [
  { icon: <FaLaptopCode />, style: { top: "7%", left: "12%", color: "#00fff7" } },
  { icon: <FaRobot />, style: { top: "78%", left: "7%", color: "#b388ff" } },
  { icon: <MdComputer />, style: { top: "86%", left: "33%", color: "#b0bec5" } },
  { icon: <FaServer />, style: { top: "5%", left: "85%", color: "#80cbc4" } },
  { icon: <FaCloud />, style: { top: "55%", left: "90%", color: "#b2ebf2" } },
  { icon: <FaDatabase />, style: { top: "27%", left: "96%", color: "#ffd600" } },
  { icon: <FaCogs />, style: { top: "13%", left: "57%", color: "#e0e0e0" } },
  { icon: <MdScience />, style: { top: "85%", left: "78%", color: "#ff80ab" } },
  { icon: <MdMemory />, style: { top: "37%", left: "6%", color: "#b2dfdb" } },
  { icon: <FaMicrochip />, style: { top: "23%", left: "65%", color: "#00e676" } },
  { icon: <BiChip />, style: { top: "63%", left: "25%", color: "#fff59d" } },
  { icon: <FaNetworkWired />, style: { top: "12%", left: "66%", color: "#18ffff" } },
  { icon: <FaTerminal />, style: { top: "76%", left: "53%", color: "#00bcd4" } },
];

export default function FloatingIcons() {
  return (
    <div className="floating__icons">
      {icons.map((item, i) => (
        <span key={i} className="floating__icon" style={item.style}>
          {item.icon}
        </span>
      ))}
    </div>
  );
}
