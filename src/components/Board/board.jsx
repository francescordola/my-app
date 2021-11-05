import React from "react";
import { Primary } from "../../stories/Button.stories";
import style from "./styles.module.scss";

const About = ({className}) => {
  return <Primary className={className} label='About' />;
};

const HowToRead = ({className}) => {
  return <Primary className={className} label='How to read' />;
};

// COMPONENTE
const Board = () => {
  return (
    <>
    <HowToRead className={ style.about }/>
    <About className={ style.howtoread }/>
    <div className={ style.rectangle }></div>
    </>
  )
}

export default Board;