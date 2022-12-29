import React, { useState } from "react";

const Practice = () => {
  const [color, setColor] = useState("white");
  const style = {
    height: "100vh",
    width: "100vw",
    backgroundColor: color
  };
  return (
    <div style={style}>
      <button onClick={() => setColor("green")}>green</button>
      <button onClick={() => setColor("blue")}>blue</button>
      <button onClick={() => setColor("yellow")}>yellow</button>
      <button onClick={() => setColor("orange")}>orange</button>
      <button onClick={() => setColor("black")}>black</button>
    </div>
  );
};

export default Practice;
