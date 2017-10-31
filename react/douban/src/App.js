import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import List from './components/list/list';
import Content from './components/content/content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <List></List>
        <Content></Content>
      </div>
    );
  }
}

export default App;
