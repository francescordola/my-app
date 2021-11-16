import React from "react";
import { Button } from "../Button/Button";
import style from "./navbar.module.scss";

const buttons = [{ label: "How to read" }, { label: "About" }];

const Navbar = () => {
  return (
    <div className={style.navbar}>
      {buttons.map((button) => {
        return <Button key={button.label} label={button.label} />;
      })}
    </div>
  );
};

export default Navbar;
