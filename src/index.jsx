import React from 'react';
import ReactDOM from 'react-dom';
import { Footer } from './components/Footer';
import Emoji from './components/emoji';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Footer />
    <Emoji/>
  </React.StrictMode>,
  rootElement
);
