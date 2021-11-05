import React from "react";
import { Primary } from "../../../stories/Button.stories";

const About = ({className}) => {
  return <Primary className={className} label='About' />;
};

const HowToRead = ({className}) => {
  return <Primary className={className} label='How to read' />;
};

// COMPONENTE
const Navbar = () => {
  return (
    <>
    <HowToRead/>
    <About/>
    </>
  )
}

export default Navbar;