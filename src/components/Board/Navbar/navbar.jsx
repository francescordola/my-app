import React from "react";
import { Button } from "../../../stories/Button";
import style from "./style.module.scss";

const About = () => {
  return <Button label="About" />;
};

const HowToRead = () => {
  return <Button secondary label="How to read" />;
};

// COMPONENTE
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <HowToRead />
      <About />
    </div>
  );
};

export default Navbar;
