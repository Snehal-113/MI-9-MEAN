import React from "react";
class CurrencyConverter extends React.Component {
  state = { money: 0, currency: "", convertedMoney: 0 };
  convertRupee = () => {
    this.setState({
      convertedMoney:
        this.state.currency === "dollar"
          ? this.state.money * 0.014
          : this.state.currency === "euro"
          ? this.state.money * 0.012
          : this.state.currency === "pound"
          ? this.state.money * 0.0099
          : "0"
    });
  };
  changeCurrency = (event) => {
    this.setState({ currency: event.target.value });
  };
  changeMoney = (event) => {
    this.setState({
      money: isNaN(event.target.value) ? 0 : parseFloat(event.target.value)
    });
  };
  render() {
    return (
      <>
        <h2 className="m-5">Currency Converter</h2>
        <input
          className="ml-5"
          type="text"
          placeholder="0"
          onChange={this.changeMoney}
        />
        <select className="ml-5" onChange={this.changeCurrency}>
          <option>select</option>
          <option value="dollar">US Dollar</option>
          <option value="euro">Euro</option>
          <option value="pound">Pound</option>
        </select>
        <button className="ml-5" onClick={this.convertRupee}>
          Convert
        </button>
        <label className="ml-5">{this.state.convertedMoney}</label>
      </>
    );
  }
}

export default CurrencyConverter;
