import React from "react";
import styles from "./Button.module.css";

export function Button({ backgroundColor, icon, iconColor, clickHandler }) {
  return (
    <button
      className={styles.button}
      onClick={clickHandler}
      style={{ backgroundColor: backgroundColor, color: iconColor }}
    >
      {icon}
    </button>
  );
}
