// imports react and react-dom packages 
import React from 'react';
import ReactDOM from 'react-dom';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
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
