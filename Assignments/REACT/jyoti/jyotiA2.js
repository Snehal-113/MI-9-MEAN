import React from 'react';
import ReactDOM from 'react-dom';
function Greeting(props){
  return(
    <div>
      <h2>Good afternoon, {props.name}</h2>
      <h2> this is a function component</h2>
    </div>
  );
}
function Main_Comp(){
  return(
    <div>
      <Greeting name="Everyone" />
      <Greeting name="jyoti" />
      <Greeting name="pratik" />
    </div>
  );
}

const comp_func_element = <Main_Comp />;

ReactDOM.render(comp_func_element,document.getElementById("root"));