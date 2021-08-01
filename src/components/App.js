import { Clicker } from "./Clicker";

import "./App.css";
import { useState } from "react";

export function App() {
  const startCount1 = 5;
  const [count1, setCount1] = useState(startCount1);
  const startCount2 = 10;
  const [count2, setCount2] = useState(startCount2);
  const startCount3 = 15;
  const [count3, setCount3] = useState(startCount3);
  const startCount4 = 100;
  const [count4, setCount4] = useState(startCount4);
  const startCount5 = 25;
  const [count5, setCount5] = useState(startCount5);
  const startCount6 = 195;
  const [count6, setCount6] = useState(startCount6);
  return (
    <div className="App">
      <Clicker startCount={startCount1} count={count1} setCount={setCount1} />
      <Clicker startCount={startCount2} count={count2} setCount={setCount2} />
      <Clicker startCount={startCount3} count={count3} setCount={setCount3} />
      <Clicker startCount={startCount4} count={count4} setCount={setCount4} />
      <Clicker startCount={startCount5} count={count5} setCount={setCount5} />
      <Clicker startCount={startCount6} count={count6} setCount={setCount6} />
    </div>
  );
}
