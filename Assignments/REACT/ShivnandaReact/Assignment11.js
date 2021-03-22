import React from "react";
import ReactDom from "react-dom";
class EventClass extends React.Component{
    funct(){
        console.log("You Have Clicked");
    }
    render(){
        return(
            <button onClick = {this.funct}> Click Here</button>
        );
    }
}
ReactDom.render(<EventClass/>,document.getElementById("root"));
