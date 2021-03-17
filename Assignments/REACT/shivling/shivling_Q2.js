import React from "react";
import ReactDom from "react-dom";
class Greeting extends React.Component {
    render() {
        return (
             <div>
            <h1> Using Class </h1>
             <h1> Hello </h1>
             <h2>  To React World </h2> 
             </div>
        );
    }
}
const comp = < Greeting /> ;
ReactDom.render(comp, document.getElementById('header'));