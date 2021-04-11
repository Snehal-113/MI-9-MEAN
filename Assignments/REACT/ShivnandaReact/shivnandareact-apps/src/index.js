import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './ShivComponent/AssignmentQ1';
import Currency from './ShivComponent/Assignent2_Q1';
import Temp from './ShivComponent/Assignment2_Q2';
ReactDOM.render(
  <React.StrictMode>
    <Counter/>
    <Currency />
    <Temp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
