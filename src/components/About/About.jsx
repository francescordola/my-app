import React from "react";
import { Content } from "../Content/Content";
import { Button } from "../Button/Button";

export const About = (active, onClick) => {
  return (
    <div>
      <Button label="About" type="btn-about" onClick={onClick} />
      <Content
        type="content-about"
        text="About"
        style={{ position: "relative", zIndex: active ? "1" : "0" }}
      />
    </div>
  );
};

