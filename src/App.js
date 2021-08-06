import React from 'react';
//import Footer from './components/Footer';

// const App = () => {
//   return (
//     <React.Fragment>
//       <div className="container">Hello World</div>
//       <main></main>
//      <Footer />
//     </React.Fragment>
//   );
// }

// export default App;


const App = () => {
  const element = 
  <>
    <h1>Hello World</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </>
  return (element)
}

setInterval(App, 1000);

export default App;
