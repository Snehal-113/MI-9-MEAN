import React from "react";
import ReactDom from "react-dom";
function ShowTime(){
        let getdate = prompt("Enter a Date");
        let loctime = new Date(getdate).toLocaleTimeString();
        let day=new Date(getdate).getDay();
        let date1=new Date(getdate).getDate();
        let month=new Date(getdate);
        let year=new Date(getdate).getFullYear();
        let d;
        switch(day){
            case 0:d="Sunday";
            break;
            case 1:d="Monday";
            break;
            case 2:d="Tuesday";
            break;
            case 3:d="Wednesday";
            break;
            case 4:d="Thursday";
            break;
            case 5:d="Friday";
            break;
            case 6:d="Saturday";
            break;
        }

        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let month1=months[month.getMonth()];
        return(
            <div>
                <h2>By Using Function Component and Date is taken form user</h2>
                <h3>Day : {d} </h3>
                <h3> Time: Now it's {loctime} O'Clock</h3>
                <h3>Date : {date1} </h3>
                <h3>Month : {month1} </h3>
                <h3>Year : {year} </h3>
            </div>
        );
    }

const comp_fun_element=<ShowTime />;
ReactDom.render(comp_fun_element,document.getElementById("root"));