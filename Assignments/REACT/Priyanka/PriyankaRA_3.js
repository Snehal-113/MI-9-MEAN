import React from "react";
import ReactDom from "react-dom";
class Greetings extends React.Component{
    render(){
        return(
        <div>
          <h2>Godd Afternoon</h2>
          <h3>This is a class componet</h3>
        </div>
    );
        }
}
const comp_fun=<Greetings />;
ReactDom.render(comp_fun,document.getElementById("root"));