import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CounterClass from './Component/counterClass';
import ListnKeysComp from './Component/listnkeys';
import Increment from './Component/Increment';
import FormComp from './Component/FormComp';
import FormCompSelect from './Component/FormCompSelect';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <React.StrictMode>

    <Increment />
    {/* <FormCompSelect /> */}
    {/* <FormComp /> */}
    {/* <CounterClass /> */}
    {/* <ListnKeysComp /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
