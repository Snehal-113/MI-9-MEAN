import React from "react";
import ReactDOM from "react-dom";

class CurrencyCon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { txtValue: "", selectValue: "", amtVal: "" };
    this.handleCurrency = this.handleCurrency.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
    this.handleAmtVal = this.handleAmtVal.bind(this);
  }
  handleCurrency(e) {
    this.setState({ selectValue: e.target.value });
  }
  handleDisplay() {
    alert(
      "You have selected " +
        this.state.selectValue +
        " " +
        this.state.txtValue +
        ""
    );
    this.returnRupees();
  }
  handleAmtVal(e) {
    this.setState({ txtValue: e.target.value });
  }
  returnRupees() {
    var amt;
    if (this.state.selectValue === "United States Dollar") {
      amt = this.state.txtValue * 72.58;
    } else if (this.state.selectValue === "Afghan Afghani") {
      amt = this.state.txtValue * 0.95;
    } else if (this.state.selectValue === "Australian Dollar") {
      amt = this.state.txtValue * 56.13;
    } else if (this.state.selectValue == "Canadian Doller") {
      amt = this.state.txtValue * 58.13;
    } else if (this.state.selectValue == "Bangladeshi Taka") {
      amt = this.state.txtValue * 0.87;
    } else {
      amt = this.state.txtValue * 0.37;
    }
    this.setState({ amtVal: amt });
  }
  render() {
    return (
      <div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <input
          type="text"
          value={this.state.txtValue}
          onChange={this.handleAmtVal}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select value={this.state.selectValue} onChange={this.handleCurrency}>
          <option value="United States Dollar">United States Dollar</option>
          <option value="Afghan Afghani">Afghan Afghani</option>
          <option value="Australian Dallar">Australian Dallar</option>
          <option value="Canadian Doller">Canadian Doller</option>
          <option value="Bangladeshi Taka">Bangladeshi Taka</option>
        </select>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="button"
          value="Currency Converter"
          onClick={this.handleDisplay}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" value={this.state.amtVal} />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label>Rs.</label>
        <hr
          style={{
            color: "black",
            backgroundColor: "black",
            height: 5,
          }}
        />
      </div>
    );
  }
}
export default CurrencyCon;
