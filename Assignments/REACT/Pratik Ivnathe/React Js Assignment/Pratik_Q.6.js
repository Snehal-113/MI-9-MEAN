class Greeting extends React.Component
{
  render()
  {
    return (
      <div>
        <h1>Good Afternoon</h1>
        <h2>My friend this is class component</h2>
      </div>
    );
  }
}
const comp_fun_element=<Greeting />
ReactDOM.render(<Greeting />,document.getElementById("root"));
