import React from "react";
import style from "./style.module.scss";

// export const handleClick = () => {
// console.log("hello ninja");
// };

export const Button = (props) => {
  return (
    <button
      className={style.button}
      onClick={props.onClick}
      // Ivan
      style={{ backgroundColor: props.active ? "black" : "white" }}
    >
      {props.name}
    </button>
  );
};

export default Button;
