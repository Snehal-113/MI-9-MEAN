function Time() {    
    let date=prompt("Enter Date");
    let inputD=new Date(date);
    let currentD=new Date();
    let day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var month=["january","february","March","April","May","June","july","August","september","Octomber","November","December"];
    if(inputD.setHours(0,0,0,0)==currentD.setHours(0,0,0,0));
    {
    return (
       <div>
         <h2>Today Date is {day[currentD.getDay()]} </h2>
         <h1>Month is {month[currentD.getMonth()]}</h1>
        <h1>Current Time {currentD.getTime()}</h1>
        <h1>Year {currentD.getFullYear()}</h1>
       </div>
     );
    }
   }
   const comp_fun_element=<Time />
   ReactDOM.render(<Time />, document.getElementById("root"));
  