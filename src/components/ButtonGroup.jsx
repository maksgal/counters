import React from "react";
import { Button } from "./Button/Button";
import { FaPlus, FaSyncAlt, FaMinus } from "react-icons/fa";

export function ButtonGroup({ index, startCounts, setCount, counts }) {
  return (
    <div>
      <Button
        backgroundColor="red"
        icon={<FaPlus />}
        iconColor="white"
        clickHandler={() => {
          counts[index]++;
          setCount([...counts]);
        }}
      />
      <Button
        backgroundColor="yellow"
        icon={<FaSyncAlt />}
        iconColor="black"
        clickHandler={() => {
          counts[index] = startCounts[index];
          setCount(startCounts);
        }}
      />
      <Button
        backgroundColor="blue"
        icon={<FaMinus />}
        iconColor="white"
        clickHandler={() => {
          counts[index]--;
          setCount([...counts]);
        }}
      />
    </div>
  );
}
