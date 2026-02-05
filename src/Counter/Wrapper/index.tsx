import React from "react";
import { useEffect, useRef, useState, MutableRefObject } from "react";
import Timer from "../Timer";

export default function Wrapper() {
  const [count, setCount] = useState(3580);
  const [start, setStart] = useState(false);

  let timer  = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (start) {
      timer.current = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
      
    };
  }, [start]);

  const toggleTimer = () => {
    setStart(!start);
  };
  const handleReset = () => {
    setStart(false);
    setCount(0);
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <Timer count={count} />
      <div>
        <button onClick={toggleTimer}> {!start ? `Start` : "Pause"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
