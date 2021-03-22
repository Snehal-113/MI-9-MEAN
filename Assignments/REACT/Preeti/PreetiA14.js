import React from "react";
import ReactDOM from "react-dom";

class EventClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
    this.toggleFunc = this.toggleFunc.bind(this);
  }
  toggleFunc() {
    console.log("You have clicked");
    this.setState((preState) => ({ toggle: !preState.toggle }));
  }
  render() {
    return (
      <button type="button" onClick={this.toggleFunc}>{this.state.toggle ? "ON" : "OFF"}
      </button>
    );
  }
}

ReactDOM.render(<EventClass />, document.getElementById("root"));
