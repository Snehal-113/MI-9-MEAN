import React from "react";
import ReactDom from "react-dom";
class ShowTime extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    render(){
        let loctime = this.state.date.toLocaleTimeString();
        return(
            <div>
                <h2>HelLo Everyone</h2>
                <h3> Time: Now it's {loctime} O'Clock</h3>
            </div>
        );
    }
}
const comp_fun_element=<ShowTime />;
ReactDom.render(comp_fun_element,document.getElementById("root"));