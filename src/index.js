import React from 'react';
import ReactDOM from 'react-dom';
import {Time, Name} from './App';

const render = () => {

  ReactDOM.render(
    <React.StrictMode>
      <Name name="You"/>
      <Time time={new Date().toLocaleTimeString()} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

setInterval(render, 1000);