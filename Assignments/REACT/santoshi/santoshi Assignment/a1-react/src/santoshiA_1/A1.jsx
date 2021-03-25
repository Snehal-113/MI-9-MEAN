import React from "react";class IncDec extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
      this.incrementMethod = this.incrementMethod.bind(this);
      this.decrementMethod = this.decrementMethod.bind(this);
    }
    zero() {
      alert("Cann't go below zero");
      return 0;
    }
    incrementMethod() {
      this.setState({ count: this.state.count + 1 });
    }
    decrementMethod() {
      this.setState({
        count: this.state.count - 1 < 0 ? this.zero() : this.state.count - 1
      });
    }
    render() {
      return (
        <>
          <span>
            <button
              className="btn btn-primary m-3"
              onClick={this.incrementMethod}
            >
              Increment
            </button>
          </span>
          <span
            className={this.state.count <= 0 ? "badge badge-danger" : "badge badge-warning"}>{this.state.count}</span>
          <span>
            <button className="btn btn-primary m-3"onClick={this.decrementMethod}>Decrement</button></span>
            <h4>Items Present :{" "}<span className={this.state.count <= 0 ? "badge badge-danger": "badge badge-warning"}>{this.state.count}</span></h4></>
      );
    }
  }
  export default IncDec;