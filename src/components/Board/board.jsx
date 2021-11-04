import React from "react";
import { Primary } from "../../stories/Button.stories";
import style from "./styles.module.scss";

const About = () => {
  return <Primary label='About' />;
};

const HowToRead = () => {
  return <Primary label='How to read' />;
};

// COMPONENTE
const Board = () => {
  return (
    <>
    <HowToRead />
    <About />
    <div className={ style.rectangle }></div>
    </>
  )
}

export default Board;