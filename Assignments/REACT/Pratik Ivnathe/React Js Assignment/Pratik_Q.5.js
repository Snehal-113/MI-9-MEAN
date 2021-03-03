function Greeting(props) {
    return (
      <div>
        <h1>Good Afternoon ,{props.name}</h1>
        <p>para</p>
      </div>
    ); 
  }
  function Main() {
    return (
      <div>
        <Greeting name="Everyone" />
        <Greeting name="pratik" />
        <Greeting name="Ajay" />
  
      </div>
    );  
  }
  const comp_fun_element=<Main />
  ReactDOM.render(<Main />,document.getElementById("root"));