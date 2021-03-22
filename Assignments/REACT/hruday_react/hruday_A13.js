import React from "react";
import ReactDom from "react-dom";

class EventClass extends React.Component{
  action(){
    alert("Hey ! You Clicked the Button..");
  }
  render(){
    return(
    <button onClick={this.action}>Click</button>
  );
}
}
 ReactDom.render(<EventClass />, document.getElementById("root"));