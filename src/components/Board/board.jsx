import React from "react";
import { Primary } from "../../stories/ButtonCopy.stories";

const About = () => {
  return <Primary label='About' />;
};

const HowToRead = () => {
  return <Primary label='How to read' size = 'large' />;
};

// COMPONENTE
const Board = () => {
  return (
    <>
    <About />
    <HowToRead />
    </>
  )

}

export default Board;