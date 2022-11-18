// imports react and react-dom packages 
import React from 'react';
import ReactDOM from 'react-dom';
// imports stylesheet
import './index.css';
// imports app from App.js
import App from './App';

// renders the app defined in App.js
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
