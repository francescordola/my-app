import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";
import Emoji from "./components/Emoji";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    {/* <Emoji /> */}
    <About />
    <Footer />
  </React.StrictMode>,
  rootElement
);

//cont
// position: relative;

//footer
// bottom: 0 
// Position absolute
// left/rught 0
