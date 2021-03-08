import React from "react";
import ReactDom from "react-dom";
   function ShowTime(props){
      let loctime =props.date.toLocaleTimeString();
      return(
         <div>
            <h2>Hello Evryone</h2>
            <h3>Now it is{loctime} O'clock</h3>
            </div>      
         );
   }
   function GetDate(){
      const comp_fun_element=<ShowTime />;
      ReactDom.render(comp_fun_element,document.getElementById("root"));
  }
  setInterval(GetDate,1000);