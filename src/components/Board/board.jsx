import React from "react";
import Content from "../Content/Content";
import Navbarstory from "../Navbarstory/Navbarstory";
import Navbar from "../Navbar/Navbar";
import style from "./board.module.scss";

// COMPONENTE
const Board = () => {
  return (
    <div className={style.board}>
      <Navbar />
      <Navbarstory />
      <Content />
    </div>
  );
};

export default Board;
