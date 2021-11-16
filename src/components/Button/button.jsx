import React from "react";
import "./button.module.scss";

export const Button = ({ label }) => {
  return (
    <div>
      <button>{label}</button>
    </div>
  );
};
