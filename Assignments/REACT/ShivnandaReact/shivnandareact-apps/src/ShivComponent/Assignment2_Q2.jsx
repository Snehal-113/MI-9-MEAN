import React from 'react'
class Temp extends React.Component{
    constructor(props){
        super(props);
        this.state={tempValue:"",selectValue:"",amtVal:""};
    }
    handleTemp=(e)=>{
            this.setState({selectValue:e.target.value});

    }
    handleDisplay=()=>{
        alert("You have selected "+this.state.selectValue +" " +this.state.tempValue + "");
        this.convertTemp();
    }
    handlefehVal=(e)=>{
        this.setState({tempValue:e.target.value})
    }
    convertTemp=()=>{
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
        <div>
            <h3>Assignment2 Q2</h3>
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
        </div>
        
            );
    }
}
export default Temp;