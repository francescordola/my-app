import React from "react";
import style from "./button.module.scss";

export const Button = ({ label, type, onClick }) => {
  return (
    <button className={style[type]} onClick={onClick}>
      {label}
    </button>
  );
};

