import React from 'react';
class Converter extends React.Component {
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
        if (to === "USD") {
            this.setState({ current: temp / 80 });
        } else if (to === "EURO") {
            this.setState({ current: temp / 90 });
        } else if (to === "INR") {
            this.setState({ current: temp / 1 });
        } else {
            alert("Choose one of currency");
        }
    }
    handleSubmit(event) {
        this.Convert();
        event.preventDefault();
    }


    render() {

        return (

            <div className = "part" >
            <h1> Currency Converter </h1>  
            <label > Amount IN INR </label>  
            <input value = { this.state.txtval } onChange = { this.handletxt }/ > 
            <select id = "sel"value = { this.state.value }onChange = { this.handleChange } >
                <option value = "select" > Select </option> 
                <option value = "INR" > INR </option> 
                <option value = "USD" > USD </option >
                <option value = "EURO" > EURO </option>  
            </select > 
            <button variant = "success"type = "button"onClick = { this.handleSubmit } > Convert </button>
            <div className = "curr" > <label > { this.state.current + " " + this.state.value } </label> </div > 
            </div>
        )
    }
}
export default Converter;