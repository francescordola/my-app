import React from 'react';
import { useEffect, useState } from 'react';

//CITY
const Name = (props) => {
    console.log('city')
    const name = <h1>{props.name}</h1> 
    return name
}

//DATE + TIME
const DateTime = () => {
    const [ date, setDateTime ] = useState(new Date());
    const tick = () => { setDateTime(new Date()) };

    useEffect(() => { 
        setInterval(() => tick(),1000)
    }, []);
    return <>
    <h2>{date.toLocaleDateString()}</h2>
    <h2>{date.toLocaleTimeString()}</h2>
    </>
} 

export const Footer = () => {
    return (
    <footer>
        <Name name="City" />
        <DateTime />
    </footer>)
}