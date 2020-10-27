import React, { Component } from 'react';
import './App.scss';
import Header from '../Components/Header/Header';
import Groups from '../Components/Groups/Groups';
import NameList from '../Components/NameList/NameList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  setGroups = (groups) => {
    this.setState({ groups });
  };

  render() {
    return (
      <div data-testid="app" className="App">
        <Header setGroup={this.setGroups} />
        <Groups groups={this.state.groups} />
        <NameList />
      </div>
    );
  }
}

export default App;
