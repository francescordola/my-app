import React from "react";
import Content from "../Content/Content";
import { Button } from "../Button/Button";
import style from "./legend.module.scss";

const Legend = () => {
  return (
    <div className={style.board}>
      <Button label="How to read" />
      <Content text="lalallala" />
    </div>
  );
};

export default Legend;