import React from "react";
import { Content } from "../Content/content.jsx";
import { Button } from "../Button/button.jsx";

export const Legend = ({ active, onClick }) => {
  return (
    <div>
      <Button label="How to read" type="btn-legend" onClick={onClick} />
      <Content
        type="content-legend"
        text="How to read"
        style={{ position: "relative", zIndex: active ? "0" : "1" }}
      />
    </div>
  );
};

