import React from "react";
import Content from "../Content/content";
import Navbarstory from "../Navbarstory/navbarstory";
import Navbar from "../Navbar/navbar";
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
