import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer/footer";
import Board from "./components/Board/board";
import Button from "./components/Button/button";
// import Emoji from "./components/Emoji";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    {/* <Emoji /> */}
    <Button name="ciao" />
    <Board />
    <Footer />
  </React.StrictMode>,
  rootElement
);
