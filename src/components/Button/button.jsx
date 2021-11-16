import React from "react";
//import { useState } from "react";
import "./button.module.scss";

export const Button = (props) => {
  const MouseEnter = (event) => {
    event.target.style.background = "grey";
  };
  const MouseLeave = (event) => {
    event.target.style.background = "white";
    event.target.style.color = "black";
  };

  return (
    <button
      onMouseOver={MouseEnter}
      onMouseOut={MouseLeave}
      onClick={props.onClick}
      style={{
        backgroundColor: props.active ? "black" : "white",
        color: props.active ? "white" : "black",
      }}
    >
      {props.name}
    </button>
  );
};
