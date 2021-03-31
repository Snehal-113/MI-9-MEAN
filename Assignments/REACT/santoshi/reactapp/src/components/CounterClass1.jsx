import React from "react";
class CounterClass extends React.Component {
    // constructor() {
    //     super();
    //     this.state = { count: 0 };
    //     this.handlecount = this.handlecount.bind(this);
    // }
    state = { count: 0 };
    frmtStyle = { fontSize: 20 };
    // handlecount() {
    //     console.log("u have clicked" + this.state.count);
    //     this.setState((prestate) => ({ count: prestate.count + 1 }));
    // }
    handlecount = () => {
        this.setState({ count: this.state.count + 1 });
    };
    returnvalue() {
        const { count } = this.state;
        return count === 0 ? "-" : count;
    }
    render() {
        let class_data = this.state.count === 0 ? "badge badge-warning" : "badge badge-secondary";
        return (
            <div>
                <button className="btn btn-primary m-3" onClick={this.handlecount}>
                    increment
                </button>
                &nbsp;&nbsp;
                <span className={class_data} style={this.frmtStyle}>
                    <b>{this.returnvalue()}</b>
                </span>
            </div>
        );
    }
}
export default CounterClass;