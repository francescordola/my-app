import React from 'react';
import ReactDOM from 'react-dom';
import { Footer } from './components/Footer';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Footer />
    {/* <div>Test Hello World</div> */}
  </React.StrictMode>,
  rootElement
);
