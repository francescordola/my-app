import React from "react";
import { Content } from "../Content/Content";
import { Button } from "../Button/Button";

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

