import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
class EventClass extends React.Component
   {
     constructor(props)
     {
       super(props);
       this.state={toggle:true};
       this.toggleFun=this.toggleFun.bind(this);
     }
     toggleFun()
     {
       console.log(" clicked here");
       this.setState(preState=>({toggle:!preState.toggle}));
     }
     
     render()
     {
       
      return (
       <button onClick={this.toggleFun}>{this.state.toggle? 'ON':'OFF'}</button>
       );
 
     }
   }
    ReactDOM.render(<EventClass /> ,document.getElementById("root"));
 