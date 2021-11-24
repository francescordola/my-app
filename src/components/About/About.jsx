import React from "react";
import { Content } from "../Content/Content";
import { Button } from "../Button/Button";
import style from "./about.module.scss";

export const About = () => {
  return (
    <div className={style.board}>
      <Button label="About" />
      <Content text="About" />
    </div>
  );
};
