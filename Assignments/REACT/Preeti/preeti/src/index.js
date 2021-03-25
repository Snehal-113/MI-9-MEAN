import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CurrencyConverter from './CurrencyConverter';
import  TempConverter from './TempConverter';
import Counter from './Counter';


ReactDOM.render(
  <React.StrictMode>
    <div>
 <CurrencyConverter />
 <TempConverter />
 <Counter />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
