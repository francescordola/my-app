import React from "react";
import style from "./content.module.scss";

// create a map function that from an array return a string of elements that after, I call it in the parent component

// const styleName = [style["bgBlue"];

const getClassName = () => {
  return `${style["bgBlue"]} ${style["p"]} ${style.rectangle}`;
};

export const Content = ({ text, classModule }) => {
  return (
    <div className={getClassName(classModule)}>
      <p>{text}</p>
    </div>
  );
};

