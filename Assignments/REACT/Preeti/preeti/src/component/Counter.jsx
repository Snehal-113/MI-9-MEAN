import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            incrementValue: '',
            decrementValue: '',
            count: 0
        };
    }
    handleIncrementClick =() => {
        this.setState({count: this.state.count + 1 });
    }
    handleDecrementClick = () => {
        if(this.state.count <= 0){
        alert("value cannot be less than 0");
        }
        else{
        this.setState({count: this.state.count - 1 });
    }
}
    render(){
        const {incrementValue,decrementValue,count} = this.state;
      let color =  this.state.count === 0? "badge badge-danger" :"badge badge-primary";
        return(

        <div>
        <button type="button" className="btn btn-warning" value={incrementValue} onClick={this.handleIncrementClick}>Increment</button>
        <h2><span className={color}>{count}</span></h2>
        <button type="button" className="btn btn-warning"  value={decrementValue} onClick={this.handleDecrementClick}>Decrement</button>
        <h3>You have selected {count}</h3>
        </div>
        );
    }
}


