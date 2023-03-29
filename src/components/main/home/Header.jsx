import React, { Component } from "react";
import '../../../style/components/main/home/Header.css';

class Header extends Component{
    render(){
      return (
        <div className="Header">
          <h1>JAVA-STREET</h1>
          <div className="sub">Java journey to become a Java Master</div>
        </div>
      );
    }
  }

export default Header;