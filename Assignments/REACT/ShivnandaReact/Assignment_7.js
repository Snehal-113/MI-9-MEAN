import React from "react";
import ReactDom from "react-dom";
class Show extends React.Component {
  constructor() {
     super();
     this.state=new Date();
 }
  render() {
      let locdate=this.state.toLocaleDateString();
      let day=this.state.getDay();
      let d;
      let year=this.state.getUTCFullYear();
      switch(day)
      {
          case 0:d="Sunday";
          break;
          case 1:d="Monday";
          break;
          case 2:d="Tuesday";
          break;
          case 3:d="Wednesday";
          break;
          case 4:d="Thirsday";
          break;
          case 5:d="Friday";
          break;
          case 6:d="Saturday";
          break;
      }
      let loctime=this.state.toLocaleTimeString();
      let month=this.state.getMonth();
      let m;
      switch(month)
      {
          case 0:m="January";
          break;
          case 1:m="February";
          break;
          case 2:m="March";
          break;
          case 3:m="April";
          break;
          case 4:m="May";
          break;
          case 5:m="June";
          break;
          case 6:m="July";
          break;
          case 7:m="August";
          break;
          case 8:m="september";
          break;
          case 9:m="October";
          break;
          case 10:m="November";
          break;
          case 11:m="December";
          break;
      }
      return (
        <div>
            <h2> Method 2 : Using Class Component</h2>
            <h3>Date is:{locdate} </h3>
            <h3>Day is:{d} </h3>
            <h3>Time is:{loctime} O's clock</h3>
            <h3>Month is:{m}</h3>
            <h3>Year:{year}</h3>
        </div>
      );
    }
  }
    const element=<Show/>;
    ReactDom.render(element,document.getElementById("root"));
  