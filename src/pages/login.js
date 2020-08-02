import React, { Component } from "react";

class login extends Component {
  render() {
    return (
      <div className="bg-login">
        <form className="login-form">
          <h1>Login Page</h1>
          <div class="txtb">
            <input type="text"></input>
            <span data-placeholder="Username"></span>
          </div>
          <div class="txtb">
            <input type="password"></input>
            <span data-placeholder="Password"></span>
          </div>
          <input type="submit" class="logbtn" value="Login"></input>
        </form>
      </div>
    );
  }
}

export default login;
