import React from "react";
class Radio extends React.Component {
    state = {
      rad: ["Pallindrome", "Fibonacci", "Factorial", "Armstrong"],
      selectedValue: ""
    };
    clickedMe = (event) => {
      console.log(event.target.value);
      this.setState({ selectedValue: event.target.value });
    };
    show = (event) => {
      var str =
        this.state.selectedValue === ""
          ? "Select an option"
          : this.state.selectedValue;
      console.log((event.target.parentNode.childNodes[6].innerHTML = str));
    };
    render() {
      return (
        <div>
            {this.state.rad.map((rad) => (
            <span>
              <input
                type="radio"
                value={rad}
                name="something"
                key={rad}
                onClick={this.clickedMe}
            />
            <label>{rad}</label>
            <br />
            </span>
            ))}
            <button className="btn btn-secondary" onClick={this.show}>Show</button>
            <br />
            <span></span>
            <hr />
        </div>
      );
    }
}
export default Radio;
  
  
  