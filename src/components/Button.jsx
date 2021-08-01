import React from "react";
import "./Button.css";

export function Button({ backgroundColor, icon, iconColor, clickHandler }) {
  return (
    <button
      className="button"
      onClick={() => clickHandler()}
      style={{ backgroundColor: backgroundColor, color: iconColor }}
    >
      {icon}
    </button>
  );
}
