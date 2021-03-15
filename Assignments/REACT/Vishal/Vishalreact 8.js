import React from "react";
import ReactDom from "react-dom";
class Greeting extends React.Component {
    render() {
        return (
            <div>
                <h2>GOOD AFTERNOON!!</h2>
                <h3>This is class component</h3>
            </div>
        );
    }
}
const comp_fun_element = <Greeting />;
ReactDom.render(comp_fun_element, document.getElementById("root"));
