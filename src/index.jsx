import React from 'react';
import ReactDOM from 'react-dom';
import {Time, Name} from './App';
import {Footer} from './components/Footer';

const rootElement = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Name name="pine grove" />
      <Time time={new Date().toLocaleTimeString()} />
      <Footer />
    </React.StrictMode>,
    rootElement
  );
}

setInterval(render, 1000);



