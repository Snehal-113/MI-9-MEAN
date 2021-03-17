import React from "react";
import ReactDom from "react-dom";

function Show() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.getFullYear();  
       let loc=new Date().toLocaleTimeString();
        let locdate=new Date().toLocaleDateString();
        let day=new Date().getDay();
        let d;
        let year=new Date().getUTCFullYear();
        
        switch(day)
        {
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
            case 7:d="sunday";
            break;
        }
        let loctime=new Date().toLocaleTimeString();

        let month=new Date().getMonth()+1;
        let m;
        switch(month)
        {
            case 1:m="January";
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
              <h2>Using function component</h2>
              <h3>Date is:{locdate} </h3>
              <h3>Day is:{d} </h3>
              <h3>Time is:{loctime} O's clock</h3>
              <h3>month is:{m}</h3>
        <h3>year:{year}</h3>
          </div>
        );
  ReactDom.render(element,document.getElementById("root"));
        }
  setInterval(Show,1000);

