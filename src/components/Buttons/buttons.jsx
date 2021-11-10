import React from "react";
import { useState } from "react";
import { Button } from "./Button/button";

const Buttons = () => {
  const [color, setColor] = useState("red");

  return (
    <div>
        {/* cosa succede quando clicco sul bottone, come si comporta il componente? */}

        {/* TEST 1 */}
        <Button onClick={() => { setColor("black"); }} style={{ background: color }} name="Button" /> 
    
        {/* Vito */}
         {/* 
        <Button onClick={() => props.onClick(0)} active={true} name="Button"/>
        <Button onClick={() => props.onClick(1)} active={true} name="Button"/>  
        */}
          
    </div>
  );
};

export default Buttons;
