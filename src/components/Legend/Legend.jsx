import React from "react";
import { Content } from "../Content/Content";
import { Button } from "../Button/Button";

export const Legend = ({ onClick }) => {
  return (
    <div>
      <Button type="btn-legend" onClick={onClick} label="How to read" />
      <Content type="content-legend" text="How to read" />
    </div>
  );
};
