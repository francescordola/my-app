import React from "react";
import { Button } from "../../../stories/Button";

const About = () => {
  return <Button label="About" />;
};

const HowToRead = () => {
  return <Button secondary label="How to read" />;
};

// COMPONENTE
const Navbar = () => {
  return (
    <>
      <HowToRead />
      <About />
    </>
  );
};

export default Navbar;
