//*****************time with class*************
import React from "react";
import ReactDom from "react-dom";
 class ShowTime extends React.Component{
   constructor(props){
    super (props)
    this.state = {date : new Date()}
   };
  render()
  {
    const Localtime = this.state.date.toLocaleTimeString();
    return(
      <div>
        <h1> Hello Everyone</h1>
        <h1> The Time is{Localtime}</h1>
      </div>
    );
   }
  }
     const etime = <ShowTime />
     ReactDom.render(etime,document.getElementById("root"));
   setInterval(ShowTime,1000);