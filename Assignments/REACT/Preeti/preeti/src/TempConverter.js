import React from "react";
import ReactDOM from "react-dom";

export default class TempConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: '',
      fahrenheit: '',
      wasCelsiusLastChanged : true
    };
  }
  handleCelsius = (e) => {
      this.setState({celsius: e.target.value, wasCelsiusLastChanged:true});
     e.preventDefault();
  }
  handleFahrenheit =(e) => {
    this.setState({fahrenheit: e.target.value, wasCelsiusLastChanged:false});
    e.preventDefault();
  }
  convert = () => {
     if(this.state.wasCelsiusLastChanged){
      this.setState({fahrenheit: (this.state.celsius * 1.8 ) + 32})
  }
  else{
    this.setState({celsius: (this.state.fahrenheit -32) * 5/9})
  }
}


  render() {
    console.log("called");
    const { celsius, fahrenheit } = this.state;

    return (
      <div>
        <h1>TempConverter</h1>
        <label>Celsius</label>
        <input type="text" value={celsius} id="celsius" onChange={this.handleCelsius}></input> &ensp;&ensp;
        <button type="button" onClick={this.convert}>Convert</button>&ensp;&ensp;
        <label>Fahrenheit</label>
        <input type="text" value={fahrenheit} onChange={this.handleFahrenheit} ></input>
      </div>
    );
  }
}
