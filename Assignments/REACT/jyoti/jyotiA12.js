import React from 'react';
import ReactDOM from 'react-dom';

class EventClass extends React.Component{
    func1 (){
        console.log("you have clicked");
        alert("you clicked");
    };
    render(){
        return(
        <button onClick={this.func1}>click me</button>
    );
        }
}
ReactDOM.render(<EventClass />,document.getElementById("root"));