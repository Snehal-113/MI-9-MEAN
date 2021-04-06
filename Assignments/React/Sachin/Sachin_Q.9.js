function Time() {
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days=["Sundaymonday","tuesday","Wednesday","Thursday","Friday","Saturday"];
    let tday=days[new Date().getDay()];
    let date=new Date().toLocaleDateString();
    let time=new Date().toLocaleTimeString();
    let month=months[new Date().getMonth()];
    let year=new Date().getFullYear();
    return (
      <div>
      <h1>Using Function Component</h1>
      <h1>Today day is {tday}</h1>
      <h1>Today date is {date}</h1>
      <h1>Today Time {time}</h1>
      <h1>Month {month}</h1>
      <h1>year {year}</h1>
      </div>
    );
  }
  const comp_fun=<Time />
  ReactDOM.render(<Time /> ,document.getElementById("root"));*/
  