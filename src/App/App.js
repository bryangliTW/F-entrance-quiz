import React, { Component } from 'react';
import './App.scss';
import Header from '../Components/Header/Header';
import Groups from '../Components/Groups/Groups';
import NameList from '../Components/NameList/NameList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Header />
        <Groups />
        <NameList />
      </div>
    );
  }
}

export default App;
