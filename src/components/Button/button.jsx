import React from "react";
import style from "./style.module.scss";

const handleClick = () => {
console.log('hello ninja')
}

const Button = (props) => {
  return (
      <button className={style.button} onClick={props.onclick}>
      {props.name}
    </button>
  );
};

export default Button;
