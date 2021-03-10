import React from "react";
import ReactDom from "react-dom";
var getdate=prompt("Enter the date");
function Show() {
  //var getdate=prompt("Enter the date");
      let locdate=new Date(getdate).toLocaleDateString();
      let day=new Date(getdate).getDay();
      let d;
      let year=new Date(getdate).getUTCFullYear();
      switch(day)
      {
          case 0:d="sunday";
          break;
          case 1:d="monday";
          break;
          case 2:d="Tuesday";
          break;
          case 3:d="wednesday";
          break;
          case 4:d="thirsday";
          break;
          case 5:d="friday";
          break;
          case 6:d="saturday";
          break;
      }
      let month=new Date(getdate).getMonth()+1;
      let m;
      switch(month)
      {
          case 0:m="January";
          break;
          case 2:m="February";
          break;
          case 3:m="March";
          break;
          case 4:m="April";
          break;
          case 5:m="May";
          break;
          case 6:m="June";
          break;
          case 7:m="July";
          break;
          case 8:m="August";
          break;
          case 9:m="september";
          break;
          case 10:m="October";
          break;
          case 11:m="November";
          break;
          case 12:m="December";
          break;
      }
      const element = (
        <div>
            <h2> Method 1 :Using function component</h2>
            <h3>Date is:{locdate} </h3>
            <h3>Day is:{d} </h3>
            <h3>month is:{m}</h3>
      <h3>year:{year}</h3>
        </div>
      );
ReactDom.render(element,document.getElementById("root"));
}
setInterval(Show,1000);