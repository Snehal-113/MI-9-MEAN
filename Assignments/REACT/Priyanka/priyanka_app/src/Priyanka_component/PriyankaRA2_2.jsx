import React from 'react'
class Temperature extends React.Component{
    constructor(props){
        super(props);
        this.state={tempValue:"",selectValue:"",amtVal:""};
        this.handleTemp=this.handleTemp.bind(this);
        this.handleDisplay=this.handleDisplay.bind(this);
        this.handlefehVal = this.handlefehVal.bind(this);
    }
    handleTemp(e){
            this.setState({selectValue:e.target.value});

    }
    handleDisplay(){
        alert("You have selected "+this.state.selectValue +" " +this.state.tempValue + "");
        this.returnTemp();
    }
    handlefehVal(e){
        this.setState({tempValue:e.target.value})
    }
    returnTemp(){
        var amt;
        if(this.state.selectValue === "Celcius"){
            amt = (this.state.tempValue*9/5)+32;
        }
        else
        amt = (this.state.tempValue-32)*5/9;
    
        this.setState({amtVal:amt});
    }
    render(){
        return(
            <form>
            <fieldset>
                <legend>Temperature Converter</legend>
                <lable>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Temp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</lable>
                <input type="text" value={this.state.tempValue} onChange={this.handlefehVal}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select value={this.state.selectValue} onChange={this.handleTemp}>
                    <option value="Celcius">Celcius</option>
                    <option value="Fahrenheit">Fahrenheit</option>
                
                </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" value="Temp Converter" onClick={this.handleDisplay}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" value={this.state.amtVal}/>&nbsp;&nbsp;&nbsp;&nbsp;
                <label></label>
            </fieldset>
            <br/>
            <hr/>
            </form>
        
            );
    }
}
export default Temperature;