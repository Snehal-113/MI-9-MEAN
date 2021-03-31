import React from "react";
import ReactDom from "react-dom";

 class EventClass extends React.Component{
   constructor(props){
     super(props);
     this.state={toggle:true};
     this.toggleFun = this.toggleFun.bind(this);
   }
   toggleFun(){
     console.log("you have clicked");
     this.setState(prevState=>({toggle:!prevState.toggle}));
   }
   render(){
     var cap;
     if(this.state.toggle){
       cap ="ON";
     }
     else
     {
       cap = "OFF";
     }
     return(
     <button onClick={this.toggleFun}>{cap}</button>
     );
   }
 }
ReactDom.render(<EventClass />,document.getElementById("root"));