import React, { Component } from "react";

class LoginForm extends Component{
    render(){
      return (
        <div className="login">
          <h1>Hello Petter</h1>
          <div className="container">
            Keyword: <input type="text" name="keyword" />
            <button className="btn btn-success" >Once in a life time!!!!</button>
          </div>
        </div>
      );
    }
  }

export default LoginForm;