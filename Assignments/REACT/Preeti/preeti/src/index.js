import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyConverter from './component/CurrencyConverter';
import  TempConverter from './component/TempConverter';
import Counter from './component/Counter';
import  'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <div>
 <Counter />
 <hr></hr>
 <CurrencyConverter />
 <hr></hr>
 <TempConverter />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
