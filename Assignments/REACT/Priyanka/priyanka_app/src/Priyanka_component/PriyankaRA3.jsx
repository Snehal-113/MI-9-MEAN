import React from "react";
class LoginPage extends React.Component {
    state = { userID: "", pswd: "" };
    userDataChange = (event) => {
      this.setState({ userID: event.target.value });
    };
    pswDataChange = (event) => {
      this.setState({ pswd: event.target.value });
    };
    loginMe = () => {
      var msg =
        this.state.userID === "" || this.state.pswd === ""
          ? "Credentials required for login!"
          : "Logged in as " + this.state.userID;
      console.log(this.state.userID, this.state.pswd);
      alert(msg);
    };
    render() {
      return (
        <div className="container">
          <div className="inside-container">
            <form onSubmit={this.loginMe}>
              <h2 className="text-center">Login</h2>
              <label className="form-label m-3">User ID :</label>
              <input
                type="text"
                className="form-control"
                onChange={this.userDataChange}
              />
              <label className="form-label m-3">Password :</label>
              <input
                type="password"
                className="form-control"
                onChange={this.pswDataChange}
              />
              <button type="submit" className="btn btn-primary m-3">
                Login
              </button>
              <hr />
            </form>
          </div>
        </div>
      );
    }
  }export default LoginPage;

  