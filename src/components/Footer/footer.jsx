import React from "react";
import { useEffect, useState } from "react";
import "./styles.module.scss";

// DATE + TIME
const DateTime = () => {
  console.log("date");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("setInterval");
    const id = setInterval(() => {
      //console.log('setDateTime')
      setDate(new Date());
    }, 1000 * 60);

    // IVAN
    // ad ogni setinterval viene dato un id.Questo id lo uso per clear quando non ho più bidogno che l'useEffect succeda, quindi quando volgio che smetta di funzionare.
    // Per ex quando vado in un'altra pagina e non ho più quel componente
    return () => {
      clearInterval(id);
    };
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

const Footer = () => {
  return (
    <footer>
      <Name name="City" />
      <DateTime />
    </footer>
  );
};

export default Footer;
