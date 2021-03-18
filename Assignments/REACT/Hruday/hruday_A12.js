import React from "react";
import ReactDom from "react-dom";

class ShowTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount(){
    this.id = setInterval(()=>this.setTimer(),1000); 

  }
  // componentWillMount(){
  //   clearInterval(this.id);
  // }
  setTimer(){
    this.setState({date:new Date()});
  }

  render() {
    const time = this.state.date.toLocaleTimeString();

    return (
      <div>
        <h1> The Time is <i>{time}</i></h1>
      </div>
    );
  }
}

const currentTime = <ShowTime />;

ReactDom.render(currentTime, document.getElementById("root"));
// setInterval(ShowTime,1000);