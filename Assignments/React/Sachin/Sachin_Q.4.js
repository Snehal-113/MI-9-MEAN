function Greeting(props) {
    return (
      <div>
        <h1>Good Morning ,{props.abc}</h1>
        <p>What are you Doing ,{props.name}</p>
      </div>
    ); 
  }
  const comp_fun_element=<Greeting abc="My Friend" name= "Ajay "/>
  ReactDOM.render(comp_fun_element,document.getElementById("root"));
  