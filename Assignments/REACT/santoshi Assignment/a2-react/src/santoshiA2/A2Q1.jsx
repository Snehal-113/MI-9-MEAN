import React from 'react'
class Currency extends React.Component{
    constructor(props){
        super(props);
        this.state={txtValue:"",selectValue:"",amtVal:""};
        this.handleCurrency=this.handleCurrency.bind(this);
        this.handleDisplay=this.handleDisplay.bind(this);
        this.handleAmtVal = this.handleAmtVal.bind(this);
    }
    handleCurrency(e){
            this.setState({selectValue:e.target.value});

    }
    handleDisplay(){
        alert("You have selected "+this.state.selectValue +" " +this.state.txtValue + "");
        this.returnRupees();
    }
    handleAmtVal(e){
        this.setState({txtValue:e.target.value})
    }
    returnRupees(){
        var amt;
        if(this.state.selectValue === "United States Dollar"){
            amt = this.state.txtValue * (72.58);
        }
        else if (this.state.selectValue ==="Australian Dallar"){
            amt = this.state.txtValue *(56.13);
        }
        else if (this.state.selectValue === "Pakistani Rupee"){
            amt = this.state.txtValue * (0.46);
        }
        else if (this.state.selectValue == "Russian Rubble"){
            amt = this.state.txtValue * (0.99);
        }
        else{
            amt = this.state.txtValue * (0.37);
        }
        this.setState({amtVal:amt});
    }
    render(){
        return(
            <form>
            <fieldset>
                <legend>Currency Converter</legend>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount in Rs</p>
                <input type="text" value={this.state.txtValue} onChange={this.handleAmtVal}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select value={this.state.selectValue} onChange={this.handleCurrency}>
                    <option value="United States Dollar">United States Dollar</option>
                    <option value="Australian Dallar">Australian Dallar</option>
                    <option value="Pakistani Rupee">Pakistani Rupee</option>
                    <option value="Russian Rubble">Russian Rubble</option>
                    <option value="Sri Lanka Rupee">Sri Lanka Rupee</option>
                </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" value="Currency Converter" onClick={this.handleDisplay}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" value={this.state.amtVal}/>&nbsp;&nbsp;&nbsp;&nbsp;
                <label>Rs.</label>
            </fieldset>
            </form> );
    }
}
export default Currency;