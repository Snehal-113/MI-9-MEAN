import React from "react";
import ReactDom from "react-dom";
class EventClass extends React.Component{
    constructor(props){
        super(props);
        this.state={toggle:true};
        this.toggleFun = this.toggleFun.bind(this);
    }
    toggleFun(){
        console.log("You Have Clicked");
        this.setState(prevState=>({toggle:!prevState.toggle}));
    }
    render(){
        return(
        <button onClick = {this.toggleFun}> {this.state.toggle?'ON':'OFF'}</button>
        );
    }
}
ReactDom.render(<EventClass/>,document.getElementById("root"));
