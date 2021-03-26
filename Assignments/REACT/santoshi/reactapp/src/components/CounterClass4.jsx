import React from "react";
class PassArgument extends React.Component {
    state = { count: 0 };  
    incrementCount(temp) {
      this.setState({ count: this.state.count + 1 });
      console.log(temp);
    }  
    render() {
      var temp = 1;
            return (
          <>
          <button className="btn btn-primary m-3"onClick={() => {this.incrementCount(temp);}}>Increment</button>
          <span className={this.state.count === 0 ? "badge badge-danger" : "badge-warning"}>{this.state.count === 0 ? "---" : this.state.count}</span>
        </>
      );
    }
  }
  export default PassArgument;