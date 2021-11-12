import React from "react";
import { Buttonstory } from "../../../stories/Buttonstory";
import style from "./style.module.scss";

const About = () => {
  return <Buttonstory label="About" />;
};

const HowToRead = () => {
  return <Buttonstory secondary label="How to read" />;
};

// COMPONENTE
const Navbarstory = () => {
  return (
    <div className={style.navbar}>
      <HowToRead />
      <About />
    </div>
  );
};

export default Navbarstory;
