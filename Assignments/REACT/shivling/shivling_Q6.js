import React from 'react';
import ReactDOM from 'react-dom';
class Greeting extends React.Component
{
  render()
  {
    return (
      <div>
        <h1>Good Afternoon</h1>
        <h2>this is example of class component class component</h2>
      </div>
    );
  }
}
const comp_fun_element=<Greeting />
ReactDOM.render(<Greeting />,document.getElementById("root"));