import React from 'react'
class CurrencyApp extends React.Component{
    constructor(props){
        super(props);
        this.state={txtValue:"",selectValue:"",amtVal:""};
        this.handleCurrency=this.handleCurrency.bind(this);
        this.handleDisplay=this.handleDisplay.bind(this);
        this.handleAmtVal=this.handleAmtVal.bind(this);
    }
    handleCurrency(e){
        this.setState({selectValue:e.target.value});
    }
    handleDisplay(){
        alert("You have selected" +this.state.selectValue+""+this.state.txtValue+"");
        this.returnRupees();
    }
    handleAmtVal(e){
        this.setState({txtValue:e.target.value})
    }
    returnRupees(){
        var amt;
        if(this.state.selectValue==="USD"){
            amt = this.state.txtValue * (72.58);
        }
        else if(this.state.selectValue==="AD"){
            amt = this.state.txtValue * (56.13);
        }
        else if(this.state.selectValue==="PR"){
            amt = this.state.txtValue * (0.46);
        }
        else if(this.state.selectValue==="RR"){
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
                    <legend>Currency Converter Application</legend>
                    <label>Amount :</label>
                    <input type="text" value={this.state.txtValue} onChange={this.handleAmtVal}/>
                    &nbsp;&nbsp;&nbsp;
                    <label>Select Currency :</label>
                    <select value={this.state.selectValue} onChange={this.handleCurrency}>
                        <option value="USD">USD</option>
                        <option value="AD">AD</option>
                        <option value="PR">PR</option>
                        <option value="RR">RR</option>
                        <option value="SLR">SLR</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;
                    <input type="button" value="Currency Converter" onClick={this.handleDisplay}/>
                    &nbsp;&nbsp;&nbsp;
                    <label>Amount in Rupees :</label>
                    <input type="text" value={this.state.amtVal}/>
                </fieldset>
                <hr/>
                <br/>
            </form>
        );
    }
}
export default CurrencyApp;