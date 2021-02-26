import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

// this is function initialize example//

function Shiv(){
  return( 
    <div>
      <h3> hiii  how are u </h3>
      <p>is it</p>
    </div>
  )
    
}
  const comp_fun_element=<Shiv />
  ReactDOM.render(<Shiv/>, document.getElementById("root"));