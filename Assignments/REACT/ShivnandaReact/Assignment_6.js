import React from "react";
import ReactDom from "react-dom";
function Show() {
  let loc=new Date().toLocaleTimeString();
   let locdate=new Date().toLocaleDateString();
   let day=new Date().getDay();
   let d;
   let year=new Date().getUTCFullYear();
   switch(day)
   {
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
       case 7:d="Sunday";
       break;
   }
   let loctime=new Date().toLocaleTimeString();
   let month=new Date().getMonth();
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
   const element = (
     <div>
         <h2> Method 1 : Using Function Component</h2>
         <h3>Date is :{locdate} </h3>
         <h3>Day is :{d} </h3>
         <h3>Time is :{loctime} O's clock</h3>
         <h3>Month is :{m}</h3>
         <h3>Year:{year}</h3>
     </div>
   );
   ReactDom.render(element,document.getElementById("root"));
 }
setInterval(Show,1000);