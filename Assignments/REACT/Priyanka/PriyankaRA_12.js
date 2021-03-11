import React from "react";
import ReactDom from "react-dom";
   class EventClass extends React.Component{
      func1(){
         console.log("You have clicked")
      }
   
   render(){
      return(     
      <button onClick={this.func1}>Click me</button>
         );
      }
   }
      ReactDom.render(<EventClass />,document.getElementById("root"));
  
