import React from 'react';
import ReactDOM from 'react-dom';
import TwoButton from './Components/Button';
import Checkbox from './Components/Checkbox';
import Inputtext from './Components/Inputtext';

ReactDOM.render( < React.StrictMode >
    <
    TwoButton / >
    <
    Checkbox / >
    <
    Inputtext / >
    <
    /React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();