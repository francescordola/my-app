import React from "react";
import { useEffect, useState } from "react";
import "./styles.module.scss";

// DATE + TIME
const DateTime = () => {
  console.log("date");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("setInterval");
    setInterval(() => {
      //console.log('setDateTime')
      setDate(new Date());
    }, 1000 * 60);
  }, []);

  const time = (
    <p>
      {date.toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </p>
  );

  const data = <p>{date.toLocaleDateString()}</p>;

  return (
    <>
      {data}
      {time}
    </>
  );
};

// CITY
const Name = (props) => {
  //console.log('city')
  const name = <p>{props.name}</p>;
  return name;
};

export const Footer = () => {
  return (
    <footer>
      <Name name="City" />
      <DateTime />
    </footer>
  );
};
