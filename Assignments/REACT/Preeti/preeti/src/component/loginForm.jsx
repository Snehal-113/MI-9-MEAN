import React from 'react';
import ReactDOM from 'react-dom';

export default class loginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
        };
    }
    handleInput = (e) => {
        this.setState({username: e.target.value});
        if(this.state.username.match("Admin"|"admin")){
            alert("You can login as an admin");
        }
    }
    handlePassword = (e) => {
        this.setState({password: e.target.value});
    }
    submit= (e) => {
        alert("You can login now");
    }
    render(){
        const {username,password} =this.state;
        return(
            <form>
<h1>Login Form</h1>
<label>Username: </label>
<input type="text" value={username} onChange={this.handleInput}></input><br /><br />
<label>Password: </label>
<input type="password" value={password} onChange={this.handlePassword}></input><br/>
<button type="submit" onClick={this.submit}>Submit</button>
</form>
        );
    }
}

