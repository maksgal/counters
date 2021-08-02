import { Clicker } from "../Clicker/Clicker";

import styles from "./App.module.css";
import { useState } from "react";

export function App() {
  const startCounts = [1, 2, 3, 4, 5, 6];
  const [counts, setCount] = useState(startCounts);
  return (
    <div className={styles.App}>
      <Clicker
        index={0}
        startCounts={startCounts}
        counts={counts}
        setCount={setCount}
      />
      <Clicker
        index={1}
        startCounts={startCounts}
        counts={counts}
        setCount={setCount}
      />
      <Clicker
        index={2}
        startCounts={startCounts}
        counts={counts}
        setCount={setCount}
      />
      <Clicker
        index={3}
        startCounts={startCounts}
        counts={counts}
        setCount={setCount}
      />
      <Clicker
        index={4}
        startCounts={startCounts}
        counts={counts}
        setCount={setCount}
      />
      <Clicker
        index={5}
        startCounts={startCounts}
        counts={counts}
        setCount={setCount}
      />
    </div>
  );
}
