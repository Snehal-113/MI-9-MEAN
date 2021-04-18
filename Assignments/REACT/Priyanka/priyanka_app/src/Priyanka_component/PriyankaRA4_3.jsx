import React from "react";
class Priyanka extends React.Component {
    state = {
      selectedValue: ""
    };
    clickedMe = (event) => {
      console.log(event.target.value);
      this.setState({ selectedValue: event.target.value });
    };
    show = (event) => {
      var str =
        this.state.selectedValue === ""
          ? "The field is blank!"
          : this.state.selectedValue;
      console.log((event.target.parentNode.childNodes[3].innerHTML = str));
    };
    render() {
      return (
        <div>
          <span>
            <input
              type="text"
              className="form-control"
              name="something"
              onChange={this.clickedMe}
            />
            <br />
          </span>
          <button className="btn btn-secondary" onClick={this.show}>
            Show
          </button>
          <br />
          <span></span>
          <hr />
        </div>
      );
    }
  }export default Priyanka;