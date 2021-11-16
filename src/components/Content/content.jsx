import React from "react";
import style from "./content.module.scss";

const Content = ({ text }) => {
  return (
    <div className={style.rectangle}>
      <p>{text}</p>
    </div>
  );
};

export default Content;
