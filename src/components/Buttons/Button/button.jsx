import React from "react";
import "./style.module.scss";

export const Button = (props) => {
  return (
    <button
      onMouseEnter={props.onMouseEnter}
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

export default Button;
