import { React, useState } from "react";
import { About } from "../About/About";
import { Legend } from "../Legend/Legend";

export const Navigation = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Legend onClick={() => setIndex(0)} />
      <About onClick={() => setIndex(1)} />
    </div>
  );
};
