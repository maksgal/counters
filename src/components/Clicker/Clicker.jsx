import React from "react";
import styles from "./Clicker.module.css";

import { ButtonGroup } from "../ButtonGroup";

export function Clicker({ index, startCounts, counts, setCount }) {
  return (
    <div className={styles.clicker}>
      <div className={styles.clickerDisplay}>{counts[index]}</div>
      <ButtonGroup
        index={index}
        startCounts={startCounts}
        setCount={setCount}
        counts={counts}
      />
    </div>
  );
}
