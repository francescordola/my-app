import React from "react";
import { useState } from "react";
import { Button } from "../Button/button";
import style from "./navbar.module.scss";

const buttons = [{ label: "How to read" }, { label: "About" }];

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

export default Navbar;
