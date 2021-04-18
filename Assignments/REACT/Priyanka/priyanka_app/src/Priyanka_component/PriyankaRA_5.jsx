import React from 'react';
class Button extends React.Component{
    state = {
        color:""
    };
    red = (e)=>{
        this.setState({color:"You have clicked Red."});
    }
    blue = (e)=>{
        this.setState({color:"You have clicked Blue."});
    }
    render(){
        return(
            <div>
                <hr/>
                <button onClick={this.red} style={{backgroundColor:"red"}}>RED</button> 
                <button onClick={this.blue} style={{backgroundColor:"blue"}}>BLUE</button> <br /><br />
                <span>{this.state.color}</span>
            </div>
        );
    }
}
export default Button;
