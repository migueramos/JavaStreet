import React, { Component } from 'react';
import StreetApp from './components/main/StreetApp';
import './App.css';
import './bootstrap.css'

class App extends Component{
  render(){
    return (
      <div className="App">
        <StreetApp></StreetApp>
      </div>
    );
  }
}

export default App;