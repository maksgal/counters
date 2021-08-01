import React from "react";
import "./Clicker.css";

import { ButtonGroup } from "./ButtonGroup";

export function Clicker({ startCount, count, setCount }) {
  return (
    <div className="clicker">
      <div className="clicker-display">{count}</div>
      <ButtonGroup startCount={startCount} setCount={setCount} count={count} />
    </div>
  );
}
