function Greeting(props) {
    return (
      <div>
        <h2>Good Afternoon, how are u{props.name}</h2>
        <p>this is paragraph ok</p>
      </div>
    ); 
  }
  const comp_fun_element=<Greeting name = "Ajay "/>
  ReactDOM.render(comp_fun_element, document.getElementById("root"));
  