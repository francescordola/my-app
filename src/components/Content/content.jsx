import React from "react";
import style from "./content.module.scss";

export const Content = ({ text, type }) => {
  return (
    <div className={style[type]}>
      <p>{text}</p>
    </div>
  );
};
