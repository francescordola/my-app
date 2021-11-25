import React from "react";
import { Content } from "../Content/Content";
import { Button } from "../Button/Button";

export const About = () => {
  return (
    <div>
      <Button label="About" type="btn-about" />
      <Content type="content-about" text="About" />
    </div>
  );
};

// about z-index = 1
// How to read = 0

//style={{ z-index: props.active ? "1" : "0" }}