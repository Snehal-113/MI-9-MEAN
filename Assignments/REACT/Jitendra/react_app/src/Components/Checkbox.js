import React from 'react';
class Checkbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: "",current:"nothing"};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Choice = this.Choice.bind(this);

    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    Choice() {
        const to = this.state.value;
        if (to === "Pallindrome") {
          this.setState({ current: to });
        } else if (to === "Fibonacci") {
          this.setState({ current: to });
        } else if (to === "Armstrong") {
          this.setState({ current: to });
        } else if (to === "Factorial") {
          this.setState({ current: to });
        }
          else {
            this.setState({ current: "nothing" });
        }
    }
    handleSubmit(event) {
        this.Choice();
        event.preventDefault();
    }


    render() {

        return (

            <div className = "part" >
            <h1> Choose one among options </h1> 
            <div id = "sel" value = { this.state.value }onChange = { this.handleChange }>
              <input type="radio" value="Pallindrome" name="number"/> Pallindrome
              <input type="radio" value="Fibonacci" name="number" /> Fibonacci
              <input type="radio" value="Armstrong" name="number" /> Armstrong
              <input type="radio" value="Factorial" name="number" /> Factorial
            </div>
              <button variant = "success" type = "button" onClick = { this.handleSubmit } > Choose </button> 
              <div className="choose">{"You have choosen  "+this.state.current}</div>
            </div>
        )
    }
}
export default Checkbox;