import React from 'react';
import { useEffect, useState } from 'react';
import './styles.module.scss'


// DATE + TIME
const DateTime = () => {
    //console.log('date')
    const [ date, setDateTime ] = useState(new Date());

    useEffect(() => { 
        console.log ('setInterval')
        
        setInterval(() => {
            console.log('setDateTime')
            setDateTime(new Date())
        }, 1000)
        
    }, []);

     /*  dentro alla funzione con useState scrivo quello che succede in background
    quello che stampo lo gestisco al di fuori della funzione con gli Hooks

    // const DateFormatted = ({ date }) => <h2>{date.toLocaleDateString()}</h2>
    // const TimeFormatted = ({ date }) => <h2>{date.toLocaleTimeString()}</h2>
    */

    const time = <h2>{date.toLocaleTimeString()}</h2>
    const data = <h2>{date.toLocaleDateString()}</h2>

    return <>
        {data}
        {time}

        {/* <DateFormatted date={date} /> 
        <TimeFormatted date={date} /> */}
    </>
} 

// CITY
const Name = (props) => {
    //console.log('city')
    const name = <h1>{props.name}</h1> 
    return name
}

export const Footer = () => {
    return (
    <footer>
        <Name name='geolocation' />
        <DateTime />
    </footer>)
}

