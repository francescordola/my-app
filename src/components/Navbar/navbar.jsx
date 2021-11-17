import React from "react";
import { Button } from "../Button/Button";
import style from "./navbar.module.scss";

const buttons = [{ name: "How to read" }, { name: "About" }];

const Navbar = () => {
  return (
    <div className={style.navbar}>
      {buttons.map((buttonName) => {
        return <Button
          key={buttonName.name} 
          label={buttonName.name} />;
      })}
    </div>
  );
};

export default Navbar;
