function Greeting(props) {
    return (
      <div>
        <h2>Good Afternoon,{props.name}</h2>
        <p>this is paragraph</p>
      </div>
    ); 
  }
  const comp_fun_element=<Greeting name = "Ajay "/>
  ReactDOM.render(<Greeting />, document.getElementById("root"));
  