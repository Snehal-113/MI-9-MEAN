import React from 'react';
import ReactDOM from 'react-dom';



ReactDOM.render(<h1>hello React!</h1>,document.getElementById('root'));

function Greeting(props){
  return(
    <div>
      <h2>Good afternoon, {props.name}</h2>
      <h2>function component</h2>
      <h2>preeti {props.title}</h2>
    </div>
  );
}

function Main_Comp(){
  return(
    <div>
      <Greeting name="Everyone" />
      <Greeting name="Yashasvi" />
      <Greeting name="Vishal" />
    </div>
  );
}

const comp_func_element = <Main_Comp />;
//const comp_func_element = <Greeting name="Everyone" title="tiwari"/>;
ReactDOM.render(comp_func_element,document.getElementById("root"));
//ReactDOM.render(<Greeting />,document.getElementById("root"));