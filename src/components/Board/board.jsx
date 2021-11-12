import React from "react";
import Pannelli from "./Pannelli/pannelli";
import Navbarstory from "./Navbarstory/navbarstory";
import Navbar from "./Navbar/navbar";
import style from "./style.module.scss";

// COMPONENTE
const Board = () => {
  return (
    <div className={style.board}>
      <Navbar />
      <Navbarstory />
      <Pannelli />
    </div>
  );
};

export default Board;
