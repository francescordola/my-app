import React from "react";
import { useState } from "react";
import { Button } from "./Button/button";

// VITO
const buttons = [
    { label: 'How to read' },
    { label: 'About' }
]

const Buttons = () => {
  const [index, setIndex] = useState(0);

  return (
      <div>
          {buttons.map((button, i) => {
              return <Button onClick={() => setIndex(i)} active={index === i} name={button.label} />
          })}      
    </div>
  );
};

// TEST 2
// const Buttons = () => {
//     const [index, setIndex] = useState(0);

//     return (
//         <div>
//             <Button onClick={() => setIndex(0)} active={index === 0} name='button0' />
//             <Button onClick={() => setIndex(1)} active={index === 1} name='button1' />
//         </div>
//     )
// };

// TEST 1
// const Buttons = () => {
//     const [color, setColor] = useState("red");
        
//   return (
//       <div>
//         <Button onClick={() => { setColor("black"); }} style={{ background: color }} name="Button" /> 
//       </div>
//       );
//     };     
      
export default Buttons;
