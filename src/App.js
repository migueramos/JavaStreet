import React, { Component } from 'react';
import LoginForm from './components/main/login/LoginForm';
import Header from './components/main/home/Header';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Header></Header>
        I want to be the very best, Like no one ever was, To catch them is my real test, To train them is my cause
        <LoginForm></LoginForm>
      </div>
    );
  }
}

export default App;