import React from "react";

class IncDec extends React.Component {
	state = {count : 0};

	incrementCount=()=> {
		this.setState({count:this.state.count+1});
	}
	decrementCount=()=> {
		let a;
		this.state.count<=0?a="I am here for nothing":this.setState({count:this.state.count-1});
	}

	render() {
		var status = this.state.count===0?"bg-danger":"bg-secondary";
		return(
			<>
			<h2>Counter</h2>
			<span><button className="btn btn-primary m-2" onClick={this.incrementCount}>Increment</button></span>
			<span className={"badge "+status}>{this.state.count===0?"---":this.state.count}</span>
			<span><button className="btn btn-primary m-2" onClick={this.decrementCount}>Decrement</button></span>
			</>
		);
	}
}

export default IncDec; 