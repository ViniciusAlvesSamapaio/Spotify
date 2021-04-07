import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom'; 
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

