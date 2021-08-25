import React, { useState } from 'react';
import { useEffect } from 'react';

// CITY
const Name = (props) => {
    console.log('ççççç')
    const name = <h1>{props.name}</h1> 
    return name
}

//CLOCK
const Time = () => {
    const [ dateTime, setDateTime ] = useState(new Date()) 
    const tick = () => { setDateTime(new Date()) }
    useEffect(() => {
        setInterval(() => tick(),1000);
    }, [])
  return <h2>{dateTime.toLocaleTimeString()}</h2>
} 

export const Footer = () => {
    return (<footer>
        <Name name="City" />
        <Time />
    </footer>)
}