import React from "react";
import { useState } from "react";
import About from "./About/about";
import Legenda from "./Legenda/legenda";
//import style from "./style.module.scss";

// COMPONENTE
const Pannelli = () => {
  return (
    <div>
      <Legenda />
      <About />
    </div>
  );
};

export default Pannelli;
