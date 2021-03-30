import React from 'react';
class TConverter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: "", txtval: "", current: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handletxt = this.handletxt.bind(this);
        this.Convert = this.Convert.bind(this);

    }
    handletxt(event) {
        this.setState({ txtval: event.target.value });
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    Convert() {
        const temp = this.state.txtval;
        const to = this.state.value;
        if (to === "Farenheit") {
            this.setState({ current: ((temp * 9 / 5) + 32) });
        } else if (to === "Kelvin") {
            this.setState({ current: (temp + 273.5) });
        } else {
            alert("Choose one of Scale");
        }
    }
    handleSubmit(event) {
        this.Convert();
        event.preventDefault();
    }


    render() {

        return (

            <div className = "part" >
            <h1> Temperature Converter </h1>  
            <label > Temperature in Celsius </label>  
            <input value = { this.state.txtval }onChange = { this.handletxt }/>  
            <select id = "sel"value = { this.state.value }onChange = { this.handleChange } >
                <option value = "select" > Select </option> 
                <option value = "Celsius" > Celsius </option>  
                <option value = "Farenheit" > Farenheit </option> 
                <option value = "Kelvin" > Kelvin </option> 
            </select> <button variant = "success"type = "button"onClick = { this.handleSubmit } > Convert </button>  <div className = "curr" >
            <label> { this.state.current + " " + this.state.value } </label>  </div> 
            </div>
        )
    }
}
export default TConverter;