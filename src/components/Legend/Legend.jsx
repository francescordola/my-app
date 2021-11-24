import React from "react";
import { Content } from "../Content/Content";
import { Button } from "../Button/Button";
import style from "./legend.module.scss";

export const Legend = () => {
  return (
    <div className={style.board}>
      <Button label="How to read" />
      <Content text="How to read" />
    </div>
  );
};
