import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer/footer";
import Board from "./components/Board/board";
// import Emoji from "./components/Emoji";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    {/* <Emoji /> */}
    <Board />
    <Footer />
  </React.StrictMode>,
  rootElement
);


/* 

contenitore con tutti i componenti dentro 
- position: relative;

*/