import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <div>
         <h1> hello world...!</h1>
  <p>how are you</p>
  <b>i am fine</b>
  <p>oklet </p>

    </div>,
 
  document.getElementById('root')
);


function ShowTime(){
  let date =new Date().toLocaleDateString();
  let day=new Date().getDate();
  let month=new Date().getMonth();
  let dt=new Date().getDate();
  let year=new Date().getFullYear();
  let hh=new Date().getHours();
  let mm=new Date().getMinutes();
  let ss=new Date().getSeconds();
  let d;
  let m;
  switch(day){
    case 1: d="monday"
    break;

    case 2: d="Tuesday"
    break;

    case 3: d="wednesday"
    break;

    case 4: d="Thursday"
    break;

    case 5: d="friday"
    break;

    case 6: d="saturday"
    break;

    case 7: d="sunday"
    break;
  }

  switch(month){
    case 0 : m="Jan"
    break;

    case 1: m="Feb"
    break;

    case 2 : m="March"
    break;

    case 3 : m="April"
    break;

    case 4 : m="May"
    break;

    case 5 : m="Jun"
    break;

    case 6 : m="Jully"
    break;

     case 7: m="Agust"
     break;

     case 8 : m="Suptem"
     break;

     case 9 : m="Oct"
     break;

     case 10 : m="Nov"
     break;

     case 11 : m="Dec"
     break;
  }

  


const element = (
  <div>
    <h1 >Hello</h1>
    <h1> Today is {d}</h1>
    <h1>This Month is {m}</h1>
    <h2>today date is {day} {m} {year}</h2>
    <h2> time is {hh}:{mm}:{ss}</h2>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
}
setInterval(ShowTime,1000)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 