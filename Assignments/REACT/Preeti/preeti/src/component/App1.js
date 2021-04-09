import React from 'react';

class App1 extends React.Component{
    state={
        value:'',
        result: 'text field is blank'
    }
    handleText = (e) => {
        this.setState({value:e.target.value});
        e.preventDefault();
    }
    showResult = (e) => {
        this.setState({result:this.state.value});
        e.preventDefault();
    }

    render(){
        return(
            <div>
<input type="text" onChange={this.handleText}></input>
<button type="button" onClick={this.showResult}>Click Me</button>
<h3>{this.state.result}</h3>
            </div>
        );
    }
}
export default App1;