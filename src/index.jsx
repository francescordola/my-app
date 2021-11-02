import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "./components/Footer/footer";
import Emoji from "./components/Emoji";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Footer />
    <Emoji />
  </React.StrictMode>,
  rootElement
);
