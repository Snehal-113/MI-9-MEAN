import React from 'react'
class FormComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:""};
        this.handleValue = this.handleValue.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
    }
    handleValue(event){
        console.log("1"+event.target);
        console.log("2"+event.target.value);
        this.setSelect({value: event.target.value});
    }
    handleDisplay(event){
        alert("Hello" +this.state.value);
        event.preventDefault();                                            
    }
    render(){
        return (<form onSubmit={this.handleDisplay}>
            <label>Name:</label>
            <input type="text" value={this.state.value} onChange={this.handleValue} />
            <input type="submit" value="submit" />
        </form>
        );
    }
}
export default FormComp;