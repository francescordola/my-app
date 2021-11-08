import React from "react";
import About from "./About/about";
import Legenda from "./Legenda/legenda";
import Navbar from "./Navbar/navbar";
import style from "./style.module.scss";

// COMPONENTE
const Board = () => {
  return (
    <div className={style.board}>
      <Navbar />
      <About />
      <Legenda />
    </div>
  );
};

export default Board;
