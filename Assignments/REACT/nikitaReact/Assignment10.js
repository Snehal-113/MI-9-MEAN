import React from "react";
import ReactDom from "react-dom";

class ShowTime extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
        console.log(new Date());
    }
    componentDidMount(){
       this.id=setInterval(() =>this.setTimer(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.id);
    }
    setTimer(){
        this.setState({date:new Date});
    }
    render(){
        let loctime=this.state.date.toLocaleTimeString();

        return(
            <div>
                <h2>Hello Everyone</h2>
                <h3>Now it is {loctime} O'clock</h3>
            </div>
        );
    }
}
const element=<ShowTime/>;
ReactDom.render(element,document.getElementById("root"));