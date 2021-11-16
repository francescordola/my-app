import React from "react";
import Content from "../Content/Content";
import { Button } from "../Button/Button";
import style from "./about.module.scss";

const About = () => {
  return (
    <div className={style.board}>
      <Button label="About" />
      <Content text="lorem ipsum"
      background="red"/>
    </div>
  );
};

export default About;
