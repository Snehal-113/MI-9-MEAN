import React from 'react';
import ReactDOM from 'react-dom';


class CurrencyConverter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currency1: '',
            currency2: '',
            amount1: '',
            amount2: ''
        };
    }
    fromAmount = (e) => {
        this.setState({ amount1: e.target.value });
        console.log(e.target.value);
        e.preventDefault();
    }
    fromCurrency = (e) => {
        this.setState({ currency1: e.target.value });
        console.log(e.target.value);
        this.updateAmount2(e.target.value, this.state.currency2);
        e.preventDefault();
    }
    toCurrency = (e) => {
        this.setState({ currency2: e.target.value });
        console.log(this.state.currency2);
        this.updateAmount2(this.state.currency1, e.target.value);
        e.preventDefault();
    }
    updateAmount2 = (c1, c2) => {
        if(c1 == "USD" && c2 == "INR"){
            this.setState({amount2: this.state.amount1 * 72.58});
            console.log(this.state.amount2);
        }
       else if(c1 == "USD" && c2 == "EUR"){
            this.setState({amount2: this.state.amount1 * 0.84});
            console.log(this.state.amount2);
        }
        else if(c1 == "EUR" && c2 == "USD"){
            this.setState({amount2: this.state.amount1 * 1.19});
            console.log(this.state.amount2);
        }
        else if(c1 == "EUR" && c2 == "INR"){
            this.setState({amount2: this.state.amount1 * 86.38});
            console.log(this.state.amount2);
        }
        else if(c1 == "INR" && c2 == "USD"){
            this.setState({amount2: this.state.amount1 * .014});
            console.log(this.state.amount2);
        }
        else if (c1 == "INR" && c2 == "EUR"){
            this.setState({amount2: this.state.amount1 * .012});
            console.log(this.state.amount2);
        }
        
    }
    render() {
        return (
            <form>
                <h1>CurrencyConverter</h1>
                <input type="text" value={this.state.amount1} onChange={this.fromAmount} ></input> &ensp;&ensp;&ensp;&ensp;
                <select value={this.state.currency1} onChange={this.fromCurrency}>
                    <option value="blank">select</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="INR">INR</option>
                </select><br /><br />
                <input type="text" value={this.state.amount2} onChange={this.toAmount} disabled></input> &ensp;&ensp;&ensp;&ensp;
                <select value={this.state.currency2} onChange={this.toCurrency}>
                <option value="blank">select</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="INR">INR</option>
                </select>
            </form>
        )
    }
}
export default CurrencyConverter;
