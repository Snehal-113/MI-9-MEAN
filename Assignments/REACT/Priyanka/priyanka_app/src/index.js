import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import Counter from './Priyanka_component/PriyankaRA1_1'
import Currency from './Priyanka_component/PriyankaRA2_1'
import Temperature from './Priyanka_component/PriyankaRA2_2'

ReactDOM.render(
  <React.StrictMode>
    <Counter />
    <Currency />
    <Temperature />


ReactDOM.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
