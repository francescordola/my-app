import React from "react";
import "./content.module.scss";

export const Content = ({ text }) => {
  return (
    <section>
      <p>{text}</p>
    </section>
  );
};
