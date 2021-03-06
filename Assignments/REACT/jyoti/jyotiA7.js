import React from 'react';
import ReactDOM from 'react-dom';

class ShowTime extends React.Component{
  constructor(props){
  super(props);
  this.state={date:new Date()};
} 
render(){
  let  loctime = this.state.date.toLocaleTimeString();
  return(
    <div>
      <h2>Hello Everyone</h2>
      <h3>Now it is {loctime} O'Clock</h3>
    </div>
  );
}
}

const time_element = <ShowTime date={new Date()}/>;
ReactDOM.render(time_element,document.getElementById("root"));