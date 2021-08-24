import React from 'react';

// same as below
// export const Name = ({name}) => <h1>Hello {name}</h1>
// export const Time = (props) => <h2>It's {props.time}</h2>

export const Name = (props) => {
  const name = <h1>Coding in the {props.name}</h1> 
  return name
}

export const Time = (props) => {
  const time = <h2>It's {props.time}.</h2>
  return time
}