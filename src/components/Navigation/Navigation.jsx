import { React, useState } from "react";
import { About } from "../About/About";
import { Legend } from "../Legend/Legend";

export const Navigation = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Legend onClick={() => setIndex(0)} active={index === 0} />
      <About onClick={() => setIndex(1)} active={index === 1} />
    </div>
  );
};

// about z-index = 1
// How to read = 0

