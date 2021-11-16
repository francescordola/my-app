import React from "react";
import { useState } from "react";
import { Button } from "../Button/button";
//import style from "./navbar.module.scss";

// TEST 1
const Navbar  = () =>
  {
    const [index, setIndex] = useState(null);

    return (
        <div>
            <Button onClick={() => setIndex(0)} active={index === 0} name='button0' />
            <Button onClick={() => setIndex(1)} active={index === 1} name='button1' />
        </div>
    )
};

export default Navbar;
