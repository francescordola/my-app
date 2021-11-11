import React from "react";
import Pannelli from "./Pannelli/pannelli";
import Navbar from "./Navbar/navbar";
import style from "./style.module.scss";

// COMPONENTE
const Board = () => {
  return (
    <div className={style.board}>
      <Navbar />
      <Pannelli />
    </div>
  );
};

export default Board;
