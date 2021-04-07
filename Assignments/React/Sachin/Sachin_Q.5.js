function Greeting(props) {
    return (
      <div>
        <h1>Good Morning ,{props.name}</h1>
        <p>This is Paragraph</p>
      </div>
    ); 
  }
  function Main() {
    return (
      <div>
        <Greeting name="Everyone" />
        <Greeting name="Sachin" />
        <Greeting name="Atul" />
  
      </div>
    );  
  }
  const comp_fun_element=<Main />
  ReactDOM.render(<Main />,document.getElementById("root"));