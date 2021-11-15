import React from "react";
//import { useState } from "react";
import "./style.module.scss";

// OPTION 4
export const Button = ({ label }) => {
  return (
    <div>
      <button>{label}</button>
    </div>
  );
};

// OPTION 1
// export const Button = (props) => {
//   const MouseEnter = (event) => {
//     event.target.style.background = "grey";
//   };
//   const MouseLeave = (event) => {
//     event.target.style.background = "white";
//     event.target.style.color = "black";
//   };

//   return (
//     <button
//       onMouseOver={MouseEnter}
//       onMouseOut={MouseLeave}
//       onClick={props.onClick}
//       style={{
//         backgroundColor: props.active ? "black" : "white",
//         color: props.active ? "white" : "black",
//       }}
//     >
//       {props.name}
//     </button>
//   );
// };
