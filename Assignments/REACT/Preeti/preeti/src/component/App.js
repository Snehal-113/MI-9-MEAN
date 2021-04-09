import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component{
  constructor(props){
    super(props);
      this.state = {
       value : 'Please select an option',
       result: ''
      };
  }
  handleProgram = (e) => {
    this.setState({value: e.target.value});
    e.preventDefault();
  }
  show =(e) => {
this.setState({result: this.state.value});
e.preventDefault();
  } 

 render(){
   
  return (
    <div>
      <form>
       <label for="prg" >Select: </label><br></br>
<input type="radio" id="Palindrome" name="prg" value="Palindrome" onChange={this.handleProgram}/>
<label for="Palindrome">Palindrome</label><br/>
<input type="radio" id="Fibonacci" name="prg" value="Fibonacci" onChange={this.handleProgram}/>
<label for="Fibonacci">Fibonacci</label><br/>
<input type="radio" id="Factorial" name="gender" value="Factorial" onChange={this.handleProgram}/>
<label for="Factorial">Factorial</label><br/>
<input type="radio" id="Armstrong" name="gender" value="Armstrong" onChange={this.handleProgram}/>
<label for="Armstrong">Armstrong</label>

  < br/>
  <button onClick={this.show}>Show</button>
  <br></br>
  <h3> {this.state.result}</h3>
  </form>
    </div>
  );
}
}


export default App;
