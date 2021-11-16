import React from "react";
import Content from "../Content/Content";
import { Button } from "../Button/Button";
import style from "./board.module.scss";

const Board = () =>
{
  return (
    <div className={style.board}>
      <Button label="About" />
      <Content />{" "}
    </div>
  );
}

export default Board;