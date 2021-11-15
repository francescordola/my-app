import React from "react";
//import { useState } from "react";
import { Button } from "./Button/button";
import style from "./style.module.scss";

// TEST 4
const buttons = [{ label: "How to read" }, { label: "About" }];

const Navbar = () => {
  return (
    <div className={style.navbar}>
      {buttons.map((button) => {
        return <Button
          key={button.label}
          label={button.label} />;
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

export default Navbar;
