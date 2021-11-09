import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/app";
import { Button } from "./components/Button/button";

const rootElement = document.getElementById("root");

//Ivan
const Buttons = () => {
  return (
    <div>
      {/* cosa succede quando clicco sul bottone, come si comportail componente? */}
      
      {/* Vito */}
      {/* <Button name="Button" onClick={() => props.onClick(0)} active={true} />
      <Button name="Button" onClick={() => props.onClick(1)} active={false}  /> 
      */}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Buttons />
    <App />
  </React.StrictMode>,
  rootElement
);
