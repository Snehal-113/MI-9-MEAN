import React, { Component } from 'react';

class TwoButton extends Component {
    constructor(props) {
        super(props);
        this.style = {
            backgroundColor: "red",
            color: "black",
            width: "50px",
            height: "50px",
            border: "2px solid black",
            borderRadius: "10px",
            padding: "2px"
        };
        this.style2 = {
            backgroundColor: "blue",
            color: "black",
            width: "50px",
            height: "50px",
            border: "2px solid black",
            borderRadius: "10px",
            padding: "2px"

        };
        this.state = { value: "" }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event) => {
        this.setState({ value: event.target.innerText });
    }

    render() {
        return ( <
            div >
            <
            div className = "text-center" >
            <
            button style = { this.style }
            onClick = { this.handleClick } >
            RED <
            /button> <
            button style = { this.style2 }
            onClick = { this.handleClick } >
            BLUE <
            /button> <
            /div><div> <
            span > { "You have clicked " + this.state.value } < /span> <
            /div> <
            /div>
        );
    }
}

export default TwoButton;