import React from "react";
class TempConverter extends React.Component {
  state = { temp: 0, towhat: "", convertedTemp: 0 };
  convertTemp = () => {
    this.setState({
      convertedTemp:
        this.state.towhat === "cf"
          ? this.state.temp * (9 / 5) + 32
          : this.state.towhat === "fc"
          ? (this.state.temp - 32) / (9 / 5)
          : "0"
    });
  };
  changeToWhat = (event) => {
    this.setState({ towhat: event.target.value });
  };
  changeTemp = (event) => {
    this.setState({
      temp: isNaN(event.target.value) ? 0 : parseFloat(event.target.value)
    });
  };
  render() {
    return (
      <>
        <h2 className="m-5">Temperature Converter</h2>
        <input
          className="ml-5"
          type="text"
          placeholder="0"
          onChange={this.changeTemp}
        />
        <select className="ml-5" onChange={this.changeToWhat}>
          <option>select</option>
          <option value="cf">Celsius to Fahrenheit</option>
          <option value="fc">Fahrenheit to Celsius</option>
        </select>
        <button className="ml-5" onClick={this.convertTemp}>
          Convert
        </button>
        <label className="ml-5">{this.state.convertedTemp}</label>
      </>
    );
  }
}

export default TempConverter;
