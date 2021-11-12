import React from "react";
import { useState } from "react";
import { Button } from "./Button/button";
import style from "./style.module.scss";

// TEST 3
const buttons = [{ label: "How to read" }, { label: "About" }];
//const buttons = [{ label: "How to read" }];

const Navbar = () => {
  const [index, setIndex] = useState(null);

  return (
    <div className={style.navbar}>
      {buttons.map((button, i) => {
        return (
          <Button
            key={button.label}
            onClick={() => setIndex(i)}
            active={index === i}
            name={button.label}
          />
        );
      })}
    </div>
  );
};

// TEST 2
// const NavBar2 = () => {
//     const [index, setIndex] = useState(null);

//     return (
//         <div>
//             <Button onClick={() => setIndex(0)} active={index === 0} name='button0' />
//             <Button onClick={() => setIndex(1)} active={index === 1} name='button1' />
//         </div>
//     )
// };

// TEST 1
// const Buttons = () => {
//     const [color, setColor] = useState("red");

//   return (
//       <div>
//         <Button onClick={() => { setColor("black"); }} style={{ background: color }} name="Button" />
//       </div>
//       );
//     };

export default Navbar;
