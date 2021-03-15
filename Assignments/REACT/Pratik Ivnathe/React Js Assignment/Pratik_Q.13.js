import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
class EventClass extends React.Component
  {
    func1()
    {
      console.log("hello my friend");
      alert("click here")
    }
    render()
    {
      
     return (
      <button onClick={this.func1()}>click</button>
      );

    }
  }
   ReactDOM.render(<EventClass /> ,document.getElementById("root"));


  