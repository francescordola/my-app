import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/app";
import { Button } from "./components/Button/button";

const rootElement = document.getElementById("root");

//Ivan
const Buttons = () => {
  return (
    <div>
      {/* cosa succede quando clicco sul bottone? */}
      {/* <Button name="Button" onClick={handleClick} active={false}/> */}
      <Button name="Button" active={false} />
      <Button name="Button" active={false} />
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
