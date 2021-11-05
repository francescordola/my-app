import React from "react";
import About from "./About/about";
import Legenda from "./Legenda/legenda";
import Navbar from "./Navbar/navbar";

// COMPONENTE
const Board = () => {
  return (
    <>
    <Navbar />
    <About/>
    <Legenda/>
    </>
  )
}

export default Board;