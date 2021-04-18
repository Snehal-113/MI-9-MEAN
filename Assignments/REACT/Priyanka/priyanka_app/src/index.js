import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './Priyanka_component/PriyankaRA1_1';
import Currency from './Priyanka_component/PriyankaRA2_1';
import Temperature from './Priyanka_component/PriyankaRA2_2';
import LoginPage from './Priyanka_component/PriyankaRA3';
import RadioButton from './Priyanka_component/PriyankaRA4_1';
import Radio from './Priyanka_component/PriyankaRA4_2';
import Priyanka from './Priyanka_component/PriyankaRA4_3';
import Button from './Priyanka_component/PriyankaRA_5';

ReactDOM.render(
  <React.StrictMode>
    <Counter />
    <Currency />
    <Temperature />
    <LoginPage />
    <RadioButton />
    <Radio />
    <Priyanka />
    <Button />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
