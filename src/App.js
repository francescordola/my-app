import React from 'react';

/* FOOTER
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <div className="container">Hello World</div>
      <main></main>
     <Footer />
    </React.Fragment>
  );
}
export default App;
*/


/* TIMER
const App = () => {
  const element = 
  <>
    <h1>Hello World</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </>
  return (element)
}
export default App;
*/


/* PROPS 1
const App = (props) => {
  const element = 
  <>
    <h1>Hello {props.name}</h1>
    <h2>It is {props.time}.</h2>
  </>
  return (element)
}

export default App;
*/

// PROPS 2
export const Name = (props) => {
  const name = <h1>Hello {props.name}</h1>
  return (name)
}

export const Time = (props) => {
  const time = <h2>It's {props.time}.</h2>
  return (time)
}