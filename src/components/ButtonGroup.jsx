import React from "react";
import { Button } from "./Button";
import { FaPlus, FaSyncAlt, FaMinus } from "react-icons/fa";

export function ButtonGroup({ startCount, setCount, count }) {
  return (
    <div className="counter-buttons">
      <Button
        backgroundColor={"red"}
        icon={<FaPlus />}
        iconColor={"white"}
        clickHandler={() => setCount(count + 1)}
      />
      <Button
        backgroundColor={"yellow"}
        icon={<FaSyncAlt />}
        iconColor={"black"}
        clickHandler={() => setCount(startCount)}
      />
      <Button
        backgroundColor={"blue"}
        icon={<FaMinus />}
        iconColor={"white"}
        clickHandler={() => setCount(count - 1)}
      />
    </div>
  );
}
