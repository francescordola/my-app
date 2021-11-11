import React from "react";
import { useState } from "react";
import "./style.module.scss";

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

// OPTION 2
// export const Button = (props) => {
//    let [hover,setHover]=useState(false);

//    let buttonstyle={
//     backgroundColor:''
//   }

//   if(hover){
//     buttonstyle.backgroundColor="green";
//   }
//   else{
//     buttonstyle.backgroundColor='';
//   }

//   return (
//     <button style={buttonstyle}
//       onClick={props.onClick}
//       onMouseOver={()=>setHover(true)}
//       onMouseOut={() => setHover(false)}
//     >
//       {props.name}
//     </button>
//   );
// }

// OPTION 3 ???
export const Button = ({ onClick, active, name }) => {
  const [hover, setHover] = useState(false);
  console.log("hover", hover);
  console.log("active", active);

  const getBackgroundColor = ({ active, hover }) => {
    if (hover && !active) {
      return { backgroundColor: "green", color: "white" };
    }

    if (active && !hover) {
      return { backgroundColor: "black !important", color: "white" };
    } else {
      return { backgroundColor: "white !important", color: "black" };
    }
  };

  return (
    <div>
      <button
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
        onClick={onClick}
        style={{ getBackgroundColor }}
      >
        {name}
      </button>
    </div>
  );
};
