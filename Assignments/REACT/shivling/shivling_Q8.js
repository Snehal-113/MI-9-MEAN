import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
//local time//
class Time extends React.Component{
  constructor(props){
    super(props);
    this.state={date: new Date()};
  }
  render()
  {
  let loctime=this.state.date.toLocaleTimeString();
return (
  <div>
    <h2>Hello everyone,are u ok </h2>
    <h3>now it is {loctime} 0'clock please attaintaion</h3>
  </div>
);  
  
}  
}
  const time_element=<Time date = {new Date()} />
  ReactDOM.render(time_element, document.getElementById("root"));
   

  setInterval(Time ,1000);