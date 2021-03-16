import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
const ele=<h1>Good Morning</h1>
const para=<p>This is a para</p>
console.log("heading"+ele);
ReactDOM.render(ele,document.getElementById("root"));
ReactDOM.render(para,document.getElementById("id1"));
