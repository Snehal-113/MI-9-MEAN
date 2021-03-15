import React from "react";
import ReactDom from "react-dom";

class EventClass extends React.Component{

    func1(){
        console.log(" clicked");
    }

render(){
    return(
          <button onClick={this.func1()}>click me</button>
    );  
}
}
        
ReactDom.render(<EventClass/>,document.getElementById("root"));
  
